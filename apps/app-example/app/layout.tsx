// Import core
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
// Import customs
import { ThemeProvider } from '@app-example/components/theme-provider';
import { Toaster } from '@design-system/components/toast';
import '../style/globals.css';

export const metadata: Metadata = {
  title: 'App Example',
  description: 'Web app for testing components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
