import { ReadType } from "@/data/Interactives/interactiveStore";
import { read } from "fs";

export const placeHighest = ({
  reads,
  target,
  lastVisible,
}: {
  lastVisible?: number;
  reads: ReadType[];
  target: ReadType["id"];
}): ReadType[] => {
  let newReads = reads.map((read) => {
    return { ...read };
  });
  let count = 0;
  let innerFunc = (reads: ReadType[], changed: boolean) => {
    count++;
    if (!changed || count > 1000) {
      if (count > 1000) {
        console.log("failed");
      }
      return reads;
    }
    changed = false;
    for (let i = 0; i < reads.length; i++) {
      if (typeof reads[i].trash === "number") {
        if (
          validLocation({
            charStart: reads[i].charStart,
            rowStart: null,
            reads: reads,
            currentId: reads[i].id,
            trash: true,
            trashNumber: reads[i].trash - 1,
          })
        ) {
          reads[i].rowChange = true;
          reads[i].trash = reads[i].trash - 1;
          changed = true;
        }
      }
      if (reads[i].readStart) {
        reads[i].prevPosition = null;
      }
      if (
        validLocation({
          charStart: reads[i].charStart,
          rowStart: reads[i].rowStart - 1,
          reads: reads,
          currentId: reads[i].id,
          trash: false,
          trashNumber: 0,
        })
      ) {
        reads[i].rowChange = true;
        reads[i].rowStart = reads[i].rowStart - 1;
        reads[i].prevPosition = reads[i].charStart;
        changed = true;
      }
      if (changed) {
        break;
      }
    }
    innerFunc(reads, changed);
  };
  innerFunc(newReads, true);
  newReads[target - 1].rowChange = false;
  if (newReads?.[(lastVisible ?? 1) - 1]) {
    newReads[(lastVisible ?? 1) - 1].prevPosition = "start";
  }
  return newReads;
};

export const validLocation = ({
  charStart,
  rowStart,
  reads,
  currentId,
  trash,
  trashNumber,
}: {
  charStart: number;
  rowStart: number;
  reads: ReadType[];
  currentId: number;
  trash: boolean;
  trashNumber: number;
}) => {
  let endX = charStart + 15;
  // let area = getArea({ x: snappedX, y: snappedY });
  // let top = area === "trash" ? 512 : 32;
  if (trash && typeof trashNumber === "number") {
    if (trashNumber < 0) {
      return false;
    }
    let x = reads?.filter((read) => {
      return (
        typeof read.trash === "number" &&
        currentId !== read.id &&
        read.trash === trashNumber
      );
    });
    if (x.length) {
      return false;
    } else {
      return true;
    }
  }
  if (rowStart < 1) {
    return false;
  }
  let x = reads?.filter((read) => {
    return (
      read.charStart !== null &&
      read.rowStart === rowStart &&
      read.charStart > charStart - 15 &&
      read.charStart < charStart + 15
    );
  });

  return !x.length;
};

export const readsValid = (reads: ReadType[], readSet: number) => {
  let tReads = reads
    .filter((read, idx) => {
      return (
        read.text[0] === "T" &&
        read.charStart === 3 &&
        read.text.slice(-4) !== "AAAT"
      );
    })
    .map((read, idx) => {
      return read.id;
    });

  let aReads = reads
    .filter((read, idx) => {
      return read.text[0] === "A" && read.charStart === 32;
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
    if (reads[6].trash === null) {
      return false;
    }
  } else if (readSet === 2 && reads.length === 10) {
    if (!compareUnorderedArrays(tReads, [2, 3, 4, 8, 11, 12, 15, 16, 18])) {
      return false;
    }
    if (!compareUnorderedArrays(aReads, [1, 5, 6, 9, 10, 13, 14, 19])) {
      return false;
    }
    if (!reads[6].trash) {
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
      reads[6].trash === null ||
      reads[16].trash === null ||
      reads[19].trash === null
    ) {
      return false;
    }
  }

  return true;
};

export function compareUnorderedArrays(
  arr1: (string | number)[],
  arr2: (string | number)[],
) {
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1[i] !== undefined) {
      if (!arr2.includes(arr1[i])) {
        return false;
      }
    }
    if (arr2[i] !== undefined) {
      if (!arr1.includes(arr2[i])) {
        return false;
      }
    }
  }
  return true;
}
