import {
  dragDropCompletionAtom,
  dragDropQuestionsAtom,
  dragLocationAtom,
  globalDragAtom,
  hintsEnabledAtom,
  phase3Atom,
  reads2Atom,
  readsAtom,
  ReadType,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import DraggableRead from "./DraggableRead";
import {
  MutableRefObject,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import {
  // charSize,
  clearRefTimeout,
  // dropContainerWidth,
  // paddingFromBorder,
  // paddingLeft,
  // paddingRight,
  // readStartOffset,
  // rowDistance,
  // topDistanceIncludingBorder,
} from "./Container";
import { useDrop } from "react-dnd";
import { placeHighest, readsValid } from "../helpers";
import { atomWithStorage, RESET } from "jotai/utils";
import {
  useMediaQuery,
  usePrevious,
  useWindowSize,
} from "@/app/components/hooks";
import Trash from "./Trash";
import ChimaeraRead from "./ChimaeraRead";
import ChimaeraLength from "./ChimaeraLength";
import { isOverReadsContainerAtom } from "./ReferenceGenome";
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

const readRows: { [key: number]: number } = {
  1: 6,
  2: 1,
  3: 7,
  4: 11,
  5: 1,
  6: 7,
  8: 10,
  9: 2,
  10: 3,
  11: 9,
  12: 2,
  13: 4,
  14: 8,
  15: 3,
  16: 6,
  18: 4,
  19: 9,
};

export type ReadPositionType = "trash" | "start" | number;

export const chimaeraReadAtom = atomWithStorage<ReadType>("chimaeraRead", {
  id: 21,
  readStart: true,
  trash: null,
  charStart: null,
  rowStart: null,
  prevPosition: null,
  text: "TCTGTAATACAAAAT",
});

export default function ReadsContainer({
  scrollRef,
  scrollIntervalTimeoutRef,
}: {
  scrollRef: RefObject<HTMLDivElement>;
  scrollIntervalTimeoutRef: MutableRefObject<NodeJS.Timeout | null>;
}) {
  const [reads, setReads] = useAtom<ReadType[]>(readsAtom);
  const [reads2, setReads2] = useAtom<ReadType[]>(reads2Atom);
  const [globalDrag, setGlobalDrag] = useAtom(globalDragAtom);
  // const screenSize = useMediaQuery();
  const windowSize = useWindowSize();
  const screenSize = windowSize < 768 ? "sm" : windowSize < 1152 ? "md" : "lg";
  // const phase = useAtomValue(phase3Atom);
  const currentView = useAtomValue(currentView3Atom);
  const { phase, section } = currentView;
  const [chimaeraRead, setChimaeraRead] = useAtom(chimaeraReadAtom);
  const prevPhase = usePrevious(phase, 0).current;
  const completion = useAtomValue(dragDropCompletionAtom);
  const [isOverReadsContainer, setIsOverReadsContainer] = useAtom(
    isOverReadsContainerAtom,
  );
  const dragDropQuestions = useAtomValue(dragDropQuestionsAtom);
  const sideBarIsOpen = useAtomValue(sideBarIsOpenAtom);
  const [hintsEnabled, setHintsEnabled] = useAtom(hintsEnabledAtom);
  // const dragLocation = useAtomValue(dragLocationAtom);

  const currentReads = section === 1 ? reads : reads2;
  const currentSetter = phase < 5 ? setReads : setReads2;

  const changeCharStart = useCallback(
    ({
      read,
      newPosition,
    }: {
      read: ReadType;
      newPosition: "start" | "trash" | number;
    }) => {
      let readsCopy = [...reads];
      let copyRead = { ...readsCopy[read.id - 1] };
      if (typeof newPosition === "number") {
        copyRead.rowStart = 16;
        if (copyRead.trash !== null) {
          copyRead.prevPosition = "trash";
        } else if (copyRead.charStart !== null) {
          copyRead.prevPosition = copyRead.charStart;
        } else if (copyRead.readStart) {
          copyRead.prevPosition = "start";
        } else {
          console.log("SHOULDNT GET HERE");
          throw {
            error: "prev position",
          };
        }
        copyRead.charStart = newPosition;
        copyRead.readStart = false;
        copyRead.trash = null;
      } else if (newPosition === "trash") {
        if (copyRead.trash !== null) {
          copyRead.prevPosition = "trash";
        } else if (copyRead.charStart !== null) {
          copyRead.prevPosition = copyRead.charStart;
        } else if (copyRead.readStart) {
          copyRead.prevPosition = "start";
        }
        copyRead.charStart = null;
        copyRead.readStart = false;
        copyRead.trash = 11;
      } else if (newPosition === "start") {
        copyRead.prevPosition = "trash";
        copyRead.readStart = true;
        copyRead.trash = null;
        copyRead.charStart = null;
      }
      copyRead.dragTarget = true;
      let lastVisible = Math.min.apply(
        null,
        readsCopy
          .filter((read, idx) => {
            return read.readStart === true && !reads?.[idx - 1]?.readStart;
          })
          .map((visibleRead) => {
            return visibleRead.id;
          }),
      );
      readsCopy[read.id - 1] = copyRead;
      let newReadPlacements = placeHighest({
        reads: readsCopy,
        target: copyRead.id,
        lastVisible,
      });
      setReads(newReadPlacements);
    },
    [reads, setReads],
  );

  const changeCharStart2 = useCallback(
    ({
      read,
      newPosition,
    }: {
      read: ReadType;
      newPosition: "start" | "trash" | number;
    }) => {
      let readsCopy = [...reads2];
      let copyRead = { ...readsCopy[read.id - 1] };
      if (typeof newPosition === "number") {
        if (copyRead.trash !== null) {
          copyRead.prevPosition = "trash";
        } else if (copyRead.charStart !== null) {
          copyRead.prevPosition = copyRead.charStart;
        } else if (copyRead.readStart) {
          copyRead.prevPosition = "start";
        } else {
          console.log("SHOULDNT GET HERE");
          throw {
            error: "prev position",
          };
        }
        copyRead.charStart = newPosition;
        copyRead.readStart = false;
        copyRead.trash = null;
        copyRead.rowStart = 16;
      } else if (newPosition === "trash") {
        if (copyRead.trash !== null) {
          copyRead.prevPosition = "trash";
        } else if (copyRead.charStart !== null) {
          copyRead.prevPosition = copyRead.charStart;
        } else if (copyRead.readStart) {
          copyRead.prevPosition = "start";
        }
        copyRead.charStart = null;
        copyRead.readStart = false;
        copyRead.trash = 11;
        read.rowStart = null;
      } else if (newPosition === "start") {
        copyRead.prevPosition = "trash";
        copyRead.readStart = true;
        copyRead.trash = null;
        copyRead.charStart = null;
        read.rowStart = null;
      }
      let lastVisible = Math.min.apply(
        null,
        readsCopy
          .filter((read, idx) => {
            return read.readStart === true && !reads?.[idx - 1]?.readStart;
          })
          .map((visibleRead) => {
            return visibleRead.id;
          }),
      );
      readsCopy[read.id - 1] = copyRead;
      let newReadPlacements = placeHighest({
        reads: readsCopy,
        target: copyRead.id,
        lastVisible,
      });
      setReads2(newReadPlacements);
    },
    [reads2, setReads2],
  );

  const changeChimaeraStart = useCallback(
    ({
      read,
      newPosition,
    }: {
      read: ReadType;
      newPosition: ReadPositionType;
    }) => {
      setChimaeraRead({
        ...chimaeraRead,
        rowStart: 1,
        charStart: typeof newPosition === "number" ? newPosition : 0,
        readStart: false,
        trash: null,
      });
    },
    [],
  );

  const [, drop] = useDrop(
    () => ({
      accept: "read",
      drop(item: ReadType, monitor) {
        setGlobalDrag(false);
        clearRefTimeout(scrollIntervalTimeoutRef);
        let coords = monitor.getSourceClientOffset();
        let x = coords?.x ? (sideBarIsOpen ? coords.x - 384 : coords.x) : null;
        if (x && scrollRef?.current) {
          let newMx =
            ((scrollRef?.current?.parentElement?.clientWidth ?? innerWidth) -
              1152) /
            2;
          let z: number;
          x =
            scrollRef?.current?.scrollLeft + x - Math.max(0, Math.floor(newMx));
          if (screenSize === "sm") {
            x = x + 2;
          }
          z = Math.round((x - paddingLeft) / charSize);
          z = Math.max(0, Math.min(z, 36));
          if (section === 1) {
            changeCharStart({ read: item, newPosition: z });
          } else if (section === 2) {
            if (false) {
            } else {
              changeCharStart2({ read: item, newPosition: z });
            }
          }
          // if (phase === 8) {
          //   changeChimaeraStart({
          //     read: item,
          //     newPosition: z,
          //   });
          // } else if (phase < 5) {
          //   changeCharStart({ read: item, newPosition: z });
          // } else {
          //   changeCharStart2({ read: item, newPosition: z });
          // }
        }

        return undefined;
      },
    }),
    [
      changeCharStart,
      screenSize,
      changeCharStart2,
      currentView,
      reads,
      reads2,
      sideBarIsOpen,
      // dragLocation,
    ],
  );

  let minHeight = useMemo(() => {
    let bottomPadding = 0;
    let currentReads = section === 1 ? reads : reads2;
    let x = Math.max(
      8 * rowDistance,
      (Math.max.apply(
        null,
        currentReads.map((read, idx) => {
          return read.rowStart ?? 0;
        }),
      ) +
        3) *
        rowDistance +
        bottomPadding,
    );
    return x;
  }, [currentReads, currentView]);

  // let minHeight = useMemo(() => {
  //   let bottomPadding = 0;
  //   let x = Math.max(
  //     8 * rowDistance,
  //     (phase >= 10.5
  //       ? 12
  //       : Math.max.apply(
  //           null,
  //           currentReads.map((read, idx) => {
  //             return read.rowStart ?? 0;
  //           })
  //         ) + 2) *
  //       rowDistance +
  //       bottomPadding
  //   );
  //   console.log("MIN HEIGHT", x);
  //   return x;
  // }, [currentReads, phase]);

  let readsComplete =
    (section === 2 && phase === 3) || (section && section > 2);

  const orderedReads = useMemo(() => {
    if (readsComplete) {
      return reads2
        .slice()
        .filter((read) => {
          return read.charStart !== null;
        })
        .sort((a, b) => {
          if (
            a.charStart !== null &&
            b.charStart !== null &&
            a.rowStart !== null &&
            b.rowStart !== null
          ) {
            if (a.charStart === b.charStart) {
              return a.rowStart < b.rowStart ? -1 : 1;
            } else {
              return a.charStart < b.charStart ? -1 : 1;
            }
          } else {
            return 1;
          }
        });
    } else {
      return reads2;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readsComplete]);

  return (
    <div
    // style={{
    //   backgroundAttachment: "scroll",
    //   backgroundPosition: "0px -8px",
    //   backgroundSize: "18px 32px",
    //   backgroundImage: `linear-gradient(to right, #00000040, transparent 1px),
    //   linear-gradient(to bottom, #00000040, transparent 1px)`,
    //   // backgroundImage: ""
    //   // backgroundImage: `linear-gradient(180deg, transparent 100px, #afafaf40 100px, #afafaf40)`,
    // }}
    >
      <div
        style={{
          minHeight:
            section === 3 && phase > 0 && dragDropQuestions[6] === 2
              ? 420
              : minHeight,
        }}
        className={
          phase === 8 || prevPhase === 8 || completion[phase] || phase === 1
            ? "transition-none"
            : "transition-[min-height] duration-1000"
        }
        ref={drop}
        onPointerLeave={() => {
          if (globalDrag) {
            setIsOverReadsContainer(false);
          }
        }}
        onPointerMove={() => {
          if (globalDrag) {
            setIsOverReadsContainer(true);
          }
        }}
        // className="h-full w-full"
      >
        {section === 1
          ? reads.map((read, idx) => {
              return (
                <DraggableRead
                  scrollRef={scrollRef}
                  changeCharStart={changeCharStart}
                  key={read.id}
                  read={read}
                  hidden={
                    idx === 0
                      ? false
                      : read.charStart !== null
                      ? false
                      : read.trash !== null
                      ? false
                      : !(
                          reads.slice(0, idx).filter((read) => {
                            return read.readStart;
                          }).length === 0
                        )
                  }
                />
              );
            })
          : section === 2 && phase < 3
          ? reads2.map((read, idx) => {
              return (
                <DraggableRead
                  scrollRef={scrollRef}
                  changeCharStart={changeCharStart2}
                  key={read.id}
                  read={{
                    ...read,
                    charStart: read.charStart,
                    rowStart:
                      phase === 11 ? readRows?.[read.id] : read.rowStart,
                    rowChange: phase >= 8 ? true : read.rowChange,
                  }}
                  hidden={
                    !(
                      reads2.slice(0, idx).filter((read) => {
                        return read.readStart;
                      }).length === 0
                    )
                  }
                  // hidden={
                  //   phase === 8
                  //     ? true
                  //     : phase === 9 && read.text[0] === "A"
                  //     ? true
                  //     : phase > 8 && read.trash !== null
                  //     ? true
                  //     : idx === 0
                  //     ? false
                  //     : phase === 6 && idx >= 10
                  //     ? true
                  //     : read.charStart !== null
                  //     ? false
                  //     : read.trash !== null
                  //     ? false
                  //     : !(
                  //         reads2.slice(0, idx).filter((read) => {
                  //           return read.readStart;
                  //         }).length === 0
                  //       )
                  // }
                />
              );
            })
          : orderedReads.map((read, idx) => {
              return (
                <DraggableRead
                  scrollRef={scrollRef}
                  changeCharStart={changeCharStart2}
                  key={read.id}
                  read={{
                    ...read,
                    charStart: read.charStart,
                    rowStart:
                      section === 3 && phase > 0 && dragDropQuestions[6] === 2
                        ? readRows?.[read.id]
                        : read.rowStart,
                    rowChange: section === 3 ? true : read.rowChange,
                  }}
                  hidden={read.trash !== null}
                />
              );
            })}
        {/* {phase >= 0 && phase < 5
          ? reads.map((read, idx) => {
              return (
                <DraggableRead
                  scrollRef={scrollRef}
                  changeCharStart={changeCharStart}
                  key={read.id}
                  read={read}
                  hidden={
                    idx === 0
                      ? false
                      : read.charStart !== null
                      ? false
                      : read.trash !== null
                      ? false
                      : !(
                          reads.slice(0, idx).filter((read) => {
                            return read.readStart;
                          }).length === 0
                        )
                  }
                />
              );
            })
          : null}
        {phase >= 6 && phase < 8
          ? reads2.map((read, idx) => {
              return (
                <DraggableRead
                  scrollRef={scrollRef}
                  changeCharStart={changeCharStart2}
                  key={read.id}
                  read={{
                    ...read,
                    charStart: read.charStart,
                    rowStart:
                      phase === 11 ? readRows?.[read.id] : read.rowStart,
                    rowChange: phase >= 8 ? true : read.rowChange,
                  }}
                  hidden={
                    phase === 8
                      ? true
                      : phase === 9 && read.text[0] === "A"
                      ? true
                      : phase > 8 && read.trash !== null
                      ? true
                      : idx === 0
                      ? false
                      : phase === 6 && idx >= 10
                      ? true
                      : read.charStart !== null
                      ? false
                      : read.trash !== null
                      ? false
                      : !(
                          reads2.slice(0, idx).filter((read) => {
                            return read.readStart;
                          }).length === 0
                        )
                  }
                />
              );
            })
          : null}
        {phase === 8 && (
          <div>
            <ChimaeraRead
              changeCharStart={changeChimaeraStart}
              read={chimaeraRead}
            />
            <ChimaeraLength />
          </div>
        )}
        {phase >= 9
          ? orderedReads.map((read, idx) => {
              return (
                <DraggableRead
                  scrollRef={scrollRef}
                  changeCharStart={changeCharStart2}
                  key={read.id}
                  read={{
                    ...read,
                    charStart: read.charStart,
                    rowStart:
                      phase >= 10.5 && dragDropQuestions[6] === 2
                        ? readRows?.[read.id]
                        : read.rowStart,
                    rowChange: phase >= 8 ? true : read.rowChange,
                  }}
                  hidden={read.trash !== null}
                />
              );
            })
          : null} */}
        {section === 2 &&
          !hintsEnabled &&
          !readsValid(reads2, 2) &&
          reads2.filter((read) => {
            return read.readStart;
          }).length === 0 && (
            <span
              style={{
                animationDelay: "5000ms",
              }}
              className="fadeIn500 absolute left-8 top-12 max-w-xs select-none"
            >
              If you are having trouble placing all the reads correctly, try
              enabling hints{" "}
              <button
                onClick={() => {
                  setHintsEnabled(true);
                }}
                className="text-interactiveBlue font-bold italic underline"
              >
                here!
              </button>
            </span>
          )}
      </div>
      <Trash
        scrollIntervalTimeoutRef={scrollIntervalTimeoutRef}
        reads={reads2}
        changeCharStart={changeCharStart2}
      />
    </div>
  );
}
