import { useDragLayer, XYCoord } from "react-dnd";
import DraggableRead, { yOffset } from "./DraggableRead";
import {
  dragLocationAtom,
  globalDragAtom,
  hintsEnabledAtom,
  phase3Atom,
  ReadType,
} from "@/data/Interactives/interactiveStore";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
// import { useWindowSize } from "@/app/components/hooks";
import { MutableRefObject, Ref, RefObject, useEffect, useRef } from "react";
import {
  // charSize,
  clearRefTimeout,
  // dropContainerWidth,
  // paddingFromBorder,
  // paddingLeft,
  // readStartOffset,
  // rowDistance,
  // topDistanceIncludingBorder,
} from "./Container";
import {
  isOverReadsContainerAtom,
  // textOfDraggedReadAtom,
} from "./ReferenceGenome";
import { hintRead } from "./Read";
import { sideBarIsOpenAtom } from "../../Shared/InteractiveViewer/InteractiveSideBar/InteractiveSideBar";
import { currentView3Atom } from "../../Shared/InteractiveViewer/InteractiveViewer";
import CDLRead from "./CDLRead";
import { useWindowSize } from "@/app/components/hooks";

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

const handleVerticalScroll = function (
  cursorLocation: number | undefined,
  drag: boolean,
  scrollIntervalTimeoutRef: MutableRefObject<null | NodeJS.Timeout>,
) {
  if (drag && cursorLocation !== undefined) {
    if (cursorLocation + rowDistance * 2 > innerHeight) {
      if (scrollIntervalTimeoutRef.current === null) {
        scrollIntervalTimeoutRef.current = setInterval(() => {
          window?.scrollBy(0, 6);
        }, 15);
      }
    } else if (cursorLocation - rowDistance * 2 < 0) {
      if (scrollIntervalTimeoutRef.current === null) {
        scrollIntervalTimeoutRef.current = setInterval(() => {
          window?.scrollBy(0, -6);
        }, 15);
      }
    } else if (scrollIntervalTimeoutRef.current !== null) {
      clearRefTimeout(scrollIntervalTimeoutRef);
    }
  } else {
    if (scrollIntervalTimeoutRef.current !== null) {
      clearRefTimeout(scrollIntervalTimeoutRef);
    }
  }
};

const handleHorizontalScroll = function (
  cursorLocation: number | undefined,
  scrollRef: MutableRefObject<HTMLDivElement | null>,
  drag: boolean,
  scrollIntervalTimeoutRef: MutableRefObject<null | NodeJS.Timeout>,
  sideBarIsOpen: number,
) {
  if (drag && cursorLocation !== undefined) {
    if (cursorLocation + (15 * charSize) / 4 > innerWidth * 0.9) {
      if (scrollIntervalTimeoutRef.current === null) {
        scrollIntervalTimeoutRef.current = setInterval(() => {
          scrollRef?.current?.scrollBy(6, 0);
        }, 15);
      }
    } else if (
      cursorLocation - (15 * charSize) / 8 <
      sideBarIsOpen + 0.1 * innerWidth
    ) {
      if (scrollIntervalTimeoutRef.current === null) {
        scrollIntervalTimeoutRef.current = setInterval(() => {
          scrollRef?.current?.scrollBy(-6, 0);
        }, 15);
      }
    } else if (scrollIntervalTimeoutRef.current !== null) {
      clearRefTimeout(scrollIntervalTimeoutRef);
    }
  } else {
    if (scrollIntervalTimeoutRef.current !== null) {
      clearRefTimeout(scrollIntervalTimeoutRef);
    }
  }
};

