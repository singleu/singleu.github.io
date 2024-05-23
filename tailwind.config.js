/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.js",
    "./*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#212226',
        secondary: '#eeeee4'
      }
    }
  },
  plugins: [],
}

