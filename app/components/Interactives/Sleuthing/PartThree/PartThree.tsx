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

export default function PartThree({
  fixedPanel,
  lang,
}: {
  lang: "EN" | "FR" | "PT";
  fixedPanel: boolean;
}) {
  const phase = useAtomValue(phase1Atom);
  const partThreeCompletion = useAtomValue(partThreeCompletionAtom);

  return (
    <div>
      {phase < 6 && (
        <div className="">
          <InteractivePrompt
            lang={lang}
            skippable={partThreeCompletion[1]}
            complete={partThreeCompletion[phase]}
            title={partThreePrompts[phase].title[lang]}
            instructions={partThreePrompts[phase].instructions[lang]}
          />
          {phase > 0 && <PartThreeNavArray lang={lang} />}
          {phase === 1 && <MicrohaplotypeSelect lang={lang} />}
          {phase === 2 && <LabClonesWithMicrohaplotypes lang={lang} />}
          {phase === 3 && <PartThreeGenotypeCreation lang={lang} />}
          {phase === 4 && <PartThreeKnowledgeCheck lang={lang} />}
        </div>
      )}
      {phase === 5 && <PartThreeKnowledgeCheck2 lang={lang} />}
      {/* <PartThreeControlPanel fixed={fixedPanel} /> */}
    </div>
  );
}
