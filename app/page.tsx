import { getServerSession } from 'next-auth'
import { authOptions } from './utils/auth'
import LogoutButton from '@/components/auth/LogoutButton'
import Link from 'next/link'

export const metadata = {
  title: 'App Router',
}

export default async function Page() {
  const session = await getServerSession(authOptions)
  return (
    <div className="p-10 font-sans">
      <h1>Hello from the index page, this is a public route</h1>
      {session ? (
        <div>
          <h1>You are logged</h1>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <h1>Please log in to see something special</h1>
          <Link
            href="/auth"
            className="bg-blue-500 rounded-lg text-white p-2 mt-3"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  )
}
