---
title: Components usage - Graphite Design System
---

# Components usage

[[toc]]

## Browser support

We support only [modern browsers](https://browserslist.dev/?q=PiAxJSwgbGFzdCAyIHZlcnNpb25zLCBub3QgZGVhZCwgbm90IGllIDEx).

```bash
npx browserslist "> 1%, last 2 versions, not dead, not ie 11"
```

So it doesn't run on legacy browsers: IE11, Edge 18 & below (Edge before it moved to Chromium), and Safari 10.

## Usage with basic HTML

The easiest way to install Graphite components is with the CDN. A lightweight loader will be added to your page that registers components asynchronously as you use them. It's like magic. ✨

The CDN is optimized for performance by using caching, HTTP/2, etc.

Just add the following tags to your page.

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

Note: This loads the latest v1 release. Replace `@1` with a specific version number and build, for example `@1.2.2`, if you want to load a specific version, and be in control of updating to the latest version. For production, we recommend linking to a specific version number and build to avoid unexpected breakage from newer versions.

Then you can use the elements anywhere in your template, JSX, html etc.

For example:

```html
<gr-button href="https://www.way2web.nl">Way2Web</gr-button>
```

[An example of this setup](https://codesandbox.io/s/graphiteds-script-tag-example-9foz6)

## Usage with bundlers

Follow these instructions if you use a bundler such as webpack, vite, or rollup.

### Self lazy-loading components

Run:

```shell
npm install @graphiteds/core
```

Add this code to your main JS/TS file:

```js
// Import Graphite components
import { defineCustomElements } from '@graphiteds/core/loader';

// Core CSS required for Graphite components to work properly
import '@graphiteds/core/css/core.css';

// Optional CSS to prevent Flash Of Unstyled Content (FOUC)
import '@graphiteds/core/css/prevent-fouc.css';

// Register Graphite components
defineCustomElements(window);
```

Note: All components are part of your bundle, but only lazy-loaded by the browser when needed. Alternately, [cherry-pick components](#cherry-pick-components) for optimal bundle size. Or if you use some other bundler than webpack (because of [this issue](https://github.com/ionic-team/stencil/issues/2827)).

### Preload all components

Run:

```shell
npm install @graphiteds/core
```

Add this code to your main JS/TS file:

```js
// Import Graphite components
import { defineCustomElements } from '@graphiteds/core/dist/custom-elements';

// Core CSS required for Graphite components to work properly
import '@graphiteds/core/css/core.css';

// Register Graphite components
defineCustomElements(window);
```

Warning: Don't `import '@graphiteds/core/css/prevent-fouc.css'`, this is only needed for the lazy-loading components, and will result in invisible components.

Note: This is not recommended for production unless you use all Gaphite components in your project. If you only use a few, the following solution is recommended. Although a bit more work.

### Cherry-pick components

Run:

```shell
npm install @graphiteds/core
```

Add code like this to your main JS/TS file, depending on the components you use:

```js
import { GrButton } from '@graphiteds/core/components/gr-button';
import { GrSpinner } from '@graphiteds/core/components/gr-spinner';

// Core CSS required for Graphite components to work properly
import '@graphiteds/core/css/core.css';

customElements.define('gr-button', GrButton);
customElements.define('gr-spinner', GrSpinner);
```

Warning: Don't `import '@graphiteds/core/css/prevent-fouc.css'`, this is only needed for the lazy-loading components, and will result in invisible components.

This enables the bundler to remove unused Graphite components from your bundle (tree-shaking). If you use Webpack, we recommend to use Webpack 5 to make the most out of this improvement.

Note: components may depend on other components to work correctly. Always check the dependencies in the documentation. For example, the `gr-button` depends on `gr-spinner` for the `loading` attribute. So you need to define them both as custom elements.

## Usage with Vue 3

We offer [Vue 3](https://v3.vuejs.org/) specific building blocks on top of `@graphiteds/core` components for optimal DX (typings, v-model support, out of the box tree-shaking, etc.).

We recommend using [vite](https://vitejs.dev/) or otherwise [vue-cli v5](https://next.cli.vuejs.org/) (with Webpack 5) for the best bundle sizes (due to tree-shaking). If you want to migrate from vue-cli v4 to v5: [follow this guide](https://next.cli.vuejs.org/migrations/migrate-from-v4.html).

Run:

```shell
npm install @graphiteds/vue
```

Edit the `main.js` or `main.ts` file of a Vue 3 project like this:

```js
import { createApp } from 'vue';
import App from './App.vue';
import { GraphiteVue } from '@graphiteds/vue';

// Core CSS required for Graphite components to work properly
import '@graphiteds/vue/css/core.css';

createApp(App).use(GraphiteVue).mount('#app');
```

Import the component(s) you want to use:

```js
import { GrButton } from '@graphiteds/vue';
```

Use it in your template as any Vue component:

```html
// In kebab-case
<gr-button href="https://www.way2web.nl">Way2Web</gr-button>

// Or PascalCase
<GrButton href="https://www.way2web.nl">Way2Web</GrButton>
```

We recommend using kebab-case for our components and PascalCase for your own Vue components to make them visible distinct.

[An example of this setup using vue-cli v4](https://codesandbox.io/s/graphiteds-vue3-example-jhk03)

### Recommended editors

[VSCode](https://code.visualstudio.com) with [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) and this setting:

```json
"vetur.experimental.templateInterpolationService": true
```

Or [WebStorm](https://www.jetbrains.com/webstorm/).

## Usage with Vue 2

If you use Vue with a direct script include, [look at this example](https://codesandbox.io/s/graphiteds-script-tag-with-vue-example-kouct) to get up and running quickly.

Otherwise when using a bundler, follow these steps:

Run:

```shell
npm install @graphiteds/core
```

Edit the `main.js` or `main.ts` file of a Vue 2 project to include:

```js
// Import Graphite components
import { defineCustomElements } from '@graphiteds/core/loader';

// Core CSS required for Graphite components to work properly
import '@graphiteds/core/css/core.css';

// Optional CSS to prevent Flash Of Unstyled Content (FOUC)
import '@graphiteds/core/css/prevent-fouc.css';

// ...

// configure Vue.js to ignore Graphite components
Vue.config.ignoredElements = [/gr-\w*/];

// Register Graphite components
defineCustomElements(window);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
```

The components should then be available in any of the Vue components:

```html
<template>
  <gr-button href="https://www.way2web.nl">Way2Web</gr-button>
</template>
```

Vue provides several different ways to install and use the framework in an application. The above technique has been tested on a Vue 2 application that was created using the vue-cli. A similar technique should work if the application was generated using other options.

[An example of this setup](https://codesandbox.io/s/graphiteds-vue2-example-q7o2c)

Note: All components are part of your bundle, but only lazy-loaded by the browser when needed. Alternately, [cherry-pick components](#cherry-pick-components) for optimal bundle size. Or if you use some other bundler than webpack (because of [this issue](https://github.com/ionic-team/stencil/issues/2827)).

### Binding Complex Data

When binding complex data such as objects and arrays, use the `.prop` modifier to make Vue bind them as a property instead of an attribute:

```html
<gr-example :options.prop="myOptions"></gr-example>
```

Note: currently we have no props in our components that need this.

### Two-way Binding

One caveat is there's [no support for v-model on custom elements in Vue 2](https://github.com/vuejs/vue/issues/7830), but you can still achieve two-way binding manually:

```html
<!-- This doesn't work -->
<gr-input v-model="name"></gr-input>

<!-- This works, but it's a bit longer -->
<gr-input :value="name" @gr-change="name = $event.target.value"></gr-input>
```

If that's too verbose, you can use a custom directive instead.

### Using a Custom Directive

You can use [this utility](https://www.npmjs.com/package/@graphiteds/vue2-gr-model) to add a custom directive to Vue that will work just like v-model but for Graphite components. To install it, use this command.

```shell
npm install @graphiteds/vue2-gr-model
```

Next, import the directive and enable it like this.

```js
import GraphiteModelDirective from '@graphiteds/vue2-gr-model';

Vue.config.ignoredElements = [/^gr-/];
Vue.use(GraphiteModelDirective);

// Your init here
new Vue({ ... });
```

Now you can use the `v-gr-model` directive to keep your data in sync!

```html
<gr-input v-gr-model="name"></gr-input>
```

### Usage with Nuxt 2

Run:

```shell
npm install @graphiteds/core
```

Edit `nuxt.config.js` to include:

```js
module.exports = {
  vue: {
    config: {
      ignoredElements: [/gr-\w*/],
    },
  },
};
```

Add `plugins/graphiteds.js` with the following content:

```js
// Import Graphite components
import { defineCustomElements } from '@graphiteds/core/loader';

// Core CSS required for Graphite components to work properly
import '@graphiteds/core/css/core.css';

// Optional CSS to prevent Flash Of Unstyled Content (FOUC)
import '@graphiteds/core/css/prevent-fouc.css';

export default function () {
  if (process.client) {
    defineCustomElements(window);
  }
}
```

Add the plugin to the project configuration (`nuxt.config.js`):

```js
module.exports = {
  plugins: ['~/plugins/graphiteds.js'],
};
```

The components should then be available in any of the Nuxt pages & components:

```html
<template>
  <gr-button href="https://www.way2web.nl">Way2Web</gr-button>
</template>
```

The instructions above about [Binding Complex Data](#binding-complex-data), [Two-way Binding](#two-way-binding), and [Using a Custom Directive](#using-a-custom-directive) also apply here (except you need to do the `Vue.use(GraphiteModelDirective)` in the `graphiteds.js` plugin).

All components are part of your bundle but only lazy-loaded by the browser when needed. Alternately, [cherry-pick components](#cherry-pick-components) for optimal bundle size. Or if you use some other bundler than webpack (because of [this issue](https://github.com/ionic-team/stencil/issues/2827)).

[An example of this setup](https://codesandbox.io/s/graphiteds-nuxt2-example-jyvc9)

## Usage with React

We offer React specific building blocks on top of `@graphiteds/core` components, because React [does not play nice](https://custom-elements-everywhere.com/#react) with custom elements.

Run:

```shell
npm install @graphiteds/react
```

In your `index.js` or `index.ts` add the following code:

```js
// Core CSS required for Graphite components to work properly
import '@graphiteds/react/css/core.css';

// Optional CSS to prevent Flash Of Unstyled Content (FOUC)
import '@graphiteds/react/css/prevent-fouc.css';
```

Import the component(s) you want to use:

```js
import { GrButton } from '@graphiteds/react';
```

Use it in your JSX as any React component:

```html
<GrButton href="https://www.way2web.nl">Way2Web</GrButton>
```

[An example of this setup](https://codesandbox.io/s/graphiteds-react-example-yhr9p)

## Usage with Angular

Angular bindings are possible for optimal DX (typings, ngModel & reactive forms support, etc.). Please let us know if you would like them, and we will consider them.

Otherwise, to use our web components directly within an Angular CLI project, run:

```shell
npm install @graphiteds/core
```

Include `CUSTOM_ELEMENTS_SCHEMA` in any module that uses our components. This allows the use of the web components in the HTML markup without the compiler producing errors. This code should be added into the `AppModule` and in every other modules that uses our components. Here is an example of adding it to `AppModule`:

```js
// ...
// Import custom elements schema
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  // ...
  // Add custom elements schema to NgModule
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

The final step is to load and register the Graphite components in the browser. `@graphiteds/core` includes a main function that handles this. That function is called `defineCustomElements()` and it needs to be called once during the bootstrapping of your application. One convenient place to do this is in `main.ts` as such:

```js
// Import Graphite components
import { defineCustomElements } from '@graphiteds/core/loader';

// Core CSS required for Graphite components to work properly
import '@graphiteds/core/css/core.css';

// Optional CSS to prevent Flash Of Unstyled Content (FOUC)
import '@graphiteds/core/css/prevent-fouc.css';

// ...

// Register Graphite components
defineCustomElements(window);
```

Once included, components can be used in your HTML markup as in the following example:

```html
<gr-button variant="primary">Send</gr-button>
```

[An example of this setup](https://codesandbox.io/s/graphiteds-angular-example-e4gju)

## Usage with Livewire

Just add the following tags to your page.

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

Then you can use the elements anywhere in your blade templates, but you have to use `wire:ignore`

For example:

```html
<gr-button wire:click="increment" variant="primary" circle wire:ignore>
  <div slot="icon-only">+</div>
</gr-button>
```

## Usage with other frameworks

You can either use the `@graphiteds/core` package directly or load the components [from our CDN](#usage-with-basic-html). Please see [Custom Elements Everywhere](https://custom-elements-everywhere.com/) for more details about wider support in Frameworks like Preact, Svelte, Solid, Riot.js and similar.