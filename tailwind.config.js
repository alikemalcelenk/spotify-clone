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
      purple: '#4101F5',
      'soft-purple': '#BEE9D7',
      'background-content': '#121212',
      'background-footer': '#181818',
      'background-nav-bar': '#000000',
      'background-nav-bar-button': '#282828',
      'footer-top': '#282828',
      'splitter-nav-bar': '#282828',
      text: '#FFFFFF'
    },
    extend: {
      gridTemplateRows: {
        'main-layout': '1fr 90px'
      },
      gridTemplateColumns: {
        content: '230px 1fr'
      },
      spacing: {
        '40px': '40px',
        '131px': '131px'
      },
      fontFamily: {
        'sf-medium': ['SFProDisplay-Medium'],
        'sf-semibold': ['SFProDisplay-SemiBold'],
        'sf-regular': ['SFProDisplay-Regular']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
