---
title: Components - way-radio-group
---

# way-radio-group

[[toc]]

Radio Groups are used to group multiple radios so they function as a single control.

<way-radio-group label="Select an item">
  <way-radio value="1" checked>Item 1</way-radio>
  <way-radio value="2">Item 2</way-radio>
  <way-radio value="3">Item 3</way-radio>
</way-radio-group>

```html
<way-radio-group label="Select an item">
  <way-radio value="1" checked>Item 1</way-radio>
  <way-radio value="2">Item 2</way-radio>
  <way-radio value="3">Item 3</way-radio>
</way-radio-group>
```

## Examples

### Hiding the Fieldset

You can hide the fieldset and legend that wraps the radio group using the `no-fieldset` attribute. In this case, a label is still required for assistive devices to properly identify the control.

<way-radio-group label="Select an item" no-fieldset>
  <way-radio value="1" checked>Item 1</way-radio>
  <way-radio value="2">Item 2</way-radio>
  <way-radio value="3">Item 3</way-radio>
</way-radio-group>

```html
<way-radio-group label="Select an item" no-fieldset>
  <way-radio value="1" checked>Item 1</way-radio>
  <way-radio value="2">Item 2</way-radio>
  <way-radio value="3">Item 3</way-radio>
</way-radio-group>
```

## Properties

| Property              | Attribute               | Description                                                                                                   | Type      | Default        |
| --------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------- | --------- | -------------- |
| `allowEmptySelection` | `allow-empty-selection` | If `true`, the radios can be deselected.                                                                      | `boolean` | `false`        |
| `label`               | `label`                 | The radio group label. Required for proper accessibility. Alternatively, you can use the label slot.          | `string`  | `''`           |
| `name`                | `name`                  | The name of the control, which is submitted with the form data.                                               | `string`  | `this.inputId` |
| `noFieldset`          | `no-fieldset`           | Hides the fieldset and legend that surrounds the radio group. The label will still be read by screen readers. | `boolean` | `false`        |
| `value`               | `value`                 | the value of the radio group.                                                                                 | `any`     | `undefined`    |

## Events

| Event        | Description                         | Type                                          |
| ------------ | ----------------------------------- | --------------------------------------------- |
| `way-change` | Emitted when the value has changed. | `CustomEvent<WayRadioGroupChangeEventDetail>` |

## Slots

| Slot        | Description                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| `(default)` | The default slot where radio controls are placed.                                                    |
| `"label"`   | The radio group label. Required for proper accessibility. Alternatively, you can use the label prop. |

## CSS Custom Properties

| Name                      | Description                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| `--border-color`          | Border color of the fieldset                                                                 |
| `--border-radius`         | Border radius of the fieldset                                                                |
| `--label-color`           | Color of the label                                                                           |
| `--label-padding-end`     | Right padding of the label (will be left padding when we support right-to-left direction)    |
| `--label-padding-start`   | Left padding of the label (will be right padding when we support right-to-left direction)    |
| `--margin-between-radios` | Margin between the way-radio children                                                        |
| `--padding-bottom`        | Bottom padding of the fieldset                                                               |
| `--padding-end`           | Right padding of the fieldset (will be left padding when we support right-to-left direction) |
| `--padding-start`         | Left padding of the fieldset (will be right padding when we support right-to-left direction) |
| `--padding-top`           | Top padding of the fieldset                                                                  |
