"use client";
import Link from "next/link";
import LogoTransparent from "./LogoTransparent";
import ExpandIcon from "./ExpandIcon";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

export default function NavBar2({ currentNav }: { currentNav: string }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="">
      <div className={"border-b-[16px] border-b-pge-blue"}>
        <div className="mx-auto flex max-w-5xl p-2">
          <Link className=" flex items-end  md:flex-row" href="/">
            <LogoTransparent width={60} color="black" />
            <div className="ml-2 flex translate-y-1 flex-col   font-poppins text-2xl font-bold">
              <span className="">PlasmoGenEpi</span>
              <span className="text whitespace-nowrap text-xs text-pge-blue">
                Plasomodium Genetic Epidemiology
              </span>
            </div>
          </Link>
          <button
            onClick={(e) => {
              setOpenMenu(!openMenu);
            }}
            className="ml-auto mt-auto w-fit px-2 md:hidden"
          >
            <DropdownMenu />
          </button>
          <div className="ml-4 hidden grow justify-end gap-4 text-sm uppercase md:flex">
            <Link
              className={
                currentNav === "OnlineCourse"
                  ? "place-self-end border-b-2 border-[rgba(12,25,44)] py-2 font-sans font-bold transition-all"
                  : "text-black place-self-end border-b-2 border-transparent py-2 font-sans font-bold text-opacity-60 transition-all hover:text-opacity-100 hover:transition-all"
              }
              href="/OnlineCourse"
            >
              Online Course
            </Link>
            <Link
              className={
                currentNav === "DataStandards"
                  ? "place-self-end border-b-2 border-[rgba(12,25,44)] py-2 font-sans font-bold transition-all"
                  : "text-black place-self-end border-b-2 border-transparent py-2  font-sans font-bold text-opacity-60 transition-all hover:text-opacity-100 hover:transition-all"
              }
              href="/DataStandards"
            >
              Data Standards
            </Link>
            <Link
              className={
                currentNav === "About"
                  ? "place-self-end border-b-2 border-[rgba(12,25,44)] py-2 font-sans font-bold transition-all"
                  : "text-black place-self-end border-b-2 border-transparent py-2  font-sans font-bold text-opacity-60 transition-all hover:text-opacity-100 hover:transition-all"
              }
              href="/DataStandards"
            >
              About
            </Link>
          </div>
        </div>
        <div
          className={
            openMenu
              ? "flex h-36 flex-col items-center justify-around bg-pge-blue transition-all md:hidden"
              : "flex h-0 flex-col items-center justify-around bg-pge-blue transition-all md:hidden"
          }
        >
          <Link
            className={
              !openMenu
                ? "hidden"
                : "text-white w-full py-2 text-center font-bold hover:bg-pge-dark-blue"
            }
            href="/OnlineCourse"
          >
            Online Course
          </Link>
          <Link
            className={
              !openMenu
                ? "hidden"
                : "text-white w-full py-2 text-center font-bold hover:bg-pge-dark-blue"
            }
            href="/DataStandards"
          >
            Data Standards
          </Link>
          <Link
            className={
              !openMenu
                ? "hidden"
                : "text-white w-full py-2 text-center font-bold hover:bg-pge-dark-blue"
            }
            href="/About"
          >
            About
          </Link>
        </div>
      </div>
      {/* <div className="mx-auto flex max-w-6xl justify-end text-center text-sm uppercase">
        <Link
          className={
            currentNav === "OnlineCourse"
              ? "bg-[rgba(12,25,44,.90)] px-8 py-2 font-sans font-bold text-white transition-all"
              : "px-8 py-2 font-sans font-bold text-opacity-60 transition-all hover:text-opacity-100 hover:transition-all"
          }
          href="/OnlineCourse"
        >
          Online Course
        </Link>
        <Link
          className={
            currentNav === "DataStandards"
              ? "bg-[rgba(12,25,44,.90)] px-8 py-2 font-sans font-bold text-white transition-all"
              : "px-8 py-2 font-sans font-bold text-opacity-60 transition-all hover:text-opacity-100 hover:transition-all"
          }
          href="/DataStandards"
        >
          Data Standards
        </Link>
      </div> */}
    </div>
  );
}
