module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors')
    }),
    colors: {
      cyan: {
        DEFAULT: 'hsl(180, 29%, 50%)'
      },
      grayCyan: {
        light: 'hsl(180, 52%, 96%)',
        DEFAULT: 'hsl(180, 31%, 95%)',
        dark: 'hsl(180, 8%, 52%)',
        xdark: 'hsl(180, 14%, 20%)'
      }

    },
    fontFamily: {
      sans: ['Spartan', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
