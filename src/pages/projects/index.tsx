import { type NextPage } from "next";
import Head from "next/head";

import { api } from "@/utils/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/layout/card";

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
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div id="projects" className="flex flex-col gap-4">
            {projects.data ? (
              projects.data
                ?.slice(0)
                .reverse()
                .map((projectItem) => {
                  return (
                    <div key={projectItem.id}>
                      <Card>
                        <CardHeader>
                          <CardTitle>{projectItem.title}</CardTitle>
                          <CardDescription>
                            {projectItem.desc_short}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>{projectItem.desc_long}</p>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })
            ) : (
              <>Fetching projects...</>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
export default About;
