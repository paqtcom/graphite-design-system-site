---
title: Input - Graphite Design System
---

# Input

`<gr-input> | GrInput`

[[toc]]

<p class="intro">Inputs can be used in forms, or anywhere where the user needs to provide information.</p>

<div class="example-block">
  <gr-input label="Name"></gr-input>
</div>

```html
<gr-input label="Name"></gr-input>
```

## Options

### Placeholders

Use the `placeholder` attribute to add a placeholder.

The placeholder text, also commonly known as “ghost text,” is temporary and disappears once a user enters text.

Putting instructions for how to complete an input, requirements, or any other essential information into placeholder text is not accessible. Once a value is entered, this text is no longer viewable; if someone is using an automatic form filler, they will never get the information in the placeholder text. [Help text](#help-text) is the preferred way to communicate this information.

<div class="example-block">
  <gr-input placeholder="Type something"></gr-input>
</div>

```html
<gr-input placeholder="Type something"></gr-input>
```

### Clearable

Add the `clearable` attribute to add a clear button when the input has content.

<div class="example-block">
  <gr-input placeholder="Clearable" clearable></gr-input>
</div>

```html
<gr-input placeholder="Clearable" clearable></gr-input>
```

### Toggle password

Add the `toggle-password` attribute to add a toggle button that will show the password when activated.

<div class="example-block">
  <gr-input type="password" placeholder="Password Toggle" size="small" toggle-password></gr-input>
  <br>
  <gr-input type="password" placeholder="Password Toggle" size="medium" toggle-password></gr-input>
  <br>
  <gr-input type="password" placeholder="Password Toggle" size="large" toggle-password></gr-input>
</div>

```html
<gr-input type="password" placeholder="Password Toggle" size="small" toggle-password></gr-input>
<br />
<gr-input type="password" placeholder="Password Toggle" size="medium" toggle-password></gr-input>
<br />
<gr-input type="password" placeholder="Password Toggle" size="large" toggle-password></gr-input>
```

### Pill

Use the `pill` attribute to give inputs rounded edges.

<div class="example-block">
  <gr-input placeholder="Small" size="small" pill></gr-input>
  <br>
  <gr-input placeholder="Medium" size="medium" pill></gr-input>
  <br>
  <gr-input placeholder="Large" size="large" pill></gr-input>
</div>

```html
<gr-input placeholder="Small" size="small" pill></gr-input>
<br />
<gr-input placeholder="Medium" size="medium" pill></gr-input>
<br />
<gr-input placeholder="Large" size="large" pill></gr-input>
```

### Disabled

Use the `disabled` attribute to disable an input.

<div class="example-block">
  <gr-input placeholder="Disabled" size="small" disabled></gr-input>
  <br>
  <gr-input placeholder="Disabled" size="medium" disabled></gr-input>
  <br>
  <gr-input placeholder="Disabled" size="large" disabled></gr-input>
</div>

```html
<gr-input placeholder="Disabled" size="small" disabled></gr-input>
<br />
<gr-input placeholder="Disabled" size="medium" disabled></gr-input>
<br />
<gr-input placeholder="Disabled" size="large" disabled></gr-input>
```

### Sizes

Use the `size` attribute to change an input's size.

<div class="example-block">
  <gr-input placeholder="Small" size="small"></gr-input>
  <br>
  <gr-input placeholder="Medium" size="medium"></gr-input>
  <br>
  <gr-input placeholder="Large" size="large"></gr-input>
</div>

```html
<gr-input placeholder="Small" size="small"></gr-input>
<br />
<gr-input placeholder="Medium" size="medium"></gr-input>
<br />
<gr-input placeholder="Large" size="large"></gr-input>
```

### Icons

Use the `start` and `end` slots to add icons.

<div class="example-block">
  <gr-input placeholder="Small" size="small">
    <ion-icon name="search-outline" slot="start"></ion-icon>
    <ion-icon name="chatbubble-outline" slot="end"></ion-icon>
  </gr-input>
  <br />
  <gr-input placeholder="Medium" size="medium">
    <ion-icon name="search-outline" slot="start"></ion-icon>
    <ion-icon name="chatbubble-outline" slot="end"></ion-icon>
  </gr-input>
  <br />
  <gr-input placeholder="Large" size="large">
    <ion-icon name="search-outline" slot="start"></ion-icon>
    <ion-icon name="chatbubble-outline" slot="end"></ion-icon>
  </gr-input>
</div>

```html
<gr-input placeholder="Medium" size="small">
  <ion-icon name="search-outline" slot="start"></ion-icon>
  <ion-icon name="chatbubble-outline" slot="end"></ion-icon>
</gr-input>
<br />
<gr-input placeholder="Medium" size="medium">
  <ion-icon name="search-outline" slot="start"></ion-icon>
  <ion-icon name="chatbubble-outline" slot="end"></ion-icon>
</gr-input>
<br />
<gr-input placeholder="Medium" size="large">
  <ion-icon name="search-outline" slot="start"></ion-icon>
  <ion-icon name="chatbubble-outline" slot="end"></ion-icon>
</gr-input>
```

### Invalid

The input can be marked invalid using the `invalid` attribute.

<div class="example-block">
  <gr-input placeholder="Invalid" invalid></gr-input>
</div>

```html
<gr-input placeholder="Invalid" invalid></gr-input>
```

### Labels

Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.

<div class="example-block">
  <gr-input label="Name"></gr-input>
</div>

```html
<gr-input label="Name"></gr-input>
```

### Required or optional

Inputs can be marked as optional or required, depending on the situation. For required inputs, there are two styling options: a “(required)” label or an asterisk with the `required-indicator` attribute. If you use an asterisk, be sure to include hint text to explain what the asterisk means. Optional inputs are either denoted with text added to the end of the label — “(optional)” — or have no indication at all.

The asterisk used in this component is an icon that has specific spacing from the label text — not part of the label text itself.

<div class="example-block">
  <gr-input label="Email address (required)" value="soof@paqt.com"></gr-input>
  <br>
  <gr-input label="Email address (optional)" value="soof@paqt.com"></gr-input>
  <br>
  <gr-input label="Email address" value="soof@paqt.com" required-indicator></gr-input>
</div>

```html
<gr-input label="Email address (required)" value="soof@paqt.com"></gr-input>
<br />
<gr-input label="Email address (optional)" value="soof@paqt.com"></gr-input>
<br />
<gr-input label="Email address" value="soof@paqt.com" required-indicator></gr-input>
```

### Help Text

Add descriptive help text to an input with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

<div class="example-block">
  <gr-input label="Nickname" help-text="What would you like people to call you?"></gr-input>
</div>

```html
<gr-input label="Nickname" help-text="What would you like people to call you?"></gr-input>
```

### Invalid Text

Add descriptive invalid text to an input with the `invalid-text` attribute. For invalid texts that contain HTML, use the `invalid-text` slot instead.

When you add the `invalid` attribute, the invalid text will be shown. When an input already includes help text, the help text is replaced with invalid text.

<div class="example-block">
  <gr-input label="Nickname" help-text="What would you like people to call you?" invalid-text="Enter what you would like people to call you." invalid></gr-input>
</div>

```html
<gr-input
  label="Nickname"
  help-text="What would you like people to call you?"
  invalid-text="Enter what you would like people to call you."
  invalid
></gr-input>
```

### Pattern

Add a pattern to specify a regular expression that the input value should match.

<div class="example-block">
  <gr-input label="Country code" help-text="Fill in a valid three letter country code" pattern="[A-Za-z]{3}"></gr-input>
</div>

```html
<gr-input
  label="Country code"
  help-text="Fill in a valid three letter country code"
  pattern="[A-Za-z]{3}"
></gr-input>
```

## Usage guidelines

### Include a label

Every input should have a label. A field without a label is ambiguous and not accessible.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-input label="Name" value="Soof"></gr-input>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-input value="Soof"></gr-input>

</div>

### Review label-less designs

In rare cases where context is sufficient and a label could be absent, make sure to have the design reviewed and approved by an accessibility expert. These should still include an `aria-label` in HTML.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-input aria-label="Search" pill>
  <ion-icon name="search-outline" slot="start">
</gr-input>

</div>

### Follow capitalization rules

Field labels and placeholder text should be in sentence case.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-input label="Email address" value="soof@paqt.com"></gr-input>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-input label="Email Address" value="soof@paqt.com"></gr-input>

</div>

### Mark the minority of fields in a form as optional or required

In a single form, mark only the required fields or only the optional fields, depending on whichever is less frequent in the entire form. If most of the fields are optional, only the required fields should be give an asterisk or have labels appended with “(required)”. If most of the fields are required, only the optional fields should be appended with “(optional)”. An asterisk should never be used to note that a field is optional. If you use an asterisk, be sure to include hint text to explain what the asterisk means.

Try to only ask for information that’s required.

For large forms involving sensitive data like checkout processes and long account creation forms, it's better to mark both required fields & optional fields explicitly (required fields with an asterisk, and label appended with “(optional)” for optional fields).

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-input label="Name" value="Sofie van der Grift"></gr-input>

<gr-input label="Nickname" value="Soof"></gr-input>

<gr-input label="Email address (optional)" value="soof@paqt.com"></gr-input>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-input label="Name (required)" value="Sofie van der Grift"></gr-input>

<gr-input label="Nickname (required)" value="Soof"></gr-input>

<gr-input label="Email address" value="soof@paqt.com"></gr-input>

</div>

### Use help text to show hints, formatting, and requirements

The description in the help text is flexible and encompasses a range of guidance. Sometimes this guidance is about what to input, and sometime it’s about how to input. This includes information such as:

- An overall description of the input field
- Hints for what kind of information needs to be input
- Specific formatting examples or requirements

The help text’s message should not simply restate the same information in the label in order to prompt someone to interact with it. Don’t add help text if it isn’t actually relevant or meaningful to a user in order to try to maintain layout continuity with other inputs that require help text.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-input label="Email address" help-text="soof@paqt.com"></gr-input>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-input label="Email address" help-text="Enter your email address."></gr-input>

</div>

### Use help text instead of placeholder text

Putting instructions for how to complete an input, requirements, or any other essential information into placeholder text is not accessible, and should be avoided if possible. Once a value is entered, placeholder text is no longer viewable; if someone is using an automatic form filler, they will never get the information in the placeholder text.

Instead of placeholder text, use the help text description to convey requirements or to show any formatting examples that would help user comprehension. If there's placeholder text and help text at the same time, it becomes redundant and distracting, and especially if they're communicating the same thing.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-input label="Email address" help-text="soof@paqt.com"></gr-input>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-input label="Email address" placeholder="soof@paqt.com"></gr-input>

</div>

### Validation

We recommend validating the users data before form submission. Use visual cues to guide the user as to where the problem lies within the form. This will help to easily identify the elements that need to be corrected.

The validation should appear when the user has clicked away from the input (not before), or otherwise when the user submits the form. Once the user corrects the errors within the text field, the validation should disappear once the data is rendered as valid.

For Vue, we recommend [Vuelidate](https://vuelidate-next.netlify.app/) to implement this behavior. [See a working example (CodeSandbox)](https://codesandbox.io/s/graphiteds-vue3-vuelidate-example-x6moc?file=/src/App.vue).

Of course, you should still validate server-side (if applicable).

### Always write invalid text when invalid

Don't just mark an input invalid and expect the user to understand why it's invalid. Furthermore, the invalid text displays an icon which is needed for accessibility, and gives more attention to the invalid field.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-input label="Credit card number" invalid-text="Enter your credit card number." required-indicator invalid></gr-input>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-input label="Credit card number" required-indicator invalid></gr-input>

</div>

### Switch help text with invalid text

The help text area also displays an error message. When a text field already includes help text and it's marked invalid, the help text is replaced with invalid text. Once it's no longer invalid, the help text description reappears below the field.

Since one gets replaced by the other, the language of the help text and invalid text need to work together to convey the same messaging. Help text explains the requirement or adds supplementary context for how to successfully complete the input. Invalid text tells a user how to make it valid by re-stating the input requirements or describing the necessary interaction. Make sure that the help text and the invalid text include the same essential information so that it isn’t lost if one replaces the other (e.g., password requirements).

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-input label="Password" type="password" help-text="Passwords must be at least 8 characters." required-indicator></gr-input>

&nbsp;

<gr-input label="Password" type="password" value="example" help-text="Passwords must be at least 8 characters." invalid-text="Create a password  with at least 8 characters." required-indicator invalid></gr-input>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-input label="Password" type="password" help-text="Passwords must be at least 8 characters." required-indicator></gr-input>

&nbsp;

<gr-input label="Password" type="password" value="example" help-text="Passwords must be at least 8 characters." invalid-text="Passwords must be at least 8 characters." required-indicator invalid></gr-input>

</div>

### Write invalid text that shows a solution

Write error messaging in a human-centered way by guiding a user and showing them a solution — don’t simply state what’s wrong and then leave them guessing as to how to resolve it. Ambiguous error messages can be frustrating and even shame-inducing for users. Also, keep in mind that something that a system may deem an error may not actually be perceived as an error to a user.

Invalid text should be written in 1-2 short, complete sentences and in a clear and straightforward way. End sentences with a period, and never with an exclamation point. For text fields, the nature of the error is often related to something that needs to be fixed for in-line validation, so a helpful tone is most appropriate. For example, if someone were to miss filling out a required field that asks for their email address, write the invalid text like you’re offering a hint or a tip to help guide them to understand what needs to go in the missing field: “Enter your email address.”

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-input label="Credit card number" invalid-text="Enter your credit card number." required-indicator invalid></gr-input>

&nbsp;

<gr-input label="Password" type="password" value="example" invalid-text="Create a password with at least 8 characters." required-indicator invalid></gr-input>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-input label="Credit card number" invalid-text="Invalid field" required-indicator invalid></gr-input>

&nbsp;

<gr-input label="Password" type="password" value="example" invalid-text="Password requirements not met!" required-indicator invalid></gr-input>

</div>

## Properties

| Property            | Attribute            | Description                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Default     |
| ------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `autocapitalize`    | `autocapitalize`     | Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Available options: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`. | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `'off'`     |
| `autocomplete`      | `autocomplete`       | Indicates whether the value of the control can be automatically completed by the browser.                                                                                                                 | `"email" \| "tel" \| "url" \| "off" \| "on" \| "name" \| "honorific-prefix" \| "given-name" \| "additional-name" \| "family-name" \| "honorific-suffix" \| "nickname" \| "username" \| "new-password" \| "current-password" \| "one-time-code" \| "organization-title" \| "organization" \| "street-address" \| "address-line1" \| "address-line2" \| "address-line3" \| "address-level4" \| "address-level3" \| "address-level2" \| "address-level1" \| "country" \| "country-name" \| "postal-code" \| "cc-name" \| "cc-given-name" \| "cc-additional-name" \| "cc-family-name" \| "cc-number" \| "cc-exp" \| "cc-exp-month" \| "cc-exp-year" \| "cc-csc" \| "cc-type" \| "transaction-currency" \| "transaction-amount" \| "language" \| "bday" \| "bday-day" \| "bday-month" \| "bday-year" \| "sex" \| "tel-country-code" \| "tel-national" \| "tel-area-code" \| "tel-local" \| "tel-extension" \| "impp" \| "photo"` | `'off'`     |
| `autocorrect`       | `autocorrect`        | Whether auto correction should be enabled when the user is entering/editing the text value.                                                                                                               | `"off" \| "on"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `'off'`     |
| `autofocus`         | `autofocus`          | This Boolean attribute lets you specify that a form control should have input focus when the page loads.                                                                                                  | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`     |
| `clearable`         | `clearable`          | Set to true to add a clear button when the input is populated.                                                                                                                                            | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`     |
| `debounce`          | `debounce`           | Set the amount of time, in milliseconds, to wait to trigger the `gr-change` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`.                                   | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `0`         |
| `disabled`          | `disabled`           | Set to true to disable the input control.                                                                                                                                                                 | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`     |
| `enterkeyhint`      | `enterkeyhint`       | A hint to the browser for which enter key to display. Possible values: `"enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`.                                                     | `"done" \| "enter" \| "go" \| "next" \| "previous" \| "search" \| "send"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `undefined` |
| `helpText`          | `help-text`          | The input's help text. Alternatively, you can use the help-text slot.                                                                                                                                     | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `''`        |
| `inputmode`         | `inputmode`          | The input's inputmode attribute.                                                                                                                                                                          | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined` |
| `invalid`           | `invalid`            | Set to true to indicate this field is invalid. Will display the invalid text instead of the help text                                                                                                     | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`     |
| `invalidText`       | `invalid-text`       | The input's invalid text. Alternatively, you can use the invalid-text slot.                                                                                                                               | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `''`        |
| `label`             | `label`              | The inputs's label. Alternatively, you can use the label slot.                                                                                                                                            | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `''`        |
| `max`               | `max`                | The maximum value, which must not be less than its minimum (min attribute) value.                                                                                                                         | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `maxlength`         | `maxlength`          | Specifies how many characters are allowed.                                                                                                                                                                | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `min`               | `min`                | The minimum value, which must not be greater than its maximum (max attribute) value.                                                                                                                      | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `name`              | `name`               | The input's name.                                                                                                                                                                                         | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `''`        |
| `pattern`           | `pattern`            | The input's pattern.                                                                                                                                                                                      | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `''`        |
| `pill`              | `pill`               | Set to true to draw a pill-style input with rounded edges.                                                                                                                                                | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`     |
| `placeholder`       | `placeholder`        | The input's placeholder text.                                                                                                                                                                             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `''`        |
| `readonly`          | `readonly`           | If `true`, the user cannot modify the value.                                                                                                                                                              | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`     |
| `requiredIndicator` | `required-indicator` | Set to true to display a required indicator, adds an asterisk to label                                                                                                                                    | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`     |
| `size`              | `size`               | The input's size.                                                                                                                                                                                         | `"large" \| "medium" \| "small"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `'medium'`  |
| `spellcheck`        | `spellcheck`         | If `true`, the element will have its spelling and grammar checked.                                                                                                                                        | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`     |
| `step`              | `step`               | Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.                                              | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined` |
| `togglePassword`    | `toggle-password`    | Set to true to add a password toggle button for password inputs.                                                                                                                                          | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | `false`     |
| `type`              | `type`               | The type of control to display. The default type is text.                                                                                                                                                 | `"date" \| "datetime-local" \| "email" \| "month" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "time" \| "url" \| "week"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `'text'`    |
| `value`             | `value`              | The input's value attribute.                                                                                                                                                                              | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `''`        |

## Events

| Event       | Description                                 | Type                |
| ----------- | ------------------------------------------- | ------------------- |
| `gr-blur`   | Emitted when the control loses focus.       | `CustomEvent<void>` |
| `gr-change` | Emitted when the control's value changes.   | `CustomEvent<void>` |
| `gr-clear`  | Emitted when the clear button is activated. | `CustomEvent<void>` |
| `gr-focus`  | Emitted when the control gains focus.       | `CustomEvent<void>` |
| `gr-input`  | Emitted when the control receives input.    | `CustomEvent<void>` |

## Methods

### `removeFocus() => Promise<void>`

Removes focus from the input.

#### Returns

Type: `Promise<void>`

### `select() => Promise<void>`

Selects all the text in the input.

#### Returns

Type: `Promise<void>`

### `setFocus(options?: FocusOptions) => Promise<void>`

Sets focus on the input.

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
| `"end"`          | Used to append an icon or similar element to the input.                                           |
| `"help-text"`    | Help text that describes how to use the input.                                                    |
| `"invalid-text"` | Invalid text tells a user how to fix the error. Alternatively, you can use the invalid-text prop. |
| `"label"`        | The input's label. Alternatively, you can use the label prop.                                     |
| `"start"`        | Used to prepend an icon or similar element to the input.                                          |

## CSS custom properties

| Name                               | Description                                                                               |
| ---------------------------------- | ----------------------------------------------------------------------------------------- |
| `--background-color`               | Background color of the input                                                             |
| `--background-color-focus`         | Background color of the input on focus                                                    |
| `--background-color-hover`         | Background color of the input on hover                                                    |
| `--background-color-invalid`       | Background color of the input when invalid                                                |
| `--background-color-invalid-hover` | Background color of the input when invalid on focus                                       |
| `--border-color`                   | Border color of the input                                                                 |
| `--border-color-focus`             | Border color of the input on focus                                                        |
| `--border-color-hover`             | Border color of the input on hover                                                        |
| `--border-color-invalid`           | Border color of the input when invalid                                                    |
| `--border-color-invalid-hover`     | Border color of the input when invalid on focus                                           |
| `--border-radius`                  | Border radius of the input                                                                |
| `--color`                          | Text color of the input                                                                   |
| `--focus-ring`                     | The focus ring style to use when the input receives focus, a `box-shadow` property.       |
| `--font-size`                      | Font size of the input                                                                    |
| `--font-weight`                    | Font weight of the input                                                                  |
| `--icon-color`                     | Color of the icons (start & end slots, clearable & password toggle)                       |
| `--icon-color-hover`               | Color of the icons (clearable & password toggle) on hover                                 |
| `--min-height`                     | Minimum height of the input                                                               |
| `--padding-end`                    | Right padding of the input (will be left padding when we support right-to-left direction) |
| `--padding-start`                  | Left padding of the input (will be right padding when we support right-to-left direction) |
| `--placeholder-color`              | Text color of the placeholder                                                             |
| `--text-transform`                 | Text transform of the input                                                               |
