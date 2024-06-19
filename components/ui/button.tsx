import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 mobile:w-full mobile:justify-center mobile:rounded-full mobile:px-8 mobile:py-3.5 mobile:text-sm mobile:font-medium mobile:leading-loose mobile:mb-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-white font-medium hover:bg-primary/90",
        white: "bg-white text-primary font-medium hover:bg-primary/90",
        dark: "bg-dark text-white hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary text-primary bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        primary: "bg-primary text-white hover:bg-blue-400/90 text-xs px-8 py-10 leading-loose",
        yellow: "bg-yellow-500 text-yellow-foreground hover:bg-yellow-400/90 text-xs px-8 py-10 leading-loose",
        secondary: "bg-yellow-500 text-dark hover:bg-yellow-400/90 text-xs px-8 py-10 leading-loose"
      },
      size: {
        default: "h-42 px-12 py-5",
        white: "h-42 px-12 py-5",
        dark: "h-42 px-8 py-3.5",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
