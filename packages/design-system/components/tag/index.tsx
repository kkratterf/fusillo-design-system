// Import core
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
// Import customs
import { cn } from '@/lib/twMerge';

const tagVariants = cva('tag-component', {
  variants: {
    status: {
      default: 'tag-default',
      brand: 'tag-brand',
      danger: 'tag-danger',
      warning: 'tag-warning',
    },
  },
  defaultVariants: {
    status: 'default',
  },
});

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {}

function Tag({ className, status, ...props }: TagProps) {
  return (
    <div className={cn(tagVariants({ status }), className)} {...props} />
  );
}

export { Tag, tagVariants };