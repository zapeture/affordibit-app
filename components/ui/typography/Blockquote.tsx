import React, { ReactNode, HTMLAttributes } from "react"

interface BlockquoteProps extends HTMLAttributes<HTMLQuoteElement> {
  children: ReactNode
}

const Blockquote: React.FC<BlockquoteProps> = ({ children, ...props }) => {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic" {...props}>
      {children}
    </blockquote>
  )
}

export default Blockquote
