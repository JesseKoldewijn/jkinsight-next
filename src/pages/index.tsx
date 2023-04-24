import { type NextPage } from "next";
import Head from "next/head";

export const config = {
  runtime: "experimental-edge",
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | JKinsight</title>
        <meta
          name="description"
          content="Welcome to JKinsight - My personal portfolio website!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        Homepage
      </main>
    </>
  );
};
export default Home;
