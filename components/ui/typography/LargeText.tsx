import { ReactNode } from "react"

export default function LargeText({ children }: { children: ReactNode }) {
  return <div className="text-lg font-semibold">{children}</div>
}
