"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
const ThemeSwitch = () => {
  const [currentTheme, setCurrentTheme] = useState<string | null>("night");

  useEffect(() => {
    setCurrentTheme(
      localStorage.getItem("theme") !== null
        ? localStorage.getItem("theme")
        : "night",
    );
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
          setCurrentTheme(
            currentTheme !== null && currentTheme == "night"
              ? "corporate"
              : "night",
          );
        }}
        className="rounded-full border-2 border-purple-800 bg-black bg-clip-text px-2 py-2 font-extrabold text-purple-800 dark:border-purple-600 dark:text-white"
      >
        {currentTheme !== null && currentTheme == "corporate" ? (
          <Moon />
        ) : (
          <Sun />
        )}
      </button>
    </>
  );
};

export default ThemeSwitch;
