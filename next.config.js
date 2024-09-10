/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: process.env.VERCEL_ENV ? [process.env.NEXT_PUBLIC_SUPABASE_URL] : ["127.0.0.1"],
    remotePatterns: [
      {
        protocol: process.env.VERCEL_ENV ? "https" : "http",
        hostname: process.env.VERCEL_ENV ? process.env.NEXT_PUBLIC_SUPABASE_URL : "127.0.0.1",
        port: process.env.VERCEL_ENV ? "" : "54321",
        pathname: "/storage/**",
      },
    ],
  },
}

module.exports = nextConfig
