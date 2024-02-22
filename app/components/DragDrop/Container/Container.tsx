import { useCallback, useEffect } from "react";
import GenomeContainer from "../GenomeContainer/GenomeContainer";
import DraggableRead from "./CustomDragLayer/DraggableRead";
import { placeHighest } from "../../../../helpers";
import { useAtom, useAtomValue } from "jotai";
import {
  dragDropQuestionsAtom,
  phaseAtom,
  reads2Atom,
  readsAtom,
} from "@/store";
import Labels from "../Labels/Labels";
import ReadsContainer from "./ReadsContainer";
import { RESET } from "jotai/utils";

export default function Container({
  size,
  readRowHeight,
  large,
}: {
  large: boolean;
  size: number;
  readRowHeight: number;
}) {
  const [reads, setReads] = useAtom(readsAtom);
  const [reads2, setReads2] = useAtom(reads2Atom);
  const [phase, setPhase] = useAtom(phaseAtom);
  const [dragDropQuestions, setDragDropQuestions] = useAtom(
    dragDropQuestionsAtom,
  );
  const currentReads = phase <= 4 ? reads : reads2;
  const currentSetter = phase <= 4 ? setReads : setReads2;

  const changeCharStart = useCallback(
    (id: number, newCharStart: number) => {
      let readsCopy = [...currentReads];
      let copyRead = { ...readsCopy[id - 1] };
      copyRead.readStart = false;
      copyRead.trash = null;
      copyRead.charStart = newCharStart;
      // copyRead.rowStart = newRowStart ?? 1;
      readsCopy[id - 1] = copyRead;
      copyRead.rowStart = 16;
      readsCopy[id - 1] = copyRead;
      let x = placeHighest(readsCopy);
      // console.log("x", x);
      currentSetter(x);
    },
    [currentReads, currentSetter],
  );

  const setReadStart = useCallback(
    (id: number) => {
      let readsCopy = [...currentReads];
      let copyRead = { ...readsCopy[id - 1] };
      copyRead.readStart = true;
      copyRead.charStart = null;
      copyRead.rowStart = null;
      copyRead.trash = null;
      readsCopy[id - 1] = copyRead;
      let x = placeHighest(readsCopy);
      currentSetter(x);
    },
    [currentReads, currentSetter],
  );

  const setReadTrash = useCallback(
    (id: number) => {
      let count = currentReads.filter((read) => {
        if (read.id === id && read.trash !== null) {
          return false;
        }
        return read.trash !== null;
      }).length;
      let readsCopy = [...currentReads];
      let copyRead = { ...readsCopy[id - 1] };
      copyRead.readStart = false;
      copyRead.charStart = null;
      copyRead.rowStart = null;
      copyRead.trash = count;
      readsCopy[id - 1] = copyRead;
      let x = placeHighest(readsCopy);
      console.log(x);
      currentSetter(x);
    },
    [currentReads, currentSetter],
  );

  // useEffect(() => {
  //   setDragDropQuestions(RESET);
  // }, []);

  // console.log(currentReads);

  return (
    <div className={large ? "pt-4 " : ""}>
      <span className="absolute text-2xl">{phase}</span>
      <div className={`relative flex ${large ? "gap-4" : "flex-col gap-4"}`}>
        <ReadsContainer setReadStart={setReadStart} />
        <div>
          {/* {reads.map((read, idx) => {
            return (
              <DraggableRead
                large={large}
                {...read}
                key={read.id}
                rowHeight={32}
                size={size}
                xOffset={8}
                yOffset={0}
              />
              );
            })} */}
          {(phase === 3 || phase === 4) &&
            currentReads.map((read, idx) => {
              return (
                <DraggableRead
                  large={large}
                  rowHeight={readRowHeight + 2}
                  xOffset={8}
                  yOffset={30 - readRowHeight}
                  key={read.id}
                  {...read}
                  size={size}
                />
              );
            })}
          {phase >= 11 && dragDropQuestions[2][2] === 1
            ? [
                {
                  ...reads2[0],
                  rowStart: 6,
                  charStart: 32,
                },
                {
                  ...reads2[1],
                  rowStart: 1,
                  charStart: 3,
                },
                {
                  ...reads2[2],
                  rowStart: 7,
                  charStart: 3,
                },
                {
                  ...reads2[3],
                  rowStart: 12,
                  charStart: 3,
                },
                {
                  ...reads2[4],
                  rowStart: 1,
                  charStart: 32,
                },
                {
                  ...reads2[5],
                  rowStart: 7,
                  charStart: 32,
                },
                {
                  ...reads2[7],
                  rowStart: 10,
                  charStart: 3,
                },
                {
                  ...reads2[8],
                  rowStart: 2,
                  charStart: 32,
                },
                {
                  ...reads2[9],
                  rowStart: 3,
                  charStart: 32,
                },
              ].map((read, idx) => {
                return (
                  <DraggableRead
                    large={large}
                    rowHeight={readRowHeight + 2}
                    xOffset={8}
                    yOffset={30 - readRowHeight}
                    key={read.id}
                    {...read}
                    size={size}
                  />
                );
              })
            : phase >= 6
            ? currentReads.slice(0, 10).map((read, idx) => {
                return (
                  <DraggableRead
                    large={large}
                    rowHeight={readRowHeight + 2}
                    xOffset={8}
                    yOffset={30 - readRowHeight}
                    key={read.id}
                    {...read}
                    size={size}
                  />
                );
              })
            : null}
          {phase >= 11 && dragDropQuestions[2][2] === 1
            ? [
                {
                  ...reads2[10],
                  rowStart: 9,
                  charStart: 3,
                },
                {
                  ...reads2[11],
                  rowStart: 2,
                  charStart: 3,
                },
                {
                  ...reads2[12],
                  rowStart: 4,
                  charStart: 32,
                },
                {
                  ...reads2[13],
                  rowStart: 8,
                  charStart: 32,
                },
                {
                  ...reads2[14],
                  rowStart: 3,
                  charStart: 3,
                },
                {
                  ...reads2[15],
                  rowStart: 6,
                  charStart: 3,
                },
                {
                  ...reads2[17],
                  rowStart: 4,
                  charStart: 3,
                },
                {
                  ...reads2[18],
                  rowStart: 9,
                  charStart: 32,
                },
              ].map((read, idx) => {
                return (
                  <DraggableRead
                    large={large}
                    rowHeight={readRowHeight + 2}
                    xOffset={8}
                    yOffset={30 - readRowHeight}
                    key={read.id}
                    {...read}
                    size={size}
                  />
                );
              })
            : phase >= 7
            ? reads2.slice(10, 20).map((read, idx) => {
                return (
                  <DraggableRead
                    large={large}
                    rowHeight={readRowHeight + 2}
                    xOffset={8}
                    yOffset={30 - readRowHeight}
                    key={read.id}
                    {...read}
                    size={size}
                  />
                );
              })
            : null}
          <Labels
            size={size}
            readRowHeight={readRowHeight + 2}
            xOffset={large ? 1144 - 56 * size : 8}
            yOffset={large ? -16 : 160}
          />
          <GenomeContainer
            setReadTrash={setReadTrash}
            large={large}
            changeCharStart={changeCharStart}
            readRowHeight={readRowHeight + 2}
            size={size}
          />
        </div>
      </div>
      {/* <DraggableRead id={1} text={"AAAAAAAAAAAAAAA"} size={size} /> */}
    </div>
  );
}
