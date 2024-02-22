"use client";
import { isDraggable } from "@/helpers";
import { phaseAtom, reads2Atom } from "@/store";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

export default function Read({
  id,
  text,
  size,
  specials,
  specials2,
}: {
  specials2?: boolean[];
  id: number;
  text: string;
  size: number;
  specials?: {
    color: string;
    [key: number]: string;
  };
}) {
  const phase = useAtomValue(phaseAtom);
  const [reads2, setReads2] = useAtom(reads2Atom);
  let draggable = isDraggable(id, phase);

  return (
    <div
      tabIndex={draggable ? 0 : undefined}
      className={
        draggable ? "hover:shadow-sm hover:shadow-black font-bold" : "font-bold"
      }
      style={{
        cursor: draggable ? "grabbing" : "auto",
        height: 26,
        width: "fit-content",
        display: "grid",
        gridTemplateColumns: `repeat(15, ${size}px)`,
        boxShadow: draggable ? "0px 0px 2px 0px #000000a0" : "",
        border: draggable ? "0.5px solid #000000a0" : "",
      }}
    >
      {text.split("").map((char, idx) => {
        return (
          <span
            onClick={(e) => {
              if (phase === 9) {
                console.log("called");
                const copyReads = [...reads2];
                const copyRead = { ...copyReads[id - 1] };
                copyRead.specials2[idx] = !copyRead.specials2[idx];
                copyReads[id - 1] = copyRead;
                console.log(copyRead);
                setReads2(copyReads);
              }
            }}
            style={
              specials && phase === 8
                ? {
                    backgroundColor: specials.color ? specials.color : "",
                    color: specials[idx] ? specials[idx] : "",
                  }
                : specials2 && specials2[idx] && phase >= 9
                  ? {
                      color: "white",
                      WebkitTextStroke: "1px black",
                      // WebkitTextStrokeColor: "black",
                      fontWeight: "600",
                    }
                  : {}
            }
            tabIndex={phase === 9 ? 0 : undefined}
            className={`${phase === 9 ? "cursor-pointer" : ""} text-center translate-y-0.5 select-none`}
            key={idx}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}
