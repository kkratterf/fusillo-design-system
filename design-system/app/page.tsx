'use client';

// Import core
import React from 'react';
// Import customs
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';
import { Button } from '@/components/button';

export default function Home() {
  return (
    <main className="bg-color-bg-layout flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="primary">test</Button>
      <div>
        <Avatar size="xs">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/70836137?s=400&v=4"
            alt="@kkratterf"
          />
          <AvatarFallback>FK</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/70836137?s=400&v=4"
            alt="@kkratterf"
          />
          <AvatarFallback>FK</AvatarFallback>
        </Avatar>
        <Avatar size="md">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/70836137?s=400&v=4"
            alt="@kkratterf"
          />
          <AvatarFallback>FK</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/70836137?s=400&v=4"
            alt="@kkratterf"
          />
          <AvatarFallback>FK</AvatarFallback>
        </Avatar>
        <Avatar size="xl">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/70836137?s=400&v=4"
            alt="@kkratterf"
          />
          <AvatarFallback>FK</AvatarFallback>
        </Avatar>
      </div>
    </main>
  );
}
