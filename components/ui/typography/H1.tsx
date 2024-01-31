import { ReactNode } from 'react'
export default function H1({ children }: { children: ReactNode }) {
  return <h1 className="text-4xl font-extrabold lg:text-5xl">{children}</h1>
}
