import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        backgroundImage: {
          "radial-red-blue":
            "radial-gradient(circle at center, #ff0000, #0000ff)",
          "radial-green-yellow":
            "radial-gradient(circle at center, #00ff00, #ffff00)",
          "radial-purple-pink":
            "radial-gradient(circle at center, #800080, #ff00ff)",
          "radial-orange-lime":
            "radial-gradient(circle at center, #ffa500, #00ff00)",
          "radial-teal-navy":
            "radial-gradient(circle at center, #008080, #000080)",
          "radial-maroon-aqua":
            "radial-gradient(circle at center, #800000, #00ffff)",
          "radial-olive-fuchsia":
            "radial-gradient(circle at center, #808000, #ff00ff)",
          "radial-cyan-magenta":
            "radial-gradient(circle at center, #00ffff, #ff00ff)",
          "radial-indigo-gold":
            "radial-gradient(circle at center, #4b0082, #ffd700)",
          "radial-silver-black":
            "radial-gradient(circle at center, #c0c0c0, #000000)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-debug-screens"),
  ],
} satisfies Config;

export default config;
