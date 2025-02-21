"use client";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  partTwoInfectionsAtom,
  selectedInfectionIndexAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom } from "jotai";
import { ReactNode, Ref } from "react";

export default function InfectionTable({
  average,
  averageVisible,
  callback,
  infections,
  activeIndex,
  averageInputRow,
  activeRow,
}: {
  activeRow: number | null;
  averageInputRow: ReactNode;
  activeIndex: number;
  infections: (number | null)[];
  callback?: (idx: number) => void;
  average?: number;
  averageVisible: boolean;
}) {
  return (
    <table className="table max-w-[400px] text-center dark:bg-zinc-700 bg-zinc-50 overflow-hidden">
      <thead className=" text-current bg-interactiveBlue/40">
        <tr>
          <th className="translate-y-0.5 text-nowrap  py-4 ">Infection</th>
          <th className="translate-y-0.5 text-nowrap  py-4 ">MOI</th>
        </tr>
      </thead>
      <tbody>
        {infections.map((val, idx) => {
          return (
            <tr
              aria-roledescription={callback && `select infection ${idx + 1}`}
              tabIndex={callback ? 0 : undefined}
              key={idx}
              onKeyDown={
                callback &&
                ((e) => {
                  if (e.key === " ") {
                    e.preventDefault();
                    callback(idx);
                  }
                })
              }
              onClick={
                callback &&
                ((e) => {
                  callback(idx);
                })
              }
              // className={`${callback ? "cursor-pointer" : ""} text-center hover:bg-primaryBlue/20 ${idx % 2 === 0 ? "" : "bg-primaryBlue/10"}   ${idx === activeIndex ? "font-bold outline outline-2 -outline-offset-1 outline-primaryGreen" : "text-black/50"} transition-all`}
              className={`${callback ? "cursor-pointer" : ""} ${
                activeRow !== null
                  ? "dark:hover:bg-zinc-900 hover:bg-black/10"
                  : ""
              }   ${
                activeRow === idx ? "dark:bg-zinc-900  bg-black/10" : ""
              } transition-all`}
            >
              <td className="p-2">
                <span className="block translate-y-0.5">{idx + 1}</span>
              </td>
              <td className="p-2">
                <span className="block translate-y-0.5">{val}</span>
              </td>
            </tr>
          );
        })}
        {
          averageInputRow
          // <tr className={`border-t-2 border-primaryGreen/50 text-center`}>
          //   <td className="w-1/2">
          //     <label
          //       className={`${activeIndex === 10 ? "" : "text-black/50"} block translate-y-0.5`}
          //     >
          //       Avg.
          //     </label>
          //   </td>
          //   <td
          //     className={`${averageVisible ? "fadeIn300 visible" : "invisible"}`}
          //   >
          //     {averageInputElement}
          //   </td>
          // </tr>
        }
      </tbody>
    </table>
  );
}
