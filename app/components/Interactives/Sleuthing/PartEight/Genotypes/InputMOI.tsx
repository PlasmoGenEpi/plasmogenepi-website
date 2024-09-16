"use client";
import {
  partEightMOIInputsAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { atom, useAtom, useAtomValue } from "jotai";
import { useEffect, useRef } from "react";

export const attemptedMOIInputAtom1 = atom("");
export const attemptedMOIInputAtom2 = atom("");
export const attemptedMOIInputAtom3 = atom("");
export const attemptedMOIInputAtom4 = atom("");
export const attemptedMOIInputAtom5 = atom("");

export default function InputMOI({
  correctAnswer,
  id,
}: {
  correctAnswer: number;
  id: string;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const phase = useAtomValue(phaseAtom);
  const [val, setVal] = useAtom(
    id === "A" || id === "E"
      ? attemptedMOIInputAtom1
      : id === "B" || id === "F"
        ? attemptedMOIInputAtom2
        : id === "C" || id === "G"
          ? attemptedMOIInputAtom3
          : id === "D" || id === "H"
            ? attemptedMOIInputAtom4
            : attemptedMOIInputAtom5,
  );
  const [MOIInputs, setMOIInputs] = useAtom(partEightMOIInputsAtom);
  // const [val1, setVal1] = useAtom(attemptedMOIInputAtom1);
  // const [val2, setVal2] = useAtom(attemptedMOIInputAtom2);
  // const [val3, setVal3] = useAtom(attemptedMOIInputAtom3);
  // const [val4, setVal4] = useAtom(attemptedMOIInputAtom4);

  useEffect(() => {
    if (phase === 10) {
      setVal("");
      if (!MOIInputs["E"]) {
        if (id === "E") {
          inputRef.current?.focus();
        }
        return;
      }
      if (!MOIInputs["F"]) {
        if (id === "F") {
          inputRef.current?.focus();
        }
        return;
      }
      if (!MOIInputs["G"]) {
        if (id === "G") {
          inputRef.current?.focus();
        }
        return;
      }
      if (!MOIInputs["H"]) {
        if (id === "H") {
          inputRef.current?.focus();
        }
        return;
      }
      if (!MOIInputs["I"]) {
        if (id === "I") {
          inputRef.current?.focus();
        }
        return;
      }
      return;
    }
    if (!MOIInputs["A"]) {
      if (id === "A") {
        inputRef.current?.focus();
      }
      return;
    }
    if (!MOIInputs["B"]) {
      if (id === "B") {
        inputRef.current?.focus();
      }
      return;
    }
    if (!MOIInputs["C"]) {
      if (id === "C") {
        inputRef.current?.focus();
      }
      return;
    }
    if (!MOIInputs["D"]) {
      if (id === "D") {
        inputRef.current?.focus();
      }
      return;
    }
  }, [MOIInputs, id, phase]);

  return (
    <input
      ref={inputRef}
      onChange={(e) => {
        if (e.target.value !== "" && Number.isNaN(parseFloat(e.target.value))) {
          return;
        }
        let val = e.currentTarget.value.slice(0, 1);
        let x = parseFloat(val);
        if (x === correctAnswer) {
          setMOIInputs({
            ...MOIInputs,
            [id]: true,
          });
        }
        setVal(val);
      }}
      value={MOIInputs[id] === true ? correctAnswer : val}
      disabled={MOIInputs[id] === true}
      placeholder="MOI"
      data-tip={`MOI = ${correctAnswer}`}
      className={`${MOIInputs[id] === true ? "border-black" : "border-orange-400"} m-auto ml-4 aspect-square w-8 border-2 pt-0.5 text-center text-lg disabled:tooltip placeholder:text-sm focus:border-black placeholder:focus:text-white disabled:border-black disabled:bg-primaryBlue/20 md:w-10`}
    ></input>
  );
}