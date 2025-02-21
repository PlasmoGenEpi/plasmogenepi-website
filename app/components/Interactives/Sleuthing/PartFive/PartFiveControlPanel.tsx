import {
  partFiveCompletionAtom,
  phase1Atom,
  selectedInfectionIndexAtom,
  VERSION_CONTROL,
  versionControlAtom,
} from "@/data/Interactives/interactiveStore";
import ControlPanelWrapper from "../../Shared/ControlPanel/ControlPanelWrapper";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { resetConfirmOpenAtom } from "../../Shared/ControlPanel/ResetModal";
import PrimaryButton from "../../Shared/ControlPanel/PrimaryButton";
import { atomWithStorage, RESET } from "jotai/utils";
import {
  p5ButtonClicked2Atom,
  p5ButtonClickedAtom,
  partFiveQuestionAtom,
} from "./PartFive";
import { useCallback, useEffect, useState } from "react";
import { currentView1Atom } from "../../Shared/InteractiveViewer/InteractiveViewer";
import { currentNextCallbackAtom } from "../../Shared/ControlPanel/InteractiveControlPanel";

const P5CurrentVersionAtom = atomWithStorage("P5CurrentVersionAtom", "1.1.1");

export const p5ResetAtom = atom<null | (() => void)>(null);

export default function PartFiveControlPanel() {
  const [currentView, setCurrentView] = useAtom(currentView1Atom);
  const [phase, setPhase] = useAtom(phase1Atom);
  const [completion, setCompletion] = useAtom(partFiveCompletionAtom);
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
  const [activeIndex, setActiveIndex] = useAtom(selectedInfectionIndexAtom);
  const [question, setQuestion] = useAtom(partFiveQuestionAtom);
  const [slidoPause, setSlidoPause] = useState(false);
  const [currentVersion, setCurrentVersion] = useAtom(P5CurrentVersionAtom);
  const [currentNextCallback, setCurrentNextCallback] = useAtom(
    currentNextCallbackAtom
  );
  const [clicked, setClicked] = useAtom(p5ButtonClickedAtom);
  const [clicked2, setClicked2] = useAtom(p5ButtonClicked2Atom);
  const setReset = useSetAtom(p5ResetAtom);

  useEffect(() => {
    if (resetCallback) {
      setReset(() => () => {
        resetCallback();
      });
    }
  }, []);

  const resetCallback = useCallback(() => {
    setClicked2(RESET);
    setSlidoPause(false);
    setClicked(RESET);
    setQuestion(null);
    setActiveIndex(0);
    setCompletion(RESET);
    // setCurrentView({ ...currentView, section: 5, phase: 0 });
  }, []);

  useEffect(() => {
    let x = localStorage.getItem("P5CurrentVersionAtom");
    if (JSON.parse(x) !== VERSION_CONTROL) {
      setCurrentVersion(VERSION_CONTROL);
      resetCallback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function isDisabled(phase: number) {
    if (phase === 0) {
      return !clicked;
    } else if (phase === 1) {
      return !clicked2;
    }
    return false;
  }

  function handleClick(phase: number) {
    console.log("handleClick5");

    if (phase === 1) {
      setCompletion({ ...completion, [phase]: true });
      setCurrentView({ ...currentView, section: 6, phase: 0 });
      return;
    }
    setCompletion({ ...completion, [phase]: true });
    setCurrentView({ ...currentView, phase: currentView.phase + 1 });
  }

  function getText() {
    if (phase !== 13) {
      return "Next";
    } else {
      return "Finish";
    }
  }

  useEffect(() => {
    let x: NodeJS.Timeout;
    if ([3, 4, 5, 6, 7, 8, 9, 12].includes(phase) && !completion[phase]) {
      setSlidoPause(true);
      x = setTimeout(() => {
        setSlidoPause(false);
      }, 4000);
    } else {
      setSlidoPause(false);
    }
    return () => {
      clearTimeout(x);
    };
  }, [phase]);

  useEffect(() => {
    // setCurrentPhaseIsComplete(completion[phase]);
    // setCurrentView({ ...currentView, section: 4, phase: 0 });
    if (currentView.section === 5 && currentView.module === "2.6") {
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
    currentView,
    activeIndex,
    question,
    clicked,
    clicked2,
  ]);

  return null;

  return (
    <ControlPanelWrapper fixed resetCallback={resetCallback}>
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
        {phase < 14 && (
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
