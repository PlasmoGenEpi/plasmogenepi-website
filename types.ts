export type CloneRow = {
  id: number | null;
  vals: string[];
};

export type CloneRowPersisted = {
  id: number | null;
  vals: string[];
  microVals: string[][];
  microIds: string[];
};

export type RefRow = CloneRow & {
  id: number | null;
  alts?: string[];
};

// export type PositiveControlBoard = {
//   id: 1 | 2 | 3 | 4 | 5 | 6;
//   active: boolean;
//   rows: (1 | 2 | 3 | 4 | 5)[];
//   valid: null | boolean;
//   attempted: boolean;
// };
