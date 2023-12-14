import { useDragLayer } from "react-dnd";
import { ReadDragPreview } from "./BoxDragPreview";
// import { BoxDragPreview } from './BoxDragPreview.js'
// import { ItemTypes } from './ItemTypes.js'
import { snapToGrid } from "./snapToGrid";
import { ReadDragPreview2 } from "./ReadDragPreview2";
import { DraggableRead } from "./DraggableBox";
import { dragWithinTrashAtom } from "@/store";
import { useAtom, useSetAtom } from "jotai";

const layerStyles = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
};
function getItemStyles(initialOffset, currentOffset, isSnapToGrid) {
  if (!initialOffset || !currentOffset) {
    return {
      display: "none",
    };
  }
  let { x, y } = currentOffset;
  if (isSnapToGrid) {
    x -= initialOffset.x;
    y -= initialOffset.y;
    [x, y] = snapToGrid(x, y);
    x += initialOffset.x;
    y += initialOffset.y;
  }
  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform,
  };
}
export const CustomDragLayer = ({ snapToGrid }: { snapToGrid: boolean }) => {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => {
      let item = monitor.getItem();
      let itemType = monitor.getItemType();
      let initialOffset = monitor.getInitialSourceClientOffset();
      let currentOffset = monitor.getSourceClientOffset();
      let isDragging = monitor.isDragging();
      return {
        item,
        itemType,
        initialOffset,
        currentOffset,
        isDragging,
      };
    });
  if (!isDragging) {
    return null;
  }
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-50 h-full w-full font-bold">
      <div style={getItemStyles(initialOffset, currentOffset, snapToGrid)}>
        <DraggableRead
          text={item.text}
          specials={item.specials}
          specials2={item.specials2}
        />{" "}
      </div>
    </div>
  );
};
