---
title: Customizing - Way2Web Design System
---

# Customizing

[[toc]]

Graphite components can be customized through design tokens. We use them instead of hard-coded values (such as hex values for color or pixel values for font-sizes) in order to maintain a scalable and consistent visual system for UI development.

&nbsp;

## Theme color Tokens

<div class="mb-12">
  <legend class="mb-2 font-bold border-b">
    Primary
  </legend>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-primary</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-primary"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-primary-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-primary-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-primary-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-primary-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-primary-tint</code>
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
    <code class="w-1/3 mr-3">--way-color-secondary</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-secondary"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-secondary-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-secondary-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-secondary-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-secondary-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-secondary-tint</code>
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
    <code class="w-1/3 mr-3">--way-color-tertiary</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-tertiary"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-tertiary-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-tertiary-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-tertiary-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-tertiary-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-tertiary-tint</code>
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
    <code class="w-1/3 mr-3">--way-color-success</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-success"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-success-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-success-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-success-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-success-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-success-tint</code>
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
    <code class="w-1/3 mr-3">--way-color-warning</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-warning"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-warning-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-warning-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-warning-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-warning-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-warning-tint</code>
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
    <code class="w-1/3 mr-3">--way-color-danger</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-danger"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-danger-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-danger-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-danger-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-danger-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-danger-tint</code>
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
    <code class="w-1/3 mr-3">--way-color-light</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-light"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-light-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-light-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-light-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-light-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-light-tint</code>
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
    <code class="w-1/3 mr-3">--way-color-medium</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-medium"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-medium-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-medium-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-medium-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-medium-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-medium-tint</code>
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
    <code class="w-1/3 mr-3">--way-color-dark</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-dark"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-dark-contrast</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-dark-contrast"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-dark-shade</code>
    <div class="flex flex-col w-2/3 h-10 overflow-hidden border rounded">
      <span class="flex-1 bg-dark-shade"></span>
    </div>
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-color-dark-tint</code>
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
    <code class="w-1/3 mr-3">--way-font-family</code>
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
    <code class="w-1/3 mr-3">--way-font-size-xx-small</code>
    <span class="w-2/3 text-2xs">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--way-font-size-x-small</code>
    <span class="w-2/3 text-xs">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--way-font-size-small</code>
    <span class="w-2/3 text-sm">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--way-font-size-medium</code>
    <span class="w-2/3 text-base">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--way-font-size-large</code>
    <span class="w-2/3 text-lg">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--way-font-size-x-large</code>
    <span class="w-2/3 text-xl">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--way-font-size-xx-large</code>
    <span class="w-2/3 text-2xl">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--way-font-size-xxx-large</code>
    <span class="w-2/3 text-3xl leading-none">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--way-font-size-xxxx-large</code>
    <span class="w-2/3 text-4xl leading-none">The quick brown fox jumps over the lazy dog</span>
  </div>
</div>

<div>
  <legend class="mb-2 font-bold border-b">
    Font weights
  </legend>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--way-font-weight-thin</code>
    <span class="w-2/3 font-thin">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--way-font-weight-extra-light</code>
    <span class="w-2/3 font-extralight">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--way-font-weight-light</code>
    <span class="w-2/3 font-light">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--way-font-weight-normal</code>
    <span class="w-2/3 font-normal">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--way-font-weight-medium</code>
    <span class="w-2/3 font-medium">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--way-font-weight-semi-bold</code>
    <span class="w-2/3 font-semibold">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--way-font-weight-bold</code>
    <span class="w-2/3 font-bold">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--way-font-weight-extra-bold</code>
    <span class="w-2/3 font-extrabold">The quick brown fox jumps over the lazy dog</span>
  </div>
  <div class="flex items-center mb-8">
    <code class="w-1/3 mr-3">--way-font-weight-black</code>
    <span class="w-2/3 font-black ">The quick brown fox jumps over the lazy dog</span>
  </div>
</div>

&nbsp;

## Border radius tokens

<div class="mb-12">
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-border-radius-small</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden border rounded-sm" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-border-radius-medium</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden border rounded-md" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-border-radius-large</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden border rounded-lg" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-border-radius-x-large</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden border rounded-xl" />
  </div>
</div>

&nbsp;

## Elevation tokens

<div class="mb-12">
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-shadow-x-small</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden border shadow-xs" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-shadow-small</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden border shadow-sm" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-shadow-mediun</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden border shadow-md" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-shadow-large</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden border shadow-lg" />
  </div>
  <div class="flex items-center mb-3">
    <code class="w-1/3 mr-3">--way-shadow-x-large</code>
    <span class="flex flex-col w-2/3 h-10 overflow-hidden border shadow-xl" />
  </div>
</div>

&nbsp;

## Spacing tokens

<div class="mb-12">
  <div class="grid grid-cols-9">
    <code class="mr-xs">--way-spacing-xxx-small</code>
    <code class="mr-sm">--way-spacing-xx-small</code>
    <code class="mr-md">--way-spacing-x-small</code>
    <code class="mr-lg">--way-spacing-small</code>
    <code class="mr-xl">--way-spacing-medium</code>
    <code class="mr-2xl">--way-spacing-large</code>
    <code class="mr-3xl">--way-spacing-x-large</code>
    <code class="mr-4xl">--way-spacing-xx-large<</code>
    <code class="mr-5xl">--way-spacing-xxx-large</code>
    <code class="mr-6xl">--way-spacing-xxxx-large</code>
  </div>
</div>
