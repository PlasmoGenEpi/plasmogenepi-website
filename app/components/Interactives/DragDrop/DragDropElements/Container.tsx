import CharArray from "./ReferenceGenome";
import DraggableRead from "./DraggableRead";
import ReferenceGenome from "./ReferenceGenome";
import { MutableRefObject, Ref, TouchEvent, useEffect, useRef } from "react";
import {
  globalDragAtom,
  phase3Atom,
  readsAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import ReadsContainer from "./ReadsContainer";
import { scrollStartAtom } from "./CustomDragLayer";
import Labels from "./Labels/Labels";
import { sideBarIsOpenAtom } from "../../Shared/InteractiveViewer/InteractiveSideBar/InteractiveSideBar";

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
  const phase = useAtomValue(phase3Atom);
  const dropZoneRef = useRef<HTMLDivElement | null>(null);
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

  console.log(scrollRef?.current?.scrollLeft);

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
      // style={{
      //   backgroundImage: `linear-gradient(to top, #00000040, transparent 16px, transparent 95%, #00000040)`,
      // }}
      className={`${
        globalDrag ? "cursor-grabbing " : ""
      } border-y-[24px]/ dark:bg-interactiveBlue/5 dark:bg-zinc-900/50/ scroll-mx-24 overflow-auto border-y-2 border-black bg-white/50 italic dark:border-transparent dark:font-normal dark:text-gray-300`}
      // className={`${
      //   globalDrag ? "cursor-grabbing " : ""
      // } scroll-mx-24 overflow-auto border-y-[24px] border-transparent bg-white dark:brightness-75 dark:text-black outline-interactiveBlue outline-4 outline`}
    >
      <div className={phase >= 9 ? "" : ""}>
        <div
          ref={dropZoneRef}
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
