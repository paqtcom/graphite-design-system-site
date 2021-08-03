---
title: Select - Graphite Design System
---

# Select

`<gr-select> | GrSelect`

[[toc]]

Selects allow you to choose one or more items from a dropdown menu.

You can use [menu items](/components/menu-item), [menu dividers](/components/menu-divider), and [menu labels](/components/menu-label) to compose a menu.

<gr-select>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
  <gr-menu-divider></gr-menu-divider>
  <gr-menu-item value="option-4">Option 4</gr-menu-item>
  <gr-menu-item value="option-5">Option 5</gr-menu-item>
  <gr-menu-item value="option-6">Option 6</gr-menu-item>
</gr-select>

```html
<gr-select>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
  <gr-menu-divider></gr-menu-divider>
  <gr-menu-item value="option-4">Option 4</gr-menu-item>
  <gr-menu-item value="option-5">Option 5</gr-menu-item>
  <gr-menu-item value="option-6">Option 6</gr-menu-item>
</gr-select>
```

## Examples

### Placeholders

Use the `placeholder` attribute to add a placeholder.

<gr-select placeholder="Select one">
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>

```html
<gr-select placeholder="Select one">
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>
```

### Clearable

Use the `clearable` attribute to make the control clearable.

<gr-select placeholder="Clearable" clearable>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>

```html
<gr-select placeholder="Clearable" clearable>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>
```

### Pill

Use the `pill` attribute to give selects rounded edges.

<gr-select pill>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>

```html
<gr-select pill>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>
```

### Disabled

Use the `disabled` attribute to disable a select.

<gr-select placeholder="Disabled" disabled>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>

```html
<gr-select placeholder="Disabled" disabled>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>
```

### Multiple

To allow multiple options to be selected, use the `multiple` attribute. It's a good practice to use `clearable` when this option is enabled. When using this option, `value` will be an array instead of a string.

<gr-select placeholder="Select a few" multiple clearable>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
  <gr-menu-divider></gr-menu-divider>
  <gr-menu-item value="option-4">Option 4</gr-menu-item>
  <gr-menu-item value="option-5">Option 5</gr-menu-item>
  <gr-menu-item value="option-6">Option 6</gr-menu-item>
</gr-select>

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

The `value` prop is bound to the current selection. As the selection changes, so will the value. To programmatically manage the selection, update the `value` property.

<div class="selecting-example">

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

<gr-select label="Invalid" invalid>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>

```html
<gr-select label="Invalid" invalid>
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>
```

### Labels

Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.

<gr-select label="Select one">
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>

```html
<gr-select label="Select one">
  <gr-menu-item value="option-1">Option 1</gr-menu-item>
  <gr-menu-item value="option-2">Option 2</gr-menu-item>
  <gr-menu-item value="option-3">Option 3</gr-menu-item>
</gr-select>
```

### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

<gr-select label="Experience" help-text="Please tell us your skill level.">
  <gr-menu-item value="option-1">Novice</gr-menu-item>
  <gr-menu-item value="option-2">Intermediate</gr-menu-item>
  <gr-menu-item value="option-3">Advanced</gr-menu-item>
</gr-select>

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

<gr-select label="Experience" help-text="Please tell us your skill level." invalid-text="Select your skill level" invalid>
  <gr-menu-item value="option-1">Novice</gr-menu-item>
  <gr-menu-item value="option-2">Intermediate</gr-menu-item>
  <gr-menu-item value="option-3">Advanced</gr-menu-item>
</gr-select>

```html
<gr-select
  label="Experience"
  help-text="Please tell us your skill level."
  invalid-text="Select your skill level"
  invalid
>
  <gr-menu-item value="option-1">Novice</gr-menu-item>
  <gr-menu-item value="option-2">Intermediate</gr-menu-item>
  <gr-menu-item value="option-3">Advanced</gr-menu-item>
</gr-select>
```

## Properties

| Property         | Attribute          | Description                                                                                                                                                                                    | Type      | Default   |
| ---------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------- | -------- | ---------- |
| `clearable`      | `clearable`        | Set to true to add a clear button when the select is populated.                                                                                                                                | `boolean` | `false`   |
| `disabled`       | `disabled`         | Set to true to disable the select control.                                                                                                                                                     | `boolean` | `false`   |
| `helpText`       | `help-text`        | The select's help text. Alternatively, you can use the help-text slot.                                                                                                                         | `string`  | `''`      |
| `hoist`          | `hoist`            | Enable this option to prevent the panel from being clipped when the component is placed inside a container with `overflow: auto                                                                | scroll`.  | `boolean` | `false`  |
| `invalid`        | `invalid`          | Set to true to indicate this field is invalid. Will display the invalid text instead of the help text                                                                                          | `boolean` | `false`   |
| `invalidText`    | `invalid-text`     | The select's invalid text. Alternatively, you can use the invalid-text slot.                                                                                                                   | `string`  | `''`      |
| `label`          | `label`            | The select's label. Alternatively, you can use the label slot.                                                                                                                                 | `string`  | `''`      |
| `maxTagsVisible` | `max-tags-visible` | The maximum number of tags to show when `multiple` is true. After the maximum, "+n" will be shown to indicate the number of additional items that are selected. Set to -1 to remove the limit. | `number`  | `3`       |
| `multiple`       | `multiple`         | Set to true to enable multiselect.                                                                                                                                                             | `boolean` | `false`   |
| `name`           | `name`             | The select's name.                                                                                                                                                                             | `string`  | `''`      |
| `pill`           | `pill`             | Set to true to draw a pill-style select with rounded edges.                                                                                                                                    | `boolean` | `false`   |
| `placeholder`    | `placeholder`      | The select's placeholder text.                                                                                                                                                                 | `string`  | `''`      |
| `size`           | `size`             | The select's size.                                                                                                                                                                             | `"large"  | "medium"  | "small"` | `'medium'` |
| `value`          | `value`            | The value of the control. This will be a string or an array depending on `multiple`.                                                                                                           | `string   | string[]` | `''`     |

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

## CSS Custom Properties

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
