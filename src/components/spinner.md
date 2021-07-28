---
title: Components - way-spinner
---

# way-spinner

[[toc]]

Spinners are used to show the progress of an indeterminate operation.

<way-spinner></way-spinner>

```html
<way-spinner></way-spinner>
```

## Examples

### Size

Spinners are sized relative to the current font size. To change their size, set the `font-size` property on the spinner itself or on a parent element as shown below.

<way-spinner></way-spinner>
<way-spinner style="font-size: 2rem;"></way-spinner>
<way-spinner style="font-size: 3rem;"></way-spinner>

```html
<way-spinner></way-spinner>
<way-spinner style="font-size: 2rem;"></way-spinner>
<way-spinner style="font-size: 3rem;"></way-spinner>
```

### Stroke Width

The width of the spinner can be changed by setting the `--stroke-width` custom property.

<way-spinner style="font-size: 2rem; --stroke-width: 6px;"></way-spinner>

```html
<way-spinner style="font-size: 2rem; --stroke-width: 6px;"></way-spinner>
```

### Color

The spinner's colors can be changed by setting the `--indicator-color` and `--track-color` custom properties.

<way-spinner style="font-size: 2rem; --indicator-color: tomato;"></way-spinner>

```html
<way-spinner style="font-size: 2rem; --indicator-color: tomato;"></way-spinner>
```

## CSS Custom Properties

| Name                | Description                           |
| ------------------- | ------------------------------------- |
| `--indicator-color` | The color of the spinner's indicator. |
| `--stroke-width`    | The width of the indicator.           |
| `--track-color`     | The color of the spinner's track.     |

## Dependencies

### Used by

- [way-button](/components/button)
