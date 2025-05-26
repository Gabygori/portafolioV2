/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/portafolio',
  assetPrefix: '/portafolio/',
};

module.exports = nextConfig;
