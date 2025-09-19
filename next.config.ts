import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: { buildActivity: false },
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "user-images.githubusercontent.com" }
    ]
  }
};

export default nextConfig;