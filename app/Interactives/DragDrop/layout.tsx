// import DragDropButtonNav from "@/components/DragDrop/Buttons/DragDropButtonNav";
// import DragDropKnowledgeChecks from "@/components/DragDrop/KnowledgeChecks/DragDropKnowledgeChecks";
// import DragDropPrompts from "@/components/DragDrop/Prompts/DragDropPrompts";
import DragDropButtonNav from "@/app/components/DragDrop/Buttons/DragDropButtonNav";
import DragDropKnowledgeChecks from "@/app/components/DragDrop/KnowledgeChecks/DragDropKnowledgeChecks";
import DragDropPrompts from "@/app/components/DragDrop/Prompts/DragDropPrompts";
import { ReactNode } from "react";

export default function DragDropLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pb-40">
      {/* <div className="max-w-6xl px-1 mt-4 mx-auto flex flex-col gap-4 pt-8 pb-4">
        <DragDropPrompts />
        <DragDropButtonNav />
      </div> */}
      <div className=" overflow-auto">
        <div className="min-w-[800px] max-w-[850px] bg-zinc-50 py-8 lg:max-w-none">
          <div className="mx-auto max-w-6xl">
            <div className="px-1">{children}</div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-4 flex max-w-6xl flex-col gap-4 px-1">
        <DragDropPrompts />
        <DragDropButtonNav />
        <DragDropKnowledgeChecks />
      </div>
    </div>
  );
}
