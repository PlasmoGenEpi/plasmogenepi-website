import { atom } from "jotai";
import { atomWithStorage, RESET } from "jotai/utils";
import { MicroId } from "@/helpers/helpers";
import {
  currentView1Atom,
  currentView2Atom,
  currentView3Atom,
  // currentViewAtom,
} from "@/app/components/Interactives/Shared/InteractiveViewer/InteractiveViewer";
// import { Edge } from "@/app/components/Interactives/Sleuthing/PartEight/Pentagon";

export const VERSION_CONTROL = "1.1.2";

export const phase1Atom = atom((get) => {
  return get(currentView1Atom).phase;
});

export const phase2Atom = atom((get) => {
  return get(currentView2Atom).phase;
});

export const phase3Atom = atom((get) => {
  return get(currentView3Atom).phase;
});

export const selectedPositiveControlBoardAtom = atom(1);
export const selectedInfectionIndexAtom = atom<number>(0);
export const hintsEnabledAtom = atom(false);
export const genotypeHintsAtom = atom<
  ({ reference: boolean; alternate: boolean } | null)[]
>(
  Array(12)
    .fill(0)
    .map((el) => null),
);
export const MHPGenotypeHintsAtom = atom<
  {
    missing: MicroId[];
    extra: MicroId[];
  }[]
>(
  Array(4)
    .fill(0)
    .map((el, idx) => {
      return {
        extra: [],
        missing: [],
      };
    }),
);

/* **************************************
Sleuthing Part One Atoms
***************************************** */

export const partOneCompletionAtom = atomWithStorage<{
  [key: number]: boolean;
}>("partOneCompletionAtom", {
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
});
export const initialBoardState: {
  [key: number]: {
    id: number;
    rows: number[];
    valid: boolean;
    inputs: {
      reference: boolean;
      alternate: boolean;
    }[];
    inputValid: boolean;
    questions: {
      [key: number]: number | null;
    };
    questionsValid: boolean;
  };
} = {
  1: {
    id: 1,
    rows: [],
    valid: false,
    inputs: Array(12)
      .fill(0)
      .map((el, idx) => {
        return {
          reference: false,
          alternate: false,
        };
      }),
    inputValid: false,
    questions: {
      1: null,
      2: null,
    },
    questionsValid: false,
  },
  2: {
    id: 2,
    rows: [],
    valid: false,
    inputs: Array(12)
      .fill(0)
      .map((el, idx) => {
        return {
          reference: false,
          alternate: false,
        };
      }),
    inputValid: false,
    questions: {
      1: null,
      2: null,
    },
    questionsValid: false,
  },
  3: {
    id: 3,
    rows: [],
    valid: false,
    inputs: Array(12)
      .fill(0)
      .map((el, idx) => {
        return {
          reference: false,
          alternate: false,
        };
      }),
    inputValid: false,
    questions: {
      1: null,
      2: null,
    },
    questionsValid: false,
  },
  4: {
    id: 4,
    rows: [],
    valid: false,
    inputs: Array(12)
      .fill(0)
      .map((el, idx) => {
        return {
          reference: false,
          alternate: false,
        };
      }),
    inputValid: false,
    questions: {
      1: null,
      2: null,
    },
    questionsValid: false,
  },
  5: {
    id: 5,
    rows: [],
    valid: false,
    inputs: Array(12)
      .fill(0)
      .map((el, idx) => {
        return {
          reference: false,
          alternate: false,
        };
      }),
    inputValid: false,
    questions: {
      1: null,
      2: null,
    },
    questionsValid: false,
  },
  6: {
    id: 6,
    rows: [],
    valid: false,
    inputs: Array(12)
      .fill(0)
      .map((el, idx) => {
        return {
          reference: false,
          alternate: false,
        };
      }),
    inputValid: false,
    questions: {
      1: null,
      2: null,
    },
    questionsValid: false,
  },
};
export const positiveControlBoardsAtom = atomWithStorage(
  "positiveControlBoardsAtom",
  initialBoardState,
);
export const cloneRowsAtom = atomWithStorage<{
  [key: number]: {
    id: number;
    vals: (0 | 1 | null)[];
    microIds: string[];
  };
}>("cloneRowsAtom", {
  1: {
    id: 1,
    vals: Array(12).fill(null),
    microIds: Array(4).fill([]),
  },
  2: {
    id: 2,
    vals: Array(12).fill(null),
    microIds: Array(4).fill([]),
  },
  3: {
    id: 3,
    vals: Array(12).fill(null),
    microIds: Array(4).fill([]),
  },
  4: {
    id: 4,
    vals: Array(12).fill(null),
    microIds: Array(4).fill([]),
  },
  5: {
    id: 5,
    vals: Array(12).fill(null),
    microIds: Array(4).fill([]),
  },
});

