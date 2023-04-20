"use client";

import { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemeChange = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return <></>;
};

export default ThemeChange;
