'use client';
// Import core
import React from 'react';
import { useTheme } from 'next-themes';
import { Toaster } from 'sonner';
// Import customs
import './sonner.css';

type ToasterProps = React.ComponentProps<typeof Toaster>;

const Sonner = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Toaster
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-description',
          actionButton:
            'group-[.toast]:bg-brand group-[.toast]:text-brand-inverse',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-description',
        },
      }}
      {...props}
    />
  );
};

export { Sonner };
