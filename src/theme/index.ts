'use client';

import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import  betanxtTheme from '@rolemodel/betanxt-design-system/themes/betaNXTTheme';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

// Use BetaNXT theme directly or create minimal fallback
const theme = betanxtTheme || createTheme();

export { theme, roboto };
