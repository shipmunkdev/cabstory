/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
