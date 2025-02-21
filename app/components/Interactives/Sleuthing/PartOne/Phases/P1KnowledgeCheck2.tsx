import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";
import AlleleDistribution from "../AlleleDistribution/AlleleDistribution";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";
import Image from "next/image";
import ImageContainer from "@/app/components/Interactives/Shared/misc/ImageContainer";

export const newP1QuestionsAtom = atomWithStorage<{
  [key: number]: null | number | number[];
  2: number[];
}>("newP1QuestionsAtom", {
  1: null,
  2: [],
  3: null,
  4: null,
  5: null,
  6: null,
});

export default function P1KnowledgeCheck2() {
  const [newQuestions, setNewQuestions] = useAtom(newP1QuestionsAtom);

  // useEffect(() => {
  //   setNewQuestions({
  //     1: null,
  //     2: [],
  //     3: null,
  //     4: null,
  //     5: null,
  //     6: null,
  //   });
  // }, []);

  return (
    <InteractivePrimaryLayout
      leftHeader={"Allele Count"}
      leftContent={<AlleleDistribution />}
      rightHeader={"Questions"}
      rightContent={
        <div className="grid">
          <KnowledgeCheckQuestion
            trigger={false}
            answers={[
              {
                checked: newQuestions[1] === 1,
                correct: false,
                index: 1,
                text: "Yes",
              },
              {
                checked: newQuestions[1] === 2,
                correct: true,
                index: 2,
                text: "No",
              },
            ]}
            classNames={{
              headerText: "mb-4",
              answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
              answers: "w-4 md:w-3 lg:w-4",
            }}
            callback={(questionIdx, answerIdx) => {
              setNewQuestions({
                ...newQuestions,
                [questionIdx]:
                  newQuestions[questionIdx] === answerIdx ? null : answerIdx,
              });
            }}
            questionIdx={1}
            hasAnswer={newQuestions[1] === 2}
            headerText="1. Should you get any heterozygous loci – loci containing more than a single allele - when you genotype a control containing a single clone?"
          />
          <QuestionResponseText
            className="mt-4"
            visible={newQuestions[1] === 2}
            text={`That’s right – if there is only one clone present in the sample, we should only get one allele at each locus. Therefore, each locus should be homozygous (containing a single allele) not heterozygous (containing multiple alleles).`}
          />
          {newQuestions[1] === 2 && (
            <div className="mt-8 flex flex-col gap-4">
              <KnowledgeCheckQuestion
                style={{
                  animationDelay: `1000ms`,
                }}
                triggerEnd
                answers={[
                  {
                    checked: newQuestions[2].includes(1),
                    correct: true,
                    index: 1,
                    text: "The assay is not working correctly",
                  },
                  {
                    checked: newQuestions[2].includes(2),
                    correct: true,
                    index: 2,
                    text: "The assay is generating false positives",
                  },
                  {
                    checked: newQuestions[2].includes(3),
                    correct: true,
                    index: 3,
                    text: "Your sample is contaminated",
                  },
                  {
                    checked: newQuestions[2].includes(4),
                    correct: true,
                    index: 4,
                    text: "You mixed up the sample, i.e. the sample isn’t what you think it is",
                  },
                  {
                    checked: newQuestions[2].includes(5),
                    correct: false,
                    index: 5,
                    text: "You forgot to add the sample DNA",
                  },
                ]}
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                  container: "fadeIn1000",
                }}
                callback={(questionIdx, answerIdx) => {
                  let x = newQuestions[2].slice();
                  if (x.includes(answerIdx)) {
                    x.splice(x.indexOf(answerIdx), 1);
                  } else {
                    x.push(answerIdx);
                  }
                  setNewQuestions({ ...newQuestions, 2: x });
                  // setNewQuestions({
                  //   ...newQuestions,
                  //   [questionIdx]:
                  //     newQuestions[questionIdx].includes(answerIdx)
                  //       ? null
                  //       : answerIdx,
                  // });
                }}
                questionIdx={2}
                hasAnswer={
                  newQuestions[2].includes(1) &&
                  newQuestions[2].includes(2) &&
                  newQuestions[2].includes(3) &&
                  newQuestions[2].includes(4) &&
                  !newQuestions[2].includes(5)
                }
                headerText="2. If you did get heterozygous loci when genotyping a single clone, what are some possible explanations?"
              />
              <QuestionResponseText
                visible={
                  newQuestions[2].includes(1) &&
                  newQuestions[2].includes(2) &&
                  newQuestions[2].includes(3) &&
                  newQuestions[2].includes(4) &&
                  !newQuestions[2].includes(5)
                }
                text={`The last option is not correct – if you forgot to add sample DNA you should detect no alleles, not too many.  All of the other options represent possible explanations for why you could get heterozygous allele data from a single clone.`}
              />
            </div>
          )}
          {newQuestions[2].includes(1) &&
            newQuestions[2].includes(2) &&
            newQuestions[2].includes(3) &&
            newQuestions[2].includes(4) &&
            !newQuestions[2].includes(5) && (
              <div className="mt-8 flex flex-col gap-4">
                <KnowledgeCheckQuestion
                  style={{
                    animationDelay: `1000ms`,
                  }}
                  triggerEnd
                  answers={[
                    {
                      checked: newQuestions[3] === 1,
                      correct: false,
                      index: 1,
                      text: "Nothing, these are only controls not “real” data.",
                    },
                    {
                      checked: newQuestions[3] === 2,
                      correct: false,
                      index: 2,
                      text: "Nothing, it is ok to get incorrect results some of the time. No assay is perfect",
                    },
                    {
                      checked: newQuestions[3] === 3,
                      correct: true,
                      index: 3,
                      text: "Rigorously investigate the potential source of the error, so you know what the source is and how to interpret data on clinical samples.",
                    },
                  ]}
                  classNames={{
                    headerText: "mb-4",
                    answersContainer: "grid gap-8 md:gap-4",
                    answers: "w-4 md:w-3 lg:w-4",
                    container: "fadeIn1000",
                  }}
                  callback={(questionIdx, answerIdx) => {
                    setNewQuestions({
                      ...newQuestions,
                      [questionIdx]:
                        newQuestions[questionIdx] === answerIdx
                          ? null
                          : answerIdx,
                    });
                  }}
                  questionIdx={3}
                  hasAnswer={newQuestions[3] === 3}
                  headerText="3. If you got heterozygous loci from a single clone, what should you do? (choose one)"
                />
                <QuestionResponseText
                  visible={newQuestions[3] === 3}
                  text={`Controls are the most important samples you will ever run on a laboratory assay. They tell you if your assay is working or not so you know how to interpret the data. If your controls are giving you wrong results, you should not trust any other results until you thoroughly investigate the source of the problem and correct it.`}
                />
              </div>
            )}
          {newQuestions[3] === 3 && (
            <div className="mt-8 flex flex-col gap-4">
              <KnowledgeCheckQuestion
                style={{
                  animationDelay: `1000ms`,
                }}
                triggerEnd
                answers={[
                  {
                    checked: newQuestions[4] === 1,
                    correct: false,
                    index: 1,
                    text: "Definitely yes.",
                  },
                  {
                    checked: newQuestions[4] === 2,
                    correct: false,
                    index: 2,
                    text: "Definitely not.",
                  },
                  {
                    checked: newQuestions[4] === 3,
                    correct: true,
                    index: 3,
                    text: "Possibly, but extremely unlikely.",
                  },
                ]}
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                  container: "fadeIn1000",
                }}
                callback={(questionIdx, answerIdx) => {
                  setNewQuestions({
                    ...newQuestions,
                    [questionIdx]:
                      newQuestions[questionIdx] === answerIdx
                        ? null
                        : answerIdx,
                  });
                }}
                questionIdx={4}
                hasAnswer={newQuestions[4] === 3}
                headerText={
                  "4. If all 12 of your loci are heterozygous, does that mean you have exactly 2 clones? "
                }
              />
              <QuestionResponseText
                visible={newQuestions[4] === 3}
                text={`It definitely means that you have more than one clone, but two clones would not be likely to give you heterozygous calls at ALL the loci. Based on the controls that you have created, it seems you would require a fairly high MOI for this to be likely. Recall, how many of your loci were heterozygous when genotyping controls with an MOI of 2? Of 4?`}
              />
            </div>
          )}
          {newQuestions[4] === 3 && (
            <div className="mt-8 flex flex-col gap-4">
              <KnowledgeCheckQuestion
                style={{
                  animationDelay: `1000ms`,
                }}
                triggerEnd
                answers={[
                  {
                    checked: newQuestions[5] === 1,
                    correct: false,
                    index: 1,
                    text: "It is more likely that you have a monoclonal sample and a lot of false positives.",
                  },
                  {
                    checked: newQuestions[5] === 2,
                    correct: false,
                    index: 2,
                    text: "12 heterozygous loci means you have an MOI of 12, not 2.",
                  },
                  {
                    checked: newQuestions[5] === 3,
                    correct: true,
                    index: 3,
                    text: "You would expect at least some of the loci to have the same allele for the two clones, so most likely at least some will have a single allele.",
                  },
                  {
                    checked: newQuestions[5] === 4,
                    correct: false,
                    index: 4,
                    text: "The likelihood of having two clones with different SNPs at each locus is low because each SNP occurs independently and randomly.",
                  },
                ]}
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                  container: "fadeIn1000",
                }}
                callback={(questionIdx, answerIdx) => {
                  setNewQuestions({
                    ...newQuestions,
                    [questionIdx]:
                      newQuestions[questionIdx] === answerIdx
                        ? null
                        : answerIdx,
                  });
                }}
                questionIdx={5}
                hasAnswer={newQuestions[5] === 3}
                headerText={
                  "5. Why is it extremely unlikely that you would have 2 clones when all of your 12 loci are heterozygous?"
                }
              />
              <QuestionResponseText
                visible={newQuestions[5] === 3}
                text={`With two perfectly balanced SNPs as in this exercise, there is a 50/50 chance you will get the reference or alternate allele. Therefore, getting a heterozygous SNP genotype with two clones is like flipping two coins and getting heads on one and tails on the other - this will happen 50% of the time. Doing the two-coin flip and having them be different from each other 12 times in a row is very unlikely (<0.02% chance)! The same is true for 12 loci - you would expect somewhere around 6 of them to be heterozygous, maybe a few more, maybe a few less, but very unlikely to be all 12.`}
              />
            </div>
          )}
          {newQuestions[5] === 3 && (
            <div className="mt-8 flex flex-col gap-4">
              <KnowledgeCheckQuestion
                style={{
                  animationDelay: `1000ms`,
                }}
                triggerEnd
                answers={[
                  {
                    checked: newQuestions[6] === 1,
                    correct: true,
                    index: 1,
                    text: "Yes",
                  },
                  {
                    checked: newQuestions[6] === 2,
                    correct: false,
                    index: 2,
                    text: "No",
                  },
                ]}
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                  container: "fadeIn1000",
                }}
                callback={(questionIdx, answerIdx) => {
                  setNewQuestions({
                    ...newQuestions,
                    [questionIdx]:
                      newQuestions[questionIdx] === answerIdx
                        ? null
                        : answerIdx,
                  });
                }}
                questionIdx={6}
                hasAnswer={newQuestions[6] === 1}
                headerText={
                  "6. Would you expect to get any heterozygous loci when you genotype a control containing 4 clones?"
                }
              />
              <QuestionResponseText
                visible={newQuestions[6] === 1}
                text={`It is very likely, particularly in this scenario where you know the alleles are perfectly balanced. You are likely to get at least some loci where  you have at least one of each allele.`}
              />
            </div>
          )}
          {newQuestions[6] === 1 && (
            <div className="mt-8 flex flex-col gap-4">
              <KnowledgeCheckQuestion
                style={{
                  animationDelay: `1000ms`,
                }}
                triggerEnd
                answers={[
                  {
                    checked: newQuestions[7] === 1,
                    correct: true,
                    index: 1,
                    text: "Yes - but exceedingly unlikely!",
                  },
                  {
                    checked: newQuestions[7] === 2,
                    correct: false,
                    index: 2,
                    text: "No",
                  },
                ]}
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                  container: "fadeIn1000",
                }}
                callback={(questionIdx, answerIdx) => {
                  setNewQuestions({
                    ...newQuestions,
                    [questionIdx]:
                      newQuestions[questionIdx] === answerIdx
                        ? null
                        : answerIdx,
                  });
                }}
                questionIdx={7}
                hasAnswer={newQuestions[7] === 1}
                headerText={
                  "7. Is it possible that you could genotype a control containing 4 clones but get no heterozygous loci using 12 perfectly balanced SNPs?"
                }
              />
              <QuestionResponseText
                visible={newQuestions[7] === 1}
                text={`It is possible, but very unlikely. To NOT get any heterozygous loci, this would be like flipping four coins and having them all land heads or all land tails, then doing that 12 times in a row!`}
              />
            </div>
          )}
          {newQuestions[7] === 1 && (
            <div className="mt-8 flex flex-col gap-4">
              <KnowledgeCheckQuestion
                style={{
                  animationDelay: `1000ms`,
                }}
                triggerEnd
                answers={[
                  {
                    checked: newQuestions[8] === 1,
                    correct: true,
                    index: 1,
                    text: "The higher the MOI, the higher the proportion of loci that are heterozygous.",
                  },
                  {
                    checked: newQuestions[8] === 2,
                    correct: false,
                    index: 2,
                    text: "The lower the MOI, the higher the proportion of loci that are heterozygous.",
                  },
                  {
                    checked: newQuestions[8] === 3,
                    correct: false,
                    index: 3,
                    text: "MOI and the proportion of heterozygous loci are not related.",
                  },
                ]}
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                  container: "fadeIn1000",
                }}
                callback={(questionIdx, answerIdx) => {
                  setNewQuestions({
                    ...newQuestions,
                    [questionIdx]:
                      newQuestions[questionIdx] === answerIdx
                        ? null
                        : answerIdx,
                  });
                }}
                questionIdx={8}
                hasAnswer={newQuestions[8] === 1}
                headerText={
                  "8. What do you notice about the relationship between MOI and the number of loci that are heterzygous?"
                }
              />
              <QuestionResponseText
                visible={newQuestions[8] === 1}
                content={
                  <div>
                    <div
                      className={
                        "bg-interactiveBlue/10 text-pretty p-4 leading-[23px] dark:bg-zinc-900/50 dark:text-emerald-400 md:p-6 md:px-8"
                      }
                    >
                      <p>
                        You should have noticed that the higher the MOI, the
                        higher proportion of loci that are heterozygous. The
                        exact proportion you would expect for a given MOI will
                        depend on how diverse each SNP is in the population and
                        to some extent on random variation. In this example,
                        each of the 12 SNPs is perfectly balanced like a coin,
                        maximizing diversity.
                      </p>
                    </div>
                    <ImageContainer
                      className="border-x-interactiveBlue/10 border-x-[32px] dark:border-zinc-900/50"
                      id=""
                      label="Heterozygous Allele Distribution"
                      path="/InteractiveAssets/M2_sluething_histogram_number_hetero_SNPs_MOI2to4.svg"
                    />
                    <div
                      className={
                        "bg-interactiveBlue/10 text-pretty p-4 leading-[23px] dark:bg-zinc-900/50 dark:text-emerald-400 md:p-6 md:px-8"
                      }
                    >
                      <p>
                        The histogram shows the expected number of heterozygous
                        loci for different MOI with 12 perfectly balanced SNPs.
                        In practice, most SNPs are not perfectly diverse, and
                        diversity for a given SNP will likely vary in different
                        settings, even within a country. The more SNPs you have
                        and the more diverse each one is, the more precisely you
                        can estimate MOI.
                      </p>
                    </div>
                  </div>
                }
                // text={` You should have noticed that the higher the MOI, the higher proportion of loci that are heterozygous. The exact proportion you would expect for a given MOI will depend on how diverse each SNP is in the population and to some extent on random variation. In this example, each of the 12 SNPs is perfectly balanced like a coin, maximizing diversity. The histogram shows the expected number of heterozygous loci for different MOI with 12 perfectly balanced SNPs. In practice, most SNPs are not perfectly diverse, and diversity for a given SNP will likely vary in different settings, even within a country. The more SNPs you have and the more diverse each one is, the more precisely you can estimate MOI. `}
              />
            </div>
          )}
        </div>
      }
    />
  );
}
