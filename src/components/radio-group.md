---
title: Radio Group - Graphite Design System
---

# Radio Group

`<gr-radio-group> | GrRadioGroup`

[[toc]]

<p class="intro">Radio groups are used to group multiple radios so they function as a single control.</p>

Have a default option selected whenever possible.

<div class="example-block">
  <gr-radio-group label="Select an option" value="1">
    <gr-radio value="1">Item 1</gr-radio>
    <gr-radio value="2">Item 2</gr-radio>
    <gr-radio value="3">Item 3</gr-radio>
  </gr-radio-group>
</div>

```html
<gr-radio-group label="Select an option" value="1">
  <gr-radio value="1">Item 1</gr-radio>
  <gr-radio value="2">Item 2</gr-radio>
  <gr-radio value="3">Item 3</gr-radio>
</gr-radio-group>
```

## Options

### Horizontal

You can render the radio items with a horizontal layout using the `horizontal` attribute.

<div class="example-block">
  <gr-radio-group value="3" horizontal>
    <gr-radio value="1">Item 1</gr-radio>
    <gr-radio value="2">Item 2</gr-radio>
    <gr-radio value="3">Item 3</gr-radio>
  </gr-radio-group>
</div>

```html
<gr-radio-group value="3" horizontal>
  <gr-radio value="1">Item 1</gr-radio>
  <gr-radio value="2">Item 2</gr-radio>
  <gr-radio value="3">Item 3</gr-radio>
</gr-radio-group>
```

### Invalid

The radio group can be marked invalid using the `invalid` attribute.

<div class="example-block">
  <gr-radio-group invalid>
    <gr-radio value="1">Item 1</gr-radio>
    <gr-radio value="2">Item 2</gr-radio>
    <gr-radio value="3">Item 3</gr-radio>
  </gr-radio-group>
</div>

```html
<gr-radio-group invalid>
  <gr-radio value="1">Item 1</gr-radio>
  <gr-radio value="2">Item 2</gr-radio>
  <gr-radio value="3">Item 3</gr-radio>
</gr-radio-group>
```

### Labels

Use the `label` attribute to give the radio group an accessible label. For labels that contain HTML, use the `label` slot instead.

<div class="example-block">
  <gr-radio-group label="Select an option">
    <gr-radio value="1">Item 1</gr-radio>
    <gr-radio value="2">Item 2</gr-radio>
    <gr-radio value="3">Item 3</gr-radio>
  </gr-radio-group>
</div>

```html
<gr-radio-group label="Select an option">
  <gr-radio value="1">Item 1</gr-radio>
  <gr-radio value="2">Item 2</gr-radio>
  <gr-radio value="3">Item 3</gr-radio>
</gr-radio-group>
```

### Required or optional

Radio groups can be marked as optional or required, depending on the situation. For required radio groups, there are two styling options: a “(required)” label or an asterisk with the `required-indicator` attribute. If you use an asterisk, be sure to include hint text to explain what the asterisk means. Optional radio groups are either denoted with text added to the end of the label — “(optional)” — or have no indication at all.

The asterisk used in this component is an icon that has specific spacing from the label text — not part of the label text itself.

<div class="example-block">
  <gr-radio-group label="Landing page (required)">
    <gr-radio value="homepage">Homepage</gr-radio>
    <gr-radio value="gallery">Gallery</gr-radio>
    <gr-radio value="contact-us">Contact us</gr-radio>
  </gr-radio-group>
  <br>
  <gr-radio-group label="Landing page (optional)">
    <gr-radio value="homepage">Homepage</gr-radio>
    <gr-radio value="gallery">Gallery</gr-radio>
    <gr-radio value="contact-us">Contact us</gr-radio>
  </gr-radio-group>
  <br>
  <gr-radio-group label="Landing page" required-indicator>
    <gr-radio value="homepage">Homepage</gr-radio>
    <gr-radio value="gallery">Gallery</gr-radio>
    <gr-radio value="contact-us">Contact us</gr-radio>
  </gr-radio-group>
</div>

