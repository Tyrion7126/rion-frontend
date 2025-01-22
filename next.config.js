const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.discordapp.com",
        protocol: "https",
        port: "",
        pathname: "/**",
      }
    ]
  }
}

module.exports = nextConfig
