import { useAtom, useAtomValue } from "jotai";
import { charSize } from "./Container";
import {
  dragDropCompletionAtom,
  dragDropQuestionsAtom,
  hintsEnabledAtom,
  phaseAtom,
  reads2Atom,
  ReadType,
} from "@/data/Interactives/interactiveStore";
import { useCallback, useEffect } from "react";
import { atomWithStorage, RESET } from "jotai/utils";
import { alternateIsError } from "../DragDropControlPanel";

export const attemptedFalseMutationsAtom = atomWithStorage<{
  [key: number]: {
    [key: number]: boolean | undefined;
  };
}>("attemptedFalseMutationsAtom", {});

export const attemptedMutationsAtom = atomWithStorage<{
  [key: number]: {
    [key: number]: boolean | undefined;
  };
}>("attemptedMutationsAtom", {});

export function hintRead({
  read,
  phase,
  mutations,
  falseMutations,
  id,
  idx,
}: {
  id?: number;
  idx?: number;
  read?: ReadType;
  phase: number;
  mutations?: {
    [key: number]: {
      [key: number]: boolean | undefined;
    };
  };
  falseMutations?: {
    [key: number]: {
      [key: number]: boolean | undefined;
    };
  };
}) {
  if (phase < 5 && read) {
    if (read.text[0] === "T") {
      return read.charStart !== 3;
    } else if (read.text[0] === "A") {
      return read.charStart !== 32;
    }
  } else if (phase < 9 && read) {
    if ([2, 3, 4, 8, 11, 12, 15, 16, 18].includes(read.id)) {
      return read.charStart !== 3;
    } else if ([1, 5, 6, 9, 10, 13, 14, 19].includes(read.id)) {
      return read.charStart !== 32;
    } else if ([7, 17, 20].includes(read.id)) {
      return typeof read.trash !== "number";
    }
  } else if (phase === 9 && falseMutations) {
    if (id !== 4 && idx !== 6) {
      return true;
    }
  }
}

export default function Read({ text, id }: { text: string; id: number }) {
  const phase = useAtomValue(phaseAtom);
  const [completion, setCompletion] = useAtom(dragDropCompletionAtom);
  const [attemptedFalseMutations, setAttemptedFalseMutations] = useAtom(
    attemptedFalseMutationsAtom,
  );
  const [attemptedMutations, setAttemptedMutations] = useAtom(
    attemptedMutationsAtom,
  );
  const hintsEnabled = useAtomValue(hintsEnabledAtom);
  const questions = useAtomValue(dragDropQuestionsAtom);

  // useEffect(() => {
  //   setAttemptedMutations(RESET);
  //   setCompletion({ ...completion, 10: false });
  // }, [phase]);

  const handleFalseMutations = (id: number, idx: number) => {
    let mutations: { [key: number]: boolean | undefined } = {};
    if (attemptedFalseMutations[id]) {
      mutations = { ...attemptedFalseMutations[id] };
    }
    mutations[idx] = !!!mutations[idx];
    let newMutations = { ...attemptedFalseMutations };
    newMutations[id] = mutations;
    setAttemptedFalseMutations(newMutations);
  };

  const handleMutations = (id: number, idx: number) => {
    let mutations: { [key: number]: boolean | undefined } = {};
    if (attemptedMutations[id]) {
      mutations = { ...attemptedMutations[id] };
    }
    mutations[idx] = !!!mutations[idx];
    let newMutations = { ...attemptedMutations };
    newMutations[id] = mutations;
    setAttemptedMutations(newMutations);
  };

  return (
    <ol
      aria-label={text}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(15,${charSize}px)`,
      }}
      className="text-center text-xl"
    >
      {text.split("").map((el, idx) => {
        return (
          <span
            onKeyDown={
              phase === 9 && !completion[9]
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleFalseMutations(id, idx);
                    }
                  }
                : phase === 10 && !completion[10]
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleMutations(id, idx);
                      }
                    }
                  : undefined
            }
            onClick={
              phase === 9 && !completion[9]
                ? () => {
                    handleFalseMutations(id, idx);
                  }
                : phase === 10 && !completion[10]
                  ? () => {
                      handleMutations(id, idx);
                    }
                  : undefined
            }
            tabIndex={
              (phase === 9 && !completion[9]) ||
              (phase === 10 && !completion[10])
                ? 0
                : undefined
            }
            key={idx}
            role={
              (phase === 9 && !completion[9]) ||
              (phase === 10 && !completion[10])
                ? "button"
                : undefined
            }
            className={
              phase === 9 && !completion[9]
                ? `${(attemptedFalseMutations?.[id]?.[idx] && hintsEnabled && !((id === 4 && idx === 6) || (id === 19 && idx === 13))) || (!attemptedFalseMutations?.[id]?.[idx] && hintsEnabled && ((id === 4 && idx === 6) || (id === 19 && idx === 13))) ? "bg-orange-300 hover:bg-orange-500 focus-visible:bg-orange-500" : "hover:bg-[darkorange]/20 focus-visible:bg-[#1d4ed8]/20"} pointer-events-auto block cursor-pointer pt-[5px] font-bold`
                : phase === 10 && !completion[10]
                  ? `pointer-events-auto block cursor-pointer ${attemptedMutations?.[id]?.[idx] ? "alternateAllele " : ""} pt-[5px] font-bold  ${
                      hintsEnabled &&
                      phase === 10 &&
                      alternateIsError(
                        id,
                        idx,
                        !!attemptedMutations?.[id]?.[idx],
                      )
                        ? " bg-orange-300 hover:bg-orange-500 focus-visible:bg-orange-500"
                        : " hover:bg-primaryGreen/50 focus-visible:bg-primaryGreen/50 "
                    } `
                  : `block pt-[5px] font-bold ${phase === 10 && attemptedMutations?.[id]?.[idx] ? "alternateAllele " : ""} ${phase > 10 && attemptedMutations?.[id]?.[idx] ? "alternateAllele" : ""}`
            }
            style={
              phase === 9 || phase === 9.5
                ? {
                    color: attemptedFalseMutations?.[id]?.[idx]
                      ? "darkorange"
                      : "black",
                    opacity:
                      phase === 9.5
                        ? attemptedFalseMutations?.[id]?.[idx]
                          ? "100%"
                          : "100%"
                        : "100%",
                    WebkitTextStroke:
                      attemptedFalseMutations?.[id]?.[idx] &&
                      hintsEnabled &&
                      !((id === 4 && idx === 6) || (id === 19 && idx === 13))
                        ? ".75px black"
                        : "",
                  }
                : phase >= 10
                  ? {
                      WebkitTextStrokeColor: "black",
                      opacity:
                        (text[0] === "T" && [1, 8, 13].includes(idx)) ||
                        (text[0] === "A" && [3, 6, 11].includes(idx))
                          ? "100%"
                          : "100%",
                    }
                  : {}
            }
          >
            {phase >= 9.5
              ? id === 4 && idx === 6 && questions[3] === 0
                ? "A"
                : id === 19 && idx === 13 && questions[4] === 0
                  ? "A"
                  : el
              : el}
          </span>
        );
      })}
    </ol>
  );
}
