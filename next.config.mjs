/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/East_Midland_Cars_Privacy_Policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
