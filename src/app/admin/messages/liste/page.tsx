'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { toast } from 'react-toastify'
import Pusher, { Channel } from 'pusher-js'
import { useSession } from 'next-auth/react'
import Linkify from 'linkify-react'
import Link from 'next/link'
import { format, isToday, isYesterday } from 'date-fns'
import { fr } from 'date-fns/locale'
import {
  PaperAirplaneIcon,
  FaceSmileIcon,
  PaperClipIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  ArrowLeftIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/solid'

// ── Constantes ────────────────────────────────────────────────────────────────
const EMOJIS = [
  '😊','😂','❤️','👍','🎉','🔥','✅','📌','🙏','👋',
  '💪','🤝','📎','📅','💡','⚠️','✔️','📩','🚀','😎',
  '😅','🤔','👀','💼','📊','🎯','⏳','🔑','📋','💬',
]

const AVATAR_COLORS = [
  'bg-violet-600','bg-blue-600','bg-emerald-600','bg-orange-500',
  'bg-pink-600','bg-teal-600','bg-red-600','bg-indigo-600',
  'bg-yellow-500','bg-cyan-600',
]

// ── Helpers ───────────────────────────────────────────────────────────────────
function getAvatarColor(nom: string): string {
  const hash = nom.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  return AVATAR_COLORS[hash % AVATAR_COLORS.length]
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function formatMsgTime(iso: string): string {
  const d = new Date(iso)
  if (isToday(d))     return format(d, 'HH:mm')
  if (isYesterday(d)) return `Hier ${format(d, 'HH:mm')}`
  return format(d, "dd/MM 'à' HH:mm", { locale: fr })
}

function formatSeparatorDate(iso: string): string {
  const d = new Date(iso)
  if (isToday(d))     return "Aujourd'hui"
  if (isYesterday(d)) return 'Hier'
  return format(d, 'EEEE dd MMMM yyyy', { locale: fr })
}

function isImageUrl(url: string): boolean {
  return /\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(url)
}

function isPlanningMessage(contenu: string, planning?: PlanningMini | null): boolean {
  return !!planning || /\/planning\/vue\/\d+/.test(contenu)
}

function getPlanningHref(contenu: string, planning?: PlanningMini | null): string | null {
  if (planning) return `/admin/planning/vue/${planning.id}?readonly=1`
  const match = contenu.match(/\/planning\/vue\/(\d+)/)
  if (match) return `/admin/planning/vue/${match[1]}?readonly=1`
  const urlMatch = contenu.match(/(https?:\/\/[^\s]+\/planning\/vue\/[^\s]*)/)
  return urlMatch?.[1] ?? null
}

// ── Types ─────────────────────────────────────────────────────────────────────
type Utilisateur = {
  id: number
  nom: string
  prenom?: string
  unreadCount?: number
}

type PlanningMini = { id: number; titre: string; slug?: string }

type Message = {
  id: number
  contenu: string
  pieceJointeUrl?: string | null
  createdAt: string
  vu: boolean
  vuAt?: string | null
  sender: Utilisateur
  receiver: Utilisateur
  planning?: PlanningMini | null
  tempId?: string
  sending?: boolean
  failed?: boolean
}

type SeparatorItem = { type: 'separator'; date: string }
type FeedItem = Message | SeparatorItem

// ── Sous-composants ───────────────────────────────────────────────────────────
function Avatar({ nom, size = 'md' }: { nom: string; size?: 'sm' | 'md' | 'lg' }) {
  const color = getAvatarColor(nom)
  const sz =
    size === 'sm' ? 'w-7 h-7 text-xs' :
    size === 'lg' ? 'w-12 h-12 text-base' :
                    'w-9 h-9 text-sm'
  return (
    <div className={`${color} ${sz} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 select-none`}>
      {nom.charAt(0).toUpperCase()}
    </div>
  )
}

function DateSeparator({ date }: { date: string }) {
  return (
    <div className="flex items-center gap-3 my-3">
      <div className="flex-1 h-px bg-gray-200" />
      <span className="text-[11px] text-gray-400 font-medium px-3 bg-slate-50 rounded-full py-0.5 border border-gray-200">
        {formatSeparatorDate(date)}
      </span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  )
}

function PlanningCard({ contenu, planning }: { contenu: string; planning?: PlanningMini | null }) {
  const href = getPlanningHref(contenu, planning)
  return (
    <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3 max-w-[260px]">
      <div className="flex items-center gap-2 mb-1.5">
        <CalendarDaysIcon className="w-5 h-5 text-indigo-500 flex-shrink-0" />
        <span className="text-xs font-semibold text-indigo-700">Planning partagé</span>
      </div>
      {planning?.titre && (
        <p className="text-xs text-gray-700 mb-1.5 font-medium">{planning.titre}</p>
      )}
      <p className="text-xs text-gray-500 mb-2.5 line-clamp-2 break-all">{contenu}</p>
      {href && (
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-xs bg-indigo-600 text-white rounded-lg py-1.5 hover:bg-indigo-700 transition-colors font-medium"
        >
          Voir le planning →
        </Link>
      )}
    </div>
  )
}

function ReadStatus({
  isSender, vu, vuAt, sending,
}: {
  isSender: boolean; vu: boolean; vuAt?: string | null; sending?: boolean
}) {
  if (!isSender) return null

  // Envoi en cours
  if (sending) return <span className="text-[10px] text-gray-300 animate-pulse">⏳</span>

  // Lu — avec horodatage exact
  if (vu && vuAt) {
    return (
      <span className="text-[10px] text-indigo-400 flex items-center gap-0.5 font-medium">
        <CheckIcon className="w-2.5 h-2.5 inline" />
        <CheckIcon className="w-2.5 h-2.5 inline -ml-1.5" />
        <span className="ml-1">Vu à {format(new Date(vuAt), 'HH:mm')}</span>
      </span>
    )
  }

  // Lu — sans horodatage (marqué via GET, vuAt pas encore défini)
  if (vu) {
    return (
      <span className="text-[10px] text-indigo-400 flex items-center gap-0.5">
        <CheckIcon className="w-2.5 h-2.5 inline" />
        <CheckIcon className="w-2.5 h-2.5 inline -ml-1.5" />
        <span className="ml-1">Lu</span>
      </span>
    )
  }

  // Envoyé, pas encore lu — simple coche grise
  return (
    <span className="text-[10px] text-gray-400 flex items-center gap-0.5">
      <CheckIcon className="w-2.5 h-2.5 inline" />
      <span className="ml-0.5">Envoyé</span>
    </span>
  )
}

function EmptyState({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <p className="text-slate-600 font-semibold">{title}</p>
      <p className="text-slate-400 text-sm mt-1 max-w-xs leading-relaxed">{subtitle}</p>
    </div>
  )
}

// ── Composant principal ───────────────────────────────────────────────────────
export default function ChatPage() {
  const { data: session } = useSession()
  const userId = session?.user?.id ? parseInt(session.user.id) : null

  const [utilisateurs, setUtilisateurs]     = useState<Utilisateur[]>([])
  const [search, setSearch]                 = useState('')
  const [loading, setLoading]               = useState(false)
  const [conversationWith, setConversationWith] = useState<number | null>(null)
  const [messages, setMessages]             = useState<Message[]>([])
  const [messageInput, setMessageInput]     = useState('')
  const [sending, setSending]               = useState(false)
  const [showEmojis, setShowEmojis]         = useState(false)
  const [filePreview, setFilePreview]       = useState<{ file: File; preview: string | null } | null>(null)
  const [mobileView, setMobileView]         = useState<'list' | 'chat'>('list')

  const pusherRef          = useRef<Pusher | null>(null)
  const convChannelRef     = useRef<Channel | null>(null)
  const userChannelRef     = useRef<Channel | null>(null)
  const messagesEndRef     = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const textareaRef        = useRef<HTMLTextAreaElement>(null)
  const fileInputRef       = useRef<HTMLInputElement>(null)

  // Scroll tracking (refs pour éviter les dépendances dans useEffect)
  const isAtBottomRef    = useRef(true)
  const prevLengthRef    = useRef(0)
  const isInitialLoadRef = useRef(true)
  const justSentRef      = useRef(false)

  const [newMsgCount, setNewMsgCount] = useState(0)

  // Scroll vers le bas
  const scrollToBottom = useCallback((behavior: ScrollBehavior = 'smooth') => {
    messagesEndRef.current?.scrollIntoView({ behavior })
    setNewMsgCount(0)
  }, [])

  // Détection position scroll
  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current
    if (!el) return
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 150
    isAtBottomRef.current = atBottom
    if (atBottom) setNewMsgCount(0)
  }, [])

  // Scroll intelligent
  useEffect(() => {
    const len  = messages.length
    const prev = prevLengthRef.current

    if (isInitialLoadRef.current && len > 0) {
      scrollToBottom('auto')
      isInitialLoadRef.current = false
      prevLengthRef.current = len
      return
    }

    if (len <= prev) {
      prevLengthRef.current = len
      return
    }

    const isMine = justSentRef.current ||
      messages.slice(prev).some(m => userId !== null && m.sender.id === userId)

    if (isMine) {
      scrollToBottom('smooth')
      justSentRef.current = false
    } else if (isAtBottomRef.current) {
      scrollToBottom('smooth')
    } else {
      setNewMsgCount(c => c + (len - prev))
    }

    prevLengthRef.current = len
  }, [messages, userId, scrollToBottom])

  // Réinitialiser au changement de conversation
  useEffect(() => {
    isInitialLoadRef.current = true
    prevLengthRef.current    = 0
    isAtBottomRef.current    = true
    setNewMsgCount(0)
  }, [conversationWith])

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`
    }
  }, [messageInput])

  const fetchUtilisateurs = useCallback(async () => {
    setLoading(true)
    try {
      const res  = await fetch('/api/utilisateurs?includeUnread=true')
      const data = await res.json()
      setUtilisateurs(Array.isArray(data?.data) ? data.data : [])
    } catch {
      toast.error('Erreur lors du chargement des utilisateurs')
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchMessages = useCallback(async (convWith: number) => {
    try {
      const res  = await fetch(`/api/messages?conversationWith=${convWith}&limit=100`)
      const data = await res.json()
      setMessages(
        (data.data ?? []).sort(
          (a: Message, b: Message) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )
      )
    } catch {
      toast.error('Erreur lors du chargement des messages')
    }
  }, [])

  useEffect(() => {
    if (!userId) return
    if (!process.env.NEXT_PUBLIC_PUSHER_KEY || !process.env.NEXT_PUBLIC_PUSHER_CLUSTER) return

    pusherRef.current = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
    })

    userChannelRef.current = pusherRef.current.subscribe(`user-${userId}`)
    userChannelRef.current.bind('new-message', () => { fetchUtilisateurs() })

    return () => {
      userChannelRef.current?.unbind_all()
      pusherRef.current?.unsubscribe(`user-${userId}`)
      convChannelRef.current?.unbind_all()
      if (convChannelRef.current) pusherRef.current?.unsubscribe(convChannelRef.current.name)
      pusherRef.current?.disconnect()
    }
  }, [userId, fetchUtilisateurs])

  useEffect(() => {
    if (!userId || !pusherRef.current) return

    convChannelRef.current?.unbind_all()
    if (convChannelRef.current) {
      pusherRef.current.unsubscribe(convChannelRef.current.name)
      convChannelRef.current = null
    }

    if (!conversationWith) { setMessages([]); return }

    const ch = `conversation-${Math.min(userId, conversationWith)}-${Math.max(userId, conversationWith)}`
    convChannelRef.current = pusherRef.current.subscribe(ch)

    convChannelRef.current.bind('new-message', (data: { message: Message; tempId?: string }) => {
      setMessages(prev => {
        if (data.tempId) {
          return prev
            .map(m => m.tempId === data.tempId ? { ...data.message } : m)
            .filter(m => m.id !== -1 || !m.tempId)
        }
        if (prev.find(m => m.id === data.message.id)) return prev
        return [...prev, data.message].sort(
          (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )
      })
      if (data.message.sender.id !== userId) {
        fetchUtilisateurs()
        toast.info(`💬 ${data.message.sender.nom} : ${data.message.contenu.slice(0, 50)}`, { autoClose: 3000 })
      }
    })

    convChannelRef.current.bind('message-deleted', ({ messageId }: { messageId: number }) => {
      setMessages(prev => prev.filter(m => m.id !== messageId))
    })

    convChannelRef.current.bind('messages-read', (data: { updatedMessages: { id: number; vuAt: string }[] }) => {
      setMessages(prev => prev.map(m => {
        const up = data.updatedMessages.find(u => u.id === m.id)
        return up ? { ...m, vu: true, vuAt: up.vuAt } : m
      }))
    })

    fetchMessages(conversationWith)
  }, [conversationWith, userId, fetchMessages, fetchUtilisateurs])

  useEffect(() => { fetchUtilisateurs() }, [fetchUtilisateurs])

  useEffect(() => {
    if (!userId || !conversationWith) return
    const unreadIds = messages.filter(m => !m.vu && m.receiver?.id === userId).map(m => m.id)
    if (!unreadIds.length) return
    fetch('/api/messages', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messageIds: unreadIds, action: 'mark-as-read' }),
    }).then(() => {
      setUtilisateurs(prev =>
        prev.map(u => u.id === conversationWith ? { ...u, unreadCount: 0 } : u)
      )
    }).catch(console.error)
  }, [messages, userId, conversationWith])

  useEffect(() => {
    const id = setInterval(() => {
      setMessages(prev =>
        prev.filter(m => !(m.tempId && m.id === -1 && Date.now() - new Date(m.createdAt).getTime() > 8000))
      )
    }, 10000)
    return () => clearInterval(id)
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) { toast.error('Fichier trop volumineux (max 5 Mo)'); return }
    const preview = file.type.startsWith('image/') ? URL.createObjectURL(file) : null
    setFilePreview({ file, preview })
    e.target.value = ''
  }

  const sendMessage = async () => {
    if ((!messageInput.trim() && !filePreview) || !conversationWith || !userId) return
    setSending(true)
    setShowEmojis(false)

    const tempId   = `temp_${Date.now()}_${userId}`
    const content  = messageInput
    const fileCopy = filePreview

    const tempMsg: Message = {
      id: -1, tempId,
      contenu: content,
      pieceJointeUrl: fileCopy?.preview ?? null,
      createdAt: new Date().toISOString(),
      vu: false,
      sender: { id: userId, nom: session?.user?.nom || 'Vous' },
      receiver: utilisateurs.find(u => u.id === conversationWith)!,
      sending: true,
    }

    justSentRef.current = true
    setMessages(prev => [...prev, tempMsg])
    setMessageInput('')
    setFilePreview(null)

    try {
      const fd = new FormData()
      fd.append('contenu', content)
      fd.append('receiverId', conversationWith.toString())
      fd.append('tempId', tempId)
      if (fileCopy?.file) fd.append('pieceJointe', fileCopy.file)

      const res = await fetch('/api/messages', { method: 'POST', body: fd })
      if (!res.ok) throw new Error('Erreur envoi')
    } catch {
      setMessages(prev =>
        prev.map(m => m.tempId === tempId ? { ...m, sending: false, failed: true } : m)
      )
      toast.error('Échec de l\'envoi ❌')
    } finally {
      setSending(false)
    }
  }

  const handleDeleteMessage = async (messageId: number) => {
    if (!confirm('Supprimer ce message ?')) return
    try {
      const res = await fetch(`/api/messages?messageId=${messageId}`, { method: 'DELETE' })
      if (!res.ok) throw new Error()
      setMessages(prev => prev.filter(m => m.id !== messageId))
    } catch {
      toast.error('Erreur lors de la suppression')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  const insertEmoji = (emoji: string) => {
    setMessageInput(p => p + emoji)
    textareaRef.current?.focus()
    setShowEmojis(false)
  }

  const openConversation = (id: number) => {
    setConversationWith(id)
    setMobileView('chat')
  }

  const feed: FeedItem[] = messages.reduce<FeedItem[]>((acc, msg, i) => {
    const prev = messages[i - 1]
    if (!prev || !isSameDay(new Date(prev.createdAt), new Date(msg.createdAt))) {
      acc.push({ type: 'separator', date: msg.createdAt })
    }
    acc.push(msg)
    return acc
  }, [])

  const activeUser    = utilisateurs.find(u => u.id === conversationWith)
  const filteredUsers = utilisateurs.filter(u =>
    u.id !== userId &&
    `${u.nom} ${u.prenom ?? ''}`.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden font-sans">

      {/* ── SIDEBAR ──────────────────────────────────────────────────────────── */}
      <aside className={`
        flex flex-col w-80 bg-slate-900 text-white flex-shrink-0
        ${mobileView === 'chat' ? 'hidden md:flex' : 'flex'}
      `}>
        <div className="p-4 border-b border-slate-700/60 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-base font-bold tracking-tight">Messagerie</h1>
            <Link
              href="/admin/dashboard"
              className="text-slate-400 hover:text-white text-xs flex items-center gap-1 transition-colors"
            >
              <ArrowLeftIcon className="w-3.5 h-3.5" />
              Dashboard
            </Link>
          </div>
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Rechercher un utilisateur…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-2">
          {loading ? (
            <div className="p-4 space-y-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center gap-3 animate-pulse">
                  <div className="w-9 h-9 rounded-full bg-slate-700 flex-shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-3 bg-slate-700 rounded w-2/3" />
                    <div className="h-2 bg-slate-800 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="p-6 text-center text-slate-500 text-sm">
              {search ? 'Aucun résultat' : 'Aucun utilisateur disponible'}
            </div>
          ) : (
            <ul className="px-2 space-y-0.5">
              {filteredUsers.map(user => (
                <li
                  key={user.id}
                  onClick={() => openConversation(user.id)}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-150
                    ${conversationWith === user.id
                      ? 'bg-indigo-600 shadow-md shadow-indigo-900/30'
                      : 'hover:bg-slate-800'}
                  `}
                >
                  <Avatar nom={user.nom} size="md" />
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate leading-tight ${conversationWith === user.id ? 'text-white' : 'text-slate-200'}`}>
                      {user.prenom ? `${user.prenom} ${user.nom}` : user.nom}
                    </p>
                  </div>
                  {(user.unreadCount ?? 0) > 0 && (
                    <span className="bg-red-500 text-white text-[11px] font-bold min-w-[20px] h-5 px-1.5 rounded-full flex items-center justify-center flex-shrink-0">
                      {user.unreadCount}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>

      {/* ── ZONE CHAT ─────────────────────────────────────────────────────────── */}
      <section className={`
        relative flex flex-col flex-1 min-w-0
        ${mobileView === 'list' && !conversationWith ? 'hidden md:flex' : 'flex'}
      `}>
        <header className="bg-white border-b border-gray-100 px-5 py-3 flex items-center gap-3 shadow-sm min-h-[64px] flex-shrink-0">
          <button
            onClick={() => setMobileView('list')}
            className="md:hidden p-1.5 -ml-1 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          {activeUser ? (
            <>
              <Avatar nom={activeUser.nom} size="md" />
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-gray-900 leading-tight truncate">
                  {activeUser.prenom ? `${activeUser.prenom} ${activeUser.nom}` : activeUser.nom}
                </h2>
              </div>
            </>
          ) : (
            <span className="text-gray-400 text-sm">Sélectionnez une conversation</span>
          )}
        </header>

        <main
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-4 md:px-6 py-4 space-y-0.5 bg-slate-50"
        >
          {!conversationWith ? (
            <EmptyState
              icon={<PaperAirplaneIcon className="w-8 h-8 text-slate-300" />}
              title="Aucune conversation sélectionnée"
              subtitle="Choisissez un utilisateur à gauche pour démarrer une conversation"
            />
          ) : messages.length === 0 ? (
            <EmptyState
              icon={
                <svg className="w-8 h-8 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              }
              title="Aucun message"
              subtitle="Envoyez le premier message pour démarrer la conversation !"
            />
          ) : (
            <>
              {feed.map((item, i) => {
                if ('type' in item && item.type === 'separator') {
                  return <DateSeparator key={`sep-${i}`} date={item.date} />
                }
                const msg        = item as Message
                const isSender   = userId !== null && msg.sender.id === userId
                const isPlanning = isPlanningMessage(msg.contenu, msg.planning)

                return (
                  <div
                    key={msg.tempId || msg.id}
                    className={`flex items-end gap-2 group mt-1 ${isSender ? 'flex-row-reverse' : ''}`}
                  >
                    {!isSender && <Avatar nom={msg.sender.nom} size="sm" />}

                    <div className={`flex flex-col ${isSender ? 'items-end' : 'items-start'} max-w-[72%] md:max-w-[62%]`}>
                      <div
                        className={`
                          relative px-4 py-2.5 rounded-2xl text-sm leading-relaxed break-words whitespace-pre-wrap shadow-sm
                          ${isSender
                            ? 'bg-indigo-600 text-white rounded-br-sm'
                            : 'bg-white text-gray-800 border border-gray-100 rounded-bl-sm'}
                          ${msg.sending ? 'opacity-60' : ''}
                          ${msg.failed  ? '!bg-red-50 !text-red-700 !border-red-200' : ''}
                        `}
                      >
                        {msg.pieceJointeUrl && isImageUrl(msg.pieceJointeUrl) && (
                          <a href={msg.pieceJointeUrl} target="_blank" rel="noopener noreferrer" className="block mb-2">
                            <img src={msg.pieceJointeUrl} alt="pièce jointe" className="max-w-full rounded-xl max-h-52 object-cover" />
                          </a>
                        )}
                        {msg.pieceJointeUrl && !isImageUrl(msg.pieceJointeUrl) && (
                          <a
                            href={msg.pieceJointeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-1.5 mb-2 text-xs underline ${isSender ? 'text-indigo-200 hover:text-white' : 'text-indigo-600 hover:text-indigo-800'}`}
                          >
                            <PaperClipIcon className="w-4 h-4 flex-shrink-0" />
                            Pièce jointe
                          </a>
                        )}

                        {isPlanning ? (
                          <PlanningCard contenu={msg.contenu} planning={msg.planning} />
                        ) : (
                          <>
                            <Linkify
                              options={{
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                className: isSender
                                  ? 'underline text-indigo-200 hover:text-white'
                                  : 'underline text-indigo-600 hover:text-indigo-800',
                              }}
                            >
                              {msg.contenu}
                            </Linkify>
                            {msg.failed && <span className="ml-2 text-xs">⚠️ Non envoyé</span>}
                          </>
                        )}

                        {isSender && !msg.sending && msg.id !== -1 && (
                          <button
                            onClick={() => handleDeleteMessage(msg.id)}
                            className="absolute -top-2 -right-2 hidden group-hover:flex w-5 h-5 bg-red-500 hover:bg-red-600 text-white rounded-full items-center justify-center shadow-md transition-colors"
                            title="Supprimer ce message"
                          >
                            <XMarkIcon className="w-3 h-3" />
                          </button>
                        )}
                      </div>

                      <div className={`flex items-center gap-1 mt-0.5 px-1 ${isSender ? 'flex-row-reverse' : ''}`}>
                        <span className="text-[10px] text-gray-400">{formatMsgTime(msg.createdAt)}</span>
                        <ReadStatus isSender={isSender} vu={msg.vu} vuAt={msg.vuAt} sending={msg.sending} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </>
          )}
          <div ref={messagesEndRef} />
        </main>

        {/* Badge flottant "nouveaux messages" */}
        {newMsgCount > 0 && (
          <div className="absolute bottom-20 inset-x-0 flex justify-center z-10 pointer-events-none">
            <button
              onClick={() => scrollToBottom('smooth')}
              className="pointer-events-auto bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-colors"
            >
              <ArrowDownIcon className="w-3.5 h-3.5" />
              {newMsgCount} nouveau{newMsgCount > 1 ? 'x' : ''} message{newMsgCount > 1 ? 's' : ''}
            </button>
          </div>
        )}

        {conversationWith && (
          <footer className="bg-white border-t border-gray-100 px-4 py-3 shadow-sm flex-shrink-0">
            {filePreview && (
              <div className="mb-2 flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2">
                {filePreview.preview ? (
                  <img src={filePreview.preview} alt="preview" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                ) : (
                  <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PaperClipIcon className="w-5 h-5 text-slate-500" />
                  </div>
                )}
                <span className="flex-1 text-gray-600 text-xs truncate">{filePreview.file.name}</span>
                <button onClick={() => setFilePreview(null)} className="text-gray-400 hover:text-red-500 transition-colors">
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </div>
            )}

            {showEmojis && (
              <div className="mb-2 bg-white border border-gray-200 rounded-2xl p-3 shadow-xl">
                <div className="grid grid-cols-10 gap-1">
                  {EMOJIS.map(emoji => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => insertEmoji(emoji)}
                      className="text-xl hover:scale-125 active:scale-95 transition-transform p-0.5 rounded"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-end gap-2">
              <button
                type="button"
                onClick={() => setShowEmojis(v => !v)}
                className={`p-2 rounded-xl transition-colors flex-shrink-0 ${showEmojis ? 'bg-yellow-100 text-yellow-600' : 'text-gray-400 hover:text-yellow-500 hover:bg-gray-100'}`}
                title="Emojis"
              >
                <FaceSmileIcon className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="p-2 rounded-xl text-gray-400 hover:text-indigo-500 hover:bg-indigo-50 transition-colors flex-shrink-0"
                title="Joindre un fichier"
              >
                <PaperClipIcon className="w-5 h-5" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,application/pdf,.doc,.docx,.xls,.xlsx"
                onChange={handleFileSelect}
                className="hidden"
              />

              <textarea
                ref={textareaRef}
                rows={1}
                className="flex-1 resize-none bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-400 focus:bg-white transition-all placeholder-gray-400"
                placeholder="Tapez votre message… (Entrée pour envoyer, ⇧Entrée pour une nouvelle ligne)"
                value={messageInput}
                onChange={e => setMessageInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={sending}
                style={{ minHeight: '42px', maxHeight: '120px' }}
              />

              <button
                type="button"
                onClick={sendMessage}
                disabled={sending || (!messageInput.trim() && !filePreview)}
                className="p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 active:bg-indigo-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0 shadow-sm"
                title="Envoyer"
              >
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </div>
          </footer>
        )}
      </section>
    </div>
  )
}
