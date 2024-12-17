/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens : {
        'sm': '360px',
        'lg': '1024px'
      }
    },
  },
  plugins: [],
}

