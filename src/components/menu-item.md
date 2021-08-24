---
title: Menu Item - Graphite Design System
---

# Menu Item

`<gr-menu-item> | GrMenuItem`

[[toc]]

<p class="intro">Menu items provide options for the user to pick from in a <a href="/components/menu">menu</a>.</p>

<div class="example-block">
  <gr-menu style="max-width: 200px; border: solid 1px var(--gr-panel-border-color); border-radius: var(--gr-border-radius-medium);">
    <gr-menu-item>Option 1</gr-menu-item>
    <gr-menu-item>Option 2</gr-menu-item>
    <gr-menu-item>Option 3</gr-menu-item>
    <gr-menu-divider></gr-menu-divider>
    <gr-menu-item checked>Checked</gr-menu-item>
    <gr-menu-item disabled>Disabled</gr-menu-item>
    <gr-menu-divider></gr-menu-divider>
    <gr-menu-item>
      Start Icon
      <ion-icon slot="start" name="gift-outline"></ion-icon>
    </gr-menu-item>
    <gr-menu-item>
      End Icon
      <ion-icon slot="end" name="heart-outline"></ion-icon>
    </gr-menu-item>
  </gr-menu>
</div>

```html
<gr-menu
  style="max-width: 200px; border: solid 1px var(--gr-panel-border-color); border-radius: var(--gr-border-radius-medium);"
>
  <gr-menu-item>Option 1</gr-menu-item>
  <gr-menu-item>Option 2</gr-menu-item>
  <gr-menu-item>Option 3</gr-menu-item>
  <gr-menu-divider></gr-menu-divider>
  <gr-menu-item checked>Checked</gr-menu-item>
  <gr-menu-item disabled>Disabled</gr-menu-item>
  <gr-menu-divider></gr-menu-divider>
  <gr-menu-item>
    Start Icon
    <ion-icon slot="start" name="gift-outline"></ion-icon>
  </gr-menu-item>
  <gr-menu-item>
    End Icon
    <ion-icon slot="end" name="heart-outline"></ion-icon>
  </gr-menu-item>
</gr-menu>
```

## Options

### Checked

Use the `checked` attribute to render a checkmark at the start. Used by the [select](/components/select) element to show which items are selected.

<div class="example-block">
  <gr-menu style="max-width: 200px; border: solid 1px var(--gr-panel-border-color); border-radius: var(--gr-border-radius-medium);">
    <gr-menu-item checked>Checked</gr-menu-item>
  </gr-menu>
</div>

```html
<gr-menu
  style="max-width: 200px; border: solid 1px var(--gr-panel-border-color); border-radius: var(--gr-border-radius-medium);"
>
  <gr-menu-item checked>Checked</gr-menu-item>
</gr-menu>
```

### Disabled

Use the `disabled` attribute to disable the menu item. Clicks will be suppressed until the disabled state is removed.

<div class="example-block">
  <gr-menu style="max-width: 200px; border: solid 1px var(--gr-panel-border-color); border-radius: var(--gr-border-radius-medium);">
    <gr-menu-item disabled>Disabled</gr-menu-item>
  </gr-menu>
</div>

```html
<gr-menu
  style="max-width: 200px; border: solid 1px var(--gr-panel-border-color); border-radius: var(--gr-border-radius-medium);"
>
  <gr-menu-item disabled>Disabled</gr-menu-item>
</gr-menu>
```

### Icons

Use the `start` and `end` slots to add icons (or other content).

We recommend [Ionicons](https://ionic.io/ionicons) (which also supports custom SVG), but you could theoretically use any icon library.
Use the same icon set throughout your application for consistency.

<div class="example-block">
  <gr-menu style="max-width: 200px; border: solid 1px var(--gr-panel-border-color); border-radius: var(--gr-border-radius-medium);">
    <gr-menu-item>
      Start Icon
      <ion-icon slot="start" name="gift-outline"></ion-icon>
    </gr-menu-item>
    <gr-menu-item>
      End Icon
      <ion-icon slot="end" name="heart-outline"></ion-icon>
    </gr-menu-item>
  </gr-menu>
</div>

```html
<gr-menu
  style="max-width: 200px; border: solid 1px var(--gr-panel-border-color); border-radius: var(--gr-border-radius-medium);"
>
  <gr-menu-item>
    Start Icon
    <ion-icon slot="start" name="gift-outline"></ion-icon>
  </gr-menu-item>
  <gr-menu-item>
    End Icon
    <ion-icon slot="end" name="heart-outline"></ion-icon>
  </gr-menu-item>
</gr-menu>
```

## Properties

| Property   | Attribute  | Description                                                                                               | Type      | Default |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `checked`  | `checked`  | Set to true to draw the item in a checked state.                                                          | `boolean` | `false` |
| `disabled` | `disabled` | Set to true to draw the menu item in a disabled state.                                                    | `boolean` | `false` |
| `value`    | `value`    | A unique value to store in the menu item. This can be used as a way to identify menu items when selected. | `string`  | `''`    |

## Methods

### `removeFocus() => Promise<void>`

Removes focus from the menu item.

#### Returns

Type: `Promise<void>`

### `setFocus(options?: FocusOptions) => Promise<void>`

Sets focus on the menu item.

#### Returns

Type: `Promise<void>`

## Slots

| Slot        | Description                                                                                                           |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| `(default)` | The menu item's label.                                                                                                |
| `"end"`     | Content is placed to the right of the menu item's label (will be to the left when we support right-to-left direction) |
| `"start"`   | Content is placed to the left of the menu item's label (will be to the right when we support right-to-left direction) |

## CSS custom properties

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
