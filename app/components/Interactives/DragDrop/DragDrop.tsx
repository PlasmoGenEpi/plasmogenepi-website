// import Container from "@/components/DragDrop2/Container/Container";
// import CustomDragLayer from "@/components/DragDrop2/Container/CustomDragLayer/CustomDragLayer";
"use client";
import { DndProvider, useDrag } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import InteractivePrompt from "../Shared/misc/InteractivePrompt";
import { useEffect, useRef, useState } from "react";
import CustomDragLayer from "./DragDropElements/CustomDragLayer";
import Container from "./DragDropElements/Container";
import KnowledgeCheckQuestion from "../Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import DragDropPrompts from "./DragDropPrompts";
import FormHeader from "../Shared/misc/FormHeader";
import DragDropControlPanel from "./DragDropControlPanel";
import QuestionContent from "./DragDropElements/QuestionContent";
import { phaseAtom } from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import CompletePage from "../Shared/misc/CompletePage";
// import CustomDragLayer from "./DragDropElements/CustomDragLayer";

export default function DragDrop() {
  const scrollRef = useRef<null | HTMLDivElement>(null);
  const scrollIntervalTimeoutRef = useRef<null | NodeJS.Timeout>(null);
  const verticalScrollIntervalTimeoutRef = useRef<null | NodeJS.Timeout>(null);
  const phase = useAtomValue(phaseAtom);

  if (phase === 12) {
    return (
      <div>
        <CompletePage part={4} />
        <DragDropControlPanel scrollRef={scrollRef} />
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <DragDropPrompts />
      </div>
      <DndProvider
        options={{
          enableMouseEvents: true,
        }}
        backend={TouchBackend}
      >
        <CustomDragLayer
          scrollRef={scrollRef}
          scrollIntervalTimeoutRef={scrollIntervalTimeoutRef}
          verticalScrollIntervalTimeoutRef={verticalScrollIntervalTimeoutRef}
        />
        <Container
          scrollRef={scrollRef}
          scrollIntervalTimeoutRef={scrollIntervalTimeoutRef}
        />
      </DndProvider>
      <QuestionContent />
      <DragDropControlPanel scrollRef={scrollRef} />
    </div>
  );
}
