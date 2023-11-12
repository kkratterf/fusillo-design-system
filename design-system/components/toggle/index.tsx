"use client"

// Import core
import * as React from 'react';
// Import third parts
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';
// Import customs
import { cn } from "../../lib/utils"
import './toggle.css'


const toggleVariants = cva(
  "toggle-component",
  {
    variants: {
      variant: {
        default: "",
        outline:
          "toggle-component-outline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
