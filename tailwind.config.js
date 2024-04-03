/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Public Sans', ...defaultTheme.fontFamily.sans],
    },
    colors:{
      'bg': "#FDF5E6", //
      'bg1': "#FFE5B4", //
      'bg2': "#F5F5DC",
      'bg_white': "#FFFFFF", //
      'header': "#EA596E", //
      'subtitles' :"#001F3F", //
      'body' :"#385572", //
      'button' : "#B6E2D3", //
      'footer' : "#DAA7B1", //
    },
  },
  plugins: [],
}

