import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  turbopack: { root: __dirname },
  allowedDevOrigins: ["172.17.151.76", "localhost"],
};

export default nextConfig;
