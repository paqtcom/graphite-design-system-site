---
title: Components - way-menu-divider
---

# way-menu-divider

<div class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

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

## Sections

<div class="flex items-center">
<a href="#css-custom-properties">CSS Custom Properties</a> 
</div>

</div>

<div id="css-custom-properties" class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

## CSS Custom Properties

| Name              | Description                            |
| ----------------- | -------------------------------------- |
| `--border-color`  | Border color of the menu item divider  |
| `--margin-bottom` | Bottom margin of the menu item divider |
| `--margin-top`    | Top margin of the menu item divider    |

</div>
