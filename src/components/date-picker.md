---
title: Date Picker - Graphite Design System
---

# Date Picker

`<gr-date-picker> | GrDatePicker`

[[toc]]

<p class="intro">Date pickers let users pick a single date or a date range using a visual calendar.</p>

The date picker allows you to set a minimum and a maximum allowed date. These settings can be combined or used alone, depending on the need. Please note that the date values must be passed in IS0-8601 format: `YYYY-MM-DD`, and the end user needs to enter it in this format: `DD-MM-YYYY` (because almost all PAQT.com products require this).

The following languages are currently supported: `en`, `de`, `fr`, and `nl`. Let us know if you need support for different languages. The language will be automatically based on the document language specified in the html tag (`<html lang="en">`) or otherwise the browser language of the user.

This is a wrapper around the accessible [Duet Date Picker](https://github.com/duetds/date-picker).

<div class="example-block">
  <gr-date-picker label="Date"></gr-date-picker>
</div>

```html
<gr-date-picker label="Date"></gr-date-picker>
```

## Options

### Predefined value

Use the `value` attribute to set a predifined value. Please note that this must be passed in IS0-8601 format: `YYYY-MM-DD`.

<div class="example-block">
  <gr-date-picker label="Choose a date" value="2020-06-16"></gr-date-picker>
</div>

```html
<gr-date-picker label="Choose a date" value="2020-06-16"></gr-date-picker>
```

### Minimum date

Use the `min` attribute to set the minimum date allowed to be picked. Must be in ISO-8601 format: `YYYY-MM-DD`. This setting can be used alone or together with the max attribute.

<div class="example-block">
  <gr-date-picker label="Choose a date" value="2020-06-16" min="2020-06-10"></gr-date-picker>
</div>

```html
<gr-date-picker label="Choose a date" value="2020-06-16" min="2020-06-10"></gr-date-picker>
```

### Maximum date

Use the `max` attribute to set the maximum date allowed to be picked. Must be in ISO-8601 format: `YYYY-MM-DD`. This setting can be used alone or together with the min attribute.

<div class="example-block">
  <gr-date-picker label="Choose a date" value="2020-06-16" max="2020-07-18"></gr-date-picker>
</div>

```html
<gr-date-picker label="Choose a date" value="2020-06-16" max="2020-07-18"></gr-date-picker>
```

### Date range

Below is an example how you can implement a date range using the date picker:

<div class="example-block">

<gr-date-picker label="Start date" id="start-date"></gr-date-picker>

<gr-date-picker label="End date" id="end-date"></gr-date-picker>

<script>
  // Select the above date picker components
  var startPicker = document.querySelector("#start-date");
  var endPicker = document.querySelector("#end-date");
  var startDate, endDate;

  // Handle date selection
  function handleDateSelect() {
    if (startDate && endDate) {
      console.log("date range selected", startDate, endDate);
    }
  }

  // When the start date picker is changed…
  startPicker.addEventListener("gr-change", function (e) {
    startDate = e.detail.valueAsDate;
    endPicker.min = e.detail.value;

    handleDateSelect();
  });

  // When the end date date picker is changed…
  endPicker.addEventListener("gr-change", function (e) {
    endDate = e.detail.valueAsDate;
    startPicker.max = e.detail.value;

    handleDateSelect();
  });
</script>

</div>

```html
<gr-date-picker label="Start date" id="start-date"></gr-date-picker>

<gr-date-picker label="End date" id="end-date"></gr-date-picker>

<script>
  // Select the above date picker components
  var startPicker = document.querySelector('#start-date');
  var endPicker = document.querySelector('#end-date');
  var startDate, endDate;

  // Handle date selection
  function handleDateSelect() {
    if (startDate && endDate) {
      console.log('date range selected', startDate, endDate);
    }
  }

  // When the start date picker is changed…
  startPicker.addEventListener('gr-change', function (e) {
    startDate = e.detail.valueAsDate;
    endPicker.min = e.detail.value;

    handleDateSelect();
  });

  // When the end date date picker is changed…
  endPicker.addEventListener('gr-change', function (e) {
    endDate = e.detail.valueAsDate;
    startPicker.max = e.detail.value;

    handleDateSelect();
  });
</script>
```

### Custom localization

The localization translations of the date picker can be customized using the `localization` attribute. This value is specified in a object.

Below is an example how you can implement custom localization translations:

```html
  <gr-date-picker :localization="customLocalizationTranslations"></gr-date-picker>
```

```javascript
const customLocalizationTranslations = {
  buttonLabel: 'Choose date',
  placeholder: '',
  helpText: 'Custom Format: dd-mm-yyyy',
  selectedDateMessage: 'Selected date is',
  prevMonthLabel: 'Previous month',
  nextMonthLabel: 'Next month',
  monthSelectLabel: 'Month',
  yearSelectLabel: 'Year',
  closeLabel: 'Close window',
  calendarHeading: 'Choose a date',
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: ['Jan2', 'Feb2', 'Mar2', 'Apr2', 'May2', 'Jun2', 'Jul2', 'Aug2', 'Sep2', 'Oct2', 'Nov2', 'Dec2'],
  locale: 'en-GB',
}

```

### Opening the calendar modal progammatically

Use the `show()` method to show the calendar modal, moving focus to the calendar inside.

You could use this to automatically open the calender when the field receives focus, but this is not recommended due to accessibility concerns.

<div class="example-block">

<gr-date-picker label="Choose a date" id="date-picker-show"></gr-date-picker>

<gr-button id="show-date-picker-button">Show date picker</button>

<script>
  const button = document.querySelector("#show-date-picker-button")

  button.addEventListener("click", function() {
    document.querySelector("#date-picker-show").show()
  });
</script>

</div>

```html
<gr-date-picker label="Choose a date" id="date-picker-show"></gr-date-picker>

<gr-button id="show-date-picker-button">Show date picker</button>

<script>
  const button = document.querySelector("#show-date-picker-button")

  button.addEventListener("click", function() {
    document.querySelector("#date-picker-show").show()
  });
</script>
```

### Control which days are selectable

Use the `isDateDisabled()` method to disable the selection of specific days. Below is an example of a date picker that is disabling weekends.

Be aware, this only disables selection of dates in the calendar modal. You must still handle the case where a user manually enters a disallowed date into the input.

<div class="example-block">

<gr-date-picker label="Choose a date" id="date-picker-disable-weekend"></gr-date-picker>

<script>
  function isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  const pickerDisableWeekend = document.querySelector("#date-picker-disable-weekend");
  pickerDisableWeekend.isDateDisabled = isWeekend;
</script>

</div>

```html
<gr-date-picker label="Choose a date" id="date-picker-show"></gr-date-picker>

<script>
  function isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  const pickerDisableWeekend = document.querySelector('#date-picker-disable-weekend');
  pickerDisableWeekend.isDateDisabled = isWeekend;
</script>
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

The placeholder text, also commonly known as “ghost text,” is temporary and disappears once a user enters text.

Putting instructions for how to complete an input, requirements, or any other essential information into placeholder text is not accessible. Once a value is entered, this text is no longer viewable; if someone is using an automatic form filler, they will never get the information in the placeholder text. [Help text](#help-text) is the preferred way to communicate this information.

<div class="example-block">
  <gr-date-picker placeholder="Enter a date"></gr-date-picker>
</div>

```html
<gr-date-picker placeholder="Enter a date"></gr-date-picker>
```

### Disabled

Use the `disabled` attribute to disable a date picker.

<div class="example-block">
  <gr-date-picker placeholder="Disabled" disabled></gr-date-picker>
</div>

```html
<gr-date-picker placeholder="Disabled" disabled></gr-date-picker>
```

### Invalid

The date picker can be marked invalid using the `invalid` attribute.

<div class="example-block">
  <gr-date-picker placeholder="Invalid" invalid></gr-date-picker>
</div>

```html
<gr-date-picker placeholder="Invalid" invalid></gr-date-picker>
```

### Labels

Use the `label` attribute to give the date picker an accessible label. For labels that contain HTML, use the `label` slot instead.

<div class="example-block">
  <gr-date-picker label="Date"></gr-date-picker>
</div>

```html
<gr-date-picker label="Date"></gr-date-picker>
```

### Required or optional

Date pickers can be marked as optional or required, depending on the situation. For required date pickers, there are two styling options: a “(required)” label or an asterisk with the `required-indicator` attribute. If you use an asterisk, be sure to include hint text to explain what the asterisk means. Optional date pickers are either denoted with text added to the end of the label — “(optional)” — or have no indication at all.

The asterisk used in this component is an icon that has specific spacing from the label text — not part of the label text itself.

<div class="example-block">
  <gr-date-picker label="Date (required)" value="2022-03-03"></gr-date-picker>
  <br>
  <gr-date-picker label="Date (optional)" value="2022-03-03"></gr-date-picker>
  <br>
  <gr-date-picker label="Date" value="2022-03-03" required-indicator></gr-date-picker>
</div>

```html
<gr-date-picker label="Date (required)" value="2022-03-03"></gr-date-picker>
<br />
<gr-date-picker label="Date (optional)" value="2022-03-03"></gr-date-picker>
<br />
<gr-date-picker label="Date" value="2022-03-03" required-indicator></gr-date-picker>
```

### Help Text

Change the descriptive help text of a date picker with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

Please note that the date picker already has a default help text to denote the required format (dd-mm-yyyy). Be sure to include it, if you decide to override it.

<div class="example-block">
  <gr-date-picker label="Preferred shipping date" help-text="Format: dd-mm-yyyy. We will try to deliver your package before this date."></gr-date-picker>
</div>

```html
<gr-date-picker
  label="Preferred shipping date"
  help-text="Format: dd-mm-yyyy. We will try to deliver your package before this date."
></gr-date-picker>
```

### Invalid Text

Add descriptive invalid text to a date-picker with the `invalid-text` attribute. For invalid texts that contain HTML, use the `invalid-text` slot instead.

When you add the `invalid` attribute, the invalid text will be shown. When an input already includes help text, the help text is replaced with invalid text.

<div class="example-block">
  <gr-date-picker
    label="Preferred shipping date"
    help-text="Format: dd-mm-yyyy. We will try to deliver your package before this date."
    invalid-text="Please enter your preferred shipping date in the format: dd-mm-yyyy."
    invalid
  ></gr-date-picker>
</div>

```html
<gr-date-picker
  label="Preferred shipping date"
  help-text="Format: dd-mm-yyyy. We will try to deliver your package before this date."
  invalid-text="Please enter your preferred shipping date in the format: dd-mm-yyyy."
  invalid
></gr-date-picker>
```

## Usage guidelines

### Use for scheduling, not for memorable dates such as a date of birth

Don't use a date picker to enter a date that is many years in the future or the past.

Use an [input](/components/input) when the date is known by the user, such as a date of birth or credit card expiration, or for approximate dates.

Use a date picker when the user needs to know a date’s relation to other days such as the day of the week it falls on or its proximity to today. They are optimal for scheduling tasks.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-input label="Date of birth" value="03-03-1977" help-text="Format: dd-mm-yyyy"></gr-input>

<gr-date-picker label="Start date" value="2022-03-03"></gr-date-picker>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-date-picker label="Date of birth" value="1977-03-03"></gr-date-picker>

<gr-input label="Start date" value="03-03-2022" help-text="Format: dd-mm-yyyy"></gr-input>

</div>

### Include a label

Every date picker should have a label. A field without a label is ambiguous and not accessible.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-date-picker label="Date" value="2022-03-03"></gr-date-picker>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-date-picker value="2022-03-03"></gr-date-picker>

</div>

### Follow capitalization rules

Field labels and placeholder text should be in sentence case.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-date-picker label="Preferred shipping date"></gr-date-picker>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-date-picker label="Preferred Shipping Date"></gr-date-picker>

</div>

### Mark the minority of fields in a form as optional or required

In a single form, mark only the required fields or only the optional fields, depending on whichever is less frequent in the entire form. If most of the fields are optional, only the required fields should be give an asterisk or have labels appended with “(required)”. If most of the fields are required, only the optional fields should be appended with “(optional)”. An asterisk should never be used to note that a field is optional. If you use an asterisk, be sure to include hint text to explain what the asterisk means.

Try to only ask for information that’s required.

For large forms involving sensitive data like checkout processes and long account creation forms, it's better to mark both required fields & optional fields explicitly (required fields with an asterisk, and label appended with “(optional)” for optional fields).

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-input label="Name" value="Sofie van der Grift"></gr-input>

<gr-input label="Email address" value="soof@paqt.com"></gr-input>

<gr-date-picker label="Preferred shipping date (optional)"></gr-date-picker>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-input label="Name (required)" value="Sofie van der Grift"></gr-input>

<gr-input label="Email address (required)" value="soof@paqt.com"></gr-input>

<gr-date-picker label="Preferred shipping date"></gr-date-picker>

</div>

### Use help text to show hints, formatting, and requirements

The description in the help text is flexible and encompasses a range of guidance. Sometimes this guidance is about what to input, and sometime it’s about how to input. This includes information such as:

- An overall description of the input field
- Hints for what kind of information needs to be input
- Specific formatting examples or requirements

The help text’s message should not simply restate the same information in the label in order to prompt someone to interact with it. Don’t add help text if it isn’t actually relevant or meaningful to a user in order to try to maintain layout continuity with other inputs that require help text.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-date-picker label="End date" help-text="Format: dd-mm-yyyy"></gr-date-picker>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-date-picker label="End date" help-text="Enter the end date."></gr-date-picker>

</div>

### Use help text instead of placeholder text

Putting instructions for how to complete an input, requirements, or any other essential information into placeholder text is not accessible, and should be avoided if possible. Once a value is entered, placeholder text is no longer viewable; if someone is using an automatic form filler, they will never get the information in the placeholder text.

Instead of placeholder text, use the help text description to convey requirements or to show any formatting examples that would help user comprehension. If there's placeholder text and help text at the same time, it becomes redundant and distracting, and especially if they're communicating the same thing.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-date-picker label="Preferred shipping date" help-text="Format: dd-mm-yyyy. We will try to deliver your package before this date."></gr-date-picker>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-date-picker label="Preferred shipping date" help-text="We will try to deliver your package before this date." placeholder="dd-mm-yyyy"></gr-date-picker>

</div>

### Validation

We recommend validating the users data before form submission. Use visual cues to guide the user as to where the problem lies within the form. This will help to easily identify the elements that need to be corrected.

The validation should appear when the user has clicked away from the date picker (not before), or otherwise when the user submits the form. Once the user corrects the errors within the date picker, the validation should disappear once the data is rendered as valid.

For Vue, we recommend [Vuelidate](https://vuelidate-next.netlify.app/) to implement this behavior. [See a working example (CodeSandbox)](https://codesandbox.io/s/graphiteds-vue3-vuelidate-example-x6moc?file=/src/App.vue).

Of course, you should still validate server-side (if applicable).

Unfortunately, due to how the underlying Duet Date Picker works, the value is not changed when entering an invalid date (and therefore the gr-change event is not fired). So, most of your validation won't fire. Be sure to communicate the required format in the invalid-text when the field is required.

### Always write invalid text when invalid

Don't just mark an input invalid and expect the user to understand why it's invalid. Furthermore, the invalid text displays an icon which is needed for accessibility, and gives more attention to the invalid field.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-date-picker
    label="Preferred shipping date"
    help-text="Format: dd-mm-yyyy. We will try to deliver your package before this date."
    invalid-text="Please enter your preferred shipping date in the format: dd-mm-yyyy."
    required-indicator
    invalid>
</gr-date-picker>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-date-picker
    label="Preferred shipping date"
    help-text="Format: dd-mm-yyyy. We will try to deliver your package before this date."
    required-indicator
    invalid>
</gr-date-picker>

</div>

### Switch help text with invalid text

The help text area also displays an error message. When a text field already includes help text and it's marked invalid, the help text is replaced with invalid text. Once it's no longer invalid, the help text description reappears below the field.

Since one gets replaced by the other, the language of the help text and invalid text need to work together to convey the same messaging. Help text explains the requirement or adds supplementary context for how to successfully complete the input. Invalid text tells a user how to make it valid by re-stating the input requirements or describing the necessary interaction. Make sure that the help text and the invalid text include the same essential information so that it isn’t lost if one replaces the other (e.g., password requirements).

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-date-picker
    label="Preferred shipping date"
    help-text="Format: dd-mm-yyyy. We will try to deliver your package before this date."
    required-indicator>
</gr-date-picker>

&nbsp;

<gr-date-picker
    label="Preferred shipping date"
    help-text="Format: dd-mm-yyyy. We will try to deliver your package before this date."
    invalid-text="Please enter your preferred shipping date in the format: dd-mm-yyyy."
    required-indicator
    invalid>
</gr-date-picker>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-date-picker
    label="Preferred shipping date"
    help-text="Format: dd-mm-yyyy. We will try to deliver your package before this date."
    required-indicator>
</gr-date-picker>

&nbsp;

<gr-date-picker
    label="Preferred shipping date"
    help-text="Format: dd-mm-yyyy. We will try to deliver your package before this date."
    invalid-text="Format: dd-mm-yyyy. We will try to deliver your package before this date."
    required-indicator
    invalid>
</gr-date-picker>

</div>

### Write invalid text that shows a solution

Write error messaging in a human-centered way by guiding a user and showing them a solution — don’t simply state what’s wrong and then leave them guessing as to how to resolve it. Ambiguous error messages can be frustrating and even shame-inducing for users. Also, keep in mind that something that a system may deem an error may not actually be perceived as an error to a user.

Invalid text should be written in 1-2 short, complete sentences and in a clear and straightforward way. End sentences with a period, and never with an exclamation point. For text fields, the nature of the error is often related to something that needs to be fixed for in-line validation, so a helpful tone is most appropriate. For example, if someone were to miss filling out a required field that asks for their email address, write the invalid text like you’re offering a hint or a tip to help guide them to understand what needs to go in the missing field: “Enter your email address.”

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-date-picker
    label="Preferred shipping date"
    help-text="Format: dd-mm-yyyy. We will try to deliver your package before this date."
    invalid-text="Please enter your preferred shipping date in the format: dd-mm-yyyy."
    required-indicator
    invalid>
</gr-date-picker>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-date-picker
    label="Preferred shipping date"
    help-text="Format: dd-mm-yyyy. We will try to deliver your package before this date."
    invalid-text="Invalid field!"
    required-indicator
    invalid>
</gr-date-picker>

</div>

## Properties

| Property            | Attribute            | Description                                                                                                                                                                                                                    | Type                                                                                                                                                      | Default             |
| ------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `direction`         | `direction`          | Forces the opening direction of the calendar modal to be always left or right. This setting can be useful when the input is smaller than the opening date picker would be as by default the picker always opens towards right. | `"left" \| "right"`                                                                                                                                       | `'right'`           |
| `disabled`          | `disabled`           | Makes the date picker input component disabled. This prevents users from being able to interact with the input, and conveys its inactive state to assistive technologies.                                                      | `boolean`                                                                                                                                                 | `false`             |
| `firstDayOfWeek`    | `first-day-of-week`  | Which day is considered first day of the week? `0` for Sunday, `1` for Monday, etc. Default is Monday.                                                                                                                         | `DaysOfWeek.Friday \| DaysOfWeek.Monday \| DaysOfWeek.Saturday \| DaysOfWeek.Sunday \| DaysOfWeek.Thursday \| DaysOfWeek.Tuesday \| DaysOfWeek.Wednesday` | `DaysOfWeek.Monday` |
| `helpText`          | `help-text`          | The date picker's help text. Alternatively, you can use the help-text slot.                                                                                                                                                    | `string`                                                                                                                                                  | `''`                |
| `invalid`           | `invalid`            | Set to true to indicate this field is invalid. Will display the invalid text instead of the help text                                                                                                                          | `boolean`                                                                                                                                                 | `false`             |
| `invalidText`       | `invalid-text`       | The date picker's invalid text. Alternatively, you can use the invalid-text slot.                                                                                                                                              | `string`                                                                                                                                                  | `''`                |
| `isDateDisabled`    | --                   | Controls which days are disabled and therefore disallowed. For example, this can be used to disallow selection of weekends.                                                                                                    | `(date: Date) => boolean`                                                                                                                                 | `() => false`       |
| `label`             | `label`              | The date picker's label. Alternatively, you can use the label slot.                                                                                                                                                            | `string`                                                                                                                                                  | `''`                |
| `localization` | `localization` | The date picker's custom localization. | `object` | Users browser language or default 'EN' when not supported |
| `max`               | `max`                | Maximum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD. This setting can be used alone or together with the min property.                                                                                   | `string`                                                                                                                                                  | `''`                |
| `min`               | `min`                | Minimum date allowed to be picked. Must be in IS0-8601 format: YYYY-MM-DD. This setting can be used alone or together with the max property.                                                                                   | `string`                                                                                                                                                  | `''`                |
| `name`              | `name`               | Name of the date picker input.                                                                                                                                                                                                 | `string`                                                                                                                                                  | `''`                |
| `placeholder`       | `placeholder`        | The date picker input's placeholder text.                                                                                                                                                                                      | `string`                                                                                                                                                  | `''`                |
| `requiredIndicator` | `required-indicator` | Set to true to display a required indicator, adds an asterisk to label                                                                                                                                                         | `boolean`                                                                                                                                                 | `false`             |
| `value`             | `value`              | Date value. Must be in IS0-8601 format: YYYY-MM-DD.                                                                                                                                                                            | `string`                                                                                                                                                  | `''`                |

## Events

| Event       | Description                                     | Type                                                                              |
| ----------- | ----------------------------------------------- | --------------------------------------------------------------------------------- |
| `gr-blur`   | Emitted when the date picker input loses focus. | `CustomEvent<void>`                                                               |
| `gr-change` | Emitted when a date is selected.                | `CustomEvent<{ component: "gr-date-picker"; valueAsDate: Date; value: string; }>` |
| `gr-close`  | Emitted when the panel closes.                  | `CustomEvent<void>`                                                               |
| `gr-focus`  | Emitted when the date picker input gains focus. | `CustomEvent<void>`                                                               |
| `gr-open`   | Emitted when the panel opens.                   | `CustomEvent<void>`                                                               |

## Methods

### `hide(moveFocusToButton?: boolean) => Promise<void>`

Hide the calendar modal. Set `moveFocusToButton` to false to prevent focus
returning to the date picker's button. Default is true.

#### Returns

Type: `Promise<void>`

### `setFocus() => Promise<void>`

Sets focus on the date picker's input. Use this method instead of the global `focus()`.

#### Returns

Type: `Promise<void>`

### `show() => Promise<void>`

Show the calendar modal, moving focus to the calendar inside.

#### Returns

Type: `Promise<void>`

## CSS Custom Properties

| Name                                 | Description                                                                        |
| ------------------------------------ | ---------------------------------------------------------------------------------- |
| `--backdrop-color`                   | Background color of the backdrop (used on small viewports)                         |
| `--button-background-color`          | Background color of the calendar button                                            |
| `--button-color`                     | Text color of the calendar button                                                  |
| `--focus-border-color`               | The border color to use when controls receives focus.                              |
| `--focus-ring`                       | The focus ring style to use when controls receives focus, a `box-shadow` property. |
| `--input-background-color`           | Background color of the input                                                      |
| `--input-background-color-invalid`   | Background color of the input when invalid                                         |
| `--input-border-color`               | Border color of the input                                                          |
| `--input-border-color-hover`         | Border color of the input on hover                                                 |
| `--input-border-color-invalid`       | Border color of the input when invalid                                             |
| `--input-border-color-invalid-hover` | Border color of the input when invalid on hover                                    |
| `--input-color`                      | Text color of the input                                                            |
| `--min-height`                       | Minimum height of the input                                                        |
| `--panel-background-color`           | Background color of the panel                                                      |
| `--panel-border-color`               | Border color of the panel                                                          |
| `--panel-border-radius`              | Border radius of the panel                                                         |
| `--panel-box-shadow`                 | Box shadow of the panel                                                            |
| `--placeholder-color`                | Text color of the placeholder                                                      |
| `--selected-day-background-color`    | Background color of the selected day indicator                                     |
| `--selected-day-color`               | Text color of the selected day indicator                                           |
