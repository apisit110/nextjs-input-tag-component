import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      minify: true
    }
  }
}

export default nextConfig
