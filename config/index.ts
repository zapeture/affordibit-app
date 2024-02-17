export const CONFIG = {
  default: {
    APP_URL: {
      SERVER: {
        PORT: process.env.PORT || 3000,
        HOST: process.env.HOST || "localhost",
        PROTOCOL: process.env.PROTOCOL || "http",
        FULL_URL: `${process.env.PROTOCOL || "http"}://${process.env.HOST || "localhost"}:${process.env.PORT || 3000}`
      },
      CLIENT: {
        PORT: process.env.NEXT_PUBLIC_PORT || 3000,
        HOST: process.env.NEXT_PUBLIC_HOST || "localhost",
        PROTOCOL: process.env.NEXT_PUBLIC_PROTOCOL || "http",
        FULL_URL: `${process.env.NEXT_PUBLIC_PROTOCOL || "http"}://${process.env.NEXT_PUBLIC_HOST || "localhost"}:${process.env.NEXT_PUBLIC_PORT || 3000}`
      }
    }
  },
  development: {},
  test: {},
  production: {}
} as const
