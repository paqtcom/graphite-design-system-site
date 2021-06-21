---
title: Components - way-menu-divider
---

# way-menu-divider

[[toc]]

Menu dividers are used to visually group menu items.

<way-menu style="max-width: 200px; border: solid 1px var(--way-color-light); border-radius: var(--way-border-radius-medium);">
  <way-menu-item value="1">Option 1</way-menu-item>
  <way-menu-item value="2">Option 2</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-item value="3">Option 3</way-menu-item>
  <way-menu-item value="4">Option 4</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-item value="5">Option 5</way-menu-item>
  <way-menu-item value="6">Option 6</way-menu-item>
</way-menu>

```html
<way-menu
  style="max-width: 200px; border: solid 1px var(--way-color-light); border-radius: var(--way-border-radius-medium);"
>
  <way-menu-item value="1">Option 1</way-menu-item>
  <way-menu-item value="2">Option 2</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-item value="3">Option 3</way-menu-item>
  <way-menu-item value="4">Option 4</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-item value="5">Option 5</way-menu-item>
  <way-menu-item value="6">Option 6</way-menu-item>
</way-menu>
```

## CSS Custom Properties

| Name              | Description                            |
| ----------------- | -------------------------------------- |
| `--border-color`  | Border color of the menu item divider  |
| `--margin-bottom` | Bottom margin of the menu item divider |
| `--margin-top`    | Top margin of the menu item divider    |
