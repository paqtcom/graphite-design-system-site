---
title: Components - way-input
---

# way-input

[[toc]]

Inputs can be used in forms, or anywhere where the user needs to provide information.
<way-input type="text" name="input" size="medium" label="label"></way-input>

```html
<way-input type="text" name="input" size="medium" label="label"></way-input>
```

## Examples

### Sizes

Use the `size` attribute to change a input's size.

<way-input type="text" name="input" size="small" label="small"></way-input>
<way-input type="text" name="input" size="medium" label="medium"></way-input>
<way-input type="text" name="input" size="large" label="large"></way-input>

```html
<way-input type="text" name="input" size="small" label="small"></way-input>
<way-input type="text" name="input" size="medium" label="medium"></way-input>
<way-input type="text" name="input" size="large" label="large"></way-input>
```

### Inline

Use the `inline` attribute to use the label inline.

<way-input type="text" name="input" size="medium" label="medium" inline></way-input>

```html
<way-input type="text" name="input" size="medium" label="medium" inline></way-input>
```

### Disabled

Use the `disabled` attribute to disable a input. Clicks will be suppressed until the disabled state is removed.

<way-input type="text" name="input" size="medium" label="medium" disabled></way-input>

```html
<way-input type="text" name="input" size="medium" label="medium" disabled></way-input>
```

## Properties

| Property   | Attribute  | Description                                                   | Type                             | Default     |
| ---------- | ---------- | ------------------------------------------------------------- | -------------------------------- | ----------- |
| `disabled` | `disabled` | Specifies what if input is disabled.                          | `boolean`                        | `undefined` |
| `inline`   | `inline`   | Specifies what if label and input must be inline.             | `boolean`                        | `undefined` |
| `label`    | `label`    | The input's label. Alternatively, you can use the label slot. | `string`                         | `undefined` |
| `name`     | `name`     | The input's name attribute.                                   | `string`                         | `undefined` |
| `variant`  | `variant`  | The input's variant.                                          | `"large" \| "medium" \| "small"` | `'medium'`  |
| `type`     | `type`     | Specifies what type of input to use.                          | `string`                         | `undefined` |

## Events

| Event       | Description                         | Type                |
| ----------- | ----------------------------------- | ------------------- |
| `way-blur`  | Emitted when the input loses focus. | `CustomEvent<void>` |
| `way-focus` | Emitted when the input has focus.   | `CustomEvent<void>` |
