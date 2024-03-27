import { Heading } from "@/components/core/ui/typography"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import LogoutButton from "@/components/auth/LogoutButton"

export default async function Blog() {
  const session = await getServerSession(authOptions)
  if (!session) return redirect("/auth/signin")
  return (
    <div>
      <Heading level={1}>Protected Blog Page</Heading>
      <LogoutButton />
    </div>
  )
}
