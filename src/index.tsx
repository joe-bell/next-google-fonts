import * as React from "react";
import Head from "next/head";

export interface IGoogleFontsProps {
  /**
   * URL to your Google Fonts StyleSheet.
   *
   * Be sure to end with `&display=swap` for best performance.
   */
  href: string;
  /**
   * **UNSTABLE**
   *
   * Opt-in to upcoming changes ahead of the `v3` release.
   */
  future?: {
    /**
     * `GoogleFonts` no longer sits inside `<Head>`, you'll need to do this on
     * your side instead.
     */
    withoutHead?: boolean;
  };
}

let hydrated = false;

const GoogleFontsTags: React.FC<IGoogleFontsProps> = ({ href }) => {
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
    <React.Fragment>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
        data-next-google-fonts="preconnect"
        key="next-google-fonts__preconnect"
      />
      <link
        rel="preload"
        as="style"
        href={href}
        data-next-google-fonts="preload"
        key="next-google-fonts__preload"
      />
      <link
        href={href}
        rel="stylesheet"
        media={!hydrated ? "print" : "all"}
        data-next-google-fonts="style"
        key="next-google-fonts__style"
      />
      <noscript>
        <link
          href={href}
          rel="stylesheet"
          data-next-google-fonts="style-no-js"
          key="next-google-fonts__style-no-js"
        />
      </noscript>
    </React.Fragment>
  );
};

export const GoogleFonts: React.FC<IGoogleFontsProps> = (props) =>
  props?.future?.withoutHead ? (
    <GoogleFontsTags {...props} />
  ) : (
    <Head>
      <GoogleFontsTags {...props} />
    </Head>
  );
