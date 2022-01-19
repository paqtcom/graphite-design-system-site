---
title: Select - Graphite Design System
---

# Select

`<gr-select> | GrSelect`

[[toc]]

<p class="intro">Selects allow you to choose one or more items from a dropdown menu.</p>

You can use [menu items](/components/menu-item), [menu dividers](/components/menu-divider), and [menu labels](/components/menu-label) to compose a menu.

<div class="example-block">
  <gr-select label="Select one">
    <gr-menu-item value="option-1">Option 1</gr-menu-item>
    <gr-menu-item value="option-2">Option 2</gr-menu-item>
    <gr-menu-item value="option-3">Option 3</gr-menu-item>
    <gr-menu-divider></gr-menu-divider>
    <gr-menu-item value="option-4">Option 4</gr-menu-item>
    <gr-menu-item value="option-5">Option 5</gr-menu-item>
    <gr-menu-item value="option-6">Option 6</gr-menu-item>
  </gr-select>
</div>

```html
<gr-select label="Select one">
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
  <gr-menu-divider></gr-menu-divider>
  <gr-menu-item value="option-4">Option 4</gr-menu-item>
  <gr-menu-item value="option-5">Option 5</gr-menu-item>
  <gr-menu-item value="option-6">Option 6</gr-menu-item>
</gr-select>
```

## Options

### Placeholders

Use the `placeholder` attribute to add a placeholder.

The placeholder text, also commonly known as “ghost text,” prompts a user to select an option from the picker menu. It disappears once a user selects an option.

<div class="example-block">
  <gr-select placeholder="Select one...">
    <gr-menu-item value="option-1">Option 1</gr-menu-item>
    <gr-menu-item value="option-2">Option 2</gr-menu-item>
    <gr-menu-item value="option-3">Option 3</gr-menu-item>
  </gr-select>
</div>

```html
<gr-select placeholder="Select one...">
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>
```

### Clearable

Use the `clearable` attribute to make the control clearable.

<div class="example-block">
  <gr-select placeholder="Clearable" clearable>
    <gr-menu-item value="option-1">Option 1</gr-menu-item>
    <gr-menu-item value="option-2">Option 2</gr-menu-item>
    <gr-menu-item value="option-3">Option 3</gr-menu-item>
  </gr-select>
</div>

```html
<gr-select placeholder="Clearable" clearable>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>
```

### Pill

Use the `pill` attribute to give selects rounded edges.

<div class="example-block">
  <gr-select pill>
    <gr-menu-item value="option-1">Option 1</gr-menu-item>
    <gr-menu-item value="option-2">Option 2</gr-menu-item>
    <gr-menu-item value="option-3">Option 3</gr-menu-item>
  </gr-select>
</div>

```html
<gr-select pill>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>
```

### Disabled

Use the `disabled` attribute to disable a select.

<div class="example-block">
  <gr-select placeholder="Disabled" disabled>
    <gr-menu-item value="option-1">Option 1</gr-menu-item>
    <gr-menu-item value="option-2">Option 2</gr-menu-item>
    <gr-menu-item value="option-3">Option 3</gr-menu-item>
  </gr-select>
</div>

```html
<gr-select placeholder="Disabled" disabled>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>
```

### Multiple

To allow multiple options to be selected, use the `multiple` attribute. It's a good practice to use `clearable` when this option is enabled. When using this option, `value` will be an array instead of a string.

<div class="example-block">
  <gr-select placeholder="Select a few" multiple clearable>
    <gr-menu-item value="option-1">Option 1</gr-menu-item>
    <gr-menu-item value="option-2">Option 2</gr-menu-item>
    <gr-menu-item value="option-3">Option 3</gr-menu-item>
    <gr-menu-divider></gr-menu-divider>
    <gr-menu-item value="option-4">Option 4</gr-menu-item>
    <gr-menu-item value="option-5">Option 5</gr-menu-item>
    <gr-menu-item value="option-6">Option 6</gr-menu-item>
  </gr-select>
