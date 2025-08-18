/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable TypeScript strict mode
  typescript: {
    // Dangerously allow production builds even if your project has TypeScript errors
    ignoreBuildErrors: false,
  },
  
  // Experimental features
  experimental: {
    // Enable CSS modules
    cssModules: true,
  },

  // Environment variables that should be exposed to the browser
  env: {
    // Add any public environment variables here
  },

  // Configure the build output
  output: 'standalone',

  // Webpack configuration
  webpack: (config) => {
    // Important: return the modified config
    return config;
  },
};

export default nextConfig;


