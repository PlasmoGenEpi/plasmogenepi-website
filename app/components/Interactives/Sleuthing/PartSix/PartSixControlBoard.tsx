import {
  activePairwiseComboAtom,
  activePairwiseMHPsComboAtom,
  hintsEnabledAtom,
  pairwiseCombosAtom,
  pairwiseCombosMHPsAtom,
  pairwiseCompletionAtom,
  pairwiseMHPCompletionAtom,
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
  VERSION_CONTROL,
} from "@/data/Interactives/interactiveStore";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import ControlPanelWrapper from "../../Shared/ControlPanel/ControlPanelWrapper";
import PrimaryButton from "../../Shared/ControlPanel/PrimaryButton";
import {
  resetConfirmOpenAtom,
  s2Reset1Atom,
  s2Reset3Atom,
} from "../../Shared/ControlPanel/ResetModal";
import { atomWithStorage, RESET } from "jotai/utils";
// import { compareOrderedArrays } from "@/helpers/helpers";
import { useCallback, useEffect, useState } from "react";
import {
  identicalGenotype2Atom,
  identicalGenotypeAtom,
  P6Step2QuestionsAtom,
} from "./Phases/Genotypes";
import { partSixMHPHybridCreatedAtom } from "./Phases/GenerateMHPHybrid";
import { finalHybridQAtom } from "./Comparators/MHPs/CompareMHPHybridCloneQuestions";
import { SNPvsMHPquestionAtom } from "./Phases/IBSWithMicro";
import { SNPMHPInitialQuestionAtom } from "./Phases/GenerateMHPCloneRows";
import { hybridMHPCloneQuestionAtom } from "./PartSix";
import { selectedClonesAtom } from "../PartSeven/PartSeven";
// import { currentViewAtom } from "../../Shared/InteractiveViewer/InteractiveViewer";
import { compareOrderedArrays } from "../../helpers";
import { currentView2Atom } from "../../Shared/InteractiveViewer/InteractiveViewer";

const P6CurrentVersionAtom = atomWithStorage("P6CurrentVersionAtom", "1.1.1");

export const P6ResetAtom = atom(null);

