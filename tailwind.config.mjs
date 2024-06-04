/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  // corePlugins: {
  //   preflight: false,
  // },
  theme: {
    extend: {
      colors: {
        bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        // primary: "hsl(var(--color-primary) / <alpha-value>)",
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        // secondary: "rgb(0 0 0 / <alpha-value>)",
        accent: {
          // 1: "hsl(250 204 21 / <alpha-value>)",
          DEFAULT: "hsl(var(--color-accent) / <alpha-value>)",
          // DEFAULT: colors.yellow[300],
          // 2: colors.rose[900],
        },
        content: "hsl(var(--color-content) / <alpha-value>)",
        contrast: "hsl(var(--color-contrast) / <alpha-value>)",
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
        'auto-fill-sm': 'repeat(auto-fill, minmax(18rem, 1fr))',
        'auto-fill-xs': 'repeat(auto-fill, minmax(16rem, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(20rem, 1fr))',
        'auto-fit-sm': 'repeat(auto-fit, minmax(18rem, 1fr))',
        'auto-fit-xs': 'repeat(auto-fit, minmax(16rem, 1fr))'
      }
    },
  },
  plugins: [animations],
};