/* **************************************
Sleuthing Part Two Atoms
***************************************** */

export const partTwoCompletionAtom = atomWithStorage<{
  [key: number]: boolean;
}>("partTwoCompletionAtom", {
  0: false,
  1: false,
  2: false,
  3: false,
});

export const partTwoAverageDeducedAtom = atomWithStorage(
  "partTwoAverageDeducedAtom",
  false,
);

export const partTwoInfectionsAtom = atomWithStorage<(number | null)[]>(
  "partTwoInfectionsAtom",
  Array(10)
    .fill(0)
    .map((el, idx) => {
      return null;
    }),
);

/* **************************************
Sleuthing Part Three Atoms
***************************************** */

export const partThreeCompletionAtom = atomWithStorage<{
  [key: number]: boolean;
}>("partThreeCompletionAtom", {
  1: false,
  2: false,
  3: false,
  4: false,
});

export const partThreePositiveControlBoardsAtom = atomWithStorage<{
  [key: number]: {
    id: number;
    rows: number[];
    valid: boolean;
    inputs: MicroId[][];
    inputValid: boolean;
    questions: {
      [key: number]: null | number | string;
    };
    questionsValid: boolean;
  };
}>("partThreePositiveControlBoardsAtom", {
  1: {
    id: 1,
    rows: [],
    valid: false,
    inputs: Array(4)
      .fill(0)
      .map(() => {
        return [];
      }),
    inputValid: false,
    questions: {
      1: null,
      2: null,
    },
    questionsValid: false,
  },
  2: {
    id: 2,
    rows: [],
    valid: false,
    inputs: Array(4)
      .fill(0)
      .map(() => {
        return [];
      }),
    inputValid: false,
    questions: {
      1: null,
      2: null,
    },
    questionsValid: false,
  },
  3: {
    id: 3,
    rows: [],
    valid: false,
    inputs: Array(4)
      .fill(0)
      .map(() => {
        return [];
      }),
    inputValid: false,
    questions: {
      1: null,
      2: null,
    },
    questionsValid: false,
  },
  4: {
    id: 4,
    rows: [],
    valid: false,
    inputs: Array(4)
      .fill(0)
      .map(() => {
        return [];
      }),
    inputValid: false,
    questions: {
      1: null,
      2: null,
      3: "",
    },
    questionsValid: false,
  },
  5: {
    id: 5,
    rows: [],
    valid: false,
    inputs: Array(4)
      .fill(0)
      .map(() => {
        return [];
      }),
    inputValid: false,
    questions: {
      1: null,
      2: null,
    },
    questionsValid: false,
  },
  6: {
    id: 6,
    rows: [],
    valid: false,
    inputs: Array(4)
      .fill(0)
      .map(() => {
        return [];
      }),
    inputValid: false,
    questions: {
      1: null,
      2: null,
    },
    questionsValid: false,
  },
});

export const clonesTableTransformAttemptedAtom = atom(false);

export const transformMatrixAtom = atomWithStorage("transformMatrixAtom", {
  1: [false, false, false, false],
  2: [false, false, false, false],
  3: [false, false, false, false],
  4: [false, false, false, false],
  5: [false, false, false, false],
});

export const activeRowColumnTransformAtom = atom<
  [1 | 2 | 3 | 4 | 5, 0 | 1 | 2 | 3]
>([1, 0]);

// Part Four

export const partFourCompletionAtom = atomWithStorage(
  "partFourCompletionAtom",
  {
    1: false,
    2: false,
  },
);

export const partFourAverageDeducedAtom = atomWithStorage(
  "partFourAverageDeducedAtom",
  false,
);

export const partFourInfectionsAtom = atomWithStorage<(number | null)[]>(
  "partFourInfectionsAtom",
  Array(10)
    .fill(0)
    .map((el, idx) => {
      return null;
    }),
);

export const partFiveCompletionAtom = atomWithStorage<{
  [key: number]: boolean;
}>("partFiveCompletionAtom", {
  0: false,
  1: false,
});

/* **************************************
Sleuthing Part Six Atoms
***************************************** */

export const partSixSNPHybridCreatedAtom = atomWithStorage(
  "partSixSNPHybridCreatedAtom",
  false,
);

