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

const remoteURL = "https://jkinsight-next.vercel.app";

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
          process.env.NODE_ENV == "development"
            ? {
                key: "Content-Security-Policy",
                value:
                  "default-src 'self' https://localhost:3000'; style-src 'self' ; image-src 'https://localhost:3000';  script-src 'self' https://localhost:3000; font-src 'self' 'https://localhost:3000'",
              }
            : {
                key: "Content-Security-Policy",
                value: `default-src 'self' ${remoteURL}'; style-src 'self' ; image-src '${remoteURL}';  script-src 'self' ${remoteURL}; font-src 'self' '${remoteURL}'`,
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
