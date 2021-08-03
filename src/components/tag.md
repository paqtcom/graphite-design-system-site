---
title: Components - gr-tag
---

# gr-tag

[[toc]]

Tags are used as labels to organize things or to indicate a selection.

<gr-tag type="primary">Primary</gr-tag>
<gr-tag type="success">Success</gr-tag>
<gr-tag type="info">Info</gr-tag>
<gr-tag type="warning">Warning</gr-tag>
<gr-tag type="danger">Danger</gr-tag>

```html
<gr-tag type="primary">Primary</gr-tag>
<gr-tag type="success">Success</gr-tag>
<gr-tag type="info">Info</gr-tag>
<gr-tag type="warning">Warning</gr-tag>
<gr-tag type="danger">Danger</gr-tag>
```

## Examples

### Sizes

Use the `size` prop to change a tab's size.

<gr-tag size="small">Small</gr-tag>
<gr-tag size="medium">Medium</gr-tag>
<gr-tag size="large">Large</gr-tag>

```html
<gr-tag size="small">Small</gr-tag>
<gr-tag size="medium">Medium</gr-tag>
<gr-tag size="large">Large</gr-tag>
```

### Pill

Use the `pill` prop to give tabs rounded edges.

<gr-tag size="small" pill>Small</gr-tag>
<gr-tag size="medium" pill>Medium</gr-tag>
<gr-tag size="large" pill>Large</gr-tag>

```html
<gr-tag size="small" pill>Small</gr-tag>
<gr-tag size="medium" pill>Medium</gr-tag>
<gr-tag size="large" pill>Large</gr-tag>
```

### Clearable

Use the `clearable` attribute to add a clear button to the tag.

<div class="tags-clearable">
  <gr-tag size="small" clearable>Small</gr-tag>
  <gr-tag size="medium" clearable>Medium</gr-tag>
  <gr-tag size="large" clearable>Large</gr-tag>
</div>

<script>
  const div = document.querySelector('.tags-clearable');

  div.addEventListener('gr-clear', (event) => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-clearable gr-tag {
    transition: 300ms opacity;
  }
</style>

```html
<div class="tags-clearable">
  <gr-tag size="small" clearable>Small</gr-tag>
  <gr-tag size="medium" clearable>Medium</gr-tag>
  <gr-tag size="large" clearable>Large</gr-tag>
</div>

<script>
  const div = document.querySelector('.tags-clearable');

  div.addEventListener('gr-clear', (event) => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-clearable gr-tag {
    transition: 300ms opacity;
  }
</style>
```

## Properties

| Property    | Attribute   | Description                                              | Type      | Default  |
| ----------- | ----------- | -------------------------------------------------------- | --------- | -------- | --------- | ---------- | ---------- | ----------- |
| `clearable` | `clearable` | Set to true to make the tag clearable.                   | `boolean` | `false`  |
| `pill`      | `pill`      | Set to true to draw a pill-style tag with rounded edges. | `boolean` | `false`  |
| `size`      | `size`      | The tag's size.                                          | `"large"  | "medium" | "small"`  | `'medium'` |
| `type`      | `type`      | The tag's type.                                          | `"danger" | "info"   | "primary" | "success"  | "warning"` | `'primary'` |

## Events

| Event      | Description                                 | Type               |
| ---------- | ------------------------------------------- | ------------------ |
| `gr-clear` | Emitted when the clear button is activated. | `CustomEvent<any>` |

## Slots

| Slot        | Description        |
| ----------- | ------------------ |
| `(default)` | The tag's content. |

## CSS Custom Properties

| Name                   | Description                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------- |
| `--background-color`   | Background color of the tag                                                             |
| `--border-color`       | Border color of the tag                                                                 |
| `--border-radius`      | Border radius of the tag                                                                |
| `--border-style`       | Border style of the tag                                                                 |
| `--border-width`       | Border width of the tag                                                                 |
| `--clear-color`        | Color of the clear icon                                                                 |
| `--clear-color-hover`  | Color of the clear icon on hover                                                        |
| `--clear-margin-left`  | Margin left of the clear icon                                                           |
| `--clear-margin-right` | Margin right of the clear icon                                                          |
| `--color`              | Text color of the tag                                                                   |
| `--font-size`          | Font size of the tag                                                                    |
| `--height`             | Height of the tag                                                                       |
| `--line-height`        | Line height of the tag                                                                  |
| `--padding-bottom`     | Bottom padding of the tag                                                               |
| `--padding-end`        | Right padding of the tag (will be left padding when we support right-to-left direction) |
| `--padding-start`      | Left padding of the tag (will be right padding when we support right-to-left direction) |
| `--padding-top`        | Top padding of the tag                                                                  |

## Dependencies

### Used by

- [gr-select](/components/select)

### Depends on

- [gr-button](/components/button)
