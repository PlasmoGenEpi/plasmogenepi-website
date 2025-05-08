import { Dispatch, useEffect, useRef } from "react";
import InfectionTable from "../PartTwo/InfectionTable";
import { atom, useAtom } from "jotai";
import { SetStateAction } from "jotai/vanilla";
import {
  partFourAverageDeducedAtom,
  partFourInfectionsAtom,
  partTwoAverageDeducedAtom,
  partTwoInfectionsAtom,
  phase1Atom,
  selectedInfectionIndexAtom,
} from "@/data/Interactives/interactiveStore";

export const attemptedInputAtom = atom("");
export const incorrectGuessCountAtom = atom(0);

export default function PartFourInfectionTable({
  average,
  lang,
}: {
  lang: "EN" | "FR" | "PT";
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
  const [phase, setPhase] = useAtom(phase1Atom);

  // useEffect(() => {
  //   if (phase === 2) {
  //     let x = setTimeout(() => {
  //       inputRef.current?.focus();
  //     }, 50);
  //     setActiveIndex(10);
  //   }
  // }, [phase, setActiveIndex]);

  useEffect(() => {
    if (phase === 2) {
      setAverageDeduced(true);
    }
  }, [phase]);

  return (
    <InfectionTable
      lang={lang}
      activeRow={phase === 1 ? activeIndex : null}
      averageInputRow={
        <tr className={` text-center text-sm text-current transition-all`}>
          <td className="w-1/2">
            <label
              htmlFor="average-input"
              className={`block translate-y-0.5 ${
                phase === 2 || averageDeduced ? " text-current" : ""
              }`}
            >
              {lang === "EN" ? `Average` : lang === "FR" ? `Moyenne` : `Média`}
            </label>
          </td>
          <td className="py-4 underline underline-offset-2">
            <span className="text-xl font-bold">
              {/* 1/4 */}
              {averageDeduced ? average : ""}
            </span>
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
