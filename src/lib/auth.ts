// src/lib/auth.ts
import { getServerSession } from "next-auth" 
import { authOptions } from "./authOptions"

export const getAuthSession = async () => {
	const session = await getServerSession(authOptions)

	if(session?.user?.email){
		await prisma.user.update({
			where : { email: session.user.email },
			data : { lastActiveAt: new Date() },
		})
	}

	return session
}

export { authOptions } // si besoin ailleurs
  