"use client";
import { useAtom, useAtomValue } from "jotai";
import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import CloneRowTable from "./CloneRowTable/CloneRowTable";
import { partOnePrompts } from "./partOnePrompts";
import {
  partOneCompletionAtom,
  phaseAtom,
  selectedPositiveControlBoardAtom,
} from "../../../../data/Interactives/interactiveStore";
import { useEffect, useState } from "react";
import RefRow from "./CloneRowTable/RefRow";
import AlternateRow from "./CloneRowTable/AlternateRow";
import LabClonesWithSNPs from "./Phases/LabClonesWithSNPs";
import { usePrevious } from "@/app/components/hooks";
import ControlPanelWrapper from "../../Shared/ControlPanel/ControlPanelWrapper";
import PartOneControlPanel from "./PartOneControlPanel";
import NavigationArray from "../../Shared/NavigationArray/NavigationArray";
import Image from "next/image";
import BloodSpotThumbnail from "../../Shared/NavigationArray/BloodSpotThumbnail/BloodSpotThumbnail";
import PartOneNavArray from "./NavigationArray/PartOneNavArray";
import P1Genotyping from "./Phases/P1Genotyping";
import { cloneRowColors } from "../../Shared/CloneRow/CloneRow";
import PartOneKnowledgeCheck from "./Phases/PartOneKnowledgeCheck";
import CompletePage from "../../Shared/misc/CompletePage";
import P1GenotypeCreation from "./Phases/P1GenotypeCreation";
import StandardLayout from "../../Shared/misc/StandardLayout";
import { findFirstFocusableElement } from "@/helpers/helpers";

export default function PartOne({ fixedPanel }: { fixedPanel?: boolean }) {
  const [phase, setPhase] = useAtom(phaseAtom);
  const [partOneCompletion, setPartOneCompletion] = useAtom(
    partOneCompletionAtom,
  );
  const [selectedBoard, setSelectedBoard] = useAtom(
    selectedPositiveControlBoardAtom,
  );
  const forwards = usePrevious(phase, 1).current <= phase;

  useEffect(() => {
    setSelectedBoard(1);
    // localStorage.clear();
  }, [setSelectedBoard, phase]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (partOneCompletion[phase]) {
      return;
    }
    if (forwards) {
      let x: HTMLElement | undefined = findFirstFocusableElement(
        document.getElementById("form-interactive"),
      );
      x?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, selectedBoard]);

  return (
    <div>
      {phase < 5 && (
        <div>
          <InteractivePrompt
            skippable={partOneCompletion[1]}
            complete={partOneCompletion[phase]}
            title={partOnePrompts[phase].title}
            instructions={partOnePrompts[phase].instructions}
          />
          <PartOneNavArray forwards={forwards} />
        </div>
      )}
      <div>
        {(phase === 1 || phase === 2) && (
          <LabClonesWithSNPs phase={phase} forwards={forwards} />
        )}
        {phase === 3 && <P1GenotypeCreation forwards={forwards} />}
        {phase === 4 && <PartOneKnowledgeCheck forwards={forwards} />}
      </div>
      {phase === 5 && (
        <StandardLayout complete={true} part={1}></StandardLayout>
      )}
      <div className="mt-20">
        <PartOneControlPanel fixed={true} />
      </div>
    </div>
  );
}
