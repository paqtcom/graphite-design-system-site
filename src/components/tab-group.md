---
title: Tab Group - Graphite Design System
---

# Tab Group

`<gr-tab-group> | GrTabGroup`

[[toc]]

<p class="intro">Tab groups are used to group multiple tabs so they can show content one section at a time.</p>

You can use [tabs](/components/tab) and [tab panels](/components/tab-panels) to compose a menu.

<div class="example-block">
  <gr-tab-group>
    <gr-tab slot="nav" panel="first">Option 1</gr-tab>
    <gr-tab slot="nav" panel="second">Option 2</gr-tab>
    <gr-tab-panel name="first">Content 1</gr-tab-panel>
    <gr-tab-panel name="second">Content 2</gr-tab-panel>
  </gr-tab-group> 
</div>

```html
<gr-tab-group>
  <gr-tab slot="nav" panel="first">Option 1</gr-tab>
  <gr-tab slot="nav" panel="second">Option 2</gr-tab>

  <gr-tab-panel name="first">Content 1</gr-tab-panel>
  <gr-tab-panel name="second">Content 2</gr-tab-panel>
</gr-tab-group>
```

## Options

### Placement

The preferred placement of the tabs can be set with the `placement` attribute.

#### Tabs on bottom

<div class="example-block">
  <gr-tab-group placement="bottom">
    <gr-tab slot="nav" panel="first">Option 1</gr-tab>
    <gr-tab slot="nav" panel="second">Option 2</gr-tab>
    <gr-tab-panel name="first">Content 1</gr-tab-panel>
    <gr-tab-panel name="second">Content 2</gr-tab-panel>
  </gr-tab-group> 
</div>

```html
<gr-tab-group placement="bottom">
  <gr-tab slot="nav" panel="first">Option 1</gr-tab>
  <gr-tab slot="nav" panel="second">Option 2</gr-tab>

  <gr-tab-panel name="first">Content 1</gr-tab-panel>
  <gr-tab-panel name="second">Content 2</gr-tab-panel>
</gr-tab-group>
```

#### Tabs on start

<div class="example-block">
  <gr-tab-group placement="start">
    <gr-tab slot="nav" panel="first">Option 1</gr-tab>
    <gr-tab slot="nav" panel="second">Option 2</gr-tab>
    <gr-tab-panel name="first">Content 1</gr-tab-panel>
    <gr-tab-panel name="second">Content 2</gr-tab-panel>
  </gr-tab-group> 
</div>

```html
<gr-tab-group placement="start">
  <gr-tab slot="nav" panel="first">Option 1</gr-tab>
  <gr-tab slot="nav" panel="second">Option 2</gr-tab>

  <gr-tab-panel name="first">Content 1</gr-tab-panel>
  <gr-tab-panel name="second">Content 2</gr-tab-panel>
</gr-tab-group>
```

#### Tabs on end

<div class="example-block">
  <gr-tab-group placement="end">
    <gr-tab slot="nav" panel="first">Option 1</gr-tab>
    <gr-tab slot="nav" panel="second">Option 2</gr-tab>
    <gr-tab-panel name="first">Content 1</gr-tab-panel>
    <gr-tab-panel name="second">Content 2</gr-tab-panel>
  </gr-tab-group> 
</div>

```html
<gr-tab-group placement="end">
  <gr-tab slot="nav" panel="first">Option 1</gr-tab>
  <gr-tab slot="nav" panel="second">Option 2</gr-tab>

  <gr-tab-panel name="first">Content 1</gr-tab-panel>
  <gr-tab-panel name="second">Content 2</gr-tab-panel>
</gr-tab-group>
```

### Sizes

Use the `size` attribute to change a button's size.

<div class="example-block">
  <gr-tab-group tab-size="small">
    <gr-tab slot="nav" panel="first">Option 1</gr-tab>
    <gr-tab slot="nav" panel="second">Option 2</gr-tab>
    <gr-tab-panel name="first">Content 1</gr-tab-panel>
    <gr-tab-panel name="second">Content 2</gr-tab-panel>
  </gr-tab-group>

  <gr-tab-group>
    <gr-tab slot="nav" panel="first">Option 1</gr-tab>
    <gr-tab slot="nav" panel="second">Option 2</gr-tab>
    <gr-tab-panel name="first">Content 1</gr-tab-panel>
    <gr-tab-panel name="second">Content 2</gr-tab-panel>
  </gr-tab-group>

  <gr-tab-group tab-size="large">
    <gr-tab slot="nav" panel="first">Option 1</gr-tab>
    <gr-tab slot="nav" panel="second">Option 2</gr-tab>
    <gr-tab-panel name="first">Content 1</gr-tab-panel>
    <gr-tab-panel name="second">Content 2</gr-tab-panel>
  </gr-tab-group>
</div>

```html
<gr-tab-group tab-size="small">
  <gr-tab slot="nav" panel="first">Option 1</gr-tab>
  <gr-tab slot="nav" panel="second">Option 2</gr-tab>
  <gr-tab-panel name="first">Content 1</gr-tab-panel>
  <gr-tab-panel name="second">Content 2</gr-tab-panel>
</gr-tab-group>

<gr-tab-group>
  <gr-tab slot="nav" panel="first">Option 1</gr-tab>
  <gr-tab slot="nav" panel="second">Option 2</gr-tab>
  <gr-tab-panel name="first">Content 1</gr-tab-panel>
  <gr-tab-panel name="second">Content 2</gr-tab-panel>
</gr-tab-group>

<gr-tab-group tab-size="large">
  <gr-tab slot="nav" panel="first">Option 1</gr-tab>
  <gr-tab slot="nav" panel="second">Option 2</gr-tab>
  <gr-tab-panel name="first">Content 1</gr-tab-panel>
  <gr-tab-panel name="second">Content 2</gr-tab-panel>
</gr-tab-group>
```

#### Returns

Type: `Promise<void>`

## Slots

| Slot        | Description                                   |
| ----------- | --------------------------------------------- |
| `(default)` | The default slot where tab panels are placed. |
| `nav`       | The slot where the tabs are placed.           |

## CSS custom properties

| Name                   | Description                   |
| ---------------------- | ----------------------------- |
| `--track-color`        | Border color of the track     |
| `--indicator-color`    | Border color of the indicator |
| `--border-track-width` | Border width of the track     |
| `--border-width`       | Border width of the indicator |
