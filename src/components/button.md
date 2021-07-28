---
title: Components - way-button
---

# way-button

[[toc]]

Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.

<way-button>Button</way-button>

```html
<way-button>Button</way-button>
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

<way-button>Default</way-button>
<way-button variant="primary">Primary</way-button>
<way-button variant="secondary">Secondary</way-button>
<way-button variant="danger">Danger</way-button>
<way-button variant="plain">Plain</way-button>

```html
<way-button>Default</way-button>
<way-button variant="primary">Primary</way-button>
<way-button variant="secondary">Secondary</way-button>
<way-button variant="danger">Danger</way-button>
<way-button variant="plain">Plain</way-button>
```

### Sizes

Use the `size` attribute to change a button's size.

<way-button size="small">Small</way-button>
<way-button>Medium</way-button>
<way-button size="large">Large</way-button>

```html
<way-button size="small">Small</way-button>
<way-button>Medium</way-button>
<way-button size="large">Large</way-button>
```

### Icons

Use the `start` and `end` slots to add icons.

<way-button>
  <ion-icon name="settings-outline" slot="start"></ion-icon>
  Settings
</way-button>
<way-button>
  <ion-icon name="refresh-outline" slot="end"></ion-icon>
  Refresh
</way-button>
<way-button>
  <ion-icon name="link-outline" slot="start"></ion-icon>
  Open
  <ion-icon name="exit-outline" slot="end"></ion-icon>
</way-button>

```html
<way-button>
  <ion-icon name="settings-outline" slot="start"></ion-icon>
  Settings
</way-button>

<way-button>
  <ion-icon name="refresh-outline" slot="end"></ion-icon>
  Refresh
</way-button>

<way-button>
  <ion-icon name="link-outline" slot="start"></ion-icon>
  Open
  <ion-icon name="exit-outline" slot="end"></ion-icon>
</way-button>
```

### Circle Buttons

Use the `circle` attribute in combination with the `icon-only` slot to create circular icon buttons.

<way-button variant="primary" size="small" circle>
  <ion-icon name="add-outline" slot="icon-only"></ion-icon>
</way-button>
<way-button variant="primary" circle>
  <ion-icon name="add-outline" slot="icon-only"></ion-icon>
</way-button>
<way-button variant="primary" size="large" circle>
  <ion-icon name="add-outline" slot="icon-only"></ion-icon>
</way-button>

```html
<way-button variant="primary" size="small" circle>
  <ion-icon name="add-outline" slot="icon-only"></ion-icon>
</way-button>

<way-button variant="primary" circle>
  <ion-icon name="add-outline" slot="icon-only"></ion-icon>
</way-button>

<way-button variant="primary" size="large" circle>
  <ion-icon name="add-outline" slot="icon-only"></ion-icon>
</way-button>
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. <kbd>CMD/CTRL/SHIFT + CLICK</kbd>) and exposes the `target` attribute.

<way-button href="https://www.way2web.nl" target="_blank">Link</way-button>

```html
<way-button href="https://www.way2web.nl" target="_blank">Link</way-button>
```

### Block Button

Use the `expand="block"` attribute to create a full-width button with rounded corners.

<way-button expand="block">Block</way-button>

```html
<way-button expand="block">Block</way-button>
```

### Full Button

Use the `expand="full"` attribute to create a full-width button with square corners and no border on the left or right. Useful if you want it to run over the full-width of the viewport or a section (where you don't apply any horizontal margin).

<way-button expand="full">Full</way-button>

```html
<way-button expand="full">Full</way-button>
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

<way-button size="small" caret>Small</way-button>
<way-button size="medium" caret>Medium</way-button>
<way-button size="large" caret>Large</way-button>

```html
<way-button size="small" caret>Small</way-button>
<way-button size="medium" caret>Medium</way-button>
<way-button size="large" caret>Large</way-button>
```

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.

<way-button loading>Default</way-button>
<way-button variant="primary" loading>Primary</way-button>
<way-button variant="secondary" loading>Secondary</way-button>
<way-button variant="danger" loading>Danger</way-button>
<way-button variant="plain" loading>Plain</way-button>

```html
<way-button loading>Default</way-button>
<way-button variant="primary" loading>Primary</way-button>
<way-button variant="secondary" loading>Secondary</way-button>
<way-button variant="danger" loading>Danger</way-button>
<way-button variant="plain" loading>Plain</way-button>
```

### Disabled

Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.

<way-button disabled>Default</way-button>
<way-button variant="primary" disabled>Primary</way-button>
<way-button variant="secondary" disabled>Secondary</way-button>
<way-button variant="danger" disabled>Danger</way-button>
<way-button variant="plain" disabled>Plain</way-button>

```html
<way-button disabled>Default</way-button>
<way-button variant="primary" disabled>Primary</way-button>
<way-button variant="secondary" disabled>Secondary</way-button>
<way-button variant="danger" disabled>Danger</way-button>
<way-button variant="plain" disabled>Plain</way-button>
```

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

| Event       | Description                          | Type                |
| ----------- | ------------------------------------ | ------------------- |
| `way-blur`  | Emitted when the button loses focus. | `CustomEvent<void>` |
| `way-focus` | Emitted when the button has focus.   | `CustomEvent<void>` |

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

- [way-tag](/components/tag)

### Depends on

- [way-spinner](/components/spinner)
