---
title: Developers - Graphite Design System
---

# Developers

<p class="intro">If you’re just starting out developing with Graphite, here’s everything you need to get up and running.</p>

Graphite makes it easy to implement and use its [components](/components/overview) across any framework or no framework at all. We accomplish this by using standardized web platform APIs and Web Components.

## Quick start

Add the following code to your page:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@graphiteds/core@1/css/graphite.bundle.css"
/>
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@graphiteds/core@1/dist/core/core.esm.js"
></script>
```

Now you have access to all of Graphite's components! Try adding a button:

```html
<gr-button>Click me</gr-button>
```

See the [components usage](/guidelines/components-usage) guidelines for more details and other ways to install Graphite.

For an up-to-date list of components included and their respective documentations, see the [components overview page](/components/overview).

For learning how to customize the components, see the [customizing guidelines](/guidelines/customizing).