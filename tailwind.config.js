module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: {
        DEFAULT: '#FFFFFF',
      },
      blue: {
        light: '#2c344b',
        dark: '#121725',
      },
      green: {
        light: '#b3ffe2',
        DEFAULT: '#54e6af',
      },
      gray: {
        DEFAULT: '#c2cbe5',
      },
      red: {
        DEFAULT: '#fb3e3e',
      }
    },
    extend: {
      width: {
        '39': '9.75rem',
        '104': '26rem',
        '120': '30rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
