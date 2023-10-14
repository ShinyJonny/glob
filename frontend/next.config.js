/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/projects",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