```html
<gr-radio-group label="Landing page (required)">
  <gr-radio value="homepage">Homepage</gr-radio>
  <gr-radio value="gallery">Gallery</gr-radio>
  <gr-radio value="contact-us">Contact us</gr-radio>
</gr-radio-group>
<br />
<gr-radio-group label="Landing page (optional)">
  <gr-radio value="homepage">Homepage</gr-radio>
  <gr-radio value="gallery">Gallery</gr-radio>
  <gr-radio value="contact-us">Contact us</gr-radio>
</gr-radio-group>
<br />
<gr-radio-group label="Landing page" required-indicator>
  <gr-radio value="homepage">Homepage</gr-radio>
  <gr-radio value="gallery">Gallery</gr-radio>
  <gr-radio value="contact-us">Contact us</gr-radio>
</gr-radio-group>
```

### Invalid Text

Add descriptive invalid text to a radio group with the `invalid-text` attribute. For invalid texts that contain HTML, use the `invalid-text` slot instead.

When you add the `invalid` attribute, the invalid text will be shown.

<div class="example-block">
  <gr-radio-group label="Select an option" invalid-text="Select an option." invalid>
    <gr-radio value="1">Item 1</gr-radio>
    <gr-radio value="2">Item 2</gr-radio>
    <gr-radio value="3">Item 3</gr-radio>
  </gr-radio-group>
</div>

```html
<gr-radio-group label="Select an option" invalid-text="Select an option." invalid>
  <gr-radio value="1">Item 1</gr-radio>
  <gr-radio value="2">Item 2</gr-radio>
  <gr-radio value="3">Item 3</gr-radio>
</gr-radio-group>
```

## Usage guidelines

### Label radio groups

Radio groups should always have a label that clearly describes what the list of options represents. This is important for accessibility, since a screen reader will read the label before each option. Make sure to include a label, and don't assume that the options are self-explanatory without one. Write the label in sentence case.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-radio-group label="Landing page" value="homepage">
  <gr-radio value="homepage">Homepage</gr-radio>
  <gr-radio value="gallery">Gallery</gr-radio>
  <gr-radio value="contact-us">Contact us</gr-radio>
</gr-radio-group>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-radio-group value="tomorrow">
  <gr-radio value="tomorrow">Tomorrow</gr-radio>
  <gr-radio value="in-3-days">In 3 days</gr-radio>
  <gr-radio value="next-week">Next week</gr-radio>
</gr-radio-group>

</div>

### Mark the minority of fields in a form as optional or required

In a single form, mark only the required fields or only the optional fields, depending on whichever is less frequent in the entire form. If most of the fields are optional, only the required fields should be give an asterisk or have labels appended with “(required)”. If most of the fields are required, only the optional fields should be appended with “(optional)”. An asterisk should never be used to note that a field is optional. If you use an asterisk, be sure to include hint text to explain what the asterisk means.

Try to only ask for information that’s required.

For large forms involving sensitive data like checkout processes and long account creation forms, it's better to mark both required fields & optional fields explicitly (required fields with an asterisk, and label appended with “(optional)” for optional fields).

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-input label="Name" value="Sofie van der Grift"></gr-input>
<br>
<gr-radio-group label="Landing page" value="homepage">
<gr-radio value="homepage">Homepage</gr-radio>
<gr-radio value="gallery">Gallery</gr-radio>
<gr-radio value="contact-us">Contact us</gr-radio>
</gr-radio-group>
<br>
<gr-input label="Email address (optional)" value="soof@paqt.com"></gr-input>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-input label="Name (required)" value="Sofie van der Grift"></gr-input>
<br>
<gr-radio-group label="Landing page (required)" value="homepage">
<gr-radio value="homepage">Homepage</gr-radio>
<gr-radio value="gallery">Gallery</gr-radio>
<gr-radio value="contact-us">Contact us</gr-radio>
</gr-radio-group>
<br>
<gr-input label="Email address" value="soof@paqt.com"></gr-input>

</div>

### Validation

We recommend validating the users data before form submission. Use visual cues to guide the user as to where the problem lies within the form. This will help to easily identify the elements that need to be corrected.

The validation should appear when the user has clicked away from the radio group (not before), or otherwise when the user submits the form. Once the user corrects the errors within the radio group, the validation should disappear once the data is rendered as valid.

