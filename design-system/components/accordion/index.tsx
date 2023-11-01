"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from "lucide-react";
import { useTheme } from '../theme';
import './accordion.css'

import { cn } from '../../lib/utils';

const accordionVariants = cva('accordion-root', {
  variants: {
    theme: {
      light: '',
      dark: 'dark',
    },
  },
  defaultVariants: {
    theme: 'light',
  },
});

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => {
  const themeContext = useTheme();
  const theme = themeContext || 'light'; // Use 'light' if ThemeProvider is not present
  return (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn('accordion-root', accordionVariants({ theme }), className)}
    {...props}
  />
  );
});
Accordion.displayName = 'Accordion';

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('accordion-item', className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="accordion-header">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn('accordion-trigger body-large-medium', className)}
      {...props}
    >
      {children}
      <ChevronDown className="accordion-icon" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "accordion-content",
      className
    )}
    {...props}
  >
    <div className="accordion-content-children">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName


export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