</div>

```html
<gr-select placeholder="Select a few" multiple clearable>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
  <gr-menu-divider></gr-menu-divider>
  <gr-menu-item value="option-4">Option 4</gr-menu-item>
  <gr-menu-item value="option-5">Option 5</gr-menu-item>
  <gr-menu-item value="option-6">Option 6</gr-menu-item>
</gr-select>
```

### Grouping Options

Options can be grouped visually using [menu labels](/components/menu-label) and [menu dividers](/components/menu-divider).

<div class="example-block">
  <gr-select placeholder="Select one">
    <gr-menu-label>Group 1</gr-menu-label>
    <gr-menu-item value="option-1">Option 1</gr-menu-item>
    <gr-menu-item value="option-2">Option 2</gr-menu-item>
    <gr-menu-item value="option-3">Option 3</gr-menu-item>
    <gr-menu-divider></gr-menu-divider>
    <gr-menu-label>Group 2</gr-menu-label>
    <gr-menu-item value="option-4">Option 4</gr-menu-item>
    <gr-menu-item value="option-5">Option 5</gr-menu-item>
    <gr-menu-item value="option-6">Option 6</gr-menu-item>
  </gr-select>
</div>

```html
<gr-select placeholder="Select one">
  <gr-menu-label>Group 1</gr-menu-label>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
  <gr-menu-divider></gr-menu-divider>
  <gr-menu-label>Group 2</gr-menu-label>
  <gr-menu-item value="option-4">Option 4</gr-menu-item>
  <gr-menu-item value="option-5">Option 5</gr-menu-item>
  <gr-menu-item value="option-6">Option 6</gr-menu-item>
</gr-select>
```

### Sizes

Use the `size` attribute to change a select's size.

<div class="example-block">
  <gr-select placeholder="Small" size="small" multiple>
    <gr-menu-item value="option-1">Option 1</gr-menu-item>
    <gr-menu-item value="option-2">Option 2</gr-menu-item>
    <gr-menu-item value="option-3">Option 3</gr-menu-item>
  </gr-select>

  <br>

  <gr-select placeholder="Medium" size="medium" multiple>
    <gr-menu-item value="option-1">Option 1</gr-menu-item>
    <gr-menu-item value="option-2">Option 2</gr-menu-item>
    <gr-menu-item value="option-3">Option 3</gr-menu-item>
  </gr-select>

  <br>

  <gr-select placeholder="Large" size="large" multiple>
    <gr-menu-item value="option-1">Option 1</gr-menu-item>
    <gr-menu-item value="option-2">Option 2</gr-menu-item>
    <gr-menu-item value="option-3">Option 3</gr-menu-item>
  </gr-select>
</div>

```html
<gr-select placeholder="Small" size="small" multiple>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>

<br />

<gr-select placeholder="Medium" size="medium" multiple>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>

<br />

<gr-select placeholder="Large" size="large" multiple>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>
```

### Selecting Options Programmatically

The `value` property is bound to the current selection. As the selection changes, so will the value. To programmatically manage the selection, update the `value` property.

<div class="example-block selecting-example">

<gr-select placeholder="">
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>

<br>

<gr-button data-option="option-1">Set 1</gr-button>
<gr-button data-option="option-2">Set 2</gr-button>
<gr-button data-option="option-3">Set 3</gr-button>

</div>

<script>
  const container = document.querySelector('.selecting-example');
  const select = container.querySelector('gr-select');

  [...container.querySelectorAll('gr-button')].map(button => {
    button.addEventListener('click', () => {
      select.value = button.dataset.option; 
    });
  });
</script>

