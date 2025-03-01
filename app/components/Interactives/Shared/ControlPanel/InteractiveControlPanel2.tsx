import { useAtom, useSetAtom } from "jotai";
import { currentView2Atom } from "../InteractiveViewer/InteractiveViewer";
import {
  activePairwiseComboAtom,
  activePairwiseMHPsComboAtom,
  hintsEnabledAtom,
  pairwiseCombosAtom,
  pairwiseCombosMHPsAtom,
  pairwiseCompletionAtom,
  pairwiseMHPCompletionAtom,
  partEightCompletionAtom,
  partEightDiamondPairViewedAtom,
  partEightDiamondPersonPairAtom,
  partEightMOIInputsAtom,
  partEightPentagonPersonPairAtom,
  partEightPentagonQuestionsAtom,
  partEightPentagonSelectedEdgesAtom,
  partEightQuestionsAtom,
  partSevenCompletionAtom,
  partSixCloneRowsAtom,
  partSixCloneRowsMHPsAtom,
  partSixCompletionAtom,
  partSixFirstQuestionAtom,
  partSixMHPPairwiseQuestionsAtom,
  partSixMHPPolycloncalGenotypesAtom,
  partSixPairwiseQuestionsAtom,
  partSixSNPHistogramQuestionsAtom,
  partSixSNPHybridCreatedAtom,
  partSixSNPKnowledgeCheckQuestionsAtom,
  phase2Atom,
} from "@/data/Interactives/interactiveStore";
import { atomWithStorage, RESET } from "jotai/utils";
import { resetConfirmOpenAtom } from "./ResetModal";
import {
  identicalGenotype2Atom,
  identicalGenotypeAtom,
  P6Step2QuestionsAtom,
} from "../../Sleuthing/PartSix/Phases/Genotypes";
import { useCallback, useEffect, useState } from "react";
import { partSixMHPHybridCreatedAtom } from "../../Sleuthing/PartSix/Phases/GenerateMHPHybrid";
import { finalHybridQAtom } from "../../Sleuthing/PartSix/Comparators/MHPs/CompareMHPHybridCloneQuestions";
import { SNPvsMHPquestionAtom } from "../../Sleuthing/PartSix/Phases/IBSWithMicro";
import { SNPMHPInitialQuestionAtom } from "../../Sleuthing/PartSix/Phases/GenerateMHPCloneRows";
import { hybridMHPCloneQuestionAtom } from "../../Sleuthing/PartSix/PartSix";
import { selectedClonesAtom } from "../../Sleuthing/PartSeven/PartSeven";
import { compareOrderedArrays } from "../../helpers";
import { sideBarIsOpenAtom } from "../InteractiveViewer/InteractiveSideBar/InteractiveSideBar";
import { p6addedQuestionsAtom } from "../../Sleuthing/PartSix/Phases/SNPKnowledgeCheck";
import { slidoReplacementQuestionAtom } from "../../Sleuthing/PartSix/Phases/MHPSlidoPolls";
import {
  attemptedMOIInputAtom1,
  attemptedMOIInputAtom2,
  attemptedMOIInputAtom3,
  attemptedMOIInputAtom4,
  attemptedMOIInputAtom5,
} from "../../Sleuthing/PartEight/Genotypes/InputMOI";
import { specialEdgeHandledAtom } from "../../Sleuthing/PartEight/Pentagon3";
import {
  edgeAnswers,
  edgeCorrectionsAtom,
  pentagonViewAtom,
} from "../../Sleuthing/PartEight/Pentagon/PentagonViewer";
import {
  queuedChangeAtom,
  successQueueAtom,
} from "../../Sleuthing/PartEight/Phases/PentagonComparisons";
import { GIViewAtom } from "../../Sleuthing/PartEight/Pentagon/PentagonCorrections";
import { p8addedQuestionAtom } from "../../Sleuthing/PartEight/Phases/VillagePersons";
import {
  additionalInfoClickedAtom,
  p8addedQuestion2Atom,
} from "../../Sleuthing/PartEight/Pentagon/PentagonSideBySide";
import { isValid } from "../../Sleuthing/PartEight/Pentagon/PentagonProgressButton";
import { Edge } from "../../Sleuthing/PartEight/Pentagon";

const sharedBoolArray = function (
  polyclonalArrays: number[][],
  currentRow: number[],
) {
  return polyclonalArrays.map((polyclonalArr, idx) => {
    return polyclonalArr.includes(currentRow[idx]);
  });
};

export const s2p0CompletionAtom = atomWithStorage("s2p0Completion", {
  0: false,
  1: false,
  2: false,
  3: false,
});

