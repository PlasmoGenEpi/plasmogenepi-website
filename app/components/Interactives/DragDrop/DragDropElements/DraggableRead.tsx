import {
  dragDropCompletionAtom,
  dragDropQuestionsAtom,
  globalDragAtom,
  hintsEnabledAtom,
  partSevenCompletionAtom,
  phase3Atom,
  ReadType,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useDrag } from "react-dnd";
import Read, {
  attemptedFalseMutationsAtom,
  attemptedMutationsAtom,
  hintRead,
} from "./Read";
// import {
//   charSize,
//   paddingLeft,
//   rowDistance,
//   topDistanceIncludingBorder,
// } from "./Container";
import { CSSProperties, RefObject, useEffect, useRef, useState } from "react";
import { trashEndFromLeft, trashTop } from "./Trash";
import { ReadPositionType } from "./ReadsContainer";
import { scrollStartAtom } from "./CustomDragLayer";
import { sideBarIsOpenAtom } from "../../Shared/InteractiveViewer/InteractiveSideBar/InteractiveSideBar";
import { currentView3Atom } from "../../Shared/InteractiveViewer/InteractiveViewer";

const topDistanceIncludingBorder = 172;
const borderWidth = 24;
const paddingFromBorder = topDistanceIncludingBorder - borderWidth;
const paddingLeft = 32;
const paddingRight = 64;
const rowHeight = 32;
const rowDistance = 32;
const charSize = 18;
const readStartOffset = 18;
const dropContainerWidth = 1148;

