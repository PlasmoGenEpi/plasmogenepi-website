import SquareMicrohaplotype from "@/app/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
import { getUniqueValuesArray } from "@/helpers/helpers";
import { CSSProperties } from "react";

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
  return (
    <div style={style} className="grid grow grid-cols-12 gap-1 self-center p-1">
      {genotypeComposition.map((microIdArr, idx) => {
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
            className={`flex flex-col justify-end gap-0.5`}
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
