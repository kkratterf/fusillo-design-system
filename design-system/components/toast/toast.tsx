// Import core
import * as React from 'react';
// Import third parts
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
// Import customs
import { cn } from '../../lib/twMerge';
import './toast.css'


const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'toast-viewport',
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  'toast-component group data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      status: {
        default: 'toast-component-default',
        danger: 'toast-component-danger',
        warning: 'toast-component-warning',
        success: 'toast-component-success',
        info: 'toast-component-info',
        discovery: 'toast-component-discovery',
      },
    },
    defaultVariants: {
      status: 'default',
    },
  }
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, status = 'default', ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ status }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

type ToastActionProps = React.ComponentPropsWithoutRef<
  typeof ToastPrimitives.Action
> & VariantProps<typeof toastVariants>;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  ToastActionProps
>(({ className, status = 'default', ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    data-variant={status}
    className={cn('toast-action', className)}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

type ToastCloseProps = React.ComponentPropsWithoutRef<
  typeof ToastPrimitives.Close > & VariantProps<typeof toastVariants>;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  ToastCloseProps
>(({ className, status = 'default', ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    data-variant={status}
    className={cn(
      'toast-close opacity-0 group-hover:opacity-100',
      className
    )}
    toast-close=""
    {...props}
  >
    <X />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('toast-title', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('toast-description', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
