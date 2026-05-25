import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Lint runs as its own CI job — decouple from build (Kisimenti pattern).
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
