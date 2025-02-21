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
  phaseAtom,
  VERSION_CONTROL,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import ControlPanelWrapper from "../../Shared/ControlPanel/ControlPanelWrapper";
import PrimaryButton from "../../Shared/ControlPanel/PrimaryButton";
import { resetConfirmOpenAtom } from "../../Shared/ControlPanel/ResetModal";
import { atomWithStorage, RESET } from "jotai/utils";
import { compareOrderedArrays } from "@/helpers/helpers";
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

const P6CurrentVersionAtom = atomWithStorage("P6CurrentVersionAtom", "1.1.1");

export default function PartSixControlBoard({
  direction,
}: {
  direction: "forwards" | "backwards" | null;
}) {
  const [partSixSNPHybridCreated, setPartSixSNPHybridCreated] = useAtom(
    partSixSNPHybridCreatedAtom,
  );
  const [knowledgeCheckSNPQuestions, setKnowledgeCheckSNPQuestions] = useAtom(
    partSixSNPKnowledgeCheckQuestionsAtom,
  );
  const [firstQuestion, setFirstQuestion] = useAtom(partSixFirstQuestionAtom);
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);
  const [hintsEnabled, setHintsEnabled] = useAtom(hintsEnabledAtom);
  const [completion, setCompletion] = useAtom(partSixCompletionAtom);
  const [phase, setPhase] = useAtom(phaseAtom);
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
  const [slidoPause, setSlidoPause] = useState(false);
  const [partSixMHPHybridCreated, setPartSixMHPHybridCreated] = useAtom(
    partSixMHPHybridCreatedAtom,
  );
  const [finalHybridQ, setFinalHybridQ] = useAtom(finalHybridQAtom);
  const [someQ, setSomeQ] = useAtom(SNPvsMHPquestionAtom);
  const [currentVersion, setCurrentVersion] = useAtom(P6CurrentVersionAtom);
  const [initialQuestion, setInitialQuestion] = useAtom(
    SNPMHPInitialQuestionAtom,
  );
  const [hybridMHPQuestion, setHybridMHPQuestion] = useAtom(
    hybridMHPCloneQuestionAtom,
  );
  const setP7Completion = useSetAtom(partSevenCompletionAtom);
  const setP7Genotypes = useSetAtom(partSixMHPPolycloncalGenotypesAtom);
  const setP7Questions = useSetAtom(P6Step2QuestionsAtom);
  const setP7IdenticalGenotype = useSetAtom(identicalGenotypeAtom);
  const setP7IdenticalGenotype2 = useSetAtom(identicalGenotype2Atom);
  const setP7SelectedClones = useSetAtom(selectedClonesAtom);

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
      ([6, 7, 17, 26, 27, 28, 20].includes(phase) && !completion[phase]) ||
      phase === 33.5
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
  }, [phase]);

  const [first, second] = activePairwiseCombo;

  function isDisabled() {
    if (phase === 61) {
      return true;
    }
    if (phase === 33.5) {
      return slidoPause;
    }
    if (phase === 32) {
      return finalHybridQ !== 0;
    }

    if (phase === 22.5) {
      return initialQuestion !== 0;
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
    } else if (phase === 6 || phase === 7) {
      return slidoPause;
    } else if (phase === 8) {
      if (partSixSNPHistogramQuestions[1] === 1) {
        return false;
      }
    } else if (phase === 9) {
      if (partSixSNPHistogramQuestions[2] === 0) {
        return false;
      }
    } else if (phase === 10) {
      if (partSixSNPHistogramQuestions[3] === 0) {
        return false;
      }
    } else if (phase === 11) {
      if (partSixSNPHybridCreated === true) {
        return false;
      }
    } else if (phase === 12) {
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
    } else if (phase === 13) {
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
    } else if (phase === 13.5) {
      if (partSixPairwiseQuestions["[2,4]"][4] === 3) {
        return false;
      } else {
        return true;
      }
    } else if (phase === 14) {
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
    } else if (phase === 14.5) {
      if (partSixPairwiseQuestions["[3,4]"][4] === 12) {
        return false;
      } else {
        return true;
      }
    } else if (phase === 18) {
      return false;
    } else if (phase === 19) {
      return !(
        knowledgeCheckSNPQuestions[1] === true &&
        knowledgeCheckSNPQuestions[2] === true &&
        (knowledgeCheckSNPQuestions[3] === false ||
          knowledgeCheckSNPQuestions[3] === null)
      );
    } else if (phase <= 20) {
      return slidoPause;
    } else if (phase === 21) {
      return false;
    } else if (phase === 22) {
      for (let k in cloneRowsMHPs) {
        if (cloneRowsMHPs[k].vals.includes(null)) {
          return true;
        }
      }
      return false;
    } else if (phase === 23) {
      if (pairwiseMHPCompletion[1][2] === false) {
        let x = cloneRowsMHPs[activePairwiseMHPsCombo[0]].vals.map(
          (val, idx) => {
            return val === cloneRowsMHPs[activePairwiseMHPsCombo[1]].vals[idx];
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
    } else if (phase === 24) {
      if (pairwiseMHPCompletion[1][3] === false) {
        let x = cloneRowsMHPs[activePairwiseMHPsCombo[0]].vals.map(
          (val, idx) => {
            return val === cloneRowsMHPs[activePairwiseMHPsCombo[1]].vals[idx];
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
    } else if (phase === 25) {
      if (pairwiseMHPCompletion[2][3] === false) {
        let x = cloneRowsMHPs[activePairwiseMHPsCombo[0]].vals.map(
          (val, idx) => {
            return val === cloneRowsMHPs[activePairwiseMHPsCombo[1]].vals[idx];
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
    } else if (phase === 26) {
      return slidoPause;
    } else if (phase === 27) {
      return slidoPause;
    } else if (phase === 28) {
      return slidoPause;
    } else if (phase === 29) {
      return !partSixMHPHybridCreated;
    } else if (phase === 30) {
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
    } else if (phase === 31) {
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
    } else if (phase === 31.5) {
      return hybridMHPQuestion !== 1;
    } else if (phase === 32) {
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
    } else if (phase === 33) {
      return someQ !== 0;
    } else if (phase === 33.5) {
      return false;
    } else if (phase >= 50) {
      return false;
    }
    return true;
  }

  function handleClick() {
    // if (phase === 21) {
    //   setPhase(50);
    //   return;
    // }
    // if (phase === 8) {
    //   setActivePairwiseMHPsCombo([1, 2]);
    // }
    if (phase === 3) {
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

    if (phase === 4) {
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

    if (phase === 5) {
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

    if (phase === 12) {
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

    if (phase === 13) {
      if (pairwiseCompletion[2][4]) {
        // setActivePairwiseCombo([3, 4]);
        setCompletion({ ...completion, [phase]: true });
        setPhase(13.5);
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

    if (phase === 13.5) {
      setActivePairwiseCombo([3, 4]);
      setPhase(14);
      setCompletion({ ...completion, [phase]: true });
      return;
    }

    if (phase === 14) {
      if (pairwiseCompletion[3][4]) {
        // setActivePairwiseCombo([2, 4]);
        setCompletion({ ...completion, [phase]: true });
        setPhase(14.5);
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

    if (phase === 14.5) {
      setActivePairwiseCombo([3, 4]);
      setPhase(15);
      setCompletion({ ...completion, [phase]: true });
      return;
    }

    if (phase === 18) {
      setPhase(19);
      setCompletion({ ...completion, [phase]: true });
      return;
    }

    if (phase === 19) {
      setPhase(20);
      setCompletion({ ...completion, [phase]: true });
      return;
    }

    if (phase === 20) {
      setPhase(21);
      setCompletion({ ...completion, [phase]: true });
      return;
    }

    if (phase === 22) {
      setPhase(22.5);
      setCompletion({ ...completion, [phase]: true });
      return;
    }
    if (phase === 22.5) {
      setPhase(23);
      setCompletion({ ...completion, [phase]: true });
      return;
    }

    if (phase === 23) {
      console.log(pairwiseMHPCompletion);
      if (pairwiseMHPCompletion[1][2]) {
        setPhase(24);
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

    if (phase === 24) {
      console.log(pairwiseMHPCompletion);
      if (pairwiseMHPCompletion[1][3]) {
        setPhase(25);
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

    if (phase === 25) {
      if (pairwiseMHPCompletion[2][3]) {
        setPhase(26);
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

    if (phase === 27) {
      setPhase(29);
      setCompletion({ ...completion, [phase]: true });
      return;
    }

    if (phase === 30) {
      if (pairwiseMHPCompletion[1][4]) {
        setPhase(31);
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
    } else if (phase === 31) {
      if (pairwiseMHPCompletion[2][4]) {
        setPhase(31.5);
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
    } else if (phase === 31.5) {
      setPhase(32);
      setCompletion({ ...completion, [phase]: true });
      return;
    } else if (phase === 32) {
      if (pairwiseMHPCompletion[3][4]) {
        setPhase(33);
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
    } else if (phase === 33) {
      setPhase(33.5);
      setCompletion({ ...completion, [phase]: true });
      return;
    } else if (phase === 33.5) {
      setPhase(34);
      setCompletion({ ...completion, [phase]: true });
      return;
    }

    setPhase(phase + 1);
    setCompletion({ ...completion, [phase]: true });
  }

  return (
    <ControlPanelWrapper fixed resetCallback={resetCallback}>
      <div className="mx-auto max-w-6xl">
        {phase !== 34 && (
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
                if (phase === 34) {
                  setPhase(33.5);
                } else if (phase === 33.5) {
                  setPhase(33);
                } else if (phase === 32) {
                  setPhase(31.5);
                } else if (phase === 31.5) {
                  setPhase(31);
                } else if (phase === 29) {
                  setPhase(27);
                } else if (phase === 23) {
                  setPhase(22.5);
                } else if (phase === 22.5) {
                  setPhase(22);
                } else if (phase === 21) {
                  setPhase(20);
                } else if (phase === 20) {
                  setPhase(19);
                } else if (phase === 15) {
                  setPhase(14.5);
                } else if (phase === 14.5) {
                  setPhase(14);
                } else if (phase === 14) {
                  setPhase(13.5);
                } else if (phase === 13.5) {
                  setPhase(13);
                } else if (phase === 6) {
                  setPhase(5);
                  setActivePairwiseCombo([2, 3]);
                  return;
                } else if (phase === 5) {
                  setActivePairwiseCombo([1, 3]);
                  // console.log(phase);
                  setPhase(4);
                  return;
                } else if (phase === 4) {
                  setPhase(phase - 1);
                  setActivePairwiseCombo([1, 2]);
                  return;
                } else {
                  setPhase(phase - 1);
                }
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
          {phase < 34 && (
            <PrimaryButton
              type="button"
              first
              callback={() => {
                handleClick();
              }}
              className={
                phase === 33.5
                  ? "bg-primaryBlue text-white"
                  : "bg-primaryGreen text-white"
              }
              text={phase === 33.5 ? "Finish" : "Next"}
              disabled={isDisabled()}
            />
          )}
        </div>
      </div>
    </ControlPanelWrapper>
  );
}
