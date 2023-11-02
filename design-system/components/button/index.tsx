'use client'

// Import core
import * as React from 'react';
// Import third parts
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
// Import customs
import './button.css';
import { cn } from "../../lib/utils"


const buttonVariants = cva(
  'button-component',
  {
    variants: {
      variant: {
        primary: 'button-primary bg-color-bg-brand',
        secondary: 'button-secondary',
        text: 'button-text',
        link: 'button-link',
        danger: 'button-danger',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  title?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, asChild = false, title, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const buttonContent = title || props.children;

    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {buttonContent}
      </Comp>
    );
  }
);
Button.displayName = "Button"

export { Button, buttonVariants }
