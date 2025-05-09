"use client";
// import { atom, useAtom } from "jotai";
// import InteractiveSideBar, {
//   sideBarIsOpenAtom,
// } from "./InteractiveSideBar/InteractiveSideBar";
// import InteractivePrimaryView from "./InteractivePrimaryView/InteractivePrimaryView";
// import ResetPrompt, { resetConfirmOpenAtom } from "../ControlPanel/ResetModal";
// import { useEffect } from "react";
// import { atomWithStorage } from "jotai/utils";
// import PartOneControlPanel from "../../Sleuthing/PartOne/PartOneControlPanel";
// import InteractiveControlPanel from "../ControlPanel/InteractiveControlPanel";
// import PartTwoControlPanel from "../../Sleuthing/PartTwo/PartTwoControlPanel";
// import PartThreeControlPanel from "../../Sleuthing/PartThree/PartThreeControlPanel";
// import PartFourControlPanel from "../../Sleuthing/PartFour/PartFourControlPanel";
// import PartFiveControlPanel from "../../Sleuthing/PartFive/PartFiveControlPanel";
// import Histogram2 from "../Histogram/Histogram2";

import { atom, useAtom } from "jotai";
import InteractivePrimaryView from "../InteractivePrimaryView/InteractivePrimaryView";
import InteractiveSideBar2 from "../InteractiveSideBar/InteractiveSideBar2";
import {
  currentView2Atom,
  sideBarDisablesMainContent,
} from "../InteractiveViewer";
import InteractiveSideBar, {
  sideBarIsOpenAtom,
} from "../InteractiveSideBar/InteractiveSideBar";
import InteractiveControlPanel2 from "../../ControlPanel/InteractiveControlPanel2";
import ResetPrompt from "../../ControlPanel/ResetModal";
import Part2Intro from "../../../Sleuthing/Part2Intro/Part2Intro";
import PartSix from "../../../Sleuthing/PartSix/PartSix";
import PartSeven from "../../../Sleuthing/PartSeven/PartSeven";
import PartEight from "../../../Sleuthing/PartEight/PartEight";
import InteractiveSideBar4 from "../InteractiveSideBar/InteractiveSideBar4/InteractiveSideBar4";

// export const currentViewAtom = atomWithStorage("currentViewAtom", {
//   module: "2.6",
//   section: 0,
//   phase: 0,
// });

// export const allViewsAtom = atomWithStorage(
//   "allViewsAtom",
//   {
//     "2.6": {
//       module: "2.6",
//       section: 0,
//       phase: 0,
//     },
//     "4.4": {
//       module: "4.4",
//       section: 0,
//       phase: 0,
//     },
//     "5.6": {
//       module: "5.6",
//       section: 1,
//       phase: 0,
//     },
//   },
//   undefined,
//   {
//     getOnInit: true,
//   }
// );

// export const viewAtom = atomWithStorage("viewAtom", {
//   2.6: {},
//   4.4: {},
//   5.6: {},
// });

// export const sideBarDisablesMainContent = false;

// export default function InteractiveViewer2({
//   module,
// }: {
//   module: "2.6" | "4.4" | "5.6";
// }) {
//   const [isOpen, setIsOpen] = useAtom(sideBarIsOpenAtom);
//   const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
//   const [currentView, setCurrentView] = useAtom(currentViewAtom);
//   const [allViews, setAllViews] = useAtom(allViewsAtom);

//   // useEffect(() => {
//   //   setCurrentView({
//   //     ...currentView,
//   //     module,
//   //   });
//   // }, []);

//   // return <Histogram2 />;

//   useEffect(() => {
//     setCurrentView({ ...allViews["5.6"] });
//   }, []);

//   useEffect(() => {
//     setAllViews({ ...allViews, [currentView.module]: { ...currentView } });
//   }, [currentView]);

