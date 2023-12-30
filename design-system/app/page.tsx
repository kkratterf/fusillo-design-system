'use client';

// Import core
import React from 'react';
// Import customs
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/alert-dialog"
import { Button } from '@/components/button';

export default function Home() {
  return (
    <main className="bg-color-bg-layout flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex space-x-3">
        <Button variant="primary">Vamos pedro</Button>
        <Button variant="secondary">Vamos pedro</Button>
        <Button variant="text">Vamos pedro</Button>
        <Button variant="link">Vamos pedro</Button>
        <Button variant="danger">Vamos pedro</Button>
      </div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="secondary">Delete account</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
