/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  ...(isProd && { output: 'export', distDir: 'dist' }),
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/ajinkya-portfolio' : '',
  assetPrefix: isProd ? '/ajinkya-portfolio/' : '',
}

module.exports = nextConfig
