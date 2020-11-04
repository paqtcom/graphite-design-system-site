/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#1799de',
          700: '#00679e',
          800: '#051f2c',
          900: '#02131b',
        },
        green: '#0fbe78',
        purple: '#9775e7',
        yellow: '#fbbc4e',
        orange: '#ff6e41',
        red: '#ff5363',
        pink: 'ffa1aa',
        gray: {
          100: '#f4f8fb',
          200: '#e7eef4',
          300: '#dbe5eb',
          400: '#c1d1db',
          500: '#9eaeb7',
          600: '#76879f',
          700: '#697886',
          800: '#4c5960',
          900: '#314156',
        },
      },
      // TODO: CMPAPP-197 - this one is added for the specific height of the project switcher. Can we think of another solution based on the relative position of the element?
      height: {
        72: '22rem',
      },
    },
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    fill: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
