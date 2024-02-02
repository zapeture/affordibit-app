import React, { ReactNode, HTMLAttributes } from "react"

interface InlineCodeProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

const InlineCode: React.FC<InlineCodeProps> = ({ children, ...props }) => {
  return (
    <code
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
      {...props}
    >
      {children}
    </code>
  )
}

export default InlineCode