```html
<div class="selecting-example">
  <gr-select placeholder="">
    <gr-menu-item value="option-1">Option 1</gr-menu-item>
    <gr-menu-item value="option-2">Option 2</gr-menu-item>
    <gr-menu-item value="option-3">Option 3</gr-menu-item>
  </gr-select>

  <br />

  <gr-button data-option="option-1">Set 1</gr-button>
  <gr-button data-option="option-2">Set 2</gr-button>
  <gr-button data-option="option-3">Set 3</gr-button>
</div>

<script>
  const container = document.querySelector('.selecting-example');
  const select = container.querySelector('gr-select');

  [...container.querySelectorAll('gr-button')].map((button) => {
    button.addEventListener('click', () => {
      select.value = button.dataset.option;
    });
  });
</script>
```

### Invalid

The select can be marked invalid using the `invalid` attribute.

<div class="example-block">
  <gr-select invalid>
    <gr-menu-item value="option-1">Option 1</gr-menu-item>
    <gr-menu-item value="option-2">Option 2</gr-menu-item>
    <gr-menu-item value="option-3">Option 3</gr-menu-item>
  </gr-select>
</div>

```html
<gr-select invalid>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>
```

### Labels

Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.

<div class="example-block">
  <gr-select label="Select one">
    <gr-menu-item value="option-1">Option 1</gr-menu-item>
    <gr-menu-item value="option-2">Option 2</gr-menu-item>
    <gr-menu-item value="option-3">Option 3</gr-menu-item>
  </gr-select>
</div>

```html
<gr-select label="Select one">
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>
```

### Required or optional

Selects can be marked as optional or required, depending on the situation. For required selects, there are two styling options: a “(required)” label or an asterisk with the `required-indicator` attribute. If you use an asterisk, be sure to include hint text to explain what the asterisk means. Optional selects are either denoted with text added to the end of the label — “(optional)” — or have no indication at all.

The asterisk used in this component is an icon that has specific spacing from the label text — not part of the label text itself.

<div class="example-block">
  <gr-select label="Country (optional)" placeholder="Select a country...">
    <gr-menu-item value="nl">Netherlands</gr-menu-item>
    <gr-menu-item value="us">United States</gr-menu-item>
  </gr-select>
  <br>
  <gr-select label="Country (required)" placeholder="Select a country...">
    <gr-menu-item value="nl">Netherlands</gr-menu-item>
    <gr-menu-item value="us">United States</gr-menu-item>
  </gr-select>
  <br>
  <gr-select label="Country" placeholder="Select a country..." required-indicator>
    <gr-menu-item value="nl">Netherlands</gr-menu-item>
    <gr-menu-item value="us">United States</gr-menu-item>
  </gr-select>
</div>

```html
<gr-select label="Country (optional)" placeholder="Select a country...">
  <gr-menu-item value="nl">Netherlands</gr-menu-item>
  <gr-menu-item value="us">United States</gr-menu-item>
</gr-select>
<br />
<gr-select label="Country (required)" placeholder="Select a country...">
  <gr-menu-item value="nl">Netherlands</gr-menu-item>
  <gr-menu-item value="us">United States</gr-menu-item>
</gr-select>
<br />
<gr-select label="Country" placeholder="Select a country..." required-indicator>
  <gr-menu-item value="nl">Netherlands</gr-menu-item>
  <gr-menu-item value="us">United States</gr-menu-item>
</gr-select>
```

### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

<div class="example-block">
  <gr-select label="Experience" help-text="Please tell us your skill level.">
    <gr-menu-item value="option-1">Novice</gr-menu-item>
    <gr-menu-item value="option-2">Intermediate</gr-menu-item>
    <gr-menu-item value="option-3">Advanced</gr-menu-item>
  </gr-select>
</div>

```html
<gr-select label="Experience" help-text="Please tell us your skill level.">
  <gr-menu-item value="option-1">Novice</gr-menu-item>
  <gr-menu-item value="option-2">Intermediate</gr-menu-item>
  <gr-menu-item value="option-3">Advanced</gr-menu-item>
</gr-select>
```

### Invalid Text

Add descriptive invalid text to a select with the `invalid-text` attribute. For invalid texts that contain HTML, use the `invalid-text` slot instead.

When you add the `invalid` attribute, the invalid text will be shown. When a select already includes help text, the help text is replaced with invalid text.

