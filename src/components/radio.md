---
title: Radio - Graphite Design System
---

# Radio

`<gr-radio> | GrRadio`

[[toc]]

<p class="intro">Radios allow the user to select one option from a group of many.</p>

Radios are designed to be used with [radio groups](/components/radio-group). As such, all of the examples on this page utilize them to demonstrate their correct usage.

<div class="example-block">
  <gr-radio-group label="Select an option" value="1">
    <gr-radio value="1">Option 1</gr-radio>
    <gr-radio value="2">Option 2</gr-radio>
    <gr-radio value="3">Option 3</gr-radio>
  </gr-radio-group>
</div>

```html
<gr-radio-group label="Select an option" value="1">
  <gr-radio value="1">Option 1</gr-radio>
  <gr-radio value="2">Option 2</gr-radio>
  <gr-radio value="3">Option 3</gr-radio>
</gr-radio-group>
```

## Options

### Disabled

Use the `disabled` attribute to disable a radio.

<div class="example-block">
  <gr-radio-group label="Select an option">
    <gr-radio value="1" checked>Option 1</gr-radio>
    <gr-radio value="2">Option 2</gr-radio>
    <gr-radio value="3">Option 3</gr-radio>
    <gr-radio value="4" disabled>Disabled</gr-radio>
  </gr-radio-group>
</div>

```html
<gr-radio-group label="Select an option">
  <gr-radio value="1" checked>Option 1</gr-radio>
  <gr-radio value="2">Option 2</gr-radio>
  <gr-radio value="3">Option 3</gr-radio>
  <gr-radio value="4" disabled>Disabled</gr-radio>
</gr-radio-group>
```

## Usage guidelines

### Use radio buttons for mutually exclusive options

Radio buttons and checkboxes are not interchangeable. Radio buttons are best used for selecting a single option from a list of mutually exclusive options. Checkboxes are best used for selecting as many options as desired (or none).

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-radio-group label="Size" value="s">
  <gr-radio value="s">Small</gr-radio>
  <gr-radio value="m">Medium</gr-radio>
  <gr-radio value="l">Large</gr-radio>
</gr-radio-group>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-radio-group label="Interests" value="travel">
  <gr-radio value="travel">Travel</gr-radio>
  <gr-radio value="music">Music</gr-radio>
  <gr-radio value="shopping">Shopping</gr-radio>
</gr-radio-group>

</div>

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

## CSS custom properties

| Name                                       | Description                                           |
| ------------------------------------------ | ----------------------------------------------------- |
| `--control-background-color`               | Background color of the control                       |
| `--control-background-color-checked`       | Background color of the control when checked          |
| `--control-background-color-checked-focus` | Background color of the control when checked on focus |
| `--control-background-color-checked-hover` | Background color of the control when checked on hover |
| `--control-background-color-focus`         | Background color of the control on focus              |
| `--control-background-color-hover`         | Background color of the control on hover              |
| `--control-border-color`                   | Border color of the control                           |
| `--control-border-color-checked`           | Border color of the control when checked              |
| `--control-border-color-checked-focus`     | Border color of the control when checked on focus     |
| `--control-border-color-checked-hover`     | Border color of the control when checked on hover     |
| `--control-border-color-focus`             | Border color of the control on focus                  |
| `--control-border-color-hover`             | Border color of the control on hover                  |
| `--control-color-checked`                  | Color of the control when checked (the small circle)  |
| `--control-size`                           | Size of the control                                   |
| `--label-color`                            | Color of the label                                    |
