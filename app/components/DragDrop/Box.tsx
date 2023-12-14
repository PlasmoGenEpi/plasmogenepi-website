import {
  partSevenSubstepCompletionsAtom,
  phaseAtom,
  reads2Atom,
  readsAtom,
} from "@/store";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { memo, useState } from "react";

// const styles = {
//   display: "grid",

//   border: "1px dashed gray",
//   padding: "0 .5rem",
//   cursor: "move",
// };
export const Box = memo(function Box({
  text,
  id,
  preview,
  specials,
  setReadLeft,
  specials2,
}: {
  specials2;
  id: number;
  setReadLeft: (id: number) => void;
  specials: {
    color: string;
    [key: number]: string;
  };
  text: string;
  preview: boolean;
}) {
  const [reads2, setReads2] = useAtom(reads2Atom);
  const [selected, setSelected] = useState(false);
  const partSevenSubstepCompletions = useAtomValue(
    partSevenSubstepCompletionsAtom,
  );
  const phase = useAtomValue(phaseAtom);

  return (
    <button
      // disabled={phase === 6}
      // disabled={partSevenSubstepCompletions[phase]}
      onContextMenu={(e) => {
        e.preventDefault();
        setReadLeft(id);
      }}
      suppressHydrationWarning={true}
      onClick={(e) => {
        setSelected(!selected);
      }}
      style={
        {
          // outline: selected ? "4px solid pink" : null,
          // outlineOffset: "2px",
        }
      }
      className={
        id > 10
          ? "fadeIn500 relative grid border border-black [grid-template-columns:repeat(15,1fr)] focus:outline-2 focus:outline-offset-2 focus:outline-pink-500"
          : "relative grid border border-black [grid-template-columns:repeat(15,1fr)] focus:outline-2 focus:outline-offset-2 focus:outline-pink-500"
      }
      role={preview ? "BoxPreview" : "Box"}
    >
      {text?.split("").map((el, idx) => {
        return (
          <span
            // disabled={phase !== 6}
            onClick={(e) => {
              if (phase === 6) {
                const copyReads = [...reads2];
                const copyRead = { ...copyReads[id - 1] };
                copyRead.specials2[idx] = !copyRead.specials2[idx];
                copyReads[id - 1] = copyRead;
                console.log(copyReads);
                setReads2(copyReads);
              }
            }}
            style={
              phase === 5
                ? {
                    backgroundColor:
                      phase === 5 && specials ? specials?.color : "transparent",
                    color: phase === 5 && specials ? specials[idx] : "black",
                  }
                : phase === 6 && specials2
                ? {
                    color: specials2[idx] ? "white" : "black",
                    WebkitTextStroke: specials2[idx] ? "1px" : 0,
                    WebkitTextStrokeColor: specials2[idx] ? "black" : "",
                  }
                : {}
            }
            key={idx}
            className="flex w-4 select-none items-center justify-center"
          >
            <span className="translate-y-[3px]">{el}</span>
          </span>
        );
      })}
    </button>
  );
});
