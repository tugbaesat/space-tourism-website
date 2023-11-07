/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryViolet: "#D0D6F9",
      primaryWhite: "#FFFFFF",
      primaryBlack: "#0B0D17",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    fontFamily: {
      bellefair: ["Bellefair", "sans-serif"],
      barlowCondensed: ["Barlow_Condensed", "sans-serif"],
    },
    backgroundImage: (theme) => ({
      "sm-image": "url('/assets/home/background-home-mobile.jpg')",
      "md-image": "url('/assets/home/background-home-tablet.jpg')",
      "lg-image": "url('/assets/home/background-home-desktop.jpg')",
    }),
  },
  plugins: [],
};
