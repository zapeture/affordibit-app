import { Button } from "../core/ui/button"
import Github from "@/components/icons/Github"
import Google from "@/components/icons/Google"

export default function AuthAltProviders() {
  return (
    <section className="alt-auth-providers flex flex-col mobile-up:flex-row justify-around items-center gap-4 w-full">
      <Button variant={"outline"} size={"lg"} className="flex w-full">
        <span className="scale-50">
          <Google />
        </span>
        <span>Google</span>
      </Button>
      <Button variant={"outline"} size={"lg"} className="flex w-full">
        <span className="scale-50">
          <Github />
        </span>
        <span>Github</span>
      </Button>
    </section>
  )
}
