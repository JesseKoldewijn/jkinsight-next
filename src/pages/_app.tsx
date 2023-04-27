/* eslint-disable @typescript-eslint/no-explicit-any */
import "@/styles/globals.css";

import { useEffect } from "react";
import { useRouter } from "next/router";

import { AnimatePresence } from "framer-motion";

import { api } from "@/utils/api";
import Layout from "@/components/layout";

const RootApp = ({
  Component,
  pageProps,
}: {
  Component: React.FC;
  pageProps: any;
}) => {
  const router = useRouter();

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <Layout key={router.asPath}>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </>
  );
};
export default api.withTRPC(RootApp);
