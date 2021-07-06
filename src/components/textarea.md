---
title: Components - way-textarea
---

# way-textarea

[[toc]]

Textarea can be used in forms, or anywhere where the user needs to provide information.
<way-textarea type="text" name="textarea" label="label" rows="5"></way-textarea>

```html
<way-textarea type="text" name="textarea" label="label" rows="5"></way-textarea>
```

## Examples

### Autofocus

Use the `autofocus` attribute to set automic focus on the textarea.

<way-textarea type="text" name="textarea" label="label" rows="10" autofocus></way-textarea>

```html
<way-textarea type="text" name="textarea" label="label" rows="10" autofocus></way-textarea>
```

### Rows

Use the `rows` attribute to set the amount of rows to use.

<way-textarea type="text" name="textarea" label="label" rows="5"></way-textarea>

<way-textarea type="text" name="textarea" label="label" rows="10"></way-textarea>

<way-textarea type="text" name="textarea" label="label" rows="15"></way-textarea>

```html
<way-textarea type="text" name="textarea" label="label" rows="5"></way-textarea>
<way-textarea type="text" name="textarea" label="label" rows="10"></way-textarea>
<way-textarea type="text" name="textarea" label="label" rows="15"></way-textarea>
```

### Disabled

Use the `disabled` attribute to disable a textarea. Clicks will be suppressed until the disabled state is removed.

<way-textarea type="text" name="textarea" label="label" rows="10" disabled></way-textarea>

```html
<way-textarea type="text" name="textarea" label="label" rows="10" disabled></way-textarea>
```

### Max characters

Use the `maxlength` attribute to set max allowed characters.

<way-textarea type="text" name="textarea" label="label" rows="10" maxlength="20"></way-textarea>

```html
<way-textarea type="text" name="textarea" label="label" rows="10" maxlength="20"></way-textarea>
```

## Properties

| Property    | Attribute   | Description                                                      | Type      | Default     |
| ----------- | ----------- | ---------------------------------------------------------------- | --------- | ----------- |
| `autofocus` | `autofocus` | If `true`, the textarea should autofocus.                        | `boolean` | `false`     |
| `disabled`  | `disabled`  | If `true`, the user cannot interact with the textarea.           | `boolean` | `false`     |
| `label`     | `label`     | The textarea's label. Alternatively, you can use the label slot. | `string`  | `undefined` |
| `maxlength` | `maxlength` | Specifies how many characters are allowed.                       | `number`  | `undefined` |
| `name`      | `name`      | The textarea's name attribute.                                   | `string`  | `undefined` |
| `rows`      | `rows`      | Specifies how many textarea rows to use.                         | `number`  | `undefined` |
| `type`      | `type`      | Specifies what type of textarea to use.                          | `string`  | `undefined` |

## Events

| Event       | Description                         | Type                |
| ----------- | ----------------------------------- | ------------------- |
| `way-blur`  | Emitted when the input loses focus. | `CustomEvent<void>` |
| `way-focus` | Emitted when the input has focus.   | `CustomEvent<void>` |
