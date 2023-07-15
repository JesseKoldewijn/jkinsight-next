import LoadingSpinner from "@/components/ui/generics/loadingSpinner";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/layout/card";
import { getAllProjects } from "@/server/helpers/projects";
import { type Metadata } from "next";

export const revalidate = 698000;

export const metadata: Metadata = {
  title: "Projects",
};

const ProjectsOverview = async () => {
  const projects = await getAllProjects();

  return (
    <>
      <main>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div id="projects" className="flex flex-col gap-4">
            {projects && projects.length > 0 ? (
              projects
                ?.slice(0)
                .reverse()
                .map((projectItem) => {
                  return (
                    <div key={projectItem.id}>
                      <Card className="mx-4 max-w-xl bg-gray-300 dark:bg-[#374151] sm:mx-auto">
                        <CardHeader className="flex flex-col space-y-1.5 p-6">
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
              <>
                <LoadingSpinner />
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectsOverview;
