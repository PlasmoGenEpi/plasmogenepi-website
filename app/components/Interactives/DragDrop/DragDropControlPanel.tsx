import { useAtom, useAtomValue } from "jotai";
import ControlPanelWrapper from "../Shared/ControlPanel/ControlPanelWrapper";
import {
  dragDropCompletionAtom,
  dragDropQuestionsAtom,
  hintsEnabledAtom,
  phaseAtom,
  reads2Atom,
  readsAtom,
  VERSION_CONTROL,
} from "@/data/Interactives/interactiveStore";
import { MutableRefObject, useCallback, useEffect } from "react";
import { resetConfirmOpenAtom } from "../Shared/ControlPanel/ResetModal";
import PrimaryButton from "../Shared/ControlPanel/PrimaryButton";
import { atomWithStorage, RESET } from "jotai/utils";
import { readsValid } from "./helpers";
import { chimaeraReadAtom } from "./DragDropElements/ReadsContainer";
import { chimaeraPlacedAtom } from "./DragDropElements/ReferenceGenome";
import {
  attemptedFalseMutationsAtom,
  attemptedMutationsAtom,
} from "./DragDropElements/Read";

const handleAttemptedMutations = function (attemptedMutations: {
  [key: number]: {
    [key: number]: boolean | undefined;
  };
}) {
  for (let k in attemptedMutations) {
    let mutations = attemptedMutations[k];

    if (k === "3" || k === "16") {
      for (let j in mutations) {
        if ((mutations[j] && j !== "8") || !mutations?.[8]) {
          return false;
        }
      }
    } else if (k === "4" || k === "8" || k === "11") {
      for (let j in mutations) {
        if (
          (mutations[j] && !["1", "8", "13"].includes(j)) ||
          mutations?.[1] ||
          mutations?.[8] ||
          mutations?.[13]
        ) {
          return false;
        }
      }
    } else if (k === "1" || k === "6" || k === "14" || k === "19") {
      for (let j in mutations) {
        if (
          (mutations[j] && !["3", "6", "11"].includes(j)) ||
          mutations?.[3] ||
          mutations?.[6] ||
          mutations?.[11]
        ) {
          return false;
        }
      }
    } else if (mutations) {
      for (let j in mutations) {
        if (mutations[j]) {
          return false;
        }
      }
    } else {
      console.log("shouldnt get here");
      throw {
        error: "handleAttemptedMutations",
      };
    }
  }
  return true;
};

export const DragDropCurrentVersionAtom = atomWithStorage(
  "DragDropCurrentVersionAtom",
  "1.1.1",
);

export const alternateIsError = function (
  id: number,
  idx: number,
  bool: boolean,
) {
  if (id === 3 || id === 16) {
    return idx === 8 ? !bool : bool;
  } else if (id === 4 || id === 8 || id === 11) {
    return [1, 8, 13].includes(idx) ? !bool : bool;
  } else if (id === 1 || id === 6 || id === 14 || id === 19) {
    return [3, 6, 11].includes(idx) ? !bool : bool;
  }

  return bool;
};

