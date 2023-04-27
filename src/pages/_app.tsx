/* eslint-disable @typescript-eslint/no-explicit-any */
import "@/styles/globals.css";

import { useEffect } from "react";

import { JetBrains_Mono } from "next/font/google";
import { useRouter } from "next/router";

import { AnimatePresence } from "framer-motion";

import { api } from "@/utils/api";
import Layout from "@/components/layout";

const JetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const RootApp = ({
  Component,
  pageProps,
}: {
  Component: React.FC;
  pageProps: any;
}) => {
  const router = useRouter();

  useEffect(() => {
    const headElem = document.getElementsByTagName("head")[0];
    if (headElem) {
      const styleToAdd = `<style>:root { --font-jb-mono: ${JetbrainsMono.style.fontFamily} }</style>`;
      const lastAdded = Array.from(headElem.children)[
        headElem.children.length - 1
      ];

      if (lastAdded?.innerHTML.toString().includes("Jetbrains") == false) {
        headElem.insertAdjacentHTML("beforeend", styleToAdd);
      }
    }
  }, []);

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
