import CloneRow, {
  cloneRowButtonColors,
} from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import Person from "../../../Person";
import SquareMicrohaplotype from "@/app/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
import { fixedData } from "@/data/Interactives/fixedData";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";

export const partEightCloneRowColors: { [key: number]: string } = {
  1: "to-microRed/80 via-microRed/80",
  2: "to-microBlue via-microBlue",
  3: "to-microOrange via-microOrange",
  4: "to-microPurple via-microPurple",
  5: "to-microTeal via-microTeal",
};

export const showIBDAtom = atom(false);
export const showIBSAtom = atom(false);

export default function GIComparison() {
  const [showIBD, setShowIBD] = useAtom(showIBDAtom);
  const [showIBS, setShowIBS] = useAtom(showIBSAtom);

  useEffect(() => {
    return () => {
      setShowIBD(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fadeIn1000">
      <div>
        <h2 className="text-center text-xl font-bold md:text-left">
          <span className="">G</span>
          <span className=" inline-block -translate-y-0.5 text-3xl">
            &harr;
          </span>

          <span className=" ">I</span>
        </h2>{" "}
      </div>
      <div className="mt-8">
        <div className="flex flex-col gap-4  py-4 pr-4">
          <div className="flex">
            <div className="w-[max(50px,15%)]">
              <Person id={"G"} />
            </div>
            <div className="flex grow items-center">
              <div
                className={`grid  w-full gap-1 font-helvetica transition-all [grid-template-columns:8%_auto]`}
              >
                <div
                  style={{
                    backgroundImage: `
      radial-gradient(circle at center,white, #ffffffd0 20%, transparent)

        `,
                  }}
                  className="relative my-auto flex aspect-square items-center justify-center overflow-hidden rounded-full"
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-microRed/80 via-[#e61048_50%,#4896e8_50%] to-microBlue"></div>
                </div>
                <ol
                  className={`grid h-full grow grid-cols-12 gap-0.5 bg-gradient-to-r from-microRed/80 via-[#e61048_50%,#4896e8_50%] to-microBlue p-1 shadow-sm shadow-black `}
                >
                  {Array(12)
                    .fill(0)
                    .map((el, idx) => {
                      return (
                        <SquareMicrohaplotype
                          className={
                            showIBD
                              ? [0, 1, 2, 6, 7, 8].includes(idx)
                                ? "fadeIn500"
                                : "fadeOut500"
                              : showIBS
                              ? [0, 1, 2, 6, 7, 8, 11, 5].includes(idx)
                                ? "fadeIn500"
                                : "fadeOut500"
                              : "fadeIn500"
                          }
                          id={fixedData[8].persons.G.cases[idx][0]}
                          key={idx}
                        />
                      );
                    })}
                </ol>
              </div>
            </div>
          </div>
          {/* <div className="flex">
            <div className="w-[max(50px,15%)]"></div>
            <div className="flex grow items-center">
              <div
                className={`grid  w-full gap-1 font-helvetica transition-all [grid-template-columns:8%_auto]`}
              >
                <div
                  style={{
                    backgroundImage: `
      radial-gradient(circle at center,white, #ffffffd0 20%, transparent)

        `,
                  }}
                  className="relative my-auto flex aspect-square items-center justify-center overflow-hidden rounded-full"
                ></div>
                <ol
                  className={`grid h-full grow grid-cols-12 place-items-center gap-0.5 p-1 lg:p-1`}
                >
                  {Array(12)
                    .fill(0)
                    .map((el, idx) => {
                      return (
                        <div
                          key={idx}
                          className={
                            [0, 1, 2, 6, 7, 8].includes(idx)
                              ? "h-full w-0.5 bg-black"
                              : "invisible"
                          }
                        ></div>
                      );
                    })}
                </ol>
              </div>
            </div>
          </div> */}
          <div className="flex">
            <div className="w-[max(50px,15%)]">
              <Person id={"I"} />
            </div>
            <div className="flex grow items-center">
              <div
                className={`grid  w-full gap-1 font-helvetica transition-all [grid-template-columns:8%_auto]`}
              >
                <div
                  style={{
                    backgroundImage: `
      radial-gradient(circle at center,white, #ffffffd0 20%, transparent)

        `,
                  }}
                  className="relative my-auto flex aspect-square items-center justify-center overflow-hidden rounded-full"
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-microRed/80 via-[#e61048_50%,#4896e8_50%] to-microBlue"></div>
                </div>
                <ol
                  className={`grid h-full grow grid-cols-12 gap-0.5 bg-gradient-to-r from-microRed/80 via-[#e61048_25.5%,#4896e8_25.5%,#4896e8_74.5%,#e61048_74.5%] to-microRed/80 p-1 shadow-sm shadow-black lg:p-1`}
                >
                  {Array(12)
                    .fill(0)
                    .map((el, idx) => {
                      return (
                        <SquareMicrohaplotype
                          className={
                            showIBD
                              ? [0, 1, 2, 6, 7, 8].includes(idx)
                                ? "fadeIn500"
                                : "fadeOut500"
                              : showIBS
                              ? [0, 1, 2, 6, 7, 8, 11, 5].includes(idx)
                                ? "fadeIn500"
                                : "fadeOut500"
                              : "fadeIn500"
                          }
                          id={fixedData[8].persons.I.cases[idx][0]}
                          key={idx}
                        />
                      );
                    })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <div
          onMouseOver={() => {
            setShowIBD(true);
          }}
          onFocus={() => {
            setShowIBD(true);
          }}
          onBlur={() => {
            setShowIBD(false);
          }}
          onMouseLeave={() => {
            setShowIBD(false);
          }}
          onClick={() => {
            setShowIBD(!showIBD);
          }}
        >
          IBD: 50%
        </div>
        <div
          onMouseOver={() => {
            setShowIBS(true);
          }}
          onFocus={() => {
            setShowIBS(true);
          }}
          onBlur={() => {
            setShowIBS(false);
          }}
          onMouseLeave={() => {
            setShowIBS(false);
          }}
          onClick={() => {
            setShowIBS(!showIBS);
          }}
        >
          IBS: 66.6%
        </div>
      </div>
    </div>
  );
}
