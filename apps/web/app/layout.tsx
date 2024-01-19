// Import core
import type { Metadata } from 'next';
// Import customs
import '../style/globals.css';
import { fontSans, fontMono } from '@design-system/lib/fonts';
import { Toaster } from '@design-system/components/toast';
import { Sonner } from '@design-system/components/sonner';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body className="dark">
        {children}
        <Toaster />
        <Sonner />
      </body>
    </html>
  );
}