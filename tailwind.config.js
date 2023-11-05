/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      "secondary-violet": "#D0D6F9",
      "secondary-white": "#FFFFFF",
      "primary-black": "#0B0D17",
    },
    fontFamily: {
      bellefair: ["Bellefair", "sans-serif"],
      "barlow-bondensed": ["Barlow_Condensed", "sans-serif"],
    },
    backgroundImage: (theme) => ({
      "sm-image": "url('/assets/home/background-home-mobile.jpg')",
      "md-image": "url('/assets/home/background-home-tablet.jpg')",
      "lg-image": "url('/assets/home/background-home-desktop.jpg')",
    }),
  },
  plugins: [],
};
