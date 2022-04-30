import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";

function MyApp({ Component, pageProps }) {
  const blackBox = {
    initial: {
      height: "500vh",
    },
    animate: {
      height: 0,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const InitialTransition = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative z-50 w-full bg-black"
          initial="initial"
          animate="animate"
          variants={blackBox}
        />
      </div>
    );
  };
  return (
    <ThemeProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <AnimatePresence exitBeforeEnter>
        {/* <InitialTransition /> */}
        <motion.div exit={{ opacity: 0 }}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
