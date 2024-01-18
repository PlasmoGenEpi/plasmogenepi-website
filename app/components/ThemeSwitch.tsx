"use client";
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

import { getCookie, setCookie } from "cookies-next";

const ThemeSwitch = () => {
  const [theme, _setTheme] = useState(getCookie("theme") || "light");
  const [themeSwitcher, _setThemeSwitcher] = useState(
    <MoonIcon className="text-gray-500 dark:text-gray-300 mt-auto h-6 w-6" />,
  );

  const setTheme = (theme: string) => {
    setCookie("theme", theme);
    _setTheme(theme);

    if (theme === "dark") {
      _setThemeSwitcher(
        <SunIcon className="text-gray-500 dark:text-gray-300 mt-auto h-6 w-6" />,
      );
    } else if (theme === "light") {
      _setThemeSwitcher(
        <MoonIcon className="text-gray-500 dark:text-gray-300 mt-auto h-6 w-6" />,
      );
    }
  };

  useEffect(() => {
    let theme = getCookie("theme");
    if (theme === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    console.log(theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex">
      <button
        className=""
        onClick={() => {
          if (
            document.documentElement.classList.contains("dark") ||
            theme === "dark"
          ) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      >
        {themeSwitcher}
      </button>
    </div>
  );
};

export default ThemeSwitch;
