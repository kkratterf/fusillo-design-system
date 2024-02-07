// Import core
import React, { ReactNode } from 'react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
// Import customs

type PreviewProps = {
  children: ReactNode;
};

const Preview: React.FC<PreviewProps> = ({ children }) => {
  return (
    <main className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
      {children}
    </main>
  );
};

export default Preview;
