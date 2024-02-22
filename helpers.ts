export function getCoordsByCharStart({
  id,
  size,
  yOffset,
  xOffset,
  charStart,
  rowStart,
  rowHeight,
  isDragging,
}: {
  id: number;
  size: number;
  yOffset: number;
  xOffset: number;
  charStart: number;
  rowStart: number;
  rowHeight: number;
  isDragging?: boolean;
}) {
  let x = size * charStart + xOffset;
  let y = rowHeight * rowStart + yOffset;
  const transform = `translate3d(${x}px, ${y}px, 0)`;

  return {
    position: "absolute",
    transform,
    zIndex: 1,
    opacity: isDragging ? 0.5 : 1,
  };
}

function getMatrixPosition(id: number) {
  let col, row;
  if (id === 0) {
    [col, row] = [3, 0];
  } else if (id === 1) {
    [col, row] = [0, 0];
  } else if (id === 2) {
    [col, row] = [0, 1];
  } else if (id === 3) {
    [col, row] = [0, 2];
  } else if (id === 4) {
    [col, row] = [1, 0];
  } else if (id === 5) {
    [col, row] = [1, 1];
  } else if (id === 6) {
    [col, row] = [1, 2];
  } else if (id === 7) {
    [col, row] = [2, 0];
  } else if (id === 8) {
    [col, row] = [2, 1];
  } else {
    [col, row] = [2, 2];
  }
  // let row = Math.floor(id / 3);
  // let col = id === 0 ? 3 : id % 3;

  return [col, row];
}

export function getStylesWithTrashStart({
  size,
  isDragging,
  yOffset,
  trashStart,
  readRowHeight,
}: {
  readRowHeight: number;
  trashStart: number;
  yOffset: number;
  size: number;
  isDragging: boolean;
}): {
  size: number;
  isDragging: boolean;
} {
  const transform = `translate3d(${550}px, ${yOffset + readRowHeight * 16 + readRowHeight * (trashStart + 1)}px, 0)`;

  return {
    transformOrigin: "top left",
    zIndex: 1,
    position: "absolute",
    transform,
    WebkitTransform: transform,
    opacity: isDragging ? 0.5 : 1,
    height: isDragging ? 0 : "auto",

    // pointerEvents: isDragging ? "none" : "auto",
  };
}

export function isDraggable(id: number, phase: number) {
  if (phase === 1 || phase === 2) {
    return false;
  }
  if (phase === 4) {
    return false;
  }
  if (phase === 7) {
    return id > 10;
  }
  if (phase >= 8) {
    return false;
  }

  return true;
}

export function getStylesWithReadStart({
  id,
  size,
  isStacked,
  isDragging,
  readRowHeight,
}: {
  readRowHeight: number;
  id: number;
  size: number;
  isStacked: boolean;
  isDragging: boolean;
}) {
  // const transform = `translate3d(${charStart * size + xOffset}px, ${(rowStart ? rowStart * 32 : 32) + yOffset}px, 0)`;
  // id = id % 10;
  // let row = Math.floor(id / 3);
  // let col = id === 0 ? 3 : id % 3;

  // console.log(id, row, col);
  let [col, row] = isStacked
    ? getMatrixPosition(id % 10)
    : [(id === 10 ? 9 : (id % 10) - 1) * (readRowHeight + 4), 0];

  const transform = isStacked
    ? `translate3d(${row * (size * 15) + row * 8 + row * 16 + 8}px, ${col * readRowHeight + 4 * col - 160}px, 0)`
    : `translate3d(${row + 24 - 340}px, ${col + 40}px, 0)`;

  return {
    transformOrigin: "top left",
    // zIndex: 1,
    position: "absolute",
    transform,
    WebkitTransform: transform,
    opacity: isDragging ? 0.5 : 1,
    height: isDragging ? 0 : "auto",
    // pointerEvents: isDragging ? "none" : "auto",
  };
}

export const placeHighest = (reads) => {
  let newReads = reads.map((read) => {
    return { ...read };
  });
  // console.log(
  //   newReads.filter((read) => {
  //     return typeof read.trash === "number";
  //   })
  // );
  let count = 0;
  let innerFunc = (reads, changed: boolean) => {
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
          validLocation(
            reads[i].charStart,
            reads[i].trash - 1,
            reads,
            reads[i].id,
            true,
            reads[i].trash
          )
        ) {
          reads[i].trash = reads[i].trash - 1;
          changed = true;
        }
      }
      if (
        validLocation(
          reads[i].charStart,
          reads[i].rowStart - 1,
          reads,
          reads[i].id
        )
      ) {
        reads[i].rowStart = reads[i].rowStart - 1;
        changed = true;
      }
      if (changed) {
        break;
      }
    }
    innerFunc(reads, changed);
  };
  innerFunc(newReads, true);
  return newReads;
};

export const validLocation = (
  charStart,
  rowStart,
  reads,
  currentId,
  trash?: boolean,
  trashNumber?: number
) => {
  let endX = charStart + 15;
  // let area = getArea({ x: snappedX, y: snappedY });
  // let top = area === "trash" ? 512 : 32;
  if (trash) {
    let x = reads?.filter((read) => {
      return typeof read.trash === "number";
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
  // if (getArea({ x: snappedX, y: rowStart }) === "trash") {
  //   console.log(snappedX, rowStart);
  //   console.log("within trash");
  //   return false;
  // }
  let x = reads?.filter((read) => {
    return (
      read.charStart !== null &&
      read.rowStart === rowStart &&
      read.charStart > charStart - 15 &&
      read.charStart < charStart + 15
      // read.id !== currentId
    );
  });

  return !x.length;
};

export const readsValid = (
  reads: {
    id: number;
    charStart: number | null;
    rowStart: number | null;
    trash: number | null;
    text: string;
    specials: { [key: number]: string };
  }[],
  readSet: number
) => {
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
    console.log(tReads, aReads, reads);
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
  arr2: (string | number)[]
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
