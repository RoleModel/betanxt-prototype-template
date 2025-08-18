'use client';

import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme as baseTheme } from '@/theme';

// Import BetaNXT theme directly from the design system
let betaNXTTheme = null;

// Try to import BetaNXT theme - this will work once .npmrc is configured
try {
  // Use dynamic import with conditional check
  if (typeof window === 'undefined') {
    // Server-side: use eval to avoid bundler issues
    betaNXTTheme = eval('require')('@rolemodel/betanxt-design-system/theme')?.theme;
  }
} catch {
  console.warn('BetaNXT design system theme not found. Using base theme.');
}

interface BetaNXTThemeProviderProps {
  children: React.ReactNode;
  customTheme?: Record<string, unknown>;
}

export const BetaNXTThemeProvider: React.FC<BetaNXTThemeProviderProps> = ({
  children,
  customTheme = {},
}) => {
  // Merge BetaNXT theme with base theme and custom overrides
  const mergedTheme = React.useMemo(() => {
    if (betaNXTTheme) {
      return createTheme({
        ...betaNXTTheme,
        ...customTheme,
        cssVariables: true, // Ensure CSS variables are enabled
      });
    }
    
    // Fallback to base theme with custom overrides
    return createTheme({
      ...baseTheme,
      ...customTheme,
    });
  }, [customTheme]);

  return (
    <MuiThemeProvider theme={mergedTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};


