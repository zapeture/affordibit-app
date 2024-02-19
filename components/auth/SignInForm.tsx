'use client'
import React from 'react'
import SignInWithGitHub from '@/components/auth/SignInWithGitHub'
import { signIn } from 'next-auth/react'

export default function SignInForm() {
  const [email, setEmail] = React.useState<string | undefined>('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return

    const signInResult = await signIn('email', {
      email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    })

    if (!signInResult?.ok) {
      alert('Failed to sign in, Please try again.')
    } else {
      alert('Check your email for the sign in link.')
    }
  }
  return (
    <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
      <label htmlFor="email" className="text-md">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="name@example.com"
        value={email}
        className="p-2 rounded-xl"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-blue-700 rounded-lg text-white p-2 mt-3"
        type="submit"
      >
        Login with email
      </button>
      <SignInWithGitHub />
    </form>
  )
}
