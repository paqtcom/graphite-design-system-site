---
title: Textarea - Graphite Design System
---

# Textarea

`<gr-textarea> | GrTextarea`

[[toc]]

<p class="intro">Textarea can be used in forms, or anywhere where the user needs to provide information. It allows multiple lines of text.</p>

Unlike the native textarea element, the Graphite textarea does not support loading its value from the inner content. The textarea value should be set in the value attribute.

<div class="example-block">
  <gr-textarea label="Feedback"></gr-textarea>
</div>

```html
<gr-textarea label="Feedback"></gr-textarea>
```

## Options

### Rows

Use the `rows` attribute to change the number of text rows that get shown.

<div class="example-block">
  <gr-textarea rows="2"></gr-textarea>
</div>

```html
<gr-textarea rows="2"></gr-textarea>
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

The placeholder text, also commonly known as “ghost text,” is temporary and disappears once a user enters text.

Putting instructions for how to complete a textarea, requirements, or any other essential information into placeholder text is not accessible. Once a value is entered, this text is no longer viewable; if someone is using an automatic form filler, they will never get the information in the placeholder text. [Help text](#help-text) is the preferred way to communicate this information.

<div class="example-block">
  <gr-textarea placeholder="Type something"></gr-textarea>
</div>

```html
<gr-textarea placeholder="Type something"></gr-textarea>
```

### Disabled

Use the `disabled` attribute to disable an input.

<div class="example-block">
  <gr-textarea placeholder="Textarea" disabled></gr-textarea>
</div>

```html
<gr-textarea placeholder="Textarea" disabled></gr-textarea>
```

### Sizes

Use the `size` attribute to change a textarea's size.

<div class="example-block">
  <gr-textarea placeholder="Small" size="small"></gr-textarea>
  <br>
  <gr-textarea placeholder="Medium" size="medium"></gr-textarea>
  <br>
  <gr-textarea placeholder="Large" size="large"></gr-textarea>
</div>

```html
<gr-textarea placeholder="Small" size="small"></gr-textarea>
<br />
<gr-textarea placeholder="Medium" size="medium"></gr-textarea>
<br />
<gr-textarea placeholder="Large" size="large"></gr-textarea>
```

### Invalid

The textarea can be marked invalid using the `invalid` attribute.

<div class="example-block">
  <gr-textarea placeholder="Invalid" invalid></gr-input>
</div>

```html
<gr-textarea placeholder="Invalid" invalid></gr-input>
```

### Labels

Use the `label` attribute to give the textarea an accessible label. For labels that contain HTML, use the `label` slot instead.

<div class="example-block">
  <gr-textarea label="Comments"></gr-textarea>
</div>

```html
<gr-textarea label="Comments"></gr-textarea>
```

### Required or optional

Textareas can be marked as optional or required, depending on the situation. For required textareas, there are two styling options: a “(required)” label or an asterisk with the `required-indicator` attribute. If you use an asterisk, be sure to include hint text to explain what the asterisk means. Optional textareas are either denoted with text added to the end of the label — “(optional)” — or have no indication at all.

The asterisk used in this component is an icon that has specific spacing from the label text — not part of the label text itself.

<div class="example-block">
  <gr-textarea label="Interests (required)" value="Photography, gardening"></gr-textarea>
  <br>
  <gr-textarea label="Interests (optional)" value="Photography, gardening"></gr-textarea>
  <br>
  <gr-textarea label="Interests" value="Photography, gardening" required-indicator></gr-textarea>
</div>

```html
<gr-textarea label="Interests (required)" value="Photography, gardening"></gr-textarea>
<br />
<gr-textarea label="Interests (optional)" value="Photography, gardening"></gr-textarea>
<br />
<gr-textarea label="Interests" value="Photography, gardening" required-indicator></gr-textarea>
```

### Help Text

Add descriptive help text to a textarea with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

<div class="example-block">
  <gr-textarea label="Feedback" help-text="Please tell us what you think."></gr-textarea>
</div>

```html
<gr-textarea label="Feedback" help-text="Please tell us what you think."></gr-textarea>
```

### Invalid Text

Add descriptive invalid text to a textarea with the `invalid-text` attribute. For invalid texts that contain HTML, use the `invalid-text` slot instead.

When you add the `invalid` attribute, the invalid text will be shown. When a textarea already includes help text, the help text is replaced with invalid text.

<div class="example-block">
  <gr-textarea label="Feedback" help-text="Please tell us what you think." invalid-text="Tell us what you think." invalid></gr-textarea>
</div>

```html
<gr-textarea
  label="Feedback"
  help-text="Please tell us what you think."
  invalid-text="Tell us what you think."
  invalid
