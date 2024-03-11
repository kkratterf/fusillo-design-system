'use client'

import { Button } from '@design-system/components/button'
import { useToast } from '@design-system/components/toast/use-toast';

export default function Home() {
  const { toast } = useToast();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40">
      <Button
        variant="secondary"
        onClick={() => {
          toast({
            title: "Let's start",
            description: 'Build your fantastic webapp',
            status: 'brand',
          });
        }}
      >
        Hello world
      </Button>
    </main>
  );
}
