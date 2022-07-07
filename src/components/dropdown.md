---
title: Dropdown - Graphite Design System
---

# Dropdown

`<gr-dropdown> | GrDropdown`

[[toc]]

<p class="intro">Dropdowns expose additional content that "drops down" in a panel.</p>

Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.

Dropdowns are designed to work well with [menus](/components/menu) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [select](/components/select)). The API gives you complete control over showing, hiding, and positioning the panel.

<div class="example-block">
  <gr-dropdown>
    <gr-button slot="trigger" caret>Dropdown</gr-button>
    <gr-menu>
      <gr-menu-item>Dropdown Item 1</gr-menu-item>
      <gr-menu-item>Dropdown Item 2</gr-menu-item>
      <gr-menu-item>Dropdown Item 3</gr-menu-item>
      <gr-menu-divider></gr-menu-divider>
      <gr-menu-item checked>Checked</gr-menu-item>
      <gr-menu-item disabled>Disabled</gr-menu-item>
      <gr-menu-divider></gr-menu-divider>
      <gr-menu-item>
        Start Icon
        <ion-icon slot="start" name="gift-outline" aria-hidden="true"></ion-icon>
      </gr-menu-item>
      <gr-menu-item>
        End Icon
        <ion-icon slot="end" name="heart-outline" aria-hidden="true"></ion-icon>
      </gr-menu-item>
    </gr-menu>
  </gr-dropdown>
</div>

```html
<gr-dropdown>
  <gr-button slot="trigger" caret>Dropdown</gr-button>
  <gr-menu>
    <gr-menu-item>Dropdown Item 1</gr-menu-item>
    <gr-menu-item>Dropdown Item 2</gr-menu-item>
    <gr-menu-item>Dropdown Item 3</gr-menu-item>
    <gr-menu-divider></gr-menu-divider>
    <gr-menu-item checked>Checked</gr-menu-item>
    <gr-menu-item disabled>Disabled</gr-menu-item>
    <gr-menu-divider></gr-menu-divider>
    <gr-menu-item>
      Start Icon
      <ion-icon slot="start" name="gift-outline" aria-hidden="true"></ion-icon>
    </gr-menu-item>
    <gr-menu-item>
      End Icon
      <ion-icon slot="end" name="heart-outline" aria-hidden="true"></ion-icon>
    </gr-menu-item>
  </gr-menu>
</gr-dropdown>
```

## Options

### Placement

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

<div class="example-block">
  <gr-dropdown placement="top-start">
    <gr-button slot="trigger" caret>Edit</gr-button>
    <gr-menu>
      <gr-menu-item>Cut</gr-menu-item>
      <gr-menu-item>Copy</gr-menu-item>
      <gr-menu-item>Paste</gr-menu-item>
      <gr-menu-divider></gr-menu-divider>
      <gr-menu-item>Find</gr-menu-item>
      <gr-menu-item>Replace</gr-menu-item>
    </gr-menu>
  </gr-dropdown>
</div>

```html
<gr-dropdown placement="top-start">
  <gr-button slot="trigger" caret>Edit</gr-button>
  <gr-menu>
    <gr-menu-item>Cut</gr-menu-item>
    <gr-menu-item>Copy</gr-menu-item>
    <gr-menu-item>Paste</gr-menu-item>
    <gr-menu-divider></gr-menu-divider>
    <gr-menu-item>Find</gr-menu-item>
    <gr-menu-item>Replace</gr-menu-item>
  </gr-menu>
</gr-dropdown>
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

<div class="example-block">
  <gr-dropdown distance="30">
    <gr-button slot="trigger" caret>Edit</gr-button>
    <gr-menu>
      <gr-menu-item>Cut</gr-menu-item>
      <gr-menu-item>Copy</gr-menu-item>
      <gr-menu-item>Paste</gr-menu-item>
      <gr-menu-divider></gr-menu-divider>
      <gr-menu-item>Find</gr-menu-item>
      <gr-menu-item>Replace</gr-menu-item>
    </gr-menu>
  </gr-dropdown>
</div>

```html
<gr-dropdown distance="30">
  <gr-button slot="trigger" caret>Edit</gr-button>
  <gr-menu>
    <gr-menu-item>Cut</gr-menu-item>
    <gr-menu-item>Copy</gr-menu-item>
    <gr-menu-item>Paste</gr-menu-item>
    <gr-menu-divider></gr-menu-divider>
    <gr-menu-item>Find</gr-menu-item>
    <gr-menu-item>Replace</gr-menu-item>
  </gr-menu>