export default function DragDropControlPanel({
  scrollRef,
}: {
  scrollRef: MutableRefObject<null | HTMLDivElement>;
}) {
  const [phase, setPhase] = useAtom(phaseAtom);
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
  const [completion, setCompletion] = useAtom(dragDropCompletionAtom);
  const [reads, setReads] = useAtom(readsAtom);
  const [questions, setQuestions] = useAtom(dragDropQuestionsAtom);
  const [reads2, setReads2] = useAtom(reads2Atom);
  const [chimaeraRead, setChimaeraRead] = useAtom(chimaeraReadAtom);
  const [chimaeraPlaced, setChimaeraPlaced] = useAtom(chimaeraPlacedAtom);
  const [attemptedFalseMutations, setAttemptedFalseMutations] = useAtom(
    attemptedFalseMutationsAtom,
  );
  const [attemptedMutations, setAttemptedMutations] = useAtom(
    attemptedMutationsAtom,
  );
  const [hintsEnabled, setHintsEnabled] = useAtom(hintsEnabledAtom);
  const [currentVersion, setCurrentVersion] = useAtom(
    DragDropCurrentVersionAtom,
  );

  useEffect(() => {
    let x = localStorage.getItem("DragDropCurrentVersionAtom");
    if (x === null || JSON.parse(x) !== VERSION_CONTROL) {
      setCurrentVersion(VERSION_CONTROL);
      resetCallback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if ([5, 9].includes(phase)) {
      scrollRef.current?.scrollTo(0, 0);
      window.scrollTo(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const resetCallback = useCallback(() => {
    setHintsEnabled(false);
    setAttemptedMutations(RESET);
    setAttemptedFalseMutations(RESET);
    setChimaeraRead(RESET);
    setChimaeraPlaced(RESET);
    setCompletion(RESET);
    setReads(RESET);
    setQuestions(RESET);
    setPhase(1);
    setReads2(RESET);
    window.scrollTo(0, 0);
    scrollRef.current?.scrollTo(0, 0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDisabled = function (): boolean {
    if (phase < 3) {
      return false;
    } else if (phase === 3) {
      return !readsValid(reads, 1);
    } else if (phase === 4) {
      return questions[2] !== 1;
    } else if (phase === 5) {
      return false;
    } else if (phase === 6) {
      return !readsValid(reads2.slice(0, 10), 2);
    } else if (phase === 7) {
      return !readsValid(reads2, 2);
    } else if (phase === 7.5) {
      return !(
        Array.isArray(questions[0]) &&
        questions[0].includes(1) &&
        questions[0].includes(2) &&
        !questions[0].includes(0)
      );
    } else if (phase === 8) {
      return !chimaeraPlaced;
    } else if (phase === 9) {
      for (let k in attemptedFalseMutations) {
        let mutations = attemptedFalseMutations[k];

        for (let j in mutations) {
          if (mutations[j] === true) {
            if ((j === "6" && k === "4") || (j === "13" && k === "19")) {
            } else {
              return true;
            }
          }
        }
      }
      return !(
        !!attemptedFalseMutations?.[4]?.[6] &&
        !!attemptedFalseMutations?.[19]?.[13]
      );
    } else if (phase === 9.5) {
      return questions[4] !== 0;
    } else if (phase === 10) {
      for (let id = 1; id <= 20; id++) {
        for (let i = 0; i < 15; i++) {
          if (alternateIsError(id, i, !!attemptedMutations?.[id]?.[i])) {
            return true;
          }
        }
      }
      return false;
    } else if (phase === 10.5) {
      return questions[6] !== 2;
    } else if (phase === 11) {
      return questions[7] !== 2;
    }
    return true;
  };

  const handleClick = function () {
    if (phase < 5) {
      if (completion[7]) {
        setPhase(7.5);
      } else if (completion[6]) {
        setPhase(7);
      } else if (completion[5]) {
        setPhase(6);
      } else if (completion[4]) {
        setPhase(5);
      } else {
        setPhase(phase + 1);
        setCompletion({ ...completion, [phase]: true });
      }
    } else if (phase === 7) {
      setPhase(7.5);
      setCompletion({ ...completion, 7: true });
    } else if (phase === 7.5) {
      setPhase(8);
      setCompletion({ ...completion, 7.5: true });
    } else if (phase === 8) {
      if (completion[9]) {
        setPhase(9.5);
      } else {
        setPhase(phase + 1);
        setCompletion({ ...completion, 8: true });
      }
    } else if (phase === 9) {
      setCompletion({ ...completion, 9: true });
      setPhase(9.5);
    } else if (phase === 9.5) {
      if (completion[10]) {
        setPhase(10.5);
      } else {
        setCompletion({ ...completion, 9.5: true });
        setPhase(10);
      }
    } else if (phase === 10) {
      setPhase(10.5);
      setCompletion({ ...completion, 10: true });
    } else if (phase === 10.5) {
      setPhase(11);
      setCompletion({ ...completion, 10.5: true });
    } else {
      setCompletion({ ...completion, [phase]: true });
      setPhase(phase + 1);
    }
  };

  const getText = () => {
    if (phase === 1 || phase === 2 || phase === 5 || phase === 6) {
      return "Run";
    }
    if (phase === 11) {
      return "Finish";
    }
    return "Next";
  };

  return (
    <ControlPanelWrapper fixed resetCallback={resetCallback}>
      <div className="mx-auto flex max-w-6xl justify-end">
        <div className="-translate-y-2">
          <label htmlFor="hints" className="mr-4 text-white">
            Enable Hints
          </label>
          <input
            onChange={(e) => {
              setHintsEnabled(!hintsEnabled);
            }}
            checked={hintsEnabled}
            id="hints"
            className="mb-1"
            type="checkbox"
          />
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl justify-between">
        {phase <= 4 ? (
          <PrimaryButton
            first
            callback={() => {
              setResetConfirmOpen(true);
            }}
            disabled={resetConfirmOpen}
            className="bg-orange-500 text-white"
            text="Reset"
          />
        ) : (
          <PrimaryButton
            first
            callback={() => {
              if (phase >= 5 && phase <= 7.5) {
                setPhase(4);
              } else if (phase === 11) {
                setPhase(10.5);
              } else if (phase === 10.5) {
                setPhase(9.5);
              } else if (phase === 10) {
                setPhase(9.5);
              } else if (phase === 9.5) {
                setPhase(8);
              } else if (phase === 8) {
                setPhase(7.5);
              } else if (phase === 7.5) {
                setPhase(7);
              } else {
                setPhase(phase - 1);
              }
            }}
            className="bg-primaryGreen text-white"
            text="Back"
            disabled={phase === 1}
          />
        )}
        {phase < 14 && (
          <PrimaryButton
            callback={() => {
              if (!isDisabled()) {
                handleClick();
              }
            }}
            className={`${getText() === "Finish" ? "bg-primaryBlue" : "bg-primaryGreen"} text-white`}
            text={getText()}
            disabled={isDisabled()}
          />
        )}
      </div>
    </ControlPanelWrapper>
  );
}
