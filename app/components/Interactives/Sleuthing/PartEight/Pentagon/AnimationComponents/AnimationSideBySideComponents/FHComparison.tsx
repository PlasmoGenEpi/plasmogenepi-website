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
  3: "to-microOrange via-microOrange",
  4: "to-microPurple via-microPurple",
  5: "to-microTeal via-microTeal",
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
                  className={`grid h-full grow grid-cols-12 gap-0.5 bg-microPurple p-1 shadow-sm shadow-black`}
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
                  className={`grid h-full grow grid-cols-12 gap-0.5 bg-microOrange p-1 shadow-sm shadow-black`}
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
                  className={`grid h-full grow grid-cols-12 gap-0.5 bg-microTeal p-1 shadow-sm shadow-black`}
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
                    <div className="w-full border-l-4 border-t-4 border-microPurple"></div>
                    <div className="w-full border-r-4 border-t-4 border-microOrange"></div>
                  </div>
                  <div
                    className={`absolute -bottom-2 -right-2 left-2 col-start-2 grid h-6 w-full grid-cols-2 ${
                      FHAnimationComplete ? "fadeIn500" : "hidden"
                    }`}
                  >
                    <div className="w-full border-l-4 border-t-4 border-microTeal"></div>
                    <div className="w-full border-r-4 border-t-4 border-microPurple"></div>
                  </div>
                  <div
                    style={{
                      backgroundImage:
                        "conic-gradient(#C45ED8, #C45ED8 50%, #FE8638 50%, #FE8638 75%, #16A0AC 75%, #16A0AC 100%)",
                      transitionDelay: phase === 32 ? "1000ms" : "0ms",
                    }}
                    className={`col-start-2 mx-auto my-4 aspect-square w-fit rounded-full bg-gradient-radial from-microPurple via-[#C45ED8_33%,#000000_33%_#000000_66%,#16A0AC_66%] to-microTeal bg-blend-overlay transition-all hover:scale-105 focus:ring-2 focus:ring-black active:scale-90 disabled:hover:scale-100 ${
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
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-microPurple via-[#C45ED8_50%,#FE8638_50%] to-microOrange"></div>
                  </div>
                  <ol
                    className={`grid h-full grow grid-cols-12 gap-0.5 bg-gradient-to-r from-microPurple via-[#C45ED8_50%,#FE8638_50%] to-microOrange p-1 shadow-sm shadow-black lg:p-1`}
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
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-microTeal via-[#16a0ac_50%,#C45ED8_50%] to-microPurple"></div>
                  </div>
                  <ol
                    className={`grid h-full grow grid-cols-12 gap-0.5 bg-gradient-to-r from-microTeal via-[#16a0ac_50%,#C45ED8_50%] to-microPurple p-1 shadow-sm shadow-black lg:p-1`}
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
