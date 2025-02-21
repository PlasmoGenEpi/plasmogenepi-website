// import {
//   getUniqueValuesArray,
//   shuffle,
// } from "@/app/components/Interactives/helpers";
// import SquareMicrohaplotype from "@/app/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
import { atom, useAtom } from "jotai";
// import { getUniqueValuesArray } from "@/helpers/helpers";
import { CSSProperties, useEffect, useState } from "react";
import { getUniqueValuesArray, shuffle } from "../../../helpers";
import SquareMicrohaplotype from "../../../Shared/Microhaplotypes/SquareMicrohaplotype";

// const shuffledGenotypes: {
//   [key: string]: number[][];
// } = {};

export const shuffledGenotypesAtom = atom<{
  [key: string]: number[][];
}>({});

export default function GenotypeComposition({
  genotypeComposition,
  highlightColumns,
  fullComposition,
  style,
  rowGap,
}: {
  rowGap?: number | string;
  style?: CSSProperties;
  fullComposition?: boolean;
  highlightColumns?: number[];
  genotypeComposition: number[][];
}) {
  const [shuffledGenotypes, setShuffledGenotypes] = useAtom(
    shuffledGenotypesAtom,
  );
  const [currentShuffledState, setCurrentShuffledState] = useState<number[][]>(
    [],
  );

  // let shuffledComps = shuffledGenotypes[JSON.stringify(genotypeComposition)]

  useEffect(() => {
    let x = shuffledGenotypes[JSON.stringify(genotypeComposition)];
    if (x) {
      setCurrentShuffledState(x);
    } else {
      setShuffledGenotypes({
        ...shuffledGenotypes,
        [JSON.stringify(genotypeComposition)]: genotypeComposition.map(
          (arr) => {
            let newArr = arr.slice();
            shuffle(newArr);
            return newArr;
          },
        ),
      });

      // shuffledGenotypes[JSON.stringify(genotypeComposition)] =
      //   genotypeComposition.map((arr) => {
      //     let newArr = arr.slice();
      //     shuffle(newArr);
      //     return newArr;
      //   });
    }
  }, [genotypeComposition, shuffledGenotypes]);

  return (
    <div
      style={style}
      className="grid grow grid-cols-12 gap-1 self-center p-1 dark:brightness-75"
    >
      {/* {genotypeComposition.map((microIdArr, idx) => {
        return (
          <div
            style={
              rowGap
                ? {
                    gap: rowGap,
                  }
                : undefined
            }
            key={idx}
            className={`flex flex-col justify-center gap-0.5`}
          >
            {fullComposition
              ? microIdArr.map((microId, idx2) => {
                  return (
                    <SquareMicrohaplotype
                      id={microId - 1}
                      key={idx2}
                      className={`${
                        !highlightColumns
                          ? "opacity-100"
                          : highlightColumns?.includes(idx)
                          ? "opacity-100"
                          : "pointer-events-none opacity-20"
                      }`}
                    />
                  );
                })
              : getUniqueValuesArray(microIdArr).map((microId, idx2) => {
                  return (
                    <SquareMicrohaplotype
                      id={microId - 1}
                      key={idx2}
                      className={`${
                        !highlightColumns
                          ? "opacity-100"
                          : highlightColumns?.includes(idx)
                          ? "opacity-100"
                          : "pointer-events-none opacity-20"
                      }`}
                    />
                  );
                })}
          </div>
        );
      })} */}
      {currentShuffledState.map((microIdArr, idx) => {
        return (
          <div
            style={
              rowGap
                ? {
                    gap: rowGap,
                  }
                : undefined
            }
            key={idx}
            className={`flex flex-col justify-center gap-0.5`}
          >
            {fullComposition
              ? microIdArr.map((microId, idx2) => {
                  return (
                    <SquareMicrohaplotype
                      id={microId - 1}
                      key={idx2}
                      className={`${
                        !highlightColumns
                          ? "opacity-100"
                          : highlightColumns?.includes(idx)
                          ? "opacity-100"
                          : "pointer-events-none opacity-20"
                      }`}
                    />
                  );
                })
              : getUniqueValuesArray(microIdArr).map((microId, idx2) => {
                  return (
                    <SquareMicrohaplotype
                      id={microId - 1}
                      key={idx2}
                      className={`${
                        !highlightColumns
                          ? "opacity-100"
                          : highlightColumns?.includes(idx)
                          ? "opacity-100"
                          : "pointer-events-none opacity-20"
                      }`}
                    />
                  );
                })}
          </div>
        );
      })}
    </div>
  );
}
