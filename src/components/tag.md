---
title: Components - way-tag
---

# way-tag

[[toc]]

Tags are used as labels to organize things or to indicate a selection.

<way-tag type="primary">Primary</way-tag>
<way-tag type="success">Success</way-tag>
<way-tag type="info">Info</way-tag>
<way-tag type="warning">Warning</way-tag>
<way-tag type="danger">Danger</way-tag>

```html
<way-tag type="primary">Primary</way-tag>
<way-tag type="success">Success</way-tag>
<way-tag type="info">Info</way-tag>
<way-tag type="warning">Warning</way-tag>
<way-tag type="danger">Danger</way-tag>
```

## Examples

### Sizes

Use the `size` prop to change a tab's size.

<way-tag size="small">Small</way-tag>
<way-tag size="medium">Medium</way-tag>
<way-tag size="large">Large</way-tag>

```html
<way-tag size="small">Small</way-tag>
<way-tag size="medium">Medium</way-tag>
<way-tag size="large">Large</way-tag>
```

### Pill

Use the `pill` prop to give tabs rounded edges.

<way-tag size="small" pill>Small</way-tag>
<way-tag size="medium" pill>Medium</way-tag>
<way-tag size="large" pill>Large</way-tag>

```html
<way-tag size="small" pill>Small</way-tag>
<way-tag size="medium" pill>Medium</way-tag>
<way-tag size="large" pill>Large</way-tag>
```

### Clearable

Use the `clearable` attribute to add a clear button to the tag.

<div class="tags-clearable">
  <way-tag size="small" clearable>Small</way-tag>
  <way-tag size="medium" clearable>Medium</way-tag>
  <way-tag size="large" clearable>Large</way-tag>
</div>

<script>
  const div = document.querySelector('.tags-clearable');

  div.addEventListener('way-clear', (event) => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-clearable way-tag {
    transition: var(--way-transition-medium) opacity;
  }
</style>

```html
<div class="tags-clearable">
  <way-tag size="small" clearable>Small</way-tag>
  <way-tag size="medium" clearable>Medium</way-tag>
  <way-tag size="large" clearable>Large</way-tag>
</div>

<script>
  const div = document.querySelector('.tags-clearable');

  div.addEventListener('way-clear', (event) => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-clearable way-tag {
    transition: var(--way-transition-medium) opacity;
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

| Event       | Description                                 | Type               |
| ----------- | ------------------------------------------- | ------------------ |
| `way-clear` | Emitted when the clear button is activated. | `CustomEvent<any>` |

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

- [way-select](/components/select)

### Depends on

- [way-button](/components/button)
