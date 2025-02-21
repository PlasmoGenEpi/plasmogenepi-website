import {
  hintsEnabledAtom,
  partSevenCompletionAtom,
  partSixCloneRowsMHPsAtom,
  partSixMHPPolycloncalGenotypesAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import {
  P6CloneRowButtonColors,
  P6CloneRowColors,
} from "../../CloneRows/P6MHPCloneRows";
import { useAtom, useAtomValue } from "jotai";
import CloneRow from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import SquareMicrohaplotype from "@/app/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
import { useMemo } from "react";

export default function GenotypeComparator({
  label = true,
  activeCombo,
  currentClone = 1,
  setter,
  vals,
}: {
  vals?: boolean[];
  setter?: (idx: number) => void;
  currentClone: number;
  label?: boolean;
  activeCombo: [string, number];
}) {
  const cloneRows = useAtomValue(partSixCloneRowsMHPsAtom);
  const [genotypes, setGenotypes] = useAtom(partSixMHPPolycloncalGenotypesAtom);
  const phase = useAtomValue(phaseAtom);
  let [genoPair, second] = activeCombo;
  const hints = useAtomValue(hintsEnabledAtom);
  const completion = useAtomValue(partSevenCompletionAtom);
  const hintsEnabled = useAtomValue(hintsEnabledAtom);

  let x = JSON.parse(genoPair)[0];
  let y = JSON.parse(genoPair)[1];

  let hintsArr = useMemo(() => {
    if (phase <= 5) {
      let genotypes1 = cloneRows[1].vals.map((el, idx) => {
        return [el, cloneRows[2].vals[idx]];
      });
      let resultsArr = genotypes1.map((genotypeArr, idx) => {
        return genotypeArr.includes(cloneRows[3].vals[idx]);
      });
      return resultsArr;
    } else if (phase < 8) {
      let genotypes1 = cloneRows[2].vals.map((el, idx) => {
        return [el, cloneRows[3].vals[idx]];
      });
      let resultsArr = genotypes1.map((genotypeArr, idx) => {
        return genotypeArr.includes(cloneRows[1].vals[idx]);
      });
      return resultsArr;
    } else if (phase >= 10) {
      return Array(12).fill(true);
    }
    return Array(12).fill(null);
  }, [phase, genotypes]);

  return (
    <div className="mt-4 max-w-[500px]">
      <div
        className={`grid gap-1 font-helvetica transition-all [grid-template-columns:8%_auto]`}
      >
        <div>
          <div
            className={`${
              currentClone === 4
                ? "border-red-blue-rounded"
                : P6CloneRowButtonColors[currentClone]
            } aspect-square scale-90 rounded-full bg-gradient-radial  from-[white_20%]`}
          >
            <div className="flex aspect-square items-center justify-center rounded-full text-base font-bold">
              <span className="absolute translate-y-[3px] font-bold">
                {currentClone}
              </span>
            </div>
          </div>
        </div>
        <ol className={`grid h-full grow grid-cols-12 gap-1 p-1`}>
          {/* {children} */}
          {cloneRows[currentClone].vals.map((val, idx) => {
            return <SquareMicrohaplotype id={val as number} key={idx} />;
          })}
        </ol>
      </div>
      {label && (
        <div className="mb-2 mt-4  text-center">
          <label className="text-sm">
            Check each box below with matching alleles at the corresponding
            locus.
          </label>
        </div>
      )}
      <div className="grid max-w-[500px] gap-x-1 [grid-template-columns:8%_auto]">
        <div className="relative  h-full w-full">
          <div
            className={`absolute left-0 top-0 aspect-square h-5 rounded-full ${P6CloneRowColors[x]}`}
          ></div>
          <div
            className={`absolute right-0 top-0 aspect-square h-5  rounded-full ${P6CloneRowColors[y]}`}
          ></div>
          <div
            className={`absolute left-1/2 top-5 aspect-square h-5 -translate-x-1/2  rounded-full ${P6CloneRowColors[currentClone]}`}
          ></div>
        </div>
        <div className="col-start-2 grid grid-cols-12 gap-x-1 p-1">
          {Array(12)
            .fill(0)
            .map((el, idx) => {
              console.log(x, y);
              return (
                <div key={idx}>
                  <input
                    aria-label={
                      hintsEnabled &&
                      ((hints && vals && vals[idx] !== hintsArr[idx]) ||
                        (hints &&
                          !vals &&
                          genotypes[genoPair][idx] !== hintsArr[idx]))
                        ? `locus ${idx + 1} matches (incorrect)`
                        : `locus ${idx + 1} matches`
                    }
                    disabled={
                      //@ts-ignore
                      // pairwiseCompletion[first][second]
                      x === 1 && y === 2 && phase < 10
                        ? completion[4]
                        : x === 2 && y === 3 && phase < 10
                        ? completion[6]
                        : x === 1 && y === 2 && phase < 14
                        ? completion[10]
                        : x === 1 && y === 2 && phase < 18
                        ? completion[14]
                        : false
                    }
                    onChange={
                      (x === 1 && y === 2 && completion[4] && phase <= 6) ||
                      (x === 2 && y === 3 && completion[6] && phase <= 8) ||
                      (x === 1 && y === 2 && completion[10] && phase <= 12) ||
                      (phase >= 14 && completion[14])
                        ? undefined
                        : setter
                        ? () => {
                            setter(idx);
                          }
                        : () => {
                            let newGenotypes = [...genotypes[genoPair]];
                            newGenotypes[idx] = !newGenotypes[idx];
                            setGenotypes({
                              ...genotypes,
                              [genoPair]: newGenotypes,
                            });
                          }
                    }
                    type="checkbox"
                    checked={vals ? vals[idx] : genotypes[genoPair][idx]}
                    key={idx}
                    className="css-checkbox peer h-full w-full"
                  ></input>
                  <label
                    onClick={
                      (x === 1 && y === 2 && completion[4] && phase <= 6) ||
                      (x === 2 && y === 3 && completion[6] && phase <= 8) ||
                      (x === 1 && y === 2 && completion[10] && phase <= 12) ||
                      (phase >= 14 && completion[14])
                        ? undefined
                        : setter
                        ? () => {
                            setter(idx);
                          }
                        : () => {
                            let newGenotypes = [...genotypes[genoPair]];
                            newGenotypes[idx] = !newGenotypes[idx];
                            setGenotypes({
                              ...genotypes,
                              [genoPair]: newGenotypes,
                            });
                          }
                    }
                    className={`css-label rounded shadow-sm shadow-black outline-offset-1 peer-focus:outline peer-focus:outline-2 peer-focus:outline-black peer-[myPeer]:focus:border-black ${
                      (hints && vals && vals[idx] !== hintsArr[idx]) ||
                      (hints &&
                        !vals &&
                        genotypes[genoPair][idx] !== hintsArr[idx])
                        ? "ring-2 ring-orange-400"
                        : ""
                    }`}
                  ></label>
                  {/* ${hints && ((x[idx] && !pairwiseCombos[first][second][idx]) || (!x[idx] && pairwiseCombos[first][second][idx])) ? "ring-2 ring-orange-400" : ""} */}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