></gr-textarea>
```

### Prevent Resizing

By default, textareas can be resized vertically by the user (in desktop browsers). To prevent resizing, set the `resize` attribute to `none`.

<div class="example-block">
  <gr-textarea resize="none"></gr-textarea>
</div>

```html
<gr-textarea resize="none"></gr-textarea>
```

### Expand with Content

Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.

<div class="example-block">
  <gr-textarea resize="auto"></gr-textarea>
</div>

```html
<gr-textarea resize="auto"></gr-textarea>
```

## Usage guidelines

### Include a label

Every textarea should have a label. A textarea without a label is ambiguous and not accessible.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-textarea label="Members" value="Soof"></gr-input>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-textarea value="Soof"></gr-input>

</div>

### Follow capitalization rules

Textarea labels and placeholder text should be in sentence case.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-textarea label="Hobbies and interests" value="Photography, gardening"></gr-textarea>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-textarea label="Hobbies and Interests" value="Photography, gardening"></gr-textarea>

</div>

### Mark the minority of fields in a form as optional or required

In a single form, mark only the required fields or only the optional fields, depending on whichever is less frequent in the entire form. If most of the fields are optional, only the required fields should be give an asterisk or have labels appended with “(required)”. If most of the fields are required, only the optional fields should be appended with “(optional)”. An asterisk should never be used to note that a field is optional. If you use an asterisk, be sure to include hint text to explain what the asterisk means.

Try to only ask for information that’s required.

For large forms involving sensitive data like checkout processes and long account creation forms, it's better to mark both required fields & optional fields explicitly (required fields with an asterisk, and label appended with “(optional)” for optional fields).

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-input label="Name" value="Sofie van der Grift"></gr-input>

<gr-input label="Nickname" value="Soof"></gr-input>

<gr-textarea label="Interests (optional)" value="Photography"></gr-textarea>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-input label="Name (required)" value="Sofie van der Grift"></gr-input>

<gr-input label="Nickname (required)" value="Soof"></gr-input>

<gr-textarea label="Interests" value="Photography"></gr-textarea>

</div>

### Use help text to show hints, formatting, and requirements

The description in the help text is flexible and encompasses a range of guidance. Sometimes this guidance is about what to input, and sometime it’s about how to input. This includes information such as:

- An overall description of the input field
- Hints for what kind of information needs to be input
- Specific formatting examples or requirements

The help text’s message should not simply restate the same information in the label in order to prompt someone to interact with it. Don’t add help text if it isn’t actually relevant or meaningful to a user in order to try to maintain layout continuity with other inputs that require help text.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-textarea label="Interests" help-text="Describe the interests you'd like to explore through our tutorials."></gr-textarea>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-textarea label="Interests" help-text="Enter your interests."></gr-textarea>

</div>

### Use help text instead of placeholder text

Putting instructions for how to complete an input, requirements, or any other essential information into placeholder text is not accessible, and should be avoided if possible. Once a value is entered, placeholder text is no longer viewable; if someone is using an automatic form filler, they will never get the information in the placeholder text.

Instead of placeholder text, use the help text description to convey requirements or to show any formatting examples that would help user comprehension. If there's placeholder text and help text at the same time, it becomes redundant and distracting, and especially if they're communicating the same thing.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-textarea label="Interests" help-text="Describe the interests you'd like to explore through our tutorials."></gr-textarea>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-textarea label="Interests" placeholder="Describe the interests you'd like to explore through our tutorials."></gr-textarea>

</div>

### Validation

We recommend validating the users data before form submission. Use visual cues to guide the user as to where the problem lies within the form. This will help to easily identify the elements that need to be corrected.

The validation should appear when the user has clicked away from the textarea (not before), or otherwise when the user submits the form. Once the user corrects the errors within the textarea, the validation should disappear once the data is rendered as valid.

For Vue, you can use libraries like [Vuelidate](https://vuelidate-next.netlify.app/) & [VeeValidate](https://vee-validate.logaretm.com/) (using Custom Inputs).

Of course, you should still validate server-side (if applicable).

### Always write invalid text when invalid

Don't just mark an input invalid and expect the user to understand why it's invalid. Furthermore, the invalid text displays an icon which is needed for accessibility, and gives more attention to the invalid field.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-textarea label="Interests" help-text="Describe the interests you'd like to explore through our tutorials." invalid-text="Enter at least one interest." required-indicator invalid></gr-textarea>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-textarea label="Interests" help-text="Describe the interests you'd like to explore through our tutorials." required-indicator invalid></gr-textarea>

</div>

### Switch help text with invalid text

The help text area also displays an error message. When a text field already includes help text and it's marked invalid, the help text is replaced with invalid text. Once it's no longer invalid, the help text description reappears below the field.

Since one gets replaced by the other, the language of the help text and invalid text need to work together to convey the same messaging. Help text explains the requirement or adds supplementary context for how to successfully complete the input. Invalid text tells a user how to make it valid by re-stating the input requirements or describing the necessary interaction. Make sure that the help text and the invalid text include the same essential information so that it isn’t lost if one replaces the other (e.g., password requirements).

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-textarea label="Interests" help-text="Describe the interests you'd like to explore through our tutorials." required-indicator></gr-textarea>

&nbsp;

<gr-textarea label="Interests" help-text="Describe the interests you'd like to explore through our tutorials." invalid-text="Enter at least one interest." required-indicator invalid></gr-textarea>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-textarea label="Interests" help-text="Describe the interests you'd like to explore through our tutorials." required-indicator></gr-textarea>

&nbsp;

<gr-textarea label="Interests" help-text="Describe the interests you'd like to explore through our tutorials." invalid-text="Enter your interests." required-indicator invalid></gr-textarea>

</div>

### Write invalid text that shows a solution

Write error messaging in a human-centered way by guiding a user and showing them a solution — don’t simply state what’s wrong and then leave them guessing as to how to resolve it. Ambiguous error messages can be frustrating and even shame-inducing for users. Also, keep in mind that something that a system may deem an error may not actually be perceived as an error to a user.

Invalid text should be written in 1-2 short, complete sentences and in a clear and straightforward way. End sentences with a period, and never with an exclamation point. For textareas, the nature of the error is often related to something that needs to be fixed for in-line validation, so a helpful tone is most appropriate. For example, if someone were to miss filling out a required field that asks for their interests, write the invalid text like you’re offering a hint or a tip to help guide them to understand what needs to go in the missing field: “Enter at least one interest.”

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-textarea label="Interests" help-text="Describe the interests you'd like to explore through our tutorials." invalid-text="Enter at least one interest." required-indicator invalid></gr-textarea>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-textarea label="Interests" help-text="Describe the interests you'd like to explore through our tutorials." invalid-text="Invalid field" required-indicator invalid></gr-textarea>

</div>

## Properties

| Property            | Attribute            | Description                                                                                                                                                                                               | Type       | Default     |
| ------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ----------- | ----------- | ------------ | ---------- | -------- | ------- | ----------- | ----------- |
| `autocapitalize`    | `autocapitalize`     | Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Available options: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`. | `string`   | `'off'`     |
| `autocorrect`       | `autocorrect`        | Whether auto correction should be enabled when the user is entering/editing the text value.                                                                                                               | `"off"     | "on"`       | `'off'`     |
| `autofocus`         | `autofocus`          | This Boolean attribute lets you specify that a form control should have input focus when the page loads.                                                                                                  | `boolean`  | `false`     |
| `debounce`          | `debounce`           | Set the amount of time, in milliseconds, to wait to trigger the `gr-change` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.                                   | `number`   | `0`         |
| `disabled`          | `disabled`           | Set to true to disable the textarea.                                                                                                                                                                      | `boolean`  | `false`     |
| `enterkeyhint`      | `enterkeyhint`       | A hint to the browser for which enter key to display. Possible values: `"enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`.                                                     | `"done"    | "enter"     | "go"        | "next"       | "previous" | "search" | "send"` | `undefined` |
| `helpText`          | `help-text`          | The textarea's help text. Alternatively, you can use the help-text slot.                                                                                                                                  | `string`   | `''`        |
| `inputmode`         | `inputmode`          | The textarea's inputmode attribute.                                                                                                                                                                       | `"decimal" | "email"     | "none"      | "numeric"    | "search"   | "tel"    | "text"  | "url"`      | `undefined` |
| `invalid`           | `invalid`            | Set to true to indicate this field is invalid. Will display the invalid text instead of the help text                                                                                                     | `boolean`  | `false`     |
| `invalidText`       | `invalid-text`       | The input's invalid text. Alternatively, you can use the invalid-text slot.                                                                                                                               | `string`   | `''`        |
| `label`             | `label`              | The textarea's label. Alternatively, you can use the label slot.                                                                                                                                          | `string`   | `undefined` |
| `maxlength`         | `maxlength`          | Specifies how many characters are allowed.                                                                                                                                                                | `number`   | `undefined` |
| `name`              | `name`               | The textarea's name attribute.                                                                                                                                                                            | `string`   | `''`        |
| `placeholder`       | `placeholder`        | The textarea's placeholder text.                                                                                                                                                                          | `string`   | `undefined` |
| `readonly`          | `readonly`           | If `true`, the user cannot modify the value.                                                                                                                                                              | `boolean`  | `false`     |
| `requiredIndicator` | `required-indicator` | Set to true to display a required indicator, adds an asterisk to label                                                                                                                                    | `boolean`  | `false`     |
| `resize`            | `resize`             | Controls how the textarea can be resized.                                                                                                                                                                 | `"auto"    | "none"      | "vertical"` | `'vertical'` |
| `rows`              | `rows`               | The number of rows to display by default.                                                                                                                                                                 | `number`   | `4`         |
| `size`              | `size`               | The textarea's size.                                                                                                                                                                                      | `"large"   | "medium"    | "small"`    | `'medium'`   |
| `spellcheck`        | `spellcheck`         | If `true`, the element will have its spelling and grammar checked.                                                                                                                                        | `boolean`  | `false`     |
| `value`             | `value`              | The textarea's value attribute.                                                                                                                                                                           | `string`   | `''`        |

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

## CSS custom properties

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
