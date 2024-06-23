import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/app/_libs/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-lime-600 text-primary-foreground hover:opacity-90 border-b-4 border-lime-700",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "justify-start bg-white text-primary hover:opacity-90 border border-b-4 border-gray-400",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-b-4 border-lime-700",
        gray: "bg-gray-200 text-gray-400 hover:bg-secondary/80 border-b-4 border-gray-400",
        ghost: "hover:bg-transparent",
        link: "text-primary underline-offset-4 hover:underline",
        applicationSidebarActive: "bg-lime-400 border border-blue-400 text-blue-400 hover:opacity-90",
        locked: "bg-neutral-200 text-neutral-400 border-b-4 border-current hover:bg-neutral-200/90 active:border-b-0 dark:bg-disabled dark:text-disabled-foreground dark:hover:bg-disabled/90"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-12 rounded-md px-3",
        lg: "h-14 md:h-16 rounded-md px-8 text-base",
        icon: "h-10 w-10",
        rounded: "rounded-full"
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