</gr-dropdown>
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

<div class="example-block">
  <gr-dropdown skidding="30">
    <gr-button slot="trigger" caret>Edit</gr-button>
    <gr-menu>
      <gr-menu-item>Cut</gr-menu-item>
      <gr-menu-item>Copy</gr-menu-item>
      <gr-menu-item>Paste</gr-menu-item>
      <gr-menu-divider></gr-menu-divider>
      <gr-menu-item>Find</gr-menu-item>
      <gr-menu-item>Replace</gr-menu-item>
    </gr-menu>
  </gr-dropdown>
</div>

```html
<gr-dropdown skidding="30">
  <gr-button slot="trigger" caret>Edit</gr-button>
  <gr-menu>
    <gr-menu-item>Cut</gr-menu-item>
    <gr-menu-item>Copy</gr-menu-item>
    <gr-menu-item>Paste</gr-menu-item>
    <gr-menu-divider></gr-menu-divider>
    <gr-menu-item>Find</gr-menu-item>
    <gr-menu-item>Replace</gr-menu-item>
  </gr-menu>
</gr-dropdown>
```

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

<div class="example-block dropdown-hoist">
  <gr-dropdown>
    <gr-button slot="trigger" caret>No Hoist</gr-button>
    <gr-menu>
      <gr-menu-item>Item 1</gr-menu-item>
      <gr-menu-item>Item 2</gr-menu-item>
      <gr-menu-item>Item 3</gr-menu-item>
    </gr-menu>
  </gr-dropdown>

  <gr-dropdown hoist>
    <gr-button slot="trigger" caret>Hoist</gr-button>
    <gr-menu>
      <gr-menu-item>Item 1</gr-menu-item>
      <gr-menu-item>Item 2</gr-menu-item>
      <gr-menu-item>Item 3</gr-menu-item>
    </gr-menu>
  </gr-dropdown>
</div>

<style>
  .dropdown-hoist {
    overflow: hidden;
  }
</style>

```html
<div class="dropdown-hoist">
  <gr-dropdown>
    <gr-button slot="trigger" caret>No Hoist</gr-button>
    <gr-menu>
      <gr-menu-item>Item 1</gr-menu-item>
      <gr-menu-item>Item 2</gr-menu-item>
      <gr-menu-item>Item 3</gr-menu-item>
    </gr-menu>
  </gr-dropdown>

  <gr-dropdown hoist>
    <gr-button slot="trigger" caret>Hoist</gr-button>
    <gr-menu>
      <gr-menu-item>Item 1</gr-menu-item>
      <gr-menu-item>Item 2</gr-menu-item>
      <gr-menu-item>Item 3</gr-menu-item>
    </gr-menu>
  </gr-dropdown>
</div>

<style>
  .dropdown-hoist {
    border: solid 2px var(--gr-panel-border-color);
    padding: var(--gr-spacing-medium);
    overflow: hidden;
  }
</style>
```

### Getting the Selected Item

When dropdowns are used with [menus](/components/menu), you can listen for the `gr-select` event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands.

<div class="example-block">
  <div class="dropdown-selection1">
    <gr-dropdown>
      <gr-button slot="trigger" caret>Edit</gr-button>
      <gr-menu>
        <gr-menu-item value="cut">Cut</gr-menu-item>
        <gr-menu-item value="copy">Copy</gr-menu-item>
        <gr-menu-item value="paste">Paste</gr-menu-item>
      </gr-menu>
    </gr-dropdown>
  </div>
</div>

