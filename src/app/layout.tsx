import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ibmPlexMono, raleway } from './ui/fonts';
import { Header } from './ui/header';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Ismélio Cori professional portfolio.',
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${raleway.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
