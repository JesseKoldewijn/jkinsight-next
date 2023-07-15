/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import Cookies from "js-cookie";
import { themeChange } from "theme-change";

const ThemeSwitch = () => {
  const cookieJar = Cookies;

  const [currentTheme, setCurrentTheme] = useState<string>(
    cookieJar.get("theme") !== undefined
      ? String(cookieJar.get("theme"))
      : "night",
  );

  const changeTheme = (theme: string) => {
    const cookieJar = Cookies;
    setCurrentTheme(theme);
    cookieJar.set("theme", theme);
    themeChange(false);
  };

  useEffect(() => {
    const currentTheme = String(localStorage.getItem("theme"));
    if (
      localStorage.getItem("theme") == null ||
      localStorage.getItem("theme") !== "night"
    ) {
      changeTheme(currentTheme);
    }
    changeTheme(currentTheme);
  }, []);

  return (
    <>
      <button
        data-set-theme={
          currentTheme !== null && currentTheme == "night"
            ? "corporate"
            : "night"
        }
        data-act-class="ACTIVECLASS"
        onClick={() => {
          changeTheme(
            currentTheme !== null && currentTheme == "night"
              ? "corporate"
              : "night",
          );
        }}
        className="my-auto rounded-full border-2 border-stone-800 bg-background bg-clip-text px-2 py-2 font-extrabold text-black dark:border-stone-600 dark:text-white"
      >
        {currentTheme !== null && currentTheme == "corporate" ? (
          <Moon />
        ) : (
          <Sun />
        )}
        <span className="sr-only">Theme-toggle</span>
      </button>
    </>
  );
};

export default ThemeSwitch;
