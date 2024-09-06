import {
  currentVersionAtom,
  partEightCompletionAtom,
  partEightDiamondPairViewedAtom,
  partEightDiamondPersonPair,
  partEightDiamondPersonPairAtom,
  partEightMOIInputsAtom,
  partEightPentagonPairViewedAtom,
  partEightPentagonPersonPairAtom,
  partEightPentagonQuestionsAtom,
  partEightPentagonSelectedEdgesAtom,
  partEightQuestionsAtom,
  phaseAtom,
  VERSION_CONTROL,
  versionControlAtom,
} from "@/data/Interactives/interactiveStore";
import ControlPanelWrapper from "../../Shared/ControlPanel/ControlPanelWrapper";
import { atom, useAtom, useAtomValue } from "jotai";
import { resetConfirmOpenAtom } from "../../Shared/ControlPanel/ResetModal";
import PrimaryButton from "../../Shared/ControlPanel/PrimaryButton";
import {
  attemptedMOIInputAtom1,
  attemptedMOIInputAtom2,
  attemptedMOIInputAtom3,
  attemptedMOIInputAtom4,
  attemptedMOIInputAtom5,
} from "./Genotypes/InputMOI";
import { atomWithStorage, RESET } from "jotai/utils";
import {
  checkEdges,
  queuedChangeAtom,
  successQueueAtom,
} from "./Phases/PentagonComparisons";
import {
  edgeAnswers,
  edgeCorrectionsAtom,
  // checkPentagonValid,
  // handlePentagonProgression,
  // nextPentagonValid,
  // pentagonAtom,
  pentagonViewAtom,
} from "./Pentagon/PentagonViewer";
import { isValid } from "./Pentagon/PentagonProgressButton";
import { Edge } from "./Pentagon";
import { specialEdgeHandledAtom } from "./Pentagon3";
import { GIViewAtom } from "./Pentagon/PentagonCorrections";
import { useCallback, useEffect } from "react";

export const slidoPauseAtom = atom(false);

const P8CurrentVersionAtom = atomWithStorage("P8CurrentVersionAtom", "1.1.1");

