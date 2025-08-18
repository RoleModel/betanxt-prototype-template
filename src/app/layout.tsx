import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { BetaNXTThemeProvider } from '@/components/ThemeProvider';
import { roboto } from '@/theme';
import { AppBar, Toolbar, Typography, Container, Box, Link } from '@mui/material';
import { GitHub as GitHubIcon, Lightbulb as LightbulbIcon } from '@mui/icons-material';

export const metadata: Metadata = {
  title: 'BetaNXT Prototype Template',
  description: 'A Next.js boilerplate with Material-UI and BetaNXT design system',
  viewport: 'initial-scale=1, width=device-width',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <AppRouterCacheProvider>
          <BetaNXTThemeProvider>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              {/* Header */}
              <AppBar position="sticky" elevation={1}>
                <Toolbar>
                  <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <LightbulbIcon sx={{ mr: 1 }} />
                    <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                      BetaNXT Template
                    </Typography>
                  </Box>
                  <Link
                    href="https://github.com/rolemodel/betanxt-protoype-template"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                  >
                    <GitHubIcon />
                  </Link>
                </Toolbar>
              </AppBar>

              {/* Main Content */}
              <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
              </Box>

              {/* Footer */}
              <Box
                component="footer"
                sx={{
                  bgcolor: 'background.paper',
                  borderTop: 1,
                  borderColor: 'divider',
                  py: 3,
                  mt: 'auto',
                }}
              >
                <Container maxWidth="lg">
                  <Typography variant="body2" color="text.secondary" align="center">
                    © 2024 Rolemodel Software. Built with ❤️ using Next.js, Material-UI, and BetaNXT.
                  </Typography>
                </Container>
              </Box>
            </Box>
          </BetaNXTThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
