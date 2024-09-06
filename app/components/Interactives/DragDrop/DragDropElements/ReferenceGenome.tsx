import { fixedData } from "@/data/Interactives/fixedData";
import {
  charSize,
  paddingFromBorder,
  paddingLeft,
  topDistanceIncludingBorder,
} from "./Container";
import {
  dragDropCompletionAtom,
  dragLocationAtom,
  globalDragAtom,
  hintsEnabledAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { atom, useAtom, useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const chimaeraPlacedAtom = atomWithStorage("chimaeraPlacedAtom", false);

export const isOverReadsContainerAtom = atom(false);

export default function ReferenceGenome() {
  const globalDrag = useAtomValue(globalDragAtom);
  const { x, y } = useAtomValue(dragLocationAtom);
  const phase = useAtomValue(phaseAtom);
  const [chimaeraPlaced, setChimaeraPlaced] = useAtom(chimaeraPlacedAtom);
  const completion = useAtomValue(dragDropCompletionAtom);
  const isOverReadsContainer = useAtomValue(isOverReadsContainerAtom);

  let charBegin = null;
  if (x) {
    charBegin = Math.round((x - paddingLeft - 2) / charSize);
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
                  ? `-translate-y-4 border-black font-bold transition-transform`
                  : `opacity-50`) +
                " inline-block border-b-2 text-center text-xl font-bold transition-transform [line-height:14px]"
              }
              // ${idx < 47 && idx >= 3 ? "chimaeraGenome" : ""} ${idx >= 11 ? "chimaeraGenomeDone" : ""}
              // className={`inline-block text-center text-xl font-bold opacity-50 transition-transform [line-height:14px]`}
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
                      // animation: `.3s linear 1 forwards highlightGenome, .3s linear 1 forwards highlightGenomeDone`,
                      animationDelay: `${Math.max(0, (idx - 15) * 100) + 1000}ms, ${Math.max(0, (idx - 10) * 100) + 1000}ms`,
                    }
                  : {}
              }
              // className={
              //   (idx >= 3 && idx < 11
              //     ? `-translate-y-4 border-black font-bold transition-transform`
              //     : `opacity-50`) +
              //   " inline-block border-b-2 text-center text-xl font-bold transition-transform [line-height:14px]"
              // }
              // ${idx < 47 && idx >= 3 ? "chimaeraGenome" : ""} ${idx >= 11 ? "chimaeraGenomeDone" : ""}
              className={`inline-block text-center text-xl font-bold opacity-50 transition-transform [line-height:14px]`}
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
            className={`${isOverReadsContainer && charBegin !== null && charBegin <= 47 && idx >= charBegin && idx < charBegin + 15 ? `pointer-events-none -translate-y-4 border-black` : globalDrag ? "pointer-events-none opacity-50" : "border-transparent"} inline-block border-b-2 text-center text-xl font-bold transition-transform [line-height:14px] ${phase === 1 ? "hidden" : ""}`}
          >
            {el}
          </span>
        );
      })}
    </div>
  );
}
