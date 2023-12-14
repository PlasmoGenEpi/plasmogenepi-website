import {
  compareUnorderedArrays,
  phaseAtom,
  readOneQuestionsAtom,
  reads2Atom,
  reads3Atom,
  readsAtom,
} from "@/store";
import { useAtom, useAtomValue } from "jotai";
import { withinTrash } from "./snapToGrid";

const readsValid = (
  reads: {
    id: number;
    top: number;
    left: number;
    text: string;
    specials: { [key: number]: string };
  }[],
  readSet: number,
) => {
  let tReads = reads
    .filter((read, idx) => {
      return (
        read.text[0] === "T" &&
        read.left === 368 &&
        read.text.slice(-4) !== "AAAT"
      );
    })
    .map((read, idx) => {
      return read.id;
    });

  let aReads = reads
    .filter((read, idx) => {
      return read.text[0] === "A" && read.left === 832;
    })
    .map((read, idx) => {
      return read.id;
    });

  if (readSet === 1) {
    if (!compareUnorderedArrays(tReads, [1, 2, 5, 7, 9, 10])) {
      return false;
    }
    if (!compareUnorderedArrays(aReads, [3, 4, 6, 8])) {
      return false;
    }
  } else if (readSet === 2 && reads.length === 10) {
    if (!compareUnorderedArrays(tReads, [2, 3, 4, 8])) {
      return false;
    }
    if (!compareUnorderedArrays(aReads, [1, 5, 6, 9, 10])) {
      return false;
    }
    if (!withinTrash(reads[6].left, reads[6].top)) {
      return false;
    }
  } else if (readSet === 2 && reads.length === 10) {
    if (!compareUnorderedArrays(tReads, [2, 3, 4, 8, 11, 12, 15, 16, 18])) {
      return false;
    }
    if (!compareUnorderedArrays(aReads, [1, 5, 6, 9, 10, 13, 14, 19])) {
      return false;
    }
    if (!withinTrash(reads[6].left, reads[6].top)) {
      return false;
    }
  } else if (readSet === 2 && reads.length === 20) {
    if (!compareUnorderedArrays(tReads, [2, 3, 4, 8, 11, 12, 15, 16, 18])) {
      return false;
    }
    if (!compareUnorderedArrays(aReads, [1, 5, 6, 9, 10, 13, 14, 19])) {
      return false;
    }
    if (
      !withinTrash(reads[6].left, reads[6].top) ||
      !withinTrash(reads[16].left, reads[16].top) ||
      !withinTrash(reads[19].left, reads[19].top)
    ) {
      console.log(reads[16], reads[19]);
      return false;
    }
  }

  return true;
};

export default function DragDropNextButton() {
  const [phase, setPhase] = useAtom(phaseAtom);
  const readOneQuestions = useAtomValue(readOneQuestionsAtom);
  // const readTwoQuestions = useAtomValue(readTwoQuestionsAtom);
  // const readThreeQuestions = useAtomValue(readThreeQuestionsAtom);
  const reads = useAtomValue(readsAtom);
  const reads2 = useAtomValue(reads2Atom);
  const reads3 = useAtomValue(reads3Atom);

  return (
    <button
      onClick={(e) => {
        setPhase(phase + 1);
      }}
      className={
        (phase === 1 && readsValid(reads, 1)) ||
        (phase === 2 &&
          readOneQuestions[1].oneChecked &&
          readOneQuestions[2].twoChecked) ||
        (phase === 3 && readsValid(reads2.slice(0, 10), 2)) ||
        (phase === 4 && readsValid(reads2, 2)) ||
        phase === 5
          ? "ml-auto mr-4 h-[60px] bg-[#0E5258] px-8 py-2 text-center text-xl font-extrabold text-white shadow shadow-black transition-colors duration-75 active:scale-95 active:transition-colors active:duration-75 md:static"
          : "hidden"
      }
    >
      Next
    </button>
  );
}
