---
title: Components - way-dropdown
---

# way-dropdown

<div class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

Dropdowns expose additional content that "drops down" in a panel.

Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.

Dropdowns are designed to work well with [menus](/components/menu) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [select](/components/select)). The API gives you complete control over showing, hiding, and positioning the panel.

<way-dropdown>
  <way-button slot="trigger" caret>Dropdown</way-button>
  <way-menu>
    <way-menu-item>Dropdown Item 1</way-menu-item>
    <way-menu-item>Dropdown Item 2</way-menu-item>
    <way-menu-item>Dropdown Item 3</way-menu-item>
    <way-menu-divider></way-menu-divider>
    <way-menu-item checked>Checked</way-menu-item>
    <way-menu-item disabled>Disabled</way-menu-item>
    <way-menu-divider></way-menu-divider>
    <way-menu-item>
      Start Icon
      <ion-icon slot="start" name="gift-outline"></ion-icon>
    </way-menu-item>
    <way-menu-item>
      End Icon
      <ion-icon slot="end" name="heart-outline"></ion-icon>
    </way-menu-item>
  </way-menu>
</way-dropdown>

```html
<way-dropdown>
  <way-button slot="trigger" caret>Dropdown</way-button>
  <way-menu>
    <way-menu-item>Dropdown Item 1</way-menu-item>
    <way-menu-item>Dropdown Item 2</way-menu-item>
    <way-menu-item>Dropdown Item 3</way-menu-item>
    <way-menu-divider></way-menu-divider>
    <way-menu-item checked>Checked</way-menu-item>
    <way-menu-item disabled>Disabled</way-menu-item>
    <way-menu-divider></way-menu-divider>
    <way-menu-item>
      Start Icon
      <ion-icon slot="start" name="gift-outline"></ion-icon>
    </way-menu-item>
    <way-menu-item>
      End Icon
      <ion-icon slot="end" name="heart-outline"></ion-icon>
    </way-menu-item>
  </way-menu>
</way-dropdown>
```

## Sections

<div class="flex items-center">
<a href="#examples" class="mr-3">Examples</a> 
<a href="#properties" class="mr-3">Properties</a> 
<a href="#events" class="mr-3">Events</a> 
<a href="#methods" class="mr-3">Methods</a> 
<a href="#slots" class="mr-3">Slots</a> 
<a href="#css-custom-properties">CSS Custom Properties</a> 
</div>

</div>

<div id="examples" class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

## Examples

### Placement

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

<way-dropdown placement="top-start">
  <way-button slot="trigger" caret>Edit</way-button>
  <way-menu>
    <way-menu-item>Cut</way-menu-item>
    <way-menu-item>Copy</way-menu-item>
    <way-menu-item>Paste</way-menu-item>
    <way-menu-divider></way-menu-divider>
    <way-menu-item>Find</way-menu-item>
    <way-menu-item>Replace</way-menu-item>
  </way-menu>
</way-dropdown>

```html
<way-dropdown placement="top-start">
  <way-button slot="trigger" caret>Edit</way-button>
  <way-menu>
    <way-menu-item>Cut</way-menu-item>
    <way-menu-item>Copy</way-menu-item>
    <way-menu-item>Paste</way-menu-item>
    <way-menu-divider></way-menu-divider>
    <way-menu-item>Find</way-menu-item>
    <way-menu-item>Replace</way-menu-item>
  </way-menu>
</way-dropdown>
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

<way-dropdown distance="30">
  <way-button slot="trigger" caret>Edit</way-button>
  <way-menu>
    <way-menu-item>Cut</way-menu-item>
    <way-menu-item>Copy</way-menu-item>
    <way-menu-item>Paste</way-menu-item>
    <way-menu-divider></way-menu-divider>
    <way-menu-item>Find</way-menu-item>
    <way-menu-item>Replace</way-menu-item>
  </way-menu>
</way-dropdown>

```html
<way-dropdown distance="30">
  <way-button slot="trigger" caret>Edit</way-button>
  <way-menu>
    <way-menu-item>Cut</way-menu-item>
    <way-menu-item>Copy</way-menu-item>
    <way-menu-item>Paste</way-menu-item>
    <way-menu-divider></way-menu-divider>
    <way-menu-item>Find</way-menu-item>
    <way-menu-item>Replace</way-menu-item>
  </way-menu>
</way-dropdown>
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

<way-dropdown skidding="30">
  <way-button slot="trigger" caret>Edit</way-button>
  <way-menu>
    <way-menu-item>Cut</way-menu-item>
    <way-menu-item>Copy</way-menu-item>
    <way-menu-item>Paste</way-menu-item>
    <way-menu-divider></way-menu-divider>
    <way-menu-item>Find</way-menu-item>
    <way-menu-item>Replace</way-menu-item>
  </way-menu>
</way-dropdown>

```html
<way-dropdown skidding="30">
  <way-button slot="trigger" caret>Edit</way-button>
  <way-menu>
    <way-menu-item>Cut</way-menu-item>
    <way-menu-item>Copy</way-menu-item>
    <way-menu-item>Paste</way-menu-item>
    <way-menu-divider></way-menu-divider>
    <way-menu-item>Find</way-menu-item>
    <way-menu-item>Replace</way-menu-item>
  </way-menu>
</way-dropdown>
```

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

