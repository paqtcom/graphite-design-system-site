/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  mode: 'jit',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      maxHeight: {
        '(screen-16)': 'calc(100vh - 4rem)',
      },
      inset: {
        16: '4rem',
      },
      transitionProperty: {
        padding: 'padding',
      },
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
        thin: 'var(--way-font-weight-thin)',
        extralight: 'var(--way-font-weight-extra-light)',
        light: 'var(--way-font-weight-light)',
        normal: 'var(--way-font-weight-normal)',
        medium: 'var(--way-font-weight-medium)',
        semibold: 'var(--way-font-weight-semi-bold)',
        bold: 'var(--way-font-weight-bold)',
        extrabold: 'var(--way-font-weight-extra-bold)',
        black: 'var(--way-font-weight-black)',
      },
      borderRadius: {
        sm: 'var(--way-border-radius-small)',
        md: 'var(--way-border-radius-medium)',
        lg: 'var(--way-border-radius-large)',
        xl: 'var(--way-border-radius-x-large)',
      },
      boxShadow: {
        xs: 'var(--way-shadow-x-small)',
        sm: 'var(--way-shadow-small)',
        md: 'var(--way-shadow-medium)',
        lg: 'var(--way-shadow-large)',
        xl: 'var(--way-shadow-x-large)',
      },

      spacing: {
        '3xs': 'var(--way-spacing-xxx-small)',
        '2xs': 'var(--way-spacing-xx-small)',
        xs: 'var(--way-spacing-x-small)',
        sm: 'var(--way-spacing-small)',
        md: 'var(--way-spacing-medium)',
        lg: 'var(--way-spacing-large)',
        xl: 'var(--way-spacing-x-large)',
        '2xl': 'var(--way-spacing-xx-large)',
        '3xl': 'var(--way-spacing-xxx-large)',
        '4xl': 'var(--way-spacing-xxxx-large)',
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
