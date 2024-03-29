const htmlmin = require('html-minifier');
const dateFns = require('date-fns');
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItTOC = require('markdown-it-table-of-contents');
// const hydrate = require('@grapiteds/core/hydrate');

const Image = require('@11ty/eleventy-img');

async function animatedImageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [500, 1000],
    formats: ['webp'],
    outputDir: './_site/img/',
    sharpOptions: {
      animated: true,
    },
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async',
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'node_modules/@graphiteds/core/dist/core': 'assets/graphiteds',
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPlugin(lazyImagesPlugin, {
    transformImgPath: (imgPath) => {
      if (imgPath.startsWith('http://') || imgPath.startsWith('https://')) {
        // Handle remote file
        return imgPath;
      } else {
        return `./src/${imgPath}`;
      }
    },
  });

  eleventyConfig.setEjsOptions({
    rmWhitespace: true,
    context: {
      dateFns,
    },
  });

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
  })
    .use(markdownItAnchor, {
      level: 2,
      permalink: markdownItAnchor.permalink.headerLink(),
    })
    .use(markdownItTOC, {
      includeLevel: [2],
      containerHeaderHtml: '<div class="toc-container-header">Contents</div>',
    });

  eleventyConfig.setLibrary('md', markdownLibrary);

  eleventyConfig.setBrowserSyncConfig({
    files: ['./_site/assets/styles/main.css', './_site/assets/js/main.js'],
  });

  // Disabled for now, because client side hydration doesn't work well for all components (double elements in the shadow dom)
  /*eleventyConfig.addTransform("hydrate", async(content, outputPath) => {
    if (process.env.ELEVENTY_ENV == "production") {
      if (outputPath.endsWith(".html")) {
        try {
          const results = await hydrate.renderToString(content, {
            removeUnusedStyles: false,
          })
          return results.html
        } catch (error) {
          return error
        }
      }
    }
    return content
  })*/

  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: false,
        collapseWhitespace: false,
        minifyJS: true,
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.addNunjucksAsyncShortcode('animated-image', animatedImageShortcode);
  eleventyConfig.addLiquidShortcode('animated-image', animatedImageShortcode);
  eleventyConfig.addJavaScriptFunction('animated-image', animatedImageShortcode);

  return {
    dir: { input: 'src', output: '_site', data: '_data' },
  };
};
