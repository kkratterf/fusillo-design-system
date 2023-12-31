// Import core
import { cva, type VariantProps } from 'class-variance-authority';
// Import customs
import { cn } from '@/lib/twMerge';

const skeletonVariants = cva('skeleton-component', {
  variants: {
    shape: {
      line: 'skeleton-line',
      circle: 'skeleton-circle',
    },
  },
  defaultVariants: {
    shape: 'line',
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

function Skeleton({ className, shape, ...props }: SkeletonProps) {
  return (
    <div className={cn(skeletonVariants({ shape }), className)} {...props} />
  );
}

export { Skeleton, skeletonVariants };