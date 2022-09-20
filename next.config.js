/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: { domains: ["cdn.simpledimpleworld.com"] },
};

module.exports = nextConfig;
