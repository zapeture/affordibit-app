import SignInWithGitHub from '@/components/auth/SignInWithGitHub'
import { authOptions } from '../utils/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import SignInForm from '@/components/auth/SignInForm'

export default async function Auth() {
  const session = await getServerSession(authOptions)
  if (session) redirect('/')
  return (
    <div className="flex w-full min-h-[100vh] justify-center items-center flex-col">
      <div className="card min-h-[250px] w-full max-w-[400px] bg-slate-200 rounded-md">
        <h1 className="font-semibold p-4 text-xl">Please Sign in Here</h1>
        <p className="p-4">
          To access the private page you have to be authenticated
        </p>
        {/* input */}
        <div className="flex flex-col p-4">
          <SignInForm />
        </div>
      </div>
    </div>
  )
}
