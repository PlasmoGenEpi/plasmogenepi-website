import {
  dragDropCompletionAtom,
  dragDropQuestionsAtom,
  globalDragAtom,
  hintsEnabledAtom,
  partSevenCompletionAtom,
  phaseAtom,
  ReadType,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useDrag } from "react-dnd";
import Read, {
  attemptedFalseMutationsAtom,
  attemptedMutationsAtom,
  hintRead,
} from "./Read";
import {
  charSize,
  paddingLeft,
  rowDistance,
  topDistanceIncludingBorder,
} from "./Container";
import { CSSProperties, RefObject, useEffect, useRef, useState } from "react";
import { trashEndFromLeft, trashTop } from "./Trash";
import { ReadPositionType } from "./ReadsContainer";
import { scrollStartAtom } from "./CustomDragLayer";

export function isDraggable(
  read: ReadType,
  phase: number,
  phaseCompletion: boolean,
) {
  if (phase === 1 || phase === 2 || phaseCompletion) {
    return false;
  }
  if (phase === 4) {
    return false;
  }
  if (phase === 7) {
    return read.id > 10;
  }
  if (phase === 7.5) {
    return false;
  }
  if (phase > 8) {
    return false;
  }

  return true;
}

export const trashScaleFactor = 0.75;

export const yOffset = 12;

const handleScrollIntoViewHorizontal = function ({
  read,
  newPosition,
  scrollRef,
  charSize,
  offset,
  direction,
  marginX,
}: {
  direction: "left" | "right";
  read: ReadType;
  newPosition: null | number | "trash" | "start";
  scrollRef: RefObject<HTMLDivElement>;
  charSize: number;
  offset: number;
  marginX: number;
}) {
  if (scrollRef.current && newPosition !== null) {
    const view = scrollRef.current.scrollLeft + innerWidth;
    const readSize = 15 * charSize;

    if (typeof newPosition === "number") {
      const leftStartingPoint = newPosition * charSize + offset;
      const rightEndingPoint = leftStartingPoint + readSize;

      if (direction === "left") {
        if (leftStartingPoint < scrollRef.current.scrollLeft + marginX) {
          scrollRef.current.scrollBy({
            left: leftStartingPoint - marginX - scrollRef.current.scrollLeft,
          });
        } else if (rightEndingPoint > view - marginX) {
          scrollRef.current.scrollBy({
            left: leftStartingPoint - (view - marginX - readSize),
          });
        }
      } else if (direction === "right") {
        if (rightEndingPoint > view - marginX) {
          scrollRef.current.scrollBy({
            left: leftStartingPoint - (view - marginX - readSize),
          });
        } else if (leftStartingPoint < scrollRef.current.scrollLeft + marginX) {
          scrollRef.current.scrollBy({
            left: leftStartingPoint - (view - marginX - readSize),
          });
        }
      }
    } else if (newPosition === "start") {
      scrollRef.current.scrollLeft = 0;
    } else if (newPosition === "trash") {
      console.log("called");
      scrollRef.current.scrollLeft =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    }
  }
};

function getItemStyles({
  read,
  dragTarget,
  isDragging,
  hidden,
  globalDrag,
}: {
  globalDrag: boolean;
  hidden: boolean;
  read: ReadType;
  dragTarget?: number;
  isDragging?: boolean;
}): CSSProperties {
  return {
    position: "absolute",
    left:
      read.trash !== null
        ? trashEndFromLeft - 15 * charSize - 4
        : dragTarget
          ? 0
          : hidden
            ? (typeof read?.prevPosition === "number" ? read.prevPosition : 0) *
                charSize +
              paddingLeft
            : read.readStart
              ? 32
              : (read.charStart ?? 0) * charSize + paddingLeft - 2,
    top: dragTarget
      ? yOffset
      : read.trash !== null
        ? read.trash * (rowDistance * trashScaleFactor) + 4 + trashTop
        : read.readStart
          ? yOffset
          : topDistanceIncludingBorder +
            rowDistance * ((read.rowStart ?? 0) - 1),
    userSelect: "none",
    opacity: isDragging ? "0" : "100",
    transformOrigin: "top right",
    scale:
      !dragTarget && read.trash !== null
        ? `${trashScaleFactor * 100}%`
        : "100%",
    padding: "0px 2px 0px 2px",
  };
}

