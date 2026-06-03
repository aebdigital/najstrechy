/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // The original is a static scrape; we don't ship an ESLint config here.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
