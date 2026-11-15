import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The client portal moved from /portal to /service.
    return [{ source: "/portal/:path*", destination: "/service/:path*", permanent: false }];
  },
};

export default nextConfig;
