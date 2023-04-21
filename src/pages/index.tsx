import { type NextPage } from "next";
import Head from "next/head";

import { api } from "@/utils/api";

import Layout from "@/components/layout";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

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
      <Layout>
        <main className="transition-all duration-500">
          <div className="flex min-h-screen flex-col items-center justify-center">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
