---
title: Components - gr-textarea
---

# gr-textarea

[[toc]]

Textarea can be used in forms, or anywhere where the user needs to provide information. It allows multiple lines of text.

<gr-textarea></gr-textarea>

```html
<gr-textarea></gr-textarea>
```

## Examples

### Rows

Use the `rows` attribute to change the number of text rows that get shown.

<gr-textarea rows="2"></gr-textarea>

```html
<gr-textarea rows="2"></gr-textarea>
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

<gr-textarea placeholder="Type something"></gr-textarea>

```html
<gr-textarea placeholder="Type something"></gr-textarea>
```

### Disabled

Use the `disabled` attribute to disable an input.

<gr-textarea placeholder="Textarea" disabled></gr-textarea>

```html
<gr-textarea placeholder="Textarea" disabled></gr-textarea>
```

### Sizes

Use the `size` attribute to change a textarea's size.

<gr-textarea placeholder="Small" size="small"></gr-textarea>
<br>
<gr-textarea placeholder="Medium" size="medium"></gr-textarea>
<br>
<gr-textarea placeholder="Large" size="large"></gr-textarea>

```html
<gr-textarea placeholder="Small" size="small"></gr-textarea>
<br />
<gr-textarea placeholder="Medium" size="medium"></gr-textarea>
<br />
<gr-textarea placeholder="Large" size="large"></gr-textarea>
```

### Invalid

The textarea can be marked invalid using the `invalid` attribute.

<gr-textarea placeholder="Invalid" invalid></gr-input>

```html
<gr-textarea placeholder="Invalid" invalid></gr-input>
```

### Labels

Use the `label` attribute to give the textarea an accessible label. For labels that contain HTML, use the `label` slot instead.

<gr-textarea label="Comments"></gr-textarea>

```html
<gr-textarea label="Comments"></gr-textarea>
```

### Help Text

Add descriptive help text to a textarea with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

<gr-textarea label="Feedback" help-text="Please tell us what you think."></gr-textarea>

```html
<gr-textarea label="Feedback" help-text="Please tell us what you think."></gr-textarea>
```

### Invalid Text

Add descriptive invalid text to a textarea with the `invalid-text` attribute. For invalid texts that contain HTML, use the `invalid-text` slot instead.

When you add the `invalid` attribute, the invalid text will be shown. When a textarea already includes help text, the help text is replaced with invalid text.

<gr-textarea label="Feedback" help-text="Please tell us what you think." invalid-text="Tell us what you think" invalid></gr-textarea>

```html
<gr-textarea
  label="Feedback"
  help-text="Please tell us what you think."
  invalid-text="Tell us what you think"
  invalid
></gr-textarea>
```

### Prevent Resizing

By default, textareas can be resized vertically by the user. To prevent resizing, set the `resize` attribute to `none`.

<gr-textarea resize="none"></gr-textarea>

```html
<gr-textarea resize="none"></gr-textarea>
```

### Expand with Content

Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.

<gr-textarea resize="auto"></gr-textarea>

```html
<gr-textarea resize="auto"></gr-textarea>
```

## Properties

| Property         | Attribute        | Description                                                                                                                                                                                               | Type       | Default     |
| ---------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- | ----------- | ------------ | ---------- | -------- | ------- | ----------- | ----------- |
| `autocapitalize` | `autocapitalize` | Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Available options: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`. | `string`   | `'off'`     |
| `autocorrect`    | `autocorrect`    | Whether auto correction should be enabled when the user is entering/editing the text value.                                                                                                               | `"off"     | "on"`       | `'off'`     |
| `autofocus`      | `autofocus`      | This Boolean attribute lets you specify that a form control should have input focus when the page loads.                                                                                                  | `boolean`  | `false`     |
| `debounce`       | `debounce`       | Set the amount of time, in milliseconds, to wait to trigger the `gr-change` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.                                   | `number`   | `0`         |
| `disabled`       | `disabled`       | Set to true to disable the textarea.                                                                                                                                                                      | `boolean`  | `false`     |
| `enterkeyhint`   | `enterkeyhint`   | A hint to the browser for which enter key to display. Possible values: `"enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`.                                                     | `"done"    | "enter"     | "go"        | "next"       | "previous" | "search" | "send"` | `undefined` |
| `helpText`       | `help-text`      | The textarea's help text. Alternatively, you can use the help-text slot.                                                                                                                                  | `string`   | `''`        |
| `inputmode`      | `inputmode`      | The textarea's inputmode attribute.                                                                                                                                                                       | `"decimal" | "email"     | "none"      | "numeric"    | "search"   | "tel"    | "text"  | "url"`      | `undefined` |
| `invalid`        | `invalid`        | Set to true to indicate this field is invalid. Will display the invalid text instead of the help text                                                                                                     | `boolean`  | `false`     |
| `invalidText`    | `invalid-text`   | The input's invalid text. Alternatively, you can use the invalid-text slot.                                                                                                                               | `string`   | `''`        |
| `label`          | `label`          | The textarea's label. Alternatively, you can use the label slot.                                                                                                                                          | `string`   | `undefined` |
| `maxlength`      | `maxlength`      | Specifies how many characters are allowed.                                                                                                                                                                | `number`   | `undefined` |
| `name`           | `name`           | The textarea's name attribute.                                                                                                                                                                            | `string`   | `''`        |
| `placeholder`    | `placeholder`    | The textarea's placeholder text.                                                                                                                                                                          | `string`   | `undefined` |
| `readonly`       | `readonly`       | If `true`, the user cannot modify the value.                                                                                                                                                              | `boolean`  | `false`     |
| `resize`         | `resize`         | Controls how the textarea can be resized.                                                                                                                                                                 | `"auto"    | "none"      | "vertical"` | `'vertical'` |
| `rows`           | `rows`           | The number of rows to display by default.                                                                                                                                                                 | `number`   | `4`         |
| `size`           | `size`           | The textarea's size.                                                                                                                                                                                      | `"large"   | "medium"    | "small"`    | `'medium'`   |
| `spellcheck`     | `spellcheck`     | If `true`, the element will have its spelling and grammar checked.                                                                                                                                        | `boolean`  | `false`     |
| `value`          | `value`          | The textarea's value attribute.                                                                                                                                                                           | `string`   | `''`        |

