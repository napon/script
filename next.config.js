/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: process.env.VERCEL_ENV ? [] : ["127.0.0.1"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.SUPABASE_STORAGE_HOSTNAME || "127.0.0.1",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

module.exports = nextConfig
