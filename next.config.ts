import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: "via.placeholder.com",
      search: ""
    }]
  }
};

export default nextConfig;
