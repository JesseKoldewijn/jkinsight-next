import { slugify } from "@/helpers/stringFunctions";
import { db } from "../db";
import { projects, type tProject } from "../schemas/projects";
import { cache } from "react";

export const runtime = "edge";

export const getAllProjects = cache(async () => {
  return (await db.select().from(projects)) as tProject[];
});

export const getProjectBySlug = cache(async (slug: string) => {
  const allProjects = await getAllProjects();
  const selectedProject = allProjects.find((obj) => {
    if (obj.title == null) return;
    if (slugify(obj.title) == slug) {
      return obj;
    }
  });

  return selectedProject;
});
