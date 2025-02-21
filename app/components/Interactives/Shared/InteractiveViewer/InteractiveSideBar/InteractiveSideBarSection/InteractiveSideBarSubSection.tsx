import { useEffect, useState } from "react";
import { currentView2Atom } from "../../InteractiveViewer";
import { useAtom, useAtomValue } from "jotai";
import { sections2 } from "@/app/components/Interactives/Sleuthing/5.6/pages/sections";
import {
  partEightCompletionAtom,
  partSevenCompletionAtom,
  partSixCompletionAtom,
} from "@/data/Interactives/interactiveStore";
import { compareGenotypesCompleteAtom } from "@/app/components/Interactives/Sleuthing/PartEight/PartEightControlPanel";

export default function InteractiveSideBarSubSection({
  title,
  node,
  // subcomponents,
  parentIsOpen,
  active,
  sectionId,
  callback,
  locked,
  available,
}: {
  available?: boolean;
  locked?: boolean;
  callback: any;
  sectionId: number;
  parentIsOpen: boolean;
  title: string;
  active: any;
  node: {
    subcomponents: {
      title: string;
      callback: (t: any) => void;
      active: boolean;
      requires?: boolean;
      complete?: boolean;
    }[];
  };
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useAtom(currentView2Atom);
  const p6Completion = useAtomValue(partSixCompletionAtom);
  const p7Completion = useAtomValue(partSevenCompletionAtom);
  const p8Completion = useAtomValue(partEightCompletionAtom);
  const [compareGenotypesComplete, setCompareGenotypesComplete] = useAtom(
    compareGenotypesCompleteAtom,
  );

  let listIsActive = node.subcomponents
    .map((subComp) => {
      return active(sectionId, subComp.title);
    })
    .includes(true);

  // useEffect(() => {
  // if (!parentIsOpen) {
  //   if (!listIsActive) {
  //     setIsOpen(false);
  //   } else {
  //     // setIsOpen(true);
  //   }
  // }
  // }, [parentIsOpen]);

  useEffect(() => {
    if (listIsActive) {
      if (parentIsOpen) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  }, [currentView.phase, parentIsOpen]);

  const handleLocked = function (
    sectionId: number,
    parentTitle: string,
    title: string,
  ) {
    if (sectionId === 1) {
      if (parentTitle === "1.1 Genotyping with SNPs") {
        let sectionObjArr = sections2[1].subcomponents[1]?.subcomponents;
        if (title === sectionObjArr[0].title) {
          return {
            available: p6Completion[0],
            complete: p6Completion[1],
          };
          return !p6Completion[0];
        } else if (title === sectionObjArr[1].title) {
          return {
            available: p6Completion[1],
            complete: p6Completion[2],
          };
        } else if (title === sectionObjArr[2].title) {
          return {
            available: p6Completion[2],
            complete: p6Completion[5],
          };
        } else if (title === sectionObjArr[3].title) {
          return {
            available: p6Completion[5],
            complete: p6Completion[6],
          };
        } else if (title === sectionObjArr[4].title) {
          return {
            available: p6Completion[6],
            complete: p6Completion[10],
          };
        } else if (title === sectionObjArr[5].title) {
          return {
            available: p6Completion[10],
            complete: p6Completion[11],
          };
        } else if (title === sectionObjArr[6].title) {
          return {
            available: p6Completion[11],
            complete: p6Completion[14.5],
          };
        } else if (title === sectionObjArr[7].title) {
          return {
            available: p6Completion[14.5],
            complete: p6Completion[15],
          };
        }
      } else if (parentTitle === "1.2 Genotyping with Microhaplotypes") {
        let sectionObjArr = sections2[1].subcomponents[2]?.subcomponents;
        if (title === sectionObjArr[0].title) {
          return {
            available: p6Completion[15],
            complete: p6Completion[22],
          };
          return !p6Completion[0];
        } else if (title === sectionObjArr[1].title) {
          return {
            available: p6Completion[22],
            complete: p6Completion[22.5],
          };
        } else if (title === sectionObjArr[2].title) {
          return {
            available: p6Completion[22.5],
            complete: p6Completion[25],
          };
        } else if (title === sectionObjArr[3].title) {
          return {
            available: p6Completion[25],
            complete: p6Completion[26],
          };
        } else if (title === sectionObjArr[4].title) {
          return {
            available: p6Completion[26],
            complete: p6Completion[29],
          };
        } else if (title === sectionObjArr[5].title) {
          return {
            available: p6Completion[29],
            complete: p6Completion[32],
          };
        } else if (title === sectionObjArr[6].title) {
          return {
            available: p6Completion[32],
            complete: p6Completion[33.5],
          };
        }
      }
    } else if (sectionId === 2) {
      if (parentTitle === "2.1 Introduction") {
        let sectionObjArr = sections2[2].subcomponents[0]?.subcomponents;
        if (title === sectionObjArr[0].title) {
          return {
            available: p6Completion[33.5],
            complete: p7Completion[0],
          };
          // return !p6Completion[0];
        } else if (title === sectionObjArr[1].title) {
          return {
            available: p7Completion[0],
            complete: p7Completion[1],
          };
          // return !p6Completion[0];
        } else if (title === sectionObjArr[2].title) {
          return {
            available: p7Completion[1],
            complete: p7Completion[2],
          };
          // return !p6Completion[0];
        }
      } else if (
        parentTitle ===
        "2.2 Compare polyclonal controls to unrelated lab clones"
      ) {
        let sectionObjArr = sections2[2].subcomponents[1]?.subcomponents;
        if (title === sectionObjArr[0].title) {
          return {
            available: p7Completion[2],
            complete: p7Completion[5],
          };
          // return !p6Completion[0];
        } else if (title === sectionObjArr[1].title) {
          return {
            available: p7Completion[5],
            complete: p7Completion[7],
          };
          // return !p6Completion[0];
        } else if (title === sectionObjArr[2].title) {
          return {
            available: p7Completion[7],
            complete: p7Completion[9],
          };
          // return !p6Completion[0];
        }
      } else if (
        parentTitle === "2.3 Compare polyclonal controls to related lab clones"
      ) {
        let sectionObjArr = sections2[2].subcomponents[2]?.subcomponents;
        if (title === sectionObjArr[0].title) {
          return {
            available: p7Completion[9],
            complete: p7Completion[11],
          };
          // return !p6Completion[0];
        } else if (title === sectionObjArr[1].title) {
          return {
            available: p7Completion[11],
            complete: p7Completion[13],
          };
          // return !p6Completion[0];
        } else if (title === sectionObjArr[2].title) {
          return {
            available: p7Completion[13],
            complete: p7Completion[15],
          };
          // return !p6Completion[0];
        } else if (title === sectionObjArr[3].title) {
          return {
            available: p7Completion[15],
            complete: p7Completion[16],
          };
          // return !p6Completion[0];
        }
      }
    } else if (sectionId === 3) {
      if (parentTitle === "Scenario 1 - Boarding School") {
        let sectionObjArr = sections2?.[3]?.subcomponents?.[0].subcomponents;
        if (title === sectionObjArr[0].title) {
          return {
            available: p7Completion[17],
            complete: p8Completion[1],
          };
        } else if (title === sectionObjArr[1].title) {
          return {
            available: p8Completion[1],
            complete: p8Completion[4],
          };
        } else if (title === sectionObjArr[2].title) {
          return {
            available: p8Completion[4],
            complete: p8Completion[5],
          };
        } else if (title === sectionObjArr[3].title) {
          return {
            available: p8Completion[5],
            complete: p8Completion[7],
          };
        } else if (title === sectionObjArr[4].title) {
          return {
            available: p8Completion[7],
            complete: p8Completion[8],
          };
        }
        // return {
        //   available: true,
        //   complete: true,
        // };
      } else if (parentTitle === "Scenario 2 - Village Outbreak") {
        let sectionObjArr = sections2?.[3]?.subcomponents?.[1].subcomponents;
        if (title === sectionObjArr[0].title) {
          return {
            available: p8Completion[8],
            complete: p8Completion[9],
          };
        } else if (title === sectionObjArr[1].title) {
          return {
            available: p8Completion[9],
            complete: p8Completion[10],
          };
        } else if (title === sectionObjArr[2].title) {
          return {
            available: p8Completion[10],
            complete: compareGenotypesComplete,
            // starts 12
          };
        } else if (title === sectionObjArr[3].title) {
          return {
            available: compareGenotypesComplete,
            complete: p8Completion[22],
          };
        } else if (title === sectionObjArr[4].title) {
          return {
            available: p8Completion[22],
            complete: p8Completion[39],
          };
        }
      }
    }
    return {
      available: false,
      complete: false,
    };
  };

  console.log(p8Completion);

  return (
    <div>
      <button
        onClick={(e) => {
          setIsOpen(!isOpen);
          e.stopPropagation();
        }}
        className={`grid w-full grid-cols-[40px_auto_40px] place-items-start py-3 pl-[10%] ${
          listIsActive && !isOpen ? "bg-white/5" : "hover:bg-white/[2%]"
        }`}
      >
        <svg
          width="16pt"
          height="16pt"
          className={`fill-current ${isOpen ? "-rotate-90" : ""} duration-500`}
          version="1.1"
          viewBox="0 0 1200 1200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
        </svg>
        <span className="col-start-2 block place-self-start text-start">
          {node.title}
        </span>
        {/* <button className="" key={idx}>
          </button> */}
      </button>
      <div
        className={`col-span-full grid w-full duration-500 ${
          isOpen ? "grid-rows-[1fr]" : `grid-rows-[0fr]`
        }`}
      >
        <div className="bg-red-500/ row-span-2 w-full overflow-hidden">
          <ol className="grid">
            {node.subcomponents.map((subcomponent, idx) => {
              const { available, complete } = handleLocked(
                sectionId,
                node?.title,
                subcomponent.title,
              );
              return (
                <button
                  disabled={!!available === false}
                  // disabled={subcomponent?.locked}
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(sectionId, title);
                    callback(sectionId, subcomponent.title);
                  }}
                  key={idx}
                  className={`relative w-full py-3  pl-[calc(10%+40px)] pr-10
                    ${
                      isOpen && active(sectionId, subcomponent.title)
                        ? "bg-white/5"
                        : subcomponent?.locked
                        ? ""
                        : "hover:bg-white/[2%] disabled:hover:bg-transparent"
                    }
                    `}
                >
                  <span className="text-start/ block w-full place-self-start justify-self-start pl-5 text-left">
                    {subcomponent.title}
                  </span>
                  <div
                    className={`${available ? "border" : "hidden"} ${
                      complete ? "bg-current" : "bg-transparent"
                    } absolute right-3 top-1/2 aspect-square  h-2 w-2 -translate-x-1/2 self-center rounded-full border border-current bg-current text-zinc-600`}
                  ></div>
                </button>
              );
            })}
            {/* {Array(5)
              .fill(0)
              .map((el, idx) => {
                return (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    key={idx}
                    className={`py-3 pl-[calc(10%+60px)] hover:bg-white/[2%] w-full pr-10`}
                  >
                    <span className="block place-self-start pl-5 text-left">
                      Introduction here is a bunch more t t t t t
                    </span>
                  </button>
                );
              })} */}
            {/* <InteractiveSideBarSubSection title="List" /> */}
          </ol>
        </div>
      </div>
    </div>
  );
}
