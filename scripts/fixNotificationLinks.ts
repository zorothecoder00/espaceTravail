import { prisma } from '@/lib/prisma'
import 'dotenv/config'

function supprimerTroisPremiersShared(lien: string): string {
  if (!lien) return ''

  let count = 0  
  const result = lien
    .split('/')
    .filter((segment) => {
      if (segment === 'shared' && count < 3) {
        count++
        return false // on saute les 3 premiers "shared"
      }
      return true
    })
    .join('/')

  return result
}

async function nettoyerLiensNotifications() {
  const notifications = await prisma.notification.findMany()

  for (const notif of notifications) {
    const ancienLien = notif.lien
    if (!ancienLien || typeof ancienLien !== 'string') continue

    const lienModifie = supprimerTroisPremiersShared(ancienLien)

    if (lienModifie !== ancienLien) {
      await prisma.notification.update({
        where: { id: notif.id },
        data: { lien: lienModifie },
      })
      console.log(`🔁 Notification ${notif.id} : ${ancienLien} → ${lienModifie}`)
    }
  }    

  console.log('✅ Nettoyage terminé (3 premiers "shared" supprimés).')
}

nettoyerLiensNotifications().catch((err) => {
  console.error('❌ Erreur lors du nettoyage :', err)
})
