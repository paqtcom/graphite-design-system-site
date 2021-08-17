---
title: Menu Divider - Graphite Design System
---

# Menu Divider

`<gr-menu-divider> | GrMenuDivider`

[[toc]]

Menu dividers are used to visually group [menu items](/components/menu-item).

<div class="example-block">
  <gr-menu style="max-width: 200px; border: solid 1px var(--gr-panel-border-color); border-radius: var(--gr-border-radius-medium);">
    <gr-menu-item value="1">Option 1</gr-menu-item>
    <gr-menu-item value="2">Option 2</gr-menu-item>
    <gr-menu-divider></gr-menu-divider>
    <gr-menu-item value="3">Option 3</gr-menu-item>
    <gr-menu-item value="4">Option 4</gr-menu-item>
    <gr-menu-divider></gr-menu-divider>
    <gr-menu-item value="5">Option 5</gr-menu-item>
    <gr-menu-item value="6">Option 6</gr-menu-item>
  </gr-menu>
</div>

```html
<gr-menu
  style="max-width: 200px; border: solid 1px var(--gr-panel-border-color); border-radius: var(--gr-border-radius-medium);"
>
  <gr-menu-item value="1">Option 1</gr-menu-item>
  <gr-menu-item value="2">Option 2</gr-menu-item>
  <gr-menu-divider></gr-menu-divider>
  <gr-menu-item value="3">Option 3</gr-menu-item>
  <gr-menu-item value="4">Option 4</gr-menu-item>
  <gr-menu-divider></gr-menu-divider>
  <gr-menu-item value="5">Option 5</gr-menu-item>
  <gr-menu-item value="6">Option 6</gr-menu-item>
</gr-menu>
```

## CSS Custom Properties

| Name              | Description                            |
| ----------------- | -------------------------------------- |
| `--border-color`  | Border color of the menu item divider  |
| `--margin-bottom` | Bottom margin of the menu item divider |
| `--margin-top`    | Top margin of the menu item divider    |