export default function PartSixControlBoard({
  direction,
}: {
  direction: "forwards" | "backwards" | null;
}) {
  const [partSixSNPHybridCreated, setPartSixSNPHybridCreated] = useAtom(
    partSixSNPHybridCreatedAtom
  );
  const [knowledgeCheckSNPQuestions, setKnowledgeCheckSNPQuestions] = useAtom(
    partSixSNPKnowledgeCheckQuestionsAtom
  );
  const [firstQuestion, setFirstQuestion] = useAtom(partSixFirstQuestionAtom);
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
  const [hintsEnabled, setHintsEnabled] = useAtom(hintsEnabledAtom);
  const [completion, setCompletion] = useAtom(partSixCompletionAtom);
  const [phase2, setPhase2] = useAtom(phase2Atom);
  const [cloneRows, setCloneRows] = useAtom(partSixCloneRowsAtom);
  const [cloneRowsMHPs, setCloneRowsMHPs] = useAtom(partSixCloneRowsMHPsAtom);
  const [activePairwiseCombo, setActivePairwiseCombo] = useAtom(
    activePairwiseComboAtom
  );
  const [activePairwiseMHPsCombo, setActivePairwiseMHPsCombo] = useAtom(
    activePairwiseMHPsComboAtom
  );
  const [pairwiseCombos, setPairwiseCombos] = useAtom(pairwiseCombosAtom);
  const [pairwiseCombosMHPs, setPairwiseCombosMHPs] = useAtom(
    pairwiseCombosMHPsAtom
  );
  const [pairwiseCompletion, setPairwiseCompletion] = useAtom(
    pairwiseCompletionAtom
  );
  const [pairwiseMHPCompletion, setPairwiseMHPCompletion] = useAtom(
    pairwiseMHPCompletionAtom
  );
  const [partSixPairwiseQuestions, setPartSixPairwiseQuestions] = useAtom(
    partSixPairwiseQuestionsAtom
  );
  const [partSixMHPPairwiseQuestions, setPartSixMHPPairwiseQuestions] = useAtom(
    partSixMHPPairwiseQuestionsAtom
  );
  const [partSixSNPHistogramQuestions, setPartSixSNPHistogramQuestions] =
    useAtom(partSixSNPHistogramQuestionsAtom);

  const [questions2, setQuestions2] = useAtom(P6Step2QuestionsAtom);
  const [slidoPause, setSlidoPause] = useState(false);
  const [partSixMHPHybridCreated, setPartSixMHPHybridCreated] = useAtom(
    partSixMHPHybridCreatedAtom
  );
  const [finalHybridQ, setFinalHybridQ] = useAtom(finalHybridQAtom);
  const [someQ, setSomeQ] = useAtom(SNPvsMHPquestionAtom);
  const [currentVersion, setCurrentVersion] = useAtom(P6CurrentVersionAtom);
  const [initialQuestion, setInitialQuestion] = useAtom(
    SNPMHPInitialQuestionAtom
  );
  const [hybridMHPQuestion, setHybridMHPQuestion] = useAtom(
    hybridMHPCloneQuestionAtom
  );
  const setP7Completion = useSetAtom(partSevenCompletionAtom);
  const setP7Genotypes = useSetAtom(partSixMHPPolycloncalGenotypesAtom);
  const setP7Questions = useSetAtom(P6Step2QuestionsAtom);
  const setP7IdenticalGenotype = useSetAtom(identicalGenotypeAtom);
  const setP7IdenticalGenotype2 = useSetAtom(identicalGenotype2Atom);
  const setP7SelectedClones = useSetAtom(selectedClonesAtom);
  const [currentView2, setCurrentView2] = useAtom(currentView2Atom);
  const setS2Reset1 = useSetAtom(s2Reset1Atom);

  const resetCallback = useCallback(() => {
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

  useEffect(() => {
    if (resetCallback) {
      setS2Reset1(() => () => resetCallback());
    }
  }, []);

  useEffect(() => {
    let x = localStorage.getItem("P6CurrentVersionAtom");
    if (JSON.parse(x) !== VERSION_CONTROL) {
      setCurrentVersion(VERSION_CONTROL);
      resetCallback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   console.log(currentVersion);
  //   let x = localStorage.getItem("currentVersionAtom");
  //   if (x !== null) {
  //     x = JSON.parse(x);
  //     if (x !== versionControl) {
  //       resetCallback();
  //       setCurrentVersion(versionControl);
  //     }
  //   }
  // }, []);

  useEffect(() => {
    let x: NodeJS.Timeout;
    if (
      ([6, 7, 17, 26, 27, 28, 20].includes(phase2) && !completion[phase2]) ||
      phase2 === 33.5
    ) {
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
  }, [phase2]);

  const [first, second] = activePairwiseCombo;

  function isDisabled() {
    if (phase2 === 61) {
      return true;
    }
    if (phase2 === 33.5) {
      return slidoPause;
    }
    if (phase2 === 32) {
      return finalHybridQ !== 0;
    }

    if (phase2 === 22.5) {
      return initialQuestion !== 0;
    }

    if (phase2 === 1) {
      for (let k in cloneRows) {
        if (cloneRows[k].vals.includes(null) && cloneRows[k].id !== 4) {
          return true;
        }
      }
      return false;
    } else if (phase2 === 2) {
      if (firstQuestion === 2) {
        return false;
      }
    } else if (phase2 === 3) {
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
    } else if (phase2 === 4) {
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
    } else if (phase2 === 5) {
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
    } else if (phase2 === 6 || phase2 === 7) {
      return slidoPause;
    } else if (phase2 === 8) {
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
      return slidoPause;
    } else if (phase2 === 21) {
      return false;
    } else if (phase2 === 22) {
      for (let k in cloneRowsMHPs) {
        if (cloneRowsMHPs[k].vals.includes(null)) {
          return true;
        }
      }
      return false;
    } else if (phase2 === 23) {
      if (pairwiseMHPCompletion[1][2] === false) {
        let x = cloneRowsMHPs[activePairwiseMHPsCombo[0]].vals.map(
          (val, idx) => {
            return val === cloneRowsMHPs[activePairwiseMHPsCombo[1]].vals[idx];
          }
        );
        if (
          compareOrderedArrays(
            x,
            pairwiseCombosMHPs[activePairwiseMHPsCombo[0]][
              activePairwiseMHPsCombo[1]
            ]
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
            return val === cloneRowsMHPs[activePairwiseMHPsCombo[1]].vals[idx];
          }
        );
        if (
          compareOrderedArrays(
            x,
            pairwiseCombosMHPs[activePairwiseMHPsCombo[0]][
              activePairwiseMHPsCombo[1]
            ]
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
            return val === cloneRowsMHPs[activePairwiseMHPsCombo[1]].vals[idx];
          }
        );
        if (
          compareOrderedArrays(
            x,
            pairwiseCombosMHPs[activePairwiseMHPsCombo[0]][
              activePairwiseMHPsCombo[1]
            ]
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
      return slidoPause;
    } else if (phase2 === 27) {
      return slidoPause;
    } else if (phase2 === 28) {
      return slidoPause;
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
      if (pairwiseMHPCompletion[3][4] === false) {
        let x = cloneRowsMHPs[3].vals.map((val, idx) => {
          return val === cloneRowsMHPs[4].vals[idx];
        });
        if (compareOrderedArrays(x, pairwiseCombosMHPs[3][4])) {
          return false;
        }
      } else {
        if (partSixMHPPairwiseQuestions["[3,4]"][3] === 6) {
          return false;
        }
      }
    } else if (phase2 === 33) {
      return someQ !== 0;
    } else if (phase2 === 33.5) {
      return false;
    } else if (phase2 >= 50) {
      return false;
    }
    return true;
  }

  function handleClick() {
    // if (phase2 === 21) {
    //   setPhase2(50);
    //   return;
    // }
    // if (phase2 === 8) {
    //   setActivePairwiseMHPsCombo([1, 2]);
    // }
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
        setCurrentView2({ ...currentView2, phase: 13.5 });
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
      setCurrentView2({ ...currentView2, phase: 14 });
      setCompletion({ ...completion, [phase2]: true });
      return;
    }

    if (phase2 === 14) {
      if (pairwiseCompletion[3][4]) {
        // setActivePairwiseCombo([2, 4]);
        setCompletion({ ...completion, [phase2]: true });
        setCurrentView2({ ...currentView2, phase: 14.5 });
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
      setCurrentView2({ ...currentView2, phase: 15 });
      setCompletion({ ...completion, [phase2]: true });
      return;
    }

    if (phase2 === 18) {
      setCurrentView2({ ...currentView2, phase: 19 });
      setCompletion({ ...completion, [phase2]: true });
      return;
    }

    if (phase2 === 19) {
      setCurrentView2({ ...currentView2, phase: 20 });
      setCompletion({ ...completion, [phase2]: true });
      return;
    }

    if (phase2 === 20) {
      setCurrentView2({ ...currentView2, phase: 21 });
      setCompletion({ ...completion, [phase2]: true });
      return;
    }

    if (phase2 === 22) {
      setCurrentView2({ ...currentView2, phase: 22.5 });
      setCompletion({ ...completion, [phase2]: true });
      return;
    }
    if (phase2 === 22.5) {
      setCurrentView2({ ...currentView2, phase: 23 });
      setCompletion({ ...completion, [phase2]: true });
      return;
    }

    if (phase2 === 23) {
      console.log(pairwiseMHPCompletion);
      if (pairwiseMHPCompletion[1][2]) {
        setCurrentView2({ ...currentView2, phase: 24 });
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
        setCurrentView2({ ...currentView2, phase: 25 });
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
        setCurrentView2({ ...currentView2, phase: 26 });
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

    if (phase2 === 27) {
      setCurrentView2({ ...currentView2, phase: 29 });
      setCompletion({ ...completion, [phase2]: true });
      return;
    }

    if (phase2 === 30) {
      if (pairwiseMHPCompletion[1][4]) {
        setCurrentView2({ ...currentView2, phase: 31 });
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
        setCurrentView2({ ...currentView2, phase: 31.5 });
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
      setCurrentView2({ ...currentView2, phase: 32 });
      setCompletion({ ...completion, [phase2]: true });
      return;
    } else if (phase2 === 32) {
      if (pairwiseMHPCompletion[3][4]) {
        setCurrentView2({ ...currentView2, phase: 33 });
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
      setCurrentView2({ ...currentView2, phase: 33.5 });
      setCompletion({ ...completion, [phase2]: true });
      return;
    } else if (phase2 === 33.5) {
      setCurrentView2({ ...currentView2, phase: 34 });
      setCompletion({ ...completion, [phase2]: true });
      return;
    }

    setCurrentView2({ ...currentView2, phase: phase2 + 1 });
    setCompletion({ ...completion, [phase2]: true });
  }

  return null;

  return (
    <ControlPanelWrapper fixed resetCallback={resetCallback}>
      <div className="mx-auto max-w-6xl">
        {phase2 !== 34 && (
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
        <div className="flex justify-between">
          {phase2 === 1 ? (
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
                if (phase2 === 34) {
                  setCurrentView2({ ...currentView2, phase: 33.5 });
                } else if (phase2 === 33.5) {
                  setCurrentView2({ ...currentView2, phase: 33 });
                } else if (phase2 === 32) {
                  setCurrentView2({ ...currentView2, phase: 31.5 });
                } else if (phase2 === 31.5) {
                  setCurrentView2({ ...currentView2, phase: 31 });
                } else if (phase2 === 29) {
                  setCurrentView2({ ...currentView2, phase: 27 });
                } else if (phase2 === 23) {
                  setCurrentView2({ ...currentView2, phase: 22.5 });
                } else if (phase2 === 22.5) {
                  setCurrentView2({ ...currentView2, phase: 22 });
                } else if (phase2 === 21) {
                  setCurrentView2({ ...currentView2, phase: 20 });
                } else if (phase2 === 20) {
                  setCurrentView2({ ...currentView2, phase: 19 });
                } else if (phase2 === 15) {
                  setCurrentView2({ ...currentView2, phase: 14.5 });
                } else if (phase2 === 14.5) {
                  setCurrentView2({ ...currentView2, phase: 14 });
                } else if (phase2 === 14) {
                  setCurrentView2({ ...currentView2, phase: 13.5 });
                } else if (phase2 === 13.5) {
                  setCurrentView2({ ...currentView2, phase: 13 });
                } else if (phase2 === 6) {
                  setCurrentView2({ ...currentView2, phase: 5 });
                  setActivePairwiseCombo([2, 3]);
                  return;
                } else if (phase2 === 5) {
                  setActivePairwiseCombo([1, 3]);
                  // console.log(phase2);
                  setCurrentView2({ ...currentView2, phase: 4 });
                  return;
                } else if (phase2 === 4) {
                  setCurrentView2({ ...currentView2, phase: phase2 - 1 });
                  setActivePairwiseCombo([1, 2]);
                  return;
                } else {
                  setCurrentView2({ ...currentView2, phase: phase2 - 1 });
                }
                // if (phase2 === 5) {
                //   setActivePairwiseCombo([1, 3]);
                // } else if (phase2 === 4) {
                //   setActivePairwiseCombo([1, 2]);
                // } else if (phase2 === 11) {
                //   setActivePairwiseMHPsCombo([1, 3]);
                // } else if (phase2 === 10) {
                //   setActivePairwiseMHPsCombo([1, 2]);
                // }
                // if (phase2 >= 9 && phase2 <= 11) {
                //   setPhase2(8);
                // } else {
                //   setPhase2(phase2 - 1);
                // }
              }}
              className="bg-primaryGreen text-white"
              text="Back"
              disabled={phase2 === 1}
            />
          )}{" "}
          {phase2 < 34 && (
            <PrimaryButton
              type="button"
              first
              callback={() => {
                handleClick();
              }}
              className={
                phase2 === 33.5
                  ? "bg-primaryBlue text-white"
                  : "bg-primaryGreen text-white"
              }
              text={phase2 === 33.5 ? "Finish" : "Next"}
              disabled={isDisabled()}
            />
          )}
        </div>
      </div>
    </ControlPanelWrapper>
  );
}
