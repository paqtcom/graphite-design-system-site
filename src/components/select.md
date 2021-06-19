---
title: Components - way-select
---

# way-select

<div>

Selects allow you to choose one or more items from a dropdown menu.

<way-select>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-item value="option-4">Option 4</way-menu-item>
  <way-menu-item value="option-5">Option 5</way-menu-item>
  <way-menu-item value="option-6">Option 6</way-menu-item>
</way-select>

```html
<way-select>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-item value="option-4">Option 4</way-menu-item>
  <way-menu-item value="option-5">Option 5</way-menu-item>
  <way-menu-item value="option-6">Option 6</way-menu-item>
</way-select>
```

## Sections

<div class="flex items-center mb-3">
<a href="#examples" class="mr-3">Examples</a> 
<a href="#properties" class="mr-3">Properties</a> 
<a href="#events" class="mr-3">Events</a> 
<a href="#methods" class="mr-3">Methods</a> 
<a href="#slots" class="mr-3">Slots</a> 
<a href="#css-custom-properties">CSS Custom Properties</a> 
</div>

</div>

<div id="examples">

## Examples

### Placeholders

Use the `placeholder` attribute to add a placeholder.

<way-select placeholder="Select one">
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
</way-select>

```html
<way-select placeholder="Select one">
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
</way-select>
```

### Clearable

Use the `clearable` attribute to make the control clearable.

<way-select placeholder="Clearable" clearable>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
</way-select>

```html
<way-select placeholder="Clearable" clearable>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
</way-select>
```

### Pill

Use the `pill` attribute to give selects rounded edges.

<way-select pill>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
</way-select>

```html
<way-select pill>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
</way-select>
```

### Disabled

Use the `disabled` attribute to disable a select.

<way-select placeholder="Disabled" disabled>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
</way-select>

```html
<way-select placeholder="Disabled" disabled>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
</way-select>
```

### Multiple

To allow multiple options to be selected, use the `multiple` attribute. It's a good practice to use `clearable` when this option is enabled. When using this option, `value` will be an array instead of a string.

<way-select placeholder="Select a few" multiple clearable>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-item value="option-4">Option 4</way-menu-item>
  <way-menu-item value="option-5">Option 5</way-menu-item>
  <way-menu-item value="option-6">Option 6</way-menu-item>
</way-select>

```html
<way-select placeholder="Select a few" multiple clearable>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-item value="option-4">Option 4</way-menu-item>
  <way-menu-item value="option-5">Option 5</way-menu-item>
  <way-menu-item value="option-6">Option 6</way-menu-item>
</way-select>
```

### Grouping Options

Options can be grouped visually using menu labels and menu dividers.

<way-select placeholder="Select one">
  <way-menu-label>Group 1</way-menu-label>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-label>Group 2</way-menu-label>
  <way-menu-item value="option-4">Option 4</way-menu-item>
  <way-menu-item value="option-5">Option 5</way-menu-item>
  <way-menu-item value="option-6">Option 6</way-menu-item>
</way-select>

```html
<way-select placeholder="Select one">
  <way-menu-label>Group 1</way-menu-label>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
  <way-menu-divider></way-menu-divider>
  <way-menu-label>Group 2</way-menu-label>
  <way-menu-item value="option-4">Option 4</way-menu-item>
  <way-menu-item value="option-5">Option 5</way-menu-item>
  <way-menu-item value="option-6">Option 6</way-menu-item>
</way-select>
```

### Sizes

Use the `size` attribute to change a select's size.

<way-select placeholder="Small" size="small" multiple>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
</way-select>

<br>

<way-select placeholder="Medium" size="medium" multiple>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
</way-select>

<br>

<way-select placeholder="Large" size="large" multiple>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
</way-select>

```html
<way-select placeholder="Small" size="small" multiple>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
</way-select>

<br />

<way-select placeholder="Medium" size="medium" multiple>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
</way-select>

<br />

<way-select placeholder="Large" size="large" multiple>
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
</way-select>
```

### Selecting Options Programmatically

The `value` prop is bound to the current selection. As the selection changes, so will the value. To programmatically manage the selection, update the `value` property.

<div class="selecting-example">

<way-select placeholder="">
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
</way-select>

<br>

<way-button data-option="option-1">Set 1</way-button>
<way-button data-option="option-2">Set 2</way-button>
<way-button data-option="option-3">Set 3</way-button>

</div>

<script>
  const container = document.querySelector('.selecting-example');
  const select = container.querySelector('way-select');

  [...container.querySelectorAll('way-button')].map(button => {
    button.addEventListener('click', () => {
      select.value = button.dataset.option; 
    });
  });
</script>

```html
<div class="selecting-example">
  <way-select placeholder="">
    <way-menu-item value="option-1">Option 1</way-menu-item>
    <way-menu-item value="option-2">Option 2</way-menu-item>
    <way-menu-item value="option-3">Option 3</way-menu-item>
  </way-select>

  <br />

  <way-button data-option="option-1">Set 1</way-button>
  <way-button data-option="option-2">Set 2</way-button>
  <way-button data-option="option-3">Set 3</way-button>
</div>

<script>
  const container = document.querySelector('.selecting-example');
  const select = container.querySelector('way-select');

  [...container.querySelectorAll('way-button')].map((button) => {
    button.addEventListener('click', () => {
      select.value = button.dataset.option;
    });
  });
</script>
```

### Labels

Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.

<way-select label="Select one">
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
</way-select>

