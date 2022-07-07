---
title: Spinner - Graphite Design System
---

# Spinner

`<gr-spinner> | GrSpinner`

[[toc]]

<p class="intro">Spinners are used to show the progress of an indeterminate operation.</p>

<div class="example-block">
  <gr-spinner></gr-spinner>
</div>

```html
<gr-spinner></gr-spinner>
```

## Options

### Size

Spinners are sized relative to the current font size. To change their size, set the `font-size` property on the spinner itself or on a parent element as shown below.

<div class="example-block">
  <gr-spinner></gr-spinner>
  <gr-spinner style="font-size: 2rem;"></gr-spinner>
  <gr-spinner style="font-size: 3rem;"></gr-spinner>
</div>

```html
<gr-spinner></gr-spinner>
<gr-spinner style="font-size: 2rem;"></gr-spinner>
<gr-spinner style="font-size: 3rem;"></gr-spinner>
```

### Stroke Width

The width of the spinner can be changed by setting the `--stroke-width` custom property.

<div class="example-block">
  <gr-spinner style="font-size: 2rem; --stroke-width: 6px;"></gr-spinner>
</div>

```html
<gr-spinner style="font-size: 2rem; --stroke-width: 6px;"></gr-spinner>
```

### Color

The spinner's colors can be changed by setting the `--indicator-color` and `--track-color` custom properties.

<div class="example-block">
  <gr-spinner style="font-size: 2rem; --indicator-color: tomato;"></gr-spinner>
</div>

```html
<gr-spinner style="font-size: 2rem; --indicator-color: tomato;"></gr-spinner>
```

## CSS custom properties

| Name                | Description                           |
| ------------------- | ------------------------------------- |
| `--indicator-color` | The color of the spinner's indicator. |
| `--stroke-width`    | The width of the indicator.           |
| `--track-color`     | The color of the spinner's track.     |

## Dependencies

### Used by

- [gr-button](/components/button)
