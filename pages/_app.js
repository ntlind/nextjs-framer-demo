import "../styles/globals.css";

import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
