'use client';

// Import core
import React from 'react';
// Import customs
import { toast } from 'sonner';

import { Button } from '@/components/button';

export default function Home() {

  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        variant="secondary"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Toast
      </Button>
    </main>
  );
}
