import { Dispatch, useEffect, useRef } from "react";
import InfectionTable from "./InfectionTable";
import { atom, useAtom, useAtomValue } from "jotai";
import { SetStateAction } from "jotai/vanilla";
import {
  partTwoAverageDeducedAtom,
  partTwoCompletionAtom,
  partTwoInfectionsAtom,
  phase1Atom,
  selectedInfectionIndexAtom,
} from "@/data/Interactives/interactiveStore";

export const attemptedInputAtom = atom("");
export const incorrectGuessCountAtom = atom(0);

export default function PartTwoInfectionTable({
  average,
}: {
  average: number;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [attemptedInput, setAttemptedInput] = useAtom(attemptedInputAtom);
  const [incorrectGuessCount, setIncorrectGuessCount] = useAtom(
    incorrectGuessCountAtom
  );
  const [averageDeduced, setAverageDeduced] = useAtom(
    partTwoAverageDeducedAtom
  );
  const [activeIndex, setActiveIndex] = useAtom(selectedInfectionIndexAtom);
  const [infections, setInfections] = useAtom(partTwoInfectionsAtom);
  const [phase, setPhase] = useAtom(phase1Atom);
  const completion = useAtomValue(partTwoCompletionAtom);

  useEffect(() => {
    if (phase === 2) {
      setAverageDeduced(true);
    }
    // inputRef.current?.focus();

    // if (phase === 2) {
    //   let x = setTimeout(() => {
    //     inputRef.current?.focus();
    //   }, 50);
    //   setActiveIndex(10);
    // }
  }, [phase]);

  let activeRow = phase >= 2 ? null : activeIndex;

  return (
    <InfectionTable
      activeRow={activeRow}
      averageInputRow={
        <tr
          className={`text-center text-sm font-medium text-current transition-all`}
        >
          <td className="w-1/2">
            <label
              htmlFor="average-input"
              className={`block translate-y-0.5  ${
                phase === 2 || averageDeduced ? " " : ""
              }`}
            >
              Average
            </label>
          </td>
          <td className="py-4 underline underline-offset-2">
            <span className="font-bold text-xl">
              {/* 1/4 */}
              {averageDeduced ? average : ""}
            </span>
            {/* <input
              id="average-input"
              placeholder="Average"
              ref={inputRef}
              value={averageDeduced ? average.toString() : undefined}
              className={`${
                phase === 2 || averageDeduced ? "" : "invisible"
              } h-10 w-full rounded border-2 border-orange-400 bg-transparent bg-white p-2 pt-3 text-center  transition-colors focus:border-black placeholder:focus:text-white disabled:border-none disabled:border-black  disabled:bg-transparent disabled:outline-none ${
                averageDeduced ? "font-bold text-white" : "text-black"
              }`}
            ></input> */}
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
      averageVisible={phase === 2 && completion[1]}
      average={averageDeduced ? average : undefined}
    />
  );
}
