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
    <table className="table max-w-[300px] border-2 border-primaryGreen/50 text-center ">
      {/* // className="md:max-w-auto table row-start-1 mx-auto h-fit max-w-[80%] rounded border-2 border-primaryGreen/50 p-4 px-4 pb-4 text-base sm:w-full md:col-start-2 md:row-span-2 md:row-start-1 md:mx-0 md:w-full" */}
      <thead className="table-header-group border-b-2 border-primaryGreen/50 bg-gradient-to-b from-[#116F77] via-[#116F77] to-[#093F43]  text-center text-white">
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
              className={`${callback ? "cursor-pointer" : ""} ${activeRow !== null ? "hover:bg-primaryBlue/10" : ""} text-center  ${activeRow === idx ? "bg-primaryBlue/10 font-bold" : "text-black/50"} transition-all`}
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
