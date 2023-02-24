/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true
  },
  async redirects() {
    return [
      {
        source: '/monocraft',
        destination: process.env.NEXT_PUBLIC_MONOCRAFT_VOTE_URL ?? 'https://example.com/',
        permanent: true
      },
    ];
  }
};

module.exports = nextConfig;
