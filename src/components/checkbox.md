---
title: Checkbox - Graphite Design System
---

# Checkbox

`<gr-checkbox> | GrCheckbox`

[[toc]]

<p class="intro">Checkboxes allow the user to toggle an option on or off.</p>

Use a [field group](/components/field-group) for vertical or horizontal organization of multiple checkboxes.

<div class="example-block">
  <gr-field-group label="Select options">
    <gr-checkbox>Option 1</gr-checkbox>
    <gr-checkbox>Option 2</gr-checkbox>
    <gr-checkbox>Option 3</gr-checkbox>
  </gr-field-group>
</div>

```html
<gr-field-group label="Select options">
  <gr-checkbox>Option 1</gr-checkbox>
  <gr-checkbox>Option 2</gr-checkbox>
  <gr-checkbox>Option 3</gr-checkbox>
</gr-field-group>
```

## Options

### Checked

Use the `checked` attribute to activate the checkbox.

<div class="example-block">
  <gr-checkbox checked>Checked</gr-checkbox>
</div>

```html
<gr-checkbox checked>Checked</gr-checkbox>
```

### Indeterminate

Use the `indeterminate` attribute to make the checkbox indeterminate.

<div class="example-block">
  <gr-checkbox indeterminate>Indeterminate</gr-checkbox>
</div>

```html
<gr-checkbox indeterminate>Indeterminate</gr-checkbox>
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

<div class="example-block">
  <gr-checkbox disabled>Disabled</gr-checkbox>
</div>

```html
<gr-checkbox disabled>Disabled</gr-checkbox>
```

### Invalid

The checkbox can be marked invalid using the `invalid` attribute.

<div class="example-block">
  <gr-checkbox invalid>I agree to the <a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/" target="_blank" rel="noopener noreferrer">terms</a></gr-checkbox>
</div>

```html
<gr-checkbox invalid>
  I agree to the
  <a
    href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/"
    target="_blank"
    rel="noopener noreferrer"
  >
    terms
  </a>
</gr-checkbox>
```

### Invalid Text

Add descriptive invalid text to a checkbox with the `invalid-text` attribute. For invalid texts that contain HTML, use the `invalid-text` slot instead.

When you add the `invalid` attribute, the invalid text will be shown.

<div class="example-block">
  <gr-checkbox invalid-text="You have to agree to our terms to continue." invalid>I agree to the <a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/" target="_blank" rel="noopener noreferrer">terms</a></gr-checkbox>
</div>

```html
<gr-checkbox invalid-text="You have to agree to our terms to continue." invalid>
  I agree to the
  <a
    href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/"
    target="_blank"
    rel="noopener noreferrer"
  >
    terms
  </a>
