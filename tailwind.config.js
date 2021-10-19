const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      'background-content': '#121212',
      'background-footer': '#181818',
      'background-nav-bar': '#000',
      'footer-top': '#282828',
      text: '#fff'
    },
    extend: {
      gridTemplateRows: {
        'main-layout': '1fr 90px'
      },
      gridTemplateColumns: {
        content: '235px 1fr'
      },
      spacing: {
        '40px': '40px',
        '131px': '131px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