export function isDraggable({
  read,
  section,
  phase,
  phaseCompletion,
}: {
  read: ReadType;
  section: number;
  phase: number;
  phaseCompletion: boolean;
}) {
  if (phaseCompletion) {
    return false;
  } else {
    if (section === 1) {
      if (phase !== 0) {
        return false;
      }
    }
    if (section === 2) {
      if (phase !== 0) {
        return false;
      }
    }
    if (section === 3) {
      return false;
    }
    return true;
  }

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

export const yOffset = topDistanceIncludingBorder - rowDistance * 3;

const handleScrollIntoViewHorizontal = function ({
  read,
  newPosition,
  scrollRef,
  charSize,
  offset,
  direction,
  marginX,
  leftMargin,
}: {
  direction: "left" | "right";
  read: ReadType;
  newPosition: null | number | "trash" | "start";
  scrollRef: RefObject<HTMLDivElement>;
  charSize: number;
  offset: number;
  marginX: number;
  leftMargin?: number;
}) {
  if (scrollRef.current && newPosition !== null) {
    const view = scrollRef.current.scrollLeft + innerWidth - (leftMargin ?? 0);
    const readSize = 15 * charSize;

    if (typeof newPosition === "number") {
      const leftStartingPoint = newPosition * charSize + offset;
      const rightEndingPoint = leftStartingPoint + readSize;

      if (direction === "left") {
        if (
          leftStartingPoint <
          scrollRef.current.scrollLeft + marginX + (leftMargin ?? 0)
        ) {
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
        } else if (
          leftStartingPoint <
          scrollRef.current.scrollLeft + marginX + (leftMargin ?? 0)
        ) {
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
        : hidden && read.readStart
        ? (typeof read?.prevPosition === "number" ? read.prevPosition : 0) *
            charSize +
          paddingLeft
        : read.readStart
        ? 30
        : (read.charStart ?? 0) * charSize + paddingLeft,
    top: dragTarget
      ? yOffset
      : read.trash !== null
      ? read.trash * (rowDistance * trashScaleFactor) + 4 + trashTop
      : read.readStart
      ? yOffset
      : topDistanceIncludingBorder + rowDistance * ((read.rowStart ?? 0) - 1),
    userSelect: "none",
    // opacity: isDragging ? "0" : "100",
    display: isDragging ? "none" : "",
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
  className,
}: {
  className?: string;
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
  const sideBarIsOpen = useAtomValue(sideBarIsOpenAtom);
  const globalDrag = useAtomValue(globalDragAtom);
  const hintsActive = useAtomValue(hintsEnabledAtom);
  // const phase = useAtomValue(phase3Atom);
  const [hintsEnabled, setHintsEnabled] = useAtom(hintsEnabledAtom);
  const setScrollStart = useSetAtom(scrollStartAtom);
  const readRef = useRef<null | HTMLDivElement>(null);
  const questions = useAtomValue(dragDropQuestionsAtom);
  const currentView = useAtomValue(currentView3Atom);

  const { section, phase } = currentView;
  const complete = completion?.[section ?? 1]?.[phase];

  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: "read",
      item: (monitor) => {
        return read;
      },
      canDrag: () => {
        if (complete || read.trash !== null) {
          return false;
        } else {
          return isDraggable({
            read,
            section: section ?? 0,
            phase,
            phaseCompletion: complete,
          });
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
      ref={readRef}
      onClick={(e) => {
        if (complete || phase > 0 || section === 3) {
          return;
        }
        if (typeof read.trash === "number" && changeCharStart) {
          changeCharStart({
            read,
            newPosition: "start",
          });
        }
      }}
      onKeyDown={
        isDraggable({
          read,
          section: section ?? 0,
          phase,
          phaseCompletion: complete,
        }) && changeCharStart
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
                    leftMargin: sideBarIsOpen ? 384 : 0,
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
                    leftMargin: sideBarIsOpen ? 384 : 0,
                  });
                }
              }
            }
          : undefined
      }
      style={{
        ...style,
        animationDirection: "forwards",
        animationFillMode: "forwards",
        ...getItemStyles({
          read,
          dragTarget,
          isDragging,
          hidden: !!hidden,
          globalDrag: globalDrag,
        }),
      }}
      tabIndex={
        isDraggable({
          read,
          section: section ?? 0,
          phase,
          phaseCompletion: complete,
        })
          ? 0
          : undefined
      }
      aria-label={read.text}
      role="draggable read"
      className={`[&>*]:-translate-x-0.5 ${
        section === 3
          ? `transition-[top] duration-1000 ${phase === 1 ? "delay-1000" : ""}`
          : ""
      }
      ${
        section === 2 &&
        phase === 3 &&
        ((read.id === 4 && questions[3] === 0) ||
          (read.id === 19 && questions[4] === 0))
          ? "outline"
          : ""
      }
      ${
        section === 3 && phase === 2 && questions[7] === 2
          ? [14, 19, 16, 3].includes(read.id)
            ? "bg-cloneGreen transition-colors delay-500 duration-500 dark:brightness-75"
            : [2, 12, 15, 18, 5, 9, 10, 13].includes(read.id)
            ? "bg-cloneYellow transition-colors delay-500 duration-500 dark:brightness-75"
            : [11, 8, 4, 1, 6].includes(read.id)
            ? "bg-cloneBlue transition-colors delay-500 duration-500 dark:brightness-75"
            : ""
          : ""
      }
        ${
          hidden && read.readStart
            ? "hidden"
            : `${
                read.readStart &&
                !globalDrag &&
                (read.prevPosition === null || read.prevPosition === "trash")
                  ? "fadeIn500"
                  : ""
              }`
        }
        ${
          (section === 1 && phase === 0) || (section === 2 && phase === 0)
            ? isDraggable({
                read,
                section: section ?? 0,
                phase,
                phaseCompletion: complete,
              })
              ? `${
                  !globalDrag
                    ? "hover:outline-4 focus-visible:outline-8"
                    : `pointer-events-none`
                } 
                  
                ${
                  !read.readStart &&
                  hintsEnabled &&
                  hintRead({ read, currentView })
                    ? "z-40 outline-[3px] outline-orange-500 hover:z-50"
                    : "z-30 outline-black hover:z-50 dark:outline-current "
                } 
                  
              cursor-pointer outline outline-2 -outline-offset-2  transition-[top] duration-500 hover:z-50
              ${dragTarget ? "outline-4" : ""}
              
              `
              : `pointer-events-none`
            : ""
        }
        `}
      // ${
      //   (section === 1 && phase === 0) || (section === 2 && phase === 0)
      //     ? isDraggable({
      //         read,
      //         section: section ?? 0,
      //         phase,
      //         phaseCompletion: complete,
      //       })
      //       ? `${
      //           !globalDrag ? "hover:outline-4 " : ""
      //         } outline outline-2 hover:z-50 outline-black -outline-offset-2 dark:outline-gray-600 cursor-pointer transition-[top] duration-500
      //       ${dragTarget ? "outline-4" : ""}
      //       ${
      //         !read.readStart &&
      //         hintsEnabled &&
      //         hintRead({ read, currentView })
      //           ? "z-40 outline-orange-500 dark:outline-orange-500 hover:z-50 hover:outline-4/ outline-3 outline hover:outline-orange-500 focus-visible:outline-orange-500"
      //           : ""
      //       }
      //       `
      //       : `pointer-events-none`
      //     : ""
      // }
      // className="hover:outline outline-2 outline-black cursor-pointer"
      // className={
      //   className +
      //   " " +
      //   (hidden
      //     ? "hidden"
      //     : phase >= 9 && phase <= 10
      //     ? `outline/ -outline-offset-2 outline-none transition-[top] duration-[2000ms]
      //       has-[:focus-visible]:outline-4 outline-2`
      //     : read.rowChange
      //     ? `${
      //         phase === 10.5
      //           ? "transition-[top] duration-[2000ms]"
      //           : "transition-[top] duration-500"
      //       }`
      //     : read.readStart &&
      //       !globalDrag &&
      //       (read.prevPosition === null || read.prevPosition === "trash")
      //     ? "fadeIn500 "
      //     : read.readStart && globalDrag
      //     ? "invisible"
      //     : "") +
      //   ((isDraggable(read, phase, completion[phase]) && read.trash === null
      //     ? ` ${
      //         globalDrag ? "pointer-events-none" : "cursor-pointer"
      //       } outline/  focus:z-50 ${
      //         !read.readStart && hintsEnabled && hintRead({ read, phase })
      //           ? `z-40 outline-orange-500 hover:z-50 hover:outline-4/ outline-2 outline hover:outline-orange-500 focus-visible:outline-orange-500`
      //           : `hover:z-50 hover:outline-2/ hover:outline/ outline-transparent focus:outline-current focus-visible:outline-current  outline-2 outline hover:outline-current dark:hover:outline-gray-400/50 duration-150`
      //       }`
      //     : (phase === 4 && completion[3]) ||
      //       (completion[7] && phase < 9) ||
      //       (completion[6] &&
      //         phase >= 6 &&
      //         phase < 8 &&
      //         !read.trash &&
      //         (phase === 7 || phase === 7.5)) ||
      //       (read.trash !== null && phase === 7.5)
      //     ? completion[6] && phase >= 6 && phase < 8 && !completion[7]
      //       ? " opacity-50 "
      //       : " bg-interactiveBlue/20/ outline/ outline-2 "
      //     : ` outline/ outline-2 hover:outline focus:outline cursor-pointer ${
      // phase === 11 && questions[7] === 2
      //   ? [14, 19, 16, 3].includes(read.id)
      //     ? "bg-cloneGreen"
      //     : [2, 12, 15, 18, 5, 9, 10, 13].includes(read.id)
      //     ? "bg-cloneYellow"
      //     : [11, 8, 4, 1, 6].includes(read.id)
      //     ? "bg-cloneBlue"
      //     : ""
      //   : ""
      //       } ${phase >= 9 ? "outline-none" : ""} ${
      // phase === 11 ? "transition-colors delay-500 duration-500" : ""
      //       }`) +
      //     `  z-20 -outline-offset-2 focus-visible:outline-[6px]`)
      // }
      ref={drag}
    >
      <Read text={read.text} id={read.id} />
    </div>
  );
}