</gr-checkbox>
```

## Usage guidelines

### Checkbox or radio button?

Checkboxes and radio buttons are not interchangeable. A set of checkboxes should be used to select as many options as desired (or none). A set of radio buttons should be used to select only a single option from a list of mutually exclusive options.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-field-group label="Interests">
  <gr-checkbox checked>Travel</gr-checkbox>
  <gr-checkbox checked>Music</gr-checkbox>
  <gr-checkbox>Shopping</gr-checkbox>
</gr-field-group>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-field-group label="Size">
  <gr-checkbox checked>Small</gr-checkbox>
  <gr-checkbox checked>Medium</gr-checkbox>
  <gr-checkbox>Large</gr-checkbox>
</gr-field-group>

</div>

### Label groups of related checkboxes

Sets of checkboxes should always have a clear label that describes what the list of options represents and guides users what to do. This is important for accessibility, since a screen reader will read the label before each option.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-field-group label="Page(s) to display">
  <gr-checkbox checked>Homepage</gr-checkbox>
  <gr-checkbox checked>Galery</gr-checkbox>
  <gr-checkbox>Contact us</gr-checkbox>
</gr-field-group>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-field-group no-fieldset>
  <gr-checkbox checked>Tomorrow</gr-checkbox>
  <gr-checkbox checked>In 3 days</gr-checkbox>
  <gr-checkbox>Next week</gr-checkbox>
</gr-field-group>

</div>

### Validation

We recommend validating the users data before form submission. Use visual cues to guide the user as to where the problem lies within the form. This will help to easily identify the elements that need to be corrected.

The validation should appear when the user has clicked away from the checkbox (not before), or otherwise when the user submits the form. Once the user corrects the errors within the checkbox, the validation should disappear once the data is rendered as valid.

For Vue, we recommend [Vuelidate](https://vuelidate-next.netlify.app/) to implement this behavior. [See a working example (CodeSandbox)](https://codesandbox.io/s/graphiteds-vue3-vuelidate-example-x6moc?file=/src/App.vue).

Of course, you should still validate server-side (if applicable).

### Always provide invalid text when invalid

Don't just mark a checkbox invalid and expect the user to understand why it's invalid. Furthermore, the invalid text displays an icon which is needed for accessibility, and gives more attention to the invalid field.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-checkbox invalid-text="You have to agree to our terms to continue." invalid>
  I agree to the <a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/" target="_blank" rel="noopener noreferrer">terms</a>
</gr-checkbox>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-checkbox invalid>I agree to the <a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/" target="_blank" rel="noopener noreferrer">terms</a></gr-checkbox>

</div>

### Write invalid text that shows a solution

Write error messaging in a human-centered way by guiding a user and showing them a solution — don’t simply state what’s wrong and then leave them guessing as to how to resolve it. Ambiguous error messages can be frustrating and even shame-inducing for users. Also, keep in mind that something that a system may deem an error may not actually be perceived as an error to a user.

Invalid text should be written in 1-2 short, complete sentences and in a clear and straightforward way. End sentences with a period, and never with an exclamation point.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-checkbox invalid-text="You have to agree to our terms to continue." invalid>
  I agree to the <a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/" target="_blank" rel="noopener noreferrer">terms</a>
</gr-checkbox>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-checkbox invalid-text="Required field" invalid>
  I agree to the <a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/" target="_blank" rel="noopener noreferrer">terms</a>
</gr-checkbox>

</div>

## Properties

| Property        | Attribute       | Description                                                                       | Type      | Default        |
| --------------- | --------------- | --------------------------------------------------------------------------------- | --------- | -------------- |
| `checked`       | `checked`       | Set to true to draw the checkbox in a checked state.                              | `boolean` | `false`        |
| `disabled`      | `disabled`      | Set to true to disable the checkbox.                                              | `boolean` | `false`        |
| `indeterminate` | `indeterminate` | Set to true to draw the checkbox in an indeterminate state.                       | `boolean` | `false`        |
| `invalid`       | `invalid`       | Set to true to indicate this field is invalid.                                    | `boolean` | `false`        |
| `invalidText`   | `invalid-text`  | The radio group's invalid text. Alternatively, you can use the invalid-text slot. | `string`  | `''`           |
| `name`          | `name`          | The name of the control, which is submitted with the form data.                   | `string`  | `this.inputId` |
| `value`         | `value`         | The checkbox's value attribute.                                                   | `string`  | `undefined`    |

## Events

| Event       | Description                                       | Type                |
| ----------- | ------------------------------------------------- | ------------------- |
| `gr-blur`   | Emitted when the control loses focus.             | `CustomEvent<void>` |
| `gr-change` | Emitted when the control's checked state changes. | `CustomEvent<void>` |
| `gr-focus`  | Emitted when the control gains focus.             | `CustomEvent<void>` |

## Methods

### `removeFocus() => Promise<void>`

Removes focus from the checkbox.

#### Returns

Type: `Promise<void>`

### `setFocus(options?: FocusOptions) => Promise<void>`

Sets focus on the checkbox.

#### Returns

Type: `Promise<void>`

## Slots

| Slot             | Description                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| `(default)`      | The checkboxes label.                                                                             |
| `"invalid-text"` | Invalid text tells a user how to fix the error. Alternatively, you can use the invalid-text prop. |

## CSS custom properties

| Name                                       | Description                                                                            |
| ------------------------------------------ | -------------------------------------------------------------------------------------- |
| `--control-background-color`               | Background color of the control                                                        |
| `--control-background-color-checked`       | Background color of the control when checked                                           |
| `--control-background-color-checked-focus` | Background color of the control when checked on focus                                  |
| `--control-background-color-checked-hover` | Background color of the control when checked on hover                                  |
| `--control-background-color-hover`         | Background color of the control on hover                                               |
| `--control-border-color`                   | Border color of the control                                                            |
| `--control-border-color-checked`           | Border color of the control when checked                                               |
| `--control-border-color-checked-focus`     | Border color of the control when checked on focus                                      |
| `--control-border-color-checked-hover`     | Border color of the control when checked on hover                                      |
| `--control-border-color-hover`             | Border color of the control on hover                                                   |
| `--control-color-checked`                  | Color of the control when checked (the checkmark icon)                                 |
| `--control-size`                           | Size of the control                                                                    |
| `--focus-ring`                             | The focus ring style to use when the checkbox receives focus, a `box-shadow` property. |
| `--label-color`                            | Color of the label                                                                     |
