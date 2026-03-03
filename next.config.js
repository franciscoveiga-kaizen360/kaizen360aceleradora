/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export (no Next.js image server)
  },
  trailingSlash: true, // Generates /politica-privacidade/index.html
}

module.exports = nextConfig