export const partSixCloneRowsAtom = atomWithStorage<{
  [key: number]: {
    id: number;
    vals: (0 | 1 | null)[];
  };
}>("partSixCloneRowsAtom", {
  1: {
    id: 1,
    vals: Array(12).fill(null),
  },
  2: {
    id: 2,
    vals: Array(12).fill(null),
  },
  3: {
    id: 3,
    vals: Array(12).fill(null),
  },
  4: {
    id: 4,
    vals: Array(12).fill(null),
  },
});

export const partSixFirstQuestionAtom = atomWithStorage<null | number>(
  "partSixFirstQuestionAtom",
  null,
);

export const activePairwiseComboAtom = atom<[number, number]>([1, 2]);
export const pairwiseCombosAtom = atomWithStorage<{
  [key: number]: {
    [key: number]: boolean[];
  };
}>("pairwiseCombosAtom", {
  1: {
    2: Array(12).fill(false),
    3: Array(12).fill(false),
    4: Array(12).fill(false),
  },
  2: {
    1: Array(12).fill(false),
    3: Array(12).fill(false),
    4: Array(12).fill(false),
  },
  3: {
    1: Array(12).fill(false),
    2: Array(12).fill(false),
    4: Array(12).fill(false),
  },
  4: {
    1: Array(12).fill(false),
    2: Array(12).fill(false),
    3: Array(12).fill(false),
  },
});

export const partSixSNPHistogramQuestionsAtom = atomWithStorage<{
  [key: number]: number | null;
}>("partSixSNPHistogramQuestionsAtom", {
  1: null,
  2: null,
  3: null,
});

export const partSixCloneRowsMHPsAtom = atomWithStorage<{
  [key: number]: {
    id: number;
    vals: (number | null)[];
  };
}>("partSixCloneRowsMHPsAtom", {
  1: {
    id: 1,
    vals: Array(12).fill(null),
  },
  2: {
    id: 2,
    vals: Array(12).fill(null),
  },
  3: {
    id: 3,
    vals: Array(12).fill(null),
  },
  4: {
    id: 4,
    vals: Array(12).fill(null),
  },
});

export const pairwiseCompletionAtom = atomWithStorage(
  "pairwiseCompletionAtom",
  {
    1: {
      2: false,
      3: false,
      4: false,
    },
    2: {
      1: false,
      3: false,
      4: false,
    },
    3: {
      1: false,
      2: false,
      4: false,
    },
    4: {
      1: false,
      2: false,
      3: false,
    },
  },
);

export const partSixPairwiseQuestionsAtom = atomWithStorage<{
  [key: string]: {
    [key: number]: null | number;
  };
}>("partSixPairwiseQuestionsAtom", {
  "[1,2]": {
    1: null,
    2: null,
    3: null,
  },
  "[1,3]": {
    1: null,
    2: null,
    3: null,
  },
  "[2,3]": {
    1: null,
    2: null,
    3: null,
  },
  "[1,4]": {
    1: null,
    2: null,
    3: null,
  },
  "[2,4]": {
    1: null,
    2: null,
    3: null,
    4: null,
  },
  "[3,4]": {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  },
});

export const partSixSNPKnowledgeCheckQuestionsAtom = atomWithStorage<{
  [key: number]: null | boolean;
}>("partSixSNPKnowledgeCheckQuestionsAtom", {
  1: null,
  2: null,
  3: null,
});

export const activePairwiseMHPsComboAtom = atom<[number, number]>([1, 2]);
export const pairwiseCombosMHPsAtom = atomWithStorage<{
  [key: number]: {
    [key: number]: boolean[];
  };
}>("pairwiseCombosMHPsAtom", {
  1: {
    2: Array(12).fill(false),
    3: Array(12).fill(false),
    4: Array(12).fill(false),
  },
  2: {
    1: Array(12).fill(false),
    3: Array(12).fill(false),
    4: Array(12).fill(false),
  },
  3: {
    1: Array(12).fill(false),
    2: Array(12).fill(false),
    4: Array(12).fill(false),
  },
  4: {
    1: Array(12).fill(false),
    2: Array(12).fill(false),
    3: Array(12).fill(false),
  },
});

export const pairwiseMHPCompletionAtom = atomWithStorage(
  "pairwiseMHPCompletionAtom",
  {
    1: {
      2: false,
      3: false,
      4: false,
    },
    2: {
      1: false,
      3: false,
      4: false,
    },
    3: {
      1: false,
      2: false,
      4: false,
    },
    4: {
      1: false,
      2: false,
      3: false,
    },
  },
);

