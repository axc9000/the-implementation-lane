import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/newsletter",
        destination: "https://newsletter.theimplementationlane.com/subscribe",
        permanent: false,
      },
      {
        source: "/subscribe",
        destination: "https://newsletter.theimplementationlane.com/subscribe",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
