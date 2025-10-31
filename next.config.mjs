/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow external images from Unsplash, Pexels, Pixabay, etc.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co", // placeholder image support
      },
    ],
  },
  // Optional: optimize build and enable experimental features
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};
export default nextConfig;
