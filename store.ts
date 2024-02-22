import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const phaseAtom = atom(1);
// *********************** //
// Drag Drop
// *********************** //

export const dragDropPhaseCompletionAtom = atomWithStorage<{
  [key: number]: boolean;
}>("dragDropPhaseCompletionAtom", {
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
  12: false,
});

export const dragLocationAtom = atom<{ x: number | null; y: number | null }>({
  x: 0,
  y: 0,
});
export const readsAtom = atomWithStorage<
  {
    id: number;
    readStart: boolean;
    charStart: null | number;
    rowStart: null | number;
    text: string;
    trash: number | null;
  }[]
>("readsAtom", [
  {
    id: 1,
    // top: 32,
    // left: 8,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    text: "TGTGTAATGAATAAA",
  },
  {
    id: 2,
    // top: 64,
    // left: 8,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    text: "TGTGTAATGAATAAA",
  },
  {
    id: 3,
    // top: 96,
    // left: 8,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    text: "AACTTTAAACAAAAT",
  },
  {
    id: 4,
    // top: 128,
    // left: 8,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    text: "AACTTTAAACAAAAT",
  },
  {
    id: 5,
    // top: 160,
    // left: 8,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    text: "TGTGTAATGAATAAA",
  },
  {
    id: 6,
    // top: 192,
    // left: 8,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    text: "AACTTTAAACAAAAT",
  },
  {
    id: 7,
    // top: 224,
    // left: 8,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    text: "TGTGTAATGAATAAA",
  },
  {
    id: 8,
    // top: 256,
    // left: 8,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    text: "AACTTTAAACAAAAT",
  },
  {
    id: 9,
    // top: 288,
    // left: 8,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    text: "TGTGTAATGAATAAA",
  },
  {
    id: 10,
    // top: 320,
    // left: 8,
    readStart: true,
    trash: null,
    charStart: null,
    rowStart: null,
    text: "TGTGTAATGAATAAA",
  },
]);

export const reads2Atom = atomWithStorage<
  {
    id: number;
    readStart: boolean;
    charStart: null | number;
    rowStart: null | number;
    text: string;
    trash: number | null;
    specials: {
      color?: string;
      [key: number]: string;
    };
  }[]
>("reads2Atom", [
  {
    id: 1,

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
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

    charStart: null,
    rowStart: null,
    readStart: true,
    trash: null,
    text: "ATATATAGGGGGGGG",
    specials2: Array(15)
      .fill(0)
      .map(() => false),
    specials: {
      color: "rebeccapurple",
    },
  },
]);

export const dragDropQuestionsAtom = atomWithStorage("dragDropQuestionsAtom", {
  1: {
    1: null,
    2: null,
  },
  2: {
    1: null,
    2: null,
  },
  3: {
    1: null,
    2: null,
  },
  4: {
    1: null,
  },
  5: {
    1: null,
  },
});
