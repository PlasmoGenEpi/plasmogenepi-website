import { useAtom, useAtomValue } from "jotai";
// import { charSize } from "./Container";
import {
  dragDropCompletionAtom,
  dragDropQuestionsAtom,
  hintsEnabledAtom,
  phase3Atom,
  reads2Atom,
  ReadType,
} from "@/data/Interactives/interactiveStore";
import { useCallback, useEffect } from "react";
import { atomWithStorage, RESET } from "jotai/utils";
import { alternateIsError } from "../DragDropControlPanel";
import {
  currentView3Atom,
  InteractiveViewSettings,
} from "../../Shared/InteractiveViewer/InteractiveViewer";

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
  currentView,
  mutations,
  falseMutations,
  id,
  idx,
}: {
  id?: number;
  idx?: number;
  read?: ReadType;
  currentView: InteractiveViewSettings;
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
  if (currentView.section === 1 && read) {
    if (read.text[0] === "T") {
      return read.charStart !== 3;
    } else if (read.text[0] === "A") {
      return read.charStart !== 32;
    }
  } else if (currentView.section === 2 && read) {
    if ([2, 3, 4, 8, 11, 12, 15, 16, 18].includes(read.id)) {
      return read.charStart !== 3;
    } else if ([1, 5, 6, 9, 10, 13, 14, 19].includes(read.id)) {
      return read.charStart !== 32;
    } else if ([7, 17, 20].includes(read.id)) {
      return typeof read.trash !== "number";
    }
  } else if (currentView.section === 3 && falseMutations) {
    if (id !== 4 && idx !== 6) {
      return true;
    }
  }
}

export default function Read({ text, id }: { text: string; id: number }) {
  // const phase = useAtomValue(phase3Atom);
  const [completion, setCompletion] = useAtom(dragDropCompletionAtom);
  const [attemptedFalseMutations, setAttemptedFalseMutations] = useAtom(
    attemptedFalseMutationsAtom,
  );
  const [attemptedMutations, setAttemptedMutations] = useAtom(
    attemptedMutationsAtom,
  );
  const hintsEnabled = useAtomValue(hintsEnabledAtom);
  const questions = useAtomValue(dragDropQuestionsAtom);
  const currentView = useAtomValue(currentView3Atom);
  const { phase, section } = currentView;

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
      className="inline-block text-center text-xl"
    >
      {text.split("").map((el, idx) => {
        return (
          <span
            onKeyDown={
              section === 2 && phase === 2 && !completion?.[2]?.[2]
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleFalseMutations(id, idx);
                    }
                  }
                : section === 3 && phase === 0 && !completion?.[3]?.[0]
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleMutations(id, idx);
                    }
                  }
                : undefined
            }
            onClick={
              section === 2 && phase === 2 && !completion?.[2]?.[2]
                ? () => {
                    handleFalseMutations(id, idx);
                  }
                : section === 3 && phase === 0 && !completion?.[3]?.[0]
                ? () => {
                    handleMutations(id, idx);
                  }
                : undefined
            }
            tabIndex={
              (section === 2 && phase === 2 && !completion?.[2]?.[2]) ||
              (section === 3 && phase === 0 && !completion?.[3]?.[0])
                ? 0
                : undefined
            }
            key={idx}
            role={
              (section === 2 && phase === 2 && !completion?.[2]?.[2]) ||
              (section === 3 && phase === 0 && !completion?.[3]?.[0])
                ? "button"
                : undefined
            }
            className={
              section === 2 && phase === 2 && !completion?.[2]?.[2]
                ? `${
                    (attemptedFalseMutations?.[id]?.[idx] &&
                      hintsEnabled &&
                      !(
                        (id === 4 && idx === 6) ||
                        (id === 19 && idx === 13)
                      )) ||
                    (!attemptedFalseMutations?.[id]?.[idx] &&
                      hintsEnabled &&
                      ((id === 4 && idx === 6) || (id === 19 && idx === 13)))
                      ? "underline decoration-red-500 underline-offset-2 [text-decoration-thickness:4px] dark:decoration-red-500"
                      : "hover:bg-[darkorange]/20 focus-visible:bg-[#1d4ed8]/20"
                  } font-bold/ dark:font-normal/ pointer-events-auto block cursor-pointer pt-[5px]`
                : section === 3 && phase === 0 && !completion?.[3]?.[0]
                ? `pointer-events-auto block cursor-pointer ${
                    attemptedMutations?.[id]?.[idx] ? "alternateAllele2 " : ""
                  } font-bold/ dark:font-normal/ pt-[5px]   ${
                    hintsEnabled &&
                    section === 3 &&
                    phase === 0 &&
                    alternateIsError(id, idx, !!attemptedMutations?.[id]?.[idx])
                      ? " underline decoration-red-500 underline-offset-2 [text-decoration-thickness:4px] dark:decoration-red-500"
                      : " hover:bg-interactiveBlue/20 focus-visible:bg-interactiveBlue/20 "
                  } `
                : `block pt-[5px]  ${
                    section === 3 && phase === 2 && questions[7] === 2
                      ? "text-black delay-500 duration-0"
                      : ""
                  } ${
                    section === 3 &&
                    phase === 0 &&
                    attemptedMutations?.[id]?.[idx]
                      ? "alternateAllele2 dark:font-bold"
                      : ""
                  } ${
                    section === 3 &&
                    phase > 0 &&
                    attemptedMutations?.[id]?.[idx]
                      ? `${
                          section === 3 && phase === 2 && questions[7] === 2
                            ? "alternateAllele font-bold dark:font-bold"
                            : "alternateAllele2 font-bold dark:font-bold"
                        }`
                      : ""
                  }`
            }
            style={
              (section === 2 && (phase === 2 || phase === 3)) || phase === 9.5
                ? {
                    color: attemptedFalseMutations?.[id]?.[idx]
                      ? "darkorange"
                      : "",
                    opacity:
                      phase === 9.5
                        ? attemptedFalseMutations?.[id]?.[idx]
                          ? "100%"
                          : "100%"
                        : "100%",
                    // WebkitTextStroke:
                    //   attemptedFalseMutations?.[id]?.[idx] &&
                    //   hintsEnabled &&
                    //   !((id === 4 && idx === 6) || (id === 19 && idx === 13))
                    //     ? ".75px black"
                    //     : "",
                  }
                : section === 3
                ? {
                    // WebkitTextStrokeColor: "black",
                    opacity:
                      (text[0] === "T" && [1, 8, 13].includes(idx)) ||
                      (text[0] === "A" && [3, 6, 11].includes(idx))
                        ? "100%"
                        : "100%",
                  }
                : {}
            }
          >
            {(section === 2 && phase === 3) || (section && section > 2)
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
