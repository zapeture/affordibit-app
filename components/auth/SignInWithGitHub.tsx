'use client'

import { signIn } from 'next-auth/react'

export default function SignInWithGitHub() {
  return (
    <button
      className="bg-black rounded-lg text-white p-2 mt-3"
      onClick={() =>
        signIn('github', { callbackUrl: `${window.location.origin}` })
      }
    >
      Login with Github
    </button>
  )
}
