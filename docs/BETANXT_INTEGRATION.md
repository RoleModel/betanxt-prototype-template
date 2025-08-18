# BetaNXT Design System Integration Guide

This guide explains how to integrate the BetaNXT theme and components into your project.

## 🎨 Theme Integration

The BetaNXT design system is already included as a dependency (`@rolemodel/betanxt-design-system`). To integrate the theme:

### Step 1: Identify Available Exports

First, check what the BetaNXT design system exports by examining its structure:

```bash
# After npm install, check the available exports
ls node_modules/@rolemodel/betanxt-design-system/dist/
```

### Step 2: Import BetaNXT Theme

Based on the export pattern, you can import theme parts from specific files. Update `src/theme/index.ts`:

```typescript
// Option A: Import complete theme
import { theme as betaNXTTheme } from '@rolemodel/betanxt-design-system/theme';

// Option B: Import specific design tokens
import { palette } from '@rolemodel/betanxt-design-system/palette';
import { typography } from '@rolemodel/betanxt-design-system/typography';
import { components } from '@rolemodel/betanxt-design-system/components';

// Option C: Import theme factory
import { createBetaNXTTheme } from '@rolemodel/betanxt-design-system';
```

### Step 3: Apply BetaNXT Theme

Choose one of these approaches in `src/theme/index.ts`:

#### Approach A: Use Complete BetaNXT Theme
```typescript
import { theme as betaNXTTheme } from '@rolemodel/betanxt-design-system/theme';

const theme = createTheme({
  ...betaNXTTheme,
  cssVariables: true,
  typography: {
    ...betaNXTTheme.typography,
    fontFamily: 'var(--font-roboto), Arial, sans-serif',
  },
});
```

#### Approach B: Merge Design Tokens
```typescript
import { palette, typography, components } from '@rolemodel/betanxt-design-system';

const theme = createTheme({
  cssVariables: true,
  palette,
  typography: {
    ...typography,
    fontFamily: 'var(--font-roboto), Arial, sans-serif',
  },
  components,
});
```

#### Approach C: Use Theme Factory
```typescript
import { createBetaNXTTheme } from '@rolemodel/betanxt-design-system';

const theme = createBetaNXTTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto), Arial, sans-serif',
  },
  // Add custom overrides
});
```

## 🔧 Theme Provider Setup

The `BetaNXTThemeProvider` is ready to use with BetaNXT themes. Update `src/components/ThemeProvider.tsx`:

```typescript
import { theme as betaNXTTheme } from '@rolemodel/betanxt-design-system/theme';

export const BetaNXTThemeProvider: React.FC<BetaNXTThemeProviderProps> = ({
  children,
  customTheme = {},
}) => {
  const mergedTheme = React.useMemo(() => {
    return createTheme({
      ...betaNXTTheme,
      ...customTheme
    });
  }, [customTheme]);

  return (
    <MuiThemeProvider theme={mergedTheme}>
      {children}
    </MuiThemeProvider>
  );
};
```

## 🚨 Troubleshooting

### Issue: Module not found
- Ensure your GitHub token is set correctly
- Check that `@rolemodel/betanxt-design-system` is installed
- Verify the import paths match the actual exports

### Issue: Theme not applying
- Check that the theme is properly imported and merged
- Ensure `ThemeProvider` is wrapping your app

### Issue: TypeScript errors
- Install any missing type dependencies
- Check if the design system exports TypeScript definitions

## 📚 Next Steps

1. **Explore Components**: Check the BetaNXT Storybook for available components
3. **Update Examples**: Replace example components with BetaNXT versions
4. **Documentation**: Document your specific integration choices for the team


