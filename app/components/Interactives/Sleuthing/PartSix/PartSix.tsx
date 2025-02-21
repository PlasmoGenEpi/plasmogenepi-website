"use client";
import {
  activePairwiseMHPsCombo,
  activePairwiseMHPsComboAtom,
  pairwiseCombosMHPsAtom,
  partSixCompletionAtom,
  partSixSNPKnowledgeCheckQuestionsAtom,
  phase2Atom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import { useAtom, useAtomValue } from "jotai";
import { partSixPrompts } from "./partSixPrompts";
import PartSixNavArray from "./PartSixNavArray";
import { usePrevious } from "@/app/components/hooks";
import P6CloneRows from "./CloneRows/P6MHPCloneRows";
import StandardLayout from "../../Shared/misc/StandardLayout";
import { useEffect, useState } from "react";
import PartSixControlBoard from "./PartSixControlBoard";
import { atomWithStorage, RESET } from "jotai/utils";
import MicrohaplotypeComparator from "./Comparators/MHPs/MicrohaplotypeComparators";
import GenerateMHPCloneRows from "./Phases/GenerateMHPCloneRows";
import CompareMHPClones from "./Phases/CompareMHPClones";
import GenerateSNPCloneRows from "./Phases/GenerateSNPCloneRows";
import CompareSNPClones from "./Phases/CompareSNPClones";
import SNPComparator from "./Comparators/SNPs/SNPComparator";
import SNPSlidoPolls from "./Phases/SNPSlidoPolls";
// import { findFirstFocusableElement } from "@/helpers/helpers";
import MHPSlidoPolls from "./Phases/MHPSlidoPolls";
import KnowledgeCheck from "../../Shared/KnowledgeChecks/KnowledgeCheck";
import KnowledgeCheckQuestion from "../../Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import SNPHistogramIBD0 from "./Phases/SNPHistogramIBD0";
import GenerateSNPHybrid from "./Phases/GenerateSNPHybrid";
import CompareSNPClonesWithHybrid from "./Phases/CompareSNPClonesWithHybrid";
import SNPKnowledgeCheck from "./Phases/SNPKnowledgeCheck";
import P6MHPCloneRows from "./CloneRows/P6MHPCloneRows";
import P6MHPCloneRowsWithHybrid from "./CloneRows/P6MHPCloneRowsWithHybrid";
import PositiveControls from "./Phases/PositiveControls";
import Genotypes, { P6Step2QuestionsAtom } from "./Phases/Genotypes";
import PositiveControlBoard from "../../Shared/PositiveControlBoard/PositiveControlBoard";
import Image from "next/image";
import GenerateMHPHybrid from "./Phases/GenerateMHPHybrid";
import CompareMHPClonesWithHybrid from "./Phases/CompareMHPClonesWithHybrid";
import IBSWithMicro from "./Phases/IBSWithMicro";
import CompletePage from "../../Shared/misc/CompletePage";
import QuestionResponseText from "../../Shared/misc/QuestionResponseText";
import FormHeader from "../../Shared/misc/FormHeader";
import ImageContainer from "../../Shared/misc/ImageContainer";
import MultiRowLayout from "../../Shared/misc/MultiRowLayout";
import { findFirstFocusableElement } from "../../helpers";
import InteractivePrimaryLayout from "../../Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export const hybridMHPCloneQuestionAtom = atomWithStorage<null | number>(
  "hybridMHPCloneQuestionAtom",
  null,
);

