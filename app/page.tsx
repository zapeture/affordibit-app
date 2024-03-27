import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

export default async function Page() {
  const session = await getServerSession(authOptions)
  if (!session) return redirect("/auth/signin")
  return <h1>Protected Main Page</h1>
}
