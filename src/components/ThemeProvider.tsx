'use client';

import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@/theme';

interface BetaNXTThemeProviderProps {
  children: React.ReactNode;
}

export const BetaNXTThemeProvider: React.FC<BetaNXTThemeProviderProps> = ({
  children,
}) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};


