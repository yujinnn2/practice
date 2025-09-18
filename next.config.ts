import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
};

export default nextConfig;


module.exports = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "github.com" },              // user-attachments, ?raw=1
      { protocol: "https", hostname: "user-images.githubusercontent.com" },
    ],
  },
};
