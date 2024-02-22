"use client";
import Container from "@/app/components/DragDrop/Container/Container";
import CustomDragLayer from "@/app/components/DragDrop/Container/CustomDragLayer/CustomDragLayer";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
// import Container from "@/components/DragDrop/Container/Container";
// import CustomDragLayer from "@/components/DragDrop/Container/CustomDragLayer/CustomDragLayer";
import { useMediaQuery } from "usehooks-ts";

export default function DragDrop() {
  const large = useMediaQuery("(min-width:1152px)");
  const size = 14;
  // console.log(large);
  return (
    <div className="text-base">
      <DndProvider
        options={{
          enableMouseEvents: true,
        }}
        backend={TouchBackend}
      >
        <CustomDragLayer size={size} large={large} />
        <Container size={size} large={large} readRowHeight={26} />
      </DndProvider>
    </div>
  );
}
