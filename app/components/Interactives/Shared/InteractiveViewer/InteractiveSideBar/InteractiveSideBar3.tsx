"use client";
import { atom, useAtom, useAtomValue } from "jotai";
import InteractiveSideBarSection from "./InteractiveSideBarSection/InteractiveSideBarSection";
// import { sections } from "@/app/components/Interactives/Sleuthing/2.6/pages/sections";
import {
  currentView3Atom,
  InteractiveViewSettings,
} from "../InteractiveViewer";
import { useEffect } from "react";
import { resetConfirmOpenAtom } from "../../ControlPanel/ResetModal";
// import { sections2 } from "@/app/components/Interactives/Sleuthing/5.6/pages/sections";
import { Atom } from "jotai";
import { SetStateAction } from "jotai";
import { sideBarIsOpenAtom } from "./InteractiveSideBar";
// import { sections3 } from "@/app/components/Interactives/DragDrop/4.4/sections";
import DragDropSection from "./InteractiveSideBarSection/DragDropSection";
import StepOneNode from "./DragDropElements/StepOne/StepOneNode";
import StepTwoNode from "./DragDropElements/StepTwo/StepTwoNode";
import IntroductionNode from "./DragDropElements/IntroductionNode/IntroductionNode";
import StepThreeNode from "./DragDropElements/StepThree/StepThreeNode";
import { dragDropCompletionAtom } from "@/data/Interactives/interactiveStore";

// export const sideBarIsOpenAtom = atom(true);

