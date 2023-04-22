"use client";

import Link from "next/link";
import ThemeSwitch from "./generics/themeSwitch";

const Navbar = () => {
  const LinkComponent = ({
    Href,
    Title,
    variantPlain,
  }: {
    Href: string;
    Title: string;
    variantPlain?: boolean;
  }) => {
    return (
      <>
        <Link
          href={Href}
          className={
            variantPlain !== true
              ? "my-auto rounded-xl border-2 border-stone-800 bg-transparent px-2 py-1 font-extrabold text-black shadow-lg dark:border-stone-700 dark:text-white"
              : "my-auto rounded-lg font-extrabold text-black dark:text-white"
          }
        >
          {Title}
        </Link>
      </>
    );
  };

  return (
    <div className="fixed inset-x-0 top-0 flex w-full bg-[rgba(200,200,200,0.75)] px-2 py-3 dark:bg-[rgba(0,0,0,0.75)]">
      <div className="navbar-start flex">
        <LinkComponent Href="/" Title="JKinsight" variantPlain />
      </div>
      <div className="navbar-center flex">
        <LinkComponent Href="/about" Title="About me" />
      </div>
      <div className="navbar-end flex">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
