import {
  currentVersionAtom,
  partFiveCompletionAtom,
  partTwoAverageDeducedAtom,
  partTwoCompletionAtom,
  partTwoInfectionsAtom,
  phase1Atom,
  selectedInfectionIndexAtom,
  VERSION_CONTROL,
  versionControlAtom,
} from "@/data/Interactives/interactiveStore";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import ControlPanelWrapper from "../../Shared/ControlPanel/ControlPanelWrapper";
import PrimaryButton from "../../Shared/ControlPanel/PrimaryButton";
import { resetConfirmOpenAtom } from "../../Shared/ControlPanel/ResetModal";
import {
  attemptedInputAtom,
  incorrectGuessCountAtom,
} from "./PartTwoInfectionTable";
import { partFiveQuestionAtom } from "../PartFive/PartFive";
import { atomWithStorage, RESET } from "jotai/utils";
import { useCallback, useEffect } from "react";
import { currentNextCallbackAtom } from "../../Shared/ControlPanel/InteractiveControlPanel";
import { currentView1Atom } from "../../Shared/InteractiveViewer/InteractiveViewer";
import { p2QuestionAnsweredAtom, p2TextIsShownAtom } from "./PartTwo";

const P2CurrentVersionAtom = atomWithStorage("P2CurrentVersionAtom", "1.1.1");
export const p2ResetAtom = atom<null | (() => void)>(null);

export default function PartTwoControlPanel() {
  const [phase, setPhase] = useAtom(phase1Atom);
  const [completion, setCompletion] = useAtom(partTwoCompletionAtom);
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
  const [activeIndex, setActiveIndex] = useAtom(selectedInfectionIndexAtom);
  const [partTwoInfections, setPartTwoInfections] = useAtom(
    partTwoInfectionsAtom
  );
  const [attemptedInput, setAttemptedInput] = useAtom(attemptedInputAtom);
  const setIncorrectGuessCount = useSetAtom(incorrectGuessCountAtom);
  const [partTwoAverageDeduced, setPartTwoAverageDeduced] = useAtom(
    partTwoAverageDeducedAtom
  );
  const [partFiveQuestion, setPartFiveQuestion] = useAtom(partFiveQuestionAtom);
  const [oartFiveCompletion, setPartFiveCompletion] = useAtom(
    partFiveCompletionAtom
  );
  const [currentVersion, setCurrentVersion] = useAtom(P2CurrentVersionAtom);
  const setCurrentNextCallback = useSetAtom(currentNextCallbackAtom);
  const [currentView, setCurrentView] = useAtom(currentView1Atom);
  const [p2QuestionAnswered, setP2QuestionAnswered] = useAtom(
    p2QuestionAnsweredAtom
  );
  const [textIsShown, setTextIsShown] = useAtom(p2TextIsShownAtom);
  const resetCallback = useCallback(() => {
    setP2QuestionAnswered(RESET);
    setTextIsShown(RESET);
    setPartFiveCompletion(RESET);
    setPartFiveQuestion(null);
    setIncorrectGuessCount(0);
    setAttemptedInput("");
    setCompletion({
      1: false,
      2: false,
    });
    setPartTwoAverageDeduced(false);
    // setPhase(1);
    // setCurrentView({ ...currentView, phase: 0, section: 2 });
    setActiveIndex(0);
    let newInfections = new Array(10).fill(0).map((el, idx) => {
      return null;
    });
    setPartTwoInfections(newInfections);
  }, []);

  const setReset = useSetAtom(p2ResetAtom);

  useEffect(() => {
    if (resetCallback) {
      setReset(() => () => resetCallback());
    }
  }, []);

  useEffect(() => {
    let x = localStorage.getItem("P2CurrentVersionAtom");
    if (JSON.parse(x) !== VERSION_CONTROL) {
      setCurrentVersion(VERSION_CONTROL);
      resetCallback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function isDisabled(phase: number) {
    if (phase === 0) {
      return false;
    }
    if (phase === 1) {
      if (partTwoInfections[activeIndex] !== null) {
        return false;
      }
      // if (partTwoInfections.includes(null)) {
      //   return true;
      // } else {
      //   return false;
      // }
    } else if (phase === 2 && partTwoAverageDeduced) {
      return false;
    } else if (phase === 3) {
      if (textIsShown) {
        return false;
      }
    }
    return true;
  }

  function handleClick(phase: number) {
    console.log("handleClick2");

    const getNextIndex = function () {
      for (let i = 0; i < partTwoInfections.length; i++) {
        if (partTwoInfections[i] === null || partTwoInfections[i] === 0) {
          return i;
        } else {
          continue;
        }
      }
      return null;
    };
    if (phase === 1) {
      let z = getNextIndex();
      if (z !== null) {
        setActiveIndex(z);
        return;
      }
    } else if (phase === 3) {
      setCompletion({ ...completion, [phase]: true });
      setCurrentView({ ...currentView, phase: 0, section: 3 });
      return;
    }
    setCompletion({
      ...completion,
      [phase]: true,
    });
    // setPhase(phase + 1);
    setCurrentView({ ...currentView, phase: currentView.phase + 1 });
  }

  function getText() {
    if (phase === 2) {
      return "Finish";
    }
    return "Next";
  }

  useEffect(() => {
    if (currentView.section === 2 && currentView.module === "2.6") {
      setCurrentNextCallback(() =>
        isDisabled(phase)
          ? null
          : () => {
              if (!isDisabled(phase)) {
                handleClick(phase);
              }
            }
      );
    }
    // return () => {
    //   setCurrentNextCallback(null);
    // };
  }, [
    phase,
    completion,
    activeIndex,
    partTwoInfections,
    partTwoAverageDeduced,
    textIsShown,
    currentView,
  ]);

  return null;

  return (
    <ControlPanelWrapper resetCallback={resetCallback} fixed={true}>
      <div className="mx-auto flex max-w-6xl justify-between">
        {phase === 1 ? (
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
              setPhase(phase - 1);
            }}
            className="bg-primaryGreen text-white"
            text="Back"
            disabled={phase === 1}
          />
        )}
        {phase < 3 && (
          <PrimaryButton
            callback={() => {
              if (!isDisabled(phase)) {
                handleClick(phase);
              }
            }}
            className={`${
              getText() === "Finish" ? "bg-primaryBlue" : "bg-primaryGreen"
            } text-white`}
            text={getText()}
            disabled={isDisabled(phase)}
          />
        )}
      </div>
    </ControlPanelWrapper>
  );
}
