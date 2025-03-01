// import CloneRow, {
//   cloneRowButtonColors,
// } from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import Person from "../../../Person";
// import SquareMicrohaplotype from "@/app/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
import { fixedData } from "@/data/Interactives/fixedData";
import { atom, useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import Image from "next/image";
import { phase2Atom } from "@/data/Interactives/interactiveStore";
import { usePrevious } from "@/app/components/hooks";
import SquareMicrohaplotype from "@/app/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
// import { usePrevious } from "@/app/components/hooks";

export const partEightCloneRowColors: { [key: number]: string } = {
  1: "to-microRed/80 via-microRed/80",
  2: "to-microBlue via-microBlue",
  3: "to-cloneOrange via-cloneOrange",
  4: "to-cloneYellow via-cloneYellow",
  5: "to-cloneGreen via-cloneGreen",
};

export const FHAnimationCompleteAtom = atom(false);
export const FHRecombinationCompleteAtom = atom(false);

export default function FHComparison() {
  const phase = useAtomValue(phase2Atom);
  const prevPhase = usePrevious(phase, 0);
  const direction = phase < prevPhase.current ? "backwards" : "forwards";
  const [FHAnimationComplete, setFHAnimationComplete] = useAtom(
    FHAnimationCompleteAtom,
  );
  const [FHRecombinationComplete, setFHRecombinationComplete] = useAtom(
    FHRecombinationCompleteAtom,
  );

  useEffect(() => {
    if (phase <= 33 || (phase === 33 && direction === "forwards")) {
      setFHAnimationComplete(false);
    }
    // if (phase === 32) {
    //   if (direction === "forwards") {
    //     setFHAnimationComplete(false);
    //   }
    // }
    if (phase === 32 && direction === "forwards") {
      setFHRecombinationComplete(false);
    } else if (phase < 32) {
      setFHRecombinationComplete(false);
    }
  }, [phase]);

  return (
    <div className="fadeIn1000">
      <div className="mt-8">
        <div className="flex flex-col gap-4  py-4 pr-4">
          <div className="flex">
            <div className="my-auto w-[max(50px,15%)]">
              <Person id={"F"} />
            </div>
            <div className="flex grow flex-col items-center gap-2">
              <div
                className={`grid  w-full gap-1 font-helvetica transition-all [grid-template-columns:8%_auto]`}
              >
                <div className="my-auto">
                  <div
                    className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${partEightCloneRowColors[4]}`}
                  >
                    <div className="flex aspect-square items-center justify-center rounded-full">
                      <span className="absolute translate-y-[3px] font-bold"></span>
                    </div>
                  </div>
                </div>
                <ol
                  className={`grid h-full grow grid-cols-12 gap-0.5 bg-cloneYellow p-1 shadow-sm shadow-black`}
                >
                  {Array(12)
                    .fill(0)
                    .map((el, idx) => {
                      return (
                        <SquareMicrohaplotype
                          id={fixedData[8].persons.F.cases[idx][0]}
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
                    className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${partEightCloneRowColors[3]}`}
                  >
                    <div className="flex aspect-square items-center justify-center rounded-full">
                      <span className="absolute translate-y-[3px] font-bold"></span>
                    </div>
                  </div>
                </div>
                <ol
                  className={`grid h-full grow grid-cols-12 gap-0.5 bg-cloneOrange p-1 shadow-sm shadow-black`}
                >
                  {Array(12)
                    .fill(0)
                    .map((el, idx) => {
                      return (
                        <SquareMicrohaplotype
                          id={fixedData[8].persons.F.cases[idx][1]}
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
                    className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${partEightCloneRowColors[5]}`}
                  >
                    <div className="flex aspect-square items-center justify-center rounded-full">
                      <span className="absolute translate-y-[3px] font-bold"></span>
                    </div>
                  </div>
                </div>
                <ol
                  className={`grid h-full grow grid-cols-12 gap-0.5 bg-cloneGreen p-1 shadow-sm shadow-black`}
                >
                  {Array(12)
                    .fill(0)
                    .map((el, idx) => {
                      return (
                        <SquareMicrohaplotype
                          id={fixedData[8].persons.F.cases[idx][2]}
                          key={idx}
                        />
                      );
                    })}
                </ol>
              </div>
            </div>
          </div>
          {phase >= 31 && (
            <div className="relative">
              <div className="fadeIn1000 flex w-full">
                <div className="my-auto w-[max(50px,15%)]"></div>
                <div className="relative grid grow gap-1 [grid-template-columns:8%_auto]">
                  <div
                    className={`absolute bottom-0 col-start-2 grid h-6 w-full grid-cols-2 ${
                      FHAnimationComplete ? "fadeIn500" : "hidden"
                    }`}
                  >
                    <div className="w-full border-l-4 border-t-4 border-microRed/80"></div>
                    <div className="w-full border-r-4 border-t-4 border-microBlue/80"></div>
                  </div>
                  <div
                    className={`col-start-2 mx-auto my-4 aspect-square w-fit rounded-full bg-blend-overlay transition-all hover:scale-105 focus:ring-2 focus:ring-black active:scale-90 disabled:hover:scale-100`}
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
              <div className="fadeIn1000 absolute top-0 flex w-full">
                <div className="my-auto w-[max(50px,15%)]"></div>
                <div className="relative grid grow gap-1 [grid-template-columns:8%_auto]">
                  <div
                    className={`absolute bottom-0 col-start-2 grid h-6 w-full grid-cols-2 ${
                      FHAnimationComplete ? "fadeIn500" : "hidden"
                    }`}
                  >
                    <div className="w-full border-l-4 border-t-4 border-cloneYellow"></div>
                    <div className="w-full border-r-4 border-t-4 border-cloneOrange"></div>
                  </div>
                  <div
                    className={`absolute -bottom-2 -right-2 left-2 col-start-2 grid h-6 w-full grid-cols-2 ${
                      FHAnimationComplete ? "fadeIn500" : "hidden"
                    }`}
                  >
                    <div className="w-full border-l-4 border-t-4 border-cloneGreen"></div>
                    <div className="w-full border-r-4 border-t-4 border-cloneYellow"></div>
                  </div>
                  <div
                    style={{
                      backgroundImage:
                        "conic-gradient(#FEEC96, #FEEC96 50%, #fecc94 50%, #fecc94 75%, #c8ebc3 75%, #c8ebc3 100%)",
                      transitionDelay: phase === 32 ? "1000ms" : "0ms",
                    }}
                    className={`col-start-2 mx-auto my-4 aspect-square w-fit rounded-full bg-gradient-radial from-cloneYellow via-[#FEEC96_33%,#000000_33%_#000000_66%,#c8ebc3_66%] to-cloneGreen bg-blend-overlay transition-all hover:scale-105 focus:ring-2 focus:ring-black active:scale-90 disabled:hover:scale-100 ${
                      FHRecombinationComplete ? "opacity-100" : "opacity-0"
                    } z-10 transition-all duration-1000`}
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
            </div>
          )}
          {FHAnimationComplete && (
            <div className="fadeIn1000 flex">
              <div className="w-[max(50px,15%)]">
                <Person id={"H"} />
              </div>
              <div className="flex grow flex-col items-center gap-2">
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
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cloneYellow via-[#FEEC96_50%,#fecc94_50%] to-cloneOrange"></div>
                  </div>
                  <ol
                    className={`grid h-full grow grid-cols-12 gap-0.5 bg-gradient-to-r from-cloneYellow via-[#FEEC96_50%,#fecc94_50%] to-cloneOrange p-1 shadow-sm shadow-black lg:p-1`}
                  >
                    {Array(12)
                      .fill(0)
                      .map((el, idx) => {
                        return (
                          <SquareMicrohaplotype
                            id={fixedData[8].persons.H.cases[idx][0]}
                            key={idx}
                          />
                        );
                      })}
                  </ol>
                </div>
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
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cloneGreen via-[#c8ebc3_50%,#FEEC96_50%] to-cloneYellow"></div>
                  </div>
                  <ol
                    className={`grid h-full grow grid-cols-12 gap-0.5 bg-gradient-to-r from-cloneGreen via-[#c8ebc3_50%,#FEEC96_50%] to-cloneYellow p-1 shadow-sm shadow-black lg:p-1`}
                  >
                    {Array(12)
                      .fill(0)
                      .map((el, idx) => {
                        return (
                          <SquareMicrohaplotype
                            id={fixedData[8].persons.H.cases[idx][1]}
                            key={idx}
                          />
                        );
                      })}
                  </ol>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
