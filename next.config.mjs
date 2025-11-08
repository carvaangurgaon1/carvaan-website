// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      // your existing sources
      { protocol: "https", hostname: "source.unsplash.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "placehold.co" },

      // 🔐 allow images served from Vercel Blob (trip images, etc.)
      { protocol: "https", hostname: "blob.vercel-storage.com" },
    ],
  },

  // helpful for API/server actions when sending JSON payloads
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
