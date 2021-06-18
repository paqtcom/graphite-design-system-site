---
title: Components - way-menu-item
---

# way-menu-item

<div class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

Menu items provide options for the user to pick from in a menu.

<way-menu style="max-width: 200px; border: solid 1px var(--way-color-light); border-radius: var(--way-border-radius-medium);">
  <way-menu-item>Option 1</way-menu-item>
  <way-menu-item>Option 2</way-menu-item>
  <way-menu-item>Option 3</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-item checked>Checked</way-menu-item>
  <way-menu-item disabled>Disabled</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-item>
    Start Icon
    <ion-icon slot="start" name="gift-outline"></ion-icon>
  </way-menu-item>
  <way-menu-item>
    End Icon
    <ion-icon slot="end" name="heart-outline"></ion-icon>
  </way-menu-item>
</way-menu>

```html
<way-menu
  style="max-width: 200px; border: solid 1px var(--way-color-light); border-radius: var(--way-border-radius-medium);"
>
  <way-menu-item>Option 1</way-menu-item>
  <way-menu-item>Option 2</way-menu-item>
  <way-menu-item>Option 3</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-item checked>Checked</way-menu-item>
  <way-menu-item disabled>Disabled</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-item>
    Start Icon
    <ion-icon slot="start" name="gift-outline"></ion-icon>
  </way-menu-item>
  <way-menu-item>
    End Icon
    <ion-icon slot="end" name="heart-outline"></ion-icon>
  </way-menu-item>
</way-menu>
```

## Sections

<div class="flex items-center">
<a href="#properties" class="mr-3">Properties</a> 
<a href="#methods" class="mr-3">Methods</a> 
<a href="#slots" class="mr-3">Slots</a> 
<a href="#css-custom-properties">CSS Custom Properties</a> 
</div>

</div>

<div id="properties" class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

## Properties

| Property   | Attribute  | Description                                                                                               | Type      | Default |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `checked`  | `checked`  | Set to true to draw the item in a checked state.                                                          | `boolean` | `false` |
| `disabled` | `disabled` | Set to true to draw the menu item in a disabled state.                                                    | `boolean` | `false` |
| `value`    | `value`    | A unique value to store in the menu item. This can be used as a way to identify menu items when selected. | `string`  | `''`    |

</div>

<div id="methods" class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

## Methods

### `removeFocus() => Promise<void>`

Removes focus from the menu item.

#### Returns

Type: `Promise<void>`

### `setFocus(options?: FocusOptions) => Promise<void>`

Sets focus on the menu item.

#### Returns

Type: `Promise<void>`

</div>

<div id="slots" class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

## Slots

| Slot        | Description                                                                                                           |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| `(default)` | The menu item's label.                                                                                                |
| `"end"`     | Content is placed to the right of the menu item's label (will be to the left when we support right-to-left direction) |
| `"start"`   | Content is placed to the left of the menu item's label (will be to the right when we support right-to-left direction) |

</div>

<div id="css-custom-properties" class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

## CSS Custom Properties

| Name                         | Description                                                                                   |
| ---------------------------- | --------------------------------------------------------------------------------------------- |
| `--background-color`         | Background color of the menu item                                                             |
| `--background-color-focused` | Background color of the menu item when focused                                                |
| `--color`                    | Text color of the menu item                                                                   |
| `--color-disabled`           | Text color of the menu item when disabled                                                     |
| `--color-focused`            | Text color of the menu item when focused                                                      |
| `--line-height`              | Line height of the menu item                                                                  |
| `--padding-bottom`           | Bottom padding of the menu item                                                               |
| `--padding-end`              | Right padding of the menu item (will be left padding when we support right-to-left direction) |
| `--padding-start`            | Left padding of the menu item (will be right padding when we support right-to-left direction) |
| `--padding-top`              | Top padding of the menu item                                                                  |
| `--transition`               | Transition of the menu item                                                                   |

</div>
