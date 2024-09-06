"use client";
import PartThreeControlPanel from "./PartThreeControlPanel";
import { useAtomValue } from "jotai";
import {
  partThreeCompletionAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import MicrohaplotypeSelect from "./Phases/MicrohaplotypeSelect";
import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import { partThreePrompts } from "./partThreePrompts";
import LabClonesWithMicrohaplotypes from "./Phases/LabClonesWithMicrohaplotypes";
import PartThreeNavArray from "./NavigationArray/PartThreeNavArray";
import PartThreeGenotypeCreation from "./Phases/PartThreeGenotypeCreation";
import PartThreeKnowledgeCheck from "./Phases/PartThreeKnowledgeCheck";
import CompletePage from "../../Shared/misc/CompletePage";

export default function PartThree({ fixedPanel }: { fixedPanel: boolean }) {
  const phase = useAtomValue(phaseAtom);
  const partThreeCompletion = useAtomValue(partThreeCompletionAtom);

  return (
    <div>
      {phase < 5 && (
        <div className="">
          <InteractivePrompt
            skippable={partThreeCompletion[1]}
            complete={partThreeCompletion[phase]}
            title={partThreePrompts[phase].title}
            instructions={partThreePrompts[phase].instructions}
          />
          <PartThreeNavArray />
          {phase === 1 && <MicrohaplotypeSelect />}
          {phase === 2 && <LabClonesWithMicrohaplotypes />}
          {phase === 3 && <PartThreeGenotypeCreation />}
          {phase === 4 && <PartThreeKnowledgeCheck />}
        </div>
      )}
      {phase === 5 && <CompletePage part={3} />}
      <PartThreeControlPanel fixed={fixedPanel} />
    </div>
  );
}
