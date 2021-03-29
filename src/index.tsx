import * as React from "react";
import Head from "next/head";

export interface IGoogleFontsProps {
  /**
   * URL to your Google Fonts StyleSheet.
   *
   * Be sure to end with `&display=swap` for best performance.
   */
  href: string;
}

let hydrated = false;

export const GoogleFonts: React.FC<IGoogleFontsProps> = ({ href }) => {
  const hydratedRef = React.useRef(false);
  const [, rerender] = React.useState(false);

  React.useEffect(() => {
    if (!hydratedRef.current) {
      hydrated = true;
      hydratedRef.current = true;
      rerender(true);
    }
  }, []);

  return (
    <Head>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
        key="next-google-fonts__preconnect"
      />
      <link
        rel="preload"
        as="style"
        href={href}
        key="next__google-fonts__preload"
      />
      <link
        href={href}
        rel="stylesheet"
        media={!hydrated ? "print" : "all"}
        key="next-google-fonts__style"
      />
      <noscript>
        <link
          href={href}
          rel="stylesheet"
          key="next-google-fonts__style-no-js"
        />
      </noscript>
    </Head>
  );
};
