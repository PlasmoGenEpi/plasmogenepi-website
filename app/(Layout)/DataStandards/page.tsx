"use client";

import AmpliconFileFormat from "@/app/components/DataStandards/Markdown/AmpliconFileFormat";
import AmpliconFileFormatIntroduction from "@/app/components/DataStandards/Markdown/AmpliconFileFormatIntroduction";
import MissionStatement from "@/app/components/DataStandards/MissionStatement";
import NavBar2 from "@/app/components/NavBar2";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DataStandards() {
  const [page, setPage] = useState(0);
  return (
    <div>
      <NavBar2 currentNav="DataStandards" />
      <div className="flex flex-col items-center font-roboto">
        <div className="mx-4 flex max-w-full justify-center overflow-hidden">
          <Image
            priority
            alt="schema"
            src="/graph2.png"
            width={1200}
            height={336}
            className=" bg-black min-w-[600px] bg-opacity-50 bg-blend-multiply [object-position:50%]"
          />
        </div>
        {/* <div className="mx-auto max-w-4xl py-12">
        <div className="tabs  justify-center">
          <a
            onClick={(e) => {
              setPage(0);
            }}
            className={
              page === 0 ? "tab tab-active tab-lifted " : "tab tab-lifted pl-4"
            }
          >
            Overview
          </a>
          <a
            onClick={(e) => {
              setPage(1);
            }}
            className={
              page === 1 ? "tab tab-active tab-lifted" : "tab tab-lifted"
            }
          >
            File Format
          </a>
          <a
            onClick={(e) => {
              setPage(2);
            }}
            className={
              page === 2 ? "tab tab-active tab-lifted" : "tab tab-lifted"
            }
          >
            Schema
          </a>
          <a
            onClick={(e) => {
              setPage(3);
            }}
            className={
              page === 3 ? "tab tab-active tab-lifted" : "tab tab-lifted"
            }
          >
            Feedback
          </a>
          <div className="tab tab-lifted pointer-events-none grow"></div>
        </div>
      </div> */}
        <div className="mx-auto max-w-4xl">
          {page === 0 ? (
            <MissionStatement />
          ) : page === 1 ? (
            <AmpliconFileFormatIntroduction />
          ) : page === 2 ? (
            <AmpliconFileFormat />
          ) : (
            <div className="mx-auto flex">
              <iframe
                className="mx-auto"
                src="https://docs.google.com/forms/d/e/1FAIpQLScmNSGWXaa7Y38zU8Kl0aBBvG33i6UD_oYSRhuOY0aH_Aqx5Q/viewform?embedded=true"
                width="640"
                height="1200"
              >
                Loading…
              </iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
