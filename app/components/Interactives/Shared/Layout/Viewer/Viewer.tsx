"use client";
import { atom, useAtom, useAtomValue } from "jotai";
import InteractiveSideBar, {
  InteractiveSideBarOpenAtom,
} from "../InteractiveSideBar/InteractiveSideBar";
import { ReactNode } from "react";
// import PartOne from "@/app/components/Interactives/Sleuthing/PartOne/PartOne";
import {
  partOneCompletionAtom,
  // phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { phaseAtom } from "@/app/data2/Interactives/interactiveStore";
// import PartZero from "@/app/components/Interactives/Sleuthing/PartZero/PartZero";
// import PartOneControlPanel from "@/app/components/Interactives/Sleuthing/PartOne/PartOneControlPanel";

export const interactiveViewAtom = atom<ReactNode>(0);
export const interactiveSectionAtom = atom(0);

export default function Viewer() {
  return <></>;
}

// export default function Viewer() {
//   const [sideBarOpen, setSideBarOpen] = useAtom(InteractiveSideBarOpenAtom);
//   const [activeView, setActiveView] = useAtom(interactiveViewAtom);
//   const [phase, setPhase] = useAtom(phaseAtom);
//   const [interactiveView, setInteractiveView] = useAtom(interactiveSectionAtom);
//   const partOneCompletion = useAtomValue(partOneCompletionAtom);
//   return (
//     <div className="">
//       <div className="fixed top-0 w-full">
//         <button
//           onClick={() => {
//             setSideBarOpen(true);
//           }}
//           className={`${sideBarOpen ? "hidden" : ""} absolute left-4 top-4`}
//         >
//           <svg
//             width="24pt"
//             height="24pt"
//             version="1.1"
//             viewBox="0 0 1200 1200"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <g>
//               <path d="m1075.2 405.6h-952.8c-32.398 0-57.602-26.398-57.602-57.602 0-31.199 26.398-57.602 57.602-57.602h951.6c32.398 0 57.602 26.398 57.602 57.602 0 31.199-25.203 57.602-56.402 57.602z" />
//               <path d="m1075.2 662.4h-952.8c-32.398 0-57.602-26.398-57.602-57.602 0-31.199 26.398-57.602 57.602-57.602h951.6c32.398 0 57.602 26.398 57.602 57.602s-25.203 57.602-56.402 57.602z" />
//               <path d="m1075.2 918h-952.8c-32.398 0-57.602-26.398-57.602-57.602 0-32.398 26.398-57.602 57.602-57.602h951.6c32.398 0 57.602 26.398 57.602 57.602 1.1992 31.203-25.203 57.602-56.402 57.602z" />
//             </g>
//           </svg>
//         </button>
//       </div>
//       <InteractiveSideBar
//         title={`Genetic Sleuthing & Surveillance`}
//         viewList={[
//           {
//             title: "Introduction",
//             subcomponents: [
//               {
//                 title: "Background",
//                 node: <></>,
//                 view: 0,
//                 phase: 1,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//               {
//                 title: "Goal",
//                 node: <></>,
//                 view: 0,
//                 phase: 2,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//               {
//                 title: "Instructions",
//                 node: <></>,
//                 view: 0,
//                 phase: 3,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//             ],
//           },
//           {
//             title:
//               "Step 1: Make Positive Controls from SNPs When You Know the MOI",
//             subcomponents: [
//               {
//                 title: "1.1 Make laboratory clones with SNPs",
//                 node: <></>,
//                 complete: partOneCompletion[1],
//                 requires: null,
//                 view: 1,
//                 phase: 1,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//               {
//                 title: "1.2 Make positive controls with SNPs",
//                 node: <></>,
//                 complete: partOneCompletion[2],
//                 requires: partOneCompletion[1],
//                 view: 1,
//                 phase: 2,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//               {
//                 title: "1.3 Genotype your positive controls",
//                 node: <></>,
//                 complete: partOneCompletion[3],
//                 requires: partOneCompletion[2],
//                 view: 1,
//                 phase: 3,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//               {
//                 title: "1.4 Counting Alleles",
//                 node: <></>,
//                 complete: partOneCompletion[4],
//                 requires: partOneCompletion[3],
//                 view: 1,
//                 phase: 4,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//               {
//                 title: "1.5 Knowledge Check",
//                 node: <></>,
//                 complete: partOneCompletion[5],
//                 requires: partOneCompletion[4],
//                 view: 1,
//                 phase: 5,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//             ],
//           },
//           {
//             title:
//               "Step 2: Analyze Results from Your Field Samples Using SNPs to Estimate the Unknown MOI in Your Population. ",
//             subcomponents: [
//               {
//                 title: "2.1 Estimate MOI for each of the 10 field samples",
//                 node: <></>,
//                 view: 0,
//                 phase: 1,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//               {
//                 title: "2.2 Calculate average MOI",
//                 node: <></>,
//                 view: 0,
//                 phase: 1,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//               {
//                 title: "2.3 Knowledge Check",
//                 node: <></>,
//                 view: 0,
//                 phase: 1,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//             ],
//           },
//           {
//             title:
//               "Step 3: Make Positive Controls from Microhaplotypes When You Know the MOI",
//             subcomponents: [
//               {
//                 title:
//                   "3.1 Analyze your laboratory clones using microhaplotypes",
//                 node: <></>,
//                 view: 0,
//                 phase: 1,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//               {
//                 title: "3.2 Make positive controls with your laboratory clones",
//                 node: <></>,
//                 view: 0,
//                 phase: 1,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//               {
//                 title:
//                   "3.3 Genotype your laboratory clones using microhaplotypes",
//                 node: <></>,
//                 view: 0,
//                 phase: 1,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//               {
//                 title: "3.4 Counting Alleles",
//                 node: <></>,
//                 view: 0,
//                 phase: 1,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//               {
//                 title: "3.5 Knowledge Check",
//                 node: <></>,
//                 view: 0,
//                 phase: 1,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//             ],
//           },
//           {
//             title:
//               "Step 4: Analyze Results From Your Field Samples Using Microhaplotypes to Estimate the Unknown MOI",
//             subcomponents: [
//               {
//                 title: "4.1 Estimate MOI for each of the 10 field samples",
//                 node: <></>,
//                 view: 0,
//                 phase: 1,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//               {
//                 title: "4.2 Calculate average MOI",
//                 node: <></>,
//                 view: 0,
//                 phase: 1,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//             ],
//           },
//           {
//             title:
//               "Step 5: Compare Estimates of MOI from SNPs to Estimates of MOI from Microhaplotypes",
//             subcomponents: [
//               {
//                 title:
//                   "5.1 Compare your estimates of MOI from SNPs to Microhaplotypes",
//                 node: <></>,
//                 view: 0,
//                 phase: 1,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//               {
//                 title: "5.2 Compare your estimates with the true MOI",
//                 node: <></>,
//                 view: 0,
//                 phase: 1,
//                 callback: (view: number, phase: number) => {
//                   setInteractiveView(view);
//                   setPhase(phase);
//                 },
//               },
//             ],
//           },
//           {
//             title: "Step 6 - Make Your Recommendation",
//             subcomponents: [],
//           },
//         ]}
//       />
//       <div
//         className={`mx-auto min-h-screen max-w-6xl px-2 pb-40 duration-500 md:px-6 lg:px-12 ${
//           sideBarOpen ? "" : ""
//         }`}
//       >
//         {interactiveView === 0 ? (
//           <PartZero />
//         ) : interactiveView === 1 ? (
//           <PartOne />
//         ) : interactiveView === 2 ? null : interactiveView ===
//           3 ? null : interactiveView === 4 ? null : interactiveView ===
//           5 ? null : interactiveView === 5 ? null : interactiveView ===
//           6 ? null : null}
//       </div>
//       <div>
//         <PartOneControlPanel />
//       </div>
//     </div>
//   );
// }
