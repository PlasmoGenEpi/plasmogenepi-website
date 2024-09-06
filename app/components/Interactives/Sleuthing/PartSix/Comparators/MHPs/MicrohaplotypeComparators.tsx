"use client";
import { cloneRowColors } from "@/components/Interactives/Shared/CloneRow/CloneRow";
import {
  activePairwiseMHPsComboAtom,
  hintsEnabledAtom,
  pairwiseCombosMHPsAtom,
  pairwiseMHPCompletionAtom,
  partSixCloneRowsAtom,
  partSixCloneRowsMHPsAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { P6CloneRowColors } from "../../CloneRows/P6MHPCloneRows";
import { ReactNode, useEffect } from "react";

export default function MicrohaplotypeComparator({
  label,
  activeCombo,
  children,
}: {
  children?: ReactNode;
  activeCombo: [number, number];
  label?: boolean;
}) {
  const activePairwiseCombo = useAtomValue(activePairwiseMHPsComboAtom);
  const cloneRowsMHPs = useAtomValue(partSixCloneRowsMHPsAtom);
  const [pairwiseCombos, setPairwiseCombos] = useAtom(pairwiseCombosMHPsAtom);
  const pairwiseCompletion = useAtomValue(pairwiseMHPCompletionAtom);
  const hints = useAtomValue(hintsEnabledAtom);
  let [first, second] = activeCombo;

  let x = cloneRowsMHPs[first].vals.map((val, idx) => {
    return val === cloneRowsMHPs[second].vals[idx];
  });

  console.log(activeCombo);

  if (first === second) {
    return (
      <div className="max-w-[500px]">
        {label && (
          <div className="mb-2 mt-4  text-center">
            <label className="text-sm">
              Check each box below with matching alleles at the corresponding
              locus.
            </label>
          </div>
        )}
        <div className="grid max-w-[500px] gap-x-1 [grid-template-columns:8%_auto]">
          <div className="flex h-full min-h-10 w-full flex-col">
            <div
              className={`mr-auto aspect-square h-5 translate-y-0.5 rounded-full ${P6CloneRowColors[first]}`}
            ></div>
            <div
              className={`ml-auto aspect-square h-5 -translate-y-0.5 rounded-full ${P6CloneRowColors[second]}`}
            ></div>
          </div>
          <div className="col-start-2 grid grid-cols-12 gap-x-1 p-1">
            {Array(12)
              .fill(0)
              .map((el, idx) => {
                return (
                  <div key={idx}>
                    <input
                      disabled={
                        //@ts-ignore
                        true
                      }
                      type="checkbox"
                      checked={true}
                      key={idx}
                      className="css-checkbox peer h-full w-full"
                    ></input>
                    <label
                      className={`css-label rounded shadow-sm shadow-black outline-offset-1 peer-focus:outline peer-focus:outline-2 peer-focus:outline-black peer-[myPeer]:focus:border-black`}
                    ></label>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[500px]">
      {label && (
        <div className="mb-2 mt-4  text-center">
          <label className="text-sm">
            Check each box below with matching alleles at the corresponding
            locus.
          </label>
        </div>
      )}
      <div className="grid max-w-[500px] gap-x-1 [grid-template-columns:8%_auto]">
        <div className="flex h-full min-h-10 w-full flex-col">
          <div
            className={`mr-auto aspect-square h-5 translate-y-0.5 rounded-full ${P6CloneRowColors[first]}`}
          ></div>
          <div
            className={`ml-auto aspect-square h-5 -translate-y-0.5 rounded-full ${P6CloneRowColors[second]}`}
          ></div>
        </div>
        <div className="col-start-2 grid grid-cols-12 gap-x-1 p-1">
          {Array(12)
            .fill(0)
            .map((el, idx) => {
              return (
                <div key={idx}>
                  <input
                    disabled={
                      //@ts-ignore
                      pairwiseCompletion[first][second]
                    }
                    onChange={() => {
                      let newPairwiseCombos = [
                        ...pairwiseCombos[first][second],
                      ];
                      newPairwiseCombos[idx] = !newPairwiseCombos[idx];
                      setPairwiseCombos({
                        ...pairwiseCombos,
                        [first]: {
                          ...pairwiseCombos[first],
                          [second]: newPairwiseCombos,
                        },
                        [second]: {
                          ...pairwiseCombos[second],
                          [first]: newPairwiseCombos,
                        },
                      });
                    }}
                    type="checkbox"
                    checked={pairwiseCombos[first][second][idx]}
                    key={idx}
                    className="css-checkbox peer h-full w-full"
                  ></input>
                  <label
                    onClick={() => {
                      if (
                        //@ts-ignore
                        pairwiseCompletion[first][second]
                      ) {
                        return;
                      }
                      let newPairwiseCombos = [
                        ...pairwiseCombos[first][second],
                      ];
                      newPairwiseCombos[idx] = !newPairwiseCombos[idx];
                      setPairwiseCombos({
                        ...pairwiseCombos,
                        [first]: {
                          ...pairwiseCombos[first],
                          [second]: newPairwiseCombos,
                        },
                        [second]: {
                          ...pairwiseCombos[second],
                          [first]: newPairwiseCombos,
                        },
                      });
                    }}
                    className={`css-label rounded shadow-sm shadow-black outline-offset-1 peer-focus:outline peer-focus:outline-2 peer-focus:outline-black peer-[myPeer]:focus:border-black ${hints && ((x[idx] && !pairwiseCombos[first][second][idx]) || (!x[idx] && pairwiseCombos[first][second][idx])) ? "ring-2 ring-orange-400" : ""}`}
                  ></label>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
