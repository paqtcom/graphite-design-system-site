---
title: Tab Panel - Graphite Design System
---

# Tab Panel

`<gr-tab-panel> | GrTabPanel`

[[toc]]

<p class="intro">Tab panels are used to place the <a href="/components/tab">tabs</a>  content in.</p>

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

## Properties

| Property | Attribute | Description                                   | Type      | Default |
| -------- | --------- | --------------------------------------------- | --------- | ------- |
| `name`   | `name`    | Set the gr-tab-panel name.                    | `string`  | `''`    |
| `active` | `active`  | Indicates whether or not the panel is active. | `boolean` | `false` |

## Slots

| Slot        | Description             |
| ----------- | ----------------------- |
| `(default)` | The tab panels content. |

## CSS custom properties

| Name        | Description              |
| ----------- | ------------------------ |
| `--padding` | Padding of the tab panel |
