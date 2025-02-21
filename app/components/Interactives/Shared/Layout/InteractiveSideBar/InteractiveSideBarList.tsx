"use client";
import { useState } from "react";
import { ViewListNode } from "./InteractiveSideBar";
import { interactiveSectionAtom } from "../Viewer/Viewer";
import { useAtomValue } from "jotai";
import { phaseAtom } from "@/data/Interactives/interactiveStore";

export default function InteractiveSideBarList({
  node,
}: {
  node: ViewListNode;
}) {
  const [open, setOpen] = useState(false);
  const view = useAtomValue(interactiveSectionAtom);
  const phase = useAtomValue(phaseAtom);
  return (
    <div className="max-w-sm border-b border-gray-200/20">
      <button
        data-tip={`${node.title}`}
        onClick={() => {
          setOpen(!open);
        }}
        className={`${
          open
            ? ""
            : "[&:has(div>h3:hover)]:tooltip before:transition-[content]"
        } h-fit w-full py-4 pr-8 text-left text-lg`}
      >
        <div className="ml-6 grid w-full grid-cols-[40px,auto] gap-6">
          <svg
            width="16pt"
            height="16pt"
            className={`mx-auto mb-auto fill-gray-200 ${
              open ? "-rotate-90" : ""
            } duration-500`}
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
          </svg>
          <h3
            className={`${
              open ? "" : "text-nowrap"
            } translate-y-0.5 overflow-hidden text-ellipsis text-left text-sm text-gray-200`}
          >
            {node.title}
          </h3>
        </div>
      </button>
      <div
        className={`${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } grid duration-500`}
      >
        <ol className="col-span-2 grid overflow-hidden">
          {node.subcomponents.map((subNode, idx) => {
            if ("callback" in subNode && subNode.callback) {
              return (
                <button
                  onClick={() => {
                    if ("callback" in subNode && subNode.callback) {
                      subNode.callback(subNode.view, subNode.phase);
                    }
                  }}
                  key={idx}
                  className={`relative bg-zinc-900 py-3 pr-12 text-left text-gray-200 hover:bg-zinc-800 ${
                    subNode.requires === false ? "pointer-events-none" : ""
                  } ${
                    view === subNode.view && phase === subNode.phase
                      ? "bg-zinc-700 hover:bg-zinc-700"
                      : ""
                  }`}
                >
                  <h4 className="ml-[96px] text-sm">{subNode.title}</h4>
                  {(subNode.requires === null || subNode.requires) && (
                    <div
                      className={`absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border-[0.5px] border-white ${
                        subNode.complete ? "bg-white" : ""
                      }`}
                    ></div>
                  )}
                </button>
              );
            }
          })}
        </ol>
      </div>
    </div>
  );
}
