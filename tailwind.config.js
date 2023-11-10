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
      "sm-image-destination": "url('/assets/destination/background-destination-mobile.jpg')",
      "md-image-destination": "url('/assets/destination/background-destination-tablet.jpg')",
      "lg-image-destination": "url('/assets/destination/background-destination-desktop.jpg')",
      "sm-image-crew": "url('/assets/crew/background-crew-mobile.jpg')",
      "md-image-crew": "url('/assets/crew/background-crew-tablet.jpg')",
      "lg-image-crew": "url('/assets/crew/background-crew-desktop.jpg')",
    }),
  },
  plugins: [],
};