```html
<way-select label="Select one">
  <way-menu-item value="option-1">Option 1</way-menu-item>
  <way-menu-item value="option-2">Option 2</way-menu-item>
  <way-menu-item value="option-3">Option 3</way-menu-item>
</way-select>
```

### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

<way-select label="Experience" help-text="Please tell us your skill level.">
  <way-menu-item value="option-1">Novice</way-menu-item>
  <way-menu-item value="option-2">Intermediate</way-menu-item>
  <way-menu-item value="option-3">Advanced</way-menu-item>
</way-select>

```html
<way-select label="Experience" help-text="Please tell us your skill level.">
  <way-menu-item value="option-1">Novice</way-menu-item>
  <way-menu-item value="option-2">Intermediate</way-menu-item>
  <way-menu-item value="option-3">Advanced</way-menu-item>
</way-select>
```

</div>

<div id="properties">

## Properties

| Property         | Attribute          | Description                                                                                                                                                                                    | Type                             | Default    |
| ---------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| `clearable`      | `clearable`        | Set to true to add a clear button when the select is populated.                                                                                                                                | `boolean`                        | `false`    |
| `disabled`       | `disabled`         | Set to true to disable the select control.                                                                                                                                                     | `boolean`                        | `false`    |
| `helpText`       | `help-text`        | The select's help text. Alternatively, you can use the help-text slot.                                                                                                                         | `string`                         | `''`       |
| `hoist`          | `hoist`            | Enable this option to prevent the panel from being clipped when the component is placed inside a container with `overflow: auto\|scroll`.                                                      | `boolean`                        | `false`    |
| `invalid`        | `invalid`          | This will be true when the control is in an invalid state. Validity is determined by the `required` prop.                                                                                      | `boolean`                        | `false`    |
| `label`          | `label`            | The select's label. Alternatively, you can use the label slot.                                                                                                                                 | `string`                         | `''`       |
| `maxTagsVisible` | `max-tags-visible` | The maximum number of tags to show when `multiple` is true. After the maximum, "+n" will be shown to indicate the number of additional items that are selected. Set to -1 to remove the limit. | `number`                         | `3`        |
| `multiple`       | `multiple`         | Set to true to enable multiselect.                                                                                                                                                             | `boolean`                        | `false`    |
| `name`           | `name`             | The select's name.                                                                                                                                                                             | `string`                         | `''`       |
| `pill`           | `pill`             | Set to true to draw a pill-style select with rounded edges.                                                                                                                                    | `boolean`                        | `false`    |
| `placeholder`    | `placeholder`      | The select's placeholder text.                                                                                                                                                                 | `string`                         | `''`       |
| `required`       | `required`         | The select's required attribute.                                                                                                                                                               | `boolean`                        | `false`    |
| `size`           | `size`             | The select's size.                                                                                                                                                                             | `"large" \| "medium" \| "small"` | `'medium'` |
| `value`          | `value`            | The value of the control. This will be a string or an array depending on `multiple`.                                                                                                           | `string \| string[]`             | `''`       |

</div>

<div id="events">

## Events

| Event        | Description                               | Type               |
| ------------ | ----------------------------------------- | ------------------ |
| `way-blur`   | Emitted when the control loses focus.     | `CustomEvent<any>` |
| `way-change` | Emitted when the control's value changes. | `CustomEvent<any>` |
| `way-focus`  | Emitted when the control gains focus.     | `CustomEvent<any>` |

</div>

<div id="methods">

## Methods

### `reportValidity() => Promise<boolean>`

Checks for validity and shows the browser's validation message if the control is invalid.

#### Returns

Type: `Promise<boolean>`

### `setCustomValidity(message: string) => Promise<void>`

Sets a custom validation message. If `message` is not empty, the field will be considered invalid.

#### Returns

Type: `Promise<void>`

</div>

<div id="slots">

## Slots

| Slot          | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| `(default)`   | The select's options in the form of menu items.                |
| `"help-text"` | Help text that describes how to use the select.                |
| `"label"`     | The select's label. Alternatively, you can use the label prop. |

</div>

<div id="css-custom-properties">

## CSS Custom Properties

| Name                       | Description                                                                                  |
| -------------------------- | -------------------------------------------------------------------------------------------- |
| `--background-color`       | Background color of the select                                                               |
| `--background-color-hover` | Background color of the select on hover                                                      |
| `--border-color`           | Border color of the select                                                                   |
| `--border-color-hover`     | Border color of the select on hover                                                          |
| `--border-radius`          | Border radius of the select                                                                  |
| `--caret-margin-end`       | Right margin of the caret (will be left margin when we support right-to-left direction)      |
| `--clear-icon-margin-end`  | Right margin of the clear icon (will be left margin when we support right-to-left direction) |
| `--color`                  | Text color of the select                                                                     |
| `--font-size`              | Font size of the select                                                                      |
| `--font-weight`            | Font weight of the select                                                                    |
| `--label-margin-end`       | Right margin of the label (will be left margin when we support right-to-left direction)      |
| `--label-margin-start`     | Left margin of the label (will be right margin when we support right-to-left direction)      |
| `--min-height`             | Minimum height of the select                                                                 |
| `--placeholder-color`      | Text color of the placeholder                                                                |
| `--tags-margin-end`        | Right margin of the tags (will be left margin when we support right-to-left direction)       |
| `--tags-padding-bottom`    | Bottom padding of the tags                                                                   |
| `--tags-padding-top`       | Top padding of the tags                                                                      |

</div>
