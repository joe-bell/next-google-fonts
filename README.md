<h1 align="center">next-google-fonts</h1>

<p align="center">
  A tiny <a href="https://nextjs.org/docs/api-reference/next/head"><code>next/head</code></a> helper for loading Google Fonts <strong>fast</strong> and <strong>asynchronously</strong> ⏩
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/next-google-fonts">
    <img alt="NPM Version" src="https://badgen.net/npm/v/next-google-fonts" />
  </a>
  <a href="https://www.npmjs.com/package/next-google-fonts">
    <img alt="Types Included" src="https://badgen.net/npm/types/next-google-fonts" />
  </a>
  <a href="https://bundlephobia.com/result?p=next-google-fonts">
    <img alt="Minizipped Size" src="https://badgen.net/bundlephobia/minzip/next-google-fonts" />
  </a>
  <a href="https://github.com/joe-bell/next-google-fonts/blob/main/LICENSE">
    <img alt="MIT License" src="https://badgen.net/github/license/joe-bell/next-google-fonts" />
  </a>
  <a href="https://www.npmjs.com/package/next-google-fonts">
    <img alt="NPM Downloads" src="https://badgen.net/npm/dm/next-google-fonts" />
  </a>
  <a href="https://twitter.com/joebell_">
    <img alt="Follow @joebell_ on Twitter" src="https://img.shields.io/twitter/follow/joebell_.svg?style=social&label=Follow" />
  </a>
</p>

<br/>

> Using Next.js 10? See ["How does this compare to Next.js font optimization?"](#how-does-this-compare-to-nextjs-font-optimization) before continuing.

## Table of Contents

1. [Setup](#setup)
2. [FAQs](#faqs)

## Setup

In this example, we're going to add [`Inter`](https://fonts.google.com/specimen/Inter) (specifically weights `400` and `700`) to a Next.js app.

See [joebell.co.uk](https://joebell.co.uk) for a working example.

1. Add the package to your Next.js project:

   ```sh
   npm i next-google-fonts
   ```

2. Create a custom `Head` component.

   It's important to acknowledge that `next-google-fonts` is a small [`next/head`][next/head] component and should **not** be nested inside [`next/head`][next/head]. To solve this, wrap both components with a `Fragment`.

   ```jsx
   // components/head.js
   import * as React from "react";
   import NextHead from "next/head";
   import { GoogleFonts } from "next-google-fonts";

   export const Head = ({ children, title }) => (
     <React.Fragment>
       <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
       <NextHead>
         <meta charSet="UTF-8" />
         <meta
           name="viewport"
           content="width=device-width, initial-scale=1.0"
         />
         <meta httpEquiv="x-ua-compatible" content="ie=edge" />

         <title>{title}</title>

         {children}
       </NextHead>
     </React.Fragment>
   );
   ```

3. Add the requested Google Font/s to your styles with a sensible fallback.
   It really doesn't matter whether you're using CSS or Sass or CSS-in-JS:

   ```css
   body {
     font-family: "Inter", sans-serif;
   }
   ```

4. [Run your Next.js app](https://nextjs.org/docs/api-reference/cli#build) to see the results in action!

   You should expect to see the fallback font first, followed by a switch to the Google Font/s without any render-blocking CSS warnings. Your font/s will continue to display until your app is re-hydrated.

   If JS is disabled, only the fallback font will display.

## FAQs

- [How does this compare to Next.js font optimization?](#how-does-this-compare-to-nextjs-font-optimization)
- [Why?](#why)

### How does this compare to Next.js font optimization?

Next.js 10 introduced [automatic Google Font optimization](https://github.com/vercel/next.js/pull/14746), you can make a decision on which solution to use based on the following criteria:

- "My fonts are **not priority** and can be loaded **asynchronously**" - use `next-google-fonts`.
- "My fonts **are priority** and should **not** be loaded **asynchronously**" - use `Next.js` font optimization.

For further reading, see the [Next.js issue discussion](https://github.com/vercel/next.js/issues/16065).

### Why?

`next-google-fonts` aims to make the process of using Google Fonts in Next.js more consistent, faster and painless: it preconnects to font assets, preloads and asynchronously loads the CSS file.

In the current iteration of [`next/head`][next/head], we can't make use of the familiar "media hack" method of asynchronous Google font loading:

```html
<!-- Plain HTML -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
  media="print"
  onload="this.media='all'"
/>
```

If you'd like to track this issue in Next.js, you can follow it here: [Next.js#12984](https://github.com/zeit/next.js/issues/12984).

[next/head]: https://nextjs.org/docs/api-reference/next/head