function getItemStyles({
  clientOffset,
  initialClientOffset,
  initialOffset,
  offset,
  trash,
  sideBarIsOpen,
}: {
  clientOffset: XYCoord;
  initialClientOffset: XYCoord;
  initialOffset: XYCoord;
  offset: XYCoord;
  trash: boolean;
  sideBarIsOpen: boolean;
}) {
  let { x, y } = offset;
  // if (trash) {
  //   x = x - (dropContainerWidth - 270) / 2;
  // }

  const transform = `translate(${
    initialOffset.x + x - (sideBarIsOpen && isIpad() ? 384 : 0)
  }px, ${initialOffset.y + y - yOffset}px)`;
  // const transform = `translate(${
  //   clientOffset.x - (initialClientOffset.x - initialOffset.x)
  // }px, ${initialOffset.y + y - yOffset}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

function getReadPosition({
  read,
  scrollRef,
  scrollStart,
  paddingLeft,
  dropContainerWidth,
  differenceFromInitialOffset,
}: {
  read: ReadType;
  scrollRef: RefObject<HTMLDivElement>;
  scrollStart: XYCoord;
  paddingLeft: number;
  dropContainerWidth: number;
  differenceFromInitialOffset: XYCoord;
}) {
  if (read.trash === null) {
    return (
      paddingLeft +
      (scrollRef?.current?.scrollLeft ?? 0) -
      scrollStart.x +
      (read.charStart ?? 0) * charSize +
      differenceFromInitialOffset.x
    );
  } else if (read.trash !== null) {
    return (
      (scrollRef?.current?.scrollLeft ?? 0) -
      scrollStart.x +
      dropContainerWidth -
      15 * charSize
    );
  } else {
    return 0;
  }
}

function isIpad() {
  // return (
  //   (navigator.userAgent === "MacIntel" && navigator.maxTouchPoints > 0) ||
  //   navigator.userAgent === "iPad"
  // );

  return /iPad/.test(navigator.userAgent);
}

export const scrollStartAtom = atom({
  x: 0,
  y: 0,
});
export const mouseLocationAtom = atom<{
  x: null | number;
  y: null | number;
}>({
  x: null,
  y: null,
});

export default function CustomDragLayer({
  scrollRef,
  scrollIntervalTimeoutRef,
  verticalScrollIntervalTimeoutRef,
}: {
  scrollRef: RefObject<HTMLDivElement>;
  scrollIntervalTimeoutRef: MutableRefObject<NodeJS.Timeout | null>;
  verticalScrollIntervalTimeoutRef: MutableRefObject<null | NodeJS.Timeout>;
}) {
  const [globalDrag, setGlobalDrag] = useAtom(globalDragAtom);
  const [scrollStart, setScrollStart] = useAtom(scrollStartAtom);
  const setMouseLocation = useSetAtom(mouseLocationAtom);
  const setDragLocation = useSetAtom(dragLocationAtom);
  const scrollChangeDuringDrag = useRef<number>(0);
  let windowSize: number = useWindowSize();
  const hintsEnabled = useAtomValue(hintsEnabledAtom);
  const phase = useAtomValue(phase3Atom);
  const setIsOverReadsContainer = useSetAtom(isOverReadsContainerAtom);
  const sideBarIsOpen = useAtomValue(sideBarIsOpenAtom);
  const currentView = useAtomValue(currentView3Atom);

  const {
    itemType,
    isDragging,
    item,
    offset,
    initialOffset,
    clientOffset,
    initialClientOffset,
  } = useDragLayer((monitor) => {
    let item = monitor.getItem();
    let itemType = monitor.getItemType();
    let isDragging = monitor.isDragging();
    let offset = monitor.getDifferenceFromInitialOffset();
    let initialOffset = monitor.getInitialSourceClientOffset();
    let initialClientOffset = monitor.getInitialClientOffset();
    let clientOffset = monitor.getClientOffset();

    // handleVerticalScroll(
    //   clientOffset?.y,
    //   isDragging,
    //   verticalScrollIntervalTimeoutRef,
    // );

    handleHorizontalScroll(
      clientOffset?.x,
      scrollRef,
      isDragging,
      scrollIntervalTimeoutRef,
      sideBarIsOpen ? 384 : 0,
    );
    if (isDragging) {
      setGlobalDrag(true);
    } else {
      setGlobalDrag(false);
    }
    if (
      item &&
      offset &&
      initialOffset &&
      initialClientOffset &&
      clientOffset
    ) {
      let readLeftPosition = getReadPosition({
        differenceFromInitialOffset: offset,
        dropContainerWidth,
        paddingLeft,
        read: item,
        scrollRef,
        scrollStart,
      });
      let yOffset = item.readStart
        ? 62
        : item.rowStart
        ? item.rowStart * rowDistance + paddingFromBorder
        : 0;
      let readTopPosition = yOffset + offset.y;

      setDragLocation({
        x: readLeftPosition,
        y: readTopPosition,
      });

      setMouseLocation({
        x: readLeftPosition + (initialClientOffset.x - initialOffset.x),
        y: readTopPosition + initialClientOffset.y - initialOffset.y,
      });
      // }
    }
    return {
      item,
      itemType,
      isDragging,
      offset,
      initialOffset,
      clientOffset,
      initialClientOffset,
    };
  });

  useEffect(() => {
    setDragLocation({ x: null, y: null });
    setMouseLocation({ x: null, y: null });
    if (globalDrag && scrollRef.current) {
      scrollChangeDuringDrag.current =
        scrollRef.current.scrollLeft - scrollStart.x;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollRef?.current?.scrollLeft, globalDrag]);

  useEffect(() => {
    setScrollStart({
      ...scrollStart,
      x: scrollRef?.current?.scrollLeft ?? 0,
    });
    if (!globalDrag) {
      setIsOverReadsContainer(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalDrag]);

  if (!isDragging || !offset || !initialOffset) {
    return null;
  }
  return (
    <div>
      <div className="absolute right-4 top-4 grid bg-white text-3xl text-red-400"></div>
      <div
        style={{
          cursor: "grabbing",
        }}
        className={`pointer-events-none fixed inset-0 z-50 h-full w-full cursor-grabbing`}
      >
        <CDLRead
          clientOffset={clientOffset}
          initialClientOffset={initialClientOffset}
          initialOffset={initialOffset}
          offset={offset}
          item={item}
        />
        {/* <div
          style={getItemStyles({
            clientOffset,
            initialClientOffset,
            initialOffset,
            offset,
            trash: item.trash !== null,
            sideBarIsOpen,
          })}
          className="dark:font-normal dark:text-gray-300 italic"
        >
          <DraggableRead
            dragTarget={item.id}
            read={{
              ...item,
            }}
            style={{
              visibility: "visible",
              // outline:
              //   hintsEnabled && hintRead({ read: item, phase }) && !item.readStart
              //     ? "2px solid"
              //     : "4px solid",
            }}
            className={`${
              hintsEnabled &&
              hintRead({ read: item, currentView }) &&
              !item.readStart
                ? "outline-2 outline"
                : "outline-4 outline"
            }`}
          />
        </div> */}
      </div>
    </div>
  );
}
