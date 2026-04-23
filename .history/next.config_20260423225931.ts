import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/solveria-labs",
  assetPrefix: "/solveria-labs/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
