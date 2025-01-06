/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ittqmvpxkpbalisfbbjo.supabase.co",
      },
    ],
  },
};

export default nextConfig;
