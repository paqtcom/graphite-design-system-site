---
title: Components - way-input
---

# way-input

[[toc]]

Inputs can be used in forms, or anywhere where the user needs to provide information.

<way-input></way-input>

```html
<way-input></way-input>
```

## Examples

### Placeholders

Use the `placeholder` attribute to add a placeholder.

<way-input placeholder="Type something"></way-input>

```html
<way-input placeholder="Type something"></way-input>
```

### Disabled

Use the `disabled` attribute to disable a input. Clicks will be suppressed until the disabled state is removed.

<way-input placeholder="Disabled" size="small" disabled></way-input>

<way-input placeholder="Disabled" size="medium" disabled></way-input>

<way-input placeholder="Disabled" size="large" disabled></way-input>

```html
<way-input placeholder="Disabled" size="small" disabled></way-input>

<way-input placeholder="Disabled" size="medium" disabled></way-input>

<way-input placeholder="Disabled" size="large" disabled></way-input>
```

### Sizes

Use the `size` attribute to change a input's size.

<way-input placeholder="Small" size="small"></way-input>

<way-input placeholder="Medium" size="medium"></way-input>

<way-input placeholder="Large" size="large"></way-input>

```html
<way-input placeholder="Small" size="small"></way-input>

<way-input placeholder="Medium" size="medium"></way-input>

<way-input placeholder="Large" size="large"></way-input>
```

### Labels

Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.

<way-input label="What is your name?"></way-input>

```html
<way-input label="What is your name?"></way-input>
```

### Help Text

Add descriptive help text to an input with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

<way-input label="Nickname" help-text="What would you like people to call you?"></way-input>

```html
<way-input label="Nickname" help-text="What would you like people to call you?"></way-input>
```

## Properties

| Property      | Attribute     | Description                                                                                                                | Type                                                                                  | Default     |
| ------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------- |
| `disabled`    | `disabled`    | Set to true to disable the input control.                                                                                  | `boolean`                                                                             | `false`     |
| `helpText`    | `help-text`   | The input's help text. Alternatively, you can use the help-text slot.                                                      | `string`                                                                              | `''`        |
| `inputmode`   | `inputmode`   | The input's inputmode attribute.                                                                                           | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"` | `undefined` |
| `invalid`     | `invalid`     | This will be true when the control is in an invalid state. Validity is determined by props such as `type`, and `required`. | `boolean`                                                                             | `false`     |
| `label`       | `label`       | The inputs's label. Alternatively, you can use the label slot.                                                             | `string`                                                                              | `''`        |
| `name`        | `name`        | The input's name.                                                                                                          | `string`                                                                              | `''`        |
| `placeholder` | `placeholder` | The input's placeholder text.                                                                                              | `string`                                                                              | `''`        |
| `required`    | `required`    | The input's required attribute.                                                                                            | `boolean`                                                                             | `false`     |
| `size`        | `size`        | The input's size.                                                                                                          | `"large" \| "medium" \| "small"`                                                      | `'medium'`  |
| `type`        | `type`        | Specifies what type of input to use.                                                                                       | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"`           | `'text'`    |
| `value`       | `value`       | The input's value attribute.                                                                                               | `string`                                                                              | `''`        |

## Events

| Event        | Description                               | Type               |
| ------------ | ----------------------------------------- | ------------------ |
| `way-blur`   | Emitted when the control loses focus.     | `CustomEvent<any>` |
| `way-change` | Emitted when the control's value changes. | `CustomEvent<any>` |
| `way-focus`  | Emitted when the control gains focus.     | `CustomEvent<any>` |

## Methods

### `reportValidity() => Promise<boolean>`

Checks for validity and shows the browser's validation message if the control is invalid.

#### Returns

Type: `Promise<boolean>`

### `setCustomValidity(message: string) => Promise<void>`

Sets a custom validation message. If `message` is not empty, the field will be considered invalid.

#### Returns

Type: `Promise<void>`

## Slots

| Slot          | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| `"help-text"` | Help text that describes how to use the input.                |
| `"label"`     | The input's label. Alternatively, you can use the label prop. |

## CSS Custom Properties

| Name                       | Description                                                                             |
| -------------------------- | --------------------------------------------------------------------------------------- |
| `--background-color`       | Background color of the input                                                           |
| `--background-color-hover` | Background color of the input on hover                                                  |
| `--border-color`           | Border color of the input                                                               |
| `--border-color-hover`     | Border color of the input on hover                                                      |
| `--border-radius`          | Border radius of the input                                                              |
| `--color`                  | Text color of the input                                                                 |
| `--font-size`              | Font size of the input                                                                  |
| `--font-weight`            | Font weight of the input                                                                |
| `--label-margin-end`       | Right margin of the label (will be left margin when we support right-to-left direction) |
| `--label-margin-start`     | Left margin of the label (will be right margin when we support right-to-left direction) |
| `--min-height`             | Minimum height of the input                                                             |
| `--placeholder-color`      | Text color of the placeholder                                                           |
