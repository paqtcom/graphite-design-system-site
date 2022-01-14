# Graphite Design System Site

The official [Graphite Design System documentation](https://graphitedesignsystem.com), built with [Eleventy](https://www.11ty.dev/).

## Development

Make sure you are using Node v16 (with npm v8). If you use `nvm`, you can run `nvm use`.

Run the following command on your local environment:

```bash
git clone https://github.com/paqtcom/graphite-design-system-site graphite-design-system-site
cd graphite-design-system-site
npm install
```

Then, you can run locally in development mode with live reload:

```bash
npm run dev
```

Open http://localhost:8080 with your favorite browser.

## Update to latest `@graphiteds/core` version

To update to the latest Graphite release use [this tool](https://www.jsdelivr.com/package/npm/@graphiteds/core?tab=collection) to generate the correct `integrity` hash (but make sure you use `type="module"` for the script tag). [Check the MDN docs](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) for more info about this.

Note: don't forget to change the version number in the the top right of the site.

## Preview production mode

You can see the results locally in production mode with:

```bash
npm run serve
```

## Deploy to production

The master branch is automatically deployed to [Netlify](https://www.netlify.com/) on https://graphitedesignsystem.com.

Plus, you can automatically preview PR's on Netlify.

## Attribution

### Eleventy Starter Boilerplate

We used this [starter project](https://github.com/ixartz/Eleventy-Starter-Boilerplate).

```
MIT License

Copyright (c) 2020 Rem W.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### Nuxt Content

The layout is based on or inspired by [Nuxt Content](https://content.nuxtjs.org/).

```
MIT License

Copyright (c) 2020 Nuxt.js with the contributions of:
- Sebastien Chopin (NuxtJS Company)
- Alexandre Chopin (NuxtJS Company)
- Benjamin Canac (NuxtJS Company)
- Sergey Bedritsky (NuxtJS Company)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### Ionic Framework

Some documentation is based on or inspired by the [Ionic Framework](https://ionicframework.com/).

### Shoelace

Some documentation is based on or inspired by [Shoelace](https://shoelace.style/).

### Spectrum Design System

Some documentation is based on or inspired by the [Spectrum Design System](https://spectrum.adobe.com/).

### Carbon Design System

Some documentation is based on or inspired by the [Carbon Design System](https://www.carbondesignsystem.com/).

### Polaris Design System

Some documentation is based on or inspired by the [Polaris Design System](https://polaris.shopify.com/).
