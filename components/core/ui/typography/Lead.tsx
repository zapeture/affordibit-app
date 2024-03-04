import React, { ReactNode, HTMLAttributes } from "react"

interface LeadProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

const Lead: React.FC<LeadProps> = ({ children, ...props }) => {
  return (
    <p className="text-xl text-muted-foreground" {...props}>
      {children}
    </p>
  )
}

export default Lead
