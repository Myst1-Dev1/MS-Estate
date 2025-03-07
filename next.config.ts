import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol:"https",
        hostname:"images.alphacoders.com"
      },
      {
        protocol:"https",
        hostname:"images2.alphacoders.com"
      }
    ],
  },
};

export default nextConfig;
