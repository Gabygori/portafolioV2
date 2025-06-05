/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'export' // (opcional en Vercel, podés dejarlo o quitarlo si usás funciones de servidor)
};

module.exports = nextConfig;