For Vue, we recommend [Vuelidate](https://vuelidate-next.netlify.app/) to implement this behavior. [See a working example (CodeSandbox)](https://codesandbox.io/s/graphiteds-vue3-vuelidate-example-x6moc?file=/src/App.vue).

Of course, you should still validate server-side (if applicable).

### Always provide invalid text when invalid

Don't just mark a radio group invalid and expect the user to understand why it's invalid. Furthermore, the invalid text displays an icon which is needed for accessibility, and gives more attention to the invalid field.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-radio-group label="Landing page" invalid-text="Select the landing page you want." required-indicator invalid>
  <gr-radio value="homepage">Homepage</gr-radio>
  <gr-radio value="gallery">Gallery</gr-radio>
  <gr-radio value="contact-us">Contact us</gr-radio>
</gr-radio-group>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-radio-group label="Landing page" required-indicator invalid>
  <gr-radio value="homepage">Homepage</gr-radio>
  <gr-radio value="gallery">Gallery</gr-radio>
  <gr-radio value="contact-us">Contact us</gr-radio>
</gr-radio-group>

</div>

### Write invalid text that shows a solution

Write error messaging in a human-centered way by guiding a user and showing them a solution — don’t simply state what’s wrong and then leave them guessing as to how to resolve it. Ambiguous error messages can be frustrating and even shame-inducing for users. Also, keep in mind that something that a system may deem an error may not actually be perceived as an error to a user.

Invalid text should be written in 1-2 short, complete sentences and in a clear and straightforward way. End sentences with a period, and never with an exclamation point.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-radio-group label="Landing page" invalid-text="Select the landing page you want." required-indicator invalid>
  <gr-radio value="homepage">Homepage</gr-radio>
  <gr-radio value="gallery">Gallery</gr-radio>
  <gr-radio value="contact-us">Contact us</gr-radio>
</gr-radio-group>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-radio-group label="Landing page" invalid-text="Invalid field" required-indicator invalid>
  <gr-radio value="homepage">Homepage</gr-radio>
  <gr-radio value="gallery">Gallery</gr-radio>
  <gr-radio value="contact-us">Contact us</gr-radio>
</gr-radio-group>

</div>

## Properties

| Property              | Attribute               | Description                                                                                          | Type      | Default        |
| --------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------- | --------- | -------------- |
| `allowEmptySelection` | `allow-empty-selection` | If `true`, the radios can be deselected.                                                             | `boolean` | `false`        |
| `horizontal`          | `horizontal`            | Render the radios horizontal instead of vertical                                                     | `boolean` | `false`        |
| `invalid`             | `invalid`               | Set to true to indicate this field is invalid.                                                       | `boolean` | `false`        |
| `invalidText`         | `invalid-text`          | The radio group's invalid text. Alternatively, you can use the invalid-text slot.                    | `string`  | `''`           |
| `label`               | `label`                 | The radio group label. Required for proper accessibility. Alternatively, you can use the label slot. | `string`  | `''`           |
| `name`                | `name`                  | The name of the control, which is submitted with the form data.                                      | `string`  | `this.inputId` |
| `requiredIndicator`   | `required-indicator`    | Set to true to display a required indicator, adds an asterisk to label                               | `boolean` | `false`        |
| `value`               | `value`                 | the value of the radio group.                                                                        | `any`     | `undefined`    |

## Events

| Event       | Description                         | Type                                       |
| ----------- | ----------------------------------- | ------------------------------------------ |
| `gr-change` | Emitted when the value has changed. | `CustomEvent<RadioGroupChangeEventDetail>` |

## Slots

| Slot             | Description                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| `(default)`      | The default slot where radio controls are placed.                                                    |
| `"invalid-text"` | Invalid text tells a user how to fix the error. Alternatively, you can use the invalid-text prop.    |
| `"label"`        | The radio group label. Required for proper accessibility. Alternatively, you can use the label prop. |

## CSS custom properties

| Name                                 | Description                                                    |
| ------------------------------------ | -------------------------------------------------------------- |
| `--margin-between-radios`            | Margin between the gr-radio children                           |
| `--margin-between-radios-horizontal` | Margin between the gr-radio children when layout is horizontal |
