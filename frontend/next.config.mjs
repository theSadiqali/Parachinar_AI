/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true
  },
  images: {
    formats: ['image/avif', 'image/webp']
  }
};

export default nextConfig;

