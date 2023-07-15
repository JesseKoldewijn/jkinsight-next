/* eslint-disable @typescript-eslint/ban-ts-comment */
import "./src/env.mjs";
/** @type {import("next").NextConfig} */

import NextPWA from "next-pwa";
// @ts-ignore
import runtimeCaching from "next-pwa/cache.js";

const withPWA = NextPWA({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
  skipWaiting: false,
  runtimeCaching,
});

const config = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
export default withPWA(config);
