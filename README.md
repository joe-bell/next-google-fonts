# next-google-fonts

> Load Google Fonts Asynchronously in Next.js ⏩

## Set-up

1. Installation
2. If you haven't already, create a custom `_app.jsx` or `_app.tsx`.
3. Wrap the `Component` with the `GoogleFontsProvider` and pass your Google Fonts URL via the `href` attribute.  
   For example, in TypeScript:

   ```tsx
   // pages/_app.tsx
   import * as React from "react";
   import { AppProps } from "next/app";
   import { GoogleFontsProvider } from "next-google-fonts";

   const App = ({ Component, pageProps }: AppProps) => (
     <GoogleFontsProvider href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap">
       <Component {...pageProps} />
     </GoogleFontsProvider>
   );

   export default App;
   ```

4. Place `GoogleFonts` wherever it's required, whether it's a component, one-off page or a custom `<Head />` component.

   For a custom TypeScript `Head` component that may look something like this:

   ```tsx
   // components/head.tsx
   import * as React from "react";
   import NextHead from "next/head";
   import { GoogleFonts } from "next-google-fonts";

   export const Head: React.FC<{
     title?: string;
   }> = ({ children, title }) => (
     <React.Fragment>
       <GoogleFonts />
       <NextHead>
         <meta charSet="UTF-8" />
         <meta
           name="viewport"
           content="width=device-width, initial-scale=1.0"
         />
         <meta httpEquiv="x-ua-compatible" content="ie=edge" />

         <title>{title ? `${title} | ${config.title}` : config.title}</title>

         {children}
       </NextHead>
     </React.Fragment>
   );
   ```

   > It's very important to remember that `GoogleFonts` is a small `next/head` component and should **not** be nested inside `next/head`. To solve this, wrap both components with a `Fragment`.