<div class="example-block">
  <gr-select label="Experience" help-text="Please tell us your skill level." invalid-text="Select your skill level." invalid>
    <gr-menu-item value="option-1">Novice</gr-menu-item>
    <gr-menu-item value="option-2">Intermediate</gr-menu-item>
    <gr-menu-item value="option-3">Advanced</gr-menu-item>
  </gr-select>
</div>

```html
<gr-select
  label="Experience"
  help-text="Please tell us your skill level."
  invalid-text="Select your skill level."
  invalid
>
  <gr-menu-item value="option-1">Novice</gr-menu-item>
  <gr-menu-item value="option-2">Intermediate</gr-menu-item>
  <gr-menu-item value="option-3">Advanced</gr-menu-item>
</gr-select>
```

## Usage guidelines

### Include a label

Every select should have a label. A field without a label is ambiguous and not accessible.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-select label="Country of birth" value="nl">
  <gr-menu-item value="nl">Netherlands</gr-menu-item>
  <gr-menu-item value="us">United States</gr-menu-item>
</gr-select>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-select value="nl">
  <gr-menu-item value="nl">Netherlands</gr-menu-item>
  <gr-menu-item value="us">United States</gr-menu-item>
</gr-select>

</div>

### Keep menu items concise

Keep menu items short and concise so they fit in the width of the select. If you don't have enough space, consider revising the text or use alternative UI patterns that will give your content more space.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-select label="Size" placeholder="Select an option..." style="max-width: 200px">
  <gr-menu-item value="s">Small</gr-menu-item>
  <gr-menu-item value="m">Medium</gr-menu-item>
  <gr-menu-item value="l">Large</gr-menu-item>
</gr-select>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-select label="Size" placeholder="Select an option..." style="max-width: 200px">
  <gr-menu-item value="s">Small (works best for mobile phones)</gr-menu-item>
  <gr-menu-item value="m">Medium (all-purpose)</gr-menu-item>
  <gr-menu-item value="l">Large (select this one for printing)</gr-menu-item>
</gr-select>

</div>

### Choose an appropriate width

When possible, the select width should be wide enough so that any chosen menu items can be displayed in full.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-select label="Country" value="us" style="max-width: 250px">
  <gr-menu-item value="nl">Netherlands</gr-menu-item>
  <gr-menu-item value="us">United States of America</gr-menu-item>
</gr-select>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-select label="Country" value="us" style="max-width: 200px">
  <gr-menu-item value="nl">Netherlands</gr-menu-item>
  <gr-menu-item value="us">United States of America</gr-menu-item>
</gr-select>

</div>

### Follow capitalization rules

Field labels, placeholder text, and menu items should be in sentence case.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-select label="Country of birth" placeholder="Select a country...">
  <gr-menu-item value="nl">Netherlands</gr-menu-item>
  <gr-menu-item value="us">United States</gr-menu-item>
</gr-select>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-select label="Country of Birth" placeholder="Select a Country">
  <gr-menu-item value="nl">Netherlands</gr-menu-item>
  <gr-menu-item value="us">United States</gr-menu-item>
</gr-select>

</div>

### Mark the minority of fields in a form as optional or required

In a single form, mark only the required fields or only the optional fields, depending on whichever is less frequent in the entire form. If most of the fields are optional, only the required fields should be give an asterisk or have labels appended with “(required)”. If most of the fields are required, only the optional fields should be appended with “(optional)”. An asterisk should never be used to note that a field is optional. If you use an asterisk, be sure to include hint text to explain what the asterisk means.

Try to only ask for information that’s required.

For large forms involving sensitive data like checkout processes and long account creation forms, it's better to mark both required fields & optional fields explicitly (required fields with an asterisk, and label appended with “(optional)” for optional fields).

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-select label="Assignee" placeholder="Select a user...">
  <gr-menu-item value="example">Example</gr-menu-item>
