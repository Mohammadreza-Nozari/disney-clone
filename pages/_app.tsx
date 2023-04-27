import Header from "@/components/Header";
import type { AppProps } from "next/app";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "../globalstyles";
import { SessionProvider } from "next-auth/react";

const theme: DefaultTheme = {
  primary: "#040714",
  secondary: "#0070f3",
  white: "#fff",
  brightBlue: "#3E64E5",
  silver: "silver",
  darkGrey: "#31343e",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SessionProvider>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
