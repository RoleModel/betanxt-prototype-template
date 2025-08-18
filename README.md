# BetaNXT Prototype Template

A modern Next.js boilerplate with Material-UI v7 and BetaNXT design system integration. This template provides a production-ready starting point for building React applications with the latest tools and best practices.

## 🚀 Features

- **Next.js 15** - App Router, Server Components, and React 19 support
- **Material-UI v7** - Latest version with CSS variables and improved theming
- **TypeScript** - Full type safety with strict configuration
- **BetaNXT Design System** - Ready for private GitHub registry integration
- **Modern Styling** - Emotion with CSS variables and theme customization
- **Production Ready** - Optimized build configuration and deployment setup
- **Developer Experience** - ESLint, path aliases, and hot reload

## 📦 Quick Start

### Using create-next-app (Recommended)

```bash
# Create a new project using this template
npx create-next-app@latest new-prototype --example https://github.com/RoleModel/betanxt-prototype-template --use-pnpm

# Navigate to project directory
cd my-project

# Install dependencies
npm install
```

### Manual Clone

```bash
git clone https://github.com/Rolemodel/betanxt-protoype-template.git my-project
cd my-project
npm install
```

### Environment Setup

1. **Set up GitHub Token for BetaNXT Design System:**

   Create a `.env.local` file and add your GitHub personal access token:

   ```bash
   GITHUB_TOKEN=your_personal_access_token_here
   ```

   Or export it in your shell:

   ```bash
   export GITHUB_TOKEN=your_personal_access_token
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   The BetaNXT design system will be automatically installed and the theme applied.

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with MUI setup
│   ├── page.tsx           # Home page
│   └── examples/          # Component examples
├── components/
│   ├── BetaNXT/           # BetaNXT design system integration
│   └── examples/          # Example components
├── theme/
│   └── index.ts           # MUI theme configuration
├── types/                 # TypeScript type definitions
├── lib/                   # Utility functions
└── styles/                # Global styles
```

## 🎨 Theming and Customization

### Material-UI Theme

The theme is configured in `src/theme/index.ts` with:

- CSS variables enabled for better SSR and theming
- Roboto font integration with Next.js font optimization
- Custom color palette and component overrides
- Dark mode support ready

### BetaNXT Integration

The BetaNXT design system (`@rolemodel/betanxt-design-system`) is pre-configured and ready to use:

- **Automatic Theme Integration**: BetaNXT theme is automatically loaded in `src/theme/index.ts`
- **Theme Provider**: Custom `BetaNXTThemeProvider` in `src/components/ThemeProvider.tsx`
- **Fallback Support**: Works with or without BetaNXT - graceful fallbacks included

**Setup Required:**
1. Configure `.npmrc` with your GitHub token (see Environment Setup below)
2. Run `npm install` - BetaNXT theme will be automatically applied
3. Import components directly: `import { Button } from '@rolemodel/betanxt-design-system'`

### CSS Variables

This template uses MUI's CSS variables feature for:

- Better server-side rendering performance
- Easier theme switching and customization
- Reduced bundle size
- Improved runtime performance

## 🔧 Configuration

### TypeScript

- Strict mode enabled
- Path aliases configured (`@/` points to `src/`)
- Next.js specific types included

### ESLint

- Next.js recommended rules
- TypeScript integration
- Customizable rules in `.eslintrc.json`

### Next.js

- App Router configuration
- TypeScript support
- Optimized builds
- Font optimization for Roboto

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 📚 Examples

Visit `/examples` to see Material-UI components in action:

- Buttons and actions
- Form controls
- Data display components
- Navigation elements
- Feedback components

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/material-ui/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [BetaNXT Design System](#) - Replace with actual documentation link

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- Check the [Issues](https://github.com/rolemodel/betanxt-protoype-template/issues) for common problems
- Create a new issue for bugs or feature requests
- Consult the Material-UI and Next.js documentation for framework-specific questions

---

Made with ❤️ using Next.js, Material-UI, and BetaNXT Design System
