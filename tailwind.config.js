/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#cd537a", // Pink (CTAs, highlights)
        secondary: "#6b5f8e", // Purple (headers, gradients)
        accent: "#fabe17", // Yellow (hover, accents)
        white: "#fefefe", // Clean background
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        shadow: ['"Shadows Into Light"', "cursive"],
      },
    },
  },
  plugins: [],
};
