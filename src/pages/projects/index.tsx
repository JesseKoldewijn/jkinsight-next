import { useState, useEffect } from "react";
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

const noData = {
  data: [],
};

const About: NextPage = () => {
  const projectsData = api.projects.getAll.useQuery();
  const [projects, setProjects] = useState<typeof noData | typeof projectsData>(
    noData,
  );

  if (projectsData.data && projects == noData) {
    setProjects(projectsData);
  }

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
