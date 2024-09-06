import LabelRow from "../../Sleuthing/PartOne/CloneRowTable/LabelRow";
import GenotypeOutputElement from "./GenotypeOutputElement";

export default function GenotypeResult({
  id,
  vals,
  possibleValues,
  noLocusLabel,
  className,
}: {
  className?: string;
  noLocusLabel?: boolean;
  id: number;
  vals: { reference: boolean; alternate: boolean }[];
  possibleValues: { reference: string; alternate: string }[];
}) {
  return (
    <div
      className={`flex flex-col justify-center pb-4 ${className ? className : ""}`}
    >
      <div className="grid grid-cols-12 font-bold">
        {Array(12)
          .fill(0)
          .map((el, idx) => {
            return (
              <div
                key={idx}
                // [--tooltip-color:rgb(39,39,42)] [--tooltip-font-size:12px] [--tooltip-text-color:rgb(229,_231,_235)] before:text-xs
                className=" flex flex-col "
              >
                {!noLocusLabel && (
                  <label
                    htmlFor={`locus ${idx + 1}`}
                    className="text-center text-xs font-normal first-letter:text-sm"
                  >
                    L{idx + 1}
                  </label>
                )}
                <GenotypeOutputElement
                  htmlId={`locus ${idx + 1}`}
                  key={idx}
                  idx={idx}
                  possibleVals={possibleValues[idx]}
                  vals={vals[idx]}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
