"use client"
import { Button } from "@/components/core/ui/button"
import { signOut } from "next-auth/react"

export default function LogoutButton() {
  return (
    <Button
      variant="destructive"
      onClick={() =>
        signOut({
          callbackUrl: `${window.location.origin}/auth/signin`
        })
      }
    >
      Log out
    </Button>
  )
}
