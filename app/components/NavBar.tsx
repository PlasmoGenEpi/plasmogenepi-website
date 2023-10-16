"use client";
import { ReactNode, useState } from "react";
import LogoPlay from "./LogoPlay";
import Link from "next/link";
import Logo from "./Logo";
import NavPage from "./NavPage";

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className=" border-b border-black bg-[#ffffff]">
      {/* {navOpen && <NavPage setter={setNavOpen} />} */}
      <div className=" max-w-6xl md:mx-auto">
        <div className="px-2">
          <div className="relative flex h-[100px] justify-end">
            <div className="absolute -left-6 -top-1">
              <Link href="/">
                {/* <LogoPlay width={120} /> */}
                <Logo width={120} />
              </Link>
            </div>
            <div className="flex items-center pt-8">
              {/* <div
                onClick={(e) => {
                  setNavOpen(!navOpen);
                }}
                className="p-2"
              >
                <svg
                  className="md:hidden"
                  width="30pt"
                  height="30pt"
                  version="1.1"
                  viewBox="0 0 1200 1200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m750 600c0 82.844-67.156 150-150 150s-150-67.156-150-150 67.156-150 150-150 150 67.156 150 150" />
                    <path d="m375 600c0 82.844-67.156 150-150 150s-150-67.156-150-150 67.156-150 150-150 150 67.156 150 150" />
                    <path d="m1125 600c0 82.844-67.156 150-150 150s-150-67.156-150-150 67.156-150 150-150 150 67.156 150 150" />
                  </g>
                </svg>
              </div> */}
              <div className="flex items-center gap-4 text-sm font-semibold uppercase text-black">
                {/* <Link
                  className="text-black text-opacity-70 hover:text-opacity-100"
                  href="/"
                >
                  Home
                </Link> */}

                <Link
                  className="text-black text-opacity-70 hover:text-opacity-100"
                  href="/OnlineCourse"
                >
                  Online Course
                </Link>
                <Link
                  className="text-black text-opacity-70 hover:text-opacity-100"
                  href="/DataStandards"
                >
                  Data Standards
                </Link>
                {/* <button className="btn btn-square btn-ghost">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    ></path>
                    </svg>
                  </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
