"use client";
import { useAtom } from "jotai";
import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import { partOnePrompts } from "./partOnePrompts";
// import {
//   partOneCompletionAtom,
//   phase1Atom,
//   selectedPositiveControlBoardAtom,
// } from "../../../../data/Interactives/interactiveStore";
import { useEffect } from "react";
import LabClonesWithSNPs from "./Phases/LabClonesWithSNPs";
import { usePrevious } from "@/app/components/hooks";
import PartOneNavArray from "./NavigationArray/PartOneNavArray";

import PartOneKnowledgeCheck from "./Phases/PartOneKnowledgeCheck";
import P1GenotypeCreation from "./Phases/P1GenotypeCreation";
import FormHeader from "../../Shared/misc/FormHeader";
import KnowledgeCheckQuestion from "../../Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import { atomWithStorage, RESET } from "jotai/utils";
import QuestionResponseText from "../../Shared/misc/QuestionResponseText";
import { findFirstFocusableElement } from "../../helpers";
import P1KnowledgeCheck2 from "./Phases/P1KnowledgeCheck2";
import {
  partOneCompletionAtom,
  phase1Atom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";

export default function PartOne({ fixedPanel }: { fixedPanel?: boolean }) {
  const [phase1, setPhase1] = useAtom(phase1Atom);
  const [partOneCompletion, setPartOneCompletion] = useAtom(
    partOneCompletionAtom,
  );
  const [selectedBoard, setSelectedBoard] = useAtom(
    selectedPositiveControlBoardAtom,
  );
  const forwards = usePrevious(phase1, 1).current <= phase1;

  useEffect(() => {
    setSelectedBoard(1);
    // localStorage.clear();
  }, [setSelectedBoard, phase1]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (partOneCompletion[phase1]) {
      return;
    }
    if (forwards) {
      let x: HTMLElement | undefined = findFirstFocusableElement(
        document.getElementById("form-interactive"),
      );
      x?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase1, selectedBoard]);

  return (
    <div>
      {phase1 <= 5 && (
        <div>
          <InteractivePrompt
            skippable={partOneCompletion[1]}
            complete={partOneCompletion[phase1]}
            title={partOnePrompts[phase1].title}
            instructions={partOnePrompts[phase1].instructions}
          />
          {phase1 > 0 && phase1 < 5 && <PartOneNavArray forwards={forwards} />}
        </div>
      )}
      <div>
        {(phase1 === 1 || phase1 === 2) && (
          <LabClonesWithSNPs phase={phase1} forwards={forwards} />
        )}
        {phase1 === 3 && <P1GenotypeCreation forwards={forwards} />}
        {phase1 === 4 && <PartOneKnowledgeCheck forwards={forwards} />}
      </div>
      {phase1 === 5 && <P1KnowledgeCheck2 />}
      {/* <div className="mt-20">
        <PartOneControlPanel fixed={true} />
      </div> */}
    </div>
  );
}
