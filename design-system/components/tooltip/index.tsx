"use client"

// Import core
import * as React from 'react';
// Import third parts
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cva, type VariantProps } from 'class-variance-authority';
// Import customs
import { cn } from "../../lib/utils"
import './tooltip.css'

const tooltipVariants = cva(
  [
    'tooltip-content animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  ],
  {
    variants: {
      style: {
        outline: 'tooltip-content-outline',
        fill: 'tooltip-content-fill',
      },
    },
    defaultVariants: {
      style: 'outline',
    },
  }
);

export interface TooltipProps extends VariantProps<typeof tooltipVariants> {}

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & TooltipProps
>((props, ref) => {
  // Destructure style and className from props
  const { style, className, sideOffset = 4, avoidCollisions = false, ...otherProps } = props;
  // Compute class names
  const classNames =
    tooltipVariants({ style }) + (className ? ` ${className}` : '');
  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={classNames}
      {...otherProps} // Spread otherProps to TooltipPrimitive.Content
    />
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }