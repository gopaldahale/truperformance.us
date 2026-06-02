import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.truperformance.us',
        pathname: '/**', // Allows all image paths from this domain
      },
    ],
  },

};

export default nextConfig;
