# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

```bash
# Development
npm run dev          # Start development server at http://localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint checks
npm run type-check   # Run TypeScript type checks (tsc --noEmit)

# Testing
# No test framework currently configured - add when needed
```

## Architecture Overview

This is a Next.js 15 template with Material-UI v7 and BetaNXT design system integration. The codebase follows Next.js App Router conventions with server components.

### Key Architecture Decisions

1. **Next.js App Router**: All pages use the App Router pattern in `src/app/`
2. **Material-UI v7 with CSS Variables**: Theme uses MUI's CSS variables feature for better SSR and runtime performance
3. **BetaNXT Design System**: Optional integration with `@rolemodel/betanxt-design-system` package from GitHub registry
4. **TypeScript Strict Mode**: Full TypeScript with strict configuration enabled
5. **Path Aliases**: Use `@/` for imports from `src/` directory

### Project Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components including ThemeProvider
- `src/theme/` - MUI theme configuration with BetaNXT integration
- `src/types/` - TypeScript type definitions
- `src/lib/` - Utility functions

### BetaNXT Integration

The BetaNXT design system (`@rolemodel/betanxt-design-system`) requires GitHub registry authentication:

1. Configure `.npmrc` with GitHub token (see `.npmrc.example`)
2. Theme is loaded in `src/theme/index.ts` with dynamic import and fallback
3. `BetaNXTThemeProvider` in `src/components/ThemeProvider.tsx` handles theme merging
4. System gracefully falls back to base MUI theme if BetaNXT is unavailable

### Important Context

- **Font Loading**: Roboto font is loaded via Next.js font optimization in `src/theme/index.ts`
- **CSS Variables**: Theme uses `cssVariables: true` for MUI v7 features
- **Dynamic Imports**: BetaNXT theme uses `eval('require')` pattern to avoid bundler issues
- **Standalone Output**: Next.js configured with `output: 'standalone'` for deployment