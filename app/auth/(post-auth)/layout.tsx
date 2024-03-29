import { redirect } from "next/navigation"
import prisma from "@/lib/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  const user = await prisma.user.findUnique({
    where: {
      email: `${session?.user?.email}`
    }
  })

  if (user?.firstName && user?.lastName && user?.username && user?.consent) {
    redirect("/")
  }

  return (
    <section
      id="auth-layout"
      className="w-full min-h-[100vh] bg-gray-50 flex justify-center items-center"
    >
      <div className="container max-w-[1180px] mx-auto">
        <div className="w-full flex justify-center items-center">
          <div className="auth-col auth-user-first-time">{children}</div>
        </div>
      </div>
    </section>
  )
}
