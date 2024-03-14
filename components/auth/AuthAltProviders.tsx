"use client"
import { Button } from "../core/ui/button"
import Github from "@/components/icons/Github"
import Google from "@/components/icons/Google"
import { signIn } from "next-auth/react"

export default function AuthAltProviders() {
  return (
    <section className="alt-auth-providers flex flex-col mobile-up:flex-row justify-around items-center gap-4 w-full">
      <Button
        variant={"outline"}
        type="button"
        size={"lg"}
        className="flex w-full"
        onClick={() =>
          signIn("google", {
            callbackUrl: `${window.location.origin}`
          })
        }
      >
        <span className="scale-50">
          <Google />
        </span>
        <span>Google</span>
      </Button>
      <Button
        variant={"outline"}
        type="button"
        size={"lg"}
        className="flex w-full"
        onClick={() =>
          signIn("github", {
            callbackUrl: `${window.location.origin}`
          })
        }
      >
        <span className="scale-50">
          <Github />
        </span>
        <span>Github</span>
      </Button>
    </section>
  )
}
