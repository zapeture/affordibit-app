import React, { forwardRef } from "react"
import { cva } from "class-variance-authority"
const paragraphStyles = cva([], {
  variants: {
    size: {
      xlarge: "text-xl font-normal",
      large: "text-lg font-normal",
      medium: "text-base font-normal",
      small: "text-sm font-normal",
    },
    weight: {
      bold: "font-bold",
      semibold: "font-semibold",
      medium: "font-medium",
      normal: "font-normal",
    },
  },
})

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean
  size?: "xlarge" | "large" | "medium" | "small"
  weight?: "bold" | "semibold" | "medium" | "normal"
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    { asChild, className, size = "medium", weight = "normal", ...props },
    ref
  ) => {
    const Component: React.ElementType = asChild ? React.Fragment : "p"
    const classStr = paragraphStyles({ className, size, weight })
    return <Component ref={ref} {...props} className={classStr} />
  }
)

Paragraph.displayName = "Paragraph"
export { Paragraph }
