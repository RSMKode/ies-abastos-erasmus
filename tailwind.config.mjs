/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // primary: "rgb(var(--color-primary) / <alpha-value>)",
        primary: "rgb(250 204 21 / <alpha-value>)",
        // secondary: "rgb(0 0 0 / <alpha-value>)",
        secondary: colors.white,
        accent: {
          // 1: "rgb(var(--color-accent-1) / <alpha-value>)",
          // 1: "rgb(250 204 21 / <alpha-value>)",
          DEFAULT: colors.yellow[300],
          2: colors.rose[900],
        },
        // bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        // content: "hsl(var(--color-content) / <alpha-value>)",
      },
      backgroundImage: "var(--bkg-gradient)",
      animation: {
        "spin-faster": "spin 0.5s ease infinite",
        "spin-fast": "spin 0.75s ease infinite",
        "spin-slower": "spin 35s ease infinite",
        "spin-slow": "spin 25s ease-in-out infinite reverse",
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(20rem, 1fr))',
        'auto-fill-sm': 'repeat(auto-fill, minmax(15rem, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(20rem, 1fr))',
        'auto-fit-sm': 'repeat(auto-fit, minmax(13rem, 1fr))'
      }
    },
  },
  plugins: [animations],
};
