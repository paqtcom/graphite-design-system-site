---
title: Tab - Graphite Design System
---

# Tab

`<gr-tab> | GrTab`

[[toc]]

<p class="intro">Tabs provide options for the user to switch between content in a <a href="/components/tab-group">tab group</a>.</p>

<div class="example-block">
  <gr-tab-group>
    <gr-tab slot="nav" panel="general">Option 1</gr-tab>
    <gr-tab slot="nav" panel="second">Option 2</gr-tab>
    <gr-tab-panel name="general">General</gr-tab-panel>
    <gr-tab-panel name="second">Second</gr-tab-panel>
  </gr-tab-group> 
</div>

```html
<gr-tab-group>
  <gr-tab slot="nav" panel="general">Option 1</gr-tab>
  <gr-tab slot="nav" panel="second">Option 2</gr-tab>

  <gr-tab-panel name="general">General</gr-tab-panel>
  <gr-tab-panel name="second">Second</gr-tab-panel>
</gr-tab-group>
```

## Options

### Panel

Use the `panel` attribute to reference to a content panel. Used by the [tab-panel](/components/tab-panel) element to show the correct content.

<div class="example-block">
  <gr-tab-group>
    <gr-tab slot="nav" panel="content">Option 1</gr-tab>

    <gr-tab-panel name="content">Content</gr-tab-panel>

  </gr-tab-group>
</div>

```html
<gr-tab-group>
  <gr-tab slot="nav" panel="content">Tab content</gr-tab>

  <gr-tab-panel name="content">Content</gr-tab-panel>
</gr-tab-group>
```

### Disabled

Use the `disabled` attribute to disable the tab. Clicks will be suppressed until the disabled state is removed.

<div class="example-block">
    <gr-tab slot="nav" panel="content" disabled>Disabled</gr-tab>
</div>

```html
<gr-tab slot="nav" panel="content" disabled>Disabled</gr-tab>
```

### Active

Use the `active` attribute to activate the tab.

<div class="example-block">
  <gr-tab slot="nav" panel="content" active>Active</gr-tab>
</div>

```html
<gr-tab slot="nav" panel="content" active>Active</gr-tab>
```

## Properties

| Property   | Attribute  | Description                                      | Type      | Default |
| ---------- | ---------- | ------------------------------------------------ | --------- | ------- |
| `panel`    | `panel`    | Set the corresponding gr-tab-panel name.         | `string`  | `''`    |
| `disabled` | `disabled` | Set to true to draw the tab in a disabled state. | `boolean` | `false` |
| `active`   | `active`   | Set to true to draw the tab in a active state.   | `boolean` | `false` |

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
