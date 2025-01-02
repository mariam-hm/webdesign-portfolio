/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**", // Matches all paths
      },
    ],
  },
  // * Will ignore type errors at build time, be cautious
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
