import { type NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | JKinsight</title>
        <meta
          name="description"
          content="Welcome to JKinsight - My personal portfolio website!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className="flex min-h-screen flex-col items-center justify-center">
          About me!
        </div>
      </main>
    </>
  );
};

export default About;
