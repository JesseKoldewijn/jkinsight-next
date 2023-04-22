import { Html, Head, Main, NextScript } from "next/document";

const RootDocument = () => {
  return (
    <Html
      lang="en"
      data-theme="night"
      className="transition-all duration-500 ease-in-out"
    >
      <Head />
      <body className="overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default RootDocument;
