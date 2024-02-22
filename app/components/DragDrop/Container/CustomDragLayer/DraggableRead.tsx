import { useDrag } from "react-dnd";
import Read from "./Read";
import {
  getCoordsByCharStart,
  getStylesWithReadStart,
  getStylesWithTrashStart,
  isDraggable,
} from "../../../../../helpers";
import {
  dragDropPhaseCompletionAtom,
  dragLocationAtom,
  phaseAtom,
} from "@/store";
import { useAtomValue } from "jotai";
import { useState } from "react";

export default function DraggableRead({
  id,
  text,
  size,
  dragTarget,
  charStart,
  rowHeight,
  rowStart,
  xOffset,
  yOffset,
  readStart,
  trash,
  large,
  specials,
  specials2,
}: {
  specials?: {
    color: string;
    [key: number]: string;
  };
  specials2?: boolean[];
  large: boolean;
  trash?: number;
  readStart: boolean;
  dragTarget?: boolean;
  id: number;
  text: string;
  size: number;
  rowHeight: number;
  charStart: number | null;
  rowStart: number | null;
  xOffset: number;
  yOffset: number;
}) {
  const phase = useAtomValue(phaseAtom);
  const dragLocation = useAtomValue(dragLocationAtom);
  const completion = useAtomValue(dragDropPhaseCompletionAtom);
  const [spawned, setSpawned] = useState(false);
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: "read",
      item: { id, text, specials },

      canDrag: () => {
        if (completion[phase]) {
          return false;
        } else {
          return isDraggable(id, phase);
        }
      },
      collect: (monitor) => {
        return {
          isDragging: monitor.isDragging(),
        };
      },
    }),
    [text, size, phase],
  );

  return (
    <div
      key={id}
      onAnimationEnd={(e) => {
        if (e.currentTarget === e.target) {
          if (e.animationName === "fadeIn") {
            // console.log("called");
            // e.currentTarget.classList.remove("fadeIn500Delay500");
            setSpawned(true);
          }
        }
      }}
      className={`${
        !spawned && !dragTarget ? "fadeIn500Delay500" : ""
      } absolute transition-all duration-500 ${
        dragLocation.x ? "pointer-events-none" : ""
      }`}
      role="draggableRead"
      ref={drag}
      style={
        dragTarget
          ? {
              position: "absolute",
              // opacity: isDragging ? 0.1 : 1,
              boxShadow: "2px 2px 4px 0px #000000a0",
              zIndex: 50,
            }
          : charStart && rowStart
          ? getCoordsByCharStart({
              charStart,
              id,
              rowHeight,
              rowStart,
              size,
              xOffset,
              yOffset,
              isDragging,
            })
          : readStart
          ? getStylesWithReadStart({
              id,
              readRowHeight: rowHeight,
              isDragging,
              isStacked: !large,
              size,
            })
          : getStylesWithTrashStart({
              isDragging,
              readRowHeight: rowHeight,
              size,
              trashStart: trash,
              yOffset,
            })
      }
    >
      {readStart ? (
        <span className="absolute -left-4 text-xs">{id}</span>
      ) : null}
      <Read
        id={id}
        size={size}
        text={text}
        specials={specials}
        specials2={specials2}
      />
    </div>
  );
}
