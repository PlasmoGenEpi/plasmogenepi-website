import { useEffect, useState } from "react";
import InteractiveSideBarSubSection from "./InteractiveSideBarSubSection";
import { currentView2Atom } from "../../InteractiveViewer";
import { useAtom, useAtomValue } from "jotai";
import { sideBarIsOpenAtom } from "../InteractiveSideBar";
// import { sections2 } from "@/app/components/Interactives/Sleuthing/5.6/pages/sections";
import {
  partEightCompletionAtom,
  partSevenCompletionAtom,
  partSixCompletionAtom,
} from "@/data/Interactives/interactiveStore";
import { s2p0CompletionAtom } from "../../../ControlPanel/InteractiveControlPanel2";
import { sections2 } from "@/app/components/Interactives/Sleuthing/5.6/pages/sections";

export default function InteractiveSideBarSection2({
  title,
  callback,
  node,
  first,
  isActive,
  id,
}: {
  id: number;
  isActive?: boolean;
  first?: boolean;
  node: any;
  title: string;
  callback: any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [sideBarIsOpen, setSideBarIsOpen] = useAtom(sideBarIsOpenAtom);
  const [currentView, setCurrentView] = useAtom(currentView2Atom);
  const p6Completion = useAtomValue(partSixCompletionAtom);
  const p7Completion = useAtomValue(partSevenCompletionAtom);
  const p8Completion = useAtomValue(partEightCompletionAtom);
  const s2p0Completion = useAtomValue(s2p0CompletionAtom);

  useEffect(() => {
    if (currentView.section === node.sectionId && sideBarIsOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    if (!sideBarIsOpen) {
      setIsOpen(false);
    }
  }, [currentView, sideBarIsOpen]);

  const sectionLocked =
    node.sectionId === 0
      ? false
      : node.sectionId === 1 && !s2p0Completion[3]
      ? true
      : node.sectionId === 2 && !p6Completion[33.5]
      ? true
      : node.sectionId === 3 && !p7Completion[17]
      ? true
      : false;
  const sectionComplete =
    node.sectionId === 0
      ? s2p0Completion[3]
      : node.sectionId === 1
      ? p6Completion[33.5]
      : node.sectionId === 2
      ? p7Completion[16]
      : node.sectionId === 3
      ? p8Completion[39]
      : false;

  const handleSubNode = function (section: number, title: string) {
    // const section = currentView.section;
    if (section === 0) {
      let sectionObj = sections2[0];
      if (title === sectionObj.subcomponents[0].title) {
        return {
          available: true,
          // active: currentView.section === 0 && currentView.phase === 1,
        };
      } else if (title === sectionObj.subcomponents[1].title) {
        return {
          available: s2p0Completion[0],
          // active: currentView.section === 0 && currentView.phase === 1,
        };
      } else if (title === sectionObj.subcomponents[2].title) {
        return {
          available: s2p0Completion[1],
          // active: currentView.section === 0 && currentView.phase === 1,
        };
      } else if (title === sectionObj.subcomponents[3].title) {
        return {
          available: s2p0Completion[2],
          // active: currentView.section === 0 && currentView.phase === 1,
        };
      }
    } else if (section === 1) {
      let sectionObj = sections2[1];
      // return {
      //   available: false,
      // };
      if (title === sectionObj.subcomponents[0].title) {
        return {
          available: s2p0Completion[3],
          // active: currentView.section === 0 && currentView.phase === 1,
        };
      } else if (
        title === sectionObj.subcomponents[1]?.subcomponents?.[0].title
      ) {
        return {
          available: true,
          // active: currentView.section === 0 && currentView.phase === 1,
        };
      }
    } else if (section === 2) {
      if (title === "Summary") {
        return {
          available: p7Completion[16],
          complete: p7Completion[17],
        };
      }
    }
  };

  return (
    <div
      tabIndex={0}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      // inert={
      //   (node.title === sections2?.[1]?.title && !s2p0Completion?.[3]) ||
      //   (node.title === sections2?.[2]?.title && !p6Completion?.[33.5]) ||
      //   (node.title === sections2?.[3]?.title && !p7Completion?.[17])
      // }
      // data-tip={node.title}
      className={`${
        first ? "border-y" : "border-b"
      } block w-full cursor-pointer border-white/20 text-sm md:max-w-sm`}
    >
      <div
        className={`pl-[5%]/ grid grid-cols-[40px_auto_40px] place-items-center gap-4 
          ${
            !isOpen && currentView.section === node.sectionId
              ? "bg-white/5"
              : ""
          }`}
      >
        <div className="mb-auto flex h-full w-10 items-center justify-center hover:text-white">
          <svg
            width="16pt"
            height="16pt"
            className={`mx-auto mb-auto mt-4 fill-current ${
              isOpen ? "-rotate-90" : ""
            } duration-500`}
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
          </svg>
        </div>
        <div
          className={`col-start-2 flex w-full items-center overflow-hidden pb-3 pr-2 pt-4 text-start`}
        >
          <h4
            className={`translate-y-0.5 overflow-hidden overflow-ellipsis ${
              isOpen ? "" : "text-nowrap"
            }`}
          >
            {node.title}
          </h4>
        </div>
        <div className="">
          {sectionLocked ? (
            <svg
              className=" fill-current"
              width="16pt"
              height="16pt"
              version="1.1"
              viewBox="0 0 1200 1200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m880 400c0-154.64-125.36-280-280-280s-280 125.36-280 280v240h80v-240c0-110.46 89.543-200 200-200s200 89.543 200 200v240h80z" />
                <path d="m200 600.23v399.53c0 44.312 35.93 80.234 79.633 80.234h640.73c43.98 0 79.633-35.883 79.633-80.234v-399.53c0-44.312-35.93-80.234-79.633-80.234h-640.73c-43.98 0-79.633 35.883-79.633 80.234z" />
              </g>
            </svg>
          ) : sectionComplete ? (
            <svg
              width="20pt"
              height="20pt"
              version="1.1"
              className={`fill-current`}
              viewBox="0 0 1200 1200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m1007.5 280.03c-2.1094-3.4688-6.6094-4.5469-10.078-2.4375-14.344 8.7656-28.594 17.578-42.797 26.484l-21.328 13.359-21.234 13.453-10.641 6.7031-10.688 6.9375-21.047 13.734c-7.0312 4.5-14.062 9.375-21.047 14.156l-21.047 14.438c-13.828 9.7969-27.656 19.547-41.344 29.578l-30.656 22.781-10.031 7.7812-20.109 15.609c-3.375 2.5781-6.6562 5.25-9.9844 7.9219l-9.9375 7.9688c-6.6094 5.3438-13.312 10.641-19.828 16.078l-19.547 16.453c-13.078 10.922-25.734 22.266-38.531 33.562-6.4219 5.5781-12.656 11.438-18.938 17.203l-18.797 17.344-18.422 17.719-9.2344 8.8594-4.5938 4.4531-4.5469 4.5-18.141 18.094-9.0938 9.0469c-3 3.0469-6 6.0938-9.0469 9.0938l-9.0938 9.0469-9.2344 9-18.328 18.094c-6.1406 6.0469-12.328 12-18.422 18.094l-18.094 18.422-1.6875 1.7344c-0.70312-0.75-1.4062-1.4531-2.1094-2.2031l-8.4844-8.7188c-2.7656-2.9062-5.8125-5.625-8.7656-8.3906s-5.9062-5.5312-8.9062-8.2031c-6-5.4375-12.281-10.5-18.516-15.609l-2.3438-1.9219-2.3906-1.8281-4.8281-3.6094c-3.2344-2.3906-6.4219-4.8281-9.7031-7.1719-6.5156-4.6875-13.312-9.0469-20.016-13.406-1.6406-1.125-3.4219-2.1094-5.1094-3.1406l-5.1562-3.0469c-3.4219-2.0625-6.9375-4.0312-10.359-6-3.4688-1.9688-7.0781-3.75-10.594-5.5781-3.5625-1.8281-7.125-3.6094-10.688-5.3438s-7.2656-3.3281-10.922-4.9219-7.2656-3.1406-10.922-4.6875c-7.4062-2.9062-14.906-5.5781-22.312-8.2031-7.5938-2.3438-15.188-4.5938-22.781-6.6562-7.7344-1.8281-15.469-3.5156-23.25-4.9219-7.875-1.2188-15.75-2.2969-23.719-2.9062-1.7812-0.14062-3.6562 0.32812-5.2031 1.4531-3.5625 2.5312-4.4062 7.5469-1.875 11.109l0.1875 0.23438c4.5938 6.4688 9.375 12.469 14.062 18.328 4.5938 6.0938 9.1875 11.906 13.781 17.625 4.4531 5.9531 8.9531 11.625 13.359 17.25 4.3125 5.8125 8.625 11.438 12.938 17.016 4.125 5.7656 8.3438 11.344 12.469 16.875 3.9844 5.7188 8.0625 11.25 12.047 16.781 3.8438 5.7188 7.8281 11.156 11.625 16.734l5.625 8.3906 2.8125 4.125c0.9375 1.3594 1.875 2.7188 2.7656 4.1719 3.5625 5.6719 7.2656 11.109 10.781 16.641l5.2031 8.3906c1.7344 2.7656 3.6094 5.4375 5.2031 8.2969 3.2812 5.6719 6.8438 11.062 10.031 16.688l4.875 8.3906c1.5938 2.8125 3.3281 5.4844 4.8281 8.3438 1.5469 2.8125 3.0938 5.625 4.6406 8.4375 1.5938 2.7656 3.1875 5.5312 4.6406 8.3906s2.9531 5.625 4.5 8.4375l2.1094 4.2188c0.79688 1.4062 1.3594 2.6719 2.0625 3.9844 1.3125 2.625 2.7188 5.25 4.0781 7.8281 0.70312 1.3125 1.3594 2.5781 2.1094 3.8438 0.32812 0.5625 0.79688 1.5 1.1719 2.25l1.2188 2.3906c1.6406 3.2344 3.375 6.375 5.0625 9.6094l2.5781 4.7812 0.32812 0.60938c0.14062 0.28125-1.2188-2.2031-0.60938-1.125l0.046875 0.09375 0.09375 0.14062 0.75 1.5 1.2656 2.3906c4.9688 9.2812 12.141 18 21.047 24.75 33.094 25.078 80.297 18.562 105.38-14.531l1.5-1.9688c4.875-6.4219 9.6562-12.984 14.297-19.594s9.0938-13.359 13.688-20.062c9.1406-13.359 17.578-27.281 26.438-40.922l13.031-20.719c4.3594-6.8906 8.8594-13.688 13.312-20.578l6.75-10.219c2.25-3.4219 4.5-6.8438 6.8438-10.172l7.0312-10.031 7.125-9.9844c2.3438-3.3281 4.7812-6.6562 7.1719-9.9375s4.9219-6.4688 7.4062-9.75l14.953-19.406 3.75-4.875 3.7969-4.7812 7.6406-9.5625 15.281-19.172c10.406-12.609 20.672-25.359 31.172-37.922l15.797-18.844c2.625-3.1406 5.2031-6.3281 7.9219-9.4219l8.0156-9.3281 16.031-18.703 16.266-18.516 8.1562-9.2812c2.7188-3.0938 5.3906-6.2344 8.2031-9.2344l24.891-27.422 8.4375-9.0469 16.875-18.141 4.2188-4.5469 12.938-13.359 17.156-17.953 17.344-17.578c5.8125-5.8594 11.484-11.766 17.531-17.672l17.906-17.625 17.812-17.484 18-17.578 17.906-17.672c11.953-11.766 23.812-23.625 35.625-35.531 2.4844-2.3906 3-6.1406 1.2188-9.0469z" />
            </svg>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        inert={!isOpen}
        className={`col-span-full grid w-full duration-500 ${
          isOpen ? "grid-rows-[1fr]" : `grid-rows-[0fr] text-transparent`
        }`}
      >
        <div className="bg-red-500/ row-span-2 w-full overflow-hidden">
          <ol className="grid">
            {node.subcomponents.map((subcomponent, idx) => {
              if (subcomponent.subcomponents) {
                return (
                  <InteractiveSideBarSubSection
                    locked={true}
                    callback={callback}
                    key={idx}
                    parentIsOpen={isOpen}
                    title={subcomponent.title}
                    node={subcomponent}
                    active={node.active}
                    sectionId={node.sectionId}
                  />
                );
                // return <InteractiveSideBarSubSection parentIsOpen={isOpen} title={subcomponent} />
              }
              return (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (
                      handleSubNode(node.sectionId, subcomponent.title)
                        ?.available
                    ) {
                      callback(node.sectionId, subcomponent.title);
                    }
                    // console.log(callback);
                    // console.log(node.sectionId, subcomponent.title);
                  }}
                  key={idx}
                  className={`relative w-full py-3 pl-[calc(10%+20px)]  pr-10 
                    ${
                      handleSubNode(node.sectionId, subcomponent.title)
                        ?.available
                        ? `cursor-pointer ${
                            node.active(node.sectionId, subcomponent.title)
                              ? "bg-white/5"
                              : "hover:bg-white/[2%]"
                          }`
                        : "cursor-default"
                    } 
                    
                  `}
                >
                  <span className="block w-full place-self-start pl-5 text-start">
                    {subcomponent.title}
                  </span>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500">
                    {node.locked(node.sectionId, subcomponent.title)?.locked ? (
                      <></>
                    ) : handleSubNode(node.sectionId, subcomponent.title)
                        ?.available ? (
                      <div
                        className={`h-2 w-2 rounded-full border border-current ${
                          node.locked(node.sectionId, subcomponent.title)
                            ?.complete
                            ? "bg-current"
                            : ""
                        } self-center`}
                      ></div>
                    ) : null}
                  </div>
                  {/* {node.locked(node.sectionId, subcomponent.title)?.locked ? (
                    <span className="absolute right-4 top-2">Locked</span>
                  ) : node.locked(node.sectionId, subcomponent.title)
                      ?.complete ? (
                    <div className="h-3 aspect-square rounded-full overflow-hidden text-current self-center absolute "></div>
                  ) : (
                    <div></div>
                  )} */}
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
                    className={`py-3 pl-[calc(10%+40px)] hover:bg-white/[2%] w-full  pr-10 `}
                  >
                    <span className="block place-self-start pl-5 w-full text-start">
                      Introduction here is a bunch more t t t t t
                    </span>
                    
                  </button>
                );
              })} */}
            {/* <InteractiveSideBarSubSection parentIsOpen={isOpen} title="List" /> */}
          </ol>
        </div>
      </div>
      <div></div>
    </div>
  );

  return (
    <div
      className={`
    relative border-y border-gray-200/20 ${
      node?.active && !isOpen ? "bg-white/5" : ""
    } w-full md:max-w-sm`}
    >
      <div className="pl-[5%]">
        <div className="grid grid-cols-[40px_auto_40px] py-4">
          <h4 className="col-start-2 text-sm">{title}</h4>
        </div>
      </div>
    </div>
  );
}
