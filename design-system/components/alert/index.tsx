'use client'

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { useTheme } from '../theme';
import './alert.css';

import { cn } from "../../lib/utils"

const alertVariants = cva('alert-component', {
  variants: {
    variant: {
      default: 'alert-default',
      danger: 'alert-danger',
      warning: 'alert-warning',
      success: 'alert-success',
      info: 'alert-info',
      discovery: 'alert-discovery',
    },
    theme: {
      light: '',
      dark: 'dark',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => {
  const themeContext = useTheme();
  const theme = themeContext || 'light'; // Use 'light' if ThemeProvider is not present
  return (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className, theme)}
      {...props}
    />
  );
});
Alert.displayName = 'Alert';

const AlertIcon = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('alert-icon', className)}
    {...props}
  >
    {children}
  </div>
));
AlertIcon.displayName = 'AlertIcon';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("alert-title", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('alert-description', className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertIcon, AlertTitle, AlertDescription }
