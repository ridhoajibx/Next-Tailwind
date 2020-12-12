const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            'violet': colors.violet,
            'rose': colors.rose,
            'light-blue': colors.lightBlue
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
