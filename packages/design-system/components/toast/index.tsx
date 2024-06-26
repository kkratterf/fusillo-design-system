"use client"

// Import core
import * as React from 'react';
// Import customs
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/toast/toast"
import { useToast } from "@/components/toast/use-toast"
import './toast.css';

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, status = "default", ...props }) {
        return (
          <Toast key={id} status={status} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action && (
              <ToastAction status={status} altText={action}>
                {action}
              </ToastAction>
            )}
            <ToastClose status={status} />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
