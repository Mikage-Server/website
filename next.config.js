/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true
  },
  async redirects() {
    return [
      {
        source: '/jms',
        destination: process.env.NEXT_PUBLIC_JMS_VOTE_URL,
        permanent: true
      },
      {
        source: '/monocraft',
        destination: process.env.NEXT_PUBLIC_MONOCRAFT_VOTE_URL,
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
