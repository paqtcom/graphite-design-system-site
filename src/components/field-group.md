---
title: Field Group - Graphite Design System
---

# Field Group

`<gr-field-group> | GrFieldGroup`

[[toc]]

Field Groups are used to group multiple fields, usually [checkboxes](/components/checkbox). It can be leveraged for vertical (default) or horizontal organization of the fields that are supplied as its children.

<gr-field-group label="Select options">
  <gr-checkbox checked>Option 1</gr-checkbox>
  <gr-checkbox>Option 2</gr-checkbox>
  <gr-checkbox>Option 3</gr-checkbox>
</gr-field-group>

```html
<gr-field-group label="Select options">
  <gr-checkbox checked>Option 1</gr-checkbox>
  <gr-checkbox>Option 2</gr-checkbox>
  <gr-checkbox>Option 3</gr-checkbox>
</gr-field-group>
```

## Examples

### Hiding the Fieldset

You can hide the fieldset and legend that wraps the field group using the `no-fieldset` attribute. In this case, a label is still recommended for assistive devices to properly identify the group.

<gr-field-group label="Select options" no-fieldset>
  <gr-checkbox checked>Option 1</gr-checkbox>
  <gr-checkbox>Option 2</gr-checkbox>
  <gr-checkbox>Option 3</gr-checkbox>
</gr-field-group>

```html
<gr-field-group label="Select options">
  <gr-checkbox checked>Option 1</gr-checkbox>
  <gr-checkbox>Option 2</gr-checkbox>
  <gr-checkbox>Option 3</gr-checkbox>
</gr-field-group>
```

### Horizontal layout

You can render the fields with a horizontal layout using the `horizontal` attribute.

<gr-field-group label="Select options" horizontal>
  <gr-checkbox checked>Option 1</gr-checkbox>
  <gr-checkbox>Option 2</gr-checkbox>
  <gr-checkbox>Option 3</gr-checkbox>
</gr-field-group>

```html
<gr-field-group label="Select options" horizontal>
  <gr-radio value="1">Item 1</gr-radio>
  <gr-radio value="2">Item 2</gr-radio>
  <gr-radio value="3">Item 3</gr-radio>
</gr-radio-group>
```

## Properties

| Property     | Attribute     | Description                                                                                                   | Type      | Default |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `horizontal` | `horizontal`  | Render the fields horizontal instead of vertical                                                              | `boolean` | `false` |
| `label`      | `label`       | The field group label. Recommended for proper accessibility. Alternatively, you can use the label slot.       | `string`  | `''`    |
| `noFieldset` | `no-fieldset` | Hides the fieldset and legend that surrounds the field group. The label will still be read by screen readers. | `boolean` | `false` |

## Slots

| Slot        | Description                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| `(default)` | The default slot where fields are placed.                                                               |
| `"label"`   | The field group label. Recommended for proper accessibility. Alternatively, you can use the label prop. |

## CSS Custom Properties

| Name                                 | Description                                                                                  |
| ------------------------------------ | -------------------------------------------------------------------------------------------- |
| `--border-color`                     | Border color of the fieldset                                                                 |
| `--border-radius`                    | Border radius of the fieldset                                                                |
| `--label-color`                      | Color of the label                                                                           |
| `--label-padding-end`                | Right padding of the label (will be left padding when we support right-to-left direction)    |
| `--label-padding-start`              | Left padding of the label (will be right padding when we support right-to-left direction)    |
| `--margin-between-fields`            | Margin between the children                                                                  |
| `--margin-between-fields-horizontal` | Margin between the children when layout is horizontal                                        |
| `--padding-bottom`                   | Bottom padding of the fieldset                                                               |
| `--padding-end`                      | Right padding of the fieldset (will be left padding when we support right-to-left direction) |
| `--padding-start`                    | Left padding of the fieldset (will be right padding when we support right-to-left direction) |
| `--padding-top`                      | Top padding of the fieldset                                                                  |
