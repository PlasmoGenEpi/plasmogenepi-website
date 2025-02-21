import { fixedData } from "@/data/Interactives/fixedData";
import GenotypeComposition from "./GenotypeComposition";
import Person from "../Person";
import { findLociWithSharedMicrohaplotypes } from "@/helpers/helpers";

function convertColumns(highlightColumns: number[]) {
  let copyArrs = [...highlightColumns];
  copyArrs.sort();
  let newArrs = [];
  let x = [];
  for (let i = 0; i < 12; i++) {
    if (copyArrs.includes(i)) {
      x.push(i);
    } else {
      if (x.length) {
        newArrs.push(x);
      }
      x = [];
    }
  }
  if (x.length) {
    newArrs.push(x);
  }
  return newArrs;
}

export default function CompareGenotypes({
  firstPersonId,
  secondPersonId,
  // highlightColumns,
}: {
  firstPersonId: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | null;
  secondPersonId: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | null;
  // highlightColumns: number[];
}) {
  // if (firstPersonId === null || secondPersonId === null) {
  //   return null;
  // }

  const highlightColumns =
    firstPersonId !== null && secondPersonId !== null
      ? findLociWithSharedMicrohaplotypes(
          fixedData[8].persons[firstPersonId].cases,
          fixedData[8].persons[secondPersonId].cases,
        )
      : [];

  return (
    <div
      className={
        firstPersonId === null || secondPersonId === null
          ? "invisible p-8 pb-4"
          : `fadeIn500 p-8 pb-4`
      }
    >
      {/* <div className="grid grid-cols-5">
        <div className="col-span-4 col-start-2 grid h-12 grid-cols-12 gap-0.5">
          {highlightColumns.map((el, idx) => {
            return (
              <label
                style={{
                  gridColumnStart: el + 1,
                }}
                key={idx}
                className={`col-span-1 mt-auto text-center text-xs font-bold first-letter:text-sm`}
              >
                L{el + 1}
              </label>
            );
          })}
        </div>
      </div> */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 flex">
          <div className="w-[20%]"></div>
          <div className="grid grow grid-cols-12 gap-1 p-1">
            {convertColumns(highlightColumns).map((highlightColumnArr, idx) => {
              return (
                <div
                  style={{
                    gridColumnStart: highlightColumnArr[0] + 1,
                    gridColumnEnd:
                      highlightColumnArr[highlightColumnArr.length - 1] + 2,
                  }}
                  key={idx}
                  className={`z-10 h-full outline outline-2 outline-offset-[1px] outline-black`}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="flex">
          <div className="w-[20%]">
            <Person id={firstPersonId} />
          </div>
          <GenotypeComposition
            highlightColumns={highlightColumns}
            genotypeComposition={
              firstPersonId !== null
                ? fixedData[8].persons[firstPersonId].cases
                : []
            }
          />
        </div>
        <div className="mt-2 flex">
          <div className="w-[20%]">
            <Person id={secondPersonId} />
          </div>
          <GenotypeComposition
            highlightColumns={highlightColumns}
            genotypeComposition={
              secondPersonId !== null
                ? fixedData[8].persons[secondPersonId].cases
                : []
            }
          />
        </div>
      </div>
      {
        <div
          className={
            firstPersonId && secondPersonId
              ? "mt-4 text-center text-lg font-bold"
              : "invisible mt-4 text-center text-lg font-bold"
          }
        >
          IBS:{" "}
          {(
            fixedData[8].persons[firstPersonId ?? "E"].IBS[
              secondPersonId ?? "F"
            ] * 100
          ).toFixed(2)}
          %
        </div>
      }
    </div>
  );
}
