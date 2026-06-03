import type { Config } from 'tailwindcss';

// Mirrors the original CDN `tailwind.config` from the scraped site.
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#486734', dark: '#3a5429', light: '#5a7d42' },
        accent: '#8B7355',
        warm: '#F5F0EB',
        dark: '#1a1a1a',
        muted: '#6b6b6b',
        brown: '#272220',
      },
      fontFamily: {
        heading: ['Rethink Sans', 'system-ui', 'sans-serif'],
        body: ['Rethink Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
