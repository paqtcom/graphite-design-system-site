---
title: Customizing - Graphite Design System
---

# Customizing

[[toc]]

<p class="intro">Graphite components can be customized at a high level through design tokens. This gives you control over theme colors and general styling. For more advanced customizations, you can make use of component variables to target individual components.</p>

Graphite components are built with [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) (sometimes referred to as CSS variables) for easy customization of an application. CSS custom properties allow a value to be stored in one place, then referenced in multiple other places. They also make it possible to change CSS dynamically at runtime (which previously required a CSS preprocessor), useful for a dark theme for example. CSS custom properties make it easier than ever to override Graphite components to match a brand or theme.

## Design tokens

Graphite makes use of several design tokens to provide a consistent appearance across components. You can customize them and use them in your own application with pure CSS — no preprocessor required.

Design tokens offer a high-level way to customize the Design System with minimal effort. There are no component-specific design tokens, however, as design tokens are intended to be generic and highly reusable. To customize an individual component, refer to the section entitled [Component variables](#component-variables).

Design tokens are accessed through CSS custom properties that are defined in the `:root` block of `core.css`. This stylesheet is imported when you install Graphite components, so design tokens are available on your page at that point. Because design tokens are global, they're always prefixed with `--gr` to avoid collisions with other libraries.

To customize a design token, simply override it in your stylesheet using a `:root` block.

```css
:root {
  /* Changes the primary color palette to purple */
  --gr-color-primary: #a855f7;
  --gr-color-primary-rgb: 168, 85, 247;
  --gr-color-primary-contrast: #ffffff;
  --gr-color-primary-contrast-rgb: 255, 255, 255;
  --gr-color-primary-shade: #7e22ce;
  --gr-color-primary-tint: #d8b4fe;

  /* Changes the font family */
  --gr-font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Roboto', sans-serif;
}
```

Many design tokens are described [further along in this documentation](/tokens/overview/). For a complete list, refer to [core.css](https://github.com/paqtcom/graphite-design-system/blob/master/packages/core/src/css/core.scss) in the project's source code.

Tip: you can use these tokens in your own custom components, to align them with the Graphite components. For example:

```css
.sidebar {
  background-color: var(--gr-color-secondary);
  color: var(--gr-color-secondary-contrast);
  padding: var(--gr-spacing-medium);
}
```

## Component variables

The Graphite Design System provides variables that exist at the component level, such as `--background` and `--color`. For a list of the custom properties a component accepts, view the "CSS custom properties" section of its API reference. For example, see the [Button CSS custom properties](/components/button/#css-custom-properties).

```css
/* Set the color on all gr-button elements */
gr-button {
  --color: #222;
}

/* Set the background on a gr-button with the .fancy-button class */
gr-button.fancy-button {
  --background: #00ff00;
}
```
