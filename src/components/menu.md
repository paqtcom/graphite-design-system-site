---
title: Components - way-menu
---

# way-menu

<div class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

Menus provide a list of options for the user to choose from.

You can use [menu items](/components/menu-item), [menu dividers](/components/menu-divider), and [menu labels](/components/menu-label) to compose a menu.

<way-menu style="max-width: 200px; border: solid 1px var(--way-color-light); border-radius: var(--way-border-radius-medium);">
  <way-menu-item value="undo">Undo</way-menu-item>
  <way-menu-item value="redo">Redo</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-item value="cut">Cut</way-menu-item>
  <way-menu-item value="copy">Copy</way-menu-item>
  <way-menu-item value="paste">Paste</way-menu-item>
  <way-menu-item value="delete">Delete</way-menu-item>
</way-menu>

```html
<way-menu
  style="max-width: 200px; border: solid 1px var(--way-color-light); border-radius: var(--way-border-radius-medium);"
>
  <way-menu-item value="undo">Undo</way-menu-item>
  <way-menu-item value="redo">Redo</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-item value="cut">Cut</way-menu-item>
  <way-menu-item value="copy">Copy</way-menu-item>
  <way-menu-item value="paste">Paste</way-menu-item>
  <way-menu-item value="delete">Delete</way-menu-item>
</way-menu>
```

Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use `<nav>` and `<a>` elements instead.

## Sections

<div class="flex items-center">
<a href="#events" class="mr-3">Events</a> 
<a href="#methods" class="mr-3">Methods</a> 
<a href="#slots" class="mr-3">Slots</a> 
<a href="#css-custom-properties">CSS Custom Properties</a> 
</div>

</div>

<div id="events" class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

## Events

| Event        | Description                           | Type                                             |
| ------------ | ------------------------------------- | ------------------------------------------------ |
| `way-select` | Emitted when a menu item is selected. | `CustomEvent<{ item: HTMLWayMenuItemElement; }>` |

</div>

<div id="methods" class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

## Methods

### `typeToSelect(key: string) => Promise<void>`

Initiates type-to-select logic, which automatically selects an option based on what the user is currently typing.
The key passed will be appended to the internal query and the selection will be updated. After a brief period, the
internal query is cleared automatically. This method is intended to be used with the keydown event. Useful for
enabling type-to-select when the menu doesn't have focus.

#### Returns

Type: `Promise<void>`

</div>

<div id="slots" class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

## Slots

| Slot        | Description                                                               |
| ----------- | ------------------------------------------------------------------------- |
| `(default)` | The menu's content, including menu items, menu dividers, and menu labels. |

</div>

<div id="css-custom-properties" class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

## CSS Custom Properties

| Name               | Description                |
| ------------------ | -------------------------- |
| `--padding-bottom` | Bottom padding of the menu |
| `--padding-top`    | Top padding of the menu    |

</div>
