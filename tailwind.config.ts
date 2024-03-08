import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "x-sm": "360px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1366px",
        "2xl": "1920px"
      }
    },
    screens: {
      "small-mobile-down": { max: "359px" },
      "large-mobile-down": { max: "479px" },
      "mobile-down": { max: "767px" },
      "tablet-down": { max: "1023px" },
      "laptop-down": { max: "1365px" },
      "desktop-down": { max: "1919px" },
      "4k-down": { max: "2559px" },
      "small-mobile-up": { min: "360px" },
      "large-mobile-up": { min: "480px" },
      "mobile-up": { min: "768px" },
      "tablet-up": { min: "1024px" },
      "laptop-up": { min: "1366px" },
      "desktop-up": { min: "1920px" },
      "4k-up": { min: "2560px" }
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)"
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)"
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)"
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)"
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)"
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)"
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      backgroundImage: {
        "auth-bg": "linear-gradient(to right, var(--primary) 50%, #fff 50%)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      },
      fontFamily: {
        sans: ["Inter", "system-ui"]
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config

export default config
