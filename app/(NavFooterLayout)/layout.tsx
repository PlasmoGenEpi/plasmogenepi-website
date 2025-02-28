"use client";
import { ReactNode } from "react";
import NavBar2 from "../components/NavBar2/NavBar2";
import Footer from "../components/Footer/Footer";

export default function NavFooterLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-w-[376px] bg-zinc-50">
      <NavBar2 />
      <div className="min-h-screen pb-80 md:mt-0 ">{children}</div>

      {/* <Footer /> */}
    </div>
  );
}
