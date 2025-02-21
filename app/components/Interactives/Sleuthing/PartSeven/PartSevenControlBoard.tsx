import {
  hintsEnabledAtom,
  partSevenCompletionAtom,
  partSixCloneRowsMHPsAtom,
  partSixCompletionAtom,
  partSixMHPPolycloncalGenotypesAtom,
  phase2Atom,
  VERSION_CONTROL,
} from "@/data/Interactives/interactiveStore";
import ControlPanelWrapper from "../../Shared/ControlPanel/ControlPanelWrapper";
import PrimaryButton from "../../Shared/ControlPanel/PrimaryButton";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  resetConfirmOpenAtom,
  s2Reset2Atom,
} from "../../Shared/ControlPanel/ResetModal";
import { useCallback, useEffect, useState } from "react";
import { atomWithStorage, RESET } from "jotai/utils";
import {
  identicalGenotype2Atom,
  identicalGenotypeAtom,
  P6Step2QuestionsAtom,
} from "../PartSix/Phases/Genotypes";
import { selectedClonesAtom } from "./PartSeven";
import { currentView2Atom } from "../../Shared/InteractiveViewer/InteractiveViewer";

const sharedBoolArray = function (
  polyclonalArrays: number[][],
  currentRow: number[]
) {
  return polyclonalArrays.map((polyclonalArr, idx) => {
    return polyclonalArr.includes(currentRow[idx]);
  });
};

const P7CurrentVersionAtom = atomWithStorage("P7CurrentVersionAtom", "1.1.1");

