---
title: Button - Graphite Design System
---

# Button

`<gr-button> | GrButton`

[[toc]]

Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.

<gr-button>Button</gr-button>

```html
<gr-button>Button</gr-button>
```

## Examples

### Variants

Use the `variant` attribute to set the appropiate button style.

| Variant     | Purpose                                                                                                                                                                     |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `default`   | Most common button in the interface. Only use another variant if a button requires more or less visual weight.                                                              |
| `primary`   | Use for the main view's call-to-action. Don’t use more than one primary button in a section or screen to avoid overwhelming the user.                                       |
| `secondary` | Use for secondary actions in a section or screen. Most commonly used when there is already a primary action and we want to highlight another action with a different style. |
| `danger`    | Use when the action will delete data or be otherwise difficult to recover from.                                                                                             |
| `plain`     | Use for less important or less commonly used actions since they’re less prominent.                                                                                          |

<gr-button>Default</gr-button>
<gr-button variant="primary">Primary</gr-button>
<gr-button variant="secondary">Secondary</gr-button>
<gr-button variant="danger">Danger</gr-button>
<gr-button variant="plain">Plain</gr-button>

```html
<gr-button>Default</gr-button>
<gr-button variant="primary">Primary</gr-button>
<gr-button variant="secondary">Secondary</gr-button>
<gr-button variant="danger">Danger</gr-button>
<gr-button variant="plain">Plain</gr-button>
```

### Sizes

Use the `size` attribute to change a button's size.

<gr-button size="small">Small</gr-button>
<gr-button>Medium</gr-button>
<gr-button size="large">Large</gr-button>

```html
<gr-button size="small">Small</gr-button>
<gr-button>Medium</gr-button>
<gr-button size="large">Large</gr-button>
```

### Icons

Icons can be used in buttons when additional clarity is required. Icons should not be used for decoration.

Use the `start` and `end` slots to add icons (or other content). As a general rule, a button should not have more than one icon.

We recommend [Ionicons](https://ionic.io/ionicons) (which also supports custom SVG), but you could theoretically use any icon library.
Use the same icon set throughout your application for consistency.

<gr-button>
  <ion-icon name="settings-outline" slot="start"></ion-icon>
  Settings
</gr-button>
<gr-button>
  <ion-icon name="refresh-outline" slot="end"></ion-icon>
  Refresh
</gr-button>

```html
<gr-button>
  <ion-icon name="settings-outline" slot="start"></ion-icon>
  Settings
</gr-button>

<gr-button>
  <ion-icon name="refresh-outline" slot="end"></ion-icon>
  Refresh
</gr-button>
```

### Circular icon buttons

Use the `circle` attribute in combination with the `icon-only` slot to create circular icon buttons.

There are certain instances where an icon will suffice in place of a text label, but use icon buttons cautiously. Be sure that the icon used is easily recognizable.

Setting a `aria-label` attribute is required for accessibility.

<gr-button variant="primary" size="small" aria-label="Add" circle>
  <ion-icon name="add-outline" slot="icon-only"></ion-icon>
</gr-button>
<gr-button variant="primary" aria-label="Add" circle>
  <ion-icon name="add-outline" slot="icon-only"></ion-icon>
</gr-button>
<gr-button variant="primary" size="large" aria-label="Add" circle>
  <ion-icon name="add-outline" slot="icon-only"></ion-icon>
</gr-button>

```html
<gr-button variant="primary" size="small" aria-label="Add" circle>
  <ion-icon name="add-outline" slot="icon-only"></ion-icon>
</gr-button>

<gr-button variant="primary" aria-label="Add" circle>
  <ion-icon name="add-outline" slot="icon-only"></ion-icon>
</gr-button>

<gr-button variant="primary" size="large" aria-label="Add" circle>
  <ion-icon name="add-outline" slot="icon-only"></ion-icon>
</gr-button>
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. <kbd>CMD/CTRL/SHIFT + CLICK</kbd>) and exposes the `target` & `rel` attributes (if you set a target it is recommended to set `rel="noopener noreferrer"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/)).

<gr-button href="https://www.way2web.nl" target="_blank" rel="noopener noreferrer">Link</gr-button>

```html
<gr-button href="https://www.way2web.nl" target="_blank" rel="noopener noreferrer">Link</gr-button>
```

### Block Button

Use the `expand="block"` attribute to create a full-width button with rounded corners.

<gr-button expand="block">Block</gr-button>

```html
<gr-button expand="block">Block</gr-button>
```

### Full Button