## Events

| Event       | Description                                | Type                |
| ----------- | ------------------------------------------ | ------------------- |
| `gr-blur`   | Emitted when the textarea loses focus.     | `CustomEvent<void>` |
| `gr-change` | Emitted when the textarea's value changes. | `CustomEvent<void>` |
| `gr-focus`  | Emitted when the textarea has focus.       | `CustomEvent<void>` |
| `gr-input`  | Emitted when the textarea receives input.  | `CustomEvent<void>` |

## Methods

### `removeFocus() => Promise<void>`

Removes focus fromt the textarea.

#### Returns

Type: `Promise<void>`

### `select() => Promise<void>`

Selects all the text in the input.

#### Returns

Type: `Promise<void>`

### `setFocus(options?: FocusOptions) => Promise<void>`

Sets focus on the textarea.

#### Returns

Type: `Promise<void>`

### `setRangeText(replacement: string, start: number, end: number, selectMode?: 'select' | 'start' | 'end' | 'preserve') => Promise<void>`

Replaces a range of text with a new string.

#### Returns

Type: `Promise<void>`

### `setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection?: 'forward' | 'backward' | 'none') => Promise<void>`

Sets the start and end positions of the text selection (0-based).

#### Returns

Type: `Promise<void>`

## Slots

| Slot             | Description                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| `"help-text"`    | Help text that describes how to use the textarea.                                                 |
| `"invalid-text"` | Invalid text tells a user how to fix the error. Alternatively, you can use the invalid-text prop. |
| `"label"`        | The textarea's label. Alternatively, you can use the label prop.                                  |

## CSS Custom Properties

| Name                               | Description                                                                                  |
| ---------------------------------- | -------------------------------------------------------------------------------------------- |
| `--background-color`               | Background color of the textarea                                                             |
| `--background-color-focus`         | Background color of the textarea on focus                                                    |
| `--background-color-hover`         | Background color of the textarea on hover                                                    |
| `--background-color-invalid`       | Background color of the textarea when invalid                                                |
| `--background-color-invalid-hover` | Background color of the textarea when invalid on focus                                       |
| `--border-color`                   | Border color of the textarea                                                                 |
| `--border-color-focus`             | Border color of the textarea on focus                                                        |
| `--border-color-hover`             | Border color of the textarea on hover                                                        |
| `--border-color-invalid`           | Border color of the textarea when invalid                                                    |
| `--border-color-invalid-hover`     | Border color of the textarea when invalid on focus                                           |
| `--border-radius`                  | Border radius of the textarea                                                                |
| `--color`                          | Text color of the textarea                                                                   |
| `--focus-ring`                     | The focus ring style to use when the textarea receives focus, a `box-shadow` property.       |
| `--font-size`                      | Font size of the textarea                                                                    |
| `--font-weight`                    | Font weight of the textarea                                                                  |
| `--min-height`                     | Minimum height of the textarea                                                               |
| `--padding-end`                    | Right padding of the textarea (will be left padding when we support right-to-left direction) |
| `--padding-start`                  | Left padding of the textarea (will be right padding when we support right-to-left direction) |
| `--placeholder-color`              | Text color of the placeholder                                                                |
