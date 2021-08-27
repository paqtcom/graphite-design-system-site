---
title: Color tokens - Graphite Design System
---

# Color tokens

[[toc]]

<p class="intro">Color tokens are used to maintain consistent color use throughout your app.</p>

There are nine colors used throughout the Graphite Design System: primary, secondary, tertiary, success, warning, danger, light, medium, and dark (currently secondary & tertiary are unused as of yet).

Each color consists of the following properties: a `base`, `contrast`, `shade`, and `tint`. The `base` and `contrast` colors also require a `rgb` property which is the same color, just in [rgb format](https://developer.mozilla.org/en-US/docs/Glossary/RGB). The Graphite Design System uses colors with an opacity (alpha) in several components. In order for this to work, those properties must be provided in RGB format. When changing any of the properties that have a variation ending in `-rgb`, it is important they are also provided in a comma separated format without parentheses.

| Name           | Property                          | Description                                                              |
| :------------- | :-------------------------------- | ------------------------------------------------------------------------ |
| Base           | `--gr-color-primary`              | The main color that all variations are derived from                      |
| Base (rgb)     | `--gr-color-primary-rgb`          | The base color in red, green, blue format                                |
| Contrast       | `--gr-color-primary-contrast`     | The opposite of the base color, should be visible against the base color |
| Contrast (rgb) | `--gr-color-primary-contrast-rgb` | The contrast color in red, green, blue format                            |
| Shade          | `--gr-color-primary-shade`        | A slightly darker version of the base color                              |
| Tint           | `--gr-color-primary-tint`         | A slightly lighter version of the base color                             |

You could use this [Color Generator](https://ionicframework.com/docs/theming/color-generator) from Ionic and simply replace `--ion` with `--gr`.

Please use [this contrast checker](https://webaim.org/resources/contrastchecker/) for accessiblity.

\* Ensure these color tokens have a minimum contrast ratio of `4:5:1` with the background color of your application, because they are used for normal text.

## Primary

| Token                             | Value           | Example                                                |
| :-------------------------------- | :-------------- | :----------------------------------------------------- |
| `--gr-color-primary` \*           | `#1079b2`       | <div class="h-8 border rounded bg-primary" />          |
| `--gr-color-primary-rgb` \*       | `16, 121, 178`  | <div class="h-8 border rounded bg-primary" />          |
| `--gr-color-primary-contrast`     | `#ffffff`       | <div class="h-8 border rounded bg-primary-contrast" /> |
| `--gr-color-primary-contrast-rgb` | `255, 255, 255` | <div class="h-8 border rounded bg-primary-contrast" /> |
| `--gr-color-primary-shade`        | `#0d6696`       | <div class="h-8 border rounded bg-primary-shade" />    |
| `--gr-color-primary-tint`         | `#1499e1`       | <div class="h-8 border rounded bg-primary-tint" />     |

## Secondary

| Token                               | Value           | Example                                                  |
| :---------------------------------- | :-------------- | :------------------------------------------------------- |
| `--gr-color-secondary`              | `#051f2c`       | <div class="h-8 border rounded bg-secondary" />          |
| `--gr-color-secondary-rgb`          | `5, 31, 44`     | <div class="h-8 border rounded bg-secondary" />          |
| `--gr-color-secondary-contrast`     | `#ffffff`       | <div class="h-8 border rounded bg-secondary-contrast" /> |
| `--gr-color-secondary-contrast-rgb` | `255, 255, 255` | <div class="h-8 border rounded bg-secondary-contrast" /> |
| `--gr-color-secondary-shade`        | `#000000`       | <div class="h-8 border rounded bg-secondary-shade" />    |
| `--gr-color-secondary-tint`         | `#0a415c`       | <div class="h-8 border rounded bg-secondary-tint" />     |

## Tertiary

| Token                              | Value           | Example                                                 |
| :--------------------------------- | :-------------- | :------------------------------------------------------ |
| `--gr-color-tertiary`              | `#0c4a6e`       | <div class="h-8 border rounded bg-tertiary" />          |
| `--gr-color-tertiary-rgb`          | `12, 74, 110`   | <div class="h-8 border rounded bg-tertiary" />          |
| `--gr-color-tertiary-contrast`     | `#ffffff`       | <div class="h-8 border rounded bg-tertiary-contrast" /> |
| `--gr-color-tertiary-contrast-rgb` | `255, 255, 255` | <div class="h-8 border rounded bg-tertiary-contrast" /> |
| `--gr-color-tertiary-shade`        | `#083249`       | <div class="h-8 border rounded bg-tertiary-shade" />    |
| `--gr-color-tertiary-tint`         | `#106393`       | <div class="h-8 border rounded bg-tertiary-tint" />     |

## Success

| Token                             | Value          | Example                                                |
| :-------------------------------- | :------------- | :----------------------------------------------------- |
| `--gr-color-success`              | `#0fbe78`      | <div class="h-8 border rounded bg-success" />          |
| `--gr-color-success-rgb`          | `15, 190, 120` | <div class="h-8 border rounded bg-success" />          |
| `--gr-color-success-contrast`     | `#000000`      | <div class="h-8 border rounded bg-success-contrast" /> |
| `--gr-color-success-contrast-rgb` | `0, 0, 0`      | <div class="h-8 border rounded bg-success-contrast" /> |
| `--gr-color-success-shade` \*     | `#057f4e`      | <div class="h-8 border rounded bg-success-shade" />    |
| `--gr-color-success-tint`         | `#12e28f`      | <div class="h-8 border rounded bg-success-tint" />     |

## Warning

| Token                             | Value          | Example                                                |
| :-------------------------------- | :------------- | :----------------------------------------------------- |
| `--gr-color-warning`              | `#fbbc4e`      | <div class="h-8 border rounded bg-warning" />          |
| `--gr-color-warning-rgb`          | `251, 188, 78` | <div class="h-8 border rounded bg-warning" />          |
| `--gr-color-warning-contrast`     | `#051f2c`      | <div class="h-8 border rounded bg-warning-contrast" /> |
| `--gr-color-warning-contrast-rgb` | `5, 31, 44`    | <div class="h-8 border rounded bg-warning-contrast" /> |
| `--gr-color-warning-shade` \*     | `#9e6400`      | <div class="h-8 border rounded bg-warning-shade" />    |
| `--gr-color-warning-tint`         | `#fdd187`      | <div class="h-8 border rounded bg-warning-tint" />     |

## Danger

| Token                            | Value           | Example                                               |
| :------------------------------- | :-------------- | :---------------------------------------------------- |
| `--gr-color-danger` \*           | `#e60017`       | <div class="h-8 border rounded bg-danger" />          |
| `--gr-color-danger-rgb` \*       | `230, 0, 23`    | <div class="h-8 border rounded bg-danger" />          |
| `--gr-color-danger-contrast`     | `#ffffff`       | <div class="h-8 border rounded bg-danger-contrast" /> |
| `--gr-color-danger-contrast-rgb` | `255, 255, 255` | <div class="h-8 border rounded bg-danger-contrast" /> |
| `--gr-color-danger-shade`        | `#cc0014`       | <div class="h-8 border rounded bg-danger-shade" />    |
| `--gr-color-danger-tint`         | `#ff1f35`       | <div class="h-8 border rounded bg-danger-tint" />     |

## Light

| Token                           | Value           | Example                                              |
| :------------------------------ | :-------------- | :--------------------------------------------------- |
| `--gr-color-light`              | `#f4f5f8`       | <div class="h-8 border rounded bg-light" />          |
| `--gr-color-light-rgb`          | `244, 245, 248` | <div class="h-8 border rounded bg-light" />          |
| `--gr-color-light-contrast`     | `#051f2c`       | <div class="h-8 border rounded bg-light-contrast" /> |
| `--gr-color-light-contrast-rgb` | `5, 31, 44`     | <div class="h-8 border rounded bg-light-contrast" /> |
| `--gr-color-light-shade`        | `#d7d8da`       | <div class="h-8 border rounded bg-light-shade" />    |
| `--gr-color-light-tint`         | `#f9fafb`       | <div class="h-8 border rounded bg-light-tint" />     |

## Medium

| Token                            | Value           | Example                                               |
| :------------------------------- | :-------------- | :---------------------------------------------------- |
| `--gr-color-medium` \*           | `#5e6c78`       | <div class="h-8 border rounded bg-medium" />          |
| `--gr-color-medium-rgb` \*       | `94, 108, 120`  | <div class="h-8 border rounded bg-medium" />          |
| `--gr-color-medium-contrast`     | `#ffffff`       | <div class="h-8 border rounded bg-medium-contrast" /> |
| `--gr-color-medium-contrast-rgb` | `255, 255, 255` | <div class="h-8 border rounded bg-medium-contrast" /> |
| `--gr-color-medium-shade`        | `#000000`       | <div class="h-8 border rounded bg-medium-shade" />    |
| `--gr-color-medium-tint`         | `#222428`       | <div class="h-8 border rounded bg-medium-tint" />     |

## Dark

| Token                          | Value           | Example                                             |
| :----------------------------- | :-------------- | :-------------------------------------------------- |
| `--gr-color-dark`              | `#02131b`       | <div class="h-8 border rounded bg-dark" />          |
| `--gr-color-dark-rgb`          | `2, 19, 27`     | <div class="h-8 border rounded bg-dark" />          |
| `--gr-color-dark-contrast`     | `#ffffff`       | <div class="h-8 border rounded bg-dark-contrast" /> |
| `--gr-color-dark-contrast-rgb` | `255, 255, 255` | <div class="h-8 border rounded bg-dark-contrast" /> |
| `--gr-color-dark-shade`        | `#000000`       | <div class="h-8 border rounded bg-dark-shade" />    |
| `--gr-color-dark-tint`         | `#222428`       | <div class="h-8 border rounded bg-dark-tint" />     |
