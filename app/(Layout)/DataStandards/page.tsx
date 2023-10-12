"use client";

import AmpliconFileFormat from "@/app/components/DataStandards/Markdown/AmpliconFileFormat";
import AmpliconFileFormatIntroduction from "@/app/components/DataStandards/Markdown/AmpliconFileFormatIntroduction";
import MissionStatement from "@/app/components/DataStandards/MissionStatement";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DataStandards() {
  const [page, setPage] = useState(0);
  return (
    <div className="flex flex-col">
      <div className="mx-auto px-4">
        <Image
          alt="schema"
          src="/graph2.png"
          width={1200}
          height={700}
          className=""
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
      <div className="mx-auto mt-8 max-w-4xl">
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
  );
}
