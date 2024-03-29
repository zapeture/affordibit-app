"use server"
import prisma from "@/lib/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export async function saveNewUserDetails(values: {
  firstName: string
  lastName: string
  username: string
  consent: boolean
}) {
  const session = await getServerSession(authOptions)
  const { firstName, lastName, username, consent } = values

  const updateUser = await prisma.user.update({
    where: {
      email: `${session?.user?.email}`
    },
    data: {
      firstName,
      lastName,
      username,
      consent
    }
  })

  if (!updateUser) return console.error("Failed to save user details")

  redirect("/")
}