</gr-select>
&nbsp;
<gr-select label="Reporter" placeholder="Select a user...">
  <gr-menu-item value="example">Example</gr-menu-item>
</gr-select>
&nbsp;
<gr-select label="Country (optional)" placeholder="Select an option...">
  <gr-menu-item value="nl">Netherlands</gr-menu-item>
  <gr-menu-item value="us">United States</gr-menu-item>
</gr-select>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-select label="Assignee (required)" placeholder="Select a user...">
  <gr-menu-item value="example">Example</gr-menu-item>
</gr-select>
&nbsp;
<gr-select label="Reporter (required)" placeholder="Select a user...">
  <gr-menu-item value="example">Example</gr-menu-item>
</gr-select>
&nbsp;
<gr-select label="Country" placeholder="Select an option...">
  <gr-menu-item value="nl">Netherlands</gr-menu-item>
  <gr-menu-item value="us">United States</gr-menu-item>
</gr-select>

</div>

### Use help text to show context

The description in the help text can communicate what to select or how to select an option. This includes information such as:

- An overall description of the select options
- Hints for what kind of information to choose
- More context for why a user needs to make a selection

The help text’s message should not simply restate the same information in the label in order to prompt someone to interact with a select. Don’t add help text if it isn’t actually relevant or meaningful to a user in order to try to maintain layout continuity with other inputs that require help text.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-select label="Preferred contact method" placeholder="Select contact method..." help-text="Select the best way to contact you in case there's an issue with your account.">
  <gr-menu-item value="email">Email</gr-menu-item>
  <gr-menu-item value="phone">Phone</gr-menu-item>
</gr-select>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-select label="Preferred contact method" placeholder="Select contact method..." help-text="Choose your preferred contact method.">
  <gr-menu-item value="email">Email</gr-menu-item>
  <gr-menu-item value="phone">Phone</gr-menu-item>
</gr-select>

</div>

### Validation

We recommend validating the users data before form submission. Use visual cues to guide the user as to where the problem lies within the form. This will help to easily identify the elements that need to be corrected.

The validation should appear when the user has clicked away from the select (not before), or otherwise when the user submits the form. Once the user corrects the errors within the select, the validation should disappear once the data is rendered as valid.

