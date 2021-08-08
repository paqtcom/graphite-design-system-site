---
title: Radio Group - Graphite Design System
---

# Radio Group

`<gr-radio-group> | GrRadioGroup`

[[toc]]

Radio Groups are used to group multiple radios so they function as a single control.

<gr-radio-group value="1">
  <gr-radio value="1">Item 1</gr-radio>
  <gr-radio value="2">Item 2</gr-radio>
  <gr-radio value="3">Item 3</gr-radio>
</gr-radio-group>

```html
<gr-radio-group value="1">
  <gr-radio value="1">Item 1</gr-radio>
  <gr-radio value="2">Item 2</gr-radio>
  <gr-radio value="3">Item 3</gr-radio>
</gr-radio-group>
```

## Examples

### Horizontal

You can render the radio items with a horizontal layout using the `horizontal` attribute.

<gr-radio-group value="3" horizontal>
  <gr-radio value="1">Item 1</gr-radio>
  <gr-radio value="2">Item 2</gr-radio>
  <gr-radio value="3">Item 3</gr-radio>
</gr-radio-group>

```html
<gr-radio-group value="3" horizontal>
  <gr-radio value="1">Item 1</gr-radio>
  <gr-radio value="2">Item 2</gr-radio>
  <gr-radio value="3">Item 3</gr-radio>
</gr-radio-group>
```

### Invalid

The radio group can be marked invalid using the `invalid` attribute.

<gr-radio-group invalid>
  <gr-radio value="1">Item 1</gr-radio>
  <gr-radio value="2">Item 2</gr-radio>
  <gr-radio value="3">Item 3</gr-radio>
</gr-radio-group>

```html
<gr-radio-group invalid>
  <gr-radio value="1">Item 1</gr-radio>
  <gr-radio value="2">Item 2</gr-radio>
  <gr-radio value="3">Item 3</gr-radio>
</gr-radio-group>
```

### Labels

Use the `label` attribute to give the radio group an accessible label. For labels that contain HTML, use the `label` slot instead.

<gr-radio-group label="Select an item">
  <gr-radio value="1">Item 1</gr-radio>
  <gr-radio value="2">Item 2</gr-radio>
  <gr-radio value="3">Item 3</gr-radio>
</gr-radio-group>

```html
<gr-radio-group label="Select an item">
  <gr-radio value="1">Item 1</gr-radio>
  <gr-radio value="2">Item 2</gr-radio>
  <gr-radio value="3">Item 3</gr-radio>
</gr-radio-group>
```

### Invalid Text

Add descriptive invalid text to a radio group with the `invalid-text` attribute. For invalid texts that contain HTML, use the `invalid-text` slot instead.

When you add the `invalid` attribute, the invalid text will be shown.

<gr-radio-group label="Select an item" invalid-text="Select an item" invalid>
  <gr-radio value="1">Item 1</gr-radio>
  <gr-radio value="2">Item 2</gr-radio>
  <gr-radio value="3">Item 3</gr-radio>
</gr-radio-group>

```html
<gr-radio-group label="Select an item" invalid-text="Select an item" invalid>
  <gr-radio value="1">Item 1</gr-radio>
  <gr-radio value="2">Item 2</gr-radio>
  <gr-radio value="3">Item 3</gr-radio>
</gr-radio-group>
```

## Properties

| Property              | Attribute               | Description                                                                                          | Type      | Default        |
| --------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------- | --------- | -------------- |
| `allowEmptySelection` | `allow-empty-selection` | If `true`, the radios can be deselected.                                                             | `boolean` | `false`        |
| `horizontal`          | `horizontal`            | Render the radios horizontal instead of vertical                                                     | `boolean` | `false`        |
| `invalid`             | `invalid`               | Set to true to indicate this field is invalid.                                                       | `boolean` | `false`        |
| `invalidText`         | `invalid-text`          | The radio group's invalid text. Alternatively, you can use the invalid-text slot.                    | `string`  | `''`           |
| `label`               | `label`                 | The radio group label. Required for proper accessibility. Alternatively, you can use the label slot. | `string`  | `''`           |
| `name`                | `name`                  | The name of the control, which is submitted with the form data.                                      | `string`  | `this.inputId` |
| `value`               | `value`                 | the value of the radio group.                                                                        | `any`     | `undefined`    |

## Events

| Event       | Description                         | Type                                       |
| ----------- | ----------------------------------- | ------------------------------------------ |
| `gr-change` | Emitted when the value has changed. | `CustomEvent<RadioGroupChangeEventDetail>` |

## Slots

| Slot             | Description                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| `(default)`      | The default slot where radio controls are placed.                                                    |
| `"invalid-text"` | Invalid text tells a user how to fix the error. Alternatively, you can use the invalid-text prop.    |
| `"label"`        | The radio group label. Required for proper accessibility. Alternatively, you can use the label prop. |

## CSS Custom Properties

| Name                                 | Description                                                    |
| ------------------------------------ | -------------------------------------------------------------- |
| `--margin-between-radios`            | Margin between the gr-radio children                           |
| `--margin-between-radios-horizontal` | Margin between the gr-radio children when layout is horizontal |
