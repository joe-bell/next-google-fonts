import * as React from "react";
import Head from "next/head";
import ReactGoogleFonts, {
  GoogleFontsProps as ReactGoogleFontsProps,
} from "react-google-fonts";

export type GoogleFontsProps = ReactGoogleFontsProps;

const GoogleFonts: React.FC<GoogleFontsProps> = (props) => (
  <Head>
    <ReactGoogleFonts {...props} />
  </Head>
);

export default GoogleFonts;
