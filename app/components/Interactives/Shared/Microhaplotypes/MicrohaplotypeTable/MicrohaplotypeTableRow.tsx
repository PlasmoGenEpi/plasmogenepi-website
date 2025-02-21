import { fixedData } from "@/data/Interactives/fixedData";
import Microhaplotype from "../Microhaplotype";
import { MicroId } from "@/helpers/helpers";

export const microhaplotypeColorMap = new Map([
  [JSON.stringify(getRowConfiguration(0)), "bg-microBrown border-microBrown"],
  [JSON.stringify(getRowConfiguration(1)), "bg-microRed border-microRed"],
  [JSON.stringify(getRowConfiguration(2)), "bg-microOrange border-microOrange"],
  [JSON.stringify(getRowConfiguration(3)), "bg-microGreen border-microGreen"],
  [JSON.stringify(getRowConfiguration(4)), "bg-microTeal border-microTeal"],
  [JSON.stringify(getRowConfiguration(5)), "bg-microBlue border-microBlue"],
  [JSON.stringify(getRowConfiguration(6)), "bg-microPurple border-microPurple"],
  [JSON.stringify(getRowConfiguration(7)), "bg-microGrey border-microGrey"],
]);

export function getRowConfiguration(rowNum: number): MicroId {
  if (rowNum === 0) {
    return [0, 0, 0] as unknown as MicroId;
  } else if (rowNum === 1) {
    return [0, 0, 1] as unknown as MicroId;
  } else if (rowNum === 2) {
    return [0, 1, 1] as unknown as MicroId;
  } else if (rowNum === 3) {
    return [1, 1, 1] as unknown as MicroId;
  } else if (rowNum === 4) {
    return [1, 1, 0] as unknown as MicroId;
  } else if (rowNum === 5) {
    return [1, 0, 0] as unknown as MicroId;
  } else if (rowNum === 6) {
    return [0, 1, 0] as unknown as MicroId;
  } else {
    return [1, 0, 1] as unknown as MicroId;
  }
}

export default function MicrohaplotypeTableRow({
  rowNum,
  // microPossibleVals,
  referenceAlleles,
  alternateAlleles,
  activeColumn,
  callback,
  disabled,
  hint,
}: {
  hint?: MicroId;
  disabled?: boolean;
  callback?: (arrConfig: MicroId) => void;
  rowNum: number;
  activeColumn: 0 | 1 | 2 | 3;
  referenceAlleles: string[];
  alternateAlleles: string[];
}) {
  let x = referenceAlleles.slice(3 * activeColumn, 3 * activeColumn + 3);
  let y = alternateAlleles.slice(3 * activeColumn, 3 * activeColumn + 3);
  let possibleVals = x.map((refVal, idx) => {
    return {
      reference: refVal,
      alternate: y[idx],
    };
  });

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 grid grid-cols-3 text-center">
        {getRowConfiguration(rowNum).map((el, idx) => {
          return (
            <div
              key={idx}
              className={`${
                el === 1 ? "bg-zinc-100 dark:bg-zinc-800" : "dark:bg-zinc-900"
              } ${idx === 0 ? "border-x" : "border-r"} ${
                rowNum === 0 ? "border-y" : "border-b"
              } dark:border-black py-2 `}
            >
              <span className="block translate-y-[3px]">
                {el === 0 ? "Ref" : "Alt"}
              </span>
            </div>
          );
        })}
      </div>
      <button
        disabled={disabled}
        onClick={() => {
          if (callback) {
            // console.log(getRowConfiguration(rowNum));
            callback(getRowConfiguration(rowNum));
          }
        }}
        className="flex flex-col"
      >
        <Microhaplotype
          className={`my-0.5 grow border-2 dark:brightness-75 text-black ${
            hint
              ? hint.join("") === getRowConfiguration(rowNum).join("")
                ? "outline outline-2  outline-offset-4 z-10 outline-black"
                : "opacity-50"
              : ""
          } ${microhaplotypeColorMap.get(
            JSON.stringify(getRowConfiguration(rowNum))
          )}`}
          vals={getRowConfiguration(rowNum)}
          //@ts-ignore
          possibleVals={possibleVals}
        />{" "}
      </button>
    </div>
  );
}
