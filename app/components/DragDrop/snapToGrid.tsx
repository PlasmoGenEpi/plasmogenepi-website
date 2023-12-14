export const withinGrid = (x: number, y: number) => {
  if (x >= 320 && x <= 1152 - 240 && y >= 0 && y < 480) {
    return true;
  } else {
    return false;
  }
};
export const withinTrash = (x: number, y: number) => {
  if (x >= 320 && x <= 1152 - 240 && y >= 480 && y <= 600) {
    return true;
  } else {
    return false;
  }
};

export const findNextCoords = (
  id: number,
  boxes: { id: number; left: number; top: number }[],
) => {
  boxes = boxes.filter((box) => {
    return box.top >= 480 && box.left >= 320 && box.id !== id;
  });
  if (
    boxes.filter((box) => {
      return box.top === 480;
    }).length !== 3
  ) {
    if (
      boxes.filter((box) => {
        return box.left === 336;
      }).length === 0
    ) {
      return [336, 480];
    } else if (
      boxes.filter((box) => {
        return box.left === 576;
      }).length === 0
    ) {
      return [576, 480];
    } else if (
      boxes.filter((box) => {
        return box.left === 816;
      }).length === 0
    ) {
      return [816, 480];
    }
  } else if (
    boxes.filter((box) => {
      return box.top === 480;
    }).length !== 3
  ) {
    if (
      boxes.filter((box) => {
        return box.left === 336 && box.top === 480;
      }).length === 0
    ) {
      return [336, 480];
    } else if (
      boxes.filter((box) => {
        return box.left === 576 && box.top === 480;
      }).length === 0
    ) {
      return [576, 480];
    } else if (
      boxes.filter((box) => {
        return box.left === 816 && box.top === 480;
      }).length === 0
    ) {
      return [816, 480];
    }
  } else if (
    boxes.filter((box) => {
      return box.top === 512;
    }).length !== 3
  ) {
    if (
      boxes.filter((box) => {
        return box.left === 336 && box.top === 512;
      }).length === 0
    ) {
      return [336, 512];
    } else if (
      boxes.filter((box) => {
        return box.left === 576 && box.top === 512;
      }).length === 0
    ) {
      return [576, 512];
    } else if (
      boxes.filter((box) => {
        return box.left === 816 && box.top === 512;
      }).length === 0
    ) {
      return [816, 512];
    }
  } else if (
    boxes.filter((box) => {
      return box.top === 544;
    }).length !== 3
  ) {
    if (
      boxes.filter((box) => {
        return box.left === 336 && box.top === 544;
      }).length === 0
    ) {
      return [336, 544];
    } else if (
      boxes.filter((box) => {
        return box.left === 576 && box.top === 544;
      }).length === 0
    ) {
      return [576, 544];
    } else if (
      boxes.filter((box) => {
        return box.left === 816 && box.top === 544;
      }).length === 0
    ) {
      return [816, 544];
    }
  } else if (
    boxes.filter((box) => {
      return box.top === 576;
    }).length !== 3
  ) {
    if (
      boxes.filter((box) => {
        return box.left === 336 && box.top === 576;
      }).length === 0
    ) {
      return [336, 576];
    } else if (
      boxes.filter((box) => {
        return box.left === 576 && box.top === 576;
      }).length === 0
    ) {
      return [576, 576];
    } else if (
      boxes.filter((box) => {
        return box.left === 816 && box.top === 576;
      }).length === 0
    ) {
      return [816, 576];
    }
  }
};

export const validLocation = (snappedX, snappedY, reads, currentId) => {
  if (!withinGrid(snappedX, snappedY) || withinTrash(snappedX, snappedY)) {
    return false;
  }
  let endX = Math.min(snappedX + 240, 1152);
  if (snappedY < 0) {
    return false;
  }
  if (
    reads?.filter((read) => {
      return (
        read.top === snappedY &&
        read.left + 240 > snappedX &&
        read.left < endX &&
        read.id !== currentId
      );
    }).length
  ) {
    return false;
  } else {
    return true;
  }
};
export const snapToGrid = (
  x: number,
  y: number,
  reads: { id: number; left: number; top: number; text: string }[],
  currentId: number,
) => {
  // console.log(reads);
  // const snappedX = Math.min(80, Math.round(x / 16) * 16);
  // const snappedY = Math.max(0, Math.round(y / 32) * 32);
  let snappedX = Math.round(x / 16) * 16;
  let snappedY = Math.round(y / 32) * 32;

  // let snappedY = Math.max(0, Math.round(y / 32) * 32);
  // console.log(snappedX, snappedY);
  if (withinGrid(snappedX, snappedY)) {
    snappedY = 0;
    while (!validLocation(snappedX, snappedY, reads, currentId) && y < 480) {
      console.log("h");
      snappedY += 32;
    }
    // let startX = Math.max(320, snappedX - 240);
    // let endX = Math.min(snappedX + 240, 1152);
    // snappedY = 0;
    // // 320
    // // 336
    // while (
    //   reads?.filter((box) => {
    //     return (
    //       box.top === snappedY &&
    //       box.left + 240 > snappedX &&
    //       box.left < endX &&
    //       box.id !== currentId
    //     );
    //   }).length
    // ) {
    //   snappedY += 32;
    // }
  } else if (withinTrash(snappedX, snappedY)) {
    return findNextCoords(currentId, reads) || [snappedX, snappedY];
  } else {
    snappedX = 32;
    snappedY = 32;
    while (
      reads?.filter((box) => {
        return box.left === snappedY;
      }).length
    ) {
      snappedY += 32;
    }
  }
  return [snappedX, snappedY];
};
