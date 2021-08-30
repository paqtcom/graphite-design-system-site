---
title: Components - Graphite Design System
---

# Components

[Button](/components/button)

<div class="example-block">
  <gr-button>Button</gr-button>
</div>

[Checkbox](/components/checkbox) & [field group](/components/field-group)

<div class="example-block">
  <gr-field-group label="Select options">
    <gr-checkbox>Option 1</gr-checkbox>
    <gr-checkbox>Option 2</gr-checkbox>
    <gr-checkbox>Option 3</gr-checkbox>
  </gr-field-group>
</div>

[Dropdown](/components/dropdown)

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

[Input](/components/input)

<div class="example-block">
  <gr-input label="Name"></gr-input>
</div>

[Menu](/components/menu), [menu item](/components/menu-item), [menu label](/components/menu-label), and [menu divider](/components/menu-divider)

<div class="example-block">
  <gr-menu style="max-width: 200px; border: solid 1px var(--gr-panel-border-color); border-radius: var(--gr-border-radius-medium);">
    <gr-menu-label>Fruits</gr-menu-label>
    <gr-menu-item value="apple">Apple</gr-menu-item>
    <gr-menu-item value="banana">Banana</gr-menu-item>
    <gr-menu-item value="orange">Orange</gr-menu-item>
    <gr-menu-divider></gr-menu-divider>
    <gr-menu-label>Vegetables</gr-menu-label>
    <gr-menu-item value="broccoli">Broccoli</gr-menu-item>
    <gr-menu-item value="carrot">Carrot</gr-menu-item>
    <gr-menu-item value="zucchini">Zucchini</gr-menu-item>
  </gr-menu>
</div>

[Radio](/components/radio) & [radio group](/components/radio-group)

<div class="example-block">
  <gr-radio-group label="Select an option" value="1">
    <gr-radio value="1">Option 1</gr-radio>
    <gr-radio value="2">Option 2</gr-radio>
    <gr-radio value="3">Option 3</gr-radio>
  </gr-radio-group>
</div>

[Select](/components/select)

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

[Spinner](/components/spinner)

<div class="example-block">
  <gr-spinner></gr-spinner>
</div>

[Tag](/components/tag)

<div class="example-block">
  <gr-tag type="primary">Primary</gr-tag>
  <gr-tag type="success">Success</gr-tag>
  <gr-tag type="info">Info</gr-tag>
  <gr-tag type="warning">Warning</gr-tag>
  <gr-tag type="danger">Danger</gr-tag>
</div>

[Textarea](/components/textarea)

<div class="example-block">
  <gr-textarea label="Feedback"></gr-textarea>
</div>
