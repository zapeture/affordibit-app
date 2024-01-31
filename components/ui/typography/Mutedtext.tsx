import { ReactNode } from 'react'

export default function MutedText({ children }: { children: ReactNode }) {
  return <p className="text-sm text-muted-foreground">{children}</p>
}