<div class="dropdown-hoist">
  <way-dropdown>
    <way-button slot="trigger" caret>No Hoist</way-button>
    <way-menu>
      <way-menu-item>Item 1</way-menu-item>
      <way-menu-item>Item 2</way-menu-item>
      <way-menu-item>Item 3</way-menu-item>
    </way-menu>
  </way-dropdown>

  <way-dropdown hoist>
    <way-button slot="trigger" caret>Hoist</way-button>
    <way-menu>
      <way-menu-item>Item 1</way-menu-item>
      <way-menu-item>Item 2</way-menu-item>
      <way-menu-item>Item 3</way-menu-item>
    </way-menu>
  </way-dropdown>
</div>

<style>
  .dropdown-hoist {
    border: solid 2px var(--way-panel-border-color);
    padding: var(--way-spacing-medium);
    overflow: hidden;
  }
</style>

```html
<div class="dropdown-hoist">
  <way-dropdown>
    <way-button slot="trigger" caret>No Hoist</way-button>
    <way-menu>
      <way-menu-item>Item 1</way-menu-item>
      <way-menu-item>Item 2</way-menu-item>
      <way-menu-item>Item 3</way-menu-item>
    </way-menu>
  </way-dropdown>

  <way-dropdown hoist>
    <way-button slot="trigger" caret>Hoist</way-button>
    <way-menu>
      <way-menu-item>Item 1</way-menu-item>
      <way-menu-item>Item 2</way-menu-item>
      <way-menu-item>Item 3</way-menu-item>
    </way-menu>
  </way-dropdown>
</div>

<style>
  .dropdown-hoist {
    border: solid 2px var(--way-panel-border-color);
    padding: var(--way-spacing-medium);
    overflow: hidden;
  }
</style>
```

### Getting the Selected Item

When dropdowns are used with [menus](/components/menu), you can listen for the `way-select` event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands.

<div class="dropdown-selection1">
  <way-dropdown>
    <way-button slot="trigger" caret>Edit</way-button>
    <way-menu>
      <way-menu-item value="cut">Cut</way-menu-item>
      <way-menu-item value="copy">Copy</way-menu-item>
      <way-menu-item value="paste">Paste</way-menu-item>
    </way-menu>
  </way-dropdown>
</div>

<script>
  const container1 = document.querySelector('.dropdown-selection1');
  const dropdown1 = container1.querySelector('way-dropdown');

  dropdown1.addEventListener('way-select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>

```html
<div class="dropdown-selection">
  <way-dropdown>
    <way-button slot="trigger" caret>Edit</way-button>
    <way-menu>
      <way-menu-item value="cut">Cut</way-menu-item>
      <way-menu-item value="copy">Copy</way-menu-item>
      <way-menu-item value="paste">Paste</way-menu-item>
    </way-menu>
  </way-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('way-dropdown');

  dropdown.addEventListener('way-select', (event) => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event.

<div class="dropdown-selection-alt">
  <way-dropdown>
    <way-button slot="trigger" caret>Edit</way-button>
    <way-menu>
      <way-menu-item value="cut">Cut</way-menu-item>
      <way-menu-item value="copy">Copy</way-menu-item>
      <way-menu-item value="paste">Paste</way-menu-item>
    </way-menu>
  </way-dropdown>
</div>

<script>
  const container2 = document.querySelector('.dropdown-selection-alt');
  const cut = container2.querySelector('way-menu-item[value="cut"]');
  const copy = container2.querySelector('way-menu-item[value="copy"]');
  const paste = container2.querySelector('way-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>

```html
<div class="dropdown-selection-alt">
  <way-dropdown>
    <way-button slot="trigger" caret>Edit</way-button>
    <way-menu>
      <way-menu-item value="cut">Cut</way-menu-item>
      <way-menu-item value="copy">Copy</way-menu-item>
      <way-menu-item value="paste">Paste</way-menu-item>
    </way-menu>
  </way-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection-alt');
  const cut = container.querySelector('way-menu-item[value="cut"]');
  const copy = container.querySelector('way-menu-item[value="copy"]');
  const paste = container.querySelector('way-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>
```

</div>

<div id="properties" class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

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

</div>

<div id="events" class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

## Events

| Event            | Description                                                                                           | Type               |
| ---------------- | ----------------------------------------------------------------------------------------------------- | ------------------ |
| `way-after-hide` | Emitted after the dropdown closes and all transitions are complete.                                   | `CustomEvent<any>` |
| `way-after-show` | Emitted after the dropdown opens and all transitions are complete.                                    | `CustomEvent<any>` |
| `way-hide`       | Emitted when the dropdown closes. Calling `event.preventDefault()` will prevent it from being closed. | `CustomEvent<any>` |
| `way-show`       | Emitted when the dropdown opens. Calling `event.preventDefault()` will prevent it from being opened.  | `CustomEvent<any>` |

</div>

<div id="methods" class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

## Methods

### `hide() => Promise<void>`

Hides the dropdown panel

#### Returns

Type: `Promise<void>`

### `show() => Promise<void>`

Shows the dropdown panel

#### Returns

Type: `Promise<void>`

</div>

<div id="slots" class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

## Slots

| Slot        | Description                                               |
| ----------- | --------------------------------------------------------- |
| `(default)` | The dropdown's content.                                   |
| `"trigger"` | The dropdown's trigger, usually a `<way-button>` element. |

</div>

<div id="css-custom-properties" class="block p-8 mb-5 bg-white rounded-lg shadow-lg">

## CSS Custom Properties

| Name                       | Description                            |
| -------------------------- | -------------------------------------- |
| `--panel-background-color` | Background color of the dropdown panel |
| `--panel-border-color`     | Border color of the button             |
| `--panel-border-radius`    | Border radius of the dropdown panel    |
| `--panel-box-shadow`       | Box shadow of the dropdown panel       |
| `--transition`             | Transition of the dropdown             |

</div>
