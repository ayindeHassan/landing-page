/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./base/*.html'],
  theme: {
    extend: {
      colors: {
        social: {
          100: '#E5E5E5',
          200: '#A9A9A9',
          300: '#BDBDBD',
          400:'#4E5150',
        }
      },
      width: {
        social: '4.6rem',
      },
      fontFamily: {
        Montserrat: ['Montserrat']
      },
      maxWidth: {
        social: '18.3rem'
      }
    },
  },
  plugins: [],
}