export default function PartSevenControlBoard() {
  const [phase, setPhase] = useAtom(phase2Atom);
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
  const [completion, setCompletion] = useAtom(partSevenCompletionAtom);
  const [genotypes, setGenotypes] = useAtom(partSixMHPPolycloncalGenotypesAtom);
  const cloneRows = useAtomValue(partSixCloneRowsMHPsAtom);
  const [questions, setQuestions] = useAtom(P6Step2QuestionsAtom);
  const [identicalGenotype, setIdenticalGenotype] = useAtom(
    identicalGenotypeAtom
  );
  const [identicalGenotype2, setIdenticalGenotype2] = useAtom(
    identicalGenotype2Atom
  );
  const [selectedClones, setSelectedClones] = useAtom(selectedClonesAtom);
  const [slidoPause, setSlidoPause] = useState(false);
  const [hintsEnabled, setHintsEnabled] = useAtom(hintsEnabledAtom);
  const [currentVersion, setCurrentVersion] = useAtom(P7CurrentVersionAtom);
  const [currentView2, setCurrentView2] = useAtom(currentView2Atom);
  const setS2Reset2 = useSetAtom(s2Reset2Atom);

  useEffect(() => {
    setS2Reset2(() => () => {
      resetCallback();
    });
  }, []);

  useEffect(() => {
    let x = localStorage.getItem("P7CurrentVersionAtom");
    if (JSON.parse(x) !== VERSION_CONTROL) {
      setCurrentVersion(VERSION_CONTROL);
      resetCallback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let x: NodeJS.Timeout;
    if ([12, 16, 17].includes(phase) && !completion[phase]) {
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

  function isDisabled() {
    if (completion[phase]) {
      return false;
    }
    if (phase < 4) {
      return false;
    }

    if (phase === 4) {
      let x = cloneRows[1].vals.map((el, idx) => {
        return [el, cloneRows[2].vals[idx]] as unknown as number[];
      });
      let z = sharedBoolArray(x, cloneRows[3].vals as number[]);
      for (let i = 0; i < z.length; i++) {
        if (z[i] !== genotypes["[1,2]"][i]) {
          return true;
        }
      }
      return false;
    }

    if (phase === 5) {
      return questions[3] !== 0;
    }

    if (phase === 6) {
      let x = cloneRows[2].vals.map((el, idx) => {
        return [el, cloneRows[3].vals[idx]] as unknown as number[];
      });
      let z = sharedBoolArray(x, cloneRows[1].vals as number[]);
      for (let i = 0; i < z.length; i++) {
        if (z[i] !== genotypes["[2,3]"][i]) {
          return true;
        }
      }
      return false;
    }

    if (phase === 7) {
      return questions[6] !== 0;
    }

    if (phase === 8) {
      return questions[7] !== 2;
    }

    if (phase === 9) {
      return !(
        !questions[8][0] &&
        questions[8][1] &&
        questions[8][2] &&
        questions[8][3]
      );
    }

    if (phase === 10) {
      if (identicalGenotype.includes(false)) {
        return true;
      }
      return false;
    }

    if (phase === 11) {
      return questions[11] !== 12;
    }

    if (phase === 12) {
      return slidoPause;
    }
    if (phase === 13) {
      return !(
        Object.values(selectedClones).includes(1) &&
        Object.values(selectedClones).includes(6)
      );
    }

    if (phase === 14) {
      return identicalGenotype2.includes(false);
    }

    if (phase === 15) {
      return questions[13] !== 12;
    }

    // if (phase === 14) {
    //   return !(
    //     Object.values(selectedClones).includes(1) &&
    //     Object.values(selectedClones).includes(4)
    //   );
    // }

    return slidoPause;
  }

  function handleClick() {
    if (phase === 3) {
      if (completion[4]) {
        setPhase(5);
        return;
      }
    } else if (phase === 5) {
      if (completion[6]) {
        setPhase(7);
        return;
      }
    } else if (phase === 9) {
      if (completion[10]) {
        setPhase(11);
        return;
      }
    } else if (phase === 13) {
      if (completion[14]) {
        setPhase(15);
        return;
      }
    }
    setCompletion({ ...completion, [phase]: true });
    setPhase(phase + 1);
  }

  const resetCallback = useCallback(() => {
    setHintsEnabled(false);
    setSelectedClones({
      1: null,
      2: null,
    });
    setIdenticalGenotype(RESET);
    setIdenticalGenotype2(RESET);

    setQuestions(RESET);
    setCompletion(RESET);
    setGenotypes(RESET);
    // setPhase(1);
    setCurrentView2({
      ...currentView2,
      section: 2,
      phase: 0,
    });
  }, []);

  return null;

  return (
    <ControlPanelWrapper fixed resetCallback={resetCallback}>
      <div className="mx-auto max-w-6xl">
        {phase !== 18 && (
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
        )}
        {/* <div className="mx-auto flex max-w-6xl justify-end">
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
        </div> */}
        <div className="flex justify-between">
          {phase === 1 ? (
            <PrimaryButton
              type="button"
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
              type="button"
              first
              callback={() => {
                if (phase === 15) {
                  setPhase(13);
                  return;
                } else if (phase === 11) {
                  setPhase(9);
                  return;
                } else if (phase === 7) {
                  setPhase(5);
                  return;
                } else if (phase === 5) {
                  setPhase(3);
                  return;
                }
                setPhase(phase - 1);
                // if (phase === 5) {
                //   setActivePairwiseCombo([1, 3]);
                // } else if (phase === 4) {
                //   setActivePairwiseCombo([1, 2]);
                // } else if (phase === 11) {
                //   setActivePairwiseMHPsCombo([1, 3]);
                // } else if (phase === 10) {
                //   setActivePairwiseMHPsCombo([1, 2]);
                // }
                // if (phase >= 9 && phase <= 11) {
                //   setPhase(8);
                // } else {
                //   setPhase(phase - 1);
                // }
              }}
              className="bg-primaryGreen text-white"
              text="Back"
              disabled={phase === 1}
            />
          )}{" "}
          {phase !== 18 && (
            <PrimaryButton
              type="button"
              first
              callback={() => {
                handleClick();
              }}
              className={`text-white ${
                phase === 17 ? "bg-primaryBlue" : "bg-primaryGreen"
              }`}
              text={phase === 17 ? "Finish" : "Next"}
              disabled={isDisabled()}
            />
          )}
        </div>
      </div>
    </ControlPanelWrapper>
  );
}
