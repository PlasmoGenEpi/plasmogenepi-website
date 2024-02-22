import { useDrop } from "react-dnd";
import ReferenceGenome from "./ReferenceGenome";
import { useAtomValue } from "jotai";
import { dragLocationAtom } from "@/store";
import Trash from "./Trash";
import { useRef } from "react";
import DragDropLegend from "../Labels/DragDropLegend";

export default function GenomeContainer({
  size,
  readRowHeight,
  changeCharStart,
  setReadTrash,
  large,
}: {
  large: boolean;
  changeCharStart: (id: number, x: number) => void;
  setReadTrash: (id: number) => void;

  size: number;
  readRowHeight: number;
}) {
  const dropRef = useRef<null | HTMLDivElement>(null);
  const dragLocation = useAtomValue(dragLocationAtom);
  const [, drop] = useDrop(
    () => ({
      accept: "read",
      drop(item: { id: number; text: string; specials }, monitor) {
        console.log("drop");
        let ab = monitor.getInitialSourceClientOffset();
        let dropCoords = dropRef.current?.getBoundingClientRect();
        let coords = monitor.getSourceClientOffset();
        if (coords && coords.x && ab) {
          console.log(
            Math.round(
              (coords.x -
                (dropCoords ? dropCoords.x : 0) -
                (!large ? 8 : 1144 - 56 * size)) /
                size
            )
          );
          changeCharStart(
            item.id,
            Math.round(
              (coords.x -
                (dropCoords ? dropCoords.x : 0) -
                (!large ? 8 : 1144 - 56 * size)) /
                size
            )
          );
        }
        return undefined;
      },
    }),
    [changeCharStart, size, large]
  );

  return (
    <div ref={drop}>
      {/* <span className="text-2xl absolute -translate-y-8">{`${Math.round(dragLocation.x)}, ${Math.round(dragLocation.y)}, ${JSON.stringify(large)}`}</span> */}
      <div className=" shadow-sm shadow-black/50 pt-1 bg-white pl-2">
        <div
          className={` w-fit`}
          style={{
            // outline: dragLocation.x ? "1px solid black" : "",
            // outlineOffset: 2,
            // backgroundColor: dragLocation.x ? "#fafafa" : "",
            height: 16 * readRowHeight,
          }}
        >
          <div
            ref={dropRef}
            id="drop-container"
            className="absolute inset-0 pointer-events-none"
          ></div>
          <ReferenceGenome
            size={size}
            start={
              dragLocation.x !== null &&
              dragLocation.x > -1 * size &&
              dragLocation.y !== null &&
              dragLocation.y < readRowHeight * 16 + (large ? 0 : 160) &&
              dragLocation.y > (!large ? 176 : 0)
                ? Math.round(dragLocation.x / size)
                : null
            }
          />
        </div>
      </div>
      <div className="flex mt-4 gap-4">
        <div className="basis-1/2">
          <DragDropLegend />
        </div>
        <Trash setReadTrash={setReadTrash} />
      </div>
    </div>
  );
}
