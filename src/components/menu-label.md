---
title: Components - way-menu-label
---

# way-menu-label

<div class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

Menu labels are used to describe a group of menu items.

<way-menu style="max-width: 200px; border: solid 1px var(--way-color-light); border-radius: var(--way-border-radius-medium);">
  <way-menu-label>Fruits</way-menu-label>
  <way-menu-item value="apple">Apple</way-menu-item>
  <way-menu-item value="banana">Banana</way-menu-item>
  <way-menu-item value="orange">Orange</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-label>Vegetables</way-menu-label>
  <way-menu-item value="broccoli">Broccoli</way-menu-item>
  <way-menu-item value="carrot">Carrot</way-menu-item>
  <way-menu-item value="zucchini">Zucchini</way-menu-item>
</way-menu>

```html
<way-menu
  style="max-width: 200px; border: solid 1px var(--way-color-light); border-radius: var(--way-border-radius-medium);"
>
  <way-menu-label>Fruits</way-menu-label>
  <way-menu-item value="apple">Apple</way-menu-item>
  <way-menu-item value="banana">Banana</way-menu-item>
  <way-menu-item value="orange">Orange</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-label>Vegetables</way-menu-label>
  <way-menu-item value="broccoli">Broccoli</way-menu-item>
  <way-menu-item value="carrot">Carrot</way-menu-item>
  <way-menu-item value="zucchini">Zucchini</way-menu-item>
</way-menu>
```

## Sections

<div class="flex items-center">
<a href="#css-custom-properties">CSS Custom Properties</a> 
</div>

</div>

<div id="css-custom-properties" class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

## CSS Custom Properties

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

</div>
