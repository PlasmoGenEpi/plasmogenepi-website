import { XYCoord } from "react-dnd";
import DraggableRead, { yOffset } from "./DraggableRead";
import {
  dragLocationAtom,
  hintsEnabledAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import { hintRead } from "./Read";
import { currentView3Atom } from "../../Shared/InteractiveViewer/InteractiveViewer";
import { sideBarIsOpenAtom } from "../../Shared/InteractiveViewer/InteractiveSideBar/InteractiveSideBar";

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

function isIpad() {
  // return (
  //   (navigator.userAgent === "MacIntel" && navigator.maxTouchPoints > 0) ||
  //   navigator.userAgent === "iPad"
  // );

  return /iPad/.test(navigator.userAgent);
}

export default function CDLRead({
  item,
  clientOffset,
  initialClientOffset,
  initialOffset,
  offset,
}: {
  item: any;
  clientOffset: any;
  initialClientOffset: any;
  initialOffset: any;
  offset: any;
}) {
  const dragLocation = useAtomValue(dragLocationAtom);
  const hintsEnabled = useAtomValue(hintsEnabledAtom);
  const currentView = useAtomValue(currentView3Atom);
  const sideBarIsOpen = useAtomValue(sideBarIsOpenAtom);
  return (
    <div
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
    </div>
  );
}
