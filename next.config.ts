import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(process.env.SITES_STATIC_EXPORT === '1'
    ? { output: 'export', trailingSlash: true, images: { unoptimized: true } }
    : {}),
};
export default nextConfig;
