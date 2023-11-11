"use client"

// Import core
import * as React from 'react';
// Import third parts
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
// Import customs
import { cn } from '../../lib/utils';
import './checkbox.css';


const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "checkbox-component peer",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("checkbox-indicator")}
    >
      <Check/>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
