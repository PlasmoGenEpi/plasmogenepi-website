import { Atom, WritableAtom, atom } from "jotai";
import { CloneRow, CloneRowPersisted, RefRow } from "../types";
import { atomWithStorage } from "jotai/utils";
import { initialState } from "./initialState.ts"

export const isTouchScreenAtom = atomWithStorage("isTouchScreenAtom", false);

export const refGenome = "GTATGTGTAATGAATAAAATTTTTGCTAAAAGAACTTTAAACAAAATTGGT";
export const readsAtom = atomWithStorage("readsAtom", initialState.readsAtom);

export const readOneQuestionsAtom = atomWithStorage("readOneQuestionsAtom", {
  1: {
    oneChecked: false,
    twoChecked: false,
    threeChecked: false,
    fourChecked: false,
    correct: false,
  },
  2: {
    oneChecked: false,
    twoChecked: false,
    threeChecked: false,
    fourChecked: false,
    correct: false,
  },
});

export const partSevenSubstepCompletionsAtom = atomWithStorage(
  "partSevenSubstepCompletionsAtom",
  {
    1: false,
    2: false,
    3: false,
    4: false,
  },
);

export const reads2Atom = atomWithStorage("reads2Atom", [
  {
    id: 1,
    top: 32,
    left: 32,
    text: "AACGTTGAACATAAT",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      3: "red",
      6: "red",
      11: "red",
    },
  },
  {
    id: 2,
    top: 64,
    left: 32,
    text: "TGTGTAATGAATAAA",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      1: "purple",
      8: "purple",
      13: "purple",
    },
  },
  {
    id: 3,
    top: 96,
    left: 32,
    text: "TGTGTAATAAATAAA",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      1: "purple",
      8: "red",
      13: "purple",
    },
  },
  {
    id: 4,
    top: 128,
    left: 32,
    text: "TCTGTATTAAATACA",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      1: "red",
      6: "orange",
      8: "red",
      13: "red",
    },
  },
  {
    id: 5,
    top: 160,
    left: 32,
    text: "AACTTTAAACAAAAT",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      3: "purple",
      6: "purple",
    },
  },
  {
    id: 6,
    top: 192,
    left: 32,
    text: "AACGTTGAACATAAT",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      3: "red",
      6: "red",
      11: "red",
    },
  },
  {
    id: 7,
    top: 224,
    left: 32,
    text: "TCTGTAATACAAAAT",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      color: "beige",
      1: "red",
    },
  },
  {
    id: 8,
    top: 256,
    left: 32,
    text: "TCTGTAATAAATACA",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      1: "red",
      8: "red",
      13: "red",
    },
  },
  {
    id: 9,
    top: 288,
    left: 32,
    text: "AACTTTAAACAAAAT",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      3: "purple",
      6: "purple",
    },
  },
  {
    id: 10,
    top: 320,
    left: 32,
    text: "AACTTTAAACAAAAT",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      3: "purple",
      6: "purple",
    },
  },
  {
    id: 11,
    top: 32,
    left: 32,
    text: "TCTGTAATAAATACA",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      1: "red",
      8: "red",
      13: "red",
    },
  },
  {
    id: 12,
    top: 64,
    left: 32,
    text: "TGTGTAATGAATAAA",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      1: "purple",
      8: "purple",
      13: "purple",
    },
  },
  {
    id: 13,
    top: 96,
    left: 32,
    text: "AACTTTAAACAAAAT",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      3: "purple",
      6: "purple",
    },
  },
  {
    id: 14,
    top: 128,
    left: 32,
    text: "AACGTTGAACATAAT",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      3: "red",
      6: "red",
      11: "red",
    },
  },
  {
    id: 15,
    top: 160,
    left: 32,
    text: "TGTGTAATGAATAAA",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      1: "purple",
      8: "purple",
      13: "purple",
    },
  },
  {
    id: 16,
    top: 192,
    left: 32,
    text: "TGTGTAATAAATAAA",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      1: "purple",
      8: "red",
      13: "purple",
    },
  },
  {
    id: 17,
    top: 224,
    left: 32,
    text: "AGTGAGTTTCGCGCG",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      color: "rebeccapurple",
    },
  },
  {
    id: 18,
    top: 256,
    left: 32,
    text: "TGTGTAATGAATAAA",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      1: "purple",
      8: "purple",
      13: "purple",
    },
  },
  {
    id: 19,
    top: 288,
    left: 32,
    text: "AACGTTGAACATAAT",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      3: "red",
      6: "red",
      11: "red",
    },
  },
  {
    id: 20,
    top: 320,
    left: 32,
    text: "ATATATAGGGGGGGG",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      color: "rebeccapurple",
    },
  },
]);

export const reads3Atom = atomWithStorage("reads3Atom", [
  {
    id: 11,
    top: 32,
    left: 32,
    text: "TCTGTAATAAATACA",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      1: "red",
      8: "red",
      13: "red",
    },
  },
  {
    id: 12,
    top: 64,
    left: 32,
    text: "TGTGTAATGAATAAA",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      1: "purple",
      8: "purple",
      13: "purple",
    },
  },
  {
    id: 13,
    top: 96,
    left: 32,
    text: "AACTTTAAACAAAAT",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      3: "purple",
      6: "purple",
    },
  },
  {
    id: 14,
    top: 128,
    left: 32,
    text: "AACGTTGAACATAAT",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      3: "red",
      6: "red",
      11: "red",
    },
  },
  {
    id: 15,
    top: 160,
    left: 32,
    text: "TGTGTAATGAATAAA",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      1: "purple",
      8: "purple",
      13: "purple",
    },
  },
  {
    id: 16,
    top: 192,
    left: 32,
    text: "TGTGTAATAAATAAA",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      1: "purple",
      8: "red",
      13: "purple",
    },
  },
  {
    id: 17,
    top: 224,
    left: 32,
    text: "AGTGAGTTTCGCGCG",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      color: "rebeccapurple",
    },
  },
  {
    id: 18,
    top: 256,
    left: 32,
    text: "TGTGTAATGAATAAA",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      1: "purple",
      8: "purple",
      13: "purple",
    },
  },
  {
    id: 19,
    top: 288,
    left: 32,
    text: "AACGTTGAACATAAT",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      3: "red",
      6: "red",
      11: "red",
    },
  },
  {
    id: 20,
    top: 320,
    left: 32,
    text: "ATATATAGGGGGGGG",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      color: "rebeccapurple",
    },
  },
]);

const refValues = ["T", "T", "T", "C", "T", "C", "C", "C", "T", "A", "G", "C"];
const altValues = ["C", "A", "C", "G", "A", "G", "G", "A", "A", "C", "A", "G"];

export const P3QuestionsAtom = atomWithStorage("P3QuestionsAtom", {
  1: [
    {
      answered: false,
      correct: false,
      val: null,
      text: "How many loci in positive control 1 have single alleles?",
    },
    {
      answered: false,
      correct: false,
      val: null,
      text: "How many loci in positive control 1 have more than one allele?",
    },
  ],
  2: [
    {
      answered: false,
      correct: false,
      val: null,
      text: "How many loci in positive control 2 have single alleles?",
    },
    {
      answered: false,
      correct: false,
      val: null,
      text: "How many loci in positive control 2 have more than one allele?",
    },
  ],
  3: [
    {
      answered: false,
      correct: false,
      val: null,
      text: "How many loci in positive control 3 have single alleles?",
    },
    {
      answered: false,
      correct: false,
      val: null,
      text: "What is the highest number of alleles seen at a given locus in positive control 3?",
    },
    {
      answered: false,
      correct: false,
      val: null,
      text: "How many loci have more than two alleles in positive control 3?",
    },
  ],
  4: [
    {
      answered: false,
      correct: false,
      val: null,
      text: "How many loci in positive control 4 have single alleles?",
    },
    {
      answered: false,
      correct: false,
      val: null,
      text: "What is the highest number of alleles seen at a given locus in positive control 4?",
    },
  ],
  5: [
    {
      answered: false,
      correct: false,
      val: null,
      text: "How many loci in positive control 5 have single alleles?",
    },
    {
      answered: false,
      correct: false,
      val: null,
      text: "What is the highest number of alleles seen at a given locus in positive control 5?",
    },
    {
      answered: false,
      correct: false,
      val: null,
      text: "How many loci in positive control 5 have this highest number of alleles?",
    },
  ],
  6: [
    {
      answered: false,
      correct: false,
      val: null,
      text: "What is the highest number of alleles seen at a given locus in positive control 6?",
    },
    {
      oneChecked: false,
      twoChecked: false,
      threeChecked: false,
      correct: false,
      text: "Why don't all the loci in these two samples have 4 alleles detected, if the MOI is 4?",
    },
  ],
});

const countAlleles = (
  lociInput: { 1: string[]; 2: string[]; 3: string[]; 4: string[] },
  targetNum?: number,
  sharedHigh?: boolean,
) => {
  let count = 0;
  let high = 0;

  for (let k in lociInput) {
    if (lociInput[k].length === targetNum) {
      count++;
    }
    if (lociInput[k].length > high) {
      high = lociInput[k].length;
    }
  }
  console.log(targetNum, high);
  if (sharedHigh) {
    let newCount = 0;
    for (let k in lociInput) {
      if (lociInput[k].length === high) {
        newCount++;
      }
    }
    return newCount;
  }
  if (targetNum) {
    return count;
  }
  return high;
};

export const setP3QuestionsAtom = atom(
  null,
  (get, set, questionIdx: number, val) => {
    const activeMicroPCB = get(activeMicroPCBAtom);
    const currentMicroBoard = get(microPCBMap[activeMicroPCB]);
    const P3Questions = { ...get(P3QuestionsAtom) };
    const P3BoardQuestions = [...P3Questions[activeMicroPCB]];
    const currentQuestion = { ...P3BoardQuestions[questionIdx] };

    currentQuestion.val = val;
    currentQuestion.answered = true;
    if (activeMicroPCB === 1) {
      if (questionIdx === 0) {
        currentQuestion.correct = val === 4;
      } else if (questionIdx === 1) {
        currentQuestion.correct = val === 0;
      }
    } else if (activeMicroPCB === 2) {
      if (questionIdx === 0) {
        currentQuestion.correct = val === 4;
      } else if (questionIdx === 1) {
        currentQuestion.correct = val === 0;
      }
    } else if (activeMicroPCB === 3) {
      if (questionIdx === 0) {
        let x = countAlleles(currentMicroBoard.lociInput, 1);
        currentQuestion.correct = val === x;
      } else if (questionIdx === 1) {
        let x = countAlleles(currentMicroBoard.lociInput);
        currentQuestion.correct = val === x;
      } else if (questionIdx === 2) {
        currentQuestion.correct = val === 0;
      }
    } else if (activeMicroPCB === 4) {
      if (questionIdx === 0) {
        let x = countAlleles(currentMicroBoard.lociInput, 1);
        currentQuestion.correct = val === x;
      } else if (questionIdx === 1) {
        let x = countAlleles(currentMicroBoard.lociInput);
        currentQuestion.correct = val === x;
      } else if (questionIdx === 2) {
      }
    } else if (activeMicroPCB === 5) {
      if (questionIdx === 0) {
        let x = countAlleles(currentMicroBoard.lociInput, 1);
        currentQuestion.correct = val === x;
      } else if (questionIdx === 1) {
        let x = countAlleles(currentMicroBoard.lociInput);
        currentQuestion.correct = val === x;
      } else if (questionIdx === 2) {
        let x = countAlleles(currentMicroBoard.lociInput, null, true);
        currentQuestion.correct = val === x;
      }
    } else if (activeMicroPCB === 6) {
      if (questionIdx === 0) {
        let x = countAlleles(currentMicroBoard.lociInput);
        currentQuestion.correct = val === x;
      } else if (questionIdx === 1) {
      } else if (questionIdx === 2) {
      }
    }

    P3BoardQuestions[questionIdx] = currentQuestion;
    P3Questions[activeMicroPCB] = P3BoardQuestions;
    console.log(P3Questions);
    set(P3QuestionsAtom, P3Questions);
  },
);

