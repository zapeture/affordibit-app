import React, { ReactNode, HTMLAttributes } from "react"

interface MutedTextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

const MutedText: React.FC<MutedTextProps> = ({ children, ...props }) => {
  return (
    <p className="text-sm text-muted-foreground" {...props}>
      {children}
    </p>
  )
}

export default MutedText
