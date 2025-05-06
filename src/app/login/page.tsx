'use client'
import { signIn } from 'next-auth/react'

export default function Login() {
  const handleLogin = async (e: any) => {
    e.preventDefault()
    const res = await signIn('credentials', {
      redirect: true,
      email: e.target.email.value,
      password: e.target.password.value, 
      callbackUrl: '/admin', // Redirection vers ton dashboard admin
    })
  }

  return (
    <form onSubmit={handleLogin}>
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Mot de passe" required />
      <button type="submit">Connexion</button>
    </form>
  )
}
