import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.lovepik.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
