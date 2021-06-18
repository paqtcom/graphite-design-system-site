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
        primary: 'var(--way-color-primary)',
        primaryContrast: 'var(--way-color-primary-contrast)',
        primaryShade: 'var(--way-color-primary-shade)',
        primaryTint: 'var(--way-color-primary-tint)',

        secondary: 'var(--way-color-secondary)',
        secondaryContrast: 'var(--way-color-secondary-contrast)',
        secondaryShade: 'var(--way-color-secondary-shade)',
        secondaryTint: 'var(--way-color-secondary-tint)',

        danger: 'var(--way-color-danger)',
        dangerContrast: 'var(--way-color-danger-contrast)',
        dangerShade: 'var(--way-color-danger-shade)',
        dangerTint: 'var(--way-color-danger-tint)',

        light: 'var(--way-color-light)',
        lightContrast: 'var(--way-color-light-contrast)',
        lightShade: 'var(--way-color-light-shade)',
        lightTint: 'var(--way-color-light-tint)',

        medium: 'var(--way-color-medium)',
        mediumContrast: 'var(--way-color-medium-contrast)',
        mediumShade: 'var(--way-color-medium-shade)',
        mediumTint: 'var(--way-color-medium-tint)',

        dark: 'var(--way-color-dark)',
        darkContrast: 'var(--way-color-dark-contrast)',
        darkShade: 'var(--way-color-dark-shade)',
        darkTint: 'var(--way-color-dark-tint)',

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
        xxSmall: 'var(----way-font-size-xx-small)',
        xSmall: 'var(----way-font-size-x-small)',
        small: 'var(----way-font-size-small)',
        mediumSize: 'var(----way-font-size-medium)',
        large: 'var(----way-font-size-large)',
        xLarge: 'var(----way-font-size-x-large)',
        xxLarge: 'var(----way-font-size-xx-large)',
        xxxLarge: 'var(----way-font-size-xxx-large)',
        xxxxLarge: 'var(----way-font-size-xxxx-large)',
      },

      fontWeight: {
        semibold: 'var(--way-font-weight-semibold)',
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
