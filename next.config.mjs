/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");
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
  async headers() {
    return [
      {
        // Sets security headers for all routes
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'report-sample' 'self'; style-src 'report-sample' 'self'; object-src 'none'; base-uri 'self'; connect-src 'self'; font-src 'self'; frame-src 'self'; img-src 'self'; manifest-src 'self'; media-src 'self'; report-uri https://644676edf1e3671a29137801.endpoint.csper.io/?v=0; worker-src 'self';",
          },
        ],
      },
      {
        // Sets security headers for everything?
        source: "/*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'report-sample' 'self'; style-src 'report-sample' 'self'; object-src 'none'; base-uri 'self'; connect-src 'self'; font-src 'self'; frame-src 'self'; img-src 'self'; manifest-src 'self'; media-src 'self'; report-uri https://644676edf1e3671a29137801.endpoint.csper.io/?v=0; worker-src 'self';",
          },
        ],
      },
    ];
  },
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
