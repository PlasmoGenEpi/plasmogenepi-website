"use client";
import { phaseAtom } from "@/store";
import { useAtomValue } from "jotai";
import DragDropKnowledgeCheckOne from "./DragDropKnowledgeCheckOne";
import DragDropKnowledgeCheckTwo from "./DragDropKnowledgeCheckTwo";
import DragDropKnowledgeCheckThree from "./DragDropKnowledgeCheckThree";
import DragDropKnowledgeCheckFour from "./DragDropKnowledgeCheckFour";
import DragDropKnowledgeCheckFive from "./DragDropKnowledgeCheckFive";

export default function DragDropKnowledgeChecks() {
  const phase = useAtomValue(phaseAtom);
  return (
    <div>
      {phase === 4 && <DragDropKnowledgeCheckOne cols={1} />}
      {phase === 10 && <DragDropKnowledgeCheckTwo cols={1} />}
      {phase === 11 && <DragDropKnowledgeCheckThree cols={1} />}
      {phase === 12 && <DragDropKnowledgeCheckFour cols={1} />}
      {phase === 13 && <DragDropKnowledgeCheckFive cols={1} />}

      {/* {} */}
    </div>
  );
}
