---
title: Tab - Graphite Design System
---

# Tab

`<gr-tab> | GrTab`

[[toc]]

<p class="intro">Tabs provide options for the user to switch between content in a <a href="/components/tab-group">tab group</a>.</p>

<div class="example-block">
  <gr-tab-group>
    <gr-tab panel="first-tab">Tab 1</gr-tab>
    <gr-tab panel="second-tab">Tab 2</gr-tab>
    <gr-tab-panel name="first-tab">Content 1</gr-tab-panel>
    <gr-tab-panel name="second-tab">Content 2</gr-tab-panel>
  </gr-tab-group> 
</div>

```html
<gr-tab-group>
  <gr-tab panel="first-tab">Tab 1</gr-tab>
  <gr-tab panel="second-tab">Tab 2</gr-tab>

  <gr-tab-panel name="first-tab">Content 1</gr-tab-panel>
  <gr-tab-panel name="second-tab">Content 2</gr-tab-panel>
</gr-tab-group>
```

## Options

### Panel

Use the `panel` attribute to reference to a content panel. Used by the [tab-panel](/components/tab-panel) element to show the correct content.

<div class="example-block">
  <gr-tab-group>
    <gr-tab panel="tab">Tab</gr-tab>
    <gr-tab-panel name="tab">Content</gr-tab-panel>
  </gr-tab-group>
</div>

```html
<gr-tab-group>
  <gr-tab panel="tab">Tab</gr-tab>

  <gr-tab-panel name="tab">Content</gr-tab-panel>
</gr-tab-group>
```

### Disabled

Use the `disabled` attribute to disable the tab. Clicks will be suppressed until the disabled state is removed.

<div class="example-block">
  <gr-tab disabled>Disabled</gr-tab>
</div>

```html
<gr-tab disabled>Disabled</gr-tab>
```

### Active

Use the `active` attribute to activate the tab.

<div class="example-block">
  <gr-tab active>Active</gr-tab>
</div>

```html
<gr-tab active>Active</gr-tab>
```

## Properties

| Property   | Attribute  | Description                                      | Type      | Default |
| ---------- | ---------- | ------------------------------------------------ | --------- | ------- |
| `panel`    | `panel`    | Set the corresponding gr-tab-panel name.         | `string`  | `''`    |
| `disabled` | `disabled` | Set to true to draw the tab in a disabled state. | `boolean` | `false` |
| `active`   | `active`   | Set to true to draw the tab in a active state.   | `boolean` | `false` |

## Methods

### `removeFocus() => Promise<void>`

Removes focus from the tab.

#### Returns

Type: `Promise<void>`

### `setFocus(options?: FocusOptions) => Promise<void>`

Sets focus on the tab.

## Events

| Event      | Description                       | Type                |
| ---------- | --------------------------------- | ------------------- |
| `gr-blur`  | Emitted when the tab loses focus. | `CustomEvent<void>` |
| `gr-focus` | Emitted when the tab has focus.   | `CustomEvent<void>` |

## Slots

| Slot        | Description      |
| ----------- | ---------------- |
| `(default)` | The tab's label. |

## CSS custom properties

| Name               | Description                         |
| ------------------ | ----------------------------------- |
| `--color`          | Text color of the tab               |
| `--color-disabled` | Text color of the tab when disabled |
| `--color-focused`  | Text color of the tab when focused  |
