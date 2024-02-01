import { ReactNode } from "react"

export default function Lead({ children }: { children: ReactNode }) {
  return <p className="text-xl text-muted-foreground">{children}</p>
}