export const partSixMHPPairwiseQuestionsAtom = atomWithStorage<{
  [key: string]: {
    [key: number]: null | number;
  };
}>("partSixMHPPairwiseQuestionsAtom", {
  "[1,2]": {
    1: null,
    2: null,
    3: null,
  },
  "[1,3]": {
    1: null,
    2: null,
    3: null,
  },
  "[2,3]": {
    1: null,
    2: null,
    3: null,
  },
  "[1,4]": {
    1: null,
    2: null,
    3: null,
  },
  "[2,4]": {
    1: null,
    2: null,
    3: null,
    4: null,
  },
  "[3,4]": {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  },
});

export const partSixCompletionAtom = atomWithStorage<{
  [key: number]: boolean;
}>("partSixCompletionAtom", {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false,
  11: false,
  33: false,
});

export const partSixMHPPolycloncalGenotypesAtom = atomWithStorage<{
  [key: string]: boolean[];
}>("partSixMHPPolycloncalGenotypesAtom", {
  "[1,2]": Array(12).fill(false),
  "[1,3]": Array(12).fill(false),
  "[2,3]": Array(12).fill(false),
});

export const partSixGenotypeCompletionAtom = atomWithStorage(
  "partSixGenotypeCompletionAtom",
  {
    "[1,2]": {
      3: false,
      4: false,
    },
    "[2,3]": {
      1: false,
      4: false,
    },
    "[1,3]": {
      2: false,
      4: false,
    },
  },
);

// Part Seven

export const partSevenCompletionAtom = atomWithStorage<{
  [key: number]: boolean;
}>("partSevenCompletionAtom", {});

// Part Eight

export const partEightMOIInputsAtom = atomWithStorage<{
  [key: string]: boolean;
}>("partEightMOIInputsAtom", {
  A: false,
  B: false,
  C: false,
  D: false,
  E: false,
  F: false,
  G: false,
  H: false,
  I: false,
});

export const partEightCompletionAtom = atomWithStorage<{
  [key: number]: boolean;
}>("partEightCompletionAtom", {
  1: false,
  2: false,
  3: false,
  4: false,
  11: true,
});

export const partEightQuestionsAtom = atomWithStorage<{
  [key: number]: null | number;
}>("partEightQuestionsAtom", {
  1: null,
  2: null,
});

export const partEightDiamondPersonPairAtom = atom<null | string>(null);

export const partEightDiamondPairViewedAtom = atomWithStorage(
  "partEightDiamondPairViewedAtom",
  {
    AB: false,
    AC: false,
    AD: false,
    BC: false,
    BD: false,
    CD: false,
  },
);

export const partEightPentagonPersonPairAtom = atom<{
  1: null | "E" | "F" | "G" | "H" | "I";
  2: null | "E" | "F" | "G" | "H" | "I";
  // 3: null | "E" | "F" | "C" | "D";
}>({
  1: null,
  2: null,
  // 3: null,
});

export const partEightPentagonPairViewedAtom = atomWithStorage(
  "partEightPentagonPairViewedAtom",
  {
    EF: false,
    EG: false,
    EH: false,
    EI: false,
    FG: false,
    FH: false,
    FI: false,
    GH: false,
    GI: false,
    HI: false,
  },
);

export const partEightPentagonSelectedEdgesAtom = atomWithStorage<{
  [key in Edge]: {
    selected: boolean;
    enabled: boolean;
    direction: null | "forwards" | "backwards";
    visited: boolean;
  };
}>("partEightPentagonSelectedEdgesAtom", {
  EF: {
    selected: false,
    visited: false,
    enabled: false,
    direction: null,
  },
  EG: {
    selected: false,
    visited: false,
    enabled: false,
    direction: null,
  },
  EH: {
    selected: false,
    visited: false,
    enabled: false,
    direction: null,
  },
  EI: {
    selected: false,
    visited: false,
    enabled: false,
    direction: null,
  },
  FG: {
    selected: false,
    visited: false,
    enabled: false,
    direction: null,
  },
  FH: {
    selected: false,
    visited: false,
    enabled: false,
    direction: null,
  },
  FI: {
    selected: false,
    visited: false,
    enabled: false,
    direction: null,
  },
  GH: {
    selected: false,
    visited: false,
    enabled: false,
    direction: null,
  },
  GI: {
    selected: false,
    visited: false,
    enabled: false,
    direction: null,
  },
  HI: {
    selected: false,
    visited: false,
    enabled: false,
    direction: null,
  },
});

