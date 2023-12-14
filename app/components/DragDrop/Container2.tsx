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
import ReferenceGenome from "./ReferenceGenome";
const styles = {
  width: 1152,
  height: 600,
  border: "1px solid black",
  position: "relative",
};
export const Container2 = ({ snapToGrid }) => {
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
    <div className="h-[800px] border-x border-black bg-zinc-50" ref={drop}>
      <div className="h-60">
        <div className="grid [grid-template-columns:repeat(15,_20px)]">
          {reads.map((read, idx) => {
            return <DraggableRead key={idx} {...read} />;
          })}
        </div>
      </div>
      <ReferenceGenome />
    </div>
  );
};
