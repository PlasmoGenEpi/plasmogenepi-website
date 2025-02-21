import { cloneRowColors } from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import BloodSpotThumbnail from "@/app/components/Interactives/Shared/NavigationArray/BloodSpotThumbnail/BloodSpotThumbnail";
import {
  partOneCompletionAtom,
  phaseAtom,
  positiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import LabelRow from "../CloneRowTable/LabelRow";
import RefRow from "../CloneRowTable/RefRow";
import AlternateRow from "../CloneRowTable/AlternateRow";
import { useEffect, useMemo } from "react";
import { findFirstFocusableElement } from "@/helpers/helpers";
import { fixedData } from "@/data/Interactives/fixedData";
import { usePrevious } from "@/app/components/hooks";

export default function PartOneNavArray({ forwards }: { forwards?: boolean }) {
  const phase = useAtomValue(phaseAtom);
  const boards = useAtomValue(positiveControlBoardsAtom);
  const [activeBoard, setActiveBoard] = useAtom(
    selectedPositiveControlBoardAtom,
  );
  const phaseRef = usePrevious(phase, 0);

  let prevPhase = useMemo(() => {
    return phaseRef.current;
  }, [phase]);

  const completion = useAtomValue(partOneCompletionAtom);
  const currentBoard = boards[activeBoard];

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
    if (phase >= 2 && !isBoardValid(activeBoard, phase)) {
      let x: HTMLElement | undefined = findFirstFocusableElement(
        document.getElementById("form-interactive"),
      );
      x?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, activeBoard]);

  console.log(prevPhase);

  return (
    <div className="relative mx-auto mb-12 grid min-h-[100px] grid-cols-3 place-items-center gap-1 sm:max-w-[80%] sm:grid-cols-3 md:min-h-[82px] md:max-w-none md:grid-cols-6 md:gap-0 lg:gap-8">
      {phase < 3 && (
        <div
          style={{
            animationDelay: phase === 1 ? "500ms" : "",
          }}
          className={`${
            phase === 1 ? "fadeIn500" : "invisible"
          } absolute top-0 flex w-full flex-col  sm:max-w-[80%] md:left-[calc(50%-16px)] md:w-[calc(50%-16px)] md:max-w-none md:-translate-x-1/2 lg:w-[calc(50%-32px)] lg:-translate-x-[calc(50%+16px)]`}
        >
          <div
            className={`grid gap-1 font-helvetica [grid-template-columns:8%_auto]`}
          >
            <div className="col-start-2">
              <LabelRow />
            </div>
          </div>
          <RefRow
            refValues={fixedData[1].refValues}
            altValues={fixedData[1].altValues}
          />
          <AlternateRow
            refValues={fixedData[1].refValues}
            altValues={fixedData[1].altValues}
          />
        </div>
      )}
      {Array(6)
        .fill(0)
        .map((el, idx) => {
          return (
            <BloodSpotThumbnail
              className={
                (prevPhase === 0 && phase === 1) ||
                (phase === 1 && isHidden(idx, phase))
                  ? "hidden"
                  : ""
              }
              tooltip={`Positive Control ${idx + 1}`}
              callback={() => {
                setActiveBoard(idx + 1);
              }}
              active={idx + 1 === activeBoard}
              key={idx}
              id={idx + 1}
              complete={isBoardValid(idx + 1, phase)}
              hidden={phase === 1 || isHidden(idx, phase)}
            >
              <div className="flex h-full grow flex-col flex-wrap items-center justify-center gap-0.5 p-1">
                {boards[idx + 1].rows.map((rowId) => {
                  return (
                    <div
                      className="grid w-full grid-cols-8 gap-[1px]"
                      key={rowId}
                    >
                      {Array(8)
                        .fill(0)
                        .map((el, idx) => {
                          return (
                            <div
                              key={idx}
                              className={`${cloneRowColors[rowId]} aspect-square shadow-sm shadow-black/50`}
                            ></div>
                          );
                        })}
                    </div>
                  );
                })}
              </div>
            </BloodSpotThumbnail>
          );
        })}
    </div>
  );
}
