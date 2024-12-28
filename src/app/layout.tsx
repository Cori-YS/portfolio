import type { Metadata } from 'next';
import './globals.css';
import { ibmPlexMono, raleway } from './ui/fonts';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Ismélio Cori professional portfolio.',
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
        {children}
      </body>
    </html>
  );
}