Use the `expand="full"` attribute to create a full-width button with square corners and no border on the left or right. Useful if you want it to run over the full-width of the viewport or a section (where you don't apply any horizontal margin).

<gr-button expand="full">Full</gr-button>

```html
<gr-button expand="full">Full</gr-button>
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

<gr-button size="small" caret>Small</gr-button>
<gr-button size="medium" caret>Medium</gr-button>
<gr-button size="large" caret>Large</gr-button>

```html
<gr-button size="small" caret>Small</gr-button>
<gr-button size="medium" caret>Medium</gr-button>
<gr-button size="large" caret>Large</gr-button>
```

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.

Set it after the user has clicked the button to prevent double-clicks, and give feedback to the user the click has been registered and is being processed.

<gr-button loading>Default</gr-button>
<gr-button variant="primary" loading>Primary</gr-button>
<gr-button variant="secondary" loading>Secondary</gr-button>
<gr-button variant="danger" loading>Danger</gr-button>
<gr-button variant="plain" loading>Plain</gr-button>

```html
<gr-button loading>Default</gr-button>
<gr-button variant="primary" loading>Primary</gr-button>
<gr-button variant="secondary" loading>Secondary</gr-button>
<gr-button variant="danger" loading>Danger</gr-button>
<gr-button variant="plain" loading>Plain</gr-button>
```

### Disabled

Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.

<gr-button disabled>Default</gr-button>
<gr-button variant="primary" disabled>Primary</gr-button>
<gr-button variant="secondary" disabled>Secondary</gr-button>
<gr-button variant="danger" disabled>Danger</gr-button>
<gr-button variant="plain" disabled>Plain</gr-button>

```html
<gr-button disabled>Default</gr-button>
<gr-button variant="primary" disabled>Primary</gr-button>
<gr-button variant="secondary" disabled>Secondary</gr-button>
<gr-button variant="danger" disabled>Danger</gr-button>
<gr-button variant="plain" disabled>Plain</gr-button>
```

## Usage guidelines

### Emphasis

You don’t necessarily need to use the buttons in the order that their labels might imply. For example, you don’t always need to use the secondary button as the second button in your layout. The most important thing is to establish a visual hierarchy between the buttons in your UI. Keep the following best practices in mind.

#### A single, high-emphasis button

As a general rule, a layout should contain a single high-emphasis button (primary) that makes it clear that other buttons have less importance in the hierarchy. This high-emphasis button commands the most attention.

#### Multiple button emphasis

A high-emphasis button can be accompanied by medium- and low-emphasis buttons that perform less important actions. Keep in mind that you should only group together calls to action that have a relationship to one another.

Although secondary buttons have less visual prominence, they are still tonally heavy. If your layout requires multiple actions — as is the case with some data lists and dashboards — low emphasis buttons (default or plain) may be a better choice.

<div class="usage-guidelines usage-guidelines-do text-center">

<ion-icon name="checkmark-circle" class="icon"></ion-icon>

<gr-button>
  Edit
</gr-button>

&nbsp;

<gr-button>
  Edit
</gr-button>

&nbsp;

<gr-button variant="secondary">
  Cancel
</gr-button>

<gr-button variant="primary">
  Save
</gr-button>

</div>

<div class="usage-guidelines usage-guidelines-dont text-center">

<ion-icon name="close-circle" class="icon"></ion-icon>

<gr-button variant="primary">
  Edit
</gr-button>

&nbsp;

<gr-button variant="primary">
  Edit
</gr-button>

&nbsp;

<gr-button variant="primary">
  Cancel
</gr-button>

<gr-button variant="primary">
  Save
</gr-button>

</div>

### Be concise

Button text should be concise: 1 or 2 words, no longer than 4 words, with fewer than 20 characters including spaces. Don’t use punctuation marks such as periods or exclamation points.

<div class="usage-guidelines usage-guidelines-do text-center">

<ion-icon name="checkmark-circle" class="icon"></ion-icon>

<gr-button variant="primary">
  Start experience
</gr-button>

</div>

<div class="usage-guidelines usage-guidelines-dont text-center">

<ion-icon name="close-circle" class="icon"></ion-icon>

<gr-button variant="primary">
  Start the experience now!
</gr-button>

</div>

### Use clear text

Button texts should be clear about the outcome of the action. Most buttons should start with a verb. For example, use “Agree” instead of “Yes” in a dialog or use “Sign Up” instead of “Submit” in a form.

<div class="usage-guidelines usage-guidelines-do text-center">

<ion-icon name="checkmark-circle" class="icon"></ion-icon>

<gr-button variant="primary">
  Agree
</gr-button>

</div>

<div class="usage-guidelines usage-guidelines-dont text-center">

<ion-icon name="close-circle" class="icon"></ion-icon>

<gr-button variant="primary">
  Yes
</gr-button>

</div>

### Use sentence case

Button text should always be in sentence case. Capitalization should never be used to give more prominence to a specific button.

<div class="usage-guidelines usage-guidelines-do text-center">

<ion-icon name="checkmark-circle" class="icon"></ion-icon>

<gr-button variant="primary">
  Get started
</gr-button>

</div>

<div class="usage-guidelines usage-guidelines-dont text-center">

<ion-icon name="close-circle" class="icon"></ion-icon>

<gr-button variant="primary">
  GET STARTED
</gr-button>

&nbsp;

<gr-button variant="primary">
  get started
</gr-button>

&nbsp;

<gr-button variant="primary">
  Get Started
</gr-button>

</div>

### Use icons only when necessary

Icons can be used in buttons when additional clarity is required and the icon is highly relevant to the action. Icons should not be used for decoration.

<div class="usage-guidelines usage-guidelines-do text-center">

<ion-icon name="checkmark-circle" class="icon"></ion-icon>

<gr-button variant="primary">
  <ion-icon name="share-outline" slot="start"></ion-icon>
  Share
</gr-button>

</div>

<div class="usage-guidelines usage-guidelines-dont text-center">

<ion-icon name="close-circle" class="icon"></ion-icon>

<gr-button variant="secondary">
  <ion-icon name="ban-outline" slot="start"></ion-icon>
  Cancel
</gr-button>
<br><br>
<gr-button>
  <ion-icon name="ellipsis-horizontal" slot="start"></ion-icon>
  More
</gr-button>
<br><br>
<gr-button variant="primary">
  <ion-icon name="checkmark-circle" slot="start"></ion-icon>
  Submit
</gr-button>

</div>

## Properties

| Property   | Attribute  | Description                                                                                                                                                                            | Type      | Default     |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- | ----------- | ---------- | ------------ | ----------- |
| `caret`    | `caret`    | Set to true to draw the button with a caret for use with dropdowns, popovers, etc.                                                                                                     | `boolean` | `false`     |
| `circle`   | `circle`   | Set to true to draw a circle button.                                                                                                                                                   | `boolean` | `false`     |
| `disabled` | `disabled` | If `true`, the user cannot interact with the button.                                                                                                                                   | `boolean` | `false`     |
| `expand`   | `expand`   | Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.                                                                        | `"block"  | "full"`     | `undefined` |
| `href`     | `href`     | Contains a URL or a URL fragment that the hyperlink points to.                                                                                                                         | `string`  | `undefined` |
| `loading`  | `loading`  | Set to true to draw the button in a loading state.                                                                                                                                     | `boolean` | `false`     |
| `pill`     | `pill`     | Set to true to draw a pill-style button with rounded edges.                                                                                                                            | `boolean` | `false`     |
| `rel`      | `rel`      | Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types). | `string`  | `undefined` |
| `size`     | `size`     | The button's size.                                                                                                                                                                     | `"large"  | "medium"    | "small"`    | `'medium'` |
| `target`   | `target`   | Specifies where to display the linked URL. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.                                                                             | `string`  | `undefined` |
| `type`     | `type`     | The type of the button.                                                                                                                                                                | `"button" | "reset"     | "submit"`   | `'button'` |
| `variant`  | `variant`  | The different variants. The options are: `"default"`, `"primary"`, `"secondary"`, `"danger"`, and `"plain"`.                                                                           | `"danger" | "default"   | "plain"     | "primary"  | "secondary"` | `'default'` |

## Events

| Event      | Description                          | Type                |
| ---------- | ------------------------------------ | ------------------- |
| `gr-blur`  | Emitted when the button loses focus. | `CustomEvent<void>` |
| `gr-focus` | Emitted when the button has focus.   | `CustomEvent<void>` |

## Slots

| Slot          | Description                                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------------- |
| `(default)`   | Content is placed between the named slots if provided without a slot.                                           |
| `"end"`       | Content is placed to the right of the button text (will be to the left when we support right-to-left direction) |
| `"icon-only"` | Should be used on an icon in a button that has no text.                                                         |
| `"start"`     | Content is placed to the left of the button text (will be to the right when we support right-to-left direction) |

## CSS Custom Properties

| Name                   | Description                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------ |
| `--background`         | Background of the button                                                                   |
| `--background-focus`   | Background of the button on focus                                                          |
| `--background-hover`   | Background of the button on hover                                                          |
| `--border-color`       | Border color of the button                                                                 |
| `--border-color-focus` | Border color of the button on focus                                                        |
| `--border-color-hover` | Border color of the button on hover                                                        |
| `--border-radius`      | Border radius of the button                                                                |
| `--border-style`       | Border style of the button                                                                 |
| `--border-width`       | Border width of the button                                                                 |
| `--color`              | Text color of the button                                                                   |
| `--color-focus`        | Text color of the button on focus                                                          |
| `--color-hover`        | Text color of the button on hover                                                          |
| `--focus-ring`         | The focus ring style to use when the button receives focus, a `box-shadow` property.       |
| `--height`             | Height of the button                                                                       |
| `--padding-bottom`     | Bottom padding of the button                                                               |
| `--padding-end`        | Right padding of the button (will be left padding when we support right-to-left direction) |
| `--padding-start`      | Left padding of the button (will be right padding when we support right-to-left direction) |
| `--padding-top`        | Top padding of the button                                                                  |
| `--transition`         | Transition of the button                                                                   |

## Dependencies

### Used by

- [gr-tag](/components/tag)

### Depends on

- [gr-spinner](/components/spinner)