export default function DraggableRead({
  hidden,
  dragTarget,
  read,
  style,
  changeCharStart,
  scrollRef,
}: {
  scrollRef?: RefObject<HTMLDivElement>;
  changeCharStart?: ({
    read,
    newPosition,
  }: {
    read: ReadType;
    newPosition: ReadPositionType;
  }) => void;
  style?: CSSProperties;
  hidden?: boolean;
  dragTarget?: ReadType["id"];
  read: ReadType;
}) {
  const completion = useAtomValue(dragDropCompletionAtom);
  const globalDrag = useAtomValue(globalDragAtom);
  const hintsActive = useAtomValue(hintsEnabledAtom);
  const phase = useAtomValue(phaseAtom);
  const [hintsEnabled, setHintsEnabled] = useAtom(hintsEnabledAtom);
  const setScrollStart = useSetAtom(scrollStartAtom);
  const readRef = useRef<null | HTMLDivElement>(null);
  const questions = useAtomValue(dragDropQuestionsAtom);
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: "read",
      item: (monitor) => {
        return read;
      },
      canDrag: () => {
        if (completion[phase] || read.trash !== null) {
          return false;
        } else {
          return isDraggable(read, phase, completion[phase]);
        }
      },
      collect: (monitor) => {
        return {
          isDragging: !!monitor.isDragging(),
        };
      },
    }),
    [phase, read],
  );

  useEffect(() => {
    if (globalDrag && isDragging && changeCharStart) {
      changeCharStart({
        read,
        newPosition: read.readStart
          ? "start"
          : typeof read.charStart === "number"
            ? read.charStart
            : "trash",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalDrag]);

  return (
    <div
      onAnimationIteration={(e) => console.log("onAnimationIteration")}
      ref={readRef}
      onKeyDown={
        isDraggable(read, phase, completion[phase]) && changeCharStart
          ? (e) => {
              let newPosition = null;
              if (e.key === "ArrowLeft") {
                if (read.readStart) {
                  e.preventDefault();
                  if (phase < 6 || phase === 8) {
                    changeCharStart({
                      read,
                      newPosition: 36,
                    });
                    newPosition = 36;
                  } else {
                    changeCharStart({
                      read,
                      newPosition: "trash",
                    });
                    newPosition = "trash" as const;
                  }
                } else if (read.charStart && read.charStart > 0) {
                  e.preventDefault();
                  changeCharStart({
                    read,
                    newPosition: read.charStart - 1,
                  });
                  newPosition = read.charStart - 1;
                } else if (read.trash !== null) {
                  e.preventDefault();
                  changeCharStart({
                    read,
                    newPosition: 36,
                  });
                  newPosition = 36;
                }

                if (scrollRef) {
                  handleScrollIntoViewHorizontal({
                    read,
                    newPosition,
                    scrollRef,
                    charSize,
                    offset: paddingLeft,
                    direction: "left",
                    marginX: charSize * 2,
                  });
                }
              } else if (e.key === "ArrowRight") {
                if (read.readStart) {
                  e.preventDefault();
                  changeCharStart({
                    read,
                    newPosition: 0,
                  });
                  newPosition = 0;
                } else if (read.charStart !== null && read.charStart < 36) {
                  e.preventDefault();
                  changeCharStart({
                    read,
                    newPosition: read.charStart + 1,
                  });
                  newPosition = read.charStart + 1;
                } else if (read.charStart === 36 && phase >= 6) {
                  e.preventDefault();
                  changeCharStart({
                    read,
                    newPosition: "trash",
                  });
                  newPosition = "trash" as const;
                }
                if (scrollRef) {
                  handleScrollIntoViewHorizontal({
                    read,
                    newPosition,
                    scrollRef,
                    charSize,
                    offset: paddingLeft,
                    direction: "right",
                    marginX: charSize * 2,
                  });
                }
              }
            }
          : undefined
      }
      style={{
        ...style,
        ...getItemStyles({
          read,
          dragTarget,
          isDragging,
          hidden: hidden || !!(globalDrag && isDragging && changeCharStart),
          globalDrag: globalDrag,
        }),
      }}
      tabIndex={isDraggable(read, phase, completion[phase]) ? 0 : undefined}
      aria-label={read.text}
      role="draggable read"
      className={
        (hidden
          ? "hidden"
          : phase >= 9 && phase <= 10
            ? `outline -outline-offset-2 outline-black transition-[top] duration-[2000ms]
            has-[:focus-visible]:outline-4`
            : read.rowChange
              ? `${phase === 10.5 ? "transition-[top] duration-[2000ms]" : "transition-[top] duration-500"}`
              : read.readStart &&
                  !globalDrag &&
                  (read.prevPosition === null || read.prevPosition === "trash")
                ? "fadeIn500 "
                : read.readStart && globalDrag
                  ? "invisible"
                  : "") +
        ((isDraggable(read, phase, completion[phase]) && read.trash === null
          ? ` ${globalDrag ? "pointer-events-none" : "cursor-pointer"} outline  focus:z-50 ${!read.readStart && hintsEnabled && hintRead({ read, phase }) ? `z-40 outline-orange-500 hover:z-50 hover:outline-4 hover:outline-orange-500 focus-visible:outline-orange-500` : `hover:z-50 hover:outline-4 `}`
          : (phase === 4 && completion[3]) ||
              (completion[7] && phase < 9) ||
              (completion[6] &&
                phase >= 6 &&
                phase < 8 &&
                !read.trash &&
                (phase === 7 || phase === 7.5)) ||
              (read.trash !== null && phase === 7.5)
            ? " bg-primaryBlue/20  outline outline-2"
            : ` outline outline-[3px] ${phase === 11 && questions[7] === 2 ? ([14, 19, 16, 3].includes(read.id) ? "bg-cloneGreen" : [1, 6, 2, 12, 15, 18].includes(read.id) ? "bg-cloneYellow" : [11, 8, 4, 5, 9, 10, 13].includes(read.id) ? "bg-cloneBlue" : "") : ""} ${phase === 11 ? "transition-colors delay-500 duration-500" : ""}`) +
          `  z-20 -outline-offset-2 focus-visible:outline-[6px]`)
      }
      ref={drag}
    >
      {/* <span className="absolute -left-4 text-xs">{read.id}</span> */}
      <Read text={read.text} id={read.id} />
    </div>
  );
}
