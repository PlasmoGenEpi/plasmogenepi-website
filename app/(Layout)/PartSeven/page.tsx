"use client";
import { Container } from "@/app/components/DragDrop/Container";
import { CustomDragLayer } from "@/app/components/DragDrop/CustomDragLayer";
// import ReadsContainer from "@/components/DragDrop/ReadsContainer";
// import ReferenceGenome from "@/components/DragDrop/ReferenceGenome";
// import DragDropContext from "@/components/DragDrop2/DragDropContext";
// import DragDropInterface from "@/components/DragDrop2/DragDropInterface";
// import { isTouchScreenAtom } from "@/store";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";

export default function PartSeven() {
  return (
    <div className="min-h-screen overflow-auto py-40">
      <div className="">
        <div className="mx-auto w-fit px-2 text-xl md:px-4">
          <DndProvider
            backend={TouchBackend}
            options={{
              enableMouseEvents: true,
            }}
          >
            <CustomDragLayer />
            <Container snapToGrid={true}></Container>
          </DndProvider>
        </div>
      </div>
    </div>
  );
}
