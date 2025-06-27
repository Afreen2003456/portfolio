/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is enabled by default in Next.js 13+
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Ensure CSS is properly handled
  experimental: {
    optimizeCss: false
  }
}

module.exports = nextConfig 