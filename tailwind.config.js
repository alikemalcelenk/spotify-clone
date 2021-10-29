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
      blue: colors.blue,
      purple: '#4101F5',
      gray: '#333333',
      'soft-purple': '#BEE9D7',
      'background-content': '#121212',
      'background-footer': '#181818',
      'background-nav-bar': '#000000',
      'background-nav-bar-button': '#282828',
      'footer-top': '#282828',
      'splitter-nav-bar': '#282828',
      'play-bar-dark': '#535353',
      'play-bar-soft': '#B3B3B3',
      'spotify-green': '#3AB954',
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
        '9px': '9px',
        '40px': '40px',
        '93px': '93px',
        '131px': '131px',
        '3/10': '30%'
      },
      fontFamily: {
        'sf-regular': ['SFProDisplay-Regular'],
        'sf-medium': ['SFProDisplay-Medium'],
        'sf-semibold': ['SFProDisplay-SemiBold']
      },
      fontSize: {
        xxs: ['.7rem', '1rem']
      },
      minWidth: {
        '180px': '180px',
        '768px': '768px'
      },
      maxWidth: {
        '722px': '722px'
      },
      flex: {
        3: 3,
        4: 4
      }
    }
  },
  variants: {
    extend: { padding: ['hover'] }
  },
  plugins: []
}
