/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "DM Sans",
          "Inter",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: ["DM Serif Display", "serif", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        cream: "#FBF5EE",
        coral: "#F06D73",
        lavender: "#E1E1FF",
        dark: "#1A1A1A",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
