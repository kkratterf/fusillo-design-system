//import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono"

//export const fontSans = GeistSans
// export const fontMono = GeistMono

import localFont from 'next/font/local';

export const fontSans = localFont({
  src: '../fonts/GeistSans.woff2',
  display: 'swap',
  variable: '--geist-sans',
});

export const fontMono = localFont({
  src: '../fonts/GeistMono.woff2',
  display: 'swap',
  variable: '--geist-mono',
});
