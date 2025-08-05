// scripts/makeDocumentsPublic.ts
import '../setupEnv'  // <-- importe et charge dotenv avant tou charge explicitement le fichier

  console.log('Cloudinary cloud name:', process.env.CLOUDINARY_CLOUD_NAME)

import cloudinary from '@/lib/cloudinary' // tu importes ta config existante

async function makeAllDocumentsPublic() {
  const result = await cloudinary.api.resources({
    type: 'upload',
    prefix: 'documents/',
    max_results: 100,  
  })    

  for (const resource of result.resources) {
    await cloudinary.api.update(resource.public_id, {
      access_control: [], // enlève toute restriction d'accès
    })
    console.log(`✅ ${resource.public_id} est maintenant public`)
  }
}  

makeAllDocumentsPublic()
