import { prisma } from '@/lib/prisma'
import 'dotenv/config'

async function corrigerNotificationsAvecDocument() {
  const notifications = await prisma.notification.findMany({
    where: {
      lien: null,
      documentId: { not: null },
    },
    include: {
      document: true,
    },
  })

  for (const notif of notifications) {
    if (!notif.documentId) continue

    const nouveauLien = `/shared/documents/${notif.documentId}`

    await prisma.notification.update({
      where: { id: notif.id },
      data: { lien: nouveauLien },
    })

    console.log(`🔁 Notification ${notif.id} mise à jour avec lien : ${nouveauLien}`)
  }

  console.log('✅ Liens des notifications avec documentId corrigés.')
}

corrigerNotificationsAvecDocument().catch((err) => {
  console.error('❌ Erreur lors de la correction des notifications :', err)
})
