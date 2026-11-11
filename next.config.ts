import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/branntilsyn",
        destination: "/branninspeksjon",
        permanent: true,
      },
      // Vercel-URLer (hoved + preview-deploys) skal ikke være indekserbare duplikater av hoveddomenet
      {
        source: "/:path*",
        has: [{ type: "host", value: ".+\\.vercel\\.app" }],
        destination: "https://harstadbrannkonsult.no/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
