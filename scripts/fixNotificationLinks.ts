import { prisma } from '@/lib/prisma'
import 'dotenv/config'

const remplacements: Record<string, string> = {
  'projets/': 'shared/projets/',
  'taches/': 'shared/taches/',
  'documents/': 'shared/documents/',
  'messages/': 'shared/messages/',
}

async function nettoyerLiensNotifications() {
  const notifications = await prisma.notification.findMany()

  for (const notif of notifications) {
    if (!notif.lien) continue

    let nouveauLien = notif.lien
    let modifie = false

    // Supprimer tous les doublons de "shared/" au début du lien
    const originalLien = nouveauLien
    nouveauLien = nouveauLien.replace(/^(shared\/)+/, 'shared/')
    if (nouveauLien !== originalLien) modifie = true

    // Appliquer les remplacements si le lien ne commence pas déjà par "shared/"
    if (!nouveauLien.startsWith('shared/')) {
      for (const [ancien, nouveau] of Object.entries(remplacements)) {
        if (nouveauLien.includes(ancien)) {
          nouveauLien = nouveauLien.replace(ancien, nouveau)
          modifie = true
        }
      }
    }

    if (modifie) {
      await prisma.notification.update({
        where: { id: notif.id },
        data: { lien: nouveauLien },
      })
      console.log(`✅ Notification ${notif.id} mise à jour : ${nouveauLien}`)
    }
  }

  console.log('🎉 Nettoyage terminé.')
}

nettoyerLiensNotifications()
  .catch((err) => {
    console.error('❌ Erreur lors du nettoyage :', err)
  })
