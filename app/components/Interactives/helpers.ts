export function compareUnorderedArrays(arr1: any[], arr2: any[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const sortedArr1 = arr1.slice().sort();
  const sortedArr2 = arr2.slice().sort();

  return JSON.stringify(sortedArr1) === JSON.stringify(sortedArr2);
}

export function countSNPs(
  inputs: { alternate: boolean; reference: boolean }[]
) {
  let singles = 0;
  let pairs = 0;
  inputs.forEach((input) => {
    if (input.reference && input.alternate) {
      pairs++;
    } else if (input.reference || input.alternate) {
      singles++;
    }
  });
  return {
    singles,
    pairs,
  };
}

export function countMHPs(inputs: MicroId[][]) {
  let result: { [key: number]: number } = {};
  consolidateMatrix(inputs).map((el, idx) => {
    result[idx + 1] = el.length;
  });
  return result;
}

export function compareGenotypeWithClones(
  genotype: { alternate: boolean; reference: boolean }[],
  clonesMatrix: (0 | 1 | null)[][]
) {
  let result = Array(12)
    .fill(0)
    .map(() => {
      return {
        reference: false,
        alternate: false,
      };
    });
  clonesMatrix.forEach((clonesArr) => {
    clonesArr.forEach((ref, idx) => {
      if (ref === 0) {
        result[idx].reference = true;
      } else {
        result[idx].alternate = true;
      }
    });
  });
  console.log(result);
  let x = genotype.map((refObj, idx) => {
    if (
      refObj.alternate !== result[idx].alternate ||
      refObj.reference !== result[idx].reference
    ) {
      return {
        reference: refObj.reference === result[idx].reference,
        alternate: refObj.alternate === result[idx].alternate,
      };
    } else {
      return null;
    }
  });
  return x;

  for (let i = 0; i < genotype.length; i++) {
    if (
      genotype[i].alternate !== result[i].alternate ||
      genotype[i].reference !== result[i].reference
    ) {
      return false;
    }
  }
  return true;
}

export function consolidateMatrix(inputs: MicroId[][]) {
  let newMatrix: MicroId[][] = [[], [], [], []];
  inputs.forEach((microIdArr, colNum) => {
    let newMicroIdArr = newMatrix[colNum];
    microIdArr.forEach((microId, idx) => {
      let z = getIndexArrayOfPrimitives(newMicroIdArr, microId);
      if (z === false) {
        newMicroIdArr.push(microId);
      }
    });
  });
  return newMatrix;
}

export function compareOrderedArrays(arr: any[], arr2: any[]) {
  if (arr.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

export type MicroId = [0 | 1, 0 | 1, 0 | 1][];

function nonPrimitiveMHPRowCompare(
  correctRow: MicroId[],
  attemptedRow: MicroId[]
) {
  let result: {
    missing: MicroId[] | never;
    extra: MicroId[] | never;
  } = {
    missing: [],
    extra: [],
  };
  attemptedRow.forEach((attemptedMicroId, idx) => {
    let flag = true;
    if (
      !correctRow
        .map((correctMicroId) => {
          return correctMicroId.join("");
        })
        .includes(attemptedMicroId.join(""))
    ) {
      result.extra.push(attemptedMicroId);
    }
  });
  correctRow.forEach((correctMicroId, idx) => {
    let flag = false;
    attemptedRow.forEach((attemptedMicroId) => {
      if (compareOrderedArrays(correctMicroId, attemptedMicroId)) {
        flag = true;
      }
    });
    if (!flag) {
      if (
        !result.missing
          .map((microId) => {
            return microId.join("");
          })
          .includes(correctMicroId.join(""))
      ) {
        result.missing.push(correctMicroId);
      }
    }
  });
  return result;
}

export function getDifferenceBetweenMatrices(
  correctInputs: MicroId[][],
  attemptedInputs: MicroId[][]
) {
  let differenceMatrix: [
    { extra: []; missing: [] },
    { extra: []; missing: [] },
    { extra: []; missing: [] },
    { extra: []; missing: [] }
  ] = [
    { extra: [], missing: [] },
    { extra: [], missing: [] },
    { extra: [], missing: [] },
    { extra: [], missing: [] },
  ];
  correctInputs = consolidateMatrix(correctInputs);
  attemptedInputs = consolidateMatrix(attemptedInputs);
  let z = differenceMatrix.map((el, idx) => {
    return nonPrimitiveMHPRowCompare(correctInputs[idx], attemptedInputs[idx]);
  });
  return z;
}

export function compareMatrices(inputs: MicroId[][], inputs2: MicroId[][]) {
  inputs = consolidateMatrix(inputs);
  inputs2 = consolidateMatrix(inputs2);
  if (inputs.length !== inputs2.length) {
    return false;
  }
  for (let i = 0; i < inputs.length; i++) {
    let row1 = inputs[i];
    let row2 = inputs2[i];
    if (row1.length !== row2.length) {
      return false;
    }
    for (let j = 0; j < row1.length; j++) {
      let microhaplotypeMatchFound = false;
      for (let z = 0; z < row2.length; z++) {
        if (compareOrderedArrays(row1[j], row2[z])) {
          microhaplotypeMatchFound = true;
          break;
        }
      }
      if (!microhaplotypeMatchFound) {
        return false;
      }
    }
  }
  return true;
}

export function getIndexArrayOfPrimitives(matrix: MicroId[], arr: MicroId) {
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    let flag = false;
    for (let j = 0; j < row.length; j++) {
      let val = row[j];
      if (val !== arr[j] || row.length !== arr.length) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      return i;
    }
  }
  return false;
}

export function findNextRowColumnTupleInMatrix(
  matrix: {
    1: boolean[];
    2: boolean[];
    3: boolean[];
    4: boolean[];
    5: boolean[];
  },
  priority: "col" | "row" = "col"
) {
  if (priority === "row") {
    for (let i = 1; i <= 5; i++) {
      let row = matrix[i as 1 | 2 | 3 | 4 | 5];
      for (let j = 0; j < row.length; j++) {
        if (row[j] === false) {
          return [i, j];
        }
      }
    }
  } else {
    for (let i = 0; i <= 3; i++) {
      for (let j = 1; j <= 5; j++) {
        let val = matrix[j as 1 | 2 | 3 | 4 | 5][i];
        if (val === false) {
          return [j, i];
        }
      }
    }
  }
  return null;
}

export function switchValues(id: number) {
  if (id === 1) {
    return 2;
  } else if (id === 2) {
    return 1;
  } else if (id === 3) {
    return 4;
  } else if (id === 4) {
    return 3;
  } else if (id === 5) {
    return 6;
  } else {
    return 5;
  }
}

export const isFocusable = (item: HTMLElement) => {
  if (item.tabIndex < 0) {
    return false;
  }
  switch (item.tagName) {
    case "A":
      //@ts-ignore
      return !!item.href;
    case "INPUT":
      //@ts-ignore
      return item.type !== "hidden" && !item.disabled;
    case "SELECT":
    case "TEXTAREA":
    case "BUTTON":
      //@ts-ignore
      return !item.disabled;
    default:
      return false;
  }
};

export const findFirstFocusableElement = (
  container: HTMLElement | null
): HTMLElement | undefined => {
  if (container) {
    //@ts-ignore
    return Array.from(container.getElementsByTagName("*")).find(isFocusable);
  }
};

export function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function getUniqueValuesArray(arr: number[]) {
  let uniqueVals: { [key: number]: boolean } = {};
  let uniqueArr: number[] = [];
  arr.forEach((val, idx) => {
    if (!uniqueVals[val]) {
      uniqueArr.push(val);
      uniqueVals[val] = true;
    }
  });
  // shuffle(uniqueArr);
  return uniqueArr;
}

export function findLociWithSharedMicrohaplotypes(
  genotype1: number[][],
  genotype2: number[][]
) {
  let result: number[] = [];
  genotype1.forEach((microArr, idx) => {
    microArr.forEach((microId) => {
      if (genotype2[idx].includes(microId) && !result.includes(idx)) {
        result.push(idx);
      }
    });
  });
  return result;
}
