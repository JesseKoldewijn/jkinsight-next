import { Suspense } from "react";
import { type NextPage } from "next";
import Head from "next/head";

import { api } from "@/utils/api";

export const config = {
  runtime: "experimental-edge",
  unstable_allowDynamic: [
    "/node_modules/.pnpm/**", // use a glob to allow anything in the function-bind 3rd party module
  ],
};

const About: NextPage = () => {
  const projects = api.projects.getAll.useQuery();
  return (
    <>
      <Head>
        <title>Projects | JKinsight</title>
        <meta
          name="description"
          content="Welcome to JKinsight - My personal portfolio website!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <h2 className="text-xl font-semibold">Projects</h2>
          {projects.data ? (
            projects.data?.map((projectItem) => {
              return <span key={projectItem.id}>{projectItem.title}</span>;
            })
          ) : (
            <>Fetching projects...</>
          )}
        </div>
      </main>
    </>
  );
};
export default About;
