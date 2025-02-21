"use client";
import CloneElement from "@/app/components/Interactives/Shared/CloneRow/CloneElement";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  cloneRowsAtom,
  clonesTableTransformAttemptedAtom,
} from "@/data/Interactives/interactiveStore";
import { atom, useAtom, useAtomValue } from "jotai";

export default function ClonesTableTransformElement({
  row,
  col,
  active,
  callback,
}: {
  callback: () => void;
  active: boolean;
  row: number;
  col: number;
}) {
  const cloneRows = useAtomValue(cloneRowsAtom);
  const [attempted, setAttempted] = useAtom(clonesTableTransformAttemptedAtom);

  return (
    <button
      onAnimationEnd={(e) => {
        if (e.currentTarget === e.target) {
          if (e.animationName === "wiggler") {
            e.currentTarget.classList.remove("wiggle");
            setAttempted(false);
          }
        }
      }}
      onClick={(e) => {
        callback();
      }}
      className={`${
        active
          ? " border-2 border-black"
          : "border-2 border-transparent [&>*]:opacity-40"
      } ${
        active && attempted ? "wiggle" : ""
      } pointer-events-auto col-span-3 grid grid-cols-3 gap-0.5 transition-all [&>*]:transition-opacity [&>*]:duration-500`}
    >
      <CloneElement
        className="bg-white"
        possibleValues={{
          alternate: fixedData[1].altValues[col * 3],
          reference: fixedData[1].refValues[col * 3],
        }}
        val={cloneRows[row].vals[col * 3]}
      />
      <CloneElement
        className="bg-white"
        possibleValues={{
          alternate: fixedData[1].altValues[col * 3 + 1],
          reference: fixedData[1].refValues[col * 3 + 1],
        }}
        val={cloneRows[row].vals[col * 3 + 1]}
      />
      <CloneElement
        className="bg-white"
        possibleValues={{
          alternate: fixedData[1].altValues[col * 3 + 2],
          reference: fixedData[1].refValues[col * 3 + 2],
        }}
        val={cloneRows[row].vals[col * 3 + 2]}
      />
    </button>
  );
}
