'use client'

// Import core
import * as React from 'react';
// Import third parts
import { cva, type VariantProps } from 'class-variance-authority';
// Import customs
import './alert.css';
import { cn } from '../../lib/twMerge';


const alertVariants = cva('alert-component', {
  variants: {
    status: {
      default: 'alert-default',
      brand: 'alert-brand',
      danger: 'alert-danger',
      warning: 'alert-warning',
    },
  },
  defaultVariants: {
    status: 'default',
  },
});

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, status, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ status }), className)}
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