//   return (
//     <div className="">
//       <span className="absolute top-0 left-1/2 text-black">
//         {JSON.stringify(allViews)}
//       </span>
//       <button
//         onClick={() => {
//           setIsOpen(true);
//         }}
//         style={{
//           animationDelay: `500ms`,
//           animationDuration: `500ms`,
//           animationFillMode: "forwards",
//         }}
//         className={`sr-only`}
//       >
//         Open Menu
//       </button>
//       <div className="flex w-full grow min-h-[calc(100vh+48px)] max-w-full">
//         <ResetPrompt />
//         <InteractiveSideBar module={module} />
//         <div
//           className={`${
//             isOpen ? "hidden md:flex" : ""
//           } flex grow @container/margins relative`}
//         >
//           {sideBarDisablesMainContent && (
//             <div
//               onClick={() => {
//                 setIsOpen(false);
//               }}
//               className={`absolute inset-0 z-10  cursor-pointer duration-300 ${
//                 isOpen ? "pointer-events-auto" : "hidden"
//               }`}
//             ></div>
//           )}
//           <div
//             className={`${
//               isOpen ? "grow basis-0 min-w-4" : "min-w-2 grow basis-0"
//             } duration-1000`}
//           ></div>
//           <InteractivePrimaryView />
//           <div
//             className={`${
//               isOpen ? "grow basis-0 min-w-4" : "min-w-2 grow basis-0"
//             } duration-1000`}
//           ></div>
//         </div>
//       </div>
//       {module === "2.6" ? (
//         <div>
//           <PartOneControlPanel menuOpen={isOpen} setMenuOpen={setIsOpen} />
//           <PartTwoControlPanel />
//           <PartThreeControlPanel />
//           <PartFourControlPanel />
//           <PartFiveControlPanel />
//           <InteractiveControlPanel />
//         </div>
//       ) : module === "5.6" ? (
//         <div>{/* <InteractiveControlPanel /> */}</div>
//       ) : null}
//     </div>
//   );
// }

export default function InteractiveViewer2({ dev }: { dev?: boolean }) {
  const [isOpen, setIsOpen] = useAtom(sideBarIsOpenAtom);
  const [currentView, setCurrentView] = useAtom(currentView2Atom);

  return (
    <div className="">
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        style={{
          animationDelay: `500ms`,
          animationDuration: `500ms`,
          animationFillMode: "forwards",
        }}
        className={`sr-only`}
      >
        Open Menu
      </button>
      <div className="flex w-full max-w-full grow overflow-clip">
        <ResetPrompt currentModule="5.6" />
        {/* <InteractiveSideBar
            module={module}
            currentView={currentView}
            setCurrentView={setCurrentView}
          /> */}
        {/* <InteractiveSideBar2
          module={"5.6"}
          currentView={currentView}
          setCurrentView={setCurrentView}
        /> */}
        <InteractiveSideBar4 dev={dev} />
        {/* <InteractiveSideBar
          setCurrentView={setCurrentView}
          currentView={currentView}
          module={"5.6"}
        /> */}
        <div
          className={`${
            isOpen ? "hidden md:flex" : ""
          } relative flex grow @container/margins`}
        >
          {sideBarDisablesMainContent && (
            <div
              onClick={() => {
                setIsOpen(false);
              }}
              className={`absolute inset-0 z-10  cursor-pointer duration-300 ${
                isOpen ? "pointer-events-auto" : "hidden"
              }`}
            ></div>
          )}
          <div
            className={`${
              isOpen ? "min-w-4 grow basis-0" : "min-w-2 grow basis-0"
            } duration-1000`}
          ></div>
          {/* <span className="absolute left-1/2 top-4">
            {JSON.stringify(currentView)}
          </span> */}
          {/* <InteractivePrimaryView
            currentView={currentView}
            setCurrentView={setCurrentView}
          /> */}
          <div
            onFocus={
              sideBarDisablesMainContent
                ? () => {
                    setIsOpen(false);
                  }
                : undefined
            }
            tabIndex={isOpen && sideBarDisablesMainContent ? 0 : undefined}
            className={`overflow-clip/ relative min-h-screen w-full max-w-6xl grow basis-full border-black ${
              isOpen
                ? "hidden sm:block"
                : "fadeFromHidden opacity-100 sm:animate-none"
            }`}
          >
            <div
              // inert={isOpen}
              className="relative pb-80 @container/main"
            >
              {currentView.section === 0 ? (
                <Part2Intro />
              ) : currentView.section === 1 ? (
                <PartSix />
              ) : currentView.section === 2 ? (
                <PartSeven />
              ) : currentView.section === 3 ? (
                <PartEight fixed={false} />
              ) : null}{" "}
            </div>
          </div>
          <div
            className={`${
              isOpen ? "min-w-4 grow basis-0" : "min-w-2 grow basis-0"
            } duration-1000`}
          ></div>
        </div>
      </div>
      <InteractiveControlPanel2 />
    </div>
  );
}
