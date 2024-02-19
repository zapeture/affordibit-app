'use client'
import { signOut } from 'next-auth/react'
export default function LogoutButton() {
  return (
    <button
      className="bg-red-500 rounded-lg text-white p-2 mt-3"
      onClick={() => signOut({ callbackUrl: `${window.location.origin}/auth` })}
    >
      Logout
    </button>
  )
}
