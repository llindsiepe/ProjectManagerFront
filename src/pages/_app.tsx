import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
