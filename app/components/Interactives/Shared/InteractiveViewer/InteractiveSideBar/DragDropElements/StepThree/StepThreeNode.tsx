import { useAtom, useAtomValue } from "jotai";
import { currentView3Atom } from "../../../InteractiveViewer";
import { sideBarIsOpenAtom } from "../../InteractiveSideBar";
import { useEffect, useState } from "react";
import {
  dragDropCompletionAtom,
  dragDropQuestionsAtom,
} from "@/data/Interactives/interactiveStore";

export default function StepThreeNode() {
  const [currentView, setCurrentView] = useAtom(currentView3Atom);
  const [sideBarIsOpen, setSideBarIsOpen] = useAtom(sideBarIsOpenAtom);
  const completion = useAtomValue(dragDropCompletionAtom);
  const [isOpen, setIsOpen] = useState(false);
  const [isRecentlyClicked, setIsRecentlyClicked] = useState(false);
  const questions = useAtomValue(dragDropQuestionsAtom);

  useEffect(() => {
    let x: NodeJS.Timeout | undefined;
    if (isRecentlyClicked) {
      x = setTimeout(() => {
        setIsRecentlyClicked(false);
      }, 200);
    }
    return () => {
      clearTimeout(x);
    };
  }, [isRecentlyClicked]);

  useEffect(() => {
    if (!sideBarIsOpen) {
      setIsOpen(false);
    }
  }, [sideBarIsOpen]);

  useEffect(() => {
    if (sectionActive && sideBarIsOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [currentView]);

  const title = "Step 3";
  const sectionActive = currentView.section === 3;
  const sectionLocked = !completion?.[2]?.[3];

  return (
    <div
      className={`
           border-gray-200/20 border-y relative md:max-w-sm w-full ${
             sectionActive && !isOpen
               ? "bg-white/[5%]"
               : !isOpen
               ? "hover:bg-white/[2%]"
               : ""
           }`}
    >
      <div className="absolute right-4 top-2">
        {sectionLocked ? (
          <svg
            className=" fill-current m-auto mt-2"
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
        ) : completion?.[3]?.[2] ? (
          <svg
            width="20pt"
            height="20pt"
            version="1.1"
            viewBox="0 0 1200 1200"
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m1007.5 280.03c-2.1094-3.4688-6.6094-4.5469-10.078-2.4375-14.344 8.7656-28.594 17.578-42.797 26.484l-21.328 13.359-21.234 13.453-10.641 6.7031-10.688 6.9375-21.047 13.734c-7.0312 4.5-14.062 9.375-21.047 14.156l-21.047 14.438c-13.828 9.7969-27.656 19.547-41.344 29.578l-30.656 22.781-10.031 7.7812-20.109 15.609c-3.375 2.5781-6.6562 5.25-9.9844 7.9219l-9.9375 7.9688c-6.6094 5.3438-13.312 10.641-19.828 16.078l-19.547 16.453c-13.078 10.922-25.734 22.266-38.531 33.562-6.4219 5.5781-12.656 11.438-18.938 17.203l-18.797 17.344-18.422 17.719-9.2344 8.8594-4.5938 4.4531-4.5469 4.5-18.141 18.094-9.0938 9.0469c-3 3.0469-6 6.0938-9.0469 9.0938l-9.0938 9.0469-9.2344 9-18.328 18.094c-6.1406 6.0469-12.328 12-18.422 18.094l-18.094 18.422-1.6875 1.7344c-0.70312-0.75-1.4062-1.4531-2.1094-2.2031l-8.4844-8.7188c-2.7656-2.9062-5.8125-5.625-8.7656-8.3906s-5.9062-5.5312-8.9062-8.2031c-6-5.4375-12.281-10.5-18.516-15.609l-2.3438-1.9219-2.3906-1.8281-4.8281-3.6094c-3.2344-2.3906-6.4219-4.8281-9.7031-7.1719-6.5156-4.6875-13.312-9.0469-20.016-13.406-1.6406-1.125-3.4219-2.1094-5.1094-3.1406l-5.1562-3.0469c-3.4219-2.0625-6.9375-4.0312-10.359-6-3.4688-1.9688-7.0781-3.75-10.594-5.5781-3.5625-1.8281-7.125-3.6094-10.688-5.3438s-7.2656-3.3281-10.922-4.9219-7.2656-3.1406-10.922-4.6875c-7.4062-2.9062-14.906-5.5781-22.312-8.2031-7.5938-2.3438-15.188-4.5938-22.781-6.6562-7.7344-1.8281-15.469-3.5156-23.25-4.9219-7.875-1.2188-15.75-2.2969-23.719-2.9062-1.7812-0.14062-3.6562 0.32812-5.2031 1.4531-3.5625 2.5312-4.4062 7.5469-1.875 11.109l0.1875 0.23438c4.5938 6.4688 9.375 12.469 14.062 18.328 4.5938 6.0938 9.1875 11.906 13.781 17.625 4.4531 5.9531 8.9531 11.625 13.359 17.25 4.3125 5.8125 8.625 11.438 12.938 17.016 4.125 5.7656 8.3438 11.344 12.469 16.875 3.9844 5.7188 8.0625 11.25 12.047 16.781 3.8438 5.7188 7.8281 11.156 11.625 16.734l5.625 8.3906 2.8125 4.125c0.9375 1.3594 1.875 2.7188 2.7656 4.1719 3.5625 5.6719 7.2656 11.109 10.781 16.641l5.2031 8.3906c1.7344 2.7656 3.6094 5.4375 5.2031 8.2969 3.2812 5.6719 6.8438 11.062 10.031 16.688l4.875 8.3906c1.5938 2.8125 3.3281 5.4844 4.8281 8.3438 1.5469 2.8125 3.0938 5.625 4.6406 8.4375 1.5938 2.7656 3.1875 5.5312 4.6406 8.3906s2.9531 5.625 4.5 8.4375l2.1094 4.2188c0.79688 1.4062 1.3594 2.6719 2.0625 3.9844 1.3125 2.625 2.7188 5.25 4.0781 7.8281 0.70312 1.3125 1.3594 2.5781 2.1094 3.8438 0.32812 0.5625 0.79688 1.5 1.1719 2.25l1.2188 2.3906c1.6406 3.2344 3.375 6.375 5.0625 9.6094l2.5781 4.7812 0.32812 0.60938c0.14062 0.28125-1.2188-2.2031-0.60938-1.125l0.046875 0.09375 0.09375 0.14062 0.75 1.5 1.2656 2.3906c4.9688 9.2812 12.141 18 21.047 24.75 33.094 25.078 80.297 18.562 105.38-14.531l1.5-1.9688c4.875-6.4219 9.6562-12.984 14.297-19.594s9.0938-13.359 13.688-20.062c9.1406-13.359 17.578-27.281 26.438-40.922l13.031-20.719c4.3594-6.8906 8.8594-13.688 13.312-20.578l6.75-10.219c2.25-3.4219 4.5-6.8438 6.8438-10.172l7.0312-10.031 7.125-9.9844c2.3438-3.3281 4.7812-6.6562 7.1719-9.9375s4.9219-6.4688 7.4062-9.75l14.953-19.406 3.75-4.875 3.7969-4.7812 7.6406-9.5625 15.281-19.172c10.406-12.609 20.672-25.359 31.172-37.922l15.797-18.844c2.625-3.1406 5.2031-6.3281 7.9219-9.4219l8.0156-9.3281 16.031-18.703 16.266-18.516 8.1562-9.2812c2.7188-3.0938 5.3906-6.2344 8.2031-9.2344l24.891-27.422 8.4375-9.0469 16.875-18.141 4.2188-4.5469 12.938-13.359 17.156-17.953 17.344-17.578c5.8125-5.8594 11.484-11.766 17.531-17.672l17.906-17.625 17.812-17.484 18-17.578 17.906-17.672c11.953-11.766 23.812-23.625 35.625-35.531 2.4844-2.3906 3-6.1406 1.2188-9.0469z" />
          </svg>
        ) : null}
      </div>
      <button
        aria-expanded={isOpen}
        data-tip={`${title}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`${
          isOpen ? "" : "md:[&:has(div>h3:hover)]:tooltip"
        } h-fit w-full py-2  text-left text-lg`}
      >
        <div
          // style={{
          //   paddingLeft: additionalPadding
          //     ? `calc(5% + ${additionalPadding}px)`
          //     : `5%`,
          // }}
          className="grid w-full grid-cols-[40px,auto,40px] gap-[5%] max-w-full"
        >
          <svg
            width="16pt"
            height="16pt"
            className={`m-auto mt-2 fill-current ${
              isOpen ? "-rotate-90" : ""
            } duration-500`}
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
          </svg>
          <h3
            className={`py-2 pr-2
                 ${
                   sideBarIsOpen && isOpen ? "" : "text-nowrap"
                 } translate-y-0.5 overflow-hidden text-ellipsis text-left text-sm duration-300`}
          >
            {title}
          </h3>
          {/* {node.locked && (
               <svg
                 className=" fill-current m-auto mt-2"
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
             )} */}
        </div>
        <div>
          {/* <svg
               width="20pt"
               height="20pt"
               version="1.1"
               className={` absolute right-2 top-3  ${
                 !node.subcomponents
                   .map((subNode) => {
                     return subNode.complete;
                   })
                   .includes(false)
                   ? "fill-current"
                   : "hidden"
               }`}
               viewBox="0 0 1200 1200"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path d="m1007.5 280.03c-2.1094-3.4688-6.6094-4.5469-10.078-2.4375-14.344 8.7656-28.594 17.578-42.797 26.484l-21.328 13.359-21.234 13.453-10.641 6.7031-10.688 6.9375-21.047 13.734c-7.0312 4.5-14.062 9.375-21.047 14.156l-21.047 14.438c-13.828 9.7969-27.656 19.547-41.344 29.578l-30.656 22.781-10.031 7.7812-20.109 15.609c-3.375 2.5781-6.6562 5.25-9.9844 7.9219l-9.9375 7.9688c-6.6094 5.3438-13.312 10.641-19.828 16.078l-19.547 16.453c-13.078 10.922-25.734 22.266-38.531 33.562-6.4219 5.5781-12.656 11.438-18.938 17.203l-18.797 17.344-18.422 17.719-9.2344 8.8594-4.5938 4.4531-4.5469 4.5-18.141 18.094-9.0938 9.0469c-3 3.0469-6 6.0938-9.0469 9.0938l-9.0938 9.0469-9.2344 9-18.328 18.094c-6.1406 6.0469-12.328 12-18.422 18.094l-18.094 18.422-1.6875 1.7344c-0.70312-0.75-1.4062-1.4531-2.1094-2.2031l-8.4844-8.7188c-2.7656-2.9062-5.8125-5.625-8.7656-8.3906s-5.9062-5.5312-8.9062-8.2031c-6-5.4375-12.281-10.5-18.516-15.609l-2.3438-1.9219-2.3906-1.8281-4.8281-3.6094c-3.2344-2.3906-6.4219-4.8281-9.7031-7.1719-6.5156-4.6875-13.312-9.0469-20.016-13.406-1.6406-1.125-3.4219-2.1094-5.1094-3.1406l-5.1562-3.0469c-3.4219-2.0625-6.9375-4.0312-10.359-6-3.4688-1.9688-7.0781-3.75-10.594-5.5781-3.5625-1.8281-7.125-3.6094-10.688-5.3438s-7.2656-3.3281-10.922-4.9219-7.2656-3.1406-10.922-4.6875c-7.4062-2.9062-14.906-5.5781-22.312-8.2031-7.5938-2.3438-15.188-4.5938-22.781-6.6562-7.7344-1.8281-15.469-3.5156-23.25-4.9219-7.875-1.2188-15.75-2.2969-23.719-2.9062-1.7812-0.14062-3.6562 0.32812-5.2031 1.4531-3.5625 2.5312-4.4062 7.5469-1.875 11.109l0.1875 0.23438c4.5938 6.4688 9.375 12.469 14.062 18.328 4.5938 6.0938 9.1875 11.906 13.781 17.625 4.4531 5.9531 8.9531 11.625 13.359 17.25 4.3125 5.8125 8.625 11.438 12.938 17.016 4.125 5.7656 8.3438 11.344 12.469 16.875 3.9844 5.7188 8.0625 11.25 12.047 16.781 3.8438 5.7188 7.8281 11.156 11.625 16.734l5.625 8.3906 2.8125 4.125c0.9375 1.3594 1.875 2.7188 2.7656 4.1719 3.5625 5.6719 7.2656 11.109 10.781 16.641l5.2031 8.3906c1.7344 2.7656 3.6094 5.4375 5.2031 8.2969 3.2812 5.6719 6.8438 11.062 10.031 16.688l4.875 8.3906c1.5938 2.8125 3.3281 5.4844 4.8281 8.3438 1.5469 2.8125 3.0938 5.625 4.6406 8.4375 1.5938 2.7656 3.1875 5.5312 4.6406 8.3906s2.9531 5.625 4.5 8.4375l2.1094 4.2188c0.79688 1.4062 1.3594 2.6719 2.0625 3.9844 1.3125 2.625 2.7188 5.25 4.0781 7.8281 0.70312 1.3125 1.3594 2.5781 2.1094 3.8438 0.32812 0.5625 0.79688 1.5 1.1719 2.25l1.2188 2.3906c1.6406 3.2344 3.375 6.375 5.0625 9.6094l2.5781 4.7812 0.32812 0.60938c0.14062 0.28125-1.2188-2.2031-0.60938-1.125l0.046875 0.09375 0.09375 0.14062 0.75 1.5 1.2656 2.3906c4.9688 9.2812 12.141 18 21.047 24.75 33.094 25.078 80.297 18.562 105.38-14.531l1.5-1.9688c4.875-6.4219 9.6562-12.984 14.297-19.594s9.0938-13.359 13.688-20.062c9.1406-13.359 17.578-27.281 26.438-40.922l13.031-20.719c4.3594-6.8906 8.8594-13.688 13.312-20.578l6.75-10.219c2.25-3.4219 4.5-6.8438 6.8438-10.172l7.0312-10.031 7.125-9.9844c2.3438-3.3281 4.7812-6.6562 7.1719-9.9375s4.9219-6.4688 7.4062-9.75l14.953-19.406 3.75-4.875 3.7969-4.7812 7.6406-9.5625 15.281-19.172c10.406-12.609 20.672-25.359 31.172-37.922l15.797-18.844c2.625-3.1406 5.2031-6.3281 7.9219-9.4219l8.0156-9.3281 16.031-18.703 16.266-18.516 8.1562-9.2812c2.7188-3.0938 5.3906-6.2344 8.2031-9.2344l24.891-27.422 8.4375-9.0469 16.875-18.141 4.2188-4.5469 12.938-13.359 17.156-17.953 17.344-17.578c5.8125-5.8594 11.484-11.766 17.531-17.672l17.906-17.625 17.812-17.484 18-17.578 17.906-17.672c11.953-11.766 23.812-23.625 35.625-35.531 2.4844-2.3906 3-6.1406 1.2188-9.0469z" />
             </svg> */}
        </div>
      </button>
      <div
        className={`${sideBarIsOpen ? "" : "hidden"} ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } grid ${sideBarIsOpen ? "duration-500" : ""}`}
      >
        <ol
          // inert={!isOpen || node.locked}
          className="col-span-2 grid overflow-hidden"
        >
          <button
            disabled={sectionLocked}
            onClick={() => {
              if (isRecentlyClicked) {
                setSideBarIsOpen(false);
              } else {
                setIsRecentlyClicked(true);
                setCurrentView({ ...currentView, section: 3, phase: 0 });
              }
            }}
            // key={idx}
            // disabled={node.locked}
            className={`pl-[10%]
                     relative  py-3 pr-12/ text-left disabled:pointer-events-none grid grid-cols-[40px_auto_40px] [&>div]:disabled:border-none ${
                       sectionActive && currentView.phase === 0
                         ? "bg-white/[5%]"
                         : "hover:bg-white/[2%]"
                     } `}
            // className={`pl-[10%]
            //   relative  py-3 pr-12/ text-left disabled:pointer-events-none grid grid-cols-[40px_auto_40px] gap-[5%]
            // ${subNode.active ? "bg-white/5" : ""}
            // ${
            //   subNode?.requires === false
            //     ? "pointer-events-none"
            //     : !subNode.active
            //     ? " hover:bg-white/[2%]"
            //     : ""
            // }`}
          >
            <h4 className="col-start-2 text-sm pr-8">Identify mutations</h4>
            <div
              className={`absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-zinc-600
                     ${completion?.[3]?.[0] ? "bg-current" : ""}`}
            ></div>
          </button>
          <button
            disabled={sectionLocked || !completion?.[3]?.[0]}
            onClick={() => {
              if (isRecentlyClicked) {
                setSideBarIsOpen(false);
              } else {
                setIsRecentlyClicked(true);
                setCurrentView({ ...currentView, section: 3, phase: 1 });
              }
            }}
            // key={idx}
            // disabled={node.locked}
            className={`pl-[10%]
                     relative  py-3 pr-12/ text-left disabled:pointer-events-none grid grid-cols-[40px_auto_40px] [&>div]:disabled:border-none ${
                       sectionActive && currentView.phase === 1
                         ? "bg-white/[5%]"
                         : "hover:bg-white/[2%]"
                     } `}
          >
            <h4 className="col-start-2 text-sm pr-8">Knowledge Check 1</h4>
            <div
              className={`absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-zinc-600
                     ${completion?.[3]?.[1] ? "bg-current" : ""}`}
            ></div>
          </button>
          <button
            disabled={sectionLocked || !completion?.[3]?.[1]}
            onClick={() => {
              if (isRecentlyClicked) {
                setSideBarIsOpen(false);
              } else {
                setIsRecentlyClicked(true);
                setCurrentView({ ...currentView, section: 3, phase: 2 });
              }
            }}
            // key={idx}
            // disabled={node.locked}
            className={`pl-[10%]
                     relative  py-3 pr-12/ text-left disabled:pointer-events-none grid grid-cols-[40px_auto_40px] [&>div]:disabled:border-none ${
                       sectionActive &&
                       (currentView.phase === 2 || currentView.phase === 3)
                         ? "bg-white/[5%]"
                         : "hover:bg-white/[2%]"
                     } `}
          >
            <h4 className="col-start-2 text-sm pr-8">Estimating MOI</h4>
            <div
              className={`absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-zinc-600
                     ${completion?.[3]?.[2] ? "bg-current" : ""}`}
            ></div>
          </button>
          {/* <button
            onClick={() => {
              if (isRecentlyClicked) {
                setSideBarIsOpen(false);
              } else {
                setIsRecentlyClicked(true);
                setCurrentView({ ...currentView, phase: 2 });
              }
            }}
            // key={idx}
            disabled={sectionLocked || !completion?.[1]?.[1]}
            // disabled={node.locked}
            className={`pl-[10%]
                     relative  py-3 pr-12/ text-left disabled:pointer-events-none grid grid-cols-[40px_auto_40px] [&>div]:disabled:border-none ${
                       sectionActive && currentView.phase === 2
                         ? "bg-white/[5%]"
                         : "hover:bg-white/[2%]"
                     } `}
          >
            <h4 className="col-start-2 text-sm pr-8">Instructions</h4>
            <div
              className={`absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-zinc-600
                     ${completion?.[1]?.[2] ? "bg-current" : ""}`}
            ></div>
          </button> */}
        </ol>
      </div>
    </div>
  );
}
