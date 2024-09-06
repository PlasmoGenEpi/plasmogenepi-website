"use client";
import {
  activePairwiseMHPsCombo,
  activePairwiseMHPsComboAtom,
  pairwiseCombosMHPsAtom,
  partSixCompletionAtom,
  partSixSNPKnowledgeCheckQuestionsAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import { useAtom, useAtomValue } from "jotai";
import { partSixPrompts } from "./partSixPrompts";
import PartSixNavArray from "./PartSixNavArray";
import { usePrevious } from "@/components/hooks";
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
import { findFirstFocusableElement } from "@/helpers/helpers";
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

export const hybridMHPCloneQuestionAtom = atomWithStorage<null | number>(
  "hybridMHPCloneQuestionAtom",
  null,
);

export default function PartSix() {
  const [phase, setPhase] = useAtom(phaseAtom);
  const [completion, setCompletion] = useAtom(partSixCompletionAtom);
  const forwards = usePrevious(phase, 1).current <= phase;
  const [questions, setQuestions] = useAtom(
    partSixSNPKnowledgeCheckQuestionsAtom,
  ); // const [questions, setQuestions] = useAtom(P6Step2QuestionsAtom);
  const pairwiseCombos = useAtomValue(pairwiseCombosMHPsAtom);
  const [hybridMHPQuestion, setHybridMHPQuestion] = useAtom(
    hybridMHPCloneQuestionAtom,
  );

  useEffect(() => {
    if (completion[phase]) {
      return;
    }
    if (forwards) {
      let x: HTMLElement | undefined = findFirstFocusableElement(
        document.getElementById("form-interactive"),
      );
      x?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  useEffect(() => {
    if (phase >= 2 && !completion[phase]) {
      let x: HTMLElement | undefined = findFirstFocusableElement(
        document.getElementById("form-interactive"),
      );
      x?.focus();
    }
    if (
      [
        1, 3, 4, 5, 6, 8, 11, 12, 13, 13.5, 14, 14.5, 15, 16, 17, 18, 19, 21,
        22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 33.5, 34,
      ].includes(phase)
    ) {
      window.scrollTo(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  if (phase === 34) {
    return (
      <div>
        <CompletePage part={6} />
        <PartSixControlBoard direction={"forwards"} />
      </div>
    );
  }

  return (
    <div>
      {/* {`(${forwards ? "forwards" : "backwards"}, ${phase})`} */}
      <div className="mb-12">
        <InteractivePrompt
          skippable={completion[1]}
          complete={completion[phase]}
          title={partSixPrompts[phase].title}
          instructions={partSixPrompts[phase].instructions}
        />
        <PartSixNavArray forwards={forwards} />
      </div>
      {phase <= 2 && <GenerateSNPCloneRows forwards={forwards} />}
      {phase >= 3 && phase <= 5 && <CompareSNPClones />}
      {(phase === 6 || phase === 7) && <SNPSlidoPolls />}
      {phase >= 8 && phase <= 10 && <SNPHistogramIBD0 />}
      {phase === 11 && <GenerateSNPHybrid />}
      {phase >= 12 && phase < 15 && <CompareSNPClonesWithHybrid />}
      {((phase >= 15 && phase < 16) || phase === 17 || phase === 19) && (
        <SNPKnowledgeCheck />
      )}
      {/* {(phase === 16 || phase === 17) && (
        <StandardLayout>
          <div>
            <FormHeader text="IBS Distribution Graphs" />
            {phase === 16 ? (
              <div className="">
                <ImageContainer
                  id="IBD-100"
                  path="/assets/M5_sluething_histogram_SNPs_MOI1_IBD1.svg"
                  label={`SNP Match Probability - Identical Clones (100% IBD)`}
                />
              </div>
            ) : (
              <div className="">
                <ImageContainer
                  id="IBD-50"
                  path="/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"
                  label={`SNP Match Probability - Sibling Clones (50% IBD)`}
                />
              </div>
            )}
            <div className="pt-4">
              <ImageContainer
                id="IBD-0"
                path="/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
                label={`SNP Match Probability - Unrelated Clones (0% IBD)`}
              />
            </div>
          </div>
          {
            <div>
              {<FormHeader text="Questions" />}
              <iframe
                src="https://app.sli.do/event/dMvSri9uZuLjfxXNeS3m2o/embed/polls/d4148767-68d3-47aa-84ad-baab7e8dd0cb"
                className={
                  phase === 16
                    ? "fadeIn500 h-[500px] w-full [&>*]:overflow-hidden"
                    : "hidden h-[500px] w-full [&>*]:overflow-hidden"
                }
              ></iframe>
            </div>
          }
        </StandardLayout>
      )} */}
      {phase === 16 && (
        <div className="fadeIn500">
          <FormHeader text="IBS Distribution Graphs" />
          <div className="grid gap-16 text-center md:grid-cols-2">
            <ImageContainer
              id="IBD-100"
              path="/assets/M5_sluething_histogram_SNPs_MOI1_IBD1.svg"
              label={`SNP Match Probability - Identical Clones (100% IBD)`}
            />
            <ImageContainer
              id="IBD-0"
              path="/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
              label={`SNP Match Probability - Unrelated Clones (0% IBD)`}
            />
          </div>
        </div>
      )}
      {phase === 18 && (
        <div>
          <div className="fadeIn500">
            <FormHeader text="IBS Distribution Graphs" />
            <div className="grid gap-16 text-center md:grid-cols-2">
              <ImageContainer
                id="IBD-100"
                path="/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"
                label={`SNP Match Probability - Sibling Clones (50% IBD)`}
              />
              <ImageContainer
                id="IBD-0"
                path="/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
                label={`SNP Match Probability - Unrelated Clones (0% IBD)`}
              />
            </div>
          </div>
        </div>
      )}
      {phase === 20 && (
        <StandardLayout>
          <div className="mx-auto md:col-span-2">
            {/* <FormHeader text="IBS Distribution Graphs" /> */}
            <div className="grid place-items-center">
              <ImageContainer
                id="IBD-0-50-100"
                path="/assets/M5_sluething_histogram_SNPs_MOI1_IBD_0_0.5_1_together.svg"
                label={`SNP IBS Distributions (0%, 50%, 100% IBD)`}
              />
              <QuestionResponseText
                visible
                text="If we have 7, 8, or 9 matches, for example, it could be from siblings or completely unrelated parasites."
              />
            </div>
          </div>
        </StandardLayout>
      )}
      {phase >= 22 && phase < 23 && <GenerateMHPCloneRows />}
      {phase >= 23 && phase <= 25 && <CompareMHPClones />}
      {phase >= 26 && phase < 28 && <MHPSlidoPolls />}
      {phase === 29 && <GenerateMHPHybrid />}
      {phase >= 30 && phase <= 32 && phase !== 31.5 && (
        <CompareMHPClonesWithHybrid />
      )}
      {phase === 31.5 && (
        <MultiRowLayout
          topLeft={
            <div>
              <FormHeader text="Questions" />
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
            </div>
          }
          topRight={
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
                  path="/assets/M5_sluething_histogram_MHs_MOI1_IBD0.5.svg"
                />
              )}
              <QuestionResponseText
                complete={completion[phase] || false}
                key={hybridMHPQuestion}
                trigger={hybridMHPQuestion !== null}
                visible={hybridMHPQuestion !== null}
                content={
                  <div
                    className={`mt-8 text-pretty p-4 [fontSize:15px] md:p-6 md:px-8 ${hybridMHPQuestion !== 1 ? "bg-microRed/10" : "bg-primaryBlue/10"}`}
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
                          there are mutations or genotyping errors. However,
                          since matches in the unrelated part are random, the
                          overall number of matches can vary.
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
        ></MultiRowLayout>
      )}
      {phase === 33 && <IBSWithMicro />}
      {phase === 33.5 && (
        <div className="grid md:grid-cols-2">
          <div className="pt-8 text-center text-sm">
            <label
              style={{
                animationDelay: "4000ms",
              }}
              className="fadeIn500 font-bold [fontSize:15px]"
            >
              SNP Match Probability (0%, 50%, 100% IBD)
            </label>
            <Image
              className=""
              width={600}
              height={400}
              src="/assets/M5_sluething_histogram_SNPs_MOI1_IBD_0_0.5_1_together.svg"
              alt=" SNP Match Probability (0%, 50%, 100% IBD)"
            />
          </div>

          <div
            className={
              "fadeImageOut pt-8 text-center text-sm mix-blend-multiply"
            }
          >
            <label
              style={{
                animationDelay: "4000ms",
              }}
              className="fadeIn500 font-bold [fontSize:15px]"
            >
              Microhaplotype Match Probability (0%, 50%, 100% IBD){" "}
            </label>
            <Image
              className=""
              width={600}
              height={400}
              src="/assets/M5_sluething_histogram_MHs_MOI1_IBD_0_0.5_1_together.svg"
              alt=" Microhaplotype Match Probability (0%, 50%, 100% IBD)"
            />
          </div>
          <div
            style={{
              animationDelay: "3000ms",
            }}
            className="fadeIn500 col-span-full mt-12"
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
