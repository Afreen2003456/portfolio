/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is enabled by default in Next.js 13+
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/haaris-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/haaris-portfolio/' : '',
  images: {
    unoptimized: true
  },
  // Ensure CSS is properly handled
  experimental: {
    optimizeCss: false
  }
}

module.exports = nextConfig 