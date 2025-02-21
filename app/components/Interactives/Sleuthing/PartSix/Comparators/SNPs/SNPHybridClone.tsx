import { fixedData } from "@/data/Interactives/fixedData";
import { partSixCloneRowsAtom } from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";

export default function SNPHybridClone() {
  const cloneRows = useAtomValue(partSixCloneRowsAtom);

  const vals = cloneRows[1].vals
    .slice(0, 6)
    .concat(cloneRows[2].vals.slice(6, 12));
  return (
    <div className="grid gap-1 font-helvetica [grid-template-columns:8%_auto] text-black">
      <div
        //   style={{
        //     backgroundImage: `
        // radial-gradient(circle at center,white, #ffffffd0 20%, transparent)

        //   `,
        //   }}
        className="border-red-blue-rounded relative flex aspect-square items-center justify-center rounded-full"
      >
        <span className="-translate-x-0.5 translate-y-0.5 font-bold">4</span>
        {/* <div className=" absolute inset-0 -z-10 bg-gradient-to-r from-cloneRed via-[#FFB0B0_50%,#B8E6FA_50%] to-cloneBlue"></div> */}
      </div>
      <ol className="border-red-blue grid grid-cols-12 gap-1 bg-gradient-to-r from-cloneRed via-[#FFB0B0_50%,#B8E6FA_50%] to-cloneBlue p-1 shadow-sm shadow-black">
        {Array(12)
          .fill(0)
          .map((el, idx) => {
            return (
              <li
                className="flex aspect-square items-center justify-center bg-white shadow-sm shadow-black"
                key={idx}
              >
                <span
                  className={`${
                    vals[idx] === 1 ? "alternateAllele" : ""
                  } translate-y-[3px] text-lg font-bold leading-6 sm:text-xl`}
                >
                  {vals[idx] === 0
                    ? fixedData[6].refValues[idx]
                    : vals[idx] === 1
                    ? fixedData[6].altValues[idx]
                    : ""}
                </span>
              </li>
            );
          })}
      </ol>
    </div>
  );
}
