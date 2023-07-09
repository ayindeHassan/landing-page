/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./base/*.html'],
  theme: {
    extend: {
      fontSize: {
        small: '0.563rem'
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        Montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