<script>
  const container1 = document.querySelector('.dropdown-selection1');
  const dropdown1 = container1.querySelector('gr-dropdown');

  dropdown1.addEventListener('gr-select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>

```html
<div class="dropdown-selection">
  <gr-dropdown>
    <gr-button slot="trigger" caret>Edit</gr-button>
    <gr-menu>
      <gr-menu-item value="cut">Cut</gr-menu-item>
      <gr-menu-item value="copy">Copy</gr-menu-item>
      <gr-menu-item value="paste">Paste</gr-menu-item>
    </gr-menu>
  </gr-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('gr-dropdown');

  dropdown.addEventListener('gr-select', (event) => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event.

<div class="example-block">
  <div class="dropdown-selection-alt">
    <gr-dropdown>
      <gr-button slot="trigger" caret>Edit</gr-button>
      <gr-menu>
        <gr-menu-item value="cut">Cut</gr-menu-item>
        <gr-menu-item value="copy">Copy</gr-menu-item>
        <gr-menu-item value="paste">Paste</gr-menu-item>
      </gr-menu>
    </gr-dropdown>
  </div>

  <script>
    const container2 = document.querySelector('.dropdown-selection-alt');
    const cut = container2.querySelector('gr-menu-item[value="cut"]');
    const copy = container2.querySelector('gr-menu-item[value="copy"]');
    const paste = container2.querySelector('gr-menu-item[value="paste"]');

    cut.addEventListener('click', () => console.log('cut'));
    copy.addEventListener('click', () => console.log('copy'));
    paste.addEventListener('click', () => console.log('paste'));
  </script>
</div>

```html
<div class="dropdown-selection-alt">
  <gr-dropdown>
    <gr-button slot="trigger" caret>Edit</gr-button>
    <gr-menu>
      <gr-menu-item value="cut">Cut</gr-menu-item>
      <gr-menu-item value="copy">Copy</gr-menu-item>
      <gr-menu-item value="paste">Paste</gr-menu-item>
    </gr-menu>
  </gr-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection-alt');
  const cut = container.querySelector('gr-menu-item[value="cut"]');
  const copy = container.querySelector('gr-menu-item[value="copy"]');
  const paste = container.querySelector('gr-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>
```

## Properties

| Property            | Attribute         | Description                                                                                                                                | Type                                                                                                                                                                 | Default          |
| ------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `closeOnSelect`     | `close-on-select` | Determines whether the dropdown should hide when a menu item is selected.                                                                  | `boolean`                                                                                                                                                            | `true`           |
| `containingElement` | --                | The dropdown will close when the user interacts outside of this element (e.g. clicking).                                                   | `HTMLElement`                                                                                                                                                        | `undefined`      |
| `distance`          | `distance`        | The distance in pixels from which to offset the panel away from its trigger.                                                               | `number`                                                                                                                                                             | `2`              |
| `hoist`             | `hoist`           | Enable this option to prevent the panel from being clipped when the component is placed inside a container with `overflow: auto\|scroll`.  | `boolean`                                                                                                                                                            | `false`          |
| `open`              | `open`            | Indicates whether or not the dropdown is open. You can use this in lieu of the show/hide methods.                                          | `boolean`                                                                                                                                                            | `false`          |
| `placement`         | `placement`       | The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel inside of the viewport. | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom-start'` |
| `skidding`          | `skidding`        | The distance in pixels from which to offset the panel along its trigger.                                                                   | `number`                                                                                                                                                             | `0`              |

## Events

| Event           | Description                                                                                           | Type                |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------------------- |
| `gr-after-hide` | Emitted after the dropdown closes and all transitions are complete.                                   | `CustomEvent<void>` |
| `gr-after-show` | Emitted after the dropdown opens and all transitions are complete.                                    | `CustomEvent<void>` |
| `gr-hide`       | Emitted when the dropdown closes. Calling `event.preventDefault()` will prevent it from being closed. | `CustomEvent<void>` |
| `gr-show`       | Emitted when the dropdown opens. Calling `event.preventDefault()` will prevent it from being opened.  | `CustomEvent<void>` |

## Methods

### `focusOnTrigger() => Promise<void>`

Sets focus on the trigger.

#### Returns

Type: `Promise<void>`

### `hide() => Promise<void>`

Hides the dropdown panel

#### Returns

Type: `Promise<void>`

### `show() => Promise<void>`

Shows the dropdown panel

#### Returns

Type: `Promise<void>`

## Slots

| Slot        | Description                                              |
| ----------- | -------------------------------------------------------- |
| `(default)` | The dropdown's content.                                  |
| `"trigger"` | The dropdown's trigger, usually a `<gr-button>` element. |

## CSS custom properties

| Name                       | Description                            |
| -------------------------- | -------------------------------------- |
| `--panel-background-color` | Background color of the dropdown panel |
| `--panel-border-color`     | Border color of the button             |
| `--panel-border-radius`    | Border radius of the dropdown panel    |
| `--panel-box-shadow`       | Box shadow of the dropdown panel       |
| `--transition`             | Transition of the dropdown             |

## Dependencies

### Used by

- [gr-select](/components/select)
