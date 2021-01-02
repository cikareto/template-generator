module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sky-blue': {
          light: '#1AC8ED',
          DEFAULT: '#2667FF'
        },
        black: {
          DEFAULT: '#14110F'
        }
      }
    },
    fontFamily: {
      'sans': ['Source Sans Pro', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
