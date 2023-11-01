'use client'

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { useTheme } from '../theme';
import './button.css';

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  'button-component',
  {
    variants: {
      variant: {
        primary: 'button-primary',
        secondary: 'button-secondary',
        text: 'button-text',
        link: 'button-link',
        danger: 'button-danger',
      },
      theme: {
        light: '',
        dark: 'dark',
      },
    },
    defaultVariants: {
      variant: 'primary',
      theme: 'light',
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
    const themeContext = useTheme();
    const theme = themeContext || 'light'; // Use 'light' if ThemeProvider is not present

    return (
      <Comp
        className={cn(buttonVariants({ variant, className, theme }))}
        ref={ref}
        {...props}
      >
        {buttonContent}
      </Comp>
    );
  }
);
Button.displayName = "Button"



const iconButtonVariants = cva('icon-button-component', {
  variants: {
    variant: {
      primary: 'icon-button-primary',
      secondary: 'icon-button-secondary',
      text: 'icon-button-text',
      link: 'icon-button-link',
      danger: 'icon-button-danger',
    },
    theme: {
      light: '',
      dark: 'dark',
    },
  },
  defaultVariants: {
    variant: 'primary',
    theme: 'light',
  },
});

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon: JSX.Element;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, icon, ...props }, ref) => {
    const themeContext = useTheme();
    const theme = themeContext || 'light'; // Use 'light' if ThemeProvider is not present

    return (
      <button
        className={cn(buttonVariants({ variant, className, theme }))}
        ref={ref}
        {...props}
      >
        {icon}
      </button>
    );
  }
);
IconButton.displayName = 'Icon Button';



export { Button, buttonVariants, IconButton, iconButtonVariants }
