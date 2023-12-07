'use client';

// Import core
import * as React from 'react';
// Import third parts
import { cva, type VariantProps } from 'class-variance-authority';
import * as ProgressPrimitive from '@radix-ui/react-progress';
// Import customs
import { cn } from '../../lib/twMerge';
import './progress.css';

const progressVariants = cva(['progress-component'], {
  variants: {
    status: {
      default: 'progress-component-default',
      brand: 'progress-component-brand',
      danger: 'progress-component-danger',
      warning: 'progress-component-warning',
      success: 'progress-component-success',
      info: 'progress-component-info',
      discovery: 'progress-component-discovery',
    },
  },
  defaultVariants: {
    status: 'default',
  },
});

export interface ProgressProps extends VariantProps<typeof progressVariants> {}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & ProgressProps
>(({ className, status, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(progressVariants({ status, className }))}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="progress-indicator"
      data-variant={status}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
