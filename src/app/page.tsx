import { type ServerRuntime, type Metadata } from "next";
import React from "react";

export const revalidate = 698000;
export const runtime: ServerRuntime = "edge";

export const metadata: Metadata = {
  title: "Home",
};

const Home = () => {
  return (
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
  );
};

export default Home;
