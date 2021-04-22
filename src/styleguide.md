---
title: Styleguide - Way2Web Design System
---

## Styleguide

### Theme color tokens

<div class="block p-8 mb-5 bg-white rounded-lg shadow-lg">
<div class="grid grid-cols-3 gap-4 mb-12">
  <div>
    <legend class="mb-2 font-bold border-b">Primary</legend>
    <div>
      <span>--way-color-primary</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-primary"></span>
      </div>
    </div>
    <div>
      <span>--way-color-primary-contrast</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 border bg-primaryContrast"></span>
      </div>
    </div>
    <div>
      <span>--way-color-primary-shade</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-primaryShade"></span>
      </div>
    </div>
    <div>
      <span>--way-color-primary-tint</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-primaryTint"></span>
      </div>
    </div>
  </div>

  <div>
    <legend class="mb-2 font-bold border-b">Secondary</legend>
    <div>
      <span>--way-color-secondary</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-secondary"></span>
      </div>
    </div>
    <div>
      <span>--way-color-secondary-contrast</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 border bg-secondaryContrast"></span>
      </div>
    </div>
    <div>
      <span>--way-color-secondary-shade</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-secondaryShade"></span>
      </div>
    </div>
    <div>
      <span>--way-color-secondary-tint</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-secondaryTint"></span>
      </div>
    </div>
  </div>

  <div>
    <legend class="mb-2 font-bold border-b">Danger</legend>
    <div>
      <span>--way-color-danger</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-danger"></span>
      </div>
    </div>
    <div>
      <span>--way-color-danger-contrast</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 border bg-dangerContrast"></span>
      </div>
    </div>
    <div>
      <span>--way-color-danger-shade</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-dangerShade"></span>
      </div>
    </div>
    <div>
      <span>--way-color-danger-tint</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-dangerTint"></span>
      </div>
    </div>
  </div>
</div>

<div class="grid grid-cols-3 gap-4">
  <div>
    <legend class="mb-2 font-bold border-b">Light</legend>
    <div>
      <span>--way-color-light</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-light"></span>
      </div>
    </div>
    <div>
      <span>--way-color-light-contrast</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 border bg-lightContrast"></span>
      </div>
    </div>
    <div>
      <span>--way-color-light-shade</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-lightShade"></span>
      </div>
    </div>
    <div>
      <span>--way-color-light-tint</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-lightTint"></span>
      </div>
    </div>
  </div>
  
  <div>
    <legend class="mb-2 font-bold border-b">Medium</legend>
    <div>
      <span>--way-color-medium</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-medium"></span>
      </div>
    </div>
    <div>
      <span>--way-color-medium-contrast</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 border bg-mediumContrast"></span>
      </div>
    </div>
    <div>
      <span>--way-color-medium-shade</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-mediumShade"></span>
      </div>
    </div>
    <div>
      <span>--way-color-medium-tint</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-mediumTint"></span>
      </div>
    </div>
  </div>

  <div>
    <legend class="mb-2 font-bold border-b">Dark</legend>
    <div>
      <span>--way-color-dark</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-dark"></span>
      </div>
    </div>
    <div>
      <span>--way-color-dark-contrast</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 border bg-darkContrast"></span>
      </div>
    </div>
    <div>
      <span>--way-color-dark-shade</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-darkShade"></span>
      </div>
    </div>
    <div>
      <span>--way-color-dark-tint</span>
      <div class="flex flex-col h-8 overflow-hidden rounded">
        <span class="flex-1 bg-darkTint"></span>
      </div>
    </div>
  </div>
</div>

</div>

### Typography tokens

<div class="block p-8 mb-5 bg-white rounded-lg shadow-lg">
  <div class="mb-12">
    <legend class="mb-2 font-bold border-b">
      Font-sizes
    </legend>
    <div class="flex items-center mb-8">
        <span class="mr-3 w-72">--way-font-size-xx-small (10px)</span>
        <span class="text-xxSmall">The quick brown fox...</span>
    </div>
    <div class="flex items-center mb-8">
      <span class="mr-3 w-72">--way-font-size-x-small (12px)</span>
      <span class="text-xSmall">The quick brown fox...</span>
    </div>
    <div class="flex items-center mb-8">
      <span class="mr-3 w-72">--way-font-size-small (14px)</span>
      <span class="text-small">The quick brown fox...</span>
    </div>
    <div class="flex items-center mb-8">
      <span class="mr-3 w-72">--way-font-size-medium (16px)</span>
      <span class="text-mediumSize">The quick brown fox...</span>
    </div>
    <div class="flex items-center mb-8">
      <span class="mr-3 w-72">--way-font-size-large (20px)</span>
        <span class="text-large">The quick brown fox...</span>
    </div>
    <div class="flex items-center mb-8">
      <span class="mr-3 w-72">--way-font-size-x-large (24px)</span>
        <span class="text-xLarge">The quick brown fox...</span>
    </div>
    <div class="flex items-center mb-8">
      <span class="mr-3 w-72">--way-font-size-xx-large (36px)</span>
        <span class="text-xxLarge">The quick brown fox...</span>
    </div>
    <div class="flex items-center mb-8">
      <span class="mr-3 w-72">--way-font-size-xxx-large (48px)</span>
        <span class="text-xxxLarge">The quick brown fox...</span>
    </div>
    <div class="flex items-center mb-8">
      <span class="mr-3 w-72">--way-font-size-xxxx-large (72px)</span>
        <span class="text-xxxxLarge">The quick brown fox...</span>
    </div>
  </div>

  <div>
    <legend class="mb-2 font-bold border-b">
      Font-weights
    </legend>
    <div class="flex items-center mb-8">
        <span class="mr-3 w-72">--way-font-weight-light (300)</span>
        <span class="font-light">The quick brown fox...</span>
    </div>
    <div class="flex items-center mb-8">
      <span class="mr-3 w-72">--way-font-weight-normal (400)</span>
      <span class="font-normal">The quick brown fox...</span>
    </div>
    <div class="flex items-center mb-8">
      <span class="mr-3 w-72">--way-font-weight-semibold (500)</span>
      <span class="font-semibold">The quick brown fox...</span>
    </div>
    <div class="flex items-center mb-8">
      <span class="mr-3 w-72">--way-font-weight-bold(700)</span>
      <span class="font-bold">The quick brown fox...</span>
    </div>
  </div>

</div>