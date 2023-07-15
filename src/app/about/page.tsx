import { type ServerRuntime, type NextPage } from "next";
import Head from "next/head";

import MyAvatar from "@/components/avatar";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/layout/card";

export const revalidate = 698000;
export const runtime: ServerRuntime = "edge";

const About: NextPage = () => {
  const studies = [
    {
      title: "Software Developer",
      institude: "ROC Deltion College",
      years: "2019/2022",
    },
    {
      title: "Retail Sales",
      institude: "ROC Deltion College",
      years: "2017/2019",
    },
  ];

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
      <main>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="w-md mx-auto flex animate-bounce-once flex-col gap-2">
            <MyAvatar />
            <h1>Hey there!</h1>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-center">
            <h1 className="text-lg font-bold">My name is Jesse Koldewijn</h1>
            <p className="max-w-md">
              I&apos;m a fullstack developer, tech geek, gamer and volunteer at
              the non-profit organization called StackUp
            </p>
          </div>
        </div>
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          <h2 id="about-st" className="text-lg font-bold">
            What have I studied?
          </h2>
          <div className="mt-4 flex list-disc flex-col gap-4">
            {studies.map((study) => {
              return (
                <Card
                  key={study.title}
                  className="mx-4 max-w-xl bg-gray-300 dark:bg-[#374151] sm:mx-auto"
                >
                  <CardHeader className="flex flex-col space-y-1.5 p-6">
                    <CardTitle>{study.title}</CardTitle>
                    <CardDescription>
                      {study.years} - {study.institude}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
