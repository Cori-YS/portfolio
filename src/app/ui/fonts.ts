import { IBM_Plex_Mono, Raleway } from 'next/font/google';

export const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
});

export const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});
