import { usePrevious } from "@/app/components/hooks";
import { findFirstFocusableElement } from "@/app/components/Interactives/helpers";
import { cloneRowColors } from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import { microhaplotypeColorMap } from "@/app/components/Interactives/Shared/Microhaplotypes/MicrohaplotypeTable/MicrohaplotypeTableRow";
import BloodSpotThumbnail from "@/app/components/Interactives/Shared/NavigationArray/BloodSpotThumbnail/BloodSpotThumbnail";
import {
  cloneRowsAtom,
  partThreePositiveControlBoardsAtom,
  phase1Atom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { useEffect, useMemo } from "react";

export default function PartThreeNavArray() {
  const phase = useAtomValue(phase1Atom);
  const cloneRows = useAtomValue(cloneRowsAtom);
  const boards = useAtomValue(partThreePositiveControlBoardsAtom);
  const [activeBoard, setActiveBoard] = useAtom(
    selectedPositiveControlBoardAtom,
  );
  let prevPhase = usePrevious(phase, 0);

  const prevPhase2 = useMemo(() => {
    return prevPhase.current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const isHidden = function (idx: number, phase: number) {
    if (idx === 0) {
      return false;
    }
    if (phase === 2) {
      return !boards[idx]?.valid;
    } else if (phase === 3) {
      return !boards[idx]?.inputValid;
    } else if (phase === 4) {
      return !boards[idx]?.questionsValid;
    }
  };

  let isBoardValid = function (id: number, phase: number) {
    if (phase === 2) {
      return boards[id].valid;
    } else if (phase === 3) {
      return boards[id].inputValid;
    } else if (phase === 4) {
      return boards[id].questionsValid;
    }
  };

  useEffect(() => {
    setActiveBoard(1);
  }, [phase, setActiveBoard]);

  useEffect(() => {
    if (phase >= 2 && !isBoardValid(activeBoard, phase)) {
      let x: HTMLElement | undefined = findFirstFocusableElement(
        document.getElementById("form-interactive"),
      );
      x?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, activeBoard]);

  if (phase === 1 || phase >= 5) {
    return null;
  }

  return (
    <div className="@xl/main:max-w-[80%] @xl/main:grid-cols-3 @4xl/main:min-h-[82px] @4xl/main:max-w-none @4xl/main:grid-cols-6 @4xl/main:gap-0 relative mx-auto mb-12 grid min-h-[100px] grid-cols-3 place-items-center gap-1">
      {Array(6)
        .fill(0)
        .map((el, idx) => {
          return (
            <BloodSpotThumbnail
              tooltip={`Positive Control ${boards[idx + 1].id}`}
              className={`${
                isHidden(idx, phase) && prevPhase2 === 1 ? "hidden " : ""
              }
                ${
                  (idx < 2
                    ? "col-start-1 md:col-start-auto"
                    : idx < 4
                    ? "col-start-2 md:col-start-auto"
                    : "col-start-3 md:col-start-auto") +
                  " " +
                  (idx % 2 === 0
                    ? "row-start-1 md:row-start-auto"
                    : "row-start-2 md:row-start-auto")
                }`}
              callback={() => {
                setActiveBoard(idx + 1);
              }}
              active={idx + 1 === activeBoard}
              key={idx}
              id={idx + 1}
              complete={
                (phase === 2 && boards[idx + 1].valid) ||
                (phase === 3 && boards[idx + 1].inputValid) ||
                (phase === 4 && boards[idx + 1].questionsValid)
              }
              hidden={phase === 1 || isHidden(idx, phase)}
            >
              {
                <div className="flex h-full grow flex-col  items-center justify-center gap-0.5 p-1">
                  {boards[idx + 1].rows.map((rowId) => {
                    return (
                      <div
                        className="grid w-full grid-cols-4 gap-[1px]"
                        key={rowId}
                      >
                        {Array(4)
                          .fill(0)
                          .map((el, idx2) => {
                            let vals = cloneRows[rowId].vals.slice(
                              idx2 * 3,
                              idx2 * 3 + 3,
                            );
                            return (
                              <div
                                key={idx2}
                                className={`${microhaplotypeColorMap.get(
                                  JSON.stringify(vals),
                                )} relative aspect-[2/1] shadow-sm shadow-black/50`}
                              >
                                <div className="absolute inset-[1px] bg-white/80"></div>
                              </div>
                            );
                          })}
                      </div>
                    );
                  })}
                </div>
              }
            </BloodSpotThumbnail>
          );
        })}
    </div>
  );
}
