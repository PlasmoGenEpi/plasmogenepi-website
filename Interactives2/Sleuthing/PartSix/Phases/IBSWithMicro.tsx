import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import Image from "next/image";
import MicrohaplotypeComparator from "../Comparators/MHPs/MicrohaplotypeComparators";
import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import { pairwiseCombosMHPsAtom } from "@/data/Interactives/interactiveStore";
import { P6Step2QuestionsAtom } from "./Genotypes";
import { useAtom, useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";

export const SNPvsMHPquestionAtom = atomWithStorage<number | null>(
  "SNPvsMHPquestionAtom",
  null,
);

export default function IBSWithMicro() {
  const [questions, setQuestions] = useAtom(P6Step2QuestionsAtom);
  const pairwiseCombos = useAtomValue(pairwiseCombosMHPsAtom);
  const [SNPvsMHPquestion, setSNPvsMHPquestion] = useAtom(SNPvsMHPquestionAtom);
  let x, y, z, xy, yz;
  x =
    pairwiseCombos[1][2].filter((bool) => {
      return bool;
    }).length / 12;

  y =
    pairwiseCombos[1][3].filter((bool) => {
      return bool;
    }).length / 12;

  z =
    pairwiseCombos[2][3].filter((bool) => {
      return bool;
    }).length / 12;

  xy =
    pairwiseCombos[1][4].filter((bool) => {
      return bool;
    }).length / 12;

  yz =
    pairwiseCombos[2][4].filter((bool) => {
      return bool;
    }).length / 12;

  return (
    <StandardLayout>
      <div>
        <FormHeader text="IBS Tables with Microhaplotypes" />
        <div className="origin-top lg:scale-90">
          <div className="">
            <table className="table w-full  text-center">
              <thead>
                <tr className=" text-sm">
                  <th>Comparisons where IBD = 0%</th>
                  <th>IBS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <MicrohaplotypeComparator activeCombo={[1, 2]} />
                  </td>
                  <td>{(x * 100).toFixed(1)}%</td>
                </tr>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <MicrohaplotypeComparator activeCombo={[1, 3]} />
                  </td>
                  <td>{(y * 100).toFixed(1)}%</td>
                </tr>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <MicrohaplotypeComparator activeCombo={[2, 3]} />
                  </td>
                  <td>{(z * 100).toFixed(1)}%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="">
            <table className="table w-full  text-center">
              <thead>
                <tr className=" text-sm">
                  <th>Comparisons where IBD = 50%</th>
                  <th>IBS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <MicrohaplotypeComparator activeCombo={[1, 4]} />
                  </td>
                  <td>{(xy * 100).toFixed(1)}%</td>
                </tr>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <MicrohaplotypeComparator activeCombo={[2, 4]} />
                  </td>
                  <td>{(yz * 100).toFixed(1)}%</td>
                </tr>
              </tbody>
            </table>
            <table className="table w-full  text-center">
              <thead>
                <tr className=" text-sm">
                  <th>Comparisons where IBD = 100%</th>
                  <th>IBS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <MicrohaplotypeComparator activeCombo={[3, 3]} />
                  </td>
                  <td>100.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="pt-4">
      <table className="table w-full  text-center">
        <thead>
          <tr className=" text-sm">
            <th>Comparisons where IBD = 100%</th>
            <th>IBS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-none">
            <td className="w-[500px] py-2 px-0">
              <MicrohaplotypeComparator activeCombo={[3, 3]} />
            </td>
            <td>100%</td>
          </tr>
        </tbody>
      </table>
    </div> */}
      </div>
      <div>
        <h6 className="mb-8 text-center text-lg font-bold md:text-left">
          Questions
        </h6>
        <KnowledgeCheckQuestion
          answers={[
            {
              checked: SNPvsMHPquestion === 0,
              correct: true,
              index: 0,
              text: "It is easier to distinguish between unrelated parasites with microhaplotypes than it is with SNPs.",
            },
            {
              checked: SNPvsMHPquestion === 1,
              correct: false,
              index: 1,
              text: "It is harder to distinguish between unrelated parasites with microhaplotypes than it is with SNPs.",
            },
            {
              checked: SNPvsMHPquestion === 2,
              correct: false,
              index: 2,
              text: "It is equally difficult to distinguish between unrelated parasites whether using microhaplotypes or SNPs.",
            },
          ]}
          callback={(questionIdx, answerIdx) => {
            if (SNPvsMHPquestion === answerIdx) {
              setSNPvsMHPquestion(null);
            } else {
              setSNPvsMHPquestion(answerIdx);
            }
          }}
          hasAnswer={SNPvsMHPquestion === 0}
          headerText="How are your results with microhaplotypes different from when you compared laboratory clones with SNPs?"
          questionIdx={1}
          classNames={{
            answersContainer: "grid gap-4 mt-4",
          }}
        />
      </div>
    </StandardLayout>
  );
}
