import { 
  Container, 
  Typography, 
  Button, 
  Stack, 
  Card, 
  CardContent,
  Box,
  Grid as Grid,
  Chip,
  Alert,
  Paper
} from '@mui/material';
import { 
  PlayArrow as PlayArrowIcon, 
  Code as CodeIcon,
  Palette as PaletteIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack spacing={6}>
        {/* Hero Section */}
        <Box textAlign="center" sx={{ py: { xs: 4, md: 8 } }}>
          <Stack spacing={2} alignItems="center">
            <Chip 
              label="v0.1.0" 
              color="primary" 
              variant="outlined" 
              size="small"
            />
            <Typography variant="h2" component="h1" gutterBottom color="primary" sx={{
              fontSize: { xs: '2.5rem', md: '3.75rem' },
              fontWeight: 800,
              background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              BetaNXT Template
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph sx={{ maxWidth: 600 }}>
              A production-ready Next.js boilerplate with Material-UI v7 and BetaNXT design system integration
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
              <Button 
                variant="contained" 
                size="large" 
                startIcon={<PlayArrowIcon />}
                sx={{ px: 4, py: 1.5 }}
              >
                Get Started
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                startIcon={<CodeIcon />}
                component={Link}
                href="/examples"
                sx={{ px: 4, py: 1.5 }}
              >
                View Examples
              </Button>
            </Stack>
          </Stack>
        </Box>

        {/* Quick Setup Alert */}
        <Alert severity="info" sx={{ mx: 'auto', maxWidth: 800 }}>
          <Typography variant="body2">
            <strong>Quick Setup:</strong> Configure your <code>.npmrc</code> with a GitHub token, 
            run <code>npm install</code>, and you&apos;re ready to build with BetaNXT components!
          </Typography>
        </Alert>

        {/* Features Grid */}
        <Box>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
            What&apos;s Included
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{xs: 12, sm: 6, md: 4}}>
              <Card sx={{ height: '100%', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-4px)' } }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PaletteIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="h3">
                      Material-UI v7
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Latest Material-UI with CSS variables, improved theming, React 19 support, and enhanced performance.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid size={{xs: 12, sm: 6, md: 4}}>
              <Card sx={{ height: '100%', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-4px)' } }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SpeedIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="h3">
                      Next.js 15
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    App Router, Server Components, optimized performance, and TypeScript support out of the box.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
           <Grid size={{xs: 12, sm: 6, md: 4}}>
              <Card sx={{ height: '100%', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-4px)' } }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SettingsIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="h3">
                      BetaNXT Design System
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Pre-configured integration with BetaNXT components and automatic theme loading.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid size={{xs: 12, sm: 6, md: 4}}>
              <Card sx={{ height: '100%', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-4px)' } }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CodeIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="h3">
                      TypeScript Ready
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Strict TypeScript configuration with path aliases and comprehensive type safety.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid size={{xs: 12, sm: 6, md: 4}}>
              <Card sx={{ height: '100%', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-4px)' } }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SecurityIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="h3">
                      Production Ready
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Optimized builds, ESLint configuration, and deployment-ready project structure.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid size={{xs: 12, sm: 6, md: 4}}>
              <Card sx={{ height: '100%', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-4px)' } }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PaletteIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="h3">
                      Advanced Theming
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    CSS variables, dark mode support, custom component overrides, and responsive design.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Getting Started Section */}
        <Paper elevation={1} sx={{ p: 4, bgcolor: 'background.paper' }}>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Quick Start Guide
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph align="center" sx={{ mb: 4 }}>
            Get your project running in minutes with these simple steps:
          </Typography>
          
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Typography variant="body2" component="pre" sx={{ 
              backgroundColor: 'grey.900', 
              color: 'grey.100',
              p: 3, 
              borderRadius: 2,
              fontFamily: 'monospace',
              overflow: 'auto',
              fontSize: '0.875rem',
              lineHeight: 1.6
            }}>
{`# Create new project with this template
npx create-next-app@latest my-project --example \\
  https://github.com/rolemodel/betanxt-protoype-template

# Navigate to project
cd my-project

# Set up GitHub token for BetaNXT design system
export GITHUB_TOKEN=your_personal_access_token

# Install dependencies
npm install

# Start development server
npm run dev`}
            </Typography>
          </Box>
        </Paper>
      </Stack>
    </Container>
  );
}


