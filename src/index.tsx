import * as React from "react";
import Head from "next/head";
import useSWR from "swr";

export type GoogleFontsProps = {
  /**
   * URL to your Google Fonts StyleSheet.
   *
   * Be sure to end with `&display=swap` for best performance.
   */
  href: string;
};

const GoogleFonts: React.FC<GoogleFontsProps> = ({ href }) => {
  const { data: hasLoaded, mutate: setHasLoaded } = useSWR("hasLoaded", {
    initialData: false,
  });

  React.useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <Head>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="preload" as="style" href={href} />
      <link href={href} rel="stylesheet" media={!hasLoaded ? "print" : "all"} />
    </Head>
  );
};

export default GoogleFonts;
