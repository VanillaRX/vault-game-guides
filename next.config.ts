import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vault-game-guides",
  images: { unoptimized: true },
};

export default nextConfig;