export default function InteractiveControlPanel2() {
  const [s2p0Completion, setS2p0Completion] = useAtom(s2p0CompletionAtom);
  const [menuOpen, setMenuOpen] = useAtom(sideBarIsOpenAtom);
  const [currentView, setCurrentView] = useAtom(currentView2Atom);
  const [hintsEnabled, setHintsEnabled] = useAtom(hintsEnabledAtom);
  const [partSixSNPHybridCreated, setPartSixSNPHybridCreated] = useAtom(
    partSixSNPHybridCreatedAtom,
  );
  const [knowledgeCheckSNPQuestions, setKnowledgeCheckSNPQuestions] = useAtom(
    partSixSNPKnowledgeCheckQuestionsAtom,
  );
  const [firstQuestion, setFirstQuestion] = useAtom(partSixFirstQuestionAtom);
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
  const [p6completion, setp6Completion] = useAtom(partSixCompletionAtom);
  const [phase2, setPhase2] = useAtom(phase2Atom);
  const [cloneRows, setCloneRows] = useAtom(partSixCloneRowsAtom);
  const [cloneRowsMHPs, setCloneRowsMHPs] = useAtom(partSixCloneRowsMHPsAtom);
  const [activePairwiseCombo, setActivePairwiseCombo] = useAtom(
    activePairwiseComboAtom,
  );
  const [activePairwiseMHPsCombo, setActivePairwiseMHPsCombo] = useAtom(
    activePairwiseMHPsComboAtom,
  );
  const [pairwiseCombos, setPairwiseCombos] = useAtom(pairwiseCombosAtom);
  const [pairwiseCombosMHPs, setPairwiseCombosMHPs] = useAtom(
    pairwiseCombosMHPsAtom,
  );
  const [pairwiseCompletion, setPairwiseCompletion] = useAtom(
    pairwiseCompletionAtom,
  );
  const [pairwiseMHPCompletion, setPairwiseMHPCompletion] = useAtom(
    pairwiseMHPCompletionAtom,
  );
  const [partSixPairwiseQuestions, setPartSixPairwiseQuestions] = useAtom(
    partSixPairwiseQuestionsAtom,
  );
  const [partSixMHPPairwiseQuestions, setPartSixMHPPairwiseQuestions] = useAtom(
    partSixMHPPairwiseQuestionsAtom,
  );
  const [partSixSNPHistogramQuestions, setPartSixSNPHistogramQuestions] =
    useAtom(partSixSNPHistogramQuestionsAtom);

  const [questions2, setQuestions2] = useAtom(P6Step2QuestionsAtom);
  // const [true, settrue] = useState(false);
  const [partSixMHPHybridCreated, setPartSixMHPHybridCreated] = useAtom(
    partSixMHPHybridCreatedAtom,
  );
  const [finalHybridQ, setFinalHybridQ] = useAtom(finalHybridQAtom);
  const [someQ, setSomeQ] = useAtom(SNPvsMHPquestionAtom);
  // const [currentVersion, setCurrentVersion] = useAtom(P6CurrentVersionAtom);
  const [initialQuestion, setInitialQuestion] = useAtom(
    SNPMHPInitialQuestionAtom,
  );
  const [hybridMHPQuestion, setHybridMHPQuestion] = useAtom(
    hybridMHPCloneQuestionAtom,
  );
  // const setP7Completion = useSetAtom(partSevenCompletionAtom);
  const setP7Genotypes = useSetAtom(partSixMHPPolycloncalGenotypesAtom);
  const [p7Questions, setP7Questions] = useAtom(P6Step2QuestionsAtom);
  const setP7IdenticalGenotype = useSetAtom(identicalGenotypeAtom);
  const setP7IdenticalGenotype2 = useSetAtom(identicalGenotype2Atom);
  const setP7SelectedClones = useSetAtom(selectedClonesAtom);
  const [p6AddedQuestions, setP6AddedQuestions] = useAtom(p6addedQuestionsAtom);
  const [slidoQ, setSlidoQ] = useAtom(slidoReplacementQuestionAtom);
  const [phase, setPhase] = useAtom(phase2Atom);
  // const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
  const [p7completion, setP7Completion] = useAtom(partSevenCompletionAtom);
  const [genotypes, setGenotypes] = useAtom(partSixMHPPolycloncalGenotypesAtom);
  // const cloneRows = useAtomValue(partSixCloneRowsMHPsAtom);
  const [identicalGenotype, setIdenticalGenotype] = useAtom(
    identicalGenotypeAtom,
  );
  const [identicalGenotype2, setIdenticalGenotype2] = useAtom(
    identicalGenotype2Atom,
  );
  const [selectedClones, setSelectedClones] = useAtom(selectedClonesAtom);
  const [p8completion, setP8Completion] = useAtom(partEightCompletionAtom);
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
  const [p8AddedQuestion, setP8AddedQuestion] = useAtom(p8addedQuestionAtom);
  const [buttonClicked, setButtonClicked] = useAtom(additionalInfoClickedAtom);
  const [p8addedQuestion2, setP8AddedQuestion2] = useAtom(p8addedQuestion2Atom);
  // const [currentVersion, setCurrentVersion] = useAtom(P8CurrentVersionAtom);
  // const [true, settrue] = useAtom(trueAtom);
  // const [currentView, setCurrentView] = useAtom(currentView2Atom);
  // const [true, settrue] = useState(false);
  // const [hintsEnabled, setHintsEnabled] = useAtom(hintsEnabledAtom);
  // const [currentVersion, setCurrentVersion] = useAtom(P7CurrentVersionAtom);
  // const [currentView2, setCurrentView2] = useAtom(currentView2Atom);

  // useEffect(() => {
  //   setCurrentView({ ...currentView, section: 3, phase: 1 });
  // }, []);

  useEffect(() => {
    setHintsEnabled(false);
  }, [phase]);

  const completion =
    currentView.section === 0
      ? s2p0Completion
      : currentView.section === 1
      ? p6completion
      : currentView.section === 2
      ? p7completion
      : currentView.section === 3
      ? p8completion
      : null;
  const setCompletion =
    currentView.section === 0
      ? setS2p0Completion
      : currentView.section === 1
      ? setp6Completion
      : currentView.section === 2
      ? setP7Completion
      : currentView.section === 3
      ? setP8Completion
      : () => {};

  const P6ResetCallback = useCallback(() => {
    setSlidoQ(RESET);
    setP6AddedQuestions(RESET);
    setP7Completion(RESET);
    setP7Genotypes(RESET);
    setP7Questions(RESET);
    setP7IdenticalGenotype(RESET);
    setP7IdenticalGenotype2(RESET);
    setP7SelectedClones(RESET);
    setHybridMHPQuestion(null);
    setInitialQuestion(null);
    setSomeQ(null);
    setFinalHybridQ(null);
    setPartSixMHPHybridCreated(false);
    setQuestions2(RESET);
    setKnowledgeCheckSNPQuestions(RESET);
    setPartSixSNPHybridCreated(false);
    setPartSixSNPHistogramQuestions(RESET);
    setPartSixPairwiseQuestions(RESET);
    setPairwiseCompletion(RESET);
    setFirstQuestion(null);
    setPartSixMHPPairwiseQuestions(RESET);
    setPairwiseMHPCompletion(RESET);
    setActivePairwiseCombo([1, 2]);
    setActivePairwiseMHPsCombo([1, 2]);
    setPairwiseCombos(RESET);
    setPairwiseCombosMHPs(RESET);
    setCompletion(RESET);
    setCloneRowsMHPs(RESET);
    setCloneRows(RESET);
    setHintsEnabled(false);
  }, []);

  const p7ResetCallback = useCallback(() => {
    setHintsEnabled(false);
    setSelectedClones({
      1: null,
      2: null,
    });
    setIdenticalGenotype(RESET);
    setIdenticalGenotype2(RESET);
    setP7Questions(RESET);
    setP7Completion(RESET);
    setGenotypes(RESET);
    // setPhase(1);
  }, []);

  const p8ResetCallback = useCallback(() => {}, []);

  function handleClick3(phase: number) {
    if (currentView.section !== 3) {
      return;
    }

    if (phase === 1) {
      // setPhase(4);
      setCurrentView({ ...currentView, phase: 4 });
      setCompletion({ ...completion, 1: true });
      return;
    }
    if (phase === 10) {
      setCompletion({ ...completion, [phase]: true });
      setPentagonView("EF");
      setCurrentView({ ...currentView, phase: 12 });
      return;
      // if (completion[17]) {
      //   setPhase(18);
      //   return;
      // }
    }
    if (phase === 11) {
      setPentagonView("EF");
    } else if (phase === 12) {
      setCurrentView({ ...currentView, phase: 13 });
      setCompletion({ ...completion, [phase]: true });
      setPentagonView(null);

      return;
      if (completion[13]) {
        // setPhase(14);

        return;
      }
      setPentagonView(null);
    } else if (phase === 13) {
      setCurrentView({ ...currentView, phase: 15 });
      setCompletion({ ...completion, [phase]: true });

      return;
    } else if (phase === 14) {
      // setPentagonView("E");
    } else if (phase === 15) {
      // setPentagonView("F");
    } else if (phase === 16) {
      // setPentagonView("GHI");
    } else if (phase === 17) {
      // setPentagonView(null);
    } else if (phase === 18) {
      if (specialEdgeHandled) {
        // setPhase(20);
        setCurrentView({ ...currentView, phase: 20 });
        setCompletion({ ...completion, [phase]: true });

        return;
      } else {
        // setPhase(19);
        setCurrentView({ ...currentView, phase: 19 });
        setCompletion({ ...completion, [phase]: true });

        return;
      }
    } else if (phase === 29) {
      // setPhase(29.5);
      setCurrentView({ ...currentView, phase: 29.5 });

      setCompletion({
        ...completion,
        [phase]: true,
      });
      return;
    } else if (phase === 29.5) {
      // setPhase(30);
      setCurrentView({ ...currentView, phase: 30 });

      setCompletion({ ...completion, [phase]: true });
      return;
    }
    setCompletion({
      ...completion,
      [phase]: true,
    });
    // setPhase(phase + 1);
    setCurrentView({ ...currentView, phase: currentView.phase + 1 });
  }

  const getProgressionText = function () {
    let result = {
      primaryText: "",
      secondaryText: "",
    };
    let { module, section, phase } = currentView;
    if (section === 0) {
      if (phase === 0) {
        // return "Background";
        result.primaryText = "Introduction";
      } else if (phase === 1) {
        result.primaryText = "Case Study";
      } else if (phase === 2) {
        result.primaryText = "Your Goal";
      } else if (phase === 3) {
        result.primaryText = "Instructions";
      }
    } else {
      if (section === 1) {
        result.primaryText = `Step 1`;
        if (phase === 1) {
          result.secondaryText = "1 / 15";
        } else if (phase === 2) {
          result.secondaryText = "2 / 15";
        } else if (phase >= 3 && phase < 6) {
          result.secondaryText = "3 / 15";
        } else if (phase >= 6 && phase < 8) {
          result.secondaryText = "4 / 15";
        } else if (phase >= 8 && phase < 11) {
          result.secondaryText = "5 / 15";
        } else if (phase >= 11 && phase < 12) {
          result.secondaryText = "6 / 15";
        } else if (phase >= 12 && phase < 15) {
          result.secondaryText = "7 / 15";
        } else if (phase >= 15 && phase < 20) {
          result.secondaryText = "8 / 15";
        } else if (phase === 22) {
          result.secondaryText = "9 / 15";
        } else if (phase === 22.5) {
          result.secondaryText = "10 / 15";
        } else if (phase >= 22.5 && phase < 26) {
          result.secondaryText = "11 / 15";
        } else if (phase >= 26 && phase < 29) {
          result.secondaryText = "12 / 15";
        } else if (phase === 29) {
          result.secondaryText = "13 / 15";
        } else if (phase >= 30 && phase <= 32) {
          result.secondaryText = "14 / 15";
        } else if (phase > 32) {
          result.secondaryText = "15 / 15";
        }
      } else if (section === 2) {
        result.primaryText = `Step 2`;
        if (phase >= 4 && phase <= 5) {
          result.secondaryText = "1 / 6";
        } else if (phase >= 6 && phase <= 7) {
          result.secondaryText = "2 / 6";
        } else if (phase >= 8 && phase <= 10) {
          result.secondaryText = "3 / 6";
        } else if (phase >= 10 && phase <= 11) {
          result.secondaryText = "4 / 6";
        } else if (phase >= 12 && phase <= 13) {
          result.secondaryText = "5 / 6";
        } else if (phase >= 14 && phase <= 15) {
          result.secondaryText = "6 / 6";
        } else if (phase >= 16) {
          result.secondaryText = "Summary";
        }
      } else if (section === 3) {
        result.primaryText = `Step 3`;
        if (phase >= 0 && phase <= 3) {
          result.secondaryText = "1 / 11";
        } else if (phase === 4) {
          result.secondaryText = "2 / 11";
        } else if (phase >= 5 && phase < 8) {
          result.secondaryText = "3 / 11";
        } else if (phase === 8) {
          result.secondaryText = "4 / 11";
        } else if (phase === 9) {
          result.secondaryText = "5 / 11";
        } else if (phase >= 10 && phase < 12) {
          result.secondaryText = "6 / 11";
        } else if (phase >= 12 && phase < 18) {
          result.secondaryText = "7 / 11";
        } else if (phase >= 18 && phase < 23) {
          result.secondaryText = "8 / 11";
        } else if (phase >= 23 && phase < 34) {
          result.secondaryText = "9 / 11";
        } else if (phase >= 34 && phase <= 35) {
          result.secondaryText = "10 / 11";
        } else if (phase >= 35 && phase < 40) {
          result.secondaryText = "11 / 11";
        } else if (phase === 40) {
          result.secondaryText = "Summary";
        }
      }
      // result.primaryText = `Step ${section}`;
      // if (phase > 0) {
      //   result.secondaryText = `${phase} / ${
      //     section === 1
      //       ? "5"
      //       : section === 2
      //       ? "3"
      //       : section === 3
      //       ? "5"
      //       : section === 4
      //       ? "2"
      //       : section === 5
      //       ? "1"
      //       : "2"
      //   }`;
      // }
    }
    return result;
  };

  useEffect(() => {
    // setCurrentView({ ...currentView, section: 3, phase: 0 });
    if (currentView.section === 3) {
      if (phase === 12) {
        setPentagonView("EF");
      } else if (phase === 13 || phase === 14) {
        setPentagonView(null);
        // setPentagonView("E");
      } else if (phase === 14) {
      } else if (phase === 15) {
        setPentagonView("E");

        // setPentagonView("F");
      } else if (phase === 16) {
        setPentagonView("F");

        // setPentagonView("GHI");
        // setPentagonView(null);
      } else if (phase === 17) {
        setPentagonView("GHI");
      } else if (phase === 19 || phase === 20) {
        setPentagonView(null);
      }
    }
  }, [phase, currentView.section]);

  const isDisabled = function () {
    let { module, section, phase } = currentView;
    if (section === 0) {
      return false;
    }
    // ***************************
    if (section === 1) {
      const [first, second] = activePairwiseCombo;

      if (phase === 0) {
        return false;
      }
      if (phase === 1) {
        for (let k in cloneRows) {
          if (cloneRows[k].vals.includes(null) && cloneRows[k].id !== 4) {
            return true;
          }
        }
        return false;
      } else if (phase === 2) {
        if (firstQuestion === 2) {
          return false;
        }
      } else if (phase === 3) {
        if (pairwiseCompletion[1][2] === false) {
          let x = cloneRows[first].vals.map((val, idx) => {
            return val === cloneRows[second].vals[idx];
          });
          if (compareOrderedArrays(x, pairwiseCombos[first][second])) {
            return false;
          }
        } else {
          if (partSixPairwiseQuestions["[1,2]"][3] === 0) {
            return false;
          }
        }
      } else if (phase === 4) {
        if (pairwiseCompletion[1][3] === false) {
          let x = cloneRows[first].vals.map((val, idx) => {
            return val === cloneRows[second].vals[idx];
          });
          if (compareOrderedArrays(x, pairwiseCombos[first][second])) {
            return false;
          }
        } else {
          if (partSixPairwiseQuestions["[1,3]"][3] === 0) {
            return false;
          }
        }
      } else if (phase === 5) {
        if (pairwiseCompletion[2][3] === false) {
          let x = cloneRows[first].vals.map((val, idx) => {
            return val === cloneRows[second].vals[idx];
          });
          if (compareOrderedArrays(x, pairwiseCombos[first][second])) {
            return false;
          }
        } else {
          if (partSixPairwiseQuestions["[2,3]"][3] === 0) {
            return false;
          }
        }
      } else if (phase === 6) {
        return false;
      } else if (phase === 8) {
        if (partSixSNPHistogramQuestions[1] === 1) {
          return false;
        }
      } else if (phase2 === 9) {
        if (partSixSNPHistogramQuestions[2] === 0) {
          return false;
        }
      } else if (phase2 === 10) {
        if (partSixSNPHistogramQuestions[3] === 0) {
          return false;
        }
      } else if (phase2 === 11) {
        if (partSixSNPHybridCreated === true) {
          return false;
        }
      } else if (phase2 === 12) {
        if (!compareOrderedArrays([1, 4], activePairwiseCombo)) {
          return true;
        }
        if (pairwiseCompletion[1][4] === false) {
          let x = cloneRows[first].vals.map((val, idx) => {
            return val === cloneRows[second].vals[idx];
          });
          console.log(x);
          if (compareOrderedArrays(x, pairwiseCombos[first][second])) {
            return false;
          }
        } else {
          if (partSixPairwiseQuestions["[1,4]"][3] === 6) {
            return false;
          }
        }
      } else if (phase2 === 13) {
        if (!compareOrderedArrays([2, 4], activePairwiseCombo)) {
          return true;
        }
        console.log("called");
        if (pairwiseCompletion[2][4] === false) {
          let x = cloneRows[first].vals.map((val, idx) => {
            return val === cloneRows[second].vals[idx];
          });
          console.log(x);
          if (compareOrderedArrays(x, pairwiseCombos[first][second])) {
            return false;
          }
        } else {
          console.log("called");
          if (partSixPairwiseQuestions["[2,4]"][3] === 6) {
            return false;
          }
        }
      } else if (phase2 === 13.5) {
        if (partSixPairwiseQuestions["[2,4]"][4] === 3) {
          return false;
        } else {
          return true;
        }
      } else if (phase2 === 14) {
        if (!compareOrderedArrays([3, 4], activePairwiseCombo)) {
          return true;
        }
        if (partSixPairwiseQuestions["[3,4]"][3] === 0) {
          return false;
        }
        if (pairwiseCompletion[3][4] === false) {
          let x = cloneRows[first].vals.map((val, idx) => {
            return val === cloneRows[second].vals[idx];
          });
          if (compareOrderedArrays(x, pairwiseCombos[first][second])) {
            return false;
          }
        }
      } else if (phase2 === 14.5) {
        if (partSixPairwiseQuestions["[3,4]"][4] === 12) {
          return false;
        } else {
          return true;
        }
      } else if (phase2 === 15) {
        return !(
          p6AddedQuestions[3].includes(1) &&
          p6AddedQuestions[3].includes(2) &&
          !p6AddedQuestions[3].includes(3)
        );
      } else if (phase2 === 18) {
        return false;
      } else if (phase2 === 19) {
        return !(
          knowledgeCheckSNPQuestions[1] === true &&
          knowledgeCheckSNPQuestions[2] === true &&
          (knowledgeCheckSNPQuestions[3] === false ||
            knowledgeCheckSNPQuestions[3] === null)
        );
      } else if (phase2 <= 20) {
        // return true;
      } else if (phase2 === 21) {
        return false;
      } else if (phase2 === 22) {
        for (let k in cloneRowsMHPs) {
          if (cloneRowsMHPs[k].vals.includes(null)) {
            return true;
          }
        }
        return false;
      } else if (phase2 === 22.5) {
        return initialQuestion !== 0;
      } else if (phase2 === 23) {
        if (pairwiseMHPCompletion[1][2] === false) {
          let x = cloneRowsMHPs[activePairwiseMHPsCombo[0]].vals.map(
            (val, idx) => {
              return (
                val === cloneRowsMHPs[activePairwiseMHPsCombo[1]].vals[idx]
              );
            },
          );
          if (
            compareOrderedArrays(
              x,
              pairwiseCombosMHPs[activePairwiseMHPsCombo[0]][
                activePairwiseMHPsCombo[1]
              ],
            )
          ) {
            return false;
          }
        } else {
          if (partSixMHPPairwiseQuestions["[1,2]"][3] === 0) {
            return false;
          }
        }
      } else if (phase2 === 24) {
        if (pairwiseMHPCompletion[1][3] === false) {
          let x = cloneRowsMHPs[activePairwiseMHPsCombo[0]].vals.map(
            (val, idx) => {
              return (
                val === cloneRowsMHPs[activePairwiseMHPsCombo[1]].vals[idx]
              );
            },
          );
          if (
            compareOrderedArrays(
              x,
              pairwiseCombosMHPs[activePairwiseMHPsCombo[0]][
                activePairwiseMHPsCombo[1]
              ],
            )
          ) {
            return false;
          }
        } else {
          if (partSixMHPPairwiseQuestions["[1,3]"][3] === 0) {
            return false;
          }
        }
      } else if (phase2 === 25) {
        if (pairwiseMHPCompletion[2][3] === false) {
          let x = cloneRowsMHPs[activePairwiseMHPsCombo[0]].vals.map(
            (val, idx) => {
              return (
                val === cloneRowsMHPs[activePairwiseMHPsCombo[1]].vals[idx]
              );
            },
          );
          if (
            compareOrderedArrays(
              x,
              pairwiseCombosMHPs[activePairwiseMHPsCombo[0]][
                activePairwiseMHPsCombo[1]
              ],
            )
          ) {
            return false;
          }
        } else {
          if (partSixMHPPairwiseQuestions["[2,3]"][3] === 0) {
            return false;
          }
        }
      } else if (phase2 === 26) {
        return slidoQ !== 1;
        // return true;
      } else if (phase2 === 27) {
        // return true;
      } else if (phase2 === 28) {
        // return true;
      } else if (phase2 === 29) {
        return !partSixMHPHybridCreated;
      } else if (phase2 === 30) {
        if (pairwiseMHPCompletion[1][4] === false) {
          let x = cloneRowsMHPs[1].vals.map((val, idx) => {
            return val === cloneRowsMHPs[4].vals[idx];
          });
          if (compareOrderedArrays(x, pairwiseCombosMHPs[1][4])) {
            return false;
          }
        } else {
          if (partSixMHPPairwiseQuestions["[1,4]"][3] === 6) {
            return false;
          }
        }
      } else if (phase2 === 31) {
        if (pairwiseMHPCompletion[2][4] === false) {
          let x = cloneRowsMHPs[2].vals.map((val, idx) => {
            return val === cloneRowsMHPs[4].vals[idx];
          });
          if (compareOrderedArrays(x, pairwiseCombosMHPs[2][4])) {
            return false;
          }
        } else {
          if (partSixMHPPairwiseQuestions["[2,4]"][3] === 6) {
            return false;
          }
        }
      } else if (phase2 === 31.5) {
        return hybridMHPQuestion !== 1;
      } else if (phase2 === 32) {
        return finalHybridQ !== 0;
        // if (pairwiseMHPCompletion[3][4] === false) {
        //   let x = cloneRowsMHPs[3].vals.map((val, idx) => {
        //     return val === cloneRowsMHPs[4].vals[idx];
        //   });
        //   if (compareOrderedArrays(x, pairwiseCombosMHPs[3][4])) {
        //     return false;
        //   }
        // } else {
        //   if (partSixMHPPairwiseQuestions["[3,4]"][3] === 6) {
        //     return false;
        //   }
        // }
      } else if (phase2 === 33) {
        return someQ !== 0;
      } else if (phase2 === 33.5) {
        return false;
      } else if (phase2 >= 50) {
        return false;
      }
      return true;
    }
    // *****************************
    if (section === 2) {
      // if (completion[phase]) {
      //   return false;
      // }
      if (phase < 4) {
        return false;
      }

      if (phase === 4) {
        let x = cloneRowsMHPs[1].vals.map((el, idx) => {
          return [el, cloneRowsMHPs[2].vals[idx]] as unknown as number[];
        });

        console.log("X", x);

        let z = sharedBoolArray(x, cloneRowsMHPs[3].vals as number[]);
        for (let i = 0; i < z.length; i++) {
          if (z[i] !== genotypes["[1,2]"][i]) {
            return true;
          }
        }
        return false;
      }

      if (phase === 5) {
        return p7Questions[3] !== 0;
      }

      if (phase === 6) {
        let x = cloneRowsMHPs[2].vals.map((el, idx) => {
          return [el, cloneRowsMHPs[3].vals[idx]] as unknown as number[];
        });
        let z = sharedBoolArray(x, cloneRowsMHPs[1].vals as number[]);
        for (let i = 0; i < z.length; i++) {
          if (z[i] !== genotypes["[2,3]"][i]) {
            return true;
          }
        }
        return false;
      }

      if (phase === 7) {
        return p7Questions[6] !== 0;
      }

      if (phase === 8) {
        return p7Questions[7] !== 2;
      }

      if (phase === 9) {
        return !(
          !p7Questions[8][0] &&
          p7Questions[8][1] &&
          p7Questions[8][2] &&
          p7Questions[8][3]
        );
      }

      if (phase === 10) {
        if (identicalGenotype.includes(false)) {
          return true;
        }
        return false;
      }

      if (phase === 11) {
        return p7Questions[11] !== 12;
      }

      if (phase === 12) {
        return false;
        // return true;
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
        return p7Questions[13] !== 12;
      }

      if (phase === 16) {
        return false;
      }
      if (phase === 17) {
        return false;
      }

      return true;
    }
    if (section === 3) {
      if (phase === 4) {
        if (
          !completion[phase] &&
          [4].includes(phase) &&
          MOIInputs["A"] &&
          MOIInputs["B"] &&
          MOIInputs["C"] &&
          MOIInputs["D"]
        ) {
          return questions[1] !== 2;
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
        return !(
          p8AddedQuestion.includes(2) &&
          p8AddedQuestion.includes(3) &&
          !p8AddedQuestion.includes(1) &&
          !p8AddedQuestion.includes(0)
        );
        return true;
        // return Object.values(MOIInputs).includes(false);
      } else if (phase >= 11) {
        if (phase === 11) {
          return false;
        } else if (phase === 12) {
          console.log("SELECTED EDGES", selectedEdges.EF);
          if (selectedEdges.EF.visited && !selectedEdges.EF.enabled) {
            return false;
          } else {
            return true;
          }
        } else if (phase === 13) {
          return p8addedQuestion2 !== 2;
        } else if (phase === 14) {
          return false;
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
            return false;
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
          return false;
        } else if (phase === 29.5) {
          // return true;
          return pentagonQuestions[4] !== 1;
        } else if (phase === 36) {
          return pentagonQuestions[5] !== 8;
        } else if (phase === 37) {
          return pentagonQuestions[6] !== 4;
        } else if (phase === 38) {
          return pentagonQuestions[7] !== 3;
        } else if (phase === 39) {
          return pentagonQuestions[8] !== 1;
        } else if (phase === 40) {
          return true;
        } else if (phase >= 30) {
          return false;
        }
        return true;
      }
    }
    return false;
  };

  // useEffect(() => {
  //   setCurrentView({ ...currentView, phase: 1, section: 3 });
  // }, []);

  const nextCallback = function () {
    let { section, phase } = currentView;
    if (section === 0 && phase === 3) {
      setCompletion({ ...completion, [phase]: true });

      setCurrentView({ ...currentView, section: 1, phase: 0 });
      return;
    }
    if (section === 1) {
      if (phase2 === 3) {
        if (pairwiseCompletion[1][2]) {
          setActivePairwiseCombo([1, 3]);
        } else {
          if (compareOrderedArrays([1, 2], activePairwiseCombo)) {
            setPairwiseCompletion({
              ...pairwiseCompletion,
              1: { ...pairwiseCompletion[1], 2: true },
              2: { ...pairwiseCompletion[2], 1: true },
            });
            return;
          }
        }
      }
      if (phase2 === 4) {
        if (pairwiseCompletion[1][3]) {
          setActivePairwiseCombo([2, 3]);
        } else {
          if (compareOrderedArrays([1, 3], activePairwiseCombo)) {
            setPairwiseCompletion({
              ...pairwiseCompletion,
              1: { ...pairwiseCompletion[1], 3: true },
              3: { ...pairwiseCompletion[3], 1: true },
            });
            return;
          }
        }
      }

      if (phase2 === 5) {
        if (pairwiseCompletion[2][3]) {
          // setActivePairwiseCombo([2, 3]);
        } else {
          if (compareOrderedArrays([2, 3], activePairwiseCombo)) {
            setPairwiseCompletion({
              ...pairwiseCompletion,
              2: { ...pairwiseCompletion[2], 3: true },
              3: { ...pairwiseCompletion[3], 2: true },
            });
            return;
          }
        }
      }
      if (phase2 === 6) {
        setCompletion({ ...completion, [phase]: true });
        setCurrentView({ ...currentView, phase: 8 });
        return;
      }
      if (phase2 === 12) {
        if (pairwiseCompletion[1][4]) {
          setActivePairwiseCombo([2, 4]);
        } else {
          if (compareOrderedArrays([1, 4], activePairwiseCombo)) {
            setPairwiseCompletion({
              ...pairwiseCompletion,
              1: { ...pairwiseCompletion[1], 4: true },
              4: { ...pairwiseCompletion[4], 1: true },
            });
            return;
          }
        }
      }

      if (phase2 === 13) {
        if (pairwiseCompletion[2][4]) {
          // setActivePairwiseCombo([3, 4]);
          setCompletion({ ...completion, [phase2]: true });
          setCurrentView({ ...currentView, phase: 13.5 });
          return;
        } else {
          if (compareOrderedArrays([2, 4], activePairwiseCombo)) {
            setPairwiseCompletion({
              ...pairwiseCompletion,
              2: { ...pairwiseCompletion[2], 4: true },
              4: { ...pairwiseCompletion[4], 2: true },
            });
            return;
          }
        }
      }

      if (phase2 === 13.5) {
        setActivePairwiseCombo([3, 4]);
        setCurrentView({ ...currentView, phase: 14 });
        setCompletion({ ...completion, [phase2]: true });
        return;
      }

      if (phase2 === 14) {
        if (pairwiseCompletion[3][4]) {
          // setActivePairwiseCombo([2, 4]);
          setCompletion({ ...completion, [phase2]: true });
          setCurrentView({ ...currentView, phase: 14.5 });
          return;
        } else {
          if (compareOrderedArrays([3, 4], activePairwiseCombo)) {
            setPairwiseCompletion({
              ...pairwiseCompletion,
              3: { ...pairwiseCompletion[3], 4: true },
              4: { ...pairwiseCompletion[4], 3: true },
            });
            return;
          }
        }
      }

      if (phase2 === 14.5) {
        setActivePairwiseCombo([3, 4]);
        setCurrentView({ ...currentView, phase: 15 });
        setCompletion({ ...completion, [phase2]: true });
        return;
      }

      if (phase2 === 18) {
        setCurrentView({ ...currentView, phase: 19 });
        setCompletion({ ...completion, [phase2]: true });
        return;
      }

      if (phase2 === 19) {
        setCurrentView({ ...currentView, phase: 20 });
        setCompletion({ ...completion, [phase2]: true });
        return;
      }

      if (phase2 === 20) {
        setCurrentView({ ...currentView, phase: 21 });
        setCompletion({ ...completion, [phase2]: true });
        return;
      }

      if (phase === 15) {
        setCurrentView({ ...currentView, phase: 21 });
        setCompletion({ ...completion, [phase2]: true });
        return;
      }

      if (phase2 === 22) {
        setCurrentView({ ...currentView, phase: 22.5 });
        setCompletion({ ...completion, [phase2]: true });
        return;
      }
      if (phase2 === 22.5) {
        setCurrentView({ ...currentView, phase: 23 });
        setCompletion({ ...completion, [phase2]: true });
        return;
      }

      if (phase2 === 23) {
        console.log(pairwiseMHPCompletion);
        if (pairwiseMHPCompletion[1][2]) {
          setCurrentView({ ...currentView, phase: 24 });
          setActivePairwiseMHPsCombo([1, 3]);
          setCompletion({ ...completion, 23: true });
          return;
        } else {
          setPairwiseMHPCompletion({
            ...pairwiseMHPCompletion,
            1: { ...pairwiseMHPCompletion[1], 2: true },
            2: { ...pairwiseMHPCompletion[2], 1: true },
          });
          return;
        }
      }

      if (phase2 === 24) {
        console.log(pairwiseMHPCompletion);
        if (pairwiseMHPCompletion[1][3]) {
          setCurrentView({ ...currentView, phase: 25 });
          setActivePairwiseMHPsCombo([2, 3]);
          setCompletion({ ...completion, 24: true });
          return;
        } else {
          setPairwiseMHPCompletion({
            ...pairwiseMHPCompletion,
            1: { ...pairwiseMHPCompletion[1], 3: true },
            3: { ...pairwiseMHPCompletion[3], 1: true },
          });
          return;
        }
      }

      if (phase2 === 25) {
        if (pairwiseMHPCompletion[2][3]) {
          setCurrentView({ ...currentView, phase: 26 });
          setCompletion({ ...completion, 25: true });
          return;
        } else {
          setPairwiseMHPCompletion({
            ...pairwiseMHPCompletion,
            2: { ...pairwiseMHPCompletion[2], 3: true },
            3: { ...pairwiseMHPCompletion[3], 2: true },
          });
          return;
        }
      }

      if (phase === 26) {
        setCurrentView({ ...currentView, phase: 29 });
        setCompletion({ ...completion, [phase2]: true });
        return;
      }

      if (phase2 === 27) {
        setCurrentView({ ...currentView, phase: 29 });
        setCompletion({ ...completion, [phase2]: true });
        return;
      }

      if (phase2 === 30) {
        if (pairwiseMHPCompletion[1][4]) {
          setCurrentView({ ...currentView, phase: 31 });
          setCompletion({ ...completion, 30: true });
          return;
        } else {
          setPairwiseMHPCompletion({
            ...pairwiseMHPCompletion,
            1: { ...pairwiseMHPCompletion[1], 4: true },
            4: { ...pairwiseMHPCompletion[4], 1: true },
          });
          return;
        }
      } else if (phase2 === 31) {
        if (pairwiseMHPCompletion[2][4]) {
          setCurrentView({ ...currentView, phase: 31.5 });
          setCompletion({ ...completion, 31: true });
          return;
        } else {
          setPairwiseMHPCompletion({
            ...pairwiseMHPCompletion,
            2: { ...pairwiseMHPCompletion[2], 4: true },
            4: { ...pairwiseMHPCompletion[4], 2: true },
          });
          return;
        }
      } else if (phase2 === 31.5) {
        setCurrentView({ ...currentView, phase: 32 });
        setCompletion({ ...completion, [phase2]: true });
        return;
      } else if (phase2 === 32) {
        if (pairwiseMHPCompletion[3][4]) {
          setCurrentView({ ...currentView, phase: 33 });
          setCompletion({ ...completion, 32: true });
          return;
        } else {
          setPairwiseMHPCompletion({
            ...pairwiseMHPCompletion,
            3: { ...pairwiseMHPCompletion[3], 4: true },
            4: { ...pairwiseMHPCompletion[4], 3: true },
          });
          return;
        }
      } else if (phase2 === 33) {
        setCompletion({ ...completion, [phase2]: true });
        setCurrentView({ ...currentView, section: 1, phase: 33.5 });
        return;
      } else if (phase2 === 33.5) {
        setCompletion({ ...completion, [phase2]: true });
        setCurrentView({ ...currentView, section: 2, phase: 0 });
        return;
      }
    }
    if (section === 2) {
      if (phase === 2) {
        if (completion[4]) {
          // setCompletion({ ...completion, [phase]: true });
          setCurrentView({ ...currentView, phase: 5 });
          return;
        } else {
          setCompletion({ ...completion, [phase]: true });
          setCurrentView({ ...currentView, phase: 4 });
          return;
        }
      }
      if (phase === 3) {
        if (completion && completion[4]) {
          // if (completion[5]) {
          //   setCurrentView({
          //     module: "5.6",
          //     section: 2,
          //     phase: ,
          //   });
          // }
          setCurrentView({
            module: "5.6",
            section: 2,
            phase: 5,
          });
          return;
        }
      }
      if (phase === 5) {
        if (completion && completion[6]) {
          setCurrentView({
            module: "5.6",
            section: 2,
            phase: 7,
          });
          return;
        }
      }
      if (phase === 9) {
        if (completion && completion[10]) {
          setCurrentView({
            module: "5.6",
            section: 2,
            phase: 11,
          });
          return;
        }
      }
      if (phase === 13) {
        if (completion && completion[14]) {
          setCurrentView({
            module: "5.6",
            section: 2,
            phase: 15,
          });
          return;
        }
      }
      if (phase === 17) {
        setCurrentView({
          module: "5.6",
          section: 3,
          phase: 1,
        });
        setCompletion({ ...completion, [phase]: true });
        return;
      }
    }
    if (section === 3) {
      handleClick3(phase);
      return;

      if (phase === 1) {
        setCurrentView({ ...currentView, phase: 4 });
        setCompletion({ ...completion, 1: true });
        return;
      }
      if (phase === 4) {
        if (
          !completion[phase] &&
          [4].includes(phase) &&
          MOIInputs["A"] &&
          MOIInputs["B"] &&
          MOIInputs["C"] &&
          MOIInputs["D"]
        ) {
          return true;
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
          return true;
        } else if (phase === 12) {
          console.log(selectedEdges.EF);
          if (selectedEdges.EF.visited && !selectedEdges.EF.enabled) {
            return false;
          } else {
            return true;
          }
        } else if (phase === 13) {
          return true;
        } else if (phase === 14) {
          return true;
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
            return true;
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
          return true;
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
          return true;
        }
        return true;
      }
    }
    setCompletion({ ...completion, [phase]: true });
    setCurrentView({ ...currentView, phase: currentView.phase + 1 });
  };

  // useEffect(() => {
  //   setCurrentView({
  //     module: "5.6",
  //     section: 2,
  //     phase: 0,
  //   });
  // }, []);

  useEffect(() => {
    if (currentView.section === 1) {
      if (currentView.phase === 3) {
        setActivePairwiseCombo([1, 2]);
      } else if (currentView.phase === 4) {
        setActivePairwiseCombo([1, 3]);
      } else if (currentView.phase === 5) {
        setActivePairwiseCombo([2, 3]);
      }
    }
  }, [currentView.phase]);

  const backCallback = function () {
    let { section, phase } = currentView;
    if (currentView.section === 1) {
      if (phase === 0) {
        setCurrentView({
          module: "5.6",
          section: 0,
          phase: 3,
        });
      }
      if (currentView.phase === 8) {
        setCurrentView({ ...currentView, phase: 6 });
        return;
      } else if (currentView.phase === 13.5) {
        setCurrentView({ ...currentView, phase: 13 });
        return;
      } else if (currentView.phase === 14) {
        setCurrentView({ ...currentView, phase: 13.5 });
        return;
      } else if (currentView.phase === 14.5) {
        setCurrentView({ ...currentView, phase: 14 });
        return;
      } else if (currentView.phase === 15) {
        setCurrentView({ ...currentView, phase: 14.5 });
        return;
      } else if (currentView.phase === 21) {
        setCurrentView({ ...currentView, phase: 15 });
        return;
      } else if (currentView.phase === 22.5) {
        setCurrentView({ ...currentView, phase: 22 });
        return;
      } else if (currentView.phase === 23) {
        setCurrentView({ ...currentView, phase: 22.5 });
        return;
      } else if (currentView.phase === 29) {
        setCurrentView({ ...currentView, phase: 26 });
        return;
      } else if (currentView.phase === 31.5) {
        setCurrentView({ ...currentView, phase: 31 });
        return;
      } else if (currentView.phase === 32) {
        setCurrentView({ ...currentView, phase: 31.5 });
        return;
      } else if (currentView.phase === 33.5) {
        setCurrentView({ ...currentView, phase: 33 });
        return;
      }
    } else if (section === 2) {
      if (phase === 0) {
        setCurrentView({
          module: "5.6",
          section: 1,
          phase: 33.5,
        });
      }
      if (phase === 4 || phase === 5) {
        setCurrentView({
          module: "5.6",
          section: 2,
          phase: 2,
        });
        return;
      }
      if (phase === 15) {
        // setPhase(13);
        setCurrentView({
          module: "5.6",
          section: 2,
          phase: 13,
        });
        return;
      } else if (phase === 11) {
        // setPhase(9);
        setCurrentView({
          module: "5.6",
          section: 2,
          phase: 9,
        });
        return;
      } else if (phase === 7) {
        // setPhase(5);
        setCurrentView({
          module: "5.6",
          section: 2,
          phase: 5,
        });
        return;
      } else if (phase === 5) {
        // setPhase(3);
        setCurrentView({
          module: "5.6",
          section: 2,
          phase: 2,
        });
        return;
      }
    } else if (section === 3) {
      if (phase === 1) {
        setCurrentView({ ...currentView, section: 2, phase: 17 });
        return;
      }
      if (phase === 4) {
        setCurrentView({ ...currentView, phase: 1 });
        return;
      }
      if (phase === 12) {
        setCurrentView({ ...currentView, phase: 10 });
        return;
      }
      if (phase === 15) {
        setCurrentView({ ...currentView, phase: 13 });
        return;
      }
      if (phase === 29.5) {
        setCurrentView({ ...currentView, phase: 29 });
        return;
      }
      if (phase === 30) {
        setCurrentView({ ...currentView, phase: 29.5 });
        return;
      }
    }
    if (currentView.phase >= 1) {
      setCurrentView({ ...currentView, phase: currentView.phase - 1 });
    }
  };

  useEffect(() => {
    if (currentView.section === 3 && currentView.phase === 40) {
      window.scrollTo({
        top: 0,
      });
    }
  }, [phase]);

  return (
    <div
      style={{
        paddingLeft: "calc(100vw - 100%)",
      }}
      className="fixed bottom-0 z-[999] w-full bg-black"
    >
      <div className="mx-auto grid min-h-20 w-full max-w-6xl text-white md:min-h-0">
        <div className="mt-auto flex h-fit justify-around gap-x-8 pb-1 pt-3 md:hidden">
          <button
            className=" my-auto inline-flex gap-2 text-lg"
            onClick={() => {
              setResetConfirmOpen(true);
            }}
          >
            <svg
              height="20pt"
              width="20pt"
              version="1.1"
              viewBox="0 0 1200 1200"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path
                d="m287.73 350c72.848-90.875 184.54-149.27 309.9-149.99 1.7227-0.011718 3.4375-0.011718 5.1562 0 106.71 0.73047 203.5 43.242 274.8 111.99 4.1406 3.9883 8.1914 8.0664 12.156 12.234 67.055 70.43 108.7 165.28 110.21 269.84 0.066406 4.1406 0.0625 8.2812-0.003906 12.426-1.6523 103.7-42.77 197.81-108.98 267.98-5.2891 5.6055-10.742 11.059-16.359 16.363-70.281 66.383-164.61 107.57-268.54 109.11-3.8359 0.0625-7.6797 0.0625-11.523 0.011719-201.55-2.6953-367.12-154.46-391.46-350.07-3.4102-27.398-25.469-49.898-53.082-49.898s-50.258 22.441-47.504 49.914c1.6914 16.859 4.2344 33.574 7.6055 50.086 17.723 86.824 58.344 168.01 118.48 234.73 82.77 91.844 196.63 149.77 319.6 162.57 122.97 12.816 246.32-20.383 346.25-93.191 99.93-72.805 169.34-180.05 194.83-301.03 25.488-120.98 5.25-247.11-56.809-354.05-62.055-106.93-161.53-187.09-279.21-224.98-117.68-37.895-245.24-30.84-358.03 19.801-77.801 34.93-144.77 88.891-195.21 156.14v-100c0-27.613-22.387-50-50-50s-50 22.387-50 50v250h250c27.613 0 50-22.387 50-50s-22.387-50-50-50z"
                fillRule="evenodd"
              />
            </svg>
            <span className="ml-2 mt-1">Reset</span>
          </button>
          <div className="my-auto inline-flex ">
            <input
              onChange={(e) => {
                setHintsEnabled(!hintsEnabled);
              }}
              checked={hintsEnabled}
              id="hints"
              className=" w-4 dark:accent-emerald-400"
              type="checkbox"
            />
            <label htmlFor="hints" className="ml-4 mt-1 text-lg">
              Enable Hints
            </label>
          </div>
        </div>
        <div className="mb-2 grid [grid-template-columns:min-content_auto_min-content_136px]">
          <button
            className="mx-6 md:mx-12"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <svg
              width="36pt"
              height="36pt"
              version="1.1"
              viewBox="0 0 1200 1200"
              xmlns="http://www.w3.org/2000/svg"
              className="my-auto fill-current"
            >
              <path d="m869.52 355.32c-185.28 4.6797-370.44 9.3594-555.72 13.918-46.199 1.1992-46.441 73.199 0 72 185.28-4.6797 370.44-9.2383 555.72-13.922 46.199-1.0781 46.441-73.078 0-71.996z" />
              <path d="m871.44 550.8c-179.64 7.8008-359.4 13.559-539.16 17.16-46.32 0.96094-46.441 72.961 0 72 179.76-3.6016 359.52-9.3594 539.16-17.16 46.078-2.0391 46.438-74.039 0-72z" />
              <path d="m332.28 771.48c-46.32-0.48047-46.441 71.52 0 72 184.68 1.6797 369.24 1.3203 553.92-1.1992 46.32-0.60156 46.441-72.602 0-72-184.68 2.5195-369.24 3-553.92 1.1992z" />
            </svg>
          </button>
          <div
            className="flex translate-y-0.5 flex-col  gap-x-8
            overflow-hidden py-1 md:flex-row lg:gap-x-16
            "
          >
            <button
              className=" my-auto  hidden gap-2 md:inline-flex"
              onClick={() => {
                // P6ResetCallback();
                // setCurrentView({ ...currentView, section: 0, phase: 0 });
                setResetConfirmOpen(true);
              }}
            >
              <svg
                height="20pt"
                width="20pt"
                version="1.1"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path
                  d="m287.73 350c72.848-90.875 184.54-149.27 309.9-149.99 1.7227-0.011718 3.4375-0.011718 5.1562 0 106.71 0.73047 203.5 43.242 274.8 111.99 4.1406 3.9883 8.1914 8.0664 12.156 12.234 67.055 70.43 108.7 165.28 110.21 269.84 0.066406 4.1406 0.0625 8.2812-0.003906 12.426-1.6523 103.7-42.77 197.81-108.98 267.98-5.2891 5.6055-10.742 11.059-16.359 16.363-70.281 66.383-164.61 107.57-268.54 109.11-3.8359 0.0625-7.6797 0.0625-11.523 0.011719-201.55-2.6953-367.12-154.46-391.46-350.07-3.4102-27.398-25.469-49.898-53.082-49.898s-50.258 22.441-47.504 49.914c1.6914 16.859 4.2344 33.574 7.6055 50.086 17.723 86.824 58.344 168.01 118.48 234.73 82.77 91.844 196.63 149.77 319.6 162.57 122.97 12.816 246.32-20.383 346.25-93.191 99.93-72.805 169.34-180.05 194.83-301.03 25.488-120.98 5.25-247.11-56.809-354.05-62.055-106.93-161.53-187.09-279.21-224.98-117.68-37.895-245.24-30.84-358.03 19.801-77.801 34.93-144.77 88.891-195.21 156.14v-100c0-27.613-22.387-50-50-50s-50 22.387-50 50v250h250c27.613 0 50-22.387 50-50s-22.387-50-50-50z"
                  fillRule="evenodd"
                />
              </svg>
              <span className="ml-2 mt-1">Reset</span>
            </button>
            <div className="my-auto hidden md:inline-flex">
              <input
                onChange={(e) => {
                  setHintsEnabled(!hintsEnabled);
                }}
                checked={hintsEnabled}
                id="hints"
                className=" dark:accent-emerald-400"
                type="checkbox"
              />
              <label htmlFor="hints" className="ml-4 mt-1  ">
                Enable Hints
              </label>
            </div>
            <span className="my-auto self-center overflow-hidden text-ellipsis md:translate-y-0.5">
              {getProgressionText().primaryText}
            </span>
            <span
              className={`${
                !getProgressionText().secondaryText ? "hidden" : "visible"
              } m-auto text-nowrap md:-translate-x-4 md:translate-y-0.5 lg:-translate-x-8`}
            >
              {getProgressionText().secondaryText
                ? getProgressionText().secondaryText
                : "1"}
            </span>
          </div>
          <button
            onClick={() => {
              backCallback();
            }}
            disabled={currentView.section === 0 && currentView.phase === 0}
            className="col-start-3  mx-auto pl-6 pr-4 disabled:invisible md:mr-0 md:px-6"
          >
            <svg
              className={` mx-auto aspect-square h-12 rotate-90 fill-white md:h-8`}
              version="1.1"
              viewBox="0 0 1200 1200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
            </svg>
          </button>
          <button
            disabled={isDisabled()}
            onClick={() => {
              nextCallback();
            }}
            //   ${
            //     !currentPhaseIsComplete && currentNextCallback
            //       ? "text-yellow-400"
            //       : "text-current"
            //   }
            className={`${
              !completion?.[phase] && isDisabled() === false
                ? "nextButtonBlink"
                : ""
            } col-start-4 mx-auto pr-2 disabled:invisible md:ml-0`}
            //   disabled={
            //     currentView.section === 7 ||
            //     (currentView.section === 6
            //       ? partSixIsDisabled()
            //       : currentView.section >= 1 && !currentNextCallback)
            //   }
            //   onClick={
            //     () => {
            //       if (currentView.section === 0) {
            //         partZeroNextHandler();
            //       } else if (currentView.section === 6) {
            //         setCurrentView({ ...currentView, section: 7, phase: 0 });
            //         setStep6Completion({
            //           0: true,
            //         });
            //       } else {
            //         if (currentNextCallback) {
            //           currentNextCallback();
            //         }
            //       }
            //     }
            //   }
          >
            <div
              className={`md:pl-4/ flex w-[136px] items-center rounded-xl py-1 pl-2 pr-4 text-yellow-400 disabled:hidden`}
            >
              <svg
                className={` mx-auto aspect-square h-12 -rotate-90 fill-current md:h-8`}
                version="1.1"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
              </svg>
              <span
                // ${
                //     currentView.section === 0 && currentView.phase === 2
                //       ? "visible w-auto"
                //       : !currentNextCallback || !getNextStep()
                //       ? "invisible w-0"
                //       : "visible w-auto"
                //   }
                className={` ml-2 block translate-y-1 text-nowrap text-current underline underline-offset-2
                 ${
                   (currentView.section === 0 && currentView.phase === 3) ||
                   (currentView.section === 1 && currentView.phase === 33.5)
                     ? "visible w-auto"
                     : "invisible w-0"
                 }
                `}
              >
                Step{" "}
                {currentView.section === 0
                  ? 1
                  : currentView.section === 1
                  ? 2
                  : currentView.section === 2
                  ? 3
                  : 4}
                {/* Next */}
                {/* Step {getNextStep()} */}
                {/* Step 1 */}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