export const partEightPentagonQuestionsAtom = atomWithStorage<{
  1: {
    [key: number]: boolean;
  };
  2: null | number;
  3: null | number;
  4: null | number;
}>("partEightPentagonQuestionsAtom", {
  1: {
    1: false,
    2: false,
    3: false,
  },
  2: null,
  3: null,
  4: null,
});

// Drag Drop

export const dragDropCompletionAtom = atomWithStorage<{
  [key: number]: {
    [key: number]: boolean;
  };
}>("dragDropCompletionAtom", {});

export const globalDragAtom = atom(false);
export const dragLocationAtom = atom<{
  x: number | null;
  y: number | null;
}>({
  x: null,
  y: null,
});

export type ReadType = {
  id: number;
  readStart: boolean;
  charStart: null | number;
  rowStart: null | number;
  text: string;
  trash: number | null;
  prevPosition: null | "start" | number | "trash";
  arrowKeyMovement?: boolean;
  dragTarget?: boolean;
  rowChange?: boolean;
  specials?: {
    color?: string;
    [key: number]: string;
  };
  specials2?: boolean[];
};
export const readsAtom = atomWithStorage<ReadType[]>("readsAtom", [
  {
    id: 1,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "TGTGTAATGAATAAA",
  },
  {
    id: 2,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "TGTGTAATGAATAAA",
  },
  {
    id: 3,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "AACTTTAAACAAAAT",
  },
  {
    id: 4,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "AACTTTAAACAAAAT",
  },
  {
    id: 5,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "TGTGTAATGAATAAA",
  },
  {
    id: 6,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "AACTTTAAACAAAAT",
  },
  {
    id: 7,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "TGTGTAATGAATAAA",
  },
  {
    id: 8,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "AACTTTAAACAAAAT",
  },
  {
    id: 9,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "TGTGTAATGAATAAA",
  },
  {
    id: 10,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "TGTGTAATGAATAAA",
  },
]);

export const dragDropQuestionsAtom = atomWithStorage<{
  [key: number]: number | null | undefined | number[];
}>("dragDropQuestionsAtom", {});

export const reads2Atom = atomWithStorage<
  {
    rowChange?: boolean;
    id: number;
    readStart: boolean;
    charStart: null | number;
    rowStart: null | number;
    text: string;
    trash: number | null;
    prevPosition: null | "start" | "trash" | number;
    specials?: {
      color?: string;
      [key: number]: string;
    };
  }[]
>("reads2Atom", [
  {
    id: 1,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "AACGTTGAACATAAT",
    specials: {
      3: "red",
      6: "red",
      11: "red",
    },
  },
  {
    id: 2,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "TGTGTAATGAATAAA",
  },
  {
    id: 3,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "TGTGTAATAAATAAA",
    specials: {
      8: "red",
    },
  },
  {
    id: 4,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "TCTGTATTAAATACA",
    specials: {
      1: "red",
      8: "red",
      13: "red",
    },
  },
  {
    id: 5,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "AACTTTAAACAAAAT",
  },
  {
    id: 6,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "AACGTTGAACATAAT",
    specials: {
      3: "red",
      6: "red",
      11: "red",
    },
  },
  {
    id: 7,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "TCTGTAATACAAAAT",
    specials: {
      1: "red",
    },
  },
  {
    id: 8,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "TCTGTAATAAATACA",
    specials: {
      1: "red",
      8: "red",
      13: "red",
    },
  },
  {
    id: 9,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "AACTTTAAACAAAAT",
  },
  {
    id: 10,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "AACTTTAAACAAAAT",
  },
  {
    id: 11,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "TCTGTAATAAATACA",
    specials: {
      1: "red",
      8: "red",
      13: "red",
    },
  },
  {
    id: 12,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "TGTGTAATGAATAAA",
  },
  {
    id: 13,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "AACTTTAAACAAAAT",
  },
  {
    id: 14,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "AACGTTGAACATAAT",
    specials: {
      3: "red",
      6: "red",
      11: "red",
    },
  },
  {
    id: 15,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "TGTGTAATGAATAAA",
  },
  {
    id: 16,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "TGTGTAATAAATAAA",
    specials: {
      8: "red",
    },
  },
  {
    id: 17,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "AGTGAGTTTCGCGCG",
  },
  {
    id: 18,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "TGTGTAATGAATAAA",
  },
  {
    id: 19,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "AACGTTGAACATACT",
    specials: {
      3: "red",
      6: "red",
      11: "red",
    },
  },
  {
    id: 20,

    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    prevPosition: null,
    text: "ATATATAGGGGGGGG",
  },
]);
