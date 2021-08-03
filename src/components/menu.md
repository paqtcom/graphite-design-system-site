---
title: Menu - Graphite Design System
---

# Menu

`<gr-menu> | GrMenu`

[[toc]]

Menus provide a list of options for the user to choose from.

You can use [menu items](/components/menu-item), [menu dividers](/components/menu-divider), and [menu labels](/components/menu-label) to compose a menu.

<gr-menu style="max-width: 200px; border: solid 1px var(--gr-color-light); border-radius: var(--gr-border-radius-medium);">
  <gr-menu-item value="undo">Undo</gr-menu-item>
  <gr-menu-item value="redo">Redo</gr-menu-item>
  <gr-menu-divider></gr-menu-divider>
  <gr-menu-item value="cut">Cut</gr-menu-item>
  <gr-menu-item value="copy">Copy</gr-menu-item>
  <gr-menu-item value="paste">Paste</gr-menu-item>
  <gr-menu-item value="delete">Delete</gr-menu-item>
</gr-menu>

```html
<gr-menu
  style="max-width: 200px; border: solid 1px var(--gr-color-light); border-radius: var(--gr-border-radius-medium);"
>
  <gr-menu-item value="undo">Undo</gr-menu-item>
  <gr-menu-item value="redo">Redo</gr-menu-item>
  <gr-menu-divider></gr-menu-divider>
  <gr-menu-item value="cut">Cut</gr-menu-item>
  <gr-menu-item value="copy">Copy</gr-menu-item>
  <gr-menu-item value="paste">Paste</gr-menu-item>
  <gr-menu-item value="delete">Delete</gr-menu-item>
</gr-menu>
```

Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use `<nav>` and `<a>` elements instead.

## Events

| Event       | Description                           | Type                                            |
| ----------- | ------------------------------------- | ----------------------------------------------- |
| `gr-select` | Emitted when a menu item is selected. | `CustomEvent<{ item: HTMLGrMenuItemElement; }>` |

## Methods

### `typeToSelect(key: string) => Promise<void>`

Initiates type-to-select logic, which automatically selects an option based on what the user is currently typing.
The key passed will be appended to the internal query and the selection will be updated. After a brief period, the
internal query is cleared automatically. This method is intended to be used with the keydown event. Useful for
enabling type-to-select when the menu doesn't have focus.

#### Returns

Type: `Promise<void>`

## Slots

| Slot        | Description                                                               |
| ----------- | ------------------------------------------------------------------------- |
| `(default)` | The menu's content, including menu items, menu dividers, and menu labels. |

## CSS Custom Properties

| Name               | Description                |
| ------------------ | -------------------------- |
| `--padding-bottom` | Bottom padding of the menu |
| `--padding-top`    | Top padding of the menu    |

## Dependencies

### Used by

- [gr-select](/components/select)
