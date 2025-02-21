// import Container from "@/app/components/DragDrop2/Container/Container";
// import CustomDragLayer from "@/app/components/DragDrop2/Container/CustomDragLayer/CustomDragLayer";
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
import { phase3Atom } from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import CompletePage from "../Shared/misc/CompletePage";
// import CustomDragLayer from "./DragDropElements/CustomDragLayer";

const topDistanceIncludingBorder = 172;
const borderWidth = 24;
const paddingFromBorder = topDistanceIncludingBorder - borderWidth;
const paddingLeft = 32;
const paddingRight = 64;
const rowHeight = 32;
const rowDistance = 32;
const charSize = 18;
const readStartOffset = 18;
const dropContainerWidth = 1148;

export default function DragDrop() {
  const scrollRef = useRef<null | HTMLDivElement>(null);
  const scrollIntervalTimeoutRef = useRef<null | NodeJS.Timeout>(null);
  const verticalScrollIntervalTimeoutRef = useRef<null | NodeJS.Timeout>(null);
  const phase = useAtomValue(phase3Atom);

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
