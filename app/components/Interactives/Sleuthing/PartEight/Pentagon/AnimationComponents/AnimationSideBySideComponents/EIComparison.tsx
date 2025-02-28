// import CloneRow, {
//   cloneRowButtonColors,
// } from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import Person from "../../../Person";
// import SquareMicrohaplotype from "@/app/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
import { fixedData } from "@/data/Interactives/fixedData";
import { atom, useAtom, useAtomValue } from "jotai";
import { phase2Atom } from "@/data/Interactives/interactiveStore";
import { useEffect } from "react";
import Image from "next/image";
import { usePrevious } from "@/app/components/hooks";
import SquareMicrohaplotype from "@/app/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
// import { usePrevious } from "@/app/components/hooks";

export const partEightCloneRowColors: { [key: number]: string } = {
  1: "to-microRed/80 via-microRed/80",
  2: "to-microBlue via-microBlue",
  3: "to-microOrange via-microOrange",
  4: "to-microPurple via-microPurple",
  5: "to-microTeal via-microTeal",
};

export const EIAnimationCompleteAtom = atom(false);
export const EIRecombinationCompleteAtom = atom(false);

export default function EIComparison() {
  const phase = useAtomValue(phase2Atom);
  const [EIAnimationComplete, setEIAnimationComplete] = useAtom(
    EIAnimationCompleteAtom,
  );
  const [EIRecombinationComplete, setEIRecombinationComplete] = useAtom(
    EIRecombinationCompleteAtom,
  );
  const prevPhase = usePrevious(phase, 0);
  const direction = phase < prevPhase.current ? "backwards" : "forwards";

  useEffect(() => {
    if (phase < 28) {
      setEIAnimationComplete(false);
    } else if (phase === 28) {
      if (direction === "forwards") {
        setEIAnimationComplete(false);
      }
    }
  }, [phase]);

  return (
    <div className="fadeIn500">
      <div className="mt-8">
        <div className="flex flex-col gap-4  py-4 pr-4">
          <div className="flex">
            <div className="my-auto w-[max(50px,15%)]">
              <Person id={"E"} />
            </div>
            <div className="flex grow flex-col items-center gap-2">
              <div
                className={`grid  w-full gap-1 font-helvetica transition-all [grid-template-columns:8%_auto]`}
              >
                <div className="my-auto">
                  <div
                    className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${partEightCloneRowColors[1]}`}
                  >
                    <div className="flex aspect-square items-center justify-center rounded-full">
                      <span className="absolute translate-y-[3px] font-bold"></span>
                    </div>
                  </div>
                </div>
                <ol
                  className={`grid h-full grow grid-cols-12 gap-0.5 bg-microRed/60 p-1 shadow-sm shadow-black`}
                >
                  {Array(12)
                    .fill(0)
                    .map((el, idx) => {
                      return (
                        <SquareMicrohaplotype
                          className={
                            EIAnimationComplete && !(idx < 3 || idx >= 9)
                              ? "fadeOut1000"
                              : "opacity-100"
                          }
                          id={fixedData[8].persons.E.cases[idx][0]}
                          key={idx}
                        />
                      );
                    })}
                </ol>
              </div>
              <div
                className={`grid  w-full gap-1 font-helvetica transition-all [grid-template-columns:8%_auto]`}
              >
                <div className="my-auto">
                  <div
                    className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${partEightCloneRowColors[2]}`}
                  >
                    <div className="flex aspect-square items-center justify-center rounded-full">
                      <span className="absolute translate-y-[3px] font-bold"></span>
                    </div>
                  </div>
                </div>
                <ol
                  className={`grid h-full grow grid-cols-12 gap-0.5 bg-microBlue  p-1 shadow-sm shadow-black`}
                >
                  {Array(12)
                    .fill(0)
                    .map((el, idx) => {
                      return (
                        <SquareMicrohaplotype
                          className={
                            EIAnimationComplete && (idx < 3 || idx >= 9)
                              ? "fadeOut1000"
                              : "opacity-100"
                          }
                          id={fixedData[8].persons.E.cases[idx][1]}
                          key={idx}
                        />
                      );
                    })}
                </ol>
              </div>
            </div>
          </div>
          {EIAnimationComplete && (
            <div>
              <div className="fadeIn1000  top-0 flex w-full">
                <div className="my-auto w-[max(50px,15%)]"></div>
                <div className="relative grid grow gap-1 [grid-template-columns:8%_auto]">
                  <div
                    className={`absolute bottom-0 col-start-2 grid h-6 w-full grid-cols-2 ${
                      EIAnimationComplete ? "fadeIn500" : "hidden"
                    }`}
                  >
                    <div
                      style={{}}
                      className="border-red-to-blue-gradient w-full"
                    ></div>
                    <div className="border-blue-to-red-gradient w-full"></div>
                  </div>
                  <div
                    style={{
                      transitionDelay: phase === 26 ? "2000ms" : "0ms",
                    }}
                    className={`col-start-2 mx-auto my-4 aspect-square w-fit rounded-full bg-gradient-to-b from-microRed/80 via-[#E61048e0_25%,#4896E8e0_75%] to-microBlue/80 bg-blend-overlay transition-all hover:scale-105 focus:ring-2 focus:ring-black active:scale-90 disabled:hover:scale-100 ${
                      EIAnimationComplete ? "opacity-100" : "opacity-0"
                    } z-50 transition-all duration-1000`}
                  >
                    <Image
                      alt="mosquito"
                      src="/InteractiveAssets/mosquito.svg"
                      height={80}
                      width={80}
                    ></Image>
                  </div>
                </div>
              </div>
              <div
                style={{
                  animationDelay:
                    phase === 28 && direction === "forwards" ? "1000ms" : "",
                }}
                className="fadeIn1000 flex"
              >
                <div className="my-auto w-[max(50px,15%)]">
                  <Person id={"I"} />
                </div>
                <div className="flex grow  items-center gap-2">
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
                      <span className="-translate-x-0.5 translate-y-0.5 font-bold"></span>
                      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-microRed/80 via-[#e61048_50%,#4896e8_50%] to-microBlue"></div>
                      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-microRed/80 via-[#e61048_33%,#4896e8_33%_#4896e8_66%] to-microRed"></div> */}
                    </div>
                    <ol
                      className={`grid h-full grow grid-cols-12 gap-0.5 bg-gradient-to-r from-microRed/80 via-[#e61048_25.5%,#4896e8_25.5%,#4896e8_74.5%,#e61048_74.5%] to-microRed/80  p-1 shadow-sm shadow-black`}
                    >
                      {Array(12)
                        .fill(0)
                        .map((el, idx) => {
                          return (
                            <SquareMicrohaplotype
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
          )}
        </div>
      </div>
    </div>
  );
}
