"use client";
import Prompt from "../../Shared/Prompt";
import { phaseAtom } from "@/store";
import { useAtomValue } from "jotai";

export default function SecondPrompt({ complete }: { complete: boolean }) {
  const phase = useAtomValue(phaseAtom);
  return (
    <Prompt
      complete={complete}
      noMin
      descriptions={[
        <ol key={1} className="list-decimal px-4">
          <li
            className={`${
              phase === 5 ? "list-item font-bold" : ""
            } mt-2 list-item`}
          >
            Now run the simulation to generate 10 new reads. This time, some of
            the reads will contain mutations, false mutations, off target
            errors, and chimera errors.
          </li>
          <li
            className={`${phase === 6 ? "list-item font-bold" : ""} ${
              phase >= 6 ? "mt-2 list-item" : "invisible mt-2 list-item"
            }`}
          >
            Drag and drop the reads to the matching positions in the reference
            genome. Reads that don&apos;t match the reference genome can be
            dropped in the trash below. Then press run again to generate 10 more
            reads.
          </li>
          <li
            className={
              phase >= 7
                ? "mt-2 list-item font-bold"
                : "invisible mt-2 list-item"
            }
          >
            Place the next 10 reads.
          </li>
        </ol>,
        //  {
        //    text: "Now run the simulation to generate 10 new reads. This time, some of the reads will contain mutations, false mutations, off target errors, and chimera errors.",
        //    className: `${phase === 5 ? "font-bold" : ""} mt-2`,
        //  },
        //  {
        //    text: "Drag and drop the reads to the matching positions in the reference genome.  Reads that don't match the reference genome can be dropped in the trash below. Then press run again to generate 10 more reads.",
        //    // className: phase >= 6 ? "mt-2 font-bold" : "invisible mt-2",
        //    className: `${phase === 6 ? "font-bold" : ""} ${phase >= 6 ? "mt-2" : "invisible mt-2"}`,
        //  },
        //  {
        //    text: "Place the next 10 reads.",
        //    className: phase >= 7 ? "mt-2 font-bold" : "invisible mt-2",
        //  },
        // "Now run the simulation to generate 10 new reads. This time, some of the reads will contain mutations, false mutations, off target errors, and chimera errors.",
        // phase >= 6
        //   ? "Drag and drop the reads to the matching positions in the reference genome.  Reads that don't match the reference genome can be dropped in the trash below. Then press run again to generate 10 more reads."
        //   : "",
        // phase === 7 ? "Place the next 10 reads." : "",
      ]}
      header={"Step 2"}
    />
  );
}