export const dragWithinTrashAtom = atom(false);

export const fixedInfectionColumnReferences: {
  [key: string]: { ref: string; alt: string };
} = {
  0: { ref: "A", alt: "T" },
  1: { ref: "T", alt: "G" },
  2: { ref: "A", alt: "G" },
  3: { ref: "G", alt: "T" },
  4: { ref: "T", alt: "A" },
  5: { ref: "A", alt: "T" },
  6: { ref: "T", alt: "A" },
  7: { ref: "C", alt: "T" },
  8: { ref: "T", alt: "G" },
  9: { ref: "T", alt: "C" },
  10: { ref: "G", alt: "A" },
  11: { ref: "T", alt: "A" },
};

// 1	1	0	0	0	1	0	0	1	1	1	0	1	0
// 2	2	0.5	0.5	1	0.5	1	1	0.5	0.5	0.5	0.5	0.5	1
// 3	1	0	0	1	1	1	1	1	1	0	1	1	1
// 4	3	0.5	0.5	0.5	0.5	0.5	0.5	0.5	0.5	0.5	0.5	0.5	0
// 5	2	0.5	0	0	1	1	0.5	1	0.5	0.5	0	1	0
// 6	4	0.5	0.5	0.5	0.5	0.5	0	1	0.5	0.5	0.5	0.5	1
// 7	1	0	1	0	0	0	0	0	1	0	1	0	0
// 8	3	0.5	0.5	0.5	0.5	1	0.5	0	0.5	0.5	0.5	1	0.5
// 9	4	0.5	0	1	0.5	0.5	0.5	0.5	0.5	0.5	0.5	0.5	0.5
// 10	5	0.5	0.5	1	0.5	0.5	0	0.5	0	0.5	0.5	0.5	0.5
export const fixedInfectionsByReference: {
  id: number;
  trueMOI: number;
  refs: string[];
}[] = [
  {
    id: 0,
    trueMOI: 1,
    refs: ["0", "0", "0", "1", "0", "0", "1", "1", "1", "0", "1", "0"],
  },
  {
    id: 1,
    trueMOI: 2,
    refs: ["2", "2", "1", "2", "1", "1", "2", "2", "2", "2", "2", "1"],
  },
  {
    id: 2,
    trueMOI: 1,
    refs: ["0", "0", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1"],
  },
  {
    id: 3,
    trueMOI: 3,
    refs: ["2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "0"],
  },
  {
    id: 4,
    trueMOI: 2,
    refs: ["2", "0", "0", "1", "1", "2", "1", "2", "2", "0", "1", "0"],
  },
  {
    id: 5,
    trueMOI: 4,
    refs: ["2", "2", "2", "2", "2", "0", "1", "2", "2", "2", "2", "1"],
  },
  {
    id: 6,
    trueMOI: 1,
    refs: ["0", "1", "0", "0", "0", "0", "0", "1", "0", "1", "0", "0"],
  },
  {
    id: 7,
    trueMOI: 3,
    refs: ["2", "2", "2", "2", "1", "2", "0", "2", "2", "2", "1", "2"],
  },
  {
    id: 8,
    trueMOI: 4,
    refs: ["2", "0", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2"],
  },
  {
    id: 9,
    trueMOI: 5,
    refs: ["2", "2", "1", "2", "2", "0", "2", "0", "2", "2", "2", "2"],
  },
];

// export const fixedInfectionsByReference: string[][] = [
//   ["01", "01", "01", "01", "01", "0", "0", "01", "01"],
//   ["01", "01", "01", "01", "01", "01", "01", "01", "01"],
//   ["01", "0", "01", "1", "10", "0", "0", "10", "01"],
//   ["0", "1", "0", "0", "0", "1", "1", "1", "0"],
//   ["0", "01", "01", "0", "0", "0", "0", "0", "01"],
//   ["0", "01", "01", "0", "0", "0", "0", "0", "01"],
//   ["0", "1", "0", "0", "0", "1", "1", "1", "0"],
//   ["01", "0", "01", "1", "10", "0", "0", "10", "01"],
//   ["01", "01", "01", "01", "01", "01", "01", "01", "01"],
//   ["01", "01", "01", "01", "01", "0", "0", "01", "01"],
// ];

export const trueMOIAverage = function () {
  return (
    fixedInfectionsByReference
      .map((infObj) => {
        return infObj.trueMOI;
      })
      .reduce((a, b) => {
        return a + b;
      }) / 10
  );
};

export const trueInfectionsCount = [3, 2, 2, 2, 1];

// export const fixedInfectionColumnReferences: {
//   [key: string]: { ref: string; alt: string };
// } = {
//   0: { ref: "A", alt: "T" },
//   1: { ref: "T", alt: "G" },
//   2: { ref: "A", alt: "G" },
//   3: { ref: "G", alt: "T" },
//   4: { ref: "T", alt: "A" },
//   5: { ref: "A", alt: "T" },
//   6: { ref: "T", alt: "A" },
//   7: { ref: "C", alt: "T" },
//   8: { ref: "T", alt: "G" },
//   9: { ref: "T", alt: "C" },
//   10: { ref: "G", alt: "A" },
//   11: { ref: "T", alt: "A" },
// };
export const fixedMicroInfectionsByReference: {
  id: number;
  trueMOI: number;
  microIds: string[][];
}[] = [
  {
    id: 0,
    trueMOI: 1,
    microIds: [["000"], ["100"], ["111"], ["010"]],
  },
  {
    id: 1,
    trueMOI: 2,
    microIds: [
      ["001", "111"],
      ["111", "011"],
      ["100", "011"],
      ["101", "011"],
    ],
  },
  {
    id: 2,
    trueMOI: 1,
    microIds: [["001"], ["111"], ["110"], ["111"]],
  },
  {
    id: 3,
    trueMOI: 3,
    microIds: [
      ["100", "010", "011"],
      ["100", "101", "010"],
      ["110", "010", "001"],
      ["110", "010", "100"],
    ],
  },
  {
    id: 4,
    trueMOI: 2,
    microIds: [["100", "000"], ["110", "111"], ["110", "101"], ["010"]],
  },
  {
    id: 5,
    trueMOI: 4,
    microIds: [
      ["000", "111", "010", "110"],
      ["110", "000", "100"],
      ["111", "100", "101"],
      ["001", "011", "101"],
    ],
  },
  {
    id: 6,
    trueMOI: 1,
    microIds: [["010"], ["000"], ["010"], ["100"]],
  },
  {
    id: 7,
    trueMOI: 3,
    microIds: [
      ["111", "010", "100"],
      ["110", "011"],
      ["000", "010", "001"],
      ["111", "010"],
    ],
  },
  {
    id: 8,
    trueMOI: 4,
    microIds: [
      ["001", "101"],
      ["111", "100", "000"],
      ["101", "011", "000"],
      ["001", "010", "111"],
    ],
  },
  {
    id: 9,
    trueMOI: 5,
    microIds: [
      ["011", "111", "101"],
      ["010", "100", "110"],
      ["000", "100", "101"],
      ["010", "111", "011", "000"],
    ],
  },
];

// const compareInfectionsByReference = function () {
//   for (let k in fixedInfections) {
//     let row = fixedInfections[k];
//     let refStrRow = fixedInfectionsByReference[k];
//     for (let i = 0; i < row.length; i++) {
//       let fixedInfectionsStr = row[i];
//       let fixedReferenceStr = refStrRow[i];
//       let { ref, alt } = fixedInfectionColumnReferences[i];
//       if (fixedInfectionsStr.length !== fixedReferenceStr.length) {
//         console.log("FAIL, unequal length");
//         return false;
//       }
//       if (fixedReferenceStr[0] !== "0" && fixedReferenceStr[0] !== "1") {
//         console.log("fail 1");
//         return false;
//       }
//       if (fixedReferenceStr[0] === "0" && fixedInfectionsStr[0] !== ref) {
//         console.log("fail 2");

//         return false;
//       }
//       if (fixedReferenceStr[0] === "1" && fixedInfectionsStr[0] !== alt) {
//         console.log("fail 3");

//         return false;
//       }
//       if (fixedReferenceStr.length === 2) {
//         if (fixedReferenceStr[1] !== "0" && fixedReferenceStr[1] !== "1") {
//           console.log("fail 4");

//           return false;
//         }
//         if (fixedReferenceStr[1] === "0" && fixedInfectionsStr[1] !== ref) {
//           console.log("fail 5");

//           return false;
//         }
//         if (fixedReferenceStr[1] === "1" && fixedInfectionsStr[1] !== alt) {
//           console.log("fail 6");

//           return false;
//         }
//       }
//     }
//   }
//   return true;
// };

export const getValuesFromMicroId = function (
  microId: string,
  column: number,
  split = false,
) {
  let vals = [null, null, null];
  let relevantRefSlice = refValues.slice(
    (column - 1) * 3,
    (column - 1) * 3 + 3,
  );
  let relevantAltSlice = altValues.slice(
    (column - 1) * 3,
    (column - 1) * 3 + 3,
  );
  if (split) {
    return [
      vals
        .map((e, i) => {
          if (microId[i] === "0") {
            return relevantRefSlice[i];
          } else {
            return relevantAltSlice[i];
          }
        })
        .join(""),
    ];
  }
  return vals.map((e, i) => {
    if (microId[i] === "0") {
      return relevantRefSlice[i];
    } else {
      return relevantAltSlice[i];
    }
  });
};

export const compareUnorderedArrays = function (
  arr1: (string | number)[],
  arr2: (string | number)[],
) {
  let longerArr = arr1.length > arr2.length ? arr1 : arr2;
  let shorterArr = arr1.length <= arr2.length ? arr1 : arr2;
  let x = longerArr.map((str) => {
    return shorterArr.includes(str);
  });

  if (x.includes(false)) {
    return false;
  } else {
    return true;
  }
};

export const clearPersistentData = atom(
  null,
  (get, set, part: undefined | 1 | 2 | 3 | 4) => {
    if (part === 1) {
      set(cloneRowOnePersistentAtom, {
        id: 1,
        vals: Array(12).fill(""),
        microVals: [],
        microIds: Array(4).fill(""),
      });
      set(cloneRowTwoPersistentAtom, {
        id: 2,
        vals: Array(12).fill(""),
        microVals: [],
        microIds: Array(4).fill(""),
      });
      set(cloneRowThreePersistentAtom, {
        id: 3,
        vals: Array(12).fill(""),
        microVals: [],
        microIds: Array(4).fill(""),
      });
      set(cloneRowFourPersistentAtom, {
        id: 4,
        vals: Array(12).fill(""),
        microVals: [],
        microIds: Array(4).fill(""),
      });
      set(cloneRowFivePersistentAtom, {
        id: 5,
        vals: Array(12).fill(""),
        microVals: [],
        microIds: Array(4).fill(""),
      });
      set(partOneCompletePersistentAtom, false);
      set(positiveControlBoardOneAtom, {
        id: 1,
        active: false,
        rows: [],
        valid: null,
        attempted: false,
        inputAttempted: false,
        inputSuccess: false,
        questionOne: null,
        questionTwo: null,
        questionOneCorrect: false,
        questionTwoCorrect: false,
        questionsAttempted: false,
        questionsSuccess: false,
      });
      set(positiveControlBoardTwoAtom, {
        id: 2,
        active: false,
        rows: [],
        valid: null,
        attempted: false,
        inputAttempted: false,
        inputSuccess: false,
        questionOne: null,
        questionTwo: null,
        questionOneCorrect: false,
        questionTwoCorrect: false,
        questionsAttempted: false,
        questionsSuccess: false,
      });
      set(positiveControlBoardThreeAtom, {
        id: 3,
        active: false,
        rows: [],
        valid: null,
        attempted: false,
        inputAttempted: false,
        inputSuccess: false,
        questionOne: null,
        questionTwo: null,
        questionOneCorrect: false,
        questionTwoCorrect: false,
        questionsAttempted: false,
        questionsSuccess: false,
      });
      set(positiveControlBoardFourAtom, {
        id: 4,
        active: false,
        rows: [],
        valid: null,
        attempted: false,
        inputAttempted: false,
        inputSuccess: false,
        questionOne: null,
        questionTwo: null,
        questionOneCorrect: false,
        questionTwoCorrect: false,
        questionsAttempted: false,
        questionsSuccess: false,
      });
      set(positiveControlBoardFiveAtom, {
        id: 5,
        active: false,
        rows: [],
        valid: null,
        attempted: false,
        inputAttempted: false,
        inputSuccess: false,
        questionOne: null,
        questionTwo: null,
        questionOneCorrect: false,
        questionTwoCorrect: false,
        questionsAttempted: false,
        questionsSuccess: false,
      });
      set(positiveControlBoardSixAtom, {
        id: 6,
        active: false,
        rows: [],
        valid: null,
        attempted: false,
        inputAttempted: false,
        inputSuccess: false,
        questionOne: null,
        questionTwo: null,
        questionOneCorrect: false,
        questionTwoCorrect: false,
        questionsAttempted: false,
        questionsSuccess: false,
      });
      set(activePCBAtom, 1);
      set(InputRefRowMap[1], {
        attempted: false,
        success: true,
        id: 1,
        rows: Array(12)
          .fill(0)
          .map((e) => {
            return { ref: false, alt: false };
          }),
      });
      set(InputRefRowMap[2], {
        attempted: false,
        success: true,
        id: 2,
        rows: Array(12)
          .fill(0)
          .map((e) => {
            return { ref: false, alt: false };
          }),
      });
      set(InputRefRowMap[3], {
        attempted: false,
        success: true,
        id: 3,
        rows: Array(12)
          .fill(0)
          .map((e) => {
            return { ref: false, alt: false };
          }),
      });
      set(InputRefRowMap[4], {
        attempted: false,
        success: true,
        id: 4,
        rows: Array(12)
          .fill(0)
          .map((e) => {
            return { ref: false, alt: false };
          }),
      });
      set(InputRefRowMap[5], {
        attempted: false,
        success: true,
        id: 5,
        rows: Array(12)
          .fill(0)
          .map((e) => {
            return { ref: false, alt: false };
          }),
      });
      set(InputRefRowMap[6], {
        attempted: false,
        success: true,
        id: 6,
        rows: Array(12)
          .fill(0)
          .map((e) => {
            return { ref: false, alt: false };
          }),
      });
      set(allSNPBoardSuccessAtom, false);
      set(allSNPInputSuccessAtom, false);
      set(allQuestionsSuccessAtom, false);
      set(partOnePhaseAtom, 1);
    } else if (part === 2) {
      set(selectedInfectionsAtom, [
        { id: 0, MOI: 0 },
        { id: 1, MOI: 0 },
        { id: 2, MOI: 0 },
        { id: 3, MOI: 0 },
        { id: 4, MOI: 0 },
        { id: 5, MOI: 0 },
        { id: 6, MOI: 0 },
        { id: 7, MOI: 0 },
        { id: 8, MOI: 0 },
        { id: 9, MOI: 0 },
        { id: 10, MOI: 0 },
      ]);
      set(infectionsAtom, [0, 0, 0, 0]);
      set(selectedInfectionsIndexAtom, 0);
      set(infectionsPersistentAtom, [0, 0, 0, 0, 0]);
      set(partTwoCompletePersistentAtom, false);
      set(infectionsAveragePersistentAtom, 0);
    } else if (part === 3) {
      set(microSelectionFinishedAtom, false);
      set(allMicroBoardLociSuccessAtom, false);
      set(allMicroBoardSuccessAtom, false);
      set(microFillFiveAtom, [false, false, false, false, false]);
      set(microFillFourAtom, [false, false, false, false, false]);
      set(microFillThreeAtom, [false, false, false, false, false]);
      set(microFillTwoAtom, [false, false, false, false, false]);
      set(microFillOneAtom, [false, false, false, false, false]);
      set(activeMicroPCBAtom, 1);
      set(activeMicroRowColumnTupleAtom, [0, 0]);
      let x = 1;
      for (let k in microPCBMap) {
        set(microPCBMap[k], {
          id: x,
          rows: [],
          valid: null,
          selectedLocusInput: 1,
          lociInput: {
            1: [],
            2: [],
            3: [],
            4: [],
          },
          lociAttempted: false,
          lociSuccess: false,
          attempted: false,
        });
        x++;
      }

      set(partThreeCompletePersistentAtom, false);
    } else if (part === 4) {
      set(selectedInfectionsIndexAtom, 0);
      set(selectedMicroInfectionsIndexAtom, 0);
      // set(selectedMicroInfectionsAtom, 0)
      set(microInfectionsAtom, [0, 0, 0, 0]);
      set(selectedInfectionsAtom, [
        { id: 0, MOI: 0 },
        { id: 1, MOI: 0 },
        { id: 2, MOI: 0 },
        { id: 3, MOI: 0 },
        { id: 4, MOI: 0 },
        { id: 5, MOI: 0 },
        { id: 6, MOI: 0 },
        { id: 7, MOI: 0 },
        { id: 8, MOI: 0 },
        { id: 9, MOI: 0 },
        { id: 10, MOI: 0 },
      ]);
      set(selectedMicroInfectionsAtom, [
        { id: 0, MOI: 0 },
        { id: 1, MOI: 0 },
        { id: 2, MOI: 0 },
        { id: 3, MOI: 0 },
        { id: 4, MOI: 0 },
        { id: 5, MOI: 0 },
        { id: 6, MOI: 0 },
        { id: 7, MOI: 0 },
        { id: 8, MOI: 0 },
        { id: 9, MOI: 0 },
        { id: 10, MOI: 0 },
      ]);
      set(microInfectionsAveragePersistentAtom, 0);
      set(selectedMicroInfectionsIndexAtom, 0);
      set(microInfectionsPersistentAtom, [0, 0, 0, 0, 0]);
      set(partFourCompletePersistentAtom, false);
    }
  },
);

export const infectionsAveragePersistentAtom = atomWithStorage(
  "infectionsAveragePersistent",
  0,
);
export const microInfectionsAveragePersistentAtom = atomWithStorage(
  "microInfectionsAveragePersistent",
  0,
);

export const partOneCompletePersistentAtom = atomWithStorage(
  "partOneCompletePersistent",
  false,
);
export const partTwoCompletePersistentAtom = atomWithStorage(
  "partTwoCompletePersistent",
  false,
);
export const partThreeCompletePersistentAtom = atomWithStorage(
  "partThreeCompletePersistent",
  false,
);
export const partFourCompletePersistentAtom = atomWithStorage(
  "partFourCompletePersistent",
  false,
);

export const phaseAtom = atom<number>(1);
export const partOnePhaseAtom = atom<number>(1);

export const cloneRowOnePersistentAtom = atomWithStorage(
  "cloneRowOnePersistent",
  {
    id: 1,
    vals: Array(12).fill(""),
    microVals: Array(4).fill([]),
    microIds: Array(4).fill(""),
  },
);
export const cloneRowTwoPersistentAtom = atomWithStorage(
  "cloneRowTwoPersistent",
  {
    id: 2,
    vals: Array(12).fill(""),
    microVals: Array(4).fill([]),
    microIds: Array(4).fill(""),
  },
);
export const cloneRowThreePersistentAtom = atomWithStorage(
  "cloneRowThreePersistent",
  {
    id: 3,
    vals: Array(12).fill(""),
    microVals: Array(4).fill([]),
    microIds: Array(4).fill(""),
  },
);
export const cloneRowFourPersistentAtom = atomWithStorage(
  "cloneRowFourPersistent",
  {
    id: 4,
    vals: Array(12).fill(""),
    microVals: Array(4).fill([]),
    microIds: Array(4).fill(""),
  },
);
export const cloneRowFivePersistentAtom = atomWithStorage(
  "cloneRowFivePersistent",
  {
    id: 5,
    vals: Array(12).fill(""),
    microVals: Array(4).fill([]),
    microIds: Array(4).fill(""),
  },
);

export const cloneRowTemporaryAtom = atom<CloneRowPersisted>({
  id: 0,
  vals: Array(12)
    .fill("")
    .map((e) => e),
  microVals: Array(4).fill([]),
  microIds: Array(4).fill(""),
});

export const refRowAtom = atom<RefRow>({
  id: 0,
  vals: refValues,
  alts: altValues,
});

export const cloneRow1Atom = atom<CloneRow>({
  id: 1,
  vals: Array(12).fill(""),
});

export const cloneRow2Atom = atom<CloneRow>({
  id: 2,
  vals: Array(12).fill(""),
});

export const cloneRow3Atom = atom<CloneRow>({
  id: 3,
  vals: Array(12).fill(""),
});

export const cloneRow4Atom = atom<CloneRow>({
  id: 4,
  vals: Array(12).fill(""),
});

export const cloneRow5Atom = atom<CloneRow>({
  id: 5,
  vals: Array(12).fill(""),
});

export const microRow1Atom = atom<{
  cloneId: number;
  microVals: string[];
  vals: string[][];
  microIds: string[];
}>({
  cloneId: 1,
  microVals: [],
  vals: Array(12).fill(""),
  microIds: ["", "", "", ""],
});

export const microRow2Atom = atom<{
  cloneId: number;
  microVals: string[];
  vals: string[][];
  microIds: string[];
}>({
  cloneId: 1,
  microVals: [],
  vals: Array(12).fill(""),
  microIds: ["", "", "", ""],
});
export const microRow3Atom = atom<{
  cloneId: number;
  microVals: string[];
  vals: string[][];
  microIds: string[];
}>({
  cloneId: 1,
  microVals: [],
  vals: Array(12).fill(""),
  microIds: ["", "", "", ""],
});
export const microRow4Atom = atom<{
  cloneId: number;
  microVals: string[];
  vals: string[][];
  microIds: string[];
}>({
  cloneId: 1,
  microVals: [],
  vals: Array(12).fill(""),
  microIds: ["", "", "", ""],
});
export const microRow5Atom = atom<{
  cloneId: number;
  microVals: string[];
  vals: string[][];
  microIds: string[];
}>({
  cloneId: 1,
  microVals: [],
  vals: Array(12).fill(""),
  microIds: ["", "", "", ""],
});

export const microRowMap = {
  1: microRow1Atom,
  2: microRow2Atom,
  3: microRow3Atom,
  4: microRow4Atom,
  5: microRow5Atom,
};

export const cloneRowMapPersisted = {
  1: cloneRowOnePersistentAtom,
  2: cloneRowTwoPersistentAtom,
  3: cloneRowThreePersistentAtom,
  4: cloneRowFourPersistentAtom,
  5: cloneRowFivePersistentAtom,
};

export const cloneRowMap: { [key: number]: Atom<CloneRow> } = {
  1: cloneRow1Atom,
  2: cloneRow2Atom,
  3: cloneRow3Atom,
  4: cloneRow4Atom,
  5: cloneRow5Atom,
};

export type PositiveControlBoard = {
  id: number;
  active: boolean;
  rows: number[];
  valid: null | boolean;
  submissionUnchanged: boolean;
  inputAttempted: boolean;
  inputSuccess: boolean;
  questionOne: number | null;
  questionOneCorrect: boolean;
  questionTwo: number | null;
  questionTwoCorrect: boolean;
  questionsAttempted: boolean;
  questionsSuccess: boolean;
};

type LociInput = {
  [key: number]: string[];
};

type MicroPositiveControlBoard = {
  id: number;
  rows: (number | never)[];
  valid: boolean | null;
  selectedLocusInput: number;
  lociAttempted: boolean;
  lociInput: LociInput;
  lociSuccess: boolean;
  attempted: boolean;
};

// type MicroLociInput = {
//   [key: number]: (never | string)[];
// };

// export const removeLociInputAtom = atom(
//   () => "",
//   (
//     get,
//     set,
//     {
//       boardId,
//       column,
//       microId,
//     }: { boardId: number; column: number; microId: string },
//   ) => {
//     console.log(boardId, column, microId);
//     let activeBoardAtom = microPCBMap[boardId as 1 | 2 | 3 | 4 | 5 | 6];
//     if (get(activeBoardAtom).lociInput[column].includes(microId)) {
//       let copyLociInputColumn = get(activeBoardAtom).lociInput[column];
//       let indexToRemove = copyLociInputColumn.indexOf(microId);
//       set(activeBoardAtom, {
//         ...get(activeBoardAtom),
//         lociInput: {
//           ...get(activeBoardAtom).lociInput,
//           [column]: copyLociInputColumn
//             .slice(0, indexToRemove)
//             .concat(
//               copyLociInputColumn.slice(
//                 indexToRemove + 1,
//                 copyLociInputColumn.length,
//               ),
//             ),
//         },
//       });
//     }
//     console.log(get(activeBoardAtom));
//   },
// );

export const microPositiveControlBoardAtom1 =
  atomWithStorage<MicroPositiveControlBoard>("microPositiveControlBoardAtom1", {
    id: 1,
    rows: [],
    valid: null,
    selectedLocusInput: 1,
    lociInput: {
      1: [],
      2: [],
      3: [],
      4: [],
    },
    lociAttempted: false,
    lociSuccess: false,
    attempted: false,
  });
export const microPositiveControlBoardAtom2 =
  atomWithStorage<MicroPositiveControlBoard>("microPositiveControlBoardAtom2", {
    id: 2,
    rows: [],
    valid: null,
    selectedLocusInput: 1,
    lociInput: {
      1: [],
      2: [],
      3: [],
      4: [],
    },
    lociAttempted: false,
    lociSuccess: false,
    attempted: false,
  });
export const microPositiveControlBoardAtom3 =
  atomWithStorage<MicroPositiveControlBoard>("microPositiveControlBoardAtom3", {
    id: 3,
    rows: [],
    valid: null,
    selectedLocusInput: 1,
    lociInput: {
      1: [],
      2: [],
      3: [],
      4: [],
    },
    lociAttempted: false,
    lociSuccess: false,
    attempted: false,
  });
export const microPositiveControlBoardAtom4 =
  atomWithStorage<MicroPositiveControlBoard>("microPositiveControlBoardAtom4", {
    id: 4,
    rows: [],
    valid: null,
    selectedLocusInput: 1,
    lociInput: {
      1: [],
      2: [],
      3: [],
      4: [],
    },
    lociAttempted: false,
    lociSuccess: false,
    attempted: false,
  });
export const microPositiveControlBoardAtom5 =
  atomWithStorage<MicroPositiveControlBoard>("microPositiveControlBoardAtom5", {
    id: 5,
    rows: [],
    valid: null,
    selectedLocusInput: 1,
    lociInput: {
      1: [],
      2: [],
      3: [],
      4: [],
    },
    lociAttempted: false,
    lociSuccess: false,
    attempted: false,
  });
export const microPositiveControlBoardAtom6 =
  atomWithStorage<MicroPositiveControlBoard>("microPositiveControlBoardAtom6", {
    id: 6,
    rows: [],
    valid: null,
    selectedLocusInput: 1,
    lociInput: {
      1: [],
      2: [],
      3: [],
      4: [],
    },
    lociAttempted: false,
    lociSuccess: false,
    attempted: false,
  });

export const activeMicroPCBAtom = atom(1);

export const adjustMicroPCBAtoms = atom(
  () => "",
  (get, set, nextVal: 1 | 2 | 3 | 4 | 5 | 6) => {
    let current = get(activeMicroPCBAtom);
    set(microPCBMap[current as 1 | 2 | 3 | 4 | 5 | 6], {
      ...get(microPCBMap[current as 1 | 2 | 3 | 4 | 5 | 6]),
      attempted: true,
    });
    set(activeMicroPCBAtom, nextVal);
  },
);

export const microPCBMap = {
  1: microPositiveControlBoardAtom1,
  2: microPositiveControlBoardAtom2,
  3: microPositiveControlBoardAtom3,
  4: microPositiveControlBoardAtom4,
  5: microPositiveControlBoardAtom5,
  6: microPositiveControlBoardAtom6,
};

export const addMicroRowPositiveBoardAtom = atom(
  () => "",
  (
    get,
    set,
    {
      rowId,
      boardId,
    }: { rowId: 1 | 2 | 3 | 4 | 5; boardId: 1 | 2 | 3 | 4 | 5 | 6 },
  ) => {
    let activeAtom = microPCBMap[boardId];
    if (!get(activeAtom).rows.includes(rowId)) {
      set(activeAtom, {
        ...get(activeAtom),
        rows: [...get(activeAtom).rows, rowId],
        valid: false,
      });
      set(allMicroBoardSuccessAtom, false);
    }
  },
);

export const removeMicroRowPositiveBoardAtom = atom(
  () => "",
  (
    get,
    set,
    {
      rowId,
      boardId,
      spliced,
    }: {
      rowId: 1 | 2 | 3 | 4 | 5;
      boardId: 1 | 2 | 3 | 4 | 5 | 6;
      spliced: undefined | 1 | 2 | 3 | 4;
    },
  ) => {
    let activeAtom = microPCBMap[boardId];
    if (get(activeAtom).rows.includes(rowId)) {
      let target = get(activeAtom).rows.indexOf(rowId);
      let newRows = get(activeAtom)
        .rows.slice(0, target)
        .concat(
          get(activeAtom).rows.slice(target + 1, get(activeAtom).rows.length),
        );
      set(activeAtom, {
        ...get(activeAtom),
        valid: false,
        rows: newRows,
      });
      set(allMicroBoardSuccessAtom, false);
    }
  },
);

export const addRowPositiveBoardAtom =
  // rowId: CloneRow["id"],
  atom(
    () => "",
    (
      get,
      set,
      {
        rowId,
        boardId,
      }: { rowId: CloneRow["id"]; boardId: PositiveControlBoard["id"] },
    ) => {
      let activeBoard = positiveControlMap[boardId as 1 | 2 | 3 | 4 | 5 | 6];
      if (!get(activeBoard).rows.includes(rowId as number)) {
        set(activeBoard, {
          ...get(activeBoard),
          valid: false,
          submissionUnchanged: false,
          rows: [...get(activeBoard).rows, rowId as number],
        });
        set(allSNPBoardSuccessAtom, false);
      }
    },
  );

export const removeRowPositiveBoardAtom =
  // rowId: CloneRow["id"],
  atom(
    () => "",
    (
      get,
      set,
      {
        rowId,
        boardId,
      }: { rowId: CloneRow["id"]; boardId: PositiveControlBoard["id"] },
    ) => {
      let activeControlBoardAtom =
        positiveControlMap[boardId as 1 | 2 | 3 | 4 | 5 | 6];
      if (get(activeControlBoardAtom).rows.includes(rowId as number)) {
        let target = get(activeControlBoardAtom).rows.indexOf(rowId as number);
        let newRows = get(activeControlBoardAtom)
          .rows.slice(0, target)
          .concat(
            get(activeControlBoardAtom).rows.slice(
              target + 1,
              get(activeControlBoardAtom).rows.length,
            ),
          );
        set(activeControlBoardAtom, {
          ...get(activeControlBoardAtom),
          valid: false,
          submissionUnchanged: false,
          rows: newRows,
        });
        set(allSNPBoardSuccessAtom, false);
      }
    },
  );

export const questionAnswerAtom = atom(
  () => "",
  (
    get,
    set,
    {
      boardId,
      questionNum,
      answer,
    }: { boardId: number; questionNum: 1 | 2; answer: number },
  ) => {
    let activeInputRows = get(
      InputRefRowMap[boardId as 1 | 2 | 3 | 4 | 5 | 6],
    ).rows;
    let activeControlBoard =
      positiveControlMap[boardId as 1 | 2 | 3 | 4 | 5 | 6];
    let pairs = 0;
    activeInputRows.forEach((inputObj) => {
      if (inputObj.ref && inputObj.alt) {
        pairs++;
      }
    });
    if (questionNum === 1) {
      if (12 - pairs === answer) {
        set(activeControlBoard, {
          ...get(activeControlBoard),
          questionOne: answer,
          questionOneCorrect: true,
        });
      } else {
        set(activeControlBoard, {
          ...get(activeControlBoard),
          questionOne: answer,
          questionOneCorrect: false,
        });
      }
    } else if (questionNum === 2) {
      if (pairs === answer) {
        set(activeControlBoard, {
          ...get(activeControlBoard),
          questionTwo: answer,
          questionTwoCorrect: true,
        });
      } else {
        set(activeControlBoard, {
          ...get(activeControlBoard),
          questionTwo: answer,
          questionTwoCorrect: false,
        });
      }
    }
  },
);

export const positiveControlBoardOneAtom =
  atomWithStorage<PositiveControlBoard>(
    "positiveControlBoardOneAtomPersistent",
    {
      id: 1,
      active: false,
      rows: [],
      valid: null,
      submissionUnchanged: false,
      inputAttempted: false,
      inputSuccess: false,
      questionOne: null,
      questionTwo: null,
      questionsAttempted: false,
      questionsSuccess: false,
      questionOneCorrect: false,
      questionTwoCorrect: false,
    },
  );
export const positiveControlBoardTwoAtom =
  atomWithStorage<PositiveControlBoard>(
    "positiveControlBoardTwoAtomPersistent",
    {
      id: 2,
      active: false,
      rows: [],
      valid: null,
      submissionUnchanged: false,
      inputAttempted: false,
      inputSuccess: false,
      questionOne: null,
      questionTwo: null,
      questionsAttempted: false,
      questionsSuccess: false,
      questionOneCorrect: false,
      questionTwoCorrect: false,
    },
  );
export const positiveControlBoardThreeAtom =
  atomWithStorage<PositiveControlBoard>(
    "positiveControlBoardThreeAtomPersistent",
    {
      id: 3,
      active: false,
      rows: [],
      valid: null,
      submissionUnchanged: false,
      inputAttempted: false,
      inputSuccess: false,
      questionOne: null,
      questionTwo: null,
      questionsAttempted: false,
      questionsSuccess: false,
      questionOneCorrect: false,
      questionTwoCorrect: false,
    },
  );
export const positiveControlBoardFourAtom =
  atomWithStorage<PositiveControlBoard>(
    "positiveControlBoardFourAtomPersistent",
    {
      id: 4,
      active: false,
      rows: [],
      valid: null,
      submissionUnchanged: false,
      inputAttempted: false,
      inputSuccess: false,
      questionOne: null,
      questionTwo: null,
      questionsAttempted: false,
      questionsSuccess: false,
      questionOneCorrect: false,
      questionTwoCorrect: false,
    },
  );
export const positiveControlBoardFiveAtom =
  atomWithStorage<PositiveControlBoard>(
    "positiveControlBoardFiveAtomPersistent",
    {
      id: 5,
      active: false,
      rows: [],
      valid: null,
      submissionUnchanged: false,
      inputAttempted: false,
      inputSuccess: false,
      questionOne: null,
      questionTwo: null,
      questionsAttempted: false,
      questionsSuccess: false,
      questionOneCorrect: false,
      questionTwoCorrect: false,
    },
  );

export const positiveControlBoardSixAtom =
  atomWithStorage<PositiveControlBoard>(
    "positiveControlBoardSixAtomPersistent",
    {
      id: 6,
      active: false,
      rows: [],
      valid: null,
      submissionUnchanged: false,
      inputAttempted: false,
      inputSuccess: false,
      questionOne: null,
      questionTwo: null,
      questionsAttempted: false,
      questionsSuccess: false,
      questionOneCorrect: false,
      questionTwoCorrect: false,
    },
  );

export const positiveControlMap = {
  1: positiveControlBoardOneAtom,
  2: positiveControlBoardTwoAtom,
  3: positiveControlBoardThreeAtom,
  4: positiveControlBoardFourAtom,
  5: positiveControlBoardFiveAtom,
  6: positiveControlBoardSixAtom,
};

export const cloneRowAtomMap = {
  1: cloneRow1Atom,
  2: cloneRow2Atom,
  3: cloneRow3Atom,
  4: cloneRow4Atom,
  5: cloneRow5Atom,
};

export const phaseOneTransitionAtom = atom<boolean>(false);

export const rowFiveHiddenAtom = atom<boolean>(false);

export const rowFourHiddenAtom = atom<boolean>(false);

export const rowThreeHiddenAtom = atom<boolean>(false);

export const rowTwoHiddenAtom = atom<boolean>(false);

export const rowOneHiddenAtom = atom<boolean>(false);

export const allQuestionsSuccessAtom = atomWithStorage(
  "allQuestionsSuccessAtom",
  false,
);
export const checkSNPQuestionSuccessAtom = atom(
  () => "",
  (get, set, boardId: 1 | 2 | 3 | 4 | 5 | 6, spliced: undefined | 1 | 3) => {
    let activeBoard = positiveControlMap[boardId];
    let newBoard = {
      ...get(activeBoard),
      questionsAttempted: true,
      questionsSuccess:
        get(activeBoard).questionOneCorrect &&
        get(activeBoard).questionTwoCorrect,
    };

    let allSuccess = false;
    let allQuestionsSuccess = [
      get(positiveControlMap[1]).questionsSuccess,
      get(positiveControlMap[2]).questionsSuccess,
      get(positiveControlMap[3]).questionsSuccess,
      get(positiveControlMap[4]).questionsSuccess,
      get(positiveControlMap[5]).questionsSuccess,
      get(positiveControlMap[6]).questionsSuccess,
    ];
    allQuestionsSuccess[boardId - 1] = newBoard.questionsSuccess;
    if (!allQuestionsSuccess.includes(false)) {
      allSuccess = true;
    }
    set(allQuestionsSuccessAtom, allSuccess);
    set(positiveControlMap[boardId as 1 | 2 | 3 | 4 | 5 | 6], newBoard);

    if (newBoard.questionsSuccess) {
      for (let i = boardId; i < boardId + 5; i++) {
        let next = ((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
        if (!get(positiveControlMap[next]).questionsSuccess) {
          set(activePCBAtom, next);
          return;
        }
      }
    }
  },
);

export const checkSNPInputSuccessAtom = atom(
  () => "",
  (
    get,
    set,
    boardId: 1 | 2 | 3 | 4 | 5 | 6,
    spliced: undefined | 1 | 2 | 3 | 4,
  ) => {
    let inputRow = get(InputRefRowMap[boardId]);
    let matrixRows = spliced
      ? get(positiveControlMap[boardId]).rows.map((rowNum) => {
          return get(cloneRowMapPersisted[rowNum]).vals;
        })
      : get(positiveControlMap[boardId]).rows.map((rowNum) => {
          return get(cloneRowMap[rowNum]).vals;
        });
    let inputIds: number[] = []; // 0: ref, 1: alt, 2: both;
    for (let i = 0; i < 12; i++) {
      matrixRows.forEach((letterRow) => {
        let row = letterRow.map((letter, idx) => {
          if (letter === refValues[idx]) {
            return 0;
          } else {
            return 1;
          }
        });

        let val = row[i];
        if (inputIds[i] === undefined) {
          inputIds[i] = val;
        } else if (inputIds[i] !== val) {
          inputIds[i] = 2;
        }
      });
    }
    let x = inputRow.rows.map((refObj) => {
      if (refObj.alt && refObj.ref) {
        return 2;
      } else if (refObj.alt) {
        return 1;
      } else if (refObj.ref) {
        return 0;
      } else {
        return null;
      }
    });
    let flag = true;
    for (let i = 0; i < inputIds.length; i++) {
      if (inputIds[i] !== x[i]) {
        flag = false;
      }
    }

    // let flag2 = false;
    // inputRow.rows.forEach((refObj) => {
    //   if (refObj.alt || refObj.ref) {
    //     flag2 = true;
    //   }
    // });

    let newBoard = {
      ...get(positiveControlMap[boardId]),
      inputAttempted: true,
      inputSuccess: flag,
    };

    let allSuccess = false;
    // if (flag) {
    let allInputSuccess = [
      get(positiveControlMap[1]).inputSuccess,
      get(positiveControlMap[2]).inputSuccess,
      get(positiveControlMap[3]).inputSuccess,
      get(positiveControlMap[4]).inputSuccess,
      get(positiveControlMap[5]).inputSuccess,
      get(positiveControlMap[6]).inputSuccess,
    ];
    allInputSuccess[boardId - 1] = flag;
    if (!allInputSuccess.includes(false)) {
      allSuccess = true;
    }
    // }

    set(allSNPInputSuccessAtom, allSuccess);
    set(positiveControlMap[boardId as 1 | 2 | 3 | 4 | 5 | 6], newBoard);
    if (newBoard.inputSuccess) {
      for (let i = boardId; i < boardId + 5; i++) {
        let next = ((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
        if (!get(positiveControlMap[next]).inputSuccess) {
          set(activePCBAtom, next);
          return;
        }
      }
    }
  },
);
export const allSNPInputSuccessAtom = atomWithStorage(
  "allSNPInputSuccessAtom",
  false,
);

export const activePCBAtom = atom<1 | 2 | 3 | 4 | 5 | 6>(1);
export const adjustPCBAtoms = atom(
  () => "",
  (get, set, nextVal: 1 | 2 | 3 | 4 | 5 | 6) => {
    let current = get(activePCBAtom);
    let phase = get(phaseAtom);
    if (phase === 2) {
      set(positiveControlMap[current as 1 | 2 | 3 | 4 | 5 | 6], {
        ...get(positiveControlMap[current as 1 | 2 | 3 | 4 | 5 | 6]),
        attempted: true,
      });
    }
    set(activePCBAtom, nextVal);
  },
);

export const InputRefRowOneAtom = atomWithStorage("InputRowOneAtom", {
  attempted: false,
  success: true,
  id: 1,
  rows: Array(12)
    .fill(0)
    .map((e) => {
      return { ref: false, alt: false };
    }),
});
export const InputRefRowTwoAtom = atomWithStorage("InputRowTwoAtom", {
  id: 2,
  rows: Array(12)
    .fill(0)
    .map((e) => {
      return { ref: false, alt: false };
    }),
  attempted: false,
  success: true,
});
export const InputRefRowThreeAtom = atomWithStorage("InputRowThreeAtom", {
  id: 3,
  rows: Array(12)
    .fill(0)
    .map((e) => {
      return { ref: false, alt: false };
    }),
  attempted: false,
  success: true,
});
export const InputRefRowFourAtom = atomWithStorage("InputRowFourAtom", {
  id: 4,
  rows: Array(12)
    .fill(0)
    .map((e) => {
      return { ref: false, alt: false };
    }),
  attempted: false,
  success: true,
});
export const InputRefRowFiveAtom = atomWithStorage("InputRowFiveAtom", {
  id: 5,
  rows: Array(12)
    .fill(0)
    .map((e) => {
      return { ref: false, alt: false };
    }),
  attempted: false,
  success: true,
});
export const InputRefRowSixAtom = atomWithStorage("InputRowSixAtom", {
  id: 6,
  rows: Array(12)
    .fill(0)
    .map((e) => {
      return { ref: false, alt: false };
    }),
  attempted: false,
  success: true,
});

export const InputRefRowMap = {
  1: InputRefRowOneAtom,
  2: InputRefRowTwoAtom,
  3: InputRefRowThreeAtom,
  4: InputRefRowFourAtom,
  5: InputRefRowFiveAtom,
  6: InputRefRowSixAtom,
};

export const InputOne = atom([]);

export const microFillOneAtom = atomWithStorage("microFillOneAtom", [
  false,
  false,
  false,
  false,
]);
export const microFillTwoAtom = atomWithStorage("microFillTwoAtom", [
  false,
  false,
  false,
  false,
]);
export const microFillThreeAtom = atomWithStorage("microFillThreeAtom", [
  false,
  false,
  false,
  false,
]);
export const microFillFourAtom = atomWithStorage("microFillFourAtom", [
  false,
  false,
  false,
  false,
]);
export const microFillFiveAtom = atomWithStorage("microFillFiveAtom", [
  false,
  false,
  false,
  false,
]);
export const microFillMap = {
  1: microFillOneAtom,
  2: microFillTwoAtom,
  3: microFillThreeAtom,
  4: microFillFourAtom,
  5: microFillFiveAtom,
};

export const activeMicroRowColumnTupleAtom = atomWithStorage(
  "activeMicroRowColumnTupleAtom ",
  [0, 0],
);

export const handleNextActiveMicroRowColumnTupleAtom = atom(
  () => {},
  (get, set) => {
    let flag = false;
    let [activeRow, activeColumn] = get(activeMicroRowColumnTupleAtom);
    let microRows = [
      get(microFillOneAtom),
      get(microFillTwoAtom),
      get(microFillThreeAtom),
      get(microFillFourAtom),
      get(microFillFiveAtom),
    ];
    for (let i = activeColumn; i < activeColumn + 4; i++) {
      for (let j = activeRow + 1; j < activeRow + 6; j++) {
        if (!microRows[j % 5][i % 4]) {
          set(activeMicroRowColumnTupleAtom, [j % 5, i % 4]);
        }
      }
    }
  },
);

const getNextAvailableTuple = function (arr: [number, number]) {};

export const failMicroAtom = atom(false);

export const getActiveMicrohaplotypeAtom = atom(
  () => {},
  (
    get,
    set,
    {
      microStr,
      spliced,
    }: { microStr: string; spliced: undefined | 1 | 2 | 3 | 4 },
  ) => {
    let [row, column] = get(activeMicroRowColumnTupleAtom);
    let activeCloneRow =
      spliced === 3
        ? get(cloneRowMapPersisted[row + 1])
        : get(cloneRowMap[row + 1]);
    let activeMicroRow = get(microFillMap[(row + 1) as 1 | 2 | 3 | 4 | 5]);
    if (
      microStr ===
      activeCloneRow.vals.slice(column * 3, column * 3 + 3).join("")
    ) {
      let newRow = [...activeMicroRow];
      newRow[column] = true;
      set(microFillMap[(row + 1) as 1 | 2 | 3 | 4 | 5], newRow);
      let flag = false;
      let [activeRow, activeColumn] = get(activeMicroRowColumnTupleAtom);
      let microRows = [
        get(microFillOneAtom),
        get(microFillTwoAtom),
        get(microFillThreeAtom),
        get(microFillFourAtom),
        get(microFillFiveAtom),
      ];
      for (let i = activeColumn; i < activeColumn + 4; i++) {
        for (let j = activeRow + 1; j < activeRow + 6; j++) {
          if (!microRows[j % 5][i % 4]) {
            set(activeMicroRowColumnTupleAtom, [j % 5, i % 4]);
            return;
          }
        }
      }
      set(microSelectionFinishedAtom, true);
    } else {
      set(failMicroAtom, true);
    }
  },
);

export const microSelectionFinishedAtom = atomWithStorage(
  "microSelectionFinishedAtom",
  false,
);

export const selectedMicroLocusInputAtom = atom(1);

export const removeLociInputAtom = atom(
  () => "",
  (
    get,
    set,
    {
      boardId,
      column,
      microId,
    }: { boardId: number; column: number; microId: string },
  ) => {
    let activeBoardAtom = microPCBMap[boardId as 1 | 2 | 3 | 4 | 5 | 6];
    if (get(activeBoardAtom).lociInput[column].includes(microId)) {
      let copyLociInputColumn = get(activeBoardAtom).lociInput[column];
      let indexToRemove = copyLociInputColumn.indexOf(microId);
      let newRows = get(activeBoardAtom)
        .lociInput[column].slice(0, indexToRemove)
        .concat(
          get(activeBoardAtom).lociInput[column].slice(
            indexToRemove + 1,
            get(activeBoardAtom).lociInput[column].length,
          ),
        );
      let newAtomValue = {
        ...get(activeBoardAtom),
        lociInput: {
          ...get(activeBoardAtom).lociInput,
          [column]: newRows,
        },
      };

      set(activeBoardAtom, { ...newAtomValue, lociSuccess: false });

      // let x: { [key: number]: string[] } = {
      //   1: [],
      //   2: [],
      //   3: [],
      //   4: [],
      // };

      // let y = get(activeBoardAtom).rows.map((rowNum, idx) => {
      //   let row: string[] = [];
      //   for (let i = 0; i < 12; i += 3) {
      //     let segment = get(cloneRowMap[rowNum])
      //       .vals.slice(i, i + 3)
      //       .join("");
      //     row.push(segment);
      //   }
      //   return row;
      // });
      // y.forEach((rowValsArr) => {
      //   rowValsArr.forEach((str, idx) => {
      //     x[idx + 1].push(str);
      //   });
      // });
      // let flag = true;
      // let compObj = { ...newAtomValue.lociInput };
      // for (let column in compObj) {
      //   compObj[column] = newAtomValue.lociInput[column].map((microId) => {
      //     return getValuesFromMicroId(
      //       microId,
      //       column as unknown as number,
      //       true,
      //     ).join("");
      //   });
      // }
      // for (let k in x) {
      //   if (!compareUnorderedArrays(x[k], compObj[k])) {
      //     console.log(x[k], compObj[k]);
      //     console.log("triggered");
      //     flag = false;
      //   }
      // }
      // for (let k in x) {
      //   if (!compareUnorderedArrays(compObj[k], x[k])) {
      //     console.log(x[k], compObj[k]);
      //     console.log("triggered");
      //     flag = false;
      //   }
      // }
      // set(activeBoardAtom, { ...newAtomValue, lociSuccess: flag });
    }
  },
);

export const addLociInputAtom = atom(
  () => "",
  (
    get,
    set,
    {
      boardId,
      column,
      microId,
    }: { boardId: number; column: number; microId: string },
  ) => {
    let activeBoardAtom = microPCBMap[boardId as 1 | 2 | 3 | 4 | 5 | 6];
    if (
      !get(activeBoardAtom).lociInput[column].includes(microId) &&
      get(activeBoardAtom).lociInput[column].length <= 4
    ) {
      let copyLociInputColumn = get(activeBoardAtom).lociInput[column];
      let newAtomValue = {
        ...get(activeBoardAtom),
        lociInput: {
          ...get(activeBoardAtom).lociInput,
          [column]: [...get(activeBoardAtom).lociInput[column], microId],
        },
      };

      set(activeBoardAtom, { ...newAtomValue, lociSuccess: false });

      // let x: { [key: number]: string[] } = {
      //   1: [],
      //   2: [],
      //   3: [],
      //   4: [],
      // };
      // let y = newAtomValue.rows.map((rowNum, idx) => {
      //   let row: string[] = [];
      //   for (let i = 0; i < 12; i += 3) {
      //     let segment = get(cloneRowMap[rowNum])
      //       .vals.slice(i, i + 3)
      //       .join("");
      //     row.push(segment);
      //   }
      //   return row;
      // });
      // y.forEach((rowValsArr) => {
      //   rowValsArr.forEach((str, idx) => {
      //     x[idx + 1].push(str);
      //   });
      // });
      // let flag = true;
      // let compObj = { ...newAtomValue.lociInput };
      // for (let column in compObj) {
      //   compObj[column] = newAtomValue.lociInput[column].map((microId) => {
      //     return getValuesFromMicroId(
      //       microId,
      //       column as unknown as number,
      //       true,
      //     ).join("");
      //   });
      // }
      // for (let k in x) {
      //   if (!compareUnorderedArrays(x[k], compObj[k])) {
      //     console.log(x[k], compObj[k]);
      //     console.log("triggered");
      //     flag = false;
      //   }
      // }
      // set(activeBoardAtom, { ...newAtomValue, lociSuccess: flag });
    }
  },
);

// export const removeLociInputAtom = atom(
//   () => "",
//   (
//     get,
//     set,
//     {
//       boardId,
//       column,
//       microId,
//     }: { boardId: number; column: 1 | 2 | 3 | 4; microId: string },
//   ) => {
//     console.log(boardId, column, microId);
//     let activeMicroPCB = get(activeMicroPCBAtom);
//     let activeLociInput =
//       microLociInputMap[activeMicroPCB as 1 | 2 | 3 | 4 | 5 | 6];
//     let indexToRemove = get(activeLociInput)[column].indexOf(microId);
//     set(activeLociInput, {
//       ...get(activeLociInput),
//       [column]: [...get(activeLociInput)[column as 1 | 2 | 3 | 4]]
//         .slice(0, indexToRemove)
//         .concat(
//           get(activeLociInput)[column].slice(
//             indexToRemove + 1,
//             get(activeLociInput)[column].length,
//           ),
//         ),
//     });
//   },
// );

export const activeHoverIndexAtom = atom<null | number>(null);

export const selectedInfectionsAtom = atom([
  { id: 0, MOI: 0 },
  { id: 1, MOI: 0 },
  { id: 2, MOI: 0 },
  { id: 3, MOI: 0 },
  { id: 4, MOI: 0 },
  { id: 5, MOI: 0 },
  { id: 6, MOI: 0 },
  { id: 7, MOI: 0 },
  { id: 8, MOI: 0 },
  { id: 9, MOI: 0 },
  { id: 10, MOI: 0 },
]);

export const selectedMicroInfectionsAtom = atom([
  { id: 0, MOI: 0 },
  { id: 1, MOI: 0 },
  { id: 2, MOI: 0 },
  { id: 3, MOI: 0 },
  { id: 4, MOI: 0 },
  { id: 5, MOI: 0 },
  { id: 6, MOI: 0 },
  { id: 7, MOI: 0 },
  { id: 8, MOI: 0 },
  { id: 9, MOI: 0 },
  { id: 10, MOI: 0 },
]);

export const infectionsAtom = atom([0, 0, 0, 0, 0]);
export const infectionsPersistentAtom = atomWithStorage(
  "infectionsPersistentAtom",
  [0, 0, 0, 0, 0],
);
export const microInfectionsPersistentAtom = atomWithStorage(
  "microInfectionsPersistentAtom",
  [0, 0, 0, 0, 0],
);
export const microInfectionsAtom = atom([0, 0, 0, 0, 0]);

export const graphDataAtom = atom(
  () => "",
  (
    get,
    set,
    {
      id,
      MOI,
      micro,
      spliced,
    }: {
      spliced?: undefined | 1 | 2 | 3 | 4;
      id: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
      MOI: number;
      micro?: boolean;
    },
  ) => {
    let infections = [0, 0, 0, 0, 0];
    let newInfectionCounts = micro
      ? get(selectedMicroInfectionsAtom)
      : get(selectedInfectionsAtom);
    newInfectionCounts[id] = {
      ...newInfectionCounts[id],
      MOI: MOI,
    };
    // infections.forEach((MOI, idx) => {
    //   infections[MOI] = infections[MOI] + 1;
    // });
    newInfectionCounts.forEach((infectionObject, idx) => {
      // console.log(newInfectionCounts[idx]);
      // infections[newInfectionCounts[idx]["MOI"] as 1 | 2 | 3 | 4 | 5]++;
      // console.log(infectionObject["MOI"]);
      if (infectionObject["MOI"] > 0) {
        infections[infectionObject["MOI"] - 1] =
          infections[infectionObject["MOI"] - 1] + 1;
      }
    });
    spliced === 4
      ? set(microInfectionsPersistentAtom, infections)
      : spliced === 2
      ? set(infectionsPersistentAtom, infections)
      : micro
      ? set(microInfectionsAtom, infections)
      : set(infectionsAtom, infections);
    spliced === 4
      ? set(microInfectionsPersistentAtom, infections)
      : spliced === 2
      ? set(infectionsPersistentAtom, infections)
      : micro
      ? set(selectedMicroInfectionsAtom as any, newInfectionCounts)
      : set(selectedInfectionsAtom as any, newInfectionCounts);
  },
);

// const compareUnorderedArrays = function(arr1, arr2) {

// }

export const checkBoardSuccessAtom = atom(
  () => {},
  (get, set, boardId: 1 | 2 | 3 | 4 | 5 | 6) => {
    const activePCB = get(activePCBAtom);
    let activeBoard = get(positiveControlMap[activePCB]);
    let newBoard = { ...activeBoard };
    let otherBoardAtom =
      boardId === 1
        ? positiveControlMap[2]
        : boardId === 2
        ? positiveControlMap[1]
        : boardId === 3
        ? positiveControlMap[4]
        : boardId === 4
        ? positiveControlMap[3]
        : boardId === 5
        ? positiveControlMap[6]
        : positiveControlMap[5];

    let otherBoard = get(otherBoardAtom);
    if (activeBoard.id === 1 || activeBoard.id === 2) {
      newBoard.submissionUnchanged = true;
      if (
        !compareUnorderedArrays(activeBoard.rows, otherBoard.rows) &&
        activeBoard.rows.length === 1
      ) {
        newBoard.valid = true;
      }
    } else if (activeBoard.id === 3 || activeBoard.id === 4) {
      newBoard.submissionUnchanged = true;
      if (
        !compareUnorderedArrays(activeBoard.rows, otherBoard.rows) &&
        activeBoard.rows.length === 2
      ) {
        newBoard.valid = true;
      }
    } else if (activeBoard.id === 5 || activeBoard.id === 6) {
      newBoard.submissionUnchanged = true;
      if (
        !compareUnorderedArrays(activeBoard.rows, otherBoard.rows) &&
        activeBoard.rows.length === 4
      ) {
        newBoard.valid = true;
      }
    }
    let x = [
      get(positiveControlMap[1]).valid,
      get(positiveControlMap[2]).valid,
      get(positiveControlMap[3]).valid,
      get(positiveControlMap[4]).valid,
      get(positiveControlMap[5]).valid,
      get(positiveControlMap[6]).valid,
    ];

    x[boardId - 1] = newBoard.valid;
    let flag = true;
    x.forEach((bool) => {
      if (!bool) {
        flag = false;
      }
    });
    set(allSNPBoardSuccessAtom, flag);
    set(positiveControlMap[activePCB], newBoard);
    if (newBoard.valid) {
      for (let i = boardId; i < boardId + 5; i++) {
        let next = ((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
        if (!get(positiveControlMap[next]).valid) {
          set(activePCBAtom, next);
          return;
        }
      }
    }
  },
);
export const allSNPBoardSuccessAtom = atomWithStorage(
  "allSNPBoardSuccessAtom",
  false,
);

export const selectedInfectionsIndexAtom = atom(0);
export const selectedMicroInfectionsIndexAtom = atom(0);

export const allMicroBoardSuccessAtom = atom(false);

export const checkMicroBoardSuccessAtom = atom(
  () => "",
  (get, set, boardId: 1 | 2 | 3 | 4 | 5 | 6) => {
    const activeMicroPCB = get(activeMicroPCBAtom);
    let activeBoard = get(microPCBMap[boardId]);
    let newBoard = { ...activeBoard };
    if (activeBoard.id === 1 || activeBoard.id === 2) {
      if (activeBoard.rows.length === 1) {
        newBoard.valid = true;
        newBoard.attempted = true;
      }
    } else if (activeBoard.id === 3 || activeBoard.id === 4) {
      if (activeBoard.rows.length === 2) {
        newBoard.valid = true;
        newBoard.attempted = true;
      }
    } else if (activeBoard.id === 5 || activeBoard.id === 6) {
      if (activeBoard.rows.length === 4) {
        newBoard.valid = true;
        newBoard.attempted = true;
      }
    }
    let x = [
      get(microPCBMap[1]).valid,
      get(microPCBMap[2]).valid,
      get(microPCBMap[3]).valid,
      get(microPCBMap[4]).valid,
      get(microPCBMap[5]).valid,
      get(microPCBMap[6]).valid,
    ];

    x[boardId - 1] = newBoard.valid;
    let flag = true;
    x.forEach((bool) => {
      if (!bool) {
        flag = false;
      }
    });
    set(allMicroBoardSuccessAtom, flag);
    set(microPCBMap[boardId], newBoard);
    if (newBoard.valid) {
      for (let i = boardId; i < boardId + 5; i++) {
        let next = ((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
        if (!get(microPCBMap[next]).valid) {
          set(activeMicroPCBAtom, next);
          return;
        }
      }
    }
  },
);

export const allMicroBoardLociSuccessAtom = atom(false);
export const checkMicroBoardLociSuccessAtom = atom(
  () => "",
  (
    get,
    set,
    boardId: 1 | 2 | 3 | 4 | 5 | 6,
    spliced: undefined | 1 | 2 | 3 | 4,
  ) => {
    let activeMicroBoard = get(microPCBMap[boardId]);

    let x: { [key: number]: string[] } = {
      1: [],
      2: [],
      3: [],
      4: [],
    };
    let y = activeMicroBoard.rows.map((rowNum, idx) => {
      let row: string[] = [];
      for (let i = 0; i < 12; i += 3) {
        let segment = get(
          spliced === 3 ? cloneRowMapPersisted[rowNum] : cloneRowMap[rowNum],
        )
          .vals.slice(i, i + 3)
          .join("");
        row.push(segment);
        // let segment = "";
        // if (spliced === 3) {
        //   segment = get(
        //     cloneRowMapPersisted[rowNum].microVals.slice(i, i + 3).join(""),
        //   );
        //   console.log(segment);
        //   row.push(segment);
        // } else {
        //   segment = get(cloneRowMap[rowNum])
        //     .vals.slice(i, i + 3)
        //     .join("");
        //   row.push(segment);
        // }
      }
      return row;
    });
    y.forEach((rowValsArr) => {
      rowValsArr.forEach((str, idx) => {
        x[idx + 1].push(str);
      });
    });
    let flag = true;
    let compObj = { ...activeMicroBoard.lociInput };
    for (let column in compObj) {
      compObj[column] = activeMicroBoard.lociInput[column].map((microId) => {
        return getValuesFromMicroId(
          microId,
          column as unknown as number,
          true,
        ).join("");
      });
    }
    for (let k in x) {
      if (!compareUnorderedArrays(x[k], compObj[k])) {
        flag = false;
      }
    }

    let z = [
      get(microPCBMap[1]).lociSuccess,
      get(microPCBMap[2]).lociSuccess,
      get(microPCBMap[3]).lociSuccess,
      get(microPCBMap[4]).lociSuccess,
      get(microPCBMap[5]).lociSuccess,
      get(microPCBMap[6]).lociSuccess,
    ];
    z[boardId - 1] = flag;
    let allSuccess = true;
    z.forEach((bool) => {
      if (!bool) {
        allSuccess = false;
      }
    });
    set(allMicroBoardLociSuccessAtom, allSuccess);
    set(microPCBMap[boardId], {
      ...activeMicroBoard,
      lociSuccess: flag,
      lociAttempted: true,
    });
  },
);

export const selectedCloneRowAtom = atom<null | number>(0);
export const cloneRowsFinishedAtom = atomWithStorage(
  "cloneRowsFinished",
  false,
);

export const nextSelectedCloneRowAtom = atom(
  () => "",
  (get, set, partEight?: boolean) => {
    let currentTempCloneRow = get(cloneRowTemporaryAtom);
    let currentSelectedCloneRow = get(selectedCloneRowAtom);
    if (currentSelectedCloneRow && !partEight) {
      set(cloneRowMapPersisted[currentSelectedCloneRow], {
        ...currentTempCloneRow,
        id: get(
          cloneRowMapPersisted[currentSelectedCloneRow as 1 | 2 | 3 | 4 | 5],
        ).id,
      });
    } else if (partEight && currentSelectedCloneRow) {
      set(partEightCloneRowMap[currentSelectedCloneRow], {
        ...currentTempCloneRow,
        id: get(
          partEightCloneRowMap[currentSelectedCloneRow as 1 | 2 | 3 | 4 | 5],
        ).id,
      });
    }
    if (partEight) {
      for (
        let i = currentSelectedCloneRow;
        i < currentSelectedCloneRow + 3;
        i++
      ) {
        let next = ((i % 3) + 1) as 1 | 2 | 3;
        console.log(next);
        if (get(partEightCloneRowMap[next]).vals[0] === "") {
          set(selectedCloneRowAtom, next);
          set(cloneRowTemporaryAtom, {
            id: 0,
            vals: Array(12)
              .fill("")
              .map((e) => e),
            microVals: Array(4).fill([]),
            microIds: Array(4).fill(""),
          });
          return;
        }
      }
    } else {
      for (
        let i = currentSelectedCloneRow;
        i < currentSelectedCloneRow + 5;
        i++
      ) {
        let next = ((i % 5) + 1) as 1 | 2 | 3 | 4 | 5;
        console.log(next);
        if (get(cloneRowMapPersisted[next]).vals[0] === "") {
          set(selectedCloneRowAtom, next);
          set(cloneRowTemporaryAtom, {
            id: 0,
            vals: Array(12)
              .fill("")
              .map((e) => e),
            microVals: Array(4).fill([]),
            microIds: Array(4).fill(""),
          });
          return;
        }
      }
    }
    set(cloneRowTemporaryAtom, {
      id: 0,
      vals: Array(12)
        .fill("")
        .map((e) => e),
      microVals: Array(4).fill([]),
      microIds: Array(4).fill(""),
    });
    set(selectedCloneRowAtom, 0);
    if (partEight) {
      set(partEightCloneRowsFinishedAtom, true);
    } else {
      set(cloneRowsFinishedAtom, true);
    }
  },
);

export const partOneSubstepCompletionsAtom = atomWithStorage(
  "partOneSubstepCompletionAtom",
  {
    1: false,
    2: false,
    3: false,
    4: false,
  },
);

export const confirmOpenAtom = atom(false);
export const versionAtom = atomWithStorage("versionAtom", 1);

// export const selectedInfectionsIndex = atom(1);
export const persistentSNPInfectionsAtom = atomWithStorage(
  "persistentSNPInfectionsAtom",
  {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
  },
);

export const partEightRefRowAtom = atom<RefRow>({
  id: 0,
  vals: ["T", "A", "C", "C", "G", "A", "A", "G", "A", "C", "T", "A"],
  alts: ["A", "G", "G", "A", "T", "T", "C", "T", "G", "A", "G", "C"],
});

export const partEightCloneRowsFinishedAtom = atomWithStorage(
  "partEightCloneRowsFinished",
  false,
);

export const partEightCloneRowOnePersistentAtom = atomWithStorage(
  "partEightCloneRowOnePersistentAtom",
  {
    id: 1,
    vals: Array(12).fill(""),
    microVals: Array(4).fill([]),
    microIds: Array(4).fill(""),
  },
);
export const partEightCloneRowTwoPersistentAtom = atomWithStorage(
  "partEightCloneRowTwoPersistentAtom",
  {
    id: 2,
    vals: Array(12).fill(""),
    microVals: Array(4).fill([]),
    microIds: Array(4).fill(""),
  },
);
export const partEightCloneRowThreePersistentAtom = atomWithStorage(
  "partEightCloneRowThreePersistentAtom",
  {
    id: 3,
    vals: Array(12).fill(""),
    microVals: Array(4).fill([]),
    microIds: Array(4).fill(""),
  },
);
export const partEightCloneRowFourPersistentAtom = atomWithStorage(
  "partEightCloneRowFourPersistentAtom",
  {
    id: 4,
    vals: Array(12).fill(""),
    microVals: Array(4).fill([]),
    microIds: Array(4).fill(""),
  },
);
export const partEightCloneRowFivePersistentAtom = atomWithStorage(
  "partEightCloneRowFivePersistentAtom",
  {
    id: 5,
    vals: Array(12).fill(""),
    microVals: Array(4).fill([]),
    microIds: Array(4).fill(""),
  },
);

export const partEightCloneRowMap = {
  1: partEightCloneRowOnePersistentAtom,
  2: partEightCloneRowTwoPersistentAtom,
  3: partEightCloneRowThreePersistentAtom,
  4: partEightCloneRowFourPersistentAtom,
  5: partEightCloneRowFivePersistentAtom,
};

export const P8PhaseTwoSubstepAtom = atom(0);

export const partEightPairwiseCombosAtom = atomWithStorage<{
  [key: number]: { [key: number]: (boolean | null)[] };
}>("partEightPairwiseCombosAtom", {
  1: {
    2: Array(12).fill(null),
    3: Array(12).fill(null),
    4: Array(12).fill(null),
    5: Array(12).fill(null),
  },
  2: {
    1: Array(12).fill(null),
    3: Array(12).fill(null),
    4: Array(12).fill(null),
    5: Array(12).fill(null),
  },
  3: {
    1: Array(12).fill(null),
    2: Array(12).fill(null),
    4: Array(12).fill(null),
    5: Array(12).fill(null),
  },
  4: {
    1: Array(12).fill(null),
    2: Array(12).fill(null),
    3: Array(12).fill(null),
    5: Array(12).fill(null),
  },
  5: {
    1: Array(12).fill(null),
    2: Array(12).fill(null),
    3: Array(12).fill(null),
    4: Array(12).fill(null),
  },
});

export const partEightPairwiseCombosUpdateAtom = atom(
  null,
  (
    get,
    set,
    {
      row1,
      row2,
      index,
      val,
    }: { row1: number; row2: number; index: number; val: boolean },
  ) => {
    const pairwiseCombos = get(partEightPairwiseCombosAtom);
    let copyArr = [...pairwiseCombos[row1][row2]];
    copyArr[index] = val;
    let copyPairwise = { ...pairwiseCombos };
    copyPairwise[row1][row2] = copyArr;
    copyPairwise[row2][row1] = copyArr;
    set(partEightPairwiseCombosAtom, copyPairwise);
  },
);

export const P8SelectedCloneRowAtom = atom<number>(1);
export const P8PositiveControlBoardsAtom = atomWithStorage<
  {
    id: number;
    rows: number[];
    submitAttempted: boolean;
    submitValid: boolean;
    input: {
      ref: boolean;
      alt: boolean;
    }[];
    inputSubmitAttempted: boolean;
    inputSubmitValid: boolean;
  }[]
>("P8PositiveControlBoardsAtom", [
  {
    id: 1,
    rows: [],
    submitAttempted: false,
    submitValid: false,
    input: Array(12)
      .fill(0)
      .map((e, i) => {
        return {
          ref: false,
          alt: false,
        };
      }),
    inputSubmitAttempted: false,
    inputSubmitValid: false,
  },
  {
    id: 2,
    rows: [],
    submitAttempted: false,
    submitValid: false,
    input: Array(12)
      .fill(0)
      .map((e, i) => {
        return {
          ref: false,
          alt: false,
        };
      }),
    inputSubmitAttempted: false,
    inputSubmitValid: false,
  },
  {
    id: 3,
    rows: [],
    submitAttempted: false,
    submitValid: false,
    input: Array(12)
      .fill(0)
      .map((e, i) => {
        return {
          ref: false,
          alt: false,
        };
      }),
    inputSubmitAttempted: false,
    inputSubmitValid: false,
  },
  {
    id: 4,
    rows: [],
    submitAttempted: false,
    submitValid: false,
    input: Array(12)
      .fill(0)
      .map((e, i) => {
        return {
          ref: false,
          alt: false,
        };
      }),
    inputSubmitAttempted: false,
    inputSubmitValid: false,
  },
  {
    id: 5,
    rows: [],
    submitAttempted: false,
    submitValid: false,
    input: Array(12)
      .fill(0)
      .map((e, i) => {
        return {
          ref: false,
          alt: false,
        };
      }),
    inputSubmitAttempted: false,
    inputSubmitValid: false,
  },
]);

// export const P8InputRefRowMap = atomWithStorage('P8PositiveControlInputsAtom',
//   {
//     1: {
//   id: 1,
//   rows: Array(12)
//     .fill(0)
//     .map((e) => {
//       return { ref: false, alt: false };
//     }),
//     },
//     2: {
//       id: 2,
//   rows: Array(12)
//     .fill(0)
//     .map((e) => {
//       return { ref: false, alt: false };
//     }),
//     },
//     3: {
//       id: 3,
//   rows: Array(12)
//     .fill(0)
//     .map((e) => {
//       return { ref: false, alt: false };
//     }),
//     },
//     4: {
//       id: 4,
//   rows: Array(12)
//     .fill(0)
//     .map((e) => {
//       return { ref: false, alt: false };
//     }),
//     },
//     5: {
//       id: 5,
//   rows: Array(12)
//     .fill(0)
//     .map((e) => {
//       return { ref: false, alt: false };
//     }),
//     },
//   },

// )

export const P8HandlePositiveControlsubmitValidAtom = atom(null, (get, set) => {
  const positiveControlBoards = [...get(P8PositiveControlBoardsAtom)];
  const P8ActiveControlBoard = get(P8ActiveControlBoardAtom);
  const currentBoard = { ...positiveControlBoards[P8ActiveControlBoard] };
  let flag = false;
  if (currentBoard.id === 1) {
    const otherBoard1 = positiveControlBoards[1];
    const otherBoard2 = positiveControlBoards[2];
    if (currentBoard.rows.length === 1) {
      if (
        !compareUnorderedArrays(currentBoard.rows, otherBoard1.rows) &&
        !compareUnorderedArrays(currentBoard.rows, otherBoard2.rows)
      ) {
        flag = true;
      }
    }
  } else if (currentBoard.id === 2) {
    const otherBoard1 = positiveControlBoards[0];
    const otherBoard2 = positiveControlBoards[2];
    if (currentBoard.rows.length === 1) {
      if (
        !compareUnorderedArrays(currentBoard.rows, otherBoard1.rows) &&
        !compareUnorderedArrays(currentBoard.rows, otherBoard2.rows)
      ) {
        flag = true;
      }
    }
  } else if (currentBoard.id === 3) {
    const otherBoard1 = positiveControlBoards[0];
    const otherBoard2 = positiveControlBoards[1];
    if (currentBoard.rows.length === 1) {
      if (
        !compareUnorderedArrays(currentBoard.rows, otherBoard1.rows) &&
        !compareUnorderedArrays(currentBoard.rows, otherBoard2.rows)
      ) {
        flag = true;
      }
    }
  } else if (currentBoard.id === 4) {
    const otherBoard1 = positiveControlBoards[4];
    if (currentBoard.rows.length === 2) {
      if (!compareUnorderedArrays(currentBoard.rows, otherBoard1.rows)) {
        flag = true;
      }
    }
  } else if (currentBoard.id === 5) {
    const otherBoard1 = positiveControlBoards[3];
    if (currentBoard.rows.length === 2) {
      if (!compareUnorderedArrays(currentBoard.rows, otherBoard1.rows)) {
        flag = true;
      }
    }
  }
  currentBoard.submitAttempted = true;
  currentBoard.submitValid = flag;
  positiveControlBoards[P8ActiveControlBoard] = currentBoard;
  set(P8PositiveControlBoardsAtom, positiveControlBoards);
});

export const P8ActiveControlBoardAtom = atom(0);
export const P8ActivePairwiseControlBoardAtom = atom(0);

export const P8PairwiseCombos = [
  [3, 0],
  [3, 1],
  [3, 2],
  [4, 0],
  [4, 1],
  [4, 2],
  [3, 4],
];

export const P8PairwiseControlBoardsAtom = atomWithStorage(
  "P8PairwiseControlBoardsAtom",
  [
    {
      id: 1,
      inputOne: Array(12).fill(null),
      inputTwo: Array(12).fill(null),
      inputAttempted: false,
      inputValid: false,
    },
    {
      id: 2,
      inputOne: Array(12).fill(null),
      inputTwo: Array(12).fill(null),
      inputAttempted: false,
      inputValid: false,
    },
    {
      id: 3,
      inputOne: Array(12).fill(null),
      inputTwo: Array(12).fill(null),
      inputAttempted: false,
      inputValid: false,
    },
    {
      id: 4,
      inputOne: Array(12).fill(null),
      inputTwo: Array(12).fill(null),
      inputAttempted: false,
      inputValid: false,
    },
    {
      id: 5,
      inputOne: Array(12).fill(null),
      inputAttempted: false,
      inputValid: false,
      inputTwo: Array(12).fill(null),
    },
    {
      id: 6,
      inputOne: Array(12).fill(null),
      inputTwo: Array(12).fill(null),
      inputAttempted: false,
      inputValid: false,
    },
    {
      id: 7,
      inputOne: Array(12).fill(null),
      inputTwo: Array(12).fill(null),
      inputAttempted: false,
      inputValid: false,
    },
  ],
);

export const checkP8PairwiseValidAtom = atom(
  () => {},
  (get, set) => {
    const P8PairwiseControlBoardsCopy = [...get(P8PairwiseControlBoardsAtom)];
    const currentActivePairwiseIndex = get(P8ActivePairwiseControlBoardAtom);
    const currentActivePairwiseCombo =
      P8PairwiseCombos[currentActivePairwiseIndex];
    const currentPairwiseCopy = {
      ...P8PairwiseControlBoardsCopy[currentActivePairwiseIndex],
    };
    const P8ControlBoards = get(P8PositiveControlBoardsAtom);
    const currentBoard_1 = P8ControlBoards[currentActivePairwiseCombo[0]];
    const currentBoard_2 = P8ControlBoards[currentActivePairwiseCombo[1]];

    console.log(currentActivePairwiseCombo);
    console.log(currentBoard_1);
    console.log(currentBoard_2);

    let observedArr = [];
    let intersectionsArr = [];
    currentBoard_1.input.forEach((refObj, idx) => {
      let refObj2 = currentBoard_2.input[idx];
      let observed = 0;
      let intersection = 0;
      if (refObj.ref || refObj2.ref) {
        observed++;
      }
      if (refObj.alt || refObj2.alt) {
        observed++;
      }
      if (refObj.ref === true && refObj2.ref === true) {
        intersection++;
      }
      if (refObj.alt === true && refObj2.alt === true) {
        intersection++;
      }
      observedArr[idx] = observed;
      intersectionsArr[idx] = intersection;
      // if (refObj.ref === true && refObj.alt === true) {
      //   return 3;
      // } else if (refObj.ref === true && refObj.alt === false) {
      //   return 2;
      // } else if (refObj.ref === false && refObj.alt === true) {
      //   return 1;
      // } else {
      //   throw {};
      // }
    });
    console.log(intersectionsArr, observedArr);
    let flag = true;
    P8PairwiseControlBoardsCopy[currentActivePairwiseIndex].inputOne.forEach(
      (input, idx) => {
        if (input !== intersectionsArr[idx]) {
          flag = false;
        }
        if (
          P8PairwiseControlBoardsCopy[currentActivePairwiseIndex].inputTwo[
            idx
          ] !== observedArr[idx]
        ) {
          flag = false;
        }
      },
    );
    // let z = currentBoard_2.input.map((refObj, idx) => {
    //   if (refObj.ref === true && refObj.alt === true) {
    //     return 3;
    //   } else if (refObj.ref === true && refObj.alt === false) {
    //     return 2;
    //   } else if (refObj.ref === false && refObj.alt === true) {
    //     return 1;
    //   } else {
    //     throw {};
    //   }
    // });
    // let flag = true;
    // for (let i = 0; i < x.length; i++) {
    //   if (x[i] !== z[i]) {
    //     console.log(x, z);
    //     console.log(x[i], z[i], i);
    //     flag = false;
    //     break;
    //   }
    // }
    currentPairwiseCopy.inputAttempted = true;
    currentPairwiseCopy.inputValid = flag;
    P8PairwiseControlBoardsCopy[currentActivePairwiseIndex] =
      currentPairwiseCopy;
    set(P8PairwiseControlBoardsAtom, P8PairwiseControlBoardsCopy);
  },
);

export const checkP8InputValidAtom = atom(
  () => {},
  (get, set) => {
    let P8PositiveControlBoardsCopy = [...get(P8PositiveControlBoardsAtom)];
    let P8ActiveControlBoard = get(P8ActiveControlBoardAtom);
    let currentBoard = P8PositiveControlBoardsCopy[P8ActiveControlBoard];

    const cloneRowOne = get(partEightCloneRowOnePersistentAtom);
    const cloneRowTwo = get(partEightCloneRowTwoPersistentAtom);
    const cloneRowThree = get(partEightCloneRowThreePersistentAtom);
    let cloneRows = {
      1: cloneRowOne,
      2: cloneRowTwo,
      3: cloneRowThree,
      4: {
        vals: cloneRowOne.vals
          .slice(0, 6)
          .concat(cloneRowTwo.vals.slice(6, 12)),
      },
      5: {
        vals: cloneRowOne.vals
          .slice(0, 3)
          .concat(cloneRowTwo.vals.slice(3, 9))
          .concat(cloneRowThree.vals.slice(9, 12)),
      },
    };
    console.log(cloneRows);
    let occurrences = Array(12)
      .fill(0)
      .map((e, i) => {
        return { ref: false, alt: false };
      });
    currentBoard.rows.forEach((rowId) => {
      occurrences.forEach((refObj, index) => {
        if (
          cloneRows[rowId].vals[index] === get(partEightRefRowAtom).vals[index]
        ) {
        }
      });
    });
  },
);
