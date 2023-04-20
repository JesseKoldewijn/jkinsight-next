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
              ? "my-auto rounded-lg border-2 border-purple-600 bg-transparent px-2 py-1 font-extrabold text-black dark:text-white"
              : "my-auto font-extrabold text-black dark:text-white"
          }
        >
          {Title}
        </Link>
      </>
    );
  };

  return (
    <div className="flex w-full bg-gray-200 px-2 py-3 dark:bg-black">
      <div className="navbar-start flex">
        <LinkComponent Href="/" Title="Quark JKinsight" variantPlain />
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
