import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "auth-background": "linear-gradient(to right, #2563eb 50%, #fff 50%)",
      },
      screens: {
        "small-mobile-up": "375px",
        "mobile-up": "480px",
        "large-mobile-up": "576px",
        "tablet-up": "768px",
        "desktop-up": "1024px",
        "large-desktop-up": "1280px",
        "xl-up": "1536px",
        "small-mobile-down": { max: "374px" },
        "mobile-down": { max: "479px" },
        "large-mobile-down": { max: "575px" },
        "tablet-down": { max: "767px" },
        "desktop-down": { max: "1023px" },
        "large-desktop-down": { max: "1279px" },
        "xl-down": { max: "1535px" },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "3rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
      colors: {
        "aff-blue": "#2563eb",
      },
    },
  },
  plugins: [],
} satisfies Config;
