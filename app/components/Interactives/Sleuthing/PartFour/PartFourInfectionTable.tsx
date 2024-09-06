import { Dispatch, useEffect, useRef } from "react";
import InfectionTable from "../PartTwo/InfectionTable";
import { atom, useAtom } from "jotai";
import { SetStateAction } from "jotai/vanilla";
import {
  partFourAverageDeducedAtom,
  partFourInfectionsAtom,
  partTwoAverageDeducedAtom,
  partTwoInfectionsAtom,
  phaseAtom,
  selectedInfectionIndexAtom,
} from "@/data/Interactives/interactiveStore";

export const attemptedInputAtom = atom("");
export const incorrectGuessCountAtom = atom(0);

export default function PartFourInfectionTable({
  average,
}: {
  average: number;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [attemptedInput, setAttemptedInput] = useAtom(attemptedInputAtom);
  const [incorrectGuessCount, setIncorrectGuessCount] = useAtom(
    incorrectGuessCountAtom,
  );
  const [averageDeduced, setAverageDeduced] = useAtom(
    partFourAverageDeducedAtom,
  );
  const [activeIndex, setActiveIndex] = useAtom(selectedInfectionIndexAtom);
  const [infections, setInfections] = useAtom(partFourInfectionsAtom);
  const [phase, setPhase] = useAtom(phaseAtom);

  // useEffect(() => {
  //   if (phase === 2) {
  //     let x = setTimeout(() => {
  //       inputRef.current?.focus();
  //     }, 50);
  //     setActiveIndex(10);
  //   }
  // }, [phase, setActiveIndex]);

  return (
    <InfectionTable
      activeRow={phase === 1 ? activeIndex : null}
      averageInputRow={
        <tr
          className={`border-t-2 border-primaryGreen/50 bg-gradient-to-t from-[#116F77] via-[#116F77] to-[#093F43] text-center text-sm font-medium  text-white transition-all`}
        >
          <td className="w-1/2">
            <label
              htmlFor="average-input"
              className={`block translate-y-0.5 ${phase === 2 || averageDeduced ? "font-bold text-white" : ""}`}
            >
              Average
            </label>
          </td>
          <td
          // className={`${averageVisible ? "fadeIn300 visible" : "invisible"}`}
          >
            <input
              id="average-input"
              placeholder="Average"
              ref={inputRef}
              value={averageDeduced ? average.toString() : attemptedInput}
              onChange={(e) => {
                if (
                  e.target.value !== "" &&
                  Number.isNaN(parseFloat(e.target.value))
                ) {
                  return;
                }
                setIncorrectGuessCount(incorrectGuessCount + 1);
                if (incorrectGuessCount > 15) {
                  setAverageDeduced(true);
                  return;
                }
                let val = e.currentTarget.value.slice(0, 3);
                let x = parseFloat(val);
                if (x === average) {
                  setAverageDeduced(true);
                }
                setAttemptedInput(val);
              }}
              disabled={phase === 1 || averageDeduced}
              className={`${phase === 2 || averageDeduced ? "" : "invisible"} h-10 w-full rounded border-2 border-orange-400 bg-transparent bg-white p-2 pt-3 text-center  font-bold text-black transition-colors focus:border-black placeholder:focus:text-white  disabled:border-none disabled:border-black disabled:bg-transparent disabled:text-white disabled:outline-none`}
            ></input>
            {/* {averageInputElement} */}
          </td>
        </tr>
      }
      activeIndex={activeIndex}
      infections={infections}
      callback={
        phase === 1
          ? (idx: number) => {
              setActiveIndex(idx);
            }
          : undefined
      }
      averageVisible={averageDeduced}
      average={averageDeduced ? average : undefined}
    />
  );
}
