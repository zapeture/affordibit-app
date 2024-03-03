import React, { ReactNode, HTMLAttributes } from "react"

interface LargeTextProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const LargeText: React.FC<LargeTextProps> = ({ children, ...props }) => {
  return (
    <div className="text-lg font-semibold" {...props}>
      {children}
    </div>
  )
}

export default LargeText