export default function PartEightControlPanelWrapper({
  fixed,
}: {
  fixed: boolean;
}) {
  const [phase, setPhase] = useAtom(phaseAtom);
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
  const [completion, setCompletion] = useAtom(partEightCompletionAtom);
  const [MOIInputs, setMOIInputs] = useAtom(partEightMOIInputsAtom);
  const [attemptedInput1, setAttemptedInput1] = useAtom(attemptedMOIInputAtom1);
  const [attemptedInput2, setAttemptedInput2] = useAtom(attemptedMOIInputAtom2);
  const [attemptedInput3, setAttemptedInput3] = useAtom(attemptedMOIInputAtom3);
  const [attemptedInput4, setAttemptedInput4] = useAtom(attemptedMOIInputAtom4);
  const [attemptedInput5, setAttemptedInput5] = useAtom(attemptedMOIInputAtom5);
  const [diamondEdge, setDiamondEdge] = useAtom(partEightDiamondPersonPairAtom);
  const [personPairTwo, setPersonPairTwo] = useAtom(
    partEightPentagonPersonPairAtom,
  );
  const [specialEdgeHandled, setSpecialEdgeHandled] = useAtom(
    specialEdgeHandledAtom,
  );
  const [corrections, setEdgeCorrections] = useAtom(edgeCorrectionsAtom);

  const [questions, setQuestions] = useAtom(partEightQuestionsAtom);
  const [viewedDiamond, setViewedDiamond] = useAtom(
    partEightDiamondPairViewedAtom,
  );
  // const [viewedPentagon, setViewedPentagon] = useAtom(
  //   partEightPentagonPairViewedAtom,
  // );
  const [selectedEdges, setSelectedEdges] = useAtom(
    partEightPentagonSelectedEdgesAtom,
  );
  const [queuedChange, setQueuedChange] = useAtom(queuedChangeAtom);
  const [successQueue, setSuccessQueue] = useAtom(successQueueAtom);
  const [pentagonView, setPentagonView] = useAtom(pentagonViewAtom);
  const [pentagonQuestions, setPentagonQuestions] = useAtom(
    partEightPentagonQuestionsAtom,
  );
  const [GIView, setGIView] = useAtom(GIViewAtom);
  const [currentVersion, setCurrentVersion] = useAtom(P8CurrentVersionAtom);
  const [slidoPause, setSlidoPause] = useAtom(slidoPauseAtom);

  const resetCallback = useCallback(() => {
    setSelectedEdges(RESET);
    setPentagonQuestions(RESET);
    setGIView(false);
    setPentagonQuestions(RESET);
    setEdgeCorrections([]);
    setSpecialEdgeHandled(false);
    setPentagonView(null);
    setQueuedChange(null);
    setSuccessQueue(null);
    setSelectedEdges(RESET);
    setViewedDiamond(RESET);
    // setViewedPentagon(RESET);
    setCompletion(RESET);
    setPhase(1);
    setMOIInputs(RESET);
    setAttemptedInput1("");
    setAttemptedInput2("");
    setAttemptedInput3("");
    setAttemptedInput4("");
    setAttemptedInput5("");
    setQuestions(RESET);
    setPersonPairTwo({
      1: null,
      2: null,
    });
  }, []);

  useEffect(() => {
    let x = localStorage.getItem("P8CurrentVersionAtom");
    if (JSON.parse(x) !== VERSION_CONTROL) {
      setCurrentVersion(VERSION_CONTROL);
      resetCallback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let x: NodeJS.Timeout;
    setSlidoPause(false);
    if (
      !completion[phase] &&
      [4].includes(phase) &&
      MOIInputs["A"] &&
      MOIInputs["B"] &&
      MOIInputs["C"] &&
      MOIInputs["D"]
    ) {
      setSlidoPause(true);
      x = setTimeout(() => {
        setSlidoPause(false);
      }, 4000);
    } else if (
      ([8, 11, 13, 25, 26, 27, 28, 29, 30, 31, 32, 33].includes(phase) &&
        !completion[phase]) ||
      (phase === 19 && GIView && !completion[phase])
    ) {
      setSlidoPause(true);
      x = setTimeout(() => {
        setSlidoPause(false);
      }, 4000);
    }
    return () => {
      clearTimeout(x);
    };
  }, [MOIInputs, phase, GIView]);

  // const [pentagon, setPentagon] = useAtom(pentagonAtom);

  function isDisabled(phase: number) {
    if (phase === 4) {
      if (
        !completion[phase] &&
        [4].includes(phase) &&
        MOIInputs["A"] &&
        MOIInputs["B"] &&
        MOIInputs["C"] &&
        MOIInputs["D"]
      ) {
        return slidoPause;
      } else {
        return !completion[phase];
      }
    } else if (phase === 5) {
      for (let k in viewedDiamond) {
        if (!viewedDiamond[k as "AB"]) {
          return true;
        }
      }
    } else if (phase === 6) {
      if (questions[2] !== 1) {
        return true;
      }
    } else if (phase === 7) {
      if (questions[3] !== 2) {
        return true;
      }
    } else if (phase === 10) {
      return Object.values(MOIInputs).includes(false);
    } else if (phase >= 11) {
      if (phase === 11) {
        return slidoPause;
      } else if (phase === 12) {
        console.log(selectedEdges.EF);
        if (selectedEdges.EF.visited && !selectedEdges.EF.enabled) {
          return false;
        } else {
          return true;
        }
      } else if (phase === 13) {
        return slidoPause;
      } else if (phase === 14) {
        return slidoPause;
      } else if (phase === 15) {
        return !isValid(["EG", "EH", "EI"], selectedEdges);
      } else if (phase === 16) {
        return !isValid(["FG", "FH", "FI"], selectedEdges);
      } else if (phase === 17) {
        return !isValid(["GH", "GI", "HI"], selectedEdges);
      } else if (phase === 18) {
        let k: Edge;
        for (k in selectedEdges) {
          let edge = selectedEdges[k];
          if (
            edge.enabled !== edgeAnswers[k].enabled ||
            edge.direction !== edgeAnswers[k].direction
          ) {
            return true;
          }
        }
        return false;
      } else if (phase === 19) {
        if (GIView) {
          return slidoPause;
        } else {
          return !completion[phase];
        }
      } else if (phase === 20) {
        return (
          !pentagonQuestions[1][1] ||
          !pentagonQuestions[1][2] ||
          pentagonQuestions[1][3]
        );
      } else if (phase === 21) {
        return pentagonQuestions[2] !== 2;
      } else if (phase === 22) {
        return pentagonQuestions[3] !== 1;
      } else if (phase >= 23 && phase < 29.5) {
        return slidoPause;
      } else if (phase === 29.5) {
        return pentagonQuestions[3] !== 1;
      } else if (phase === 36) {
        return pentagonQuestions[5] !== 8;
      } else if (phase === 37) {
        return pentagonQuestions[6] !== 4;
      } else if (phase === 38) {
        return pentagonQuestions[7] !== 3;
      } else if (phase === 39) {
        return pentagonQuestions[8] !== 1;
      } else if (phase >= 30) {
        return slidoPause;
      }
      return slidoPause;
    }
    // if (phase === 12) {
    //   if (viewedPentagon["EF"]) {
    //     return false;
    //   }
    //   return true;
    // }
    // if (phase === 14) {
    //   if (
    //     viewedPentagon["EG"] &&
    //     viewedPentagon["EH"] &&
    //     viewedPentagon["EI"]
    //   ) {
    //     return false;
    //   }
    //   return true;
    // }
    // if (phase === 16) {
    //   if (
    //     viewedPentagon["FG"] &&
    //     viewedPentagon["FH"] &&
    //     viewedPentagon["FI"]
    //   ) {
    //     return false;
    //   }
    //   return true;
    // }
    // if (phase === 18) {
    //   if (
    //     viewedPentagon["GH"] &&
    //     viewedPentagon["GI"] &&
    //     viewedPentagon["HI"]
    //   ) {
    //     return false;
    //   }
    //   return true;
    // }
    // if (phase === 20) {
    //   if (checkEdges(selectedEdges).length) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    return slidoPause;
  }

  function handleClick(phase: number) {
    if (phase === 1) {
      setPhase(4);
      setCompletion({ ...completion, 1: true });
      return;
    }
    if (phase === 10) {
      // if (completion[17]) {
      //   setPhase(18);
      //   return;
      // }
    }
    if (phase === 11) {
      setPentagonView("EF");
    } else if (phase === 12) {
      if (completion[13]) {
        setPhase(14);
        return;
      }
      setPentagonView(null);
    } else if (phase === 14) {
      setPentagonView("E");
    } else if (phase === 15) {
      setPentagonView("F");
    } else if (phase === 16) {
      setPentagonView("GHI");
    } else if (phase === 17) {
      setPentagonView(null);
    } else if (phase === 18) {
      if (specialEdgeHandled) {
        setPhase(20);
        return;
      } else {
        setPhase(19);
        return;
      }
    } else if (phase === 29) {
      setPhase(29.5);
      setCompletion({
        ...completion,
        [phase]: true,
      });
      return;
    } else if (phase === 29.5) {
      setPhase(30);
      setCompletion({ ...completion, [phase]: true });
      return;
    }
    setCompletion({
      ...completion,
      [phase]: true,
    });
    setPhase(phase + 1);
  }

  function getText() {
    if (phase === 40) {
      return "Finish";
    }
    return "Next";
  }

  return (
    <ControlPanelWrapper resetCallback={resetCallback} fixed={fixed}>
      <div>
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
        <div className="relative mx-auto flex max-w-6xl justify-between">
          {phase === 1 ? (
            <PrimaryButton
              type="button"
              first
              callback={() => {
                setResetConfirmOpen(true);
              }}
              // disabled={resetConfirmOpen || !completion[1]}
              className="bg-orange-500 text-white"
              text="Reset"
            />
          ) : (
            <PrimaryButton
              type="button"
              first
              callback={() => {
                if (phase === 4) {
                  setPhase(1);
                  return;
                }
                if (phase === 12) {
                  setPentagonView(null);
                } else if (phase === 13) {
                } else if (phase === 14) {
                  setPhase(12);
                  return;
                } else if (phase === 15) {
                  setPentagonView(null);
                } else if (phase === 16) {
                  setPentagonView("E");
                } else if (phase === 17) {
                  setPentagonView("F");
                } else if (phase === 18) {
                  setPentagonView("GHI");
                } else if (phase === 20) {
                  setPhase(18);
                  return;
                } else if (phase === 29.5) {
                  setPhase(29);
                  return;
                } else if (phase === 30) {
                  setPhase(29.5);
                  return;
                }
                setPhase(phase - 1);
              }}
              className="bg-primaryGreen text-white"
              text="Back"
              disabled={phase === 1}
            />
          )}
          {phase <= 40 && (
            <PrimaryButton
              type="submit"
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
      </div>
    </ControlPanelWrapper>
  );
}
