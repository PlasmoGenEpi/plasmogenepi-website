"use client";

import { useSetAtom } from "jotai";
import { XYCoord, useDragLayer } from "react-dnd";
import DraggableRead from "./DraggableRead";
import { useEffect, useState } from "react";
import { dragLocationAtom } from "@/store";

// import ReadsContainer from "../ReadsContainer/ReadsContainer";
// import GenomeContainer from "../GenomeContainer/GenomeContainer";
// import { useMediaQuery } from "usehooks-ts";
// import { useEffect, useMemo } from "react";
// import { useSetAtom } from "jotai";
// import { useDragLayer } from "react-dnd";
// import { dragLocationAtom } from "@/store";
// import { Read } from "./Read";
// import { DraggableRead } from "./DraggableRead";

function getItemStyles(
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null
) {
  if (!initialOffset || !currentOffset) {
    return {
      display: "none",
    };
  }
  let { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform,
  };
}

export default function CustomDragLayer({
  size,
  large,
}: {
  size: number;
  large: boolean;
}) {
  const [spawn, setSpawn] = useState(false);
  const setDragLocation = useSetAtom(dragLocationAtom);

  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => {
      let x = {
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging(),
      };
      if (spawn) {
        if (window) {
          let z = window?.document.getElementById("drop-container");
          let container = z?.getBoundingClientRect();

          if (x.currentOffset && x.initialOffset && x.item && container) {
            let abc = {
              x: x.currentOffset.x - container?.x + (large ? -360 : -8),
              y: x.currentOffset.y - container?.y,
            };
            setDragLocation(abc);
            // console.log(abc);
          }
        }
      } else {
      }
      return x;
      // if (window?.document) {
      //   let z = window?.document.getElementById("drop-container");
      //   let container = z?.getBoundingClientRect();

      // if (x.currentOffset && x.initialOffset && x.item && container) {
      //   setDragLocation({
      //     // x: x.currentOffset.x - x.initialOffset.x + x.item.left,
      //     // y: x.currentOffset.y - x.initialOffset.y + x.item.top,
      //     x: x.currentOffset.x - container?.x,
      //     y: x.currentOffset.y - container?.y,
      //   });
      // }
      //   return x;
      // }
    });

  useEffect(() => {
    setSpawn(true);
  }, []);

  if (!isDragging) {
    setDragLocation({ x: 0, y: 0 });
    return null;
  }

  // let readSize = 15 * size + 2;
  // let genomeSize = 51 * size;
  // let gapBetween = 16;

  // console.log(readSize + gapBetween + genomeSize);

  return (
    <div
      style={{
        cursor: "grabbing",
      }}
      className="cursor-grabbing pointer-events-none fixed left-0 top-0 h-full w-full z-50"
    >
      <div style={getItemStyles(initialOffset, currentOffset)}>
        <DraggableRead id={item.id} text={item.text} size={size} dragTarget />{" "}
      </div>
    </div>
  );
}
