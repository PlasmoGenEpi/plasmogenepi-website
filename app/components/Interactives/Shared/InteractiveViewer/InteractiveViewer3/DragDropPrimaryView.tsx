"use client";
import { DndProvider, useDrag } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { useAtom } from "jotai";
import { sideBarIsOpenAtom } from "../InteractiveSideBar/InteractiveSideBar";
import {
  currentView3Atom,
  sideBarDisablesMainContent,
} from "../InteractiveViewer";
import DragDropPrompts from "../../../DragDrop/DragDropPrompts";
import CustomDragLayer from "../../../DragDrop/DragDropElements/CustomDragLayer";
import Container from "../../../DragDrop/DragDropElements/Container";
import QuestionContent from "../../../DragDrop/DragDropElements/QuestionContent";
// import CustomDragLayer from "@/app/components/Interactives/DragDrop/DragDropElements/CustomDragLayer";
// import Container from "@/app/components/Interactives/DragDrop/DragDropElements/Container";
// import QuestionContent from "@/app/components/Interactives/DragDrop/DragDropElements/QuestionContent";
// import DragDropPrompts from "@/app/components/Interactives/DragDrop/DragDropPrompts";

export default function DragDropPrimaryView({
  scrollRef,
  scrollIntervalTimeoutRef,
  verticalScrollIntervalTimeoutRef,
  lang = "EN",
}: {
  lang: "EN" | "PT" | "FR";
  verticalScrollIntervalTimeoutRef: any;
  scrollRef: any;
  scrollIntervalTimeoutRef: any;
}) {
  const [isOpen, setIsOpen] = useAtom(sideBarIsOpenAtom);
  const [currentView, setCurrentView] = useAtom(currentView3Atom);
  // const [currentView, setCurrentView] = useAtom(currentViewAtom);
  const { section, phase } = currentView;
  return (
    <div
      onFocus={
        sideBarDisablesMainContent
          ? () => {
              setIsOpen(false);
            }
          : undefined
      }
      tabIndex={isOpen && sideBarDisablesMainContent ? 0 : undefined}
      className={`relative mx-auto min-h-screen w-full grow basis-full overflow-clip border-black ${
        isOpen
          ? "hidden sm:block"
          : "fadeFromHidden opacity-100 sm:animate-none"
      }`}
    >
      <div
        // inert={isOpen}
        className="relative pb-20 @container/main"
      >
        <div className="mx-auto max-w-6xl px-4">
          <DragDropPrompts lang={lang} />
        </div>
        {currentView.section && currentView.section > 0 ? (
          <DndProvider
            options={{
              enableMouseEvents: true,
            }}
            backend={TouchBackend}
          >
            <CustomDragLayer
              scrollRef={scrollRef}
              scrollIntervalTimeoutRef={scrollIntervalTimeoutRef}
              verticalScrollIntervalTimeoutRef={
                verticalScrollIntervalTimeoutRef
              }
            />
            <Container
              lang={lang}
              scrollRef={scrollRef}
              scrollIntervalTimeoutRef={scrollIntervalTimeoutRef}
            />
          </DndProvider>
        ) : null}

        <div>
          <QuestionContent lang={lang} />
        </div>
        {/* <PageView currentView={currentView} /> */}
      </div>
    </div>
  );
}
