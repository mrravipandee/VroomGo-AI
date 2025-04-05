import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  experimental: {
    serverComponentsHmrCache: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aqgkgnlpscbrwebsbieq.supabase.co",
      },
    ],
  },

  /* config options here */
  async headers() { 
    return [
      {
        source: "/embed",
        headers: [
          {key: "content-security-policy",
          value: "frame-src 'self' https://car-seva.created.app/"}
        ]
      }
    ];
  }
};

export default nextConfig;