export default function PartSix() {
  const [phase2, setPhase] = useAtom(phase2Atom);
  const [completion, setCompletion] = useAtom(partSixCompletionAtom);
  const forwards = usePrevious(phase2, 1).current <= phase2;
  const [questions, setQuestions] = useAtom(
    partSixSNPKnowledgeCheckQuestionsAtom,
  ); // const [questions, setQuestions] = useAtom(P6Step2QuestionsAtom);
  const pairwiseCombos = useAtomValue(pairwiseCombosMHPsAtom);
  const [hybridMHPQuestion, setHybridMHPQuestion] = useAtom(
    hybridMHPCloneQuestionAtom,
  );

  useEffect(() => {
    if (completion[phase2]) {
      return;
    }
    if (forwards) {
      let x: HTMLElement | undefined = findFirstFocusableElement(
        document.getElementById("form-interactive"),
      );
      x?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase2]);

  // useEffect(() => {
  //   if (phase2 >= 2 && !completion[phase2]) {
  //     let x: HTMLElement | undefined = findFirstFocusableElement(
  //       document.getElementById("form-interactive")
  //     );
  //     x?.focus();
  //   }
  //   if (
  //     [
  //       1, 3, 4, 5, 6, 8, 11, 12, 13, 13.5, 14, 14.5, 15, 16, 17, 18, 19, 21,
  //       22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 33.5, 34,
  //     ].includes(phase2)
  //   ) {
  //     window.scrollTo(0, 0);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [phase2]);

  // if (phase === 34) {
  //   return (
  //     <div>
  //       <CompletePage part={6} />
  //       <PartSixControlBoard direction={"forwards"} />
  //     </div>
  //   );
  // }

  // return null;

  return (
    <div>
      {/* {phase2} */}
      {/* {`(${forwards ? "forwards" : "backwards"}, ${phase})`} */}
      <div className="mb-12">
        <InteractivePrompt
          skippable={completion[1]}
          complete={completion[phase2]}
          title={partSixPrompts[phase2]?.title}
          instructions={partSixPrompts[phase2]?.instructions}
        />
        {phase2 > 0 && <PartSixNavArray forwards={forwards} />}
      </div>
      {phase2 > 0 && phase2 <= 2 && (
        <GenerateSNPCloneRows forwards={forwards} />
      )}
      {phase2 >= 3 && phase2 <= 5 && <CompareSNPClones />}
      {(phase2 === 6 || phase2 === 7) && <SNPSlidoPolls />}
      {phase2 >= 8 && phase2 <= 10 && <SNPHistogramIBD0 />}
      {phase2 === 11 && <GenerateSNPHybrid />}
      {phase2 >= 12 && phase2 < 15 && <CompareSNPClonesWithHybrid />}
      {((phase2 >= 15 && phase2 < 16) || phase2 === 17 || phase2 === 19) && (
        <SNPKnowledgeCheck />
      )}
      {phase2 >= 22 && phase2 < 23 && <GenerateMHPCloneRows />}
      {phase2 >= 23 && phase2 <= 25 && <CompareMHPClones />}
      {/* {phase2 === 26 && <div>Hello World </div>} */}
      {phase2 >= 26 && phase2 < 28 && <MHPSlidoPolls />}
      {phase2 === 29 && <GenerateMHPHybrid />}
      {phase2 >= 30 && phase2 <= 32 && phase2 !== 31.5 && (
        <CompareMHPClonesWithHybrid />
      )}
      {phase2 === 31.5 && (
        <InteractivePrimaryLayout
          leftHeader={`Questions`}
          leftContent={
            <KnowledgeCheckQuestion
              callback={(questionIdx, answerIdx) => {
                if (hybridMHPQuestion === answerIdx) {
                  setHybridMHPQuestion(null);
                } else {
                  setHybridMHPQuestion(answerIdx);
                }
                // setPartSixPairwiseQuestions({
                //   ...partSixPairwiseQuestions,
                //   [JSON.stringify([2, 4])]: {
                //     ...partSixPairwiseQuestions[JSON.stringify([2, 4])],
                //     4:
                //       partSixPairwiseQuestions[JSON.stringify([2, 4])][3] !==
                //       answerIdx
                //         ? answerIdx
                //         : null,
                //   },
                // });
              }}
              hasAnswer={hybridMHPQuestion === 1}
              headerText="Both of the previous comparisons had the same IBD &ndash; 0.5 &ndash; since the hybrid clone is 50% related to each parent. Did you get the same IBS result each time? What do you think you would find if you did similar experiments looking at other, similarly related clones?"
              classNames={{
                answersContainer:
                  "grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-4 mt-4",
                answers: "w-4 md:w-3 lg:w-4",
              }}
              questionIdx={1}
              answers={[
                {
                  checked: hybridMHPQuestion === 0,
                  correct: false,
                  index: 0,
                  text: "0, or close to 0 matches",
                },
                {
                  checked: hybridMHPQuestion === 1,
                  correct: true,
                  index: 1,
                  text: "Approximately 50% matches",
                },
                {
                  checked: hybridMHPQuestion === 2,
                  correct: false,
                  index: 2,
                  text: "100%, or close to 100% matches",
                },
              ]}
            >
              <div className="grid origin-top scale-90 pt-2 [grid-template-columns:1fr_auto] lg:scale-75">
                <div></div>
                <div className="text-center">
                  <span className="text-sm font-bold">IBS</span>
                </div>
                <div className="w-full">
                  <MicrohaplotypeComparator activeCombo={[1, 4]} />
                </div>

                <div className="col-start-2  self-center px-1 md:px-4">
                  <span className="text-sm font-bold">
                    {(
                      (pairwiseCombos[1][4].filter((val) => {
                        return val;
                      }).length /
                        12) *
                      100
                    ).toFixed(2)}
                    %
                  </span>{" "}
                </div>
                <div className="w-full">
                  <MicrohaplotypeComparator activeCombo={[2, 4]} />
                </div>
                <div className="col-start-2  self-center px-1 md:px-4">
                  <span className="text-sm font-bold">
                    {(
                      (pairwiseCombos[2][4].filter((val) => {
                        return val;
                      }).length /
                        12) *
                      100
                    ).toFixed(2)}
                    %
                  </span>{" "}
                </div>
              </div>
            </KnowledgeCheckQuestion>
          }
          rightContentStyle={{
            gridRow: "span 3",
          }}
          rightContent={
            <div className="md:row-span-2">
              {
                <FormHeader
                  text={hybridMHPQuestion === 1 ? "IBS Distribution Graph" : ""}
                />
              }
              {hybridMHPQuestion === 1 && (
                <ImageContainer
                  className="pb-0 pt-0"
                  id="1"
                  label="Microhaplotype Match Probability - Sibling Clones (0.5 IBD)"
                  path="/InteractiveAssets/M5_sluething_histogram_MHs_MOI1_IBD0.5.svg"
                />
              )}
              <QuestionResponseText
                complete={completion[phase2] || false}
                key={hybridMHPQuestion}
                trigger={hybridMHPQuestion !== null}
                visible={hybridMHPQuestion !== null}
                content={
                  <div
                    className={`mt-8 text-pretty p-4 [fontSize:15px] md:p-6 md:px-8 ${
                      hybridMHPQuestion !== 1
                        ? "text-pretty bg-microRed/10"
                        : "bg-interactiveBlue/10 text-pretty dark:bg-zinc-900/50 dark:text-emerald-400"
                    }`}
                  >
                    {hybridMHPQuestion === 0 && (
                      <p>
                        There would have to be an extraordinarily unlikely
                        number of mutations or genotyping errors to allow for
                        related clones to have 0 or close to 0 matches,
                        therefore it is not reasonable to think that related
                        clones would have 0 matches in this instance.
                        {/* Since we know the clones are related, unless there are
                        an extraordinarily unlikely number of mutations and
                        genotyping errors, it is not reasonable to think that
                        related clones would have 0 matches in this instance. */}
                        {/* Microhaplotypes, just like SNPs, in the related half of
                      the genome should always match perfectly, unless there are
                      mutations or genotyping error. However, since matches in
                      the unrelated part are random, the overall number of
                      matches can vary. */}
                      </p>
                    )}
                    {hybridMHPQuestion === 1 && (
                      <div>
                        <p>
                          Microhaplotypes, just like SNPs, in the related half
                          of the genome should always match perfectly, unless
                          there are mutations or genotyping errors. Since
                          matches in the unrelated part are random, the overall
                          number of matches can vary, but should be fewer than
                          with your less diverse SNP loci from before.
                        </p>
                        <p className="mt-4">
                          Most of the time, we expect to see somewhere between 6
                          and 8 matches, but we may get 9/12 about 2% of the
                          time. Unlike with SNPs, we are very unlikely to see 10
                          or more matches &ndash; less than 0.3% of the time.
                        </p>
                      </div>
                    )}
                    {hybridMHPQuestion === 2 && (
                      <p>
                        While it is technically possible for sibling clones (0.5
                        IBD) to have close to 100% matches, it is extremely
                        unlikely. In our example of 12 loci, of which at least 6
                        should match because of their shared ancestry, the
                        likelihood of the other 6 matching would be less than 4
                        in one million!
                      </p>
                    )}
                  </div>
                }
              />
              {/* <KnowledgeCheckQuestion
                answers={[]}
                callback={() => {}}
                hasAnswer={false}
                questionIdx={1}
                headerText="Both of the previous comparisons had the same IBD – 0.5 – since the hybrid clone is 50% related to each parent. What do you think you would find if you did similar experiments looking at other, similarly related clones?"
              /> */}
            </div>
          }
        />
        // <MultiRowLayout
        //   topLeft={
        //     <div>
        //       <FormHeader text="Questions" />
        //       <KnowledgeCheckQuestion
        //         callback={(questionIdx, answerIdx) => {
        //           if (hybridMHPQuestion === answerIdx) {
        //             setHybridMHPQuestion(null);
        //           } else {
        //             setHybridMHPQuestion(answerIdx);
        //           }
        //           // setPartSixPairwiseQuestions({
        //           //   ...partSixPairwiseQuestions,
        //           //   [JSON.stringify([2, 4])]: {
        //           //     ...partSixPairwiseQuestions[JSON.stringify([2, 4])],
        //           //     4:
        //           //       partSixPairwiseQuestions[JSON.stringify([2, 4])][3] !==
        //           //       answerIdx
        //           //         ? answerIdx
        //           //         : null,
        //           //   },
        //           // });
        //         }}
        //         hasAnswer={hybridMHPQuestion === 1}
        //         headerText="Both of the previous comparisons had the same IBD &ndash; 0.5 &ndash; since the hybrid clone is 50% related to each parent. Did you get the same IBS result each time? What do you think you would find if you did similar experiments looking at other, similarly related clones?"
        //         classNames={{
        //           answersContainer:
        //             "grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-4 mt-4",
        //           answers: "w-4 md:w-3 lg:w-4",
        //         }}
        //         questionIdx={1}
        //         answers={[
        //           {
        //             checked: hybridMHPQuestion === 0,
        //             correct: false,
        //             index: 0,
        //             text: "0, or close to 0 matches",
        //           },
        //           {
        //             checked: hybridMHPQuestion === 1,
        //             correct: true,
        //             index: 1,
        //             text: "Approximately 50% matches",
        //           },
        //           {
        //             checked: hybridMHPQuestion === 2,
        //             correct: false,
        //             index: 2,
        //             text: "100%, or close to 100% matches",
        //           },
        //         ]}
        //       >
        //         <div className="grid origin-top scale-90 pt-2 [grid-template-columns:1fr_auto] lg:scale-75">
        //           <div></div>
        //           <div className="text-center">
        //             <span className="text-sm font-bold">IBS</span>
        //           </div>
        //           <div className="w-full">
        //             <MicrohaplotypeComparator activeCombo={[1, 4]} />
        //           </div>

        //           <div className="col-start-2  self-center px-1 md:px-4">
        //             <span className="text-sm font-bold">
        //               {(
        //                 (pairwiseCombos[1][4].filter((val) => {
        //                   return val;
        //                 }).length /
        //                   12) *
        //                 100
        //               ).toFixed(2)}
        //               %
        //             </span>{" "}
        //           </div>
        //           <div className="w-full">
        //             <MicrohaplotypeComparator activeCombo={[2, 4]} />
        //           </div>
        //           <div className="col-start-2  self-center px-1 md:px-4">
        //             <span className="text-sm font-bold">
        //               {(
        //                 (pairwiseCombos[2][4].filter((val) => {
        //                   return val;
        //                 }).length /
        //                   12) *
        //                 100
        //               ).toFixed(2)}
        //               %
        //             </span>{" "}
        //           </div>
        //         </div>
        //       </KnowledgeCheckQuestion>
        //     </div>
        //   }
        //   topRight={
        //     <div className="md:row-span-2">
        //       {
        //         <FormHeader
        //           text={hybridMHPQuestion === 1 ? "IBS Distribution Graph" : ""}
        //         />
        //       }
        //       {hybridMHPQuestion === 1 && (
        //         <ImageContainer
        //           className="pb-0 pt-0"
        //           id="1"
        //           label="Microhaplotype Match Probability - Sibling Clones (0.5 IBD)"
        //           path="/assets/M5_sluething_histogram_MHs_MOI1_IBD0.5.svg"
        //         />
        //       )}
        //       <QuestionResponseText
        //         complete={completion[phase2] || false}
        //         key={hybridMHPQuestion}
        //         trigger={hybridMHPQuestion !== null}
        //         visible={hybridMHPQuestion !== null}
        //         content={
        //           <div
        //             className={`mt-8 text-pretty p-4 [fontSize:15px] md:p-6 md:px-8 ${
        //               hybridMHPQuestion !== 1
        //                 ? "bg-microRed/10"
        //                 : "bg-primaryBlue/10"
        //             }`}
        //           >
        //             {hybridMHPQuestion === 0 && (
        //               <p>
        //                 There would have to be an extraordinarily unlikely
        //                 number of mutations or genotyping errors to allow for
        //                 related clones to have 0 or close to 0 matches,
        //                 therefore it is not reasonable to think that related
        //                 clones would have 0 matches in this instance.
        //                 {/* Since we know the clones are related, unless there are
        //                 an extraordinarily unlikely number of mutations and
        //                 genotyping errors, it is not reasonable to think that
        //                 related clones would have 0 matches in this instance. */}
        //                 {/* Microhaplotypes, just like SNPs, in the related half of
        //               the genome should always match perfectly, unless there are
        //               mutations or genotyping error. However, since matches in
        //               the unrelated part are random, the overall number of
        //               matches can vary. */}
        //               </p>
        //             )}
        //             {hybridMHPQuestion === 1 && (
        //               <div>
        //                 <p>
        //                   Microhaplotypes, just like SNPs, in the related half
        //                   of the genome should always match perfectly, unless
        //                   there are mutations or genotyping errors. However,
        //                   since matches in the unrelated part are random, the
        //                   overall number of matches can vary.
        //                 </p>
        //                 <p className="mt-4">
        //                   Most of the time, we expect to see somewhere between 6
        //                   and 8 matches, but we may get 9/12 about 2% of the
        //                   time. Unlike with SNPs, we are very unlikely to see 10
        //                   or more matches &ndash; less than 0.3% of the time.
        //                 </p>
        //               </div>
        //             )}
        //             {hybridMHPQuestion === 2 && (
        //               <p>
        //                 While it is technically possible for sibling clones (0.5
        //                 IBD) to have close to 100% matches, it is extremely
        //                 unlikely. In our example of 12 loci, of which at least 6
        //                 should match because of their shared ancestry, the
        //                 likelihood of the other 6 matching would be less than 4
        //                 in one million!
        //               </p>
        //             )}
        //           </div>
        //         }
        //       />
        //       {/* <KnowledgeCheckQuestion
        //         answers={[]}
        //         callback={() => {}}
        //         hasAnswer={false}
        //         questionIdx={1}
        //         headerText="Both of the previous comparisons had the same IBD – 0.5 – since the hybrid clone is 50% related to each parent. What do you think you would find if you did similar experiments looking at other, similarly related clones?"
        //       /> */}
        //     </div>
        //   }
        // ></MultiRowLayout>
      )}
      {phase2 === 33 && <IBSWithMicro />}
      {phase2 === 33.5 && (
        <div className="grid md:grid-cols-2">
          <div className="pt-8 text-center text-sm">
            <label
              style={{
                animationDelay: "4000ms",
              }}
              className=" font-bold [fontSize:15px]"
            >
              SNP Match Probability (0%, 50%, 100% IBD)
            </label>
            <Image
              className="mix-blend-multiply dark:opacity-80 dark:mix-blend-screen dark:hue-rotate-180 dark:invert"
              width={600}
              height={400}
              src="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD_0_0.5_1_together.svg"
              alt=" SNP Match Probability (0%, 50%, 100% IBD)"
            />
          </div>

          <div className={"fadeImageOut/ pt-8 text-center text-sm"}>
            <label
              style={{
                animationDelay: "4000ms",
              }}
              className=" font-bold [fontSize:15px]"
            >
              Microhaplotype Match Probability (0%, 50%, 100% IBD){" "}
            </label>
            <Image
              className="mix-blend-multiply/ dark:opacity-80 dark:mix-blend-screen dark:hue-rotate-180 dark:invert"
              width={600}
              height={400}
              src="/InteractiveAssets/M5_sluething_histogram_MHs_MOI1_IBD_0_0.5_1_together.svg"
              alt=" Microhaplotype Match Probability (0%, 50%, 100% IBD)"
            />
          </div>
          <div
            style={{
              animationDelay: "3000ms",
            }}
            className=" col-span-full mt-12"
          >
            <QuestionResponseText
              visible={true}
              text="
              By increasing the resolution of your genotyping, you can more
              easily tell which parasites are related by ancestry and therefore
              by transmission. You also now have a good sense of what you
              observe in terms of IBS means in terms of the true relatedness of
              the parasites. You are almost ready to answer your program's
              questions about these concerning outbreaks! You have just one more
              thing to do first…
            "
            />
          </div>
        </div>
      )}
      <PartSixControlBoard direction={"forwards"} />
    </div>
  );
}

// first phase, show genotypes -- second, show graph
