import { ReactNode } from 'react'
export default function SmallText({ children }: { children: ReactNode }) {
  return <small className="text-sm font-medium leading-none">{children}</small>
}
