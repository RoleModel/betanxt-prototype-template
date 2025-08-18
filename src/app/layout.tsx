import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { BetaNXTThemeProvider } from '@/components/ThemeProvider';
import "@fontsource/roboto";
import { Roboto, Roboto_Condensed } from 'next/font/google'
import { Box } from '@mui/material';
import { BNAppBarClient } from '@/components/BNAppBarWrapper';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
})

const robotoCondensed = Roboto_Condensed({
  variable: '--font-roboto-condensed',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'BetaNXT Prototype Template',
  description: 'A Next.js boilerplate with Material-UI and BetaNXT design system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoCondensed.variable}`}>
        <AppRouterCacheProvider>
          <BetaNXTThemeProvider>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              {/* Header */}
              <BNAppBarClient 
                title="BetaNXT Template"
                color="primary"
              />

              {/* Main Content */}
              <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
              </Box>

            </Box>
          </BetaNXTThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
