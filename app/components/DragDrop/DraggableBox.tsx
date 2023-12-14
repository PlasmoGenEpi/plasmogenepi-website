import { memo, useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { Box } from "./Box";
import { Read2 } from "./Read2";
import {
  dragWithinTrashAtom,
  partSevenSubstepCompletionsAtom,
  phaseAtom,
} from "@/store";
import { useAtom, useAtomValue } from "jotai";
import { withinTrash } from "./snapToGrid";

function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  // const transform = `translate3d(${left}px, ${top}px, 0) ${
  //   top < 200 ? "scale(.75)" : "scale(1)"
  // }`;
  return {
    transformOrigin: "top left",
    position: "absolute",
    transform,
    WebkitTransform: transform,
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : "auto",
    // pointerEvents: isDragging ? "none" : "auto",
  };
}
export const DraggableRead = memo(function DraggableRead(props: {
  specials2: {
    color: string;
  };
  id: number;
  text: string;
  left: number;
  top: number;
  setReadLeft: (id: number) => void;
  attemptedLeft: number;
  attemptedTop: number;
  read2?: boolean;
  specials: {
    color: string;
    [key: number]: string;
  };
  // boxes: {
  //   id: number;
  //   left: number;
  //   top: number;
  //   attemptedLeft: number;
  //   attemptedTop: number;
  //   text: string;
  // }[];
}) {
  // const [animationComplete, setAnimationComplete] = useState(false);
  const {
    id,
    text,
    left,
    top,
    attemptedLeft,
    attemptedTop,
    specials,
    specials2,
    setReadLeft,
  } = props;
  const partSevenSubstepCompletions = useAtomValue(
    partSevenSubstepCompletionsAtom,
  );
  const phase = useAtomValue(phaseAtom);
  const [dragWithinTrash, setDragWithinTrash] = useAtom(dragWithinTrashAtom);
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: "box",
      item: { id, left, top, text, specials, specials2 },
      canDrag: () => {
        return phase !== 6;
      },
      // canDrag: !partSevenSubstepCompletions[phase],
      collect: (monitor) => {
        // console.log(left, top);
        // if (withinTrash(left, top)) {
        //   setDragWithinTrash(true);
        // } else {
        //   setDragWithinTrash(false);
        // }
        return {
          isDragging: monitor.isDragging(),
        };
      },
    }),
    [id, left, top, text, phase],
  );
  // useEffect(() => {
  //   preview(getEmptyImage(), { captureDraggingState: false });
  // }, []);

  // useEffect(() => {
  //   if (!animationComplete) {
  //   } else {
  //   }

  //   console.log(attemptedLeft, attemptedTop);
  // }, [attemptedLeft, attemptedTop]);

  return (
    <div
      className="transition-all duration-500"
      ref={drag}
      style={getStyles(left, top, isDragging)}
      role="DraggableBox"
    >
      {
        <Box
          specials2={specials2}
          text={text}
          specials={specials}
          id={id}
          setReadLeft={setReadLeft}
        />
      }
    </div>
  );
});
