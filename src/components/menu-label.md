---
title: Menu Label - Graphite Design System
---

# Menu Label

`<gr-menu-label> | GrMenuLabel`

[[toc]]

<p class="intro">Menu labels are used to describe a group of <a href="/components/menu-item">menu items</a>.</p>

Pay attention to have sufficient color contrast with the background for accessibility.

<div class="example-block">
  <gr-menu style="max-width: 200px; background: var(--gr-color-white); border: solid 1px var(--gr-panel-border-color); border-radius: var(--gr-border-radius-medium);">
    <gr-menu-label>Fruits</gr-menu-label>
    <gr-menu-item value="apple">Apple</gr-menu-item>
    <gr-menu-item value="banana">Banana</gr-menu-item>
    <gr-menu-item value="orange">Orange</gr-menu-item>
    <gr-menu-divider></gr-menu-divider>
    <gr-menu-label>Vegetables</gr-menu-label>
    <gr-menu-item value="broccoli">Broccoli</gr-menu-item>
    <gr-menu-item value="carrot">Carrot</gr-menu-item>
    <gr-menu-item value="zucchini">Zucchini</gr-menu-item>
  </gr-menu>
</div>

```html
<gr-menu
  style="max-width: 200px; border: solid 1px var(--gr-panel-border-color); border-radius: var(--gr-border-radius-medium);"
>
  <gr-menu-label>Fruits</gr-menu-label>
  <gr-menu-item value="apple">Apple</gr-menu-item>
  <gr-menu-item value="banana">Banana</gr-menu-item>
  <gr-menu-item value="orange">Orange</gr-menu-item>
  <gr-menu-divider></gr-menu-divider>
  <gr-menu-label>Vegetables</gr-menu-label>
  <gr-menu-item value="broccoli">Broccoli</gr-menu-item>
  <gr-menu-item value="carrot">Carrot</gr-menu-item>
  <gr-menu-item value="zucchini">Zucchini</gr-menu-item>
</gr-menu>
```

## Slots

| Slot        | Description               |
| ----------- | ------------------------- |
| `(default)` | The menu label's content. |

## CSS custom properties

| Name                 | Description                                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| `--background-color` | Background color of the menu item label                                                             |
| `--color`            | Text color of the menu item label                                                                   |
| `--font-style`       | Font style of the menu item label                                                                   |
| `--font-weight`      | Font weight of the menu item label                                                                  |
| `--line-height`      | Line height of the menu item label                                                                  |
| `--padding-bottom`   | Bottom padding of the menu item label                                                               |
| `--padding-end`      | Right padding of the menu item label (will be left padding when we support right-to-left direction) |
| `--padding-start`    | Left padding of the menu item label (will be right padding when we support right-to-left direction) |
| `--padding-top`      | Top padding of the menu item label                                                                  |
