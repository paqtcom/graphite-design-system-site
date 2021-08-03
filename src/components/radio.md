---
title: Components - gr-radio
---

# gr-radio

[[toc]]

Radios allow the user to select one option from a group of many.

Radios are designed to be used with [radio groups](/components/radio-group). As such, all of the examples on this page utilize them to demonstrate their correct usage.

<gr-radio-group label="Select an option" no-fieldset>
  <gr-radio value="1" checked>Option 1</gr-radio>
  <gr-radio value="2">Option 2</gr-radio>
  <gr-radio value="3">Option 3</gr-radio>
</gr-radio-group>

```html
<gr-radio-group label="Select an option" no-fieldset>
  <gr-radio value="1" checked>Option 1</gr-radio>
  <gr-radio value="2">Option 2</gr-radio>
  <gr-radio value="3">Option 3</gr-radio>
</gr-radio-group>
```

## Examples

### Disabled

Use the `disabled` attribute to disable a radio.

<gr-radio-group label="Select an option" no-fieldset>
  <gr-radio value="1" checked>Option 1</gr-radio>
  <gr-radio value="2">Option 2</gr-radio>
  <gr-radio value="3">Option 3</gr-radio>
  <gr-radio value="4" disabled>Disabled</gr-radio>
</gr-radio-group>

```html
<gr-radio-group label="Select an option" no-fieldset>
  <gr-radio value="1" checked>Option 1</gr-radio>
  <gr-radio value="2">Option 2</gr-radio>
  <gr-radio value="3">Option 3</gr-radio>
  <gr-radio value="4" disabled>Disabled</gr-radio>
</gr-radio-group>
```

## Properties

| Property   | Attribute  | Description                                       | Type      | Default     |
| ---------- | ---------- | ------------------------------------------------- | --------- | ----------- |
| `checked`  | `checked`  | Set to true to draw the radio in a checked state. | `boolean` | `false`     |
| `disabled` | `disabled` | Set to true to disable the radio.                 | `boolean` | `false`     |
| `value`    | `value`    | The radio's value attribute.                      | `string`  | `undefined` |

## Events

| Event      | Description                           | Type               |
| ---------- | ------------------------------------- | ------------------ |
| `gr-blur`  | Emitted when the control loses focus. | `CustomEvent<any>` |
| `gr-focus` | Emitted when the control gains focus. | `CustomEvent<any>` |

## Methods

### `removeFocus() => Promise<void>`

Removes focus from the radio.

#### Returns

Type: `Promise<void>`

### `setFocus(options?: FocusOptions) => Promise<void>`

Sets focus on the radio.

#### Returns

Type: `Promise<void>`

## Slots

| Slot        | Description        |
| ----------- | ------------------ |
| `(default)` | The radio's label. |

## CSS Custom Properties

| Name                                       | Description                                           |
| ------------------------------------------ | ----------------------------------------------------- |
| `--control-background-color`               | Background color of the control                       |
| `--control-background-color-checked`       | Background color of the control when checked          |
| `--control-background-color-checked-hover` | Background color of the control when checked on hover |
| `--control-background-color-hover`         | Background color of the control on hover              |
| `--control-border-color`                   | Border color of the control                           |
| `--control-border-color-checked`           | Border color of the control when checked              |
| `--control-border-color-checked-hover`     | Border color of the control when checked on hover     |
| `--control-border-color-hover`             | Border color of the control on hover                  |
| `--control-color-checked`                  | Color of the control when checked (the small circle)  |
| `--control-size`                           | Size of the control                                   |
| `--label-color`                            | Color of the label                                    |
