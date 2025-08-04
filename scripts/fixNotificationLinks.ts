import { prisma } from '@/lib/prisma'
import 'dotenv/config'

// Tu peux ajouter autant de remplacements que tu veux ici
const remplacements: Record<string, string> = {
  'projets/': 'shared/projets/',
  'taches/': 'shared/taches/',
  'documents/': 'shared/documents/',
  'messages/': 'shared/messages/'  
}

async function nettoyerLiensNotifications() {
  const notifications = await prisma.notification.findMany()

  for (const notif of notifications) {
    // Vérifie que notif.lien n'est pas null ou undefined
    if (!notif.lien) continue
      
    let nouveauLien = notif.lien
    let modifie = false

    for (const [ancien, nouveau] of Object.entries(remplacements)) {
      if (nouveauLien.includes(ancien)) {
        nouveauLien = nouveauLien.replace(ancien, nouveau)
        modifie = true
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
