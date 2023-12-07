// Import core
import * as React from 'react';
// Import third parts
import { cva, type VariantProps } from 'class-variance-authority';
// Import customs
import { cn } from "../../lib/twMerge"
import './badge.css';


const badgeVariants = cva('badge-component', {
  variants: {
    status: {
      default: 'badge-default',
      danger: 'badge-danger',
      warning: 'badge-warning',
      success: 'badge-success',
      info: 'badge-info',
      discovery: 'badge-discovery'
    },
  },
  defaultVariants: {
    status: 'default',
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, status, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ status }), className)} {...props} />
  )
}


export { Badge, badgeVariants }
