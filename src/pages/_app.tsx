import "@/styles/globals.css";

import { type AppType } from "next/app";

import { AnimatePresence } from "framer-motion";

import { api } from "@/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} />
    </AnimatePresence>
  );
};

export default api.withTRPC(MyApp);
