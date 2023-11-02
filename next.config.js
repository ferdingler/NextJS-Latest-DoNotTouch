/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    imageSizes: [128, 256, 512, 1024, 2048, 4096],
    minimumCacheTTL: 111,
    remotePatterns: [
      {
        hostname: "**.unsplash.com"
      },
      {
        hostname: "**.lambda-url.us-west-2.on.aws"
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/isr',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=10, stale-while-revalidate=10',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