export default function InteractiveSideBar3({
  module,
  dev,
  lang,
}: {
  lang: "EN" | "PT" | "FR";
  dev?: boolean;
  // SetAtom<[SetStateActionWithReset<{ module: string; section: number; phase: number; }>]
  module: string | string[] | undefined;
}) {
  const [isOpen, setIsOpen] = useAtom(sideBarIsOpenAtom);
  const [completion, setCompletion] = useAtom(dragDropCompletionAtom);
  const [currentView, setCurrentView] = useAtom(currentView3Atom);
  // const [currentView, setCurrentView] = useAtom(currentViewAtom);
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);

  const nodes = [
    {
      title: {
        EN: "Background",
        PT: "Contexto",
        FR: "Contexte",
      },
      // "Background",
      complete: completion?.[0]?.[0],
      available: true,
      isActive: (currentView: InteractiveViewSettings) => {
        if (currentView) {
          let { section, phase } = currentView;
          if (section === 0 && phase === 0) {
            return true;
          } else {
            return false;
          }
        }
      },
      callback: (setCurrentView: any) => {
        setCurrentView({
          module: "4.4",
          section: 0,
          phase: 0,
        });
      },
    },
    {
      // title: "Goal",
      title: {
        EN: "Goal",
        PT: "Objetivo",
        FR: "Objectif",
      },
      complete: completion?.[0]?.[1],
      available: completion?.[0]?.[0],
      isActive: (currentView: InteractiveViewSettings) => {
        if (currentView) {
          let { section, phase } = currentView;
          if (section === 0 && phase === 1) {
            return true;
          } else {
            return false;
          }
        }
      },
      callback: (setCurrentView: any) => {
        setCurrentView({
          module: "4.4",
          section: 0,
          phase: 1,
        });
      },
    },
    {
      // title: "Instructions",
      title: {
        EN: "Instructions",
        PT: "Instruções",
        FR: "Instructions",
      },
      complete: completion?.[0]?.[2],
      available: completion?.[0]?.[1],
      isActive: (currentView: InteractiveViewSettings) => {
        if (currentView) {
          let { section, phase } = currentView;
          if (section === 0 && phase === 2) {
            return true;
          } else {
            return false;
          }
        }
      },
      callback: (setCurrentView: any) => {
        setCurrentView({
          module: "4.4",
          section: 0,
          phase: 2,
        });
      },
    },
    {
      // title: "Step 1. Align Sequencer Generated Reads to the Reference Genome",
      title: {
        EN: "Step 1. Align Sequencer Generated Reads to the Reference Genome",
        PT: "Etapa 1. Alinhe as leituras geradas pelo sequenciador ao genoma de referência",
        FR: "Étape 1. Alignez les lectures générées par le séquenceur sur le génome de référence",
      },
      complete: completion?.[1]?.[0],
      available: completion?.[0]?.[2],
      isActive: (currentView: InteractiveViewSettings) => {
        if (currentView) {
          let { section, phase } = currentView;
          if (section === 1 && phase === 0) {
            return true;
          } else {
            return false;
          }
        }
      },
      callback: (setCurrentView: any) => {
        setCurrentView({
          module: "4.4",
          section: 1,
          phase: 0,
        });
      },
    },
    {
      // title: "Knowledge Check",
      title: {
        EN: "Knowledge Check",
        PT: "Checagem de Conhecimento",
        FR: "Vérification de Connaissance",
      },
      pad: true,
      complete: completion?.[1]?.[1],
      available: completion?.[1]?.[0],
      isActive: (currentView: InteractiveViewSettings) => {
        if (currentView) {
          let { section, phase } = currentView;
          if (section === 1 && phase === 1) {
            return true;
          } else {
            return false;
          }
        }
      },
      callback: (setCurrentView: any) => {
        setCurrentView({
          module: "4.4",
          section: 1,
          phase: 1,
        });
      },
    },
    {
      // title:
      // "Step 2. Match Sequencer Generated Reads with Mutations and Errors to the Reference the Genome",
      title: {
        EN: "Step 2. Match Sequencer Generated Reads with Mutations and Errors to the Reference the Genome",
        PT: "Etapa 2. Combine as leituras geradas pelo sequenciador com mutações e erros com o genoma de referência",
        FR: "Étape 2. Faites corresponder les lectures générées par le séquenceur avec les mutations et les erreurs au génome de référence",
      },
      complete: completion?.[2]?.[0],
      available: completion?.[1]?.[1],
      isActive: (currentView: InteractiveViewSettings) => {
        if (currentView) {
          let { section, phase } = currentView;
          if (section === 2 && phase === 0) {
            return true;
          } else {
            return false;
          }
        }
      },
      callback: (setCurrentView: any) => {
        setCurrentView({
          module: "4.4",
          section: 2,
          phase: 0,
        });
      },
    },
    {
      // title: "Knowledge Check",
      title: {
        EN: "Knowledge Check",
        PT: "Checagem de Conhecimento",
        FR: "Vérification de Connaissance",
      },
      pad: true,
      complete: completion?.[2]?.[1],
      available: completion?.[2]?.[0],
      isActive: (currentView: InteractiveViewSettings) => {
        if (currentView) {
          let { section, phase } = currentView;
          if (section === 2 && phase === 1) {
            return true;
          } else {
            return false;
          }
        }
      },
      callback: (setCurrentView: any) => {
        setCurrentView({
          module: "4.4",
          section: 2,
          phase: 1,
        });
      },
    },
    {
      // title: "Step 3. Identify Genotyping Errors",
      title: {
        EN: "Step 3. Identify Genotyping Errors",
        PT: "Etapa 3. Identifique erros de genotipagem",
        FR: "Étape 3. Identifier les erreurs de génotypage",
      },
      complete: completion?.[2]?.[2],
      available: completion?.[2]?.[1],
      isActive: (currentView: InteractiveViewSettings) => {
        if (currentView) {
          let { section, phase } = currentView;
          if (section === 2 && phase === 2) {
            return true;
          } else {
            return false;
          }
        }
      },
      callback: (setCurrentView: any) => {
        setCurrentView({
          module: "4.4",
          section: 2,
          phase: 2,
        });
      },
    },
    {
      // title: "Knowledge Check",
      title: {
        EN: "Knowledge Check",
        PT: "Checagem de Conhecimento",
        FR: "Vérification de Connaissance",
      },
      pad: true,
      complete: completion?.[2]?.[3],
      available: completion?.[2]?.[2],
      isActive: (currentView: InteractiveViewSettings) => {
        if (currentView) {
          let { section, phase } = currentView;
          if (section === 2 && phase === 3) {
            return true;
          } else {
            return false;
          }
        }
      },
      callback: (setCurrentView: any) => {
        setCurrentView({
          module: "4.4",
          section: 2,
          phase: 3,
        });
      },
    },
    {
      // title: "Step 4. Identify Mutations",
      title: {
        EN: "Step 4. Identify Mutations",
        PT: "Etapa 4. Identifique mutações",
        FR: "Étape 4. Identifier les mutations",
      },
      complete: completion?.[3]?.[0],
      available: completion?.[2]?.[3],
      isActive: (currentView: InteractiveViewSettings) => {
        if (currentView) {
          let { section, phase } = currentView;
          if (section === 3 && phase === 0) {
            return true;
          } else {
            return false;
          }
        }
      },
      callback: (setCurrentView: any) => {
        setCurrentView({
          module: "4.4",
          section: 3,
          phase: 0,
        });
      },
    },
    {
      // title: "Knowledge Check",
      title: {
        EN: "Knowledge Check",
        PT: "Checagem de Conhecimento",
        FR: "Vérification de Connaissance",
      },
      pad: true,
      complete: completion?.[3]?.[2],
      available: completion?.[3]?.[0],
      isActive: (currentView: InteractiveViewSettings) => {
        if (currentView) {
          let { section, phase } = currentView;
          if (section === 3 && [1, 2].includes(phase)) {
            return true;
          } else {
            return false;
          }
        }
      },
      callback: (setCurrentView: any) => {
        setCurrentView({
          module: "4.4",
          section: 3,
          phase: 1,
        });
      },
    },
    {
      // title: "Summary",
      title: {
        EN: "Summary",
        PT: "Resumo",
        FR: "Résumé",
      },
      complete: completion?.[3]?.[2],
      available: completion?.[3]?.[2],
      isActive: (currentView: InteractiveViewSettings) => {
        if (currentView) {
          let { section, phase } = currentView;
          if (section === 3 && phase === 3) {
            return true;
          } else {
            return false;
          }
        }
      },
      callback: (setCurrentView: any) => {
        setCurrentView({
          module: "4.4",
          section: 3,
          phase: 3,
        });
      },
    },
  ];

  return (
    <div
      inert={!isOpen}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      }}
      // className={`grid sticky basis-0 top-0 shadow-lg shadow-black text-zinc-400 ${
      //   isOpen
      //     ? "min-w-full grid-cols-[1fr]"
      //     : "min-w-0 -translate-x-full grid-cols-[0fr]"
      // } md:duration-1000  md:min-w-fit overflow-auto relative transition-none md:transition-all h-[calc(100vh-80px)] md:h-[calc(100vh-48px)] bg-zinc-950`}
      className={`sticky top-0 grid text-zinc-400 ${
        isOpen
          ? "min-w-full grid-cols-[1fr] md:w-[384px]"
          : "min-w-0 grid-cols-[0fr] md:w-0"
      } bg-zinc-950/  relative h-[calc(100vh-80px)] overflow-auto bg-zinc-950 transition-none md:h-[calc(100vh-48px)] md:w-[384px] md:min-w-0 md:transition-[grid-template-columns] md:duration-1000`}
    >
      <button
        autoFocus={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="absolute right-2 top-2 border-b border-transparent text-sm hover:border-gray-200 hover:text-white focus-visible:text-white md:hidden"
      >
        <svg
          width="16pt"
          height="16pt"
          version="1.1"
          viewBox="0 0 1200 1200"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 rotate-45 transform fill-current transition"
        >
          <path d="m226.8 651.6v-90c0-15.602 10.801-26.398 26.398-26.398h278.4l0.003906-278.4c0-13.199 10.801-27.602 27.602-27.602h88.801c16.801 0 27.602 14.398 27.602 27.602v278.4h278.4c15.602 0 26.398 10.801 26.398 26.398v90c0 15.602-10.801 27.602-26.398 27.602h-278.4v276c0 18-9.6016 27.602-27.602 27.602h-88.801c-18 0-27.602-9.6016-27.602-27.602v-276h-278.4c-16.801 0-26.398-12-26.398-27.598z"></path>
        </svg>
      </button>
      <div
        className={`col-span-2  ${
          isOpen ? "overflow-x-hidden" : "overflow-hidden"
        } overscroll-contain`}
      >
        <div
          className={` pb-32 md:pb-28  ${
            isOpen ? "md:delay-500" : "text-transparent md:text-inherit"
          } duration-300`}
        >
          <div className="w-full bg-interactiveGreen/60 px-12 pb-4 pt-8 text-center  font-bold text-white md:max-w-sm">
            <h3 className="text-nowrap text-lg ">
              {/* {module === "2.6"
                ? "Genetic Sleuthing & Surveillance"
                : module === "5.6"
                ? "5.6"
                : "4.4"} */}
              {lang === "EN"
                ? "Bioinformatics"
                : lang === "PT"
                ? "Bioinformática"
                : "Bioinformatique"}
              {/* Genetic Sleuthing & Surveillance */}
            </h3>
          </div>
          {nodes.map((node, idx) => {
            return (
              <button
                disabled={dev === true ? false : !node.available}
                onClick={() => {
                  node.callback(setCurrentView);
                }}
                className={`${
                  node.isActive(currentView)
                    ? "text-red-500/ bg-white/5"
                    : node.available
                    ? "hover:bg-white/[2%]"
                    : " "
                } ${
                  node?.pad ? "pl-16" : "pl-10"
                } relative flex w-full justify-between gap-8 overflow-hidden border-b border-white/20 py-3 pl-10 pr-16 text-left text-sm`}
                key={idx}
              >
                <h5 className={`translate-y-0.5`}>
                  {node.title[lang] ?? node.title}
                </h5>
                <div className="absolute right-0 w-16 shrink-0 place-self-center">
                  {
                    node.available || node.complete ? (
                      <div
                        className={`mx-auto aspect-square h-2 w-2 overflow-hidden rounded-full border ${
                          node.complete
                            ? "border-transparent bg-white/50"
                            : " border-white/50"
                        } transition-colors`}
                      ></div>
                    ) : !node.available ? null : null // </svg> //   </g> //     <path d="m200 600.23v399.53c0 44.312 35.93 80.234 79.633 80.234h640.73c43.98 0 79.633-35.883 79.633-80.234v-399.53c0-44.312-35.93-80.234-79.633-80.234h-640.73c-43.98 0-79.633 35.883-79.633 80.234z" /> //     <path d="m880 400c0-154.64-125.36-280-280-280s-280 125.36-280 280v240h80v-240c0-110.46 89.543-200 200-200s200 89.543 200 200v240h80z" /> //   <g> // > //   xmlns="http://www.w3.org/2000/svg" //   viewBox="0 0 1200 1200" //   version="1.1" //   height="16pt" //   width="16pt" //   className=" fill-current m-auto mt-2" // <svg
                  }
                </div>
                {/* <div className="bg-red-500 w-16 h-full ml-auto flex h-full min-h-4"></div> */}
                {/* <div className="w-16 h-full flex justify-center ml-auto shrink-0 bg-red-500">
                  {node.complete ? (
                    <svg
                      width="20pt"
                      height="20pt"
                      className="fill-white/50"
                      version="1.1"
                      viewBox="0 0 1200 1200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m1007.5 280.03c-2.1094-3.4688-6.6094-4.5469-10.078-2.4375-14.344 8.7656-28.594 17.578-42.797 26.484l-21.328 13.359-21.234 13.453-10.641 6.7031-10.688 6.9375-21.047 13.734c-7.0312 4.5-14.062 9.375-21.047 14.156l-21.047 14.438c-13.828 9.7969-27.656 19.547-41.344 29.578l-30.656 22.781-10.031 7.7812-20.109 15.609c-3.375 2.5781-6.6562 5.25-9.9844 7.9219l-9.9375 7.9688c-6.6094 5.3438-13.312 10.641-19.828 16.078l-19.547 16.453c-13.078 10.922-25.734 22.266-38.531 33.562-6.4219 5.5781-12.656 11.438-18.938 17.203l-18.797 17.344-18.422 17.719-9.2344 8.8594-4.5938 4.4531-4.5469 4.5-18.141 18.094-9.0938 9.0469c-3 3.0469-6 6.0938-9.0469 9.0938l-9.0938 9.0469-9.2344 9-18.328 18.094c-6.1406 6.0469-12.328 12-18.422 18.094l-18.094 18.422-1.6875 1.7344c-0.70312-0.75-1.4062-1.4531-2.1094-2.2031l-8.4844-8.7188c-2.7656-2.9062-5.8125-5.625-8.7656-8.3906s-5.9062-5.5312-8.9062-8.2031c-6-5.4375-12.281-10.5-18.516-15.609l-2.3438-1.9219-2.3906-1.8281-4.8281-3.6094c-3.2344-2.3906-6.4219-4.8281-9.7031-7.1719-6.5156-4.6875-13.312-9.0469-20.016-13.406-1.6406-1.125-3.4219-2.1094-5.1094-3.1406l-5.1562-3.0469c-3.4219-2.0625-6.9375-4.0312-10.359-6-3.4688-1.9688-7.0781-3.75-10.594-5.5781-3.5625-1.8281-7.125-3.6094-10.688-5.3438s-7.2656-3.3281-10.922-4.9219-7.2656-3.1406-10.922-4.6875c-7.4062-2.9062-14.906-5.5781-22.312-8.2031-7.5938-2.3438-15.188-4.5938-22.781-6.6562-7.7344-1.8281-15.469-3.5156-23.25-4.9219-7.875-1.2188-15.75-2.2969-23.719-2.9062-1.7812-0.14062-3.6562 0.32812-5.2031 1.4531-3.5625 2.5312-4.4062 7.5469-1.875 11.109l0.1875 0.23438c4.5938 6.4688 9.375 12.469 14.062 18.328 4.5938 6.0938 9.1875 11.906 13.781 17.625 4.4531 5.9531 8.9531 11.625 13.359 17.25 4.3125 5.8125 8.625 11.438 12.938 17.016 4.125 5.7656 8.3438 11.344 12.469 16.875 3.9844 5.7188 8.0625 11.25 12.047 16.781 3.8438 5.7188 7.8281 11.156 11.625 16.734l5.625 8.3906 2.8125 4.125c0.9375 1.3594 1.875 2.7188 2.7656 4.1719 3.5625 5.6719 7.2656 11.109 10.781 16.641l5.2031 8.3906c1.7344 2.7656 3.6094 5.4375 5.2031 8.2969 3.2812 5.6719 6.8438 11.062 10.031 16.688l4.875 8.3906c1.5938 2.8125 3.3281 5.4844 4.8281 8.3438 1.5469 2.8125 3.0938 5.625 4.6406 8.4375 1.5938 2.7656 3.1875 5.5312 4.6406 8.3906s2.9531 5.625 4.5 8.4375l2.1094 4.2188c0.79688 1.4062 1.3594 2.6719 2.0625 3.9844 1.3125 2.625 2.7188 5.25 4.0781 7.8281 0.70312 1.3125 1.3594 2.5781 2.1094 3.8438 0.32812 0.5625 0.79688 1.5 1.1719 2.25l1.2188 2.3906c1.6406 3.2344 3.375 6.375 5.0625 9.6094l2.5781 4.7812 0.32812 0.60938c0.14062 0.28125-1.2188-2.2031-0.60938-1.125l0.046875 0.09375 0.09375 0.14062 0.75 1.5 1.2656 2.3906c4.9688 9.2812 12.141 18 21.047 24.75 33.094 25.078 80.297 18.562 105.38-14.531l1.5-1.9688c4.875-6.4219 9.6562-12.984 14.297-19.594s9.0938-13.359 13.688-20.062c9.1406-13.359 17.578-27.281 26.438-40.922l13.031-20.719c4.3594-6.8906 8.8594-13.688 13.312-20.578l6.75-10.219c2.25-3.4219 4.5-6.8438 6.8438-10.172l7.0312-10.031 7.125-9.9844c2.3438-3.3281 4.7812-6.6562 7.1719-9.9375s4.9219-6.4688 7.4062-9.75l14.953-19.406 3.75-4.875 3.7969-4.7812 7.6406-9.5625 15.281-19.172c10.406-12.609 20.672-25.359 31.172-37.922l15.797-18.844c2.625-3.1406 5.2031-6.3281 7.9219-9.4219l8.0156-9.3281 16.031-18.703 16.266-18.516 8.1562-9.2812c2.7188-3.0938 5.3906-6.2344 8.2031-9.2344l24.891-27.422 8.4375-9.0469 16.875-18.141 4.2188-4.5469 12.938-13.359 17.156-17.953 17.344-17.578c5.8125-5.8594 11.484-11.766 17.531-17.672l17.906-17.625 17.812-17.484 18-17.578 17.906-17.672c11.953-11.766 23.812-23.625 35.625-35.531 2.4844-2.3906 3-6.1406 1.2188-9.0469z" />
                    </svg>
                  ) : node.available ? (
                    <div className="h-2 w-2 my-auto aspect-square rounded-full overflow-hidden border border-white/50"></div>
                  ) : !node.available ? (
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
                  ) : null}
                </div> */}
              </button>
            );
          })}
          {/* <IntroductionNode />
          <StepOneNode />
          <StepTwoNode />
          <StepThreeNode /> */}
        </div>
      </div>
    </div>
  );
}
