/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/diagnostico',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
