import { Html, Head, Main, NextScript } from "next/document";

const RootDocument = () => {
  return (
    <Html
      lang="en"
      data-theme="night"
      className="overflow-y-hidden overscroll-y-contain transition-all duration-300 ease-in-out"
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="application-name" content="JKinsight" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <body className="h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(200,200,200,0.75)] via-gray-400 to-[rgba(200,200,200,0.75)] dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-gray-900 dark:via-gray-700 dark:to-gray-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default RootDocument;
