import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import P6CloneRows from "../CloneRows/P6CloneRows";
import SNPComparator from "../Comparators/SNPs/SNPComparator";
import {
  activePairwiseComboAtom,
  pairwiseCombosAtom,
  pairwiseCompletionAtom,
  partSixCloneRowsAtom,
  partSixCompletionAtom,
  partSixPairwiseQuestionsAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import P6CloneRowsWithHybrid from "../CloneRows/P6CloneRowsWithHybrid";
import CompareSNPHybridCloneQuestions from "../Comparators/SNPs/CompareSNPHybridCloneQuestions";
import { useEffect, useRef } from "react";
import Image from "next/image";
import CloneRow from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import {
  P6CloneRowButtonColors,
  P6CloneRowColors,
} from "../CloneRows/P6MHPCloneRows";
import CloneElement from "@/app/components/Interactives/Shared/CloneRow/CloneElement";
import { fixedData } from "@/data/Interactives/fixedData";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";
import MultiRowLayout from "@/app/components/Interactives/Shared/misc/MultiRowLayout";
import ImageContainer from "@/app/components/Interactives/Shared/misc/ImageContainer";

export default function CompareSNPClonesWithHybrid() {
  const [pairwiseCompletion, setPairwiseCompletion] = useAtom(
    pairwiseCompletionAtom,
  );
  const [partSixPairwiseQuestions, setPartSixPairwiseQuestions] = useAtom(
    partSixPairwiseQuestionsAtom,
  );
  const pairwiseCombos = useAtomValue(pairwiseCombosAtom);
  const [activeCombo, setActiveCombo] = useAtom(activePairwiseComboAtom);
  const phase = useAtomValue(phaseAtom);
  const cloneRows = useAtomValue(partSixCloneRowsAtom);
  const graphRef = useRef<null | HTMLDivElement>(null);
  const complete = useAtomValue(partSixCompletionAtom);

  const [first, second] = activeCombo;

  useEffect(() => {
    if (phase === 12) {
      setActiveCombo([1, 4]);
    } else if (phase === 13 || phase === 13.5) {
      setActiveCombo([2, 4]);
    } else if (phase === 15) {
      setActiveCombo([3, 4]);
    }
  }, [phase, setActiveCombo]);

  useEffect(() => {
    if (
      !complete[phase] &&
      partSixPairwiseQuestions[JSON.stringify([3, 4])][5] === 12 &&
      graphRef.current !== null
    ) {
      graphRef.current.scrollIntoView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partSixPairwiseQuestions[JSON.stringify([3, 4])]]);

  if (phase === 13.5) {
    let correctCount = pairwiseCombos[first][second].filter((val, idx) => {
      return val && val === pairwiseCombos[second][first][idx];
    }).length;

    return (
      <MultiRowLayout
        // style={{
        //   rowGap: 0,
        // }}
        topLeft={
          <div className="col-start-1 md:row-span-2">
            <FormHeader text="Questions" />
            <div className="fadeIn500">
              <KnowledgeCheckQuestion
                callback={(questionIdx, answerIdx) => {
                  setPartSixPairwiseQuestions({
                    ...partSixPairwiseQuestions,
                    [JSON.stringify([2, 4])]: {
                      ...partSixPairwiseQuestions[JSON.stringify([2, 4])],
                      4:
                        partSixPairwiseQuestions[JSON.stringify([2, 4])][3] !==
                        answerIdx
                          ? answerIdx
                          : null,
                    },
                  });
                }}
                hasAnswer={
                  partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3
                }
                headerText="Both of the previous comparisons had the same IBD &ndash; 0.5 &ndash; since the hybrid clone is 50% related to each parent. Did you get the same IBS result each time? What do you think you would find if you did similar experiments looking at other, similarly related clones?"
                classNames={{
                  container:
                    partSixPairwiseQuestions[JSON.stringify([2, 4])][2] ===
                    correctCount
                      ? "fadeIn500"
                      : "hidden",
                  answersContainer:
                    "grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-4 mt-4",
                  answers: "w-4 md:w-3 lg:w-4",
                }}
                questionIdx={4}
                answers={[
                  {
                    checked:
                      partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 0,
                    correct: false,
                    index: 0,
                    text: "0, or close to 0 matches",
                  },
                  {
                    checked:
                      partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 1,
                    correct: false,
                    index: 1,
                    text: "Approximately 25% matches",
                  },
                  {
                    checked:
                      partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 2,
                    correct: false,
                    index: 2,
                    text: "Approximately 50% matches",
                  },
                  {
                    checked:
                      partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3,
                    correct: true,
                    index: 3,
                    text: "Approximately 75% matches",
                  },
                  {
                    checked:
                      partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 4,
                    correct: false,
                    index: 4,
                    text: "100%, or close to 100% matches",
                  },
                ]}
              >
                <div className="grid origin-top scale-90 pt-2 text-center [grid-template-columns:1fr_auto] lg:scale-75">
                  <div></div>
                  <div>
                    <span className="text-sm font-bold">IBS</span>
                  </div>
                  <div className="w-full">
                    <SNPComparator activeCombo={[1, 4]} />
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
                    <SNPComparator activeCombo={[2, 4]} />
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
              {
                <div>
                  {/* <ImageContainer
            id="1"
            label="SNP"
            /> */}
                  {/* <div className="mt-8 block p-4 text-center outline outline-2 outline-primaryBlue">
              <Image
                src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"}
                className="max-w-full"
                height={400}
                width={600}
                alt="SNP IBD 75/25% distribution diagram"
              />
            </div>
            <QuestionResponseText
              className="mt-8"
              visible
              text={`Most of the time, we expect to see somewhere between 7 and
                11 matches, but we may get 12/12 matches about 2% of the
                time. In all of these cases, IBD would be 0.5, but IBS could
                vary from 0.5 to 1.0 due to chance.`}
            /> */}
                  {/* <div className="mt-8 bg-primaryBlue/10 p-8">
              <p className="text-sm">
                Most of the time, we expect to see somewhere between 7 and
                11 matches, but we may get 12/12 matches about 2% of the
                time. In all of these cases, IBD would be 0.5, but IBS could
                vary from 0.5 to 1.0 due to chance.
              </p>
            </div> */}
                </div>
              }
            </div>
          </div>
        }
        topRight={
          <div
            className={`${
              partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3
                ? "visible"
                : "invisible"
            } md:col-start-2 md:mt-0`}
          >
            <FormHeader text="IBS Distribution Graphs" />
            <ImageContainer
              label={`SNP Match Probability - Sibling Clones (50% IBD)`}
              id="SNP-75-25"
              path="/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"
            />
            <QuestionResponseText
              trigger={
                partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3
              }
              visible={
                partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3
              }
              complete={complete[phase] || false}
              content={
                <div className="[fontSize: 15px] bg-primaryBlue/10 p-4 md:p-6 md:px-8">
                  <p>
                    You would expect them to have roughly the same IBS, around
                    9/12 or 75%. SNPs in the related half of the genome should
                    always match perfectly, unless there are mutations or
                    genotyping errors. However, since matches in the unrelated
                    part are random, the overall number of matches can vary.
                  </p>

                  <p className="mt-4">
                    Most of the time, we expect to see somewhere between 7 and
                    11 matches, but we may get 12/12 matches about 2% of the
                    time. In all of these cases, IBD would be 0.5, but IBS could
                    vary from 0.5 to 1.0 due to chance.
                  </p>
                </div>
              }
            />
          </div>
        }
      ></MultiRowLayout>
    );

    // return (
    //   <MultiRowLayout
    //     topLeft={
    //       <div>
    //         <FormHeader text={`IBS Comparisons`} />

    //         <div className="">
    //           <div className="grid [grid-template-columns:1fr_auto]">
    //             <div></div>
    //             <div>
    //               <span className="text-sm font-bold">IBS</span>
    //             </div>
    //             <div className="w-full">
    //               <SNPComparator activeCombo={[1, 4]} />
    //             </div>

    //             <div className="col-start-2  self-center px-1 md:px-4">
    //               <span className="text-sm font-bold">
    //                 {(
    //                   (pairwiseCombos[1][4].filter((val) => {
    //                     return val;
    //                   }).length /
    //                     12) *
    //                   100
    //                 ).toFixed(2)}
    //                 %
    //               </span>{" "}
    //             </div>
    //             <div className="w-full">
    //               <SNPComparator activeCombo={[2, 4]} />
    //             </div>
    //             <div className="col-start-2  self-center px-1 md:px-4">
    //               <span className="text-sm font-bold">
    //                 {(
    //                   (pairwiseCombos[2][4].filter((val) => {
    //                     return val;
    //                   }).length /
    //                     12) *
    //                   100
    //                 ).toFixed(2)}
    //                 %
    //               </span>{" "}
    //             </div>
    //           </div>
    //           {/* <div className="flex justify-end">
    //             <div className="w-16 md:w-20 px-1 text-center md:px-4">
    //               <label className="text-sm font-bold">IBS</label>
    //             </div>
    //           </div>
    //           <div className="flex">
    //             <div className="grow">
    //               <SNPComparator activeCombo={[1, 4]} />
    //             </div>
    //             <div className="grid place-items-center px-1 md:px-4">
    //               <span className="text-sm font-bold">
    //                 {(
    //                   (pairwiseCombos[1][4].filter((val) => {
    //                     return val;
    //                   }).length /
    //                     12) *
    //                   100
    //                 ).toFixed(2)}
    //                 %
    //               </span>
    //             </div>
    //           </div>
    //           <div className="flex">
    //             <div className="grow">
    //               <SNPComparator activeCombo={[2, 4]} />
    //             </div>
    //             <div className="grid place-items-center px-1 md:px-4">
    //               <span className="text-sm font-bold">
    //                 {(
    //                   (pairwiseCombos[2][4].filter((val) => {
    //                     return val;
    //                   }).length /
    //                     12) *
    //                   100
    //                 ).toFixed(2)}
    //                 %
    //               </span>{" "}
    //             </div>
    //           </div>{" "} */}
    //         </div>

    //         {/* {partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3 && (
    //     <div className="fadeIn500 hidden p-4 text-center outline outline-2 outline-primaryBlue md:block">
    //       <label htmlFor="75/25-SNP-image">75/25 allele frequency</label>
    //       <Image
    //         id="SNP IBD 75/25 distribution diagram"
    //         src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"}
    //         height={400}
    //         width={600}
    //         alt=""
    //       />
    //     </div>
    //   )} */}
    //       </div>
    //     }
    //     topRight={
    //       <div className="md:row-span-2">
    //         <FormHeader text="Knowledge Check" />
    //         <div className="fadeIn500">
    //           <KnowledgeCheckQuestion
    //             callback={(questionIdx, answerIdx) => {
    //               setPartSixPairwiseQuestions({
    //                 ...partSixPairwiseQuestions,
    //                 [JSON.stringify([2, 4])]: {
    //                   ...partSixPairwiseQuestions[JSON.stringify([2, 4])],
    //                   4:
    //                     partSixPairwiseQuestions[JSON.stringify([2, 4])][3] !==
    //                     answerIdx
    //                       ? answerIdx
    //                       : null,
    //                 },
    //               });
    //             }}
    //             hasAnswer={
    //               partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3
    //             }
    //             headerText="Both of the previous comparisons had the same IBD &ndash; 0.5 &ndash; since the hybrid clone is 50% related to each parent. Did you get the same IBS result each time? What do you think you would find if you did similar experiments looking at other, similarly related clones?"
    //             classNames={{
    //               container:
    //                 partSixPairwiseQuestions[JSON.stringify([2, 4])][2] ===
    //                 correctCount
    //                   ? "fadeIn500"
    //                   : "hidden",
    //               headerText: "mb-4",
    //               answersContainer:
    //                 "grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-4",
    //               answers: "w-4 md:w-3 lg:w-4",
    //             }}
    //             questionIdx={4}
    //             answers={[
    //               {
    //                 checked:
    //                   partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 0,
    //                 correct: false,
    //                 index: 0,
    //                 text: "0, or close to 0 matches",
    //               },
    //               {
    //                 checked:
    //                   partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 1,
    //                 correct: false,
    //                 index: 1,
    //                 text: "Approximately 25% matches",
    //               },
    //               {
    //                 checked:
    //                   partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 2,
    //                 correct: false,
    //                 index: 2,
    //                 text: "Approximately 50% matches",
    //               },
    //               {
    //                 checked:
    //                   partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3,
    //                 correct: true,
    //                 index: 3,
    //                 text: "Approximately 75% matches",
    //               },
    //               {
    //                 checked:
    //                   partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 4,
    //                 correct: false,
    //                 index: 4,
    //                 text: "100%, or close to 100% matches",
    //               },
    //             ]}
    //           />
    //           {
    //             <div>
    //               {/* <ImageContainer
    //         id="1"
    //         label="SNP"
    //         /> */}
    //               {/* <div className="mt-8 block p-4 text-center outline outline-2 outline-primaryBlue">
    //           <Image
    //             src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"}
    //             className="max-w-full"
    //             height={400}
    //             width={600}
    //             alt="SNP IBD 75/25% distribution diagram"
    //           />
    //         </div>
    //         <QuestionResponseText
    //           className="mt-8"
    //           visible
    //           text={`Most of the time, we expect to see somewhere between 7 and
    //             11 matches, but we may get 12/12 matches about 2% of the
    //             time. In all of these cases, IBD would be 0.5, but IBS could
    //             vary from 0.5 to 1.0 due to chance.`}
    //         /> */}
    //               {/* <div className="mt-8 bg-primaryBlue/10 p-8">
    //           <p className="text-sm">
    //             Most of the time, we expect to see somewhere between 7 and
    //             11 matches, but we may get 12/12 matches about 2% of the
    //             time. In all of these cases, IBD would be 0.5, but IBS could
    //             vary from 0.5 to 1.0 due to chance.
    //           </p>
    //         </div> */}
    //             </div>
    //           }
    //         </div>
    //       </div>
    //     }
    //     bottomLeft={
    //       <div className="md:row-span-2">
    //         <ImageContainer
    //           label={`SNP Match Probability - Sibling Clones (50% IBD)`}
    //           id="SNP-75-25"
    //           path="/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"
    //         />
    //       </div>
    //     }
    //     bottomRight={
    //       <QuestionResponseText
    //         trigger={partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3}
    //         visible={partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3}
    //         complete={complete[phase] || false}
    //         content={
    //           <div className="[fontSize: 15px] bg-primaryBlue/10 p-4 md:p-6 md:px-8">
    //             <p>
    //               You would expect them to have roughly the same IBS, around
    //               9/12 or 75%. SNPs in the related half of the genome should
    //               always match perfectly, unless there are mutations or
    //               genotyping errors. However, since matches in the unrelated
    //               part are random, the overall number of matches can vary.
    //             </p>

    //             <p className="mt-4">
    //               Most of the time, we expect to see somewhere between 7 and 11
    //               matches, but we may get 12/12 matches about 2% of the time. In
    //               all of these cases, IBD would be 0.5, but IBS could vary from
    //               0.5 to 1.0 due to chance.
    //             </p>
    //           </div>
    //         }
    //       />
    //     }
    //   ></MultiRowLayout>
    // );

    return (
      <StandardLayout>
        <div>
          <FormHeader text={`IBS Comparisons`} />

          <div className="my-8">
            <SNPComparator activeCombo={[1, 4]} />
            <SNPComparator activeCombo={[2, 4]} />
          </div>

          {/* {partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3 && (
            <div className="fadeIn500 hidden p-4 text-center outline outline-2 outline-primaryBlue md:block">
              <label htmlFor="75/25-SNP-image">75/25 allele frequency</label>
              <Image
                id="SNP IBD 75/25 distribution diagram"
                src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"}
                height={400}
                width={600}
                alt=""
              />
            </div>
          )} */}
        </div>
        <div>
          <h5 className="mb-8 text-center text-lg font-bold md:text-left">
            Knowledge Check
          </h5>
          <div className="fadeIn500">
            <KnowledgeCheckQuestion
              callback={(questionIdx, answerIdx) => {
                setPartSixPairwiseQuestions({
                  ...partSixPairwiseQuestions,
                  [JSON.stringify([2, 4])]: {
                    ...partSixPairwiseQuestions[JSON.stringify([2, 4])],
                    4:
                      partSixPairwiseQuestions[JSON.stringify([2, 4])][3] !==
                      answerIdx
                        ? answerIdx
                        : null,
                  },
                });
              }}
              hasAnswer={
                partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3
              }
              headerText="Both of the previous comparisons had the same IBD &ndash; 0.5 &ndash; since the hybrid clone is 50% related to each parent. Did you get the same IBS result each time? What do you think you would find if you did similar experiments looking at other, similarly related clones?"
              classNames={{
                container:
                  partSixPairwiseQuestions[JSON.stringify([2, 4])][2] ===
                  correctCount
                    ? "fadeIn500"
                    : "hidden",
                headerText: "mb-4",
                answersContainer:
                  "grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-4",
                answers: "w-4 md:w-3 lg:w-4",
              }}
              questionIdx={4}
              answers={[
                {
                  checked:
                    partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 0,
                  correct: false,
                  index: 0,
                  text: "0, or close to 0 matches",
                },
                {
                  checked:
                    partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 1,
                  correct: false,
                  index: 1,
                  text: "Approximately 25% matches",
                },
                {
                  checked:
                    partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 2,
                  correct: false,
                  index: 2,
                  text: "Approximately 50% matches",
                },
                {
                  checked:
                    partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3,
                  correct: true,
                  index: 3,
                  text: "Approximately 75% matches",
                },
                {
                  checked:
                    partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 4,
                  correct: false,
                  index: 4,
                  text: "100%, or close to 100% matches",
                },
              ]}
            />
            {
              <div>
                {/* <ImageContainer
                id="1"
                label="SNP"
                /> */}
                {/* <div className="mt-8 block p-4 text-center outline outline-2 outline-primaryBlue">
                  <Image
                    src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"}
                    className="max-w-full"
                    height={400}
                    width={600}
                    alt="SNP IBD 75/25% distribution diagram"
                  />
                </div>
                <QuestionResponseText
                  className="mt-8"
                  visible
                  text={`Most of the time, we expect to see somewhere between 7 and
                    11 matches, but we may get 12/12 matches about 2% of the
                    time. In all of these cases, IBD would be 0.5, but IBS could
                    vary from 0.5 to 1.0 due to chance.`}
                /> */}
                {/* <div className="mt-8 bg-primaryBlue/10 p-8">
                  <p className="text-sm">
                    Most of the time, we expect to see somewhere between 7 and
                    11 matches, but we may get 12/12 matches about 2% of the
                    time. In all of these cases, IBD would be 0.5, but IBS could
                    vary from 0.5 to 1.0 due to chance.
                  </p>
                </div> */}
              </div>
            }
          </div>
        </div>
        <div className="col-span-full grid gap-8 gap-x-16 md:grid-cols-2">
          <ImageContainer
            label={`SNP Match Probability - Sibling Clones (50% IBD)`}
            id="SNP-75-25"
            path="/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"
          />

          {/* {partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3 && (
            <div className="fadeIn500 p-4 text-center outline outline-2 outline-primaryBlue">
              <label htmlFor="75/25-SNP-image">75/25 allele frequency</label>
              <Image
                id="SNP IBD 75/25 distribution diagram"
                src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"}
                height={400}
                width={600}
                alt=""
              />
            </div>
          )} */}
          <QuestionResponseText
            trigger={partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3}
            visible={partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3}
            complete={complete[phase] || false}
            content={
              <div className="[fontSize: 15px] bg-primaryBlue/10 p-4 md:p-6 md:px-8">
                <p>
                  You would expect them to have roughly the same IBS, around
                  9/12 or 75%. SNPs in the related half of the genome should
                  always match perfectly, unless there are mutations or
                  genotyping errors. However, since matches in the unrelated
                  part are random, the overall number of matches can vary.
                </p>

                <p className="mt-4">
                  Most of the time, we expect to see somewhere between 7 and 11
                  matches, but we may get 12/12 matches about 2% of the time. In
                  all of these cases, IBD would be 0.5, but IBS could vary from
                  0.5 to 1.0 due to chance.
                </p>
              </div>
            }
          />
        </div>
      </StandardLayout>
    );
  }
  if (phase === 14.5) {
    return (
      <MultiRowLayout
        bottomRight={
          <QuestionResponseText
            className=""
            complete={complete[phase] || false}
            trigger={partSixPairwiseQuestions[JSON.stringify([3, 4])][5] === 12}
            visible={partSixPairwiseQuestions[JSON.stringify([3, 4])][5] === 12}
            text={`That's right - if the parasites are identical,
              the entire genome is related, so IBD is 100% or 1.0, and
              all the loci will match. As long as your genotyping is
              accurate, you will get 12/12 matches every time!`}
          />
        }
        topLeft={
          <div className="col-start-1">
            <h5 className="mb-8 text-center text-lg font-bold md:text-left">
              Clone Rows
            </h5>
            <div className=" flex max-w-[500px] flex-col gap-1">
              <CloneRow
                label={"3"}
                classNames={{
                  button: P6CloneRowButtonColors[3],
                  row: P6CloneRowColors[3],
                }}
              >
                {cloneRows[3].vals.map((val, idx) => {
                  return (
                    <CloneElement
                      className="bg-white"
                      key={idx}
                      possibleValues={{
                        reference: fixedData[6].refValues[idx],
                        alternate: fixedData[6].altValues[idx],
                      }}
                      val={val}
                    />
                  );
                })}
              </CloneRow>
              <CloneRow
                label={"3"}
                classNames={{
                  button: P6CloneRowButtonColors[3],
                  row: P6CloneRowColors[3],
                }}
              >
                {cloneRows[3].vals.map((val, idx) => {
                  return (
                    <CloneElement
                      className="bg-white"
                      key={idx}
                      possibleValues={{
                        reference: fixedData[6].refValues[idx],
                        alternate: fixedData[6].altValues[idx],
                      }}
                      val={val}
                    />
                  );
                })}
              </CloneRow>
            </div>
          </div>
        }
        topRight={
          <div className="md:col-start-2 md:row-span-2">
            <FormHeader text={`Questions`} />

            {phase === 14.5 && (
              <div className="fadeIn500">
                <div className="flex flex-col gap-8">
                  <KnowledgeCheckQuestion
                    classNames={{
                      headerText: "mb-4",
                      answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                      answers: "w-4 md:w-3 lg:w-4",
                    }}
                    answers={Array(13)
                      .fill(0)
                      .map((el, idx) => {
                        return {
                          checked:
                            partSixPairwiseQuestions[
                              JSON.stringify([3, 4])
                            ][4] === idx,
                          correct: idx === 12,
                          index: idx,
                          text: idx.toString() + "/12",
                        };
                      })}
                    callback={(questionIdx, answerIdx) => {
                      setPartSixPairwiseQuestions({
                        ...partSixPairwiseQuestions,
                        [JSON.stringify([3, 4])]: {
                          ...partSixPairwiseQuestions[JSON.stringify([3, 4])],
                          4:
                            partSixPairwiseQuestions[
                              JSON.stringify([3, 4])
                            ][4] !== answerIdx
                              ? answerIdx
                              : null,
                        },
                      });
                    }}
                    hasAnswer={
                      partSixPairwiseQuestions[JSON.stringify([3, 4])][4] === 12
                    }
                    headerText="What is the IBS in this case?"
                    questionIdx={4}
                  />
                  <KnowledgeCheckQuestion
                    classNames={{
                      headerText: "mb-4",
                      answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
                      answers: "w-4 md:w-3 lg:w-4",
                      container:
                        partSixPairwiseQuestions[JSON.stringify([3, 4])][4] ===
                        12
                          ? "fadeIn500"
                          : "hidden",
                    }}
                    answers={Array(13)
                      .fill(0)
                      .map((el, idx) => {
                        return {
                          checked:
                            partSixPairwiseQuestions[
                              JSON.stringify([3, 4])
                            ][5] === idx,
                          correct: idx === 12,
                          index: idx,
                          text: idx.toString() + "/12",
                        };
                      })}
                    callback={(questionIdx, answerIdx) => {
                      setPartSixPairwiseQuestions({
                        ...partSixPairwiseQuestions,
                        [JSON.stringify([3, 4])]: {
                          ...partSixPairwiseQuestions[JSON.stringify([3, 4])],
                          5:
                            partSixPairwiseQuestions[
                              JSON.stringify([3, 4])
                            ][5] !== answerIdx
                              ? answerIdx
                              : null,
                        },
                      });
                    }}
                    hasAnswer={
                      partSixPairwiseQuestions[JSON.stringify([3, 4])][5] === 12
                    }
                    headerText="What is the IBD?"
                    questionIdx={5}
                  />
                </div>
              </div>
            )}
          </div>
        }
        bottomLeft={
          <div
            ref={graphRef}
            className={`${
              partSixPairwiseQuestions[JSON.stringify([3, 4])][5] === 12
                ? "fadeIn500"
                : "invisible"
            } mt-auto grid gap-16 md:col-start-1 md:row-span-2`}
          >
            <ImageContainer
              id="IBD-100"
              path="/assets/M5_sluething_histogram_SNPs_MOI1_IBD1.svg"
              label={`SNP Match Probability - Identical Clones (100% IBD)`}
            />
            {/* <QuestionResponseText
              className=""
              visible
              text={`That's right - if the parasites are identical,
              the entire genome is related, so IBD is 100% or 1.0, and
              all the loci will match. As long as your genotyping is
              accurate, you will get 12/12 matches every time!`}
            /> */}
          </div>
        }
      />
    );
  }

  return (
    <form
      id="form-interactive"
      className="relative grid gap-y-16 md:grid-cols-2 md:grid-rows-2 md:gap-x-16 md:gap-y-8 lg:gap-x-16 sm:[&>div]:mx-auto sm:[&>div]:w-full [&>div]:sm:max-w-[80%] md:[&>div]:mx-0 md:[&>div]:w-auto [&>div]:md:max-w-none"
    >
      <div className="col-start-1 row-start-1">
        <div className="h-fit">
          <FormHeader text={`Genotype Comparisons with SNPs and Hybrid`} />

          <div className="">
            <P6CloneRowsWithHybrid />
            <div className="mt-2">
              <SNPComparator
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
              />
            </div>
            {/* {phase === 13.5 &&
            partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3 && (
              <div className="fadeIn500 mt-12 hidden p-4 text-center outline outline-2 outline-primaryBlue md:block">
                <label htmlFor="75/25-SNP-image">75/25 allele frequency</label>
                <Image
                  id="SNP IBD 75/25 distribution diagram"
                  src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"}
                  height={400}
                  width={600}
                  alt=""
                />
              </div>
            )} */}
          </div>
        </div>
      </div>
      <div className="md:col-start-2 md:row-span-full">
        <CompareSNPHybridCloneQuestions
          activePairwiseCombo={
            phase === 12
              ? [1, 4]
              : phase === 13
              ? [2, 4]
              : phase === 14
              ? [3, 4]
              : activeCombo
          }
        />
      </div>
      <div className="col-start-1  md:row-start-2">
        <QuestionResponseText
          key={phase}
          complete={complete[phase] || false}
          trigger={
            partSixPairwiseQuestions[JSON.stringify(activeCombo)][3] ===
            (phase === 14 ? 0 : 6)
          }
          visible={
            partSixPairwiseQuestions[JSON.stringify(activeCombo)][3] ===
            (phase === 14 ? 0 : 6)
          }
          text={
            phase === 12
              ? `      That's right - again we have the privilege of knowing the
      true relatedness by ancestry of these lab clones. Since clone 4 is a
      child of clone 1 and shares exactly 50% of it's genome by
      ancestry - the red part - IBD is 0.5 or 50%.`
              : phase === 13
              ? `That's right - just like before, IBD is 0.5 since the hybrid
        clone shares 50% of its genome with the parent, in this case the blue
        part.`
              : phase === 14
              ? `That's right - again we have the privilege of knowing the
          true relatedness by ancestry of these lab clones. Since clone 4 is not
          a child of clone 3 and shares none of it's genome by ancestry IBD
          is 0%. This is the same situation as our initial comparisons of lab
          clones 1, 2, and 3.`
              : undefined
          }
        />
      </div>
    </form>
  );

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-16 border-8 border-black md:grid-rows-2">
      <div
        tabIndex={0}
        className="col-start-1 row-start-1 h-fit bg-blue-400 p-20"
      ></div>
      <div
        tabIndex={0}
        className="bg-red-400 p-40 md:col-start-2 md:row-span-full"
      ></div>
      <div
        tabIndex={0}
        className="col-start-1 bg-green-400 p-8 md:row-start-2"
      ></div>
    </div>
  );

  return (
    <StandardLayout>
      <div className="h-fit">
        <FormHeader text={`Genotype Comparisons with SNPs and Hybrid`} />

        <div className="">
          <P6CloneRowsWithHybrid />
          <div className="mt-2">
            <SNPComparator
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
            />
          </div>
          {/* {phase === 13.5 &&
            partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3 && (
              <div className="fadeIn500 mt-12 hidden p-4 text-center outline outline-2 outline-primaryBlue md:block">
                <label htmlFor="75/25-SNP-image">75/25 allele frequency</label>
                <Image
                  id="SNP IBD 75/25 distribution diagram"
                  src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"}
                  height={400}
                  width={600}
                  alt=""
                />
              </div>
            )} */}
        </div>
      </div>
      <CompareSNPHybridCloneQuestions
        activePairwiseCombo={
          phase === 12
            ? [1, 4]
            : phase === 13
            ? [2, 4]
            : phase === 14
            ? [3, 4]
            : activeCombo
        }
      />
      <p className="text-sm">
        That&apos;s right &ndash; again we have the privilege of knowing the
        true relatedness by ancestry of these lab clones. Since clone 4 is not a
        child of clone 3 and shares none of it&apos;s genome by ancestry IBD is
        0%. This is the same situation as our initial comparisons of lab clones
        1, 2, and 3.
      </p>
    </StandardLayout>
  );
}
