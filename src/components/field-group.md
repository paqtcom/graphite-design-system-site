---
title: Field Group - Graphite Design System
---

# Field Group

`<gr-field-group> | GrFieldGroup`

[[toc]]

Field Groups are used to group multiple fields, usually [checkboxes](/components/checkbox). It can be leveraged for vertical (default) or horizontal organization of the fields that are supplied as its children.

<div class="example-block">
  <gr-field-group>
    <gr-checkbox checked>Option 1</gr-checkbox>
    <gr-checkbox>Option 2</gr-checkbox>
    <gr-checkbox>Option 3</gr-checkbox>
  </gr-field-group>
</div>

```html
<gr-field-group>
  <gr-checkbox checked>Option 1</gr-checkbox>
  <gr-checkbox>Option 2</gr-checkbox>
  <gr-checkbox>Option 3</gr-checkbox>
</gr-field-group>
```

## Options

### Horizontal layout

You can render the fields with a horizontal layout using the `horizontal` attribute.

<div class="example-block">
  <gr-field-group horizontal>
    <gr-checkbox checked>Option 1</gr-checkbox>
    <gr-checkbox>Option 2</gr-checkbox>
    <gr-checkbox>Option 3</gr-checkbox>
  </gr-field-group>
</div>

```html
<gr-field-group horizontal>
  <gr-checkbox checked>Option 1</gr-checkbox>
  <gr-checkbox>Option 2</gr-checkbox>
  <gr-checkbox>Option 3</gr-checkbox>
</gr-radio-group>
```

### Labels

Use the `label` attribute to give the field group an accessible label. For labels that contain HTML, use the `label` slot instead.

<div class="example-block">
  <gr-field-group label="Select items">
    <gr-checkbox checked>Option 1</gr-checkbox>
    <gr-checkbox>Option 2</gr-checkbox>
    <gr-checkbox>Option 3</gr-checkbox>
  </gr-field-group>
</div>

```html
<gr-field-group label="Select items">
  <gr-checkbox checked>Option 1</gr-checkbox>
  <gr-checkbox>Option 2</gr-checkbox>
  <gr-checkbox>Option 3</gr-checkbox>
</gr-field-group>
```

## Properties

| Property     | Attribute    | Description                                                                                             | Type      | Default |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `horizontal` | `horizontal` | Render the fields horizontal instead of vertical                                                        | `boolean` | `false` |
| `label`      | `label`      | The field group label. Recommended for proper accessibility. Alternatively, you can use the label slot. | `string`  | `''`    |

## Slots

| Slot        | Description                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| `(default)` | The default slot where fields are placed.                                                               |
| `"label"`   | The field group label. Recommended for proper accessibility. Alternatively, you can use the label prop. |

## CSS Custom Properties

| Name                                 | Description                                           |
| ------------------------------------ | ----------------------------------------------------- |
| `--margin-between-fields`            | Margin between the children                           |
| `--margin-between-fields-horizontal` | Margin between the children when layout is horizontal |
