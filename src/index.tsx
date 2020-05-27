import * as React from "react";
import Head from "next/head";

type Href = {
  /**
   * URL to your Google Fonts StyleSheet.
   *
   * Be sure to end with `&display=swap` for best performance.
   */
  href: string;
};

type HasLoaded = boolean;

export const GoogleFontsContext = React.createContext<
  {
    hasLoaded?: HasLoaded;
  } & Href
>(undefined);

export const GoogleFontsProvider: React.FC<Href> = ({ href, children }) => {
  const [hasLoaded, setHasLoaded] = React.useState<HasLoaded>(false);

  React.useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <GoogleFontsContext.Provider value={{ hasLoaded: hasLoaded, href: href }}>
      {children}
    </GoogleFontsContext.Provider>
  );
};

export const GoogleFonts: React.FC = () => {
  const useGoogleFonts = React.useContext(GoogleFontsContext);

  return (
    <Head>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="preload" as="style" href={useGoogleFonts.href} />
      <link
        href={useGoogleFonts.href}
        rel="stylesheet"
        media={!useGoogleFonts.hasLoaded ? "print" : "all"}
      />
    </Head>
  );
};
