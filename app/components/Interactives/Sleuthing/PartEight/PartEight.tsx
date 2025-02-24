"use client";
import Image from "next/image";
import StandardLayout from "../../Shared/misc/StandardLayout";
import Pentagon from "./Pentagon2";
import Diamond from "./Diamond";
import Person from "./Person";
import Persons from "./Phases/Persons";
import PartEightControlPanelWrapper from "./PartEightControlPanel";
import {
  partEightCompletionAtom,
  phase2Atom,
} from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import { partEightPrompts } from "./partEightPrompts";
import DiamondComparisons from "./Phases/DiamondComparisons";
import CompareGenotypes from "./Genotypes/CompareGenotypes";
import { findLociWithSharedMicrohaplotypes } from "../../helpers";
import { fixedData } from "@/data/Interactives/fixedData";
import TruePersonGenotypes from "./Phases/TruePersonGenotypes";
import VillagePersons from "./Phases/VillagePersons";
import PentagonComparisons from "./Phases/PentagonComparisons";
import Pentagon3 from "./Pentagon3";
import PentagonTable from "./Pentagon/PentagonTable/PentagonTable";
import PentagonViewer from "./Pentagon/PentagonViewer";
import VillageComparisons from "./Phases/VillageComparisons";
import PentagonInstructions from "./Pentagon/PentagonInstructions";
import VillageAnimations from "./Phases/VillageAnimations";
import CompletePage from "../../Shared/misc/CompletePage";
import { useEffect } from "react";
import { currentView2Atom } from "../../Shared/InteractiveViewer/InteractiveViewer";
import PartEightNavArray from "./PartEightNavArray/PartEightNavArray";
import VillageAnimations2 from "./Phases/VillageAnimations2";

export default function PartEight({ fixed }: { fixed: boolean }) {
  const partEightCompletion = useAtomValue(partEightCompletionAtom);
  // const phase = useAtomValue(phase2Atom);
  const currentView = useAtomValue(currentView2Atom);

  const { phase, section } = currentView;

  // return (
  //   <div className="mx-auto my-80 grid max-w-6xl gap-16 md:grid-cols-2">
  //     <InteractivePrompt
  //       skippable={partEightCompletion[1]}
  //       complete={partEightCompletion[phase]}
  //       title={partEightPrompts[phase].title}
  //       instructions={partEightPrompts[phase].instructions}
  //     />
  //     {/* <Pentagon3 /> */}
  //     <PentagonViewer />
  //     <PentagonTable />
  //   </div>
  // );

  // useEffect(() => {
  //   if ([].includes(phase)) {
  //   } else {
  //     window.scrollTo(0, 0);
  //   }
  // }, [phase]);

  console.log(currentView);

  // if (phase === 41) {
  //   return (
  //     <div>
  //       <CompletePage part={3} />
  //       <PartEightControlPanelWrapper fixed />
  //     </div>
  //   );
  // }

  return (
    <div className="dark:fill-white/50">
      <InteractivePrompt
        skippable={partEightCompletion[1]}
        complete={partEightCompletion[phase]}
        title={partEightPrompts[phase]?.title}
        instructions={partEightPrompts[phase]?.instructions}
      />
      {/* <PartEightNavArray /> */}
      {phase >= 2 && phase <= 4 && <Persons />}
      {phase >= 5 && phase < 8 && <DiamondComparisons />}
      {phase === 8 && <TruePersonGenotypes />}
      {phase >= 10 && phase < 11 && <VillagePersons />}
      {phase >= 40 ? null : phase >= 23 ? (
        <VillageAnimations />
      ) : (
        // <VillageAnimations2 />
        phase >= 11 && <VillageComparisons />
      )}
      {phase === 41 && (
        <Image
          src={`/InteractiveAssets/Slide9.png`}
          width={1200}
          height={900}
          alt=""
        />
        // <div className="pb-12 pt-12 text-center text-xl">
        //   <div className="h-8 text-left">
        //     <button
        //       id="interactive-top"
        //       className="sr-only focus:not-sr-only focus:absolute focus:px-1 focus:py-0.5"
        //     >
        //       Top of Interactive
        //     </button>
        //   </div>
        //   <div>
        //     <span className="text-2xl font-semibold">Complete!</span>
        //   </div>
        //   <div className="mb-8 mt-4 text-xl">
        //     <span>Scroll to continue.</span>
        //   </div>
        // </div>
      )}
      <PartEightControlPanelWrapper fixed={fixed} />
    </div>
  );

  return (
    <div>
      {phase}
      <InteractivePrompt
        skippable={partEightCompletion[1]}
        complete={partEightCompletion[phase]}
        title={partEightPrompts[phase].title}
        instructions={partEightPrompts[phase].instructions}
      />
      {phase >= 2 && phase <= 4 && <Persons />}
      {phase >= 5 && phase < 8 && <DiamondComparisons />}
      {phase === 8 && <TruePersonGenotypes />}
      {phase >= 9 && phase < 11 && <VillagePersons />}
      {phase >= 11 && <PentagonComparisons />}
      <PartEightControlPanelWrapper fixed={fixed} />
      {/* {phase === 5 && <CompareGenotypes firstPersonId="A" secondPersonId="B" />} */}
    </div>
  );
}
