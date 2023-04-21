"use client";

import { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemeLoader = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return <></>;
};

export default ThemeLoader;
