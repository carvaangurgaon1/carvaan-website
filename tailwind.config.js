/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#cd537a', // Pink
        secondary: '#6b5f8e', // Purple
        accent: '#fabe17', // Yellow
        white: '#fefefe',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        shadow: ['"Shadows Into Light"', 'cursive'],
      },
    },
  },
};
