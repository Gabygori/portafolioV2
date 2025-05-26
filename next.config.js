/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/portafolioV2',
  assetPrefix: '/portafolioV2/',
};

module.exports = nextConfig;
