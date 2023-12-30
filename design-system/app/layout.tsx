// Import core
import type { Metadata } from 'next';
// Import customs
import '@/style/global.css';
import { fontSans, fontMono } from '@/lib/fonts';
import { Toaster } from '@/components/toast';

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
      <body className="dark font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
