import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | JKinsight</title>
        <meta
          name="description"
          content="Welcome to JKinsight - My personal portfolio website!"
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">JKinsight</h1>
              <p className="py-6">
                Thanks for visiting my personal portfolio website!
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
