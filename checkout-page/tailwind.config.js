/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat']
      },
      margin: {
        'percent': '5%',
      },
      colors: {
        product: {
          100: '#F2F2F2',
          200: '#828282'
        },
        price: '#F2994A',
        formTitle: '#333333',
        formLabel: '#4F4F4F',
      }
    },
  },
  plugins: [],
}

