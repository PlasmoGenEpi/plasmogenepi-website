"use client";
import PartThreeControlPanel from "./PartThreeControlPanel";
import { useAtomValue } from "jotai";
import {
  partThreeCompletionAtom,
  phase1Atom,
} from "@/data/Interactives/interactiveStore";
import MicrohaplotypeSelect from "./Phases/MicrohaplotypeSelect";
import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import { partThreePrompts } from "./partThreePrompts";
import LabClonesWithMicrohaplotypes from "./Phases/LabClonesWithMicrohaplotypes";
import PartThreeNavArray from "./NavigationArray/PartThreeNavArray";
import PartThreeGenotypeCreation from "./Phases/PartThreeGenotypeCreation";
import PartThreeKnowledgeCheck from "./Phases/PartThreeKnowledgeCheck";
import CompletePage from "../../Shared/misc/CompletePage";
import PartThreeKnowledgeCheck2 from "./Phases/PartThreeKnowledgeCheck2";

export default function PartThree({ fixedPanel }: { fixedPanel: boolean }) {
  const phase = useAtomValue(phase1Atom);
  const partThreeCompletion = useAtomValue(partThreeCompletionAtom);

  return (
    <div>
      {phase < 6 && (
        <div className="">
          <InteractivePrompt
            skippable={partThreeCompletion[1]}
            complete={partThreeCompletion[phase]}
            title={partThreePrompts[phase].title}
            instructions={partThreePrompts[phase].instructions}
          />
          {phase > 0 && <PartThreeNavArray />}
          {phase === 1 && <MicrohaplotypeSelect />}
          {phase === 2 && <LabClonesWithMicrohaplotypes />}
          {phase === 3 && <PartThreeGenotypeCreation />}
          {phase === 4 && <PartThreeKnowledgeCheck />}
        </div>
      )}
      {phase === 5 && <PartThreeKnowledgeCheck2 />}
      {/* <PartThreeControlPanel fixed={fixedPanel} /> */}
    </div>
  );
}
