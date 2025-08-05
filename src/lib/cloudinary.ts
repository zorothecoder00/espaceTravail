import { v2 as cloudinary } from 'cloudinary'

console.log('cloud_name env:', process.env.CLOUDINARY_CLOUD_NAME)

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
})

export default cloudinary  
