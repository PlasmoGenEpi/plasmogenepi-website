import update from "immutability-helper";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { DraggableRead } from "./DraggableBox";
import { snapToGrid as doSnapToGrid } from "./snapToGrid";
import {
  phaseAtom,
  reads2Atom,
  reads3Atom,
  readsAtom,
  refGenome,
} from "@/store";
import { useAtom } from "jotai";
const styles = {
  width: 1152,
  height: 600,
  border: "1px solid black",
  position: "relative",
};
export const Container = ({ snapToGrid }) => {
  const [phase, setPhase] = useAtom(phaseAtom);
  const [reads, setReads] = useAtom(readsAtom);
  const [reads2, setReads2] = useAtom(reads2Atom);
  const [reads3, setReads3] = useAtom(reads3Atom);

  const currentReads = phase === 1 ? reads : phase === 2 ? reads2 : reads3;
  const currentSetter =
    phase === 1 ? setReads : phase === 2 ? setReads2 : setReads3;

  // const [boxes2, setBoxes2] = useState([
  //   { id: 1, top: 32, left: 32, text: "TGTGTAATGAATAAA", specials: {} },
  //   { id: 2, top: 64, left: 32, text: "TGTGTAATGAATAAA", specials: {} },
  //   { id: 3, top: 96, left: 32, text: "AACTTTAAACAAAAT", specials: {} },
  //   { id: 4, top: 128, left: 32, text: "AACTTTAAACAAAAT", specials: {} },
  //   { id: 5, top: 160, left: 32, text: "TGTGTAATGAATAAA", specials: {} },
  //   { id: 6, top: 192, left: 32, text: "AACTTTAAACAAAAT", specials: {} },
  //   { id: 7, top: 224, left: 32, text: "TGTGTAATGAATAAA", specials: {} },
  //   { id: 8, top: 256, left: 32, text: "AACTTTAAACAAAAT", specials: {} },
  //   { id: 9, top: 288, left: 32, text: "TGTGTAATGAATAAA", specials: {} },
  //   { id: 10, top: 320, left: 32, text: "TGTGTAATGAATAAA", specials: {} },
  // ]);
  const moveRead = useCallback(
    (id, left, top) => {
      let newReads = [...currentReads];
      let newRead = { ...currentReads[id - 1] };
      newRead.left = left;
      newRead.top = top;
      newReads[id - 1] = newRead;
      currentSetter(newReads);
    },
    [phase, currentReads, currentSetter],
  );
  const [, drop] = useDrop(
    () => ({
      accept: "box",
      drop(
        item: { left: number; top: number; id: number; text: string },
        monitor,
      ) {
        const delta = monitor.getDifferenceFromInitialOffset();
        let left = Math.round(item.left + delta.x);
        let top = Math.round(item.top + delta.y);
        if (snapToGrid) {
          [left, top] = doSnapToGrid(left, top, currentReads, item.id);
          while (
            currentReads.filter((box, idx) => {
              return box.left === left && box.top === top && item.id !== box.id;
            }).length
          ) {
            top += 32;
          }
        }
        moveRead(item.id, left, top);
        return undefined;
      },
    }),
    [moveRead],
  );
  return (
    <div ref={drop} className="relative h-[640px] w-[1152px]">
      <div className="h-8">{phase}</div>
      <div className="absolute bottom-0 left-[320px] right-0 flex h-40 items-center justify-end border border-black">
        <svg
          className="mr-2"
          width="64pt"
          height="64pt"
          version="1.1"
          viewBox="0 0 1200 1200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="m1e3 187.5h-115.38l-40.5-87c-14.375-30.625-45.5-50.5-79.375-50.5h-329.5c-33.75 0-65 19.75-79.375 50.5l-40.5 87h-115.38c-34.5 0-62.5 28-62.5 62.5v75c0 6.875 5.625 12.5 12.5 12.5h50v737.5c0 41.375 33.625 75 75 75h650c41.375 0 75-33.625 75-75v-737.5h50c6.875 0 12.5-5.625 12.5-12.5v-75c0-34.5-28-62.5-62.5-62.5zm-621.38-76.5c10.25-21.875 32.5-36 56.75-36h329.5c24.125 0 46.375 14.125 56.625 36l35.625 76.5h-27.625l-27.25-58.625c-8.125-17.5-26-28.875-45.375-28.875h-313.5c-19.375 0-37.125 11.375-45.375 28.875l-27.25 58.625h-27.625l35.625-76.5zm423.25 76.5h-403.62l22.375-48.125c4.125-8.75 13-14.375 22.625-14.375h313.5c9.625 0 18.625 5.625 22.625 14.375l22.375 48.125zm173.25 887.5c0 27.625-22.375 50-50 50h-650.12c-27.625 0-50-22.375-50-50v-737.5h750v737.5zm62.5-762.5h-875.12v-62.5c0-20.625 16.875-37.5 37.5-37.5h800c20.625 0 37.5 16.875 37.5 37.5v62.5z" />
            <path d="m600 1062.5c27.625 0 50-22.375 50-50v-562.5c0-27.625-22.375-50-50-50s-50 22.375-50 50v562.5c0 27.625 22.375 50 50 50zm-25-612.5c0-13.75 11.25-25 25-25s25 11.25 25 25v562.5c0 13.75-11.25 25-25 25s-25-11.25-25-25z" />
            <path d="m800 1062.5c27.625 0 50-22.375 50-50v-562.5c0-27.625-22.375-50-50-50s-50 22.375-50 50v562.5c0 27.625 22.375 50 50 50zm-25-612.5c0-13.75 11.25-25 25-25s25 11.25 25 25v562.5c0 13.75-11.25 25-25 25s-25-11.25-25-25z" />
            <path d="m400 1062.5c27.625 0 50-22.375 50-50v-562.5c0-27.625-22.375-50-50-50s-50 22.375-50 50v562.5c0 27.625 22.375 50 50 50zm-25-612.5c0-13.75 11.25-25 25-25s25 11.25 25 25v562.5c0 13.75-11.25 25-25 25s-25-11.25-25-25z" />
          </g>
        </svg>
      </div>
      {currentReads.map((read, idx) => (
        <DraggableRead key={read.id} {...read} />
      ))}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "320px",
          zIndex: 1000,
        }}
        className=" pointer-events-none grid h-full w-[816px]  bg-opacity-80 [grid-template-columns:repeat(51,_1fr)]"
      >
        {refGenome?.split("").map((e, i) => {
          return (
            <div key={i} className="flex items-center justify-center px-[1px]">
              <span className="mb-auto mt-1">{e}</span>
            </div>
          );
        })}
      </div>
      <div className="absolute -bottom-16 right-0 w-full">
        <div className="flex w-full ">
          <button
            onClick={(e) => {
              console.log(phase);
              setPhase(phase - 1);
            }}
            className={
              phase > 1 ? "bg-[#0E5258] px-4 py-2 text-white " : "hidden"
            }
          >
            back
          </button>
          <button
            onClick={(e) => {
              console.log(phase);
              setPhase(phase + 1);
            }}
            className={
              reads
                .filter((box, idx) => {
                  return box.text === "TGTGTAATGAATAAA";
                })
                .filter((box) => {
                  return box.left === 368;
                }).length === 6 &&
              reads
                .filter((box, idx) => {
                  return box.text === "AACTTTAAACAAAAT";
                })
                .filter((box) => {
                  return box.left === 832;
                }).length === 4
                ? "ml-auto bg-[#0E5258] px-4 py-2 text-white"
                : "hidden"
            }
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};
