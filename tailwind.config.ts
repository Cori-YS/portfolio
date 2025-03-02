import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-ibm-plex-mono)'],
        sans: ['var(--font-raleway)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        gray: '#1b1b1b',
        'gray-text': '#9c9c9c',
      },
      padding: {
        '0.2': '1px',
      },
    },
  },
  plugins: [],
} satisfies Config;
