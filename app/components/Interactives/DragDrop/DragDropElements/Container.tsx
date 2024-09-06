import CharArray from "./ReferenceGenome";
import DraggableRead from "./DraggableRead";
import ReferenceGenome from "./ReferenceGenome";
import { MutableRefObject, Ref, TouchEvent, useEffect, useRef } from "react";
import {
  globalDragAtom,
  phaseAtom,
  readsAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import ReadsContainer from "./ReadsContainer";
import { scrollStartAtom } from "./CustomDragLayer";
import Labels from "./Labels/Labels";

export const topDistanceIncludingBorder = 90;
export const borderWidth = 24;
export const paddingFromBorder = topDistanceIncludingBorder - borderWidth;
export const paddingLeft = 32;
export const paddingRight = 64;
export const rowHeight = 32;
export const rowDistance = 32;
export const charSize = 18;
export const readStartOffset = 18;
export const dropContainerWidth = 1148;

// const eventIsTouchEvent = function (
//   e:
//     | React.TouchEvent<HTMLDivElement>
//     | React.MouseEvent<HTMLDivElement, MouseEvent>,
// ): e is React.TouchEvent<HTMLDivElement> {
//   return e?.touches !== undefined;
// };

export function clearRefTimeout(ref: MutableRefObject<null | NodeJS.Timeout>) {
  if (ref.current !== null) {
    clearTimeout(ref.current);
    ref.current = null;
  }
}

export const handleVerticalScroll = function (
  // e:
  //   | React.MouseEvent<HTMLDivElement, MouseEvent>
  //   | React.TouchEvent<HTMLDivElement>,
  cursorLocation: number | undefined,
  scrollRef: MutableRefObject<HTMLDivElement | null>,
  drag: boolean,
  scrollIntervalTimeoutRef: MutableRefObject<null | NodeJS.Timeout>,
) {
  // let cursorLocation: number = 0;

  // if ("touches" in e) {
  //   cursorLocation = e.touches[0].clientX;
  // } else {
  //   cursorLocation = e.clientX;
  // }

  if (drag && cursorLocation !== undefined) {
    if (cursorLocation + (15 * charSize) / 4 > innerWidth * 0.9) {
      if (scrollIntervalTimeoutRef.current === null) {
        scrollIntervalTimeoutRef.current = setInterval(() => {
          scrollRef?.current?.scrollBy(6, 0);
        }, 15);
      }
    } else if (cursorLocation - (15 * charSize) / 8 < 0.1 * innerWidth) {
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

export default function Container({
  scrollRef,
  scrollIntervalTimeoutRef,
}: {
  scrollRef: MutableRefObject<HTMLDivElement | null>;
  scrollIntervalTimeoutRef: MutableRefObject<null | NodeJS.Timeout>;
}) {
  const globalDrag = useAtomValue(globalDragAtom);
  const setScrollStart = useSetAtom(scrollStartAtom);
  const phase = useAtomValue(phaseAtom);
  // const scrollIntervalTimeoutRef = useRef<null | NodeJS.Timeout>(null);

  // useEffect(() => {
  //   let z = scrollRef;
  //   let handleScroll = () => {
  //     if (scrollRef?.current) {
  //       console.log("called");

  //       setScrollStart(scrollRef?.current?.scrollLeft);
  //     }
  //   };

  //   if (scrollRef && scrollRef.current) {
  //     if (!globalDrag) {
  //       scrollRef?.current.addEventListener("scroll", handleScroll);
  //     } else {
  //       scrollRef?.current.removeEventListener("scroll", handleScroll);
  //     }
  //   }
  //   return () => {
  //     z.current?.removeEventListener("scroll", handleScroll);
  //   };
  // }, [globalDrag, scrollRef, setScrollStart]);

  useEffect(() => {
    window.scrollTo(0, 0);
    scrollRef.current?.scrollTo(0, 0);
    setScrollStart({
      x: 0,
      y: 0,
    });
  }, [phase, setScrollStart, scrollRef]);

  return (
    <div
      // onTouchMove={(e) => {
      //   handleMoveEvent(e, scrollRef, globalDrag, scrollIntervalTimeoutRef);
      // }}
      // onMouseMove={(e) => {
      //   handleMoveEvent(e, scrollRef, globalDrag, scrollIntervalTimeoutRef);
      // }}
      onScroll={(e) => {
        if (!globalDrag) {
          setScrollStart({
            x: e.currentTarget.scrollLeft,
            y: window.scrollTop,
          });
        }
      }}
      ref={scrollRef}
      className={`${globalDrag ? "cursor-grabbing " : ""} scroll-mx-24 overflow-auto border-y-[24px] border-primaryBlue`}
    >
      <div className={phase >= 9 ? "" : ""}>
        <div
          style={{
            paddingLeft: paddingLeft,
            paddingTop: paddingFromBorder,
            paddingRight: paddingRight,
            width: dropContainerWidth,
            // minHeight: rowDistance * 11 + topDistanceIncludingBorder,
          }}
          className={`relative mx-auto`}
        >
          <ReferenceGenome />
          <ReadsContainer
            scrollRef={scrollRef}
            scrollIntervalTimeoutRef={scrollIntervalTimeoutRef}
          />
          <Labels />
        </div>
      </div>
    </div>
  );
}
