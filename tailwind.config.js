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
        primary: '#1799de',
        primaryContrast: '#fff',
        primaryShade: '#00679e',
        primaryTint: '#46b2ec',

        secondary: '#061f2c',
        secondaryContrast: '#fff',
        secondaryShade: '#000',
        secondaryTint: '#0a415c',

        danger: '#ff5363',
        dangerContrast: '#051f2c',
        dangerShade: '#ff1f35',
        dangerTint: '#ff8591',

        light: '#dbe5eb',
        lightContrast: '#051f2c',
        lightShade: '#c1d1db',
        lightTint: '#e7eef4',

        medium: '#697886',
        mediumContrast: '#fff',
        mediumShade: '#4c5960',
        mediumTint: '#9eaeb7',

        dark: '#02131b',
        darkContrast: '#ffffff',
        darkShade: '#000',
        darkTint: '#051f2c',

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

      fontSize: {
        xxSmall: '0.625rem',
        xSmall: '0.75rem',
        small: '0.875rem',
        medium: '1rem',
        large: '1.25rem',
        xLarge: '1.5rem',
        xxLarge: '2.25rem',
        xxxLarge: '3rem',
        xxxxLarge: '4.5rem',
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
  purge:
  [
    './src/**/*.ejs',
    './src/**/*.md',
  ],
};
