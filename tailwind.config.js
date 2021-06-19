/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: 'var(--way-color-primary)',
        'primary-contrast': 'var(--way-color-primary-contrast)',
        'primary-shade': 'var(--way-color-primary-shade)',
        'primary-tint': 'var(--way-color-primary-tint)',

        secondary: 'var(--way-color-secondary)',
        'secondary-contrast': 'var(--way-color-secondary-contrast)',
        'secondary-shade': 'var(--way-color-secondary-shade)',
        'secondary-tint': 'var(--way-color-secondary-tint)',

        tertiary: 'var(--way-color-tertiary)',
        'tertiary-contrast': 'var(--way-color-tertiary-contrast)',
        'tertiary-shade': 'var(--way-color-tertiary-shade)',
        'tertiary-tint': 'var(--way-color-tertiary-tint)',

        success: 'var(--way-color-success)',
        'success-contrast': 'var(--way-color-success-contrast)',
        'success-shade': 'var(--way-color-success-shade)',
        'success-tint': 'var(--way-color-success-tint)',

        warning: 'var(--way-color-warning)',
        'warning-contrast': 'var(--way-color-warning-contrast)',
        'warning-shade': 'var(--way-color-warning-shade)',
        'warning-tint': 'var(--way-color-warning-tint)',

        danger: 'var(--way-color-danger)',
        'danger-contrast': 'var(--way-color-danger-contrast)',
        'danger-shade': 'var(--way-color-danger-shade)',
        'danger-tint': 'var(--way-color-danger-tint)',

        light: 'var(--way-color-light)',
        'light-contrast': 'var(--way-color-light-contrast)',
        'light-shade': 'var(--way-color-light-shade)',
        'light-tint': 'var(--way-color-light-tint)',

        medium: 'var(--way-color-medium)',
        'medium-contrast': 'var(--way-color-medium-contrast)',
        'medium-shade': 'var(--way-color-medium-shade)',
        'medium-tint': 'var(--way-color-medium-tint)',

        dark: 'var(--way-color-dark)',
        'dark-contrast': 'var(--way-color-dark-contrast)',
        'dark-shade': 'var(--way-color-dark-shade)',
        'dark-tint': 'var(--way-color-dark-tint)',

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
        '2xs': 'var(--way-font-size-xx-small)',
        xs: 'var(--way-font-size-x-small)',
        sm: 'var(--way-font-size-small)',
        base: 'var(--way-font-size-medium)',
        lg: 'var(--way-font-size-large)',
        xl: 'var(--way-font-size-x-large)',
        '2xl': 'var(--way-font-size-xx-large)',
        '3xl': 'var(--way-font-size-xxx-large)',
        '4xl': 'var(--way-font-size-xxxx-large)',
      },

      fontWeight: {
        light: 'var(--way-font-weight-light)',
        normal: 'var(--way-font-weight-normal)',
        semibold: 'var(--way-font-weight-semibold)',
        bold: 'var(--way-font-weight-bold)',
      },
    },
    fontFamily: {
      sans: ['var(--way-font-family)'],
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    fill: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
  purge: ['./src/**/*.ejs', './src/**/*.md'],
};
