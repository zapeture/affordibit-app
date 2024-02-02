import React, { ReactNode, HTMLAttributes } from "react"

interface SmallTextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

const SmallText: React.FC<SmallTextProps> = ({ children, ...props }) => {
  return (
    <small className="text-sm font-medium leading-none" {...props}>
      {children}
    </small>
  )
}

export default SmallText
