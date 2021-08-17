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
        primary: 'var(--gr-color-primary)',
        'primary-contrast': 'var(--gr-color-primary-contrast)',
        'primary-shade': 'var(--gr-color-primary-shade)',
        'primary-tint': 'var(--gr-color-primary-tint)',

        secondary: 'var(--gr-color-secondary)',
        'secondary-contrast': 'var(--gr-color-secondary-contrast)',
        'secondary-shade': 'var(--gr-color-secondary-shade)',
        'secondary-tint': 'var(--gr-color-secondary-tint)',

        tertiary: 'var(--gr-color-tertiary)',
        'tertiary-contrast': 'var(--gr-color-tertiary-contrast)',
        'tertiary-shade': 'var(--gr-color-tertiary-shade)',
        'tertiary-tint': 'var(--gr-color-tertiary-tint)',

        success: 'var(--gr-color-success)',
        'success-contrast': 'var(--gr-color-success-contrast)',
        'success-shade': 'var(--gr-color-success-shade)',
        'success-tint': 'var(--gr-color-success-tint)',

        warning: 'var(--gr-color-warning)',
        'warning-contrast': 'var(--gr-color-warning-contrast)',
        'warning-shade': 'var(--gr-color-warning-shade)',
        'warning-tint': 'var(--gr-color-warning-tint)',

        danger: 'var(--gr-color-danger)',
        'danger-contrast': 'var(--gr-color-danger-contrast)',
        'danger-shade': 'var(--gr-color-danger-shade)',
        'danger-tint': 'var(--gr-color-danger-tint)',

        light: 'var(--gr-color-light)',
        'light-contrast': 'var(--gr-color-light-contrast)',
        'light-shade': 'var(--gr-color-light-shade)',
        'light-tint': 'var(--gr-color-light-tint)',

        medium: 'var(--gr-color-medium)',
        'medium-contrast': 'var(--gr-color-medium-contrast)',
        'medium-shade': 'var(--gr-color-medium-shade)',
        'medium-tint': 'var(--gr-color-medium-tint)',

        dark: 'var(--gr-color-dark)',
        'dark-contrast': 'var(--gr-color-dark-contrast)',
        'dark-shade': 'var(--gr-color-dark-shade)',
        'dark-tint': 'var(--gr-color-dark-tint)',
      },

      fontSize: {
        '2xs': 'var(--gr-font-size-xx-small)',
        xs: 'var(--gr-font-size-x-small)',
        sm: 'var(--gr-font-size-small)',
        base: 'var(--gr-font-size-medium)',
        lg: 'var(--gr-font-size-large)',
        xl: 'var(--gr-font-size-x-large)',
        '2xl': 'var(--gr-font-size-xx-large)',
        '3xl': 'var(--gr-font-size-xxx-large)',
        '4xl': 'var(--gr-font-size-xxxx-large)',
      },

      fontWeight: {
        thin: 'var(--gr-font-weight-thin)',
        extralight: 'var(--gr-font-weight-extra-light)',
        light: 'var(--gr-font-weight-light)',
        normal: 'var(--gr-font-weight-normal)',
        medium: 'var(--gr-font-weight-medium)',
        semibold: 'var(--gr-font-weight-semi-bold)',
        bold: 'var(--gr-font-weight-bold)',
        extrabold: 'var(--gr-font-weight-extra-bold)',
        black: 'var(--gr-font-weight-black)',
      },
      borderRadius: {
        sm: 'var(--gr-border-radius-small)',
        md: 'var(--gr-border-radius-medium)',
        lg: 'var(--gr-border-radius-large)',
        xl: 'var(--gr-border-radius-x-large)',
      },
      boxShadow: {
        xs: 'var(--gr-shadow-x-small)',
        sm: 'var(--gr-shadow-small)',
        md: 'var(--gr-shadow-medium)',
        lg: 'var(--gr-shadow-large)',
        xl: 'var(--gr-shadow-x-large)',
      },
      spacing: {
        '3xs': 'var(--gr-spacing-xxx-small)',
        '2xs': 'var(--gr-spacing-xx-small)',
        xs: 'var(--gr-spacing-x-small)',
        sm: 'var(--gr-spacing-small)',
        md: 'var(--gr-spacing-medium)',
        lg: 'var(--gr-spacing-large)',
        xl: 'var(--gr-spacing-x-large)',
        '2xl': 'var(--gr-spacing-xx-large)',
        '3xl': 'var(--gr-spacing-xxx-large)',
        '4xl': 'var(--gr-spacing-xxxx-large)',
      },
      leading: {
        snug: 'var(--gr-line-height-dense)',
        normal: 'var(--gr-line-height-normal)',
        loose: 'var(--gr-line-height-loose)',
      },
    },
    fontFamily: {
      sans: ['var(--gr-font-family)'],
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
