'use client';

import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

// Import BetaNXT theme directly from design system
let betaNXTTheme = null;
try {
  // This will work once .npmrc is configured and npm install is run
  betaNXTTheme = eval('require')('@rolemodel/betanxt-design-system/theme')?.theme;
} catch {
  console.warn('BetaNXT design system not found. Using fallback theme.');
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

// Use BetaNXT theme directly or create minimal fallback
const theme = betaNXTTheme || createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto), Arial, sans-serif',
  },
});

export { theme, roboto };
