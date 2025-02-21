import { fixedData } from "@/data/Interactives/fixedData";
import // charSize,
// paddingFromBorder,
// paddingLeft,
// topDistanceIncludingBorder,
"./Container";
import {
  dragDropCompletionAtom,
  dragLocationAtom,
  globalDragAtom,
  hintsEnabledAtom,
  phase3Atom,
} from "@/data/Interactives/interactiveStore";
import { atom, useAtom, useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { currentView3Atom } from "../../Shared/InteractiveViewer/InteractiveViewer";

export const chimaeraPlacedAtom = atomWithStorage("chimaeraPlacedAtom", false);

export const isOverReadsContainerAtom = atom(false);

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

export default function ReferenceGenome() {
  const globalDrag = useAtomValue(globalDragAtom);
  const { x, y } = useAtomValue(dragLocationAtom);
  // const phase = useAtomValue(phase3Atom);
  const currentView = useAtomValue(currentView3Atom);
  const [chimaeraPlaced, setChimaeraPlaced] = useAtom(chimaeraPlacedAtom);
  const completion = useAtomValue(dragDropCompletionAtom);
  const isOverReadsContainer = useAtomValue(isOverReadsContainerAtom);

  const { phase, section } = currentView;

  let charBegin = null;
  if (x) {
    charBegin = Math.round((x - paddingLeft) / charSize);
  }

  if (completion[8] && phase === 8 && chimaeraPlaced) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(51, ${charSize}px)`,
        }}
        className="w-fit"
      >
        {fixedData.dragDrop.referenceGenome.split("").map((el, idx) => {
          return (
            <span
              key={idx}
              className={
                ((idx >= 3 && idx < 11) || (idx < 47 && idx >= 40)
                  ? `font-bold/ -translate-y-4 border-current transition-transform`
                  : `border-transparent opacity-50`) +
                " font-bold/ inline-block border-b-2 border-current text-center text-xl transition-transform [line-height:14px] dark:font-normal "
              }
              // ${idx < 47 && idx >= 3 ? "chimaeraGenome" : ""} ${idx >= 11 ? "chimaeraGenomeDone" : ""}
              // className={`inline-block text-center text-xl font-bold/ opacity-50 transition-transform [line-height:14px]`}
            >
              {el}
            </span>
          );
        })}
      </div>
    );
  }

  if (phase === 8 && chimaeraPlaced) {
    const difference = 44 * charSize;
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(51, ${charSize}px)`,
        }}
        className="w-fit"
      >
        {fixedData.dragDrop.referenceGenome.split("").map((el, idx) => {
          return (
            <span
              key={idx}
              style={
                chimaeraPlaced
                  ? {
                      width: charSize,
                      animation:
                        idx < 11 && idx >= 3
                          ? ".3s linear 1 forwards highlightGenome"
                          : idx <= 39 && idx >= 3
                          ? ".3s linear 1 forwards highlightGenome, .3s linear 1 forwards highlightGenomeDone"
                          : idx < 47 && idx >= 11
                          ? ".3s linear 1 forwards highlightGenome"
                          : "",
                      animationDelay: `${
                        Math.max(0, (idx - 15) * 100) + 1000
                      }ms, ${Math.max(0, (idx - 10) * 100) + 1000}ms`,
                    }
                  : {}
              }
              className={`font-bold/ inline-block text-center text-xl opacity-50 transition-transform [line-height:14px] dark:font-normal`}
            >
              {el}
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(51, ${charSize}px)`,
      }}
      className="absolute w-fit"
    >
      {fixedData.dragDrop.referenceGenome.split("").map((el, idx) => {
        return (
          <span
            key={idx}
            style={{
              animationDirection: "forwards",
              width: charSize,
            }}
            // ${hintsEnabled && (textOfDraggedRead?.[idx - charBegin] === el ? "" : "text-red-500")}
            className={`${
              isOverReadsContainer &&
              charBegin !== null &&
              charBegin <= 47 &&
              idx >= charBegin &&
              idx < charBegin + 15
                ? `pointer-events-none -translate-y-8 border-current`
                : globalDrag
                ? "pointer-events-none border-transparent opacity-50"
                : "border-transparent"
            } font-bold/ -translate-x-0.5/ inline-block border-b-2 text-center text-xl transition-transform [line-height:14px] dark:font-normal ${
              phase === 1 ? "" : ""
            }`}
          >
            {el}
          </span>
        );
      })}
    </div>
  );
}
