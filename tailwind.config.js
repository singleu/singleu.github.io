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
        primary: '#3E885B',
        secondary: '#FCBA04'
      }
    }
  },
  plugins: [],
}

