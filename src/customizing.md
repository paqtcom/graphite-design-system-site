---
title: Customizing - Graphite Design System
---

# Customizing

[[toc]]

Graphite Design System components are built with [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) for easy customization of an application. CSS variables allow a value to be stored in one place, then referenced in multiple other places. They also make it possible to change CSS dynamically at runtime (which previously required a CSS preprocessor), useful for a dark theme for example. CSS variables make it easier than ever to override Graphite Design System components to match a brand or theme.

CSS variables can be set globally in an application in the :root selector.

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

&nbsp;

## Theme color Tokens

There are nine colors used throughout the Graphite Design System components:

- primary
- secondary
- tertiary
- success
- warning
- danger
- light
- medium
- dark

Each color consists of the following properties: a `base`, `contrast`, `shade`, and `tint`. The `base` and `contrast` colors also require a `rgb` property which is the same color, just in [rgb format](https://developer.mozilla.org/en-US/docs/Glossary/RGB). The Graphite Design System uses colors with an opacity (alpha) in several components. In order for this to work, those properties must be provided in RGB format. When changing any of the properties that have a variation ending in `-rgb`, it is important they are also provided in a comma separated format without parentheses.

<div class="mb-12">
  <legend class="mb-2 font-bold border-b">
    Primary
  </legend>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-primary</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-primary"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-primary-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-primary-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-primary-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-primary-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-primary-tint</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-primary-tint"></span>
    </div>
  </div>
</div>

<div class="mb-12">
  <legend class="mb-2 font-bold border-b">
    Secondary
  </legend>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-secondary</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-secondary"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-secondary-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-secondary-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-secondary-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-secondary-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-secondary-tint</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-secondary-tint"></span>
    </div>
  </div>
</div>

<div class="mb-12">
  <legend class="mb-2 font-bold border-b">
    Tertiary
  </legend>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-tertiary</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-tertiary"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-tertiary-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-tertiary-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-tertiary-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-tertiary-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-tertiary-tint</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-tertiary-tint"></span>
    </div>
  </div>
</div>

<div class="mb-12">
  <legend class="mb-2 font-bold border-b">
    Success
  </legend>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-success</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-success"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-success-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-success-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-success-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-success-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-success-tint</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-success-tint"></span>
    </div>
  </div>
</div>

<div class="mb-12">
  <legend class="mb-2 font-bold border-b">
    Warning
  </legend>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-warning</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-warning"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-warning-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-warning-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-warning-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-warning-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-warning-tint</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-warning-tint"></span>
    </div>
  </div>
</div>

<div class="mb-12">
  <legend class="mb-2 font-bold border-b">
    Danger
  </legend>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-danger</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-danger"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-danger-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-danger-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-danger-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-danger-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-danger-tint</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-danger-tint"></span>
    </div>
  </div>
</div>

<div class="mb-12">
  <legend class="mb-2 font-bold border-b">
    Light
  </legend>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-light</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-light"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-light-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-light-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-light-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-light-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-light-tint</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-light-tint"></span>
    </div>
  </div>
</div>

<div class="mb-12">
  <legend class="mb-2 font-bold border-b">
    Medium
  </legend>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-medium</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-medium"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-medium-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-medium-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-medium-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-medium-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-medium-tint</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-medium-tint"></span>
    </div>
  </div>
</div>

<div class="mb-12">
  <legend class="mb-2 font-bold border-b">
    Dark
  </legend>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-dark</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-dark"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-dark-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-dark-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-dark-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-dark-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-color-dark-tint</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-dark-tint"></span>
    </div>
  </div>
</div>

## Typography tokens

<div class="mb-12">
  <legend class="mb-2 font-bold border-b">
    Font family
  </legend>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-family</code>
    <code class="w-2/3">
      -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
    </span>
  </div>
</div>

<div class="mb-12">
  <legend class="mb-2 font-bold border-b">
    Font sizes
  </legend>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-size-xx-small</code>
    <span class="w-2/3 text-2xs">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-size-x-small</code>
    <span class="w-2/3 text-xs">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-size-small</code>
    <span class="w-2/3 text-sm">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-size-medium</code>
    <span class="w-2/3 text-base">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-size-large</code>
    <span class="w-2/3 text-lg">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-size-x-large</code>
    <span class="w-2/3 text-xl">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-size-xx-large</code>
    <span class="w-2/3 text-2xl">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-size-xxx-large</code>
    <span class="w-2/3 text-3xl leading-none">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-size-xxxx-large</code>
    <span class="w-2/3 text-4xl leading-none">The quick brown fox jumps over the lazy dog</span>
  </div>
</div>

<div>
  <legend class="mb-2 font-bold border-b">
    Font weights
  </legend>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-weight-thin</code>
    <span class="w-2/3 font-thin">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-weight-extra-light</code>
    <span class="w-2/3 font-extralight">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-weight-light</code>
    <span class="w-2/3 font-light">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-weight-normal</code>
    <span class="w-2/3 font-normal">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-weight-medium</code>
    <span class="w-2/3 font-medium">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-weight-semi-bold</code>
    <span class="w-2/3 font-semibold">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-weight-bold</code>
    <span class="w-2/3 font-bold">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-weight-extra-bold</code>
    <span class="w-2/3 font-extrabold">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--gr-font-weight-black</code>
    <span class="w-2/3 font-black ">The quick brown fox jumps over the lazy dog</span>
  </div>
</div>

&nbsp;

## Border radius tokens

<div class="mb-12">
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-border-radius-small</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden rounded-sm bg-primary" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-border-radius-medium</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden rounded-md bg-primary" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-border-radius-large</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden rounded-lg bg-primary" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-border-radius-x-large</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden bg-primary rounded-xl" />
  </div>
</div>

&nbsp;

## Elevation tokens

<div class="mb-12">
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-shadow-x-small</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden border shadow-xs" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-shadow-small</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden border shadow-sm" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-shadow-mediun</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden border shadow-md" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-shadow-large</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden border shadow-lg" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-shadow-x-large</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden border shadow-xl" />
  </div>
</div>

&nbsp;

## Spacing tokens

<div class="mb-12">
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-spacing-xxx-small</code>
    <span class="w-auto h-10 bg-primary pr-3xs" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-spacing-xx-small</code>
    <span class="w-auto h-10 bg-primary pr-2xs" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-spacing-x-small</code>
    <span class="w-auto h-10 bg-primary pr-xs" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-spacing-small</code>
    <span class="w-auto h-10 bg-primary pr-sm" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-spacing-medium</code>
    <span class="w-auto h-10 bg-primary pr-md" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-spacing-large</code>
    <span class="w-auto h-10 bg-primary pr-lg" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-spacing-x-large</code>
    <span class="w-auto h-10 bg-primary pr-xl" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-spacing-xx-large</code>
    <span class="w-auto h-10 bg-primary pr-2xl" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-spacing-xxx-large</code>
    <span class="w-auto h-10 bg-primary pr-3xl" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--gr-spacing-xxxx-large</code>
    <span class="w-auto h-10 bg-primary pr-4xl" />
  </div>
</div>
