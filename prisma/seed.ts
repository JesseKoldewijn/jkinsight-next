/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { v4 } from "uuid";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const data = [
    {
      title: "HardwareHulp",
      description:
        "Initially build in static html, css and js files. Converted this project in 2022 to Next.js to increase performance.",
    },
  ] as const;

  await Promise.all(
    data.map(async (projectItem) => {
      await prisma.project.upsert({
        // @ts-ignore-next-line
        where: {
          id: String(v4()),
        },
        update: {},
        create: {
          id: String(v4()),
          title: projectItem.title,
          description: projectItem.description,
        },
      });
    }),
  );
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
