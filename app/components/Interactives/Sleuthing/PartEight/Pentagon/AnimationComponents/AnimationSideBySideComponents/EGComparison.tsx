// import CloneRow, {
//   cloneRowButtonColors,
// } from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import Person from "../../../Person";
// import SquareMicrohaplotype from "@/app/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
import { fixedData } from "@/data/Interactives/fixedData";
import { atom, useAtom, useAtomValue } from "jotai";
import Image from "next/image";
import { phase2Atom } from "@/data/Interactives/interactiveStore";
import { useEffect } from "react";
import SquareMicrohaplotype from "@/app/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";

export const partEightCloneRowColors: { [key: number]: string } = {
  1: "to-cloneRed/80 via-cloneRed/80",
  2: "to-cloneBlue via-cloneBlue",
  3: "to-cloneOrange via-cloneOrange",
  4: "to-microPurple via-microPurple",
  5: "to-microTeal via-microTeal",
};

export const EGAnimationCompleteAtom = atom(false);
export const EGRecombinationCompleteAtom = atom(false);

export default function EGComparison() {
  const phase = useAtomValue(phase2Atom);
  const [EGAnimationComplete, setEGAnimationComplete] = useAtom(
    EGAnimationCompleteAtom,
  );
  const [EGRecombinationComplete, setEGRecombinationComplete] = useAtom(
    EGRecombinationCompleteAtom,
  );

  useEffect(() => {
    if (phase < 27) {
      setEGAnimationComplete(false);
    }
    if (phase < 26) {
      setEGRecombinationComplete(false);
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
                  <div className={`aspect-square rounded-full bg-cloneRed`}>
                    <div className="flex aspect-square items-center justify-center rounded-full">
                      <span className="absolute translate-y-[3px] font-bold"></span>
                    </div>
                  </div>
                </div>
                <ol
                  className={`grid h-full grow grid-cols-12 gap-0.5 bg-cloneRed/60 p-1 shadow-sm shadow-black`}
                >
                  {Array(12)
                    .fill(0)
                    .map((el, idx) => {
                      return (
                        <SquareMicrohaplotype
                          className={
                            EGAnimationComplete && idx >= 6
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
                  <div className={`aspect-square rounded-full bg-cloneBlue`}>
                    <div className="flex aspect-square items-center justify-center rounded-full">
                      <span className="absolute translate-y-[3px] font-bold"></span>
                    </div>
                  </div>
                </div>
                <ol
                  className={`grid h-full grow grid-cols-12 gap-0.5 bg-cloneBlue p-1 shadow-sm shadow-black`}
                >
                  {Array(12)
                    .fill(0)
                    .map((el, idx) => {
                      return (
                        <SquareMicrohaplotype
                          className={
                            EGAnimationComplete && idx < 6
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
          {phase >= 25 && (
            <div className="relative">
              <div className="fadeIn1000 flex w-full">
                <div className="my-auto w-[max(50px,15%)]"></div>
                <div className="relative grid grow gap-1 [grid-template-columns:8%_auto]">
                  <div
                    className={`absolute bottom-0 col-start-2 grid h-6 w-full grid-cols-2 ${
                      EGAnimationComplete ? "fadeIn500" : "hidden"
                    }`}
                  >
                    <div className="w-full border-l-4 border-t-4 border-cloneRed/80"></div>
                    <div className="w-full border-r-4 border-t-4 border-cloneBlue/80"></div>
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
                      EGAnimationComplete ? "fadeIn500" : "hidden"
                    }`}
                  >
                    <div className="w-full border-l-4 border-t-4 border-cloneRed/80"></div>
                    <div className="w-full border-r-4 border-t-4 border-cloneBlue/80"></div>
                  </div>
                  <div
                    style={{
                      transitionDelay: phase === 26 ? "2000ms" : "0ms",
                    }}
                    className={`bg-blend-overlay/ col-start-2 mx-auto my-4 aspect-square w-fit rounded-full bg-cloneBlue bg-gradient-to-r from-cloneRed/80 via-[#ffb0b0_25%,#b8e6fa_75%] to-cloneBlue/80 transition-all hover:scale-105 focus:ring-2 focus:ring-black active:scale-90 disabled:hover:scale-100 ${
                      EGRecombinationComplete ? "opacity-100" : "opacity-0"
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
            </div>
          )}
          {EGAnimationComplete && (
            <div className="fadeIn1000 flex">
              <div className="my-auto w-[max(50px,15%)]">
                <Person id={"G"} />
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
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cloneRed/80 via-[#e61048_50%,#4896e8_50%] to-cloneBlue"></div>
                  </div>
                  <ol
                    className={`grid h-full grow grid-cols-12 gap-0.5 bg-gradient-to-r from-cloneRed/80 via-[#e61048_50%,#4896e8_50%] to-cloneBlue p-1 shadow-sm shadow-black`}
                  >
                    {Array(12)
                      .fill(0)
                      .map((el, idx) => {
                        return (
                          <SquareMicrohaplotype
                            id={fixedData[8].persons.G.cases[idx][0]}
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
      {/* <div className="flex">
        <div className="my-auto w-[max(50px,15%)]">
          <Person id={"E"} />
        </div>
        <div className="relative grid grow gap-1 [grid-template-columns:8%_auto]">
          <div
            className={`absolute bottom-0 col-start-2 grid h-6 w-full grid-cols-2 ${EGAnimationComplete ? "fadeIn500" : "hidden"}`}
          >
            <div className="w-full border-l-4 border-t-4 border-cloneRed"></div>
            <div className="w-full border-r-4 border-t-4 border-cloneBlue"></div>
          </div>
          <button
            disabled={EGAnimationComplete}
            onClick={() => {
              setEGAnimationComplete(true);
            }}
            data-tip={"Create Hybrid"}
            aria-label={"Create hybrid clone"}
            className={` ${!EGAnimationComplete ? "tooltip tooltip-bottom" : "translate-x-0"}  col-start-2 mx-auto my-4 aspect-square w-fit rounded-full bg-gradient-to-r from-cloneRed via-[#FFB0B0_25%,#B8E6FA_75%] to-cloneBlue bg-blend-overlay transition-all hover:scale-105 focus:ring-2 focus:ring-black active:scale-90 disabled:hover:scale-100`}
          >
            <Image
              alt="mosquito"
              src="/InteractiveAssets/mosquito.svg"
              height={100}
              width={100}
            ></Image>
          </button>
        </div>
      </div> */}
    </div>
  );
}
