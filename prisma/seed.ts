/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { v4 } from "uuid";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const projectsData = [
    {
      title: "HardwareHulp",
      desc_short: "Informational website for my own company.",
      desc_long:
        "Initially build in static html, css and js files. Converted this project in 2022 to Next.js to increase performance.",
    },
    {
      title: "GlitchTech",
      desc_short: "Website showing game development projects in the making",
      desc_long:
        "Build using WordPress and hosted on my own server. Planning to rebuild this project into Astro.js in the near future.",
    },
  ] as const;

  const seedDB = async () => {
    await Promise.all(
      projectsData.map(async (projectItem) => {
        const existingItem = await prisma.project.findFirst({
          where: {
            title: projectItem.title,
          },
        });
        if (existingItem !== null) {
          await prisma.project.update({
            where: {
              title: projectItem.title,
            },
            data: {
              title: projectItem.title,
              desc_short: projectItem.desc_short,
              desc_long: projectItem.desc_long,
            },
          });
        } else {
          await prisma.project.upsert({
            where: {
              id: v4(),
            },
            update: {},
            create: {
              id: v4(),
              title: projectItem.title,
              desc_short: projectItem.desc_short,
              desc_long: projectItem.desc_long,
            },
          });
        }
      }),
    );
  };

  await seedDB();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
