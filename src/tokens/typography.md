---
title: Typography tokens - Graphite Design System
---

# Typography tokens

[[toc]]

<p class="intro">Typography tokens are used to maintain a consistent set of font styles throughout your app.</p>

## Font family

| Token              | Value                                                                                                 | Example                                                                    |
| :----------------- | :---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `--gr-font-family` | -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif | <div class="font-sans">The quick brown fox jumped over the lazy dog.</div> |

## Font size

| Token                       | Value           | Example                         |
| :-------------------------- | :-------------- | ------------------------------- |
| `--gr-font-size-xx-small`   | 0.625rem (10px) | <div class="text-2xs">Aa</div>  |
| `--gr-font-size-x-small`    | 0.75rem (12px)  | <div class="text-xs">Aa</div>   |
| `--gr-font-size-small`      | 0.875rem (14px) | <div class="text-sm">Aa</div>   |
| `--gr-font-size-medium`     | 1rem (16px)     | <div class="text-base">Aa</div> |
| `--gr-font-size-large`      | 1.25rem (20px)  | <div class="text-lg">Aa</div>   |
| `--gr-font-size-x-large`    | 1.5rem (24px)   | <div class="text-xl">Aa</div>   |
| `--gr-font-size-xx-large`   | 2.25rem (36px)  | <div class="text-2xl">Aa</div>  |
| `--gr-font-size-xxx-large`  | 3rem (48px)     | <div class="text-3xl">Aa</div>  |
| `--gr-font-size-xxxx-large` | 4.5rem (72px)   | <div class="text-4xl">Aa</div>  |

## Font weight

| Token                          | Value | Example                                                                          |
| :----------------------------- | :---- | -------------------------------------------------------------------------------- |
| `--gr-font-weight-thin`        | 100   | <div class="font-thin">The quick brown fox jumped over the lazy dog.</div>       |
| `--gr-font-weight-extra-light` | 200   | <div class="font-extralight">The quick brown fox jumped over the lazy dog.</div> |
| `--gr-font-weight-light`       | 300   | <div class="font-light">The quick brown fox jumped over the lazy dog.</div>      |
| `--gr-font-weight-normal`      | 400   | <div class="font-normal">The quick brown fox jumped over the lazy dog.</div>     |
| `--gr-font-weight-medium`      | 500   | <div class="font-medium">The quick brown fox jumped over the lazy dog.</div>     |
| `--gr-font-weight-semi-bold`   | 600   | <div class="font-semibold">The quick brown fox jumped over the lazy dog.</div>   |
| `--gr-font-weight-bold`        | 700   | <div class="font-bold">The quick brown fox jumped over the lazy dog.</div>       |
| `--gr-font-weight-extra-bold`  | 800   | <div class="font-extrabold">The quick brown fox jumped over the lazy dog.</div>  |
| `--gr-font-weight-black`       | 900   | <div class="font-black">The quick brown fox jumped over the lazy dog.</div>      |

## Letter spacing

Also called "tracking".

| Token                        | Value    | Example                                                                          |
| :--------------------------- | :------- | -------------------------------------------------------------------------------- |
| `--gr-letter-spacing-dense`  | -0.015em | <div class="tracking-dense">The quick brown fox jumped over the lazy dog.</div>  |
| `--gr-letter-spacing-normal` | normal   | <div class="tracking-normal">The quick brown fox jumped over the lazy dog.</div> |
| `--gr-letter-spacing-loose`  | 0.075em  | <div class="tracking-loose">The quick brown fox jumped over the lazy dog.</div>  |

## Line height

Also called "leading".

| Token                     | Value | Example                                                                                                                                                                           |
| :------------------------ | :---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--gr-line-height-dense`  | 1.4   | <div class="leading-dense">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div>  |
| `--gr-line-height-normal` | 1.8   | <div class="leading-normal">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
| `--gr-line-height-loose`  | 2.2   | <div class="leading-loose">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div>  |
