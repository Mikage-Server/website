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
        destination: 'https://monocraft.net/servers/tRkOlmkTq0r0lOX4Ir9c/vote',
        permanent: true
      },
    ];
  }
};

module.exports = nextConfig;
