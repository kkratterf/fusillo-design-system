// Import core
import React from 'react';
import Link from 'next/link';
// Import customs
import { Button } from '@design-system/components/button';

export function Background() {
  return (
    <div className="grid-background w-full bg-grid-[#000000]/[.05] dark:bg-grid-[#ffffff]/[.05] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <section className="flex justify-center mx-auto p-6 max-w-screen-xl">
        <div className="text-center relative z-10">
          <p className="text-4xl sm:text-6xl font-extrabold">
            A well-cooked design system 🤌
          </p>
          <p className="mt-6 text-lg sm:text-xl">
            Cook creativity and consistency in a recipe of exceptional user
            experiences!
          </p>
          <Button className="mt-10 h-10 px-4 text-lg-medium">
            <Link href="/documentation/welcome">Let's start</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
