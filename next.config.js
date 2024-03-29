/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "**"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/login",
        destination: "/auth/signin",
        permanent: true
      },
      {
        source: "/register",
        destination: "/auth/signup",
        permanent: true
      },
      {
        source: "/logout",
        destination: "/auth/signout",
        permanent: true
      },
      {
        source: "/auth",
        destination: "/auth/signin",
        permanent: true
      },
      {
        source: "/auth/new-user",
        destination: "/welcome",
        permanent: true
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/welcome",
        destination: "/auth/new-user"
      }
    ]
  }
}

module.exports = nextConfig
