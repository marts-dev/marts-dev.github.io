"use client";

import { IconMoon, IconSun } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [ theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    if (theme === "light"){
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if(localTheme){
      setTheme(localTheme);
      if(localTheme === "dark"){
        document.documentElement.classList.add("dark");
      } else if (localTheme === "light"){
        setTheme("light")
        document.documentElement.classList.remove("dark");
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark")
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  return (
    <button
      className='fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hvoer:scale-[1.15] active:scale-105 transition-all dark: bg-gray-950'
      onClick={toggleTheme}
    >
      {theme === "light" ? (<IconSun />) : (<IconMoon />)}
    </button>
  )
}
