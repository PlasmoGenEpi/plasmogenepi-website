"use client";
import StandardLayout from "@/components/Interactives/Shared/misc/StandardLayout";
import {
  activePairwiseMHPsComboAtom,
  pairwiseMHPCompletionAtom,
  partSixCloneRowsMHPsAtom,
  partSixCompletionAtom,
  partSixMHPPairwiseQuestionsAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import Image from "next/image";
import { useEffect } from "react";
import P6MHPCloneRowsWithHybrid from "../CloneRows/P6MHPCloneRowsWithHybrid";
import CompareSNPHybridCloneQuestions from "../Comparators/SNPs/CompareSNPHybridCloneQuestions";
import CompareMHPHybridCloneQuestions, {
  finalHybridQAtom,
} from "../Comparators/MHPs/CompareMHPHybridCloneQuestions";
import FormHeader from "@/components/Interactives/Shared/misc/FormHeader";
import MultiRowLayout from "@/components/Interactives/Shared/misc/MultiRowLayout";
import QuestionResponseText from "@/components/Interactives/Shared/misc/QuestionResponseText";

export default function CompareMHPClonesWithHybrid() {
  const [pairwiseCompletion, setPairwiseCompletion] = useAtom(
    pairwiseMHPCompletionAtom,
  );
  const [activeCombo, setActiveCombo] = useAtom(activePairwiseMHPsComboAtom);
  const phase = useAtomValue(phaseAtom);
  const partSixPairwiseQuestions = useAtomValue(
    partSixMHPPairwiseQuestionsAtom,
  );
  const cloneRows = useAtomValue(partSixCloneRowsMHPsAtom);
  const finalHybridQ = useAtomValue(finalHybridQAtom);
  const completion = useAtomValue(partSixCompletionAtom);

  const [first, second] = activeCombo;

  // useEffect(() => {
  //   if (phase === 30) {
  //     setActiveCombo([1, 4]);
  //   } else if (phase === 31) {
  //     setActiveCombo([2, 4]);
  //   } else if (phase === 32) {
  //     setActiveCombo([3, 4]);
  //   }
  // }, [phase]);

  // useEffect(() => {
  //   if (phase === 12) {
  //     setActiveCombo([1, 4]);
  //   } else if (phase === 13) {
  //     setActiveCombo([2, 4]);
  //   } else if (phase === 15) {
  //     setActiveCombo([3, 4]);
  //   }
  // }, [phase, setActiveCombo]);

  let activePairwiseCombo: [number, number] =
    phase === 30
      ? [1, 4]
      : phase === 31
        ? [2, 4]
        : phase === 32
          ? [3, 4]
          : [1, 2];
  console.log(phase);
  console.log(partSixPairwiseQuestions);

  return (
    <MultiRowLayout
      topLeft={
        <div>
          <FormHeader
            text={`Genotype Comparisons with Microhaplotypes and Hybrid`}
          />

          <div className="sticky top-20">
            <P6MHPCloneRowsWithHybrid
              activePairwiseCombo={activePairwiseCombo}
            />
            <div className="mt-2">
              {/* <SNPComparator
          activeCombo={
            phase === 12
              ? [1, 4]
              : phase === 13
                ? [2, 4]
                : phase === 14
                  ? [3, 4]
                  : activeCombo
          }
          label
        /> */}
            </div>
            {phase === 13 &&
              partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3 && (
                <div className="fadeIn500 mt-12 hidden p-4 text-center outline outline-2 outline-primaryBlue md:block">
                  <label htmlFor="75/25-SNP-image">
                    75/25 allele frequency
                  </label>
                  {/* <Image
              id="SNP IBD 75/25 distribution diagram"
              src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"}
              height={400}
              width={600}
              alt=""
            /> */}
                </div>
              )}
            {phase === 14 &&
              partSixPairwiseQuestions[JSON.stringify([3, 4])][5] === 12 && (
                <div className="fadeIn1000 mt-8 hidden p-4 outline outline-2 outline-primaryBlue md:block">
                  {/* <Image
              id="SNP IBD 100% distribution diagram"
              src="/assets/M5_sluething_histogram_SNPs_MOI1_IBD1.svg"
              alt=""
              width={600}
              height={400}
            ></Image> */}
                </div>
              )}
          </div>
        </div>
      }
      topRight={
        <div className="md:col-start-2 md:row-span-2">
          <CompareMHPHybridCloneQuestions
            activePairwiseCombo={activePairwiseCombo}
          />
        </div>
      }
      bottomLeft={
        <QuestionResponseText
          complete={completion[phase] || false}
          key={phase}
          trigger={
            phase === 32
              ? finalHybridQ === 0
              : phase === 30
                ? partSixPairwiseQuestions[JSON.stringify([1, 4])][3] === 6
                : phase === 31
                  ? partSixPairwiseQuestions[JSON.stringify([2, 4])][3] === 6
                  : false
          }
          visible={
            phase === 32
              ? finalHybridQ === 0
              : phase === 30
                ? partSixPairwiseQuestions[JSON.stringify([1, 4])][3] === 6
                : phase === 31
                  ? partSixPairwiseQuestions[JSON.stringify([2, 4])][3] === 6
                  : false
          }
          text={
            phase === 30
              ? `That’s right – again we have the privilege of knowing the
true relatedness by ancestry of these lab clones. Since
clone 4 is a child of clone 1 and shares exactly 50% of it’s
genome by ancestry – the red part – IBD is 0.5 or 50%.`
              : phase === 31
                ? `That’s right – Just like before, IBD is 0.5 since the hybrid clone shares 50% of its genome with the parent, this time the blue part. Both of the previous comparisons had the same IBD – 0.5 – since the hybrid clone is 50% related to each parent. What do you think you would find if you did similar experiments looking at other, similarly related clones?  Microhaplotypes, just like SNPs, in the related half of the genome should always match perfectly, unless there are mutations or genotyping error. However, since matches in the unrelated part are random, the overall number of matches can vary.`
                : `Since the hybrid is not related to clone 3 at all, IBD
        would be 0 and IBS would be the same as comparing any
        completely unrelated clones, usually between 0 and 4
        matches.`
          }
        />
      }
    />
  );

  {
  }

  return (
    <StandardLayout>
      <div>
        <FormHeader
          text={`Genotype Comparisons with Microhaplotypes and Hybrid`}
        />

        <div className="sticky top-20">
          <P6MHPCloneRowsWithHybrid activePairwiseCombo={activePairwiseCombo} />
          <div className="mt-2">
            {/* <SNPComparator
              activeCombo={
                phase === 12
                  ? [1, 4]
                  : phase === 13
                    ? [2, 4]
                    : phase === 14
                      ? [3, 4]
                      : activeCombo
              }
              label
            /> */}
          </div>
          {phase === 13 &&
            partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3 && (
              <div className="fadeIn500 mt-12 hidden p-4 text-center outline outline-2 outline-primaryBlue md:block">
                <label htmlFor="75/25-SNP-image">75/25 allele frequency</label>
                {/* <Image
                  id="SNP IBD 75/25 distribution diagram"
                  src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"}
                  height={400}
                  width={600}
                  alt=""
                /> */}
              </div>
            )}
          {phase === 14 &&
            partSixPairwiseQuestions[JSON.stringify([3, 4])][5] === 12 && (
              <div className="fadeIn1000 mt-8 hidden p-4 outline outline-2 outline-primaryBlue md:block">
                {/* <Image
                  id="SNP IBD 100% distribution diagram"
                  src="/assets/M5_sluething_histogram_SNPs_MOI1_IBD1.svg"
                  alt=""
                  width={600}
                  height={400}
                ></Image> */}
              </div>
            )}
        </div>
      </div>
      <CompareMHPHybridCloneQuestions
        activePairwiseCombo={activePairwiseCombo}
      />
    </StandardLayout>
  );
}
