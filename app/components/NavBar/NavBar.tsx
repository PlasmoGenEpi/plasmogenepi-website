"use client";
import Link from "next/link";
import PlasmoGenEpiLogo from "../Logos/PlasmoGenEpiLogo";
import { useState } from "react";
import LogoLink from "./LogoLink";
import DropdownMenu from "./DropdownMenu";
import PrimaryNav from "./PrimaryNav";
import NavList from "./NavList";

export default function NavBar({ currentNav }: { currentNav?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full border-[#1D7084] bg-gradient-to-b from-zinc-100 to-zinc-200 shadow-md shadow-black/50 [zIndex:999] dark:border-zinc-950 dark:from-zinc-950 dark:to-zinc-900 md:static md:border-b-[16px]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between  md:flex-row md:items-end">
        <div className="p-2">
          <LogoLink />
        </div>
        <DropdownMenu />
        <NavList currentNav="" open={open} />
      </div>
    </div>
  );
}
