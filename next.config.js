/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ['ext.same-assets.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        pathname: '**',
      },
    ],
  },
  output: 'export',
};

module.exports = nextConfig;
