import update from "immutability-helper";
import { useCallback, useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { DraggableRead } from "./DraggableBox";
import {
  snapToGrid as doSnapToGrid,
  validLocation,
  withinTrash,
} from "./snapToGrid";
import {
  compareUnorderedArrays,
  dragWithinTrashAtom,
  partSevenSubstepCompletionsAtom,
  phaseAtom,
  reads2Atom,
  reads3Atom,
  readsAtom,
  refGenome,
} from "@/store";
import { useAtom } from "jotai";
import QuestionsContainer from "./QuestionsContainer";
import DragDropNextButton from "./DragDropNextButton";
import Legend from "./Legend";
import GridDropArea from "./GridDropArea";
import TrashArea from "./TrashArea";
import LabelTwo from "./DragDropQuestions/LabelTwo";
import LabelOne from "./DragDropQuestions/LabelOne";
import LabelThree from "./DragDropQuestions/LabelThree";
import LabelFour from "./DragDropQuestions/LabelFour";
const styles = {
  width: 1152,
  height: 600,
  border: "1px solid black",
  position: "relative",
};

// const readsValid = (
//   reads: {
//     id: number;
//     top: number;
//     left: number;
//     text: string;
//     specials: { [key: number]: string };
//   }[],
//   readSet: number,
// ) => {
//   console.log("func called");
//   let tReads = reads
//     .filter((read, idx) => {
//       return (
//         read.text[0] === "T" &&
//         read.left === 368 &&
//         read.text.slice(-4) !== "AAAT"
//       );
//     })
//     .map((read, idx) => {
//       return read.id;
//     });

//   let aReads = reads
//     .filter((read, idx) => {
//       return read.text[0] === "A" && read.left === 832;
//     })
//     .map((read, idx) => {
//       return read.id;
//     });

//   if (readSet === 1) {
//     if (!compareUnorderedArrays(tReads, [1, 2, 5, 7, 9, 10])) {
//       return false;
//     }
//     if (!compareUnorderedArrays(aReads, [3, 4, 6, 8])) {
//       return false;
//     }
//   } else if (readSet === 2) {
//     if (!compareUnorderedArrays(tReads, [2, 3, 4, 8])) {
//       return false;
//     }
//     if (!compareUnorderedArrays(aReads, [1, 5, 6, 9, 10])) {
//       return false;
//     }
//     if (!withinTrash(reads[6].left, reads[6].top)) {
//       return false;
//     }
//   }
//   return true;
// };

export const placeHighest = (reads) => {
  let newReads = reads.map((read) => {
    return { ...read };
  });
  let count = 0;
  let innerFunc = (reads, changed) => {
    count++;
    if (!changed || count > 1000) {
      return reads;
    }
    changed = false;
    for (let i = 0; i < reads.length; i++) {
      if (withinTrash(reads[i].left, reads[i].top)) {
      } else if (
        validLocation(reads[i].left, reads[i].top - 32, reads, reads[i].id)
      ) {
        reads[i].top = reads[i].top - 32;
        changed = true;
        break;
      }
    }
    innerFunc(reads, changed);
  };
  innerFunc(newReads, true);
  return newReads;
};

export const Container = ({ snapToGrid }) => {
  const [phase, setPhase] = useAtom(phaseAtom);
  const [reads, setReads] = useAtom(readsAtom);
  const [reads2, setReads2] = useAtom(reads2Atom);
  const [reads3, setReads3] = useAtom(reads3Atom);
  const [dragWithinTrash, setDragWithinTrash] = useAtom(dragWithinTrashAtom);

  const currentReads = phase <= 2 ? reads : reads2;
  const currentSetter = phase <= 2 ? setReads : setReads2;
  const [partSevenSubstepCompletions, setPartSevenSubstepCompletions] = useAtom(
    partSevenSubstepCompletionsAtom,
  );

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
  // useEffect(() => {
  //   setReads([
  //     {
  //       id: 1,
  //       top: 32,
  //       left: 32,
  //       text: "TGTGTAATGAATAAA",
  //       specials: {},
  //     },
  //     {
  //       id: 2,
  //       top: 64,
  //       left: 32,
  //       text: "TGTGTAATGAATAAA",
  //       specials: {},
  //     },
  //     { id: 3, top: 96, left: 32, text: "AACTTTAAACAAAAT", specials: {} },
  //     { id: 4, top: 128, left: 32, text: "AACTTTAAACAAAAT", specials: {} },
  //     { id: 5, top: 160, left: 32, text: "TGTGTAATGAATAAA", specials: {} },
  //     { id: 6, top: 192, left: 32, text: "AACTTTAAACAAAAT", specials: {} },
  //     { id: 7, top: 224, left: 32, text: "TGTGTAATGAATAAA", specials: {} },
  //     { id: 8, top: 256, left: 32, text: "AACTTTAAACAAAAT", specials: {} },
  //     { id: 9, top: 288, left: 32, text: "TGTGTAATGAATAAA", specials: {} },
  //     { id: 10, top: 320, left: 32, text: "TGTGTAATGAATAAA", specials: {} },
  //   ]);
  // }, []);

  // useEffect(() => {
  //   setReads2([
  //     {
  //       id: 1,
  //       top: 32,
  //       left: 32,
  //       text: "AACGTTGAACATAAT",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         3: "red",
  //         6: "red",
  //         11: "red",
  //       },
  //     },
  //     {
  //       id: 2,
  //       top: 64,
  //       left: 32,
  //       text: "TGTGTAATGAATAAA",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         1: "purple",
  //         8: "purple",
  //         13: "purple",
  //       },
  //     },
  //     {
  //       id: 3,
  //       top: 96,
  //       left: 32,
  //       text: "TGTGTAATAAATAAA",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         1: "purple",
  //         8: "red",
  //         13: "purple",
  //       },
  //     },
  //     {
  //       id: 4,
  //       top: 128,
  //       left: 32,
  //       text: "TCTGTATTAAATACA",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         1: "red",
  //         6: "orange",
  //         8: "red",
  //         13: "red",
  //       },
  //     },
  //     {
  //       id: 5,
  //       top: 160,
  //       left: 32,
  //       text: "AACTTTAAACAAAAT",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         3: "purple",
  //         6: "purple",
  //       },
  //     },
  //     {
  //       id: 6,
  //       top: 192,
  //       left: 32,
  //       text: "AACGTTGAACATAAT",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         3: "red",
  //         6: "red",
  //         11: "red",
  //       },
  //     },
  //     {
  //       id: 7,
  //       top: 224,
  //       left: 32,
  //       text: "TCTGTAATACAAAAT",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         color: "beige",
  //         1: "red",
  //       },
  //     },
  //     {
  //       id: 8,
  //       top: 256,
  //       left: 32,
  //       text: "TCTGTAATAAATACA",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         1: "red",
  //         8: "red",
  //         13: "red",
  //       },
  //     },
  //     {
  //       id: 9,
  //       top: 288,
  //       left: 32,
  //       text: "AACTTTAAACAAAAT",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         3: "purple",
  //         6: "purple",
  //       },
  //     },
  //     {
  //       id: 10,
  //       top: 320,
  //       left: 32,
  //       text: "AACTTTAAACAAAAT",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         3: "purple",
  //         6: "purple",
  //       },
  //     },
  //     {
  //       id: 11,
  //       top: 32,
  //       left: 32,
  //       text: "TCTGTAATAAATACA",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         1: "red",
  //         8: "red",
  //         13: "red",
  //       },
  //     },
  //     {
  //       id: 12,
  //       top: 64,
  //       left: 32,
  //       text: "TGTGTAATGAATAAA",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         1: "purple",
  //         8: "purple",
  //         13: "purple",
  //       },
  //     },
  //     {
  //       id: 13,
  //       top: 96,
  //       left: 32,
  //       text: "AACTTTAAACAAAAT",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         3: "purple",
  //         6: "purple",
  //       },
  //     },
  //     {
  //       id: 14,
  //       top: 128,
  //       left: 32,
  //       text: "AACGTTGAACATAAT",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         3: "red",
  //         6: "red",
  //         11: "red",
  //       },
  //     },
  //     {
  //       id: 15,
  //       top: 160,
  //       left: 32,
  //       text: "TGTGTAATGAATAAA",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         1: "purple",
  //         8: "purple",
  //         13: "purple",
  //       },
  //     },
  //     {
  //       id: 16,
  //       top: 192,
  //       left: 32,
  //       text: "TGTGTAATAAATAAA",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         1: "purple",
  //         8: "red",
  //         13: "purple",
  //       },
  //     },
  //     {
  //       id: 17,
  //       top: 224,
  //       left: 32,
  //       text: "AGTGAGTTTCGCGCG",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         color: "rebeccapurple",
  //       },
  //     },
  //     {
  //       id: 18,
  //       top: 256,
  //       left: 32,
  //       text: "TGTGTAATGAATAAA",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         1: "purple",
  //         8: "purple",
  //         13: "purple",
  //       },
  //     },
  //     {
  //       id: 19,
  //       top: 288,
  //       left: 32,
  //       text: "AACGTTGAACATAAT",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         3: "red",
  //         6: "red",
  //         11: "red",
  //       },
  //     },
  //     {
  //       id: 20,
  //       top: 320,
  //       left: 32,
  //       text: "ATATATAGGGGGGGG",
  //       specials2: Array(15)
  //         .fill(0)
  //         .map(() => false),
  //       specials: {
  //         color: "rebeccapurple",
  //       },
  //     },
  //   ]);
  // }, []);

  // const moveRead = useCallback(
  //   (id, left, top) => {
  //     let newReads = [...currentReads];
  //     let newReadIndex;
  //     for (let i = 0; i < currentReads.length; i++) {
  //       if (currentReads[i].id === id) {
  //         console.log(id);
  //         newReadIndex = i;
  //         break;
  //       }
  //     }
  //     if (newReadIndex === undefined) {
  //       console.log("fail moving read");
  //       return;
  //     }
  //     let newRead = { ...currentReads[newReadIndex] };
  //     newRead.left = left;
  //     newRead.top = top;
  //     newReads[newReadIndex] = newRead;
  //     currentSetter(newReads);
  //   },
  //   [phase, currentReads, currentSetter],
  // );

  const moveRead = useCallback(
    (id, left, top) => {
      let newReads = [...currentReads];
      let newRead = { ...currentReads[id - 1] };
      newRead.left = left;
      newRead.top = top;
      newReads[id - 1] = newRead;
      let x = placeHighest(newReads);
      currentSetter(x);
    },
    [phase, currentReads, currentSetter],
  );

  const setReadLeft = useCallback(
    (id) => {
      console.log("called)");
      let start = 64;
      while (
        currentReads.filter((read) => {
          return read.left === 32 && read.top === start && read.id !== id;
        }).length
      ) {
        start += 32;
      }
      let newReads = [...currentReads];
      let newRead = { ...currentReads[id - 1] };
      newRead.top = start;
      newRead.left = 32;
      newReads[id - 1] = newRead;
      let x = placeHighest(newReads);
      currentSetter(x);
      // currentSetter(newReads);
    },
    [currentReads, currentSetter, phase],
  );

  // let x = [...currentReads];
  // console.log(currentReads);
  // console.log(
  //   x.sort((a, b) => {
  //     return a.left <= b.left ? -1 : 1;
  //   }),
  // );
  // console.log(
  //   currentReads.sort((a, b) => {
  //     return a.left <= b.left ? a : b;
  //   }),
  // );
  const [, drop] = useDrop(
    () => ({
      accept: "box",
      drop(
        item: { left: number; top: number; id: number; text: string },
        monitor,
      ) {
        if (dragWithinTrash) {
        }
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
        // let placeHighest = (reads) => {
        //   let newReads = reads.map((read) => {
        //     return { ...read };
        //   });
        //   let innerFunc = (reads, changed) => {
        //     console.log("called");
        //     if (!changed) {
        //       return;
        //     }
        //     for (let i = 0; i < reads.length; i++) {
        //       if (
        //         validLocation(
        //           reads[i].left,
        //           reads[i].top - 32,
        //           reads,
        //           reads[i].id,
        //         )
        //       ) {
        //         console.log(reads[i]);
        //         reads[i].top = reads[i].top - 32;
        //         changed = true;
        //         break;
        //       }
        //     }
        //     console.log(changed);
        //     // innerFunc(reads, changed);
        //   };
        //   innerFunc(newReads, true);
        // };
        // placeHighest(currentReads);
        moveRead(item.id, left, top);
        return undefined;
      },
    }),
    [moveRead],
  );
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
      }}
      ref={drop}
      className="relative h-[640px] w-[1152px] font-bold"
    >
      <LabelOne />
      <LabelTwo />
      <LabelThree />
      <LabelFour />
      {phase === 2 ? <QuestionsContainer /> : null}
      <GridDropArea />
      <div
        className={
          partSevenSubstepCompletions[phase]
            ? "h-8 -translate-y-16 text-[green]"
            : "h-8 -translate-y-16 text-[red]"
        }
      >
        {phase}
      </div>
      <TrashArea />
      {phase === 3
        ? currentReads
            .slice(0, 10)
            .map((read, idx) => (
              <DraggableRead
                key={read.id}
                {...read}
                setReadLeft={setReadLeft}
              />
            ))
        : currentReads.map((read, idx) => (
            <DraggableRead key={read.id} {...read} setReadLeft={setReadLeft} />
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
      <div className="absolute -bottom-20 right-0 w-full">
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
          <DragDropNextButton />
          {/* <button
            onClick={(e) => {
              console.log(phase);
              console.log(partSevenSubstepCompletions);
              setPartSevenSubstepCompletions({
                ...partSevenSubstepCompletions,
                [phase]: true,
              });
              setPhase(phase + 1);
            }}
            className={
              (phase === 1 && readsValid(reads, 1)) || phase === 2
                ? "ml-auto bg-[#0E5258] px-4 py-2 text-white"
                : "hidden"
              // reads
              //   .filter((box, idx) => {
              //     return box.text === "TGTGTAATGAATAAA";
              //   })
              //   .filter((box) => {
              //     return box.left === 368;
              //   }).length === 6 &&
              // reads
              //   .filter((box, idx) => {
              //     return box.text === "AACTTTAAACAAAAT";
              //   })
              //   .filter((box) => {
              //     return box.left === 832;
              //   }).length === 4
            }
          >
            Next
          </button> */}
        </div>
      </div>
    </div>
  );
};
