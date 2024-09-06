import KnowledgeCheckQuestion from "@/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import FormHeader from "@/components/Interactives/Shared/misc/FormHeader";
import ImageContainer from "@/components/Interactives/Shared/misc/ImageContainer";
import QuestionResponseText from "@/components/Interactives/Shared/misc/QuestionResponseText";
import StandardLayout from "@/components/Interactives/Shared/misc/StandardLayout";
import {
  partSixCompletionAtom,
  partSixSNPHistogramQuestionsAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { RESET } from "jotai/utils";
import Image from "next/image";
import { useEffect } from "react";

export default function SNPHistogramIBD0() {
  const [questions, setQuestions] = useAtom(partSixSNPHistogramQuestionsAtom);
  const [phase, setPhase] = useAtom(phaseAtom);
  const [completion, setCompletion] = useAtom(partSixCompletionAtom);

  // useEffect(() => {
  //   setCompletion({ ...completion, 8: false, 9: false, 10: false });
  //   setQuestions(RESET);
  // }, [setQuestions]);

  return (
    <StandardLayout>
      <div>
        <FormHeader text={`Questions`} />

        {phase === 8 && (
          <div>
            <KnowledgeCheckQuestion
              callback={(questionIdx, answerIdx) => {
                if (questions[1] === answerIdx) {
                  setQuestions({ ...questions, 1: null });
                } else {
                  setQuestions({ ...questions, 1: answerIdx });
                }
              }}
              hasAnswer={questions[1] === 1}
              classNames={{
                answersContainer: "mt-4 grid grid-cols-2 md:grid-cols-1 gap-2",
              }}
              headerText="Based on this, do you think it is likely that all 12 loci would match if parasites are unrelated?"
              questionIdx={1}
              answers={[
                {
                  checked: questions[1] === 0,
                  correct: false,
                  index: 0,
                  text: "Yes",
                },
                {
                  checked: questions[1] === 1,
                  correct: true,
                  index: 1,
                  text: "No",
                },
              ]}
            />
            <QuestionResponseText
              className="mt-8"
              complete={completion[phase] || false}
              trigger={questions[1] === 1}
              visible={questions[1] === 1}
              text={`It is very unlikely that they would all match by
                chance; the probability is the same as none of them matching,
                around 0.02%. It also unlikely ( <1% chance) that 11 of the
                12 would match.`}
            />
          </div>
        )}
        {phase === 9 && (
          <div className="fadeIn500">
            <KnowledgeCheckQuestion
              callback={(questionIdx, answerIdx) => {
                if (questions[2] === answerIdx) {
                  setQuestions({ ...questions, 2: null });
                } else {
                  setQuestions({ ...questions, 2: answerIdx });
                }
              }}
              hasAnswer={questions[2] === 0}
              classNames={{
                answersContainer: "mt-4 grid grid-cols-2 md:grid-cols-1 gap-2",
              }}
              headerText="This scenario is somewhat optimistic in that the SNPs are perfectly diverse. In a more realistic situation if SNP allele frequencies were not actually 50/50 but e.g. 80/20 would we expect more or fewer matches?"
              questionIdx={1}
              answers={[
                {
                  checked: questions[2] === 0,
                  correct: true,
                  index: 0,
                  text: "More matches",
                },
                {
                  checked: questions[2] === 1,
                  correct: false,
                  index: 1,
                  text: "Fewer matches",
                },
              ]}
            />
            <QuestionResponseText
              className="mt-8"
              complete={completion[phase] || false}
              trigger={questions[2] === 0}
              visible={questions[2] === 0}
              content={
                <div className="bg-primaryBlue/10 p-4 [fontSize:15px] md:p-6 md:px-8">
                  <p className="text-sm">
                    You would expect more matches since there is less diversity.
                    The more common allele would be more likely to be present in
                    both parasites, and so they would match more often, about
                    70% of the time. For the 80/20 case, the probability of
                    seeing different numbers of matches is shown{" "}
                    <span className="hidden md:inline-block">to the left.</span>{" "}
                    <span className="inline-block md:hidden">above.</span>
                  </p>
                </div>
              }
            />
          </div>
        )}
        {phase === 10 && (
          <div>
            <KnowledgeCheckQuestion
              classNames={{
                answersContainer: "mt-4 grid grid-cols-2 md:grid-cols-1 gap-2",
              }}
              answers={[
                {
                  checked: questions[3] === 0,
                  correct: true,
                  index: 0,
                  text: "Harder",
                },
                {
                  checked: questions[3] === 1,
                  correct: false,
                  index: 1,
                  text: "Easier",
                },
              ]}
              callback={(questionIdx, answerIdx) => {
                console.log("called");
                if (questions[3] === answerIdx) {
                  setQuestions({ ...questions, 3: null });
                } else {
                  setQuestions({ ...questions, 3: answerIdx });
                }
              }}
              hasAnswer={questions[3] === 0}
              headerText="Do you think this higher allele frequency would make it harder or easier to distinguish related from unrelated parasites?"
              questionIdx={3}
            />
            <QuestionResponseText
              className="mt-8"
              complete={completion[phase] || false}
              trigger={questions[3] === 0}
              visible={questions[3] === 0}
              text={` Correct: This is because there will be more matches when
                parasites are unrelated, so there will less of a difference in
                IBS between related and unrelated parasites. They will all have
                a fairly high number of matches. For example, 12/12 matches (IBS
                of 1.0) is still uncommon but no longer extremely rare for
                completely unrelated parasites, at around 1%, and over 20% of
                comparisons will have 10/12 or more matches (IBS>0.8)!`}
            />
            {/* <div
              className={`${questions[3] === 0 ? "fadeIn500" : "invisible"} mt-8 bg-primaryBlue/10 p-4 md:p-8`}
            >
              <p className="text-sm">
                Correct: This is because there will be more matches when
                parasites are unrelated, so there will less of a difference in
                IBS between related and unrelated parasites. They will all have
                a fairly high number of matches. For example, 12/12 matches (IBS
                of 1.0) is still uncommon but no longer extremely rare for
                completely unrelated parasites, at around 1%, and over 20% of
                comparisons will have 10/12 or more matches (IBS&gt;0.8)!
              </p>
            </div> */}
          </div>
        )}
      </div>
      <div>
        <FormHeader text={`IBS Probability`} />
        <div>
          <div
            className={
              (phase === 8 && questions[1] === 1) ||
              (phase >= 9 && questions[2] === 0)
                ? "border-2 border-primaryBlue"
                : ""
            }
          >
            {phase === 8 && questions[1] === 1 ? (
              <ImageContainer
                className="fadeIn500"
                path="/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
                label="SNP Match Probability - 50/50 Allele Distribution"
                id="50-50-snp"
              />
            ) : phase >= 9 && questions[2] === 0 ? (
              <ImageContainer
                className={`fadeIn500`}
                path="/assets/M5_sluething_histogram_8020SNPs_MOI1_IBD0.svg"
                label="SNP Match Probability - 80/20 Allele Distribution"
                id="80-20-snp"
              />
            ) : null}
          </div>
          {/* {phase >= 9 && questions[2] === 0 && (
            <ImageContainer
              className={`fadeIn500 border-2 border-primaryBlue`}
              path="/assets/M5_sluething_histogram_8020SNPs_MOI1_IBD0.svg"
              label="SNP Match Probability - 80/20 Allele Distribution"
              id="80-20-snp"
            />
          )}
          {phase === 8 && questions[1] === 1 && (
            <ImageContainer
              className="fadeIn500 border-2 border-primaryBlue"
              path="/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
              label="SNP Match Probability - 50/50 Allele Distribution"
              id="50-50-snp"
            />
          )} */}
        </div>
      </div>
    </StandardLayout>
  );

  return (
    <StandardLayout>
      <div>
        <div className="mb-12 text-center text-xl font-bold md:text-left">
          <h2>IBS Probability</h2>
        </div>
        <div className="text-center">
          <label>50/50 allele frequency</label>
          <Image
            height={400}
            width={600}
            alt="SNP IBD 50% distributionw diagram"
            src="/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
          ></Image>
        </div>
        <div
          className={`${questions[2] === 0 ? "fadeIn500 hidden md:block" : "hidden"} mt-24 text-center`}
        >
          <label>80/20 allele frequency</label>

          <Image
            height={400}
            width={600}
            alt="SNP IBD 50% distributionw diagram"
            src="/assets/M5_sluething_histogram_8020SNPs_MOI1_IBD0.svg"
          ></Image>
        </div>
      </div>
      <div>
        <div className="mb-12 text-center text-xl font-bold md:text-left">
          <h2>Questions</h2>
        </div>
        <div className="flex flex-col gap-8">
          <KnowledgeCheckQuestion
            callback={(questionIdx, answerIdx) => {
              if (questions[1] === answerIdx) {
                setQuestions({ ...questions, 1: null });
              } else {
                setQuestions({ ...questions, 1: answerIdx });
              }
            }}
            hasAnswer={questions[1] === 1}
            classNames={{
              answersContainer: "mt-4 grid grid-cols-2 md:grid-cols-1 gap-2",
            }}
            headerText="Based on this, do you think it is likely that all 12 loci would match if parasites are unrelated?"
            questionIdx={1}
            answers={[
              {
                checked: questions[1] === 0,
                correct: false,
                index: 0,
                text: "Yes",
              },
              {
                checked: questions[1] === 1,
                correct: true,
                index: 1,
                text: "No",
              },
            ]}
          />
          <div
            className={
              questions[1] !== 1
                ? "hidden  bg-primaryBlue/10  p-4 md:p-8"
                : "fadeIn500 bg-primaryBlue/10  p-4 md:p-8"
            }
          >
            <p>
              Correct: It is very unlikely that they would all match by chance;
              the probability is the same as none of them matching, around
              0.02%. It also unlikely ( &lt;1% chance) that 11 of the 12 would
              match.
            </p>
          </div>
          <div
            style={{
              animationDelay: "1000ms",
            }}
            className={`${questions[1] === 1 ? "fadeIn500" : "invisible"}`}
          >
            <KnowledgeCheckQuestion
              callback={(questionIdx, answerIdx) => {
                if (questions[2] === answerIdx) {
                  setQuestions({ ...questions, 2: null });
                } else {
                  setQuestions({ ...questions, 2: answerIdx });
                }
              }}
              hasAnswer={questions[2] === 0}
              classNames={{
                answersContainer: "mt-4 grid grid-cols-2 md:grid-cols-1 gap-2",
              }}
              headerText="This scenario is somewhat optimistic in that the SNPs are perfectly diverse. In a more realistic situation if SNP allele frequencies were not actually 50/50 but e.g. 80/20 would we expect more or fewer matches?"
              questionIdx={1}
              answers={[
                {
                  checked: questions[2] === 0,
                  correct: true,
                  index: 0,
                  text: "More matches",
                },
                {
                  checked: questions[2] === 1,
                  correct: false,
                  index: 1,
                  text: "Fewer matches",
                },
              ]}
            />
            <div
              className={
                questions[2] !== 0
                  ? "invisible  mt-8 bg-primaryBlue/10  p-4 md:p-8"
                  : "fadeIn500 mt-8 bg-primaryBlue/10  p-4 md:p-8"
              }
            >
              <p>
                You would expect more matches since there is less diversity. The
                more common allele would be more likely to be present in both
                parasites, and so they would match more often, about 70% of the
                time. For the 80/20 case, the probability of seeing different
                numbers of matches is shown here.
              </p>
            </div>
            <div
              className={`${questions[2] === 0 ? "" : "hidden"} mt-8 text-center md:hidden`}
            >
              <label>80/20 allele frequency</label>

              <Image
                height={400}
                width={600}
                alt="SNP IBD 50% distributionw diagram"
                src="/assets/M5_sluething_histogram_8020SNPs_MOI1_IBD0.svg"
              ></Image>
            </div>
            <div
              style={{
                animationDelay: "1000ms",
              }}
              className={`${questions[2] === 0 ? "fadeIn500" : "hidden"} mt-8`}
            >
              <KnowledgeCheckQuestion
                classNames={{
                  answersContainer:
                    "mt-4 grid grid-cols-2 md:grid-cols-1 gap-2",
                }}
                answers={[
                  {
                    checked: questions[3] === 0,
                    correct: true,
                    index: 0,
                    text: "Harder",
                  },
                  {
                    checked: questions[3] === 1,
                    correct: false,
                    index: 1,
                    text: "Easier",
                  },
                ]}
                callback={(questionIdx, answerIdx) => {
                  console.log("called");
                  if (questions[3] === answerIdx) {
                    setQuestions({ ...questions, 3: null });
                  } else {
                    setQuestions({ ...questions, 3: answerIdx });
                  }
                }}
                hasAnswer={questions[3] === 0}
                headerText="Do you think this would make it harder or easier to distinguish related from unrelated parasites?"
                questionIdx={3}
              />
            </div>
            <div
              className={`${questions[3] === 0 ? "fadeIn500" : "invisible"} mt-8 bg-primaryBlue/10 p-4 md:p-8`}
            >
              <p>
                Correct: This is because there will be more matches when
                parasites are unrelated, so there will less of a difference in
                IBS between related and unrelated parasites. They will all have
                a fairly high number of matches. For example, 12/12 matches (IBS
                of 1.0) is still uncommon but no longer extremely rare for
                completely unrelated parasites, at around 1%, and over 20% of
                comparisons will have 10/12 or more matches (IBS&gt;0.8)!
              </p>
            </div>
          </div>
        </div>
      </div>
    </StandardLayout>
  );
}
