import React, { ReactNode, HTMLAttributes } from "react"

interface MutedTextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export default function MutedText({ children, ...props }: MutedTextProps) {
  return (
    <p className="text-sm text-muted-foreground" {...props}>
      {children}
    </p>
  )
}
