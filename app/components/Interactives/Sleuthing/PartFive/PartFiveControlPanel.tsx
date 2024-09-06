import {
  currentVersionAtom,
  partFiveCompletionAtom,
  phaseAtom,
  selectedInfectionIndexAtom,
  VERSION_CONTROL,
  versionControlAtom,
} from "@/data/Interactives/interactiveStore";
import ControlPanelWrapper from "../../Shared/ControlPanel/ControlPanelWrapper";
import { useAtom, useAtomValue } from "jotai";
import { resetConfirmOpenAtom } from "../../Shared/ControlPanel/ResetModal";
import PrimaryButton from "../../Shared/ControlPanel/PrimaryButton";
import { atomWithStorage, RESET } from "jotai/utils";
import { partFiveQuestionAtom } from "./PartFive";
import { useCallback, useEffect, useState } from "react";

const P5CurrentVersionAtom = atomWithStorage("P5CurrentVersionAtom", "1.1.1");

export default function PartFiveControlPanel() {
  const [phase, setPhase] = useAtom(phaseAtom);
  const [completion, setCompletion] = useAtom(partFiveCompletionAtom);
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
  const [activeIndex, setActiveIndex] = useAtom(selectedInfectionIndexAtom);
  const [question, setQuestion] = useAtom(partFiveQuestionAtom);
  const [slidoPause, setSlidoPause] = useState(false);
  const [currentVersion, setCurrentVersion] = useAtom(P5CurrentVersionAtom);

  const resetCallback = useCallback(() => {
    setSlidoPause(false);
    setQuestion(null);
    setActiveIndex(0);
    setCompletion(RESET);
    setPhase(1);
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
    if (phase === 13) {
      return question !== 2;
    }
    return slidoPause;
  }

  function handleClick(phase: number) {
    setCompletion({ ...completion, [phase]: true });
    setPhase(phase + 1);
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
            className={`${getText() === "Finish" ? "bg-primaryBlue" : "bg-primaryGreen"} text-white`}
            text={getText()}
            disabled={isDisabled(phase)}
          />
        )}
      </div>
    </ControlPanelWrapper>
  );
}
