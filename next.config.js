/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is enabled by default in Next.js 13+
  output: 'export',
  trailingSlash: true,
  basePath: '/haaris-portfolio',
  assetPrefix: '/haaris-portfolio',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 