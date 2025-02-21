"use client";
import { ReactNode } from "react";
import { atom, useAtom } from "jotai";
import InteractiveSideBarList from "./InteractiveSideBarList";

export type ViewNode = {
  title: string;
  node: ReactNode;
  complete: boolean;
  requires?: boolean | null;
  callback?: (view: number, phase: number) => void;
  view: number;
  phase: number;
};
export type ViewListNode = {
  title: string;
  subcomponents: (ViewListNode | ViewNode)[];
};

export const InteractiveSideBarOpenAtom = atom(false);

export default function InteractiveSideBar({
  title,
  viewList,
}: {
  title: string;
  viewList: (ViewListNode | ViewNode)[];
}) {
  const [open, setOpen] = useAtom(InteractiveSideBarOpenAtom);

  // return (
  //   <div className="sticky top-0 h-screen w-96 overflow-auto bg-black p-4">
  //     <div className="h-[4000px] bg-white"></div>
  //   </div>
  // );

  return (
    <div
      className={`${open ? "translate-x-0" : "pointer-events-none -translate-x-full"} fixed top-0 z-40 grid h-screen w-full overflow-auto overscroll-contain bg-zinc-900 pb-40 transition-all duration-1000 sm:w-fit`}
    >
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="absolute right-2 top-2 border-b border-transparent text-sm text-white hover:border-gray-200"
      >
        Close
      </button>

      <div className="">
        <div className="">
          <div className="h-fit bg-interactiveGreen/50 px-8 pb-4 pt-12 text-center">
            <h2 className="text-lg text-gray-200">{title}</h2>
          </div>
          {viewList.map((node, idx) => {
            if ("subcomponents" in node) {
              return <InteractiveSideBarList key={idx} node={node} />;
            } else {
              return (
                <button
                  key={idx}
                  className="h-fit w-full border-b border-gray-200 bg-zinc-800 py-4 pr-8 text-left text-lg last:border-b-0"
                >
                  <h3 className="text-gray-200">{node.title}</h3>
                </button>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