For Vue, we recommend [Vuelidate](https://vuelidate-next.netlify.app/) to implement this behavior. [See a working example (CodeSandbox)](https://codesandbox.io/s/graphiteds-vue3-vuelidate-example-x6moc?file=/src/App.vue).

Of course, you should still validate server-side (if applicable).

### Always write invalid text when invalid

Don't just mark a select invalid and expect the user to understand why it's invalid. Furthermore, the invalid text displays an icon which is needed for accessibility, and gives more attention to the invalid field.

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-select label="Preferred contact method" placeholder="Select contact method..." invalid-text="Select a contact method." required-indicator invalid>
  <gr-menu-item value="email">Email</gr-menu-item>
  <gr-menu-item value="phone">Phone</gr-menu-item>
</gr-select>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-select label="Preferred contact method" placeholder="Select contact method..." required-indicator invalid>
  <gr-menu-item value="email">Email</gr-menu-item>
  <gr-menu-item value="phone">Phone</gr-menu-item>
</gr-select>

</div>

### Switch help text with invalid text

The help text area also displays an error message. When a select already includes help text and it's marked invalid, the help text is replaced with invalid text. Once it's no longer invalid, the help text description reappears below the field.

Since one gets replaced by the other, the language of the help text and invalid text need to work together to convey the same messaging. Help text explains the requirement or adds supplementary context for how to successfully complete the interaction. Invalid text tells a user how to fix the error by re-stating the selection requirements or describing the necessary interaction. Make sure that the help text and the invalid text include the same essential information so that it isn’t lost if one replaces the other (e.g., minimum requirements).

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-select label="Preferred contact method" placeholder="Select contact method..." help-text="Select the best way to contact you in case there's an issue with your account." required-indicator>
  <gr-menu-item value="email">Email</gr-menu-item>
  <gr-menu-item value="phone">Phone</gr-menu-item>
</gr-select>
&nbsp;
<gr-select label="Preferred contact method" placeholder="Select contact method..." help-text="Select the best way to contact you in case there's an issue with your account." invalid-text="Select a contact method." required-indicator invalid>
  <gr-menu-item value="email">Email</gr-menu-item>
  <gr-menu-item value="phone">Phone</gr-menu-item>
</gr-select>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-select label="Preferred contact method" placeholder="Select contact method..." help-text="Select a contact method." required-indicator>
  <gr-menu-item value="email">Email</gr-menu-item>
  <gr-menu-item value="phone">Phone</gr-menu-item>
</gr-select>
&nbsp;
<gr-select label="Preferred contact method" placeholder="Select contact method..." help-text="Select a contact method." invalid-text="Select a contact method." required-indicator invalid>
  <gr-menu-item value="email">Email</gr-menu-item>
  <gr-menu-item value="phone">Phone</gr-menu-item>
</gr-select>

</div>

### Write invalid text that shows a solution

Write error messaging in a human-centered way by guiding a user and showing them a solution — don’t simply state what’s wrong and then leave them guessing as to how to resolve it. Ambiguous error messages can be frustrating and even shame-inducing for users. Also, keep in mind that something that a system may deem an error may not actually be perceived as an error to a user.

Invalid text should be written in 1-2 short, complete sentences and in a clear and straightforward way. End sentences with a period, and never with an exclamation point. For selects, the nature of the error is often related to something that needs to be fixed for in-line validation, so a helpful tone is most appropriate. For example, if someone were to miss selecting an option to note as their preferred contact method, write the error text like you’re offering a hint or a tip to help guide them to understand what needs to be selected: “Select a contact method.”

<div class="usage-guidelines usage-guidelines-do">

<ion-icon name="checkmark-circle" class="icon" aria-label="do"></ion-icon>

<gr-select label="Preferred contact method" placeholder="Select contact method..." invalid-text="Select a contact method." required-indicator invalid>
  <gr-menu-item value="email">Email</gr-menu-item>
  <gr-menu-item value="phone">Phone</gr-menu-item>
</gr-select>

</div>

<div class="usage-guidelines usage-guidelines-dont">

<ion-icon name="close-circle" class="icon" aria-label="do not"></ion-icon>

<gr-select label="Preferred contact method" placeholder="Select contact method..."  invalid-text="Invalid field" required-indicator invalid>
  <gr-menu-item value="email">Email</gr-menu-item>
  <gr-menu-item value="phone">Phone</gr-menu-item>
</gr-select>

</div>

## Properties

| Property            | Attribute            | Description                                                                                                                                                                                    | Type                             | Default    |
| ------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| `clearable`         | `clearable`          | Set to true to add a clear button when the select is populated.                                                                                                                                | `boolean`                        | `false`    |
| `disabled`          | `disabled`           | Set to true to disable the select control.                                                                                                                                                     | `boolean`                        | `false`    |
| `helpText`          | `help-text`          | The select's help text. Alternatively, you can use the help-text slot.                                                                                                                         | `string`                         | `''`       |
| `hoist`             | `hoist`              | Enable this option to prevent the panel from being clipped when the component is placed inside a container with `overflow: auto\|scroll`.                                                      | `boolean`                        | `false`    |
| `invalid`           | `invalid`            | Set to true to indicate this field is invalid. Will display the invalid text instead of the help text                                                                                          | `boolean`                        | `false`    |
| `invalidText`       | `invalid-text`       | The select's invalid text. Alternatively, you can use the invalid-text slot.                                                                                                                   | `string`                         | `''`       |
| `label`             | `label`              | The select's label. Alternatively, you can use the label slot.                                                                                                                                 | `string`                         | `''`       |
| `maxTagsVisible`    | `max-tags-visible`   | The maximum number of tags to show when `multiple` is true. After the maximum, "+n" will be shown to indicate the number of additional items that are selected. Set to -1 to remove the limit. | `number`                         | `3`        |
| `multiple`          | `multiple`           | Set to true to enable multiselect.                                                                                                                                                             | `boolean`                        | `false`    |
| `name`              | `name`               | The select's name.                                                                                                                                                                             | `string`                         | `''`       |
| `pill`              | `pill`               | Set to true to draw a pill-style select with rounded edges.                                                                                                                                    | `boolean`                        | `false`    |
| `placeholder`       | `placeholder`        | The select's placeholder text.                                                                                                                                                                 | `string`                         | `''`       |
| `requiredIndicator` | `required-indicator` | Set to true to display a required indicator, adds an asterisk to label                                                                                                                         | `boolean`                        | `false`    |
| `size`              | `size`               | The select's size.                                                                                                                                                                             | `"large" \| "medium" \| "small"` | `'medium'` |
| `value`             | `value`              | The value of the control. This will be a string or an array depending on `multiple`.                                                                                                           | `string \| string[]`             | `''`       |

## Events

| Event       | Description                               | Type                |
| ----------- | ----------------------------------------- | ------------------- |
| `gr-blur`   | Emitted when the control loses focus.     | `CustomEvent<void>` |
| `gr-change` | Emitted when the control's value changes. | `CustomEvent<void>` |
| `gr-focus`  | Emitted when the control gains focus.     | `CustomEvent<void>` |

## Slots

| Slot             | Description                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| `(default)`      | The select's options in the form of menu items.                                                   |
| `"help-text"`    | Help text that describes how to use the select. Alternatively, you can use the help-text prop.    |
| `"invalid-text"` | Invalid text tells a user how to fix the error. Alternatively, you can use the invalid-text prop. |
| `"label"`        | The select's label. Alternatively, you can use the label prop.                                    |

## CSS custom properties

| Name                               | Description                                                                                  |
| ---------------------------------- | -------------------------------------------------------------------------------------------- |
| `--background-color`               | Background color of the select                                                               |
| `--background-color-focus`         | Background color of the select on focus                                                      |
| `--background-color-hover`         | Background color of the select on hover                                                      |
| `--background-color-invalid`       | Background color of the select when invalid                                                  |
| `--background-color-invalid-hover` | Background color of the select when invalid on hover                                         |
| `--border-color`                   | Border color of the select                                                                   |
| `--border-color-focus`             | Border color of the select on focus                                                          |
| `--border-color-hover`             | Border color of the select on hover                                                          |
| `--border-color-invalid`           | Border color of the select when invalid                                                      |
| `--border-color-invalid-hover`     | Border color of the select when invalid on hover                                             |
| `--border-radius`                  | Border radius of the select                                                                  |
| `--caret-margin-end`               | Right margin of the caret (will be left margin when we support right-to-left direction)      |
| `--clear-icon-margin-end`          | Right margin of the clear icon (will be left margin when we support right-to-left direction) |
| `--color`                          | Text color of the select                                                                     |
| `--focus-ring`                     | The focus ring style to use when the control receives focus, a `box-shadow` property.        |
| `--font-size`                      | Font size of the select                                                                      |
| `--font-weight`                    | Font weight of the select                                                                    |
| `--label-margin-end`               | Right margin of the label (will be left margin when we support right-to-left direction)      |
| `--label-margin-start`             | Left margin of the label (will be right margin when we support right-to-left direction)      |
| `--min-height`                     | Minimum height of the select                                                                 |
| `--placeholder-color`              | Text color of the placeholder                                                                |
| `--tags-margin-end`                | Right margin of the tags (will be left margin when we support right-to-left direction)       |
| `--tags-padding-bottom`            | Bottom padding of the tags                                                                   |
| `--tags-padding-top`               | Top padding of the tags                                                                      |

## Dependencies

### Depends on

- [gr-tag](/components/tag)
- [gr-dropdown](/components/dropdown)
- [gr-menu](/components/menu)
