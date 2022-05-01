import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const blackBox = {
    initial: {
      height: "100vh",
      width: "100vw",
      bottom: 0,
    },
    animate: {
      width: 0,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const InitialTransition = () => {
    return (
      <div className="absolute inset-0">
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
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <InitialTransition />
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
