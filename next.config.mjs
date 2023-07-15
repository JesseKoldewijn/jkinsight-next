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
};
export default withPWA(config);
