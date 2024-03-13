import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import Link from "next/link"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[12px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[#E2E8F0] border-input bg-background outline-none",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLink?: boolean
  href?: string
}

const Button = React.forwardRef<any, ButtonProps>( // Change the ref type to any
  (
    { className, variant, size, asChild = false, isLink, href, ...props },
    ref
  ) => {
    const classes = cn(buttonVariants({ variant, size }), className)

    if (isLink && href) {
      return (
        //@ts-ignore
        <Link href={href} className={classes} ref={ref} passHref {...props} />
      )
    }

    const Comp = asChild ? Slot : "button"

    return <Comp className={classes} ref={ref} {...props} />
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }