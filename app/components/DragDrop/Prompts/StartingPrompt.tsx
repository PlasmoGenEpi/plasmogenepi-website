"use client";
import Prompt from "../../Shared/Prompt";
import { phaseAtom } from "@/store";
import { useAtomValue } from "jotai";

export default function StartingPrompt({ complete }: { complete: boolean }) {
  const phase = useAtomValue(phaseAtom);
  return (
    <Prompt
      complete={complete}
      noMin
      descriptions={[
        <ol className="list-decimal px-4" key={1}>
          <li
            key={1}
            className={`${
              phase > 1
                ? "mt-2 opacity-80"
                : phase === 1
                ? "mt-2 list-item font-bold"
                : ""
            } mt-2`}
          >
            Press run to view the reference genome, a sequence of 51 DNA base
            letters A, G, C, and T. Then press run again to generate 10 reads,
            each of which are sequences of 15 DNA base letters.
          </li>
          <li
            key={1}
            className={`${
              phase > 2
                ? "mt-2 opacity-80"
                : phase === 2
                ? "mt-2 font-bold"
                : "invisible font-bold"
            } `}
          >
            Press run again to generate 10 reads, each of which are sequences of
            15 DNA base letters.
          </li>
          <li
            key={1}
            className={`${
              phase < 3 ? "invisible mt-2 font-bold" : "mt-2 font-bold"
            } mt-2`}
          >
            Drag the reads to the matching position in the reference genome.
            Reads that don&apos;t match the reference genome can be dropped in
            the trash below.
          </li>
        </ol>,
      ]}
      header={"Step 1"}
    />
  );
}
