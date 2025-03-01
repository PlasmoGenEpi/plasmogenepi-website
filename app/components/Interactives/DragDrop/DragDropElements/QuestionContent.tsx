import {
  dragDropCompletionAtom,
  dragDropQuestionsAtom,
  phase3Atom,
} from "@/data/Interactives/interactiveStore";
import KnowledgeCheckQuestion from "../../Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import FormHeader from "../../Shared/misc/FormHeader";
import { useAtom, useAtomValue } from "jotai";
import { useCallback, useEffect, useRef } from "react";
import QuestionResponseText from "../../Shared/misc/QuestionResponseText";
import MultiRowLayout from "../../Shared/misc/MultiRowLayout";
import { chimaeraPlacedAtom } from "./ReferenceGenome";
import InteractivePrimaryLayout from "../../Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import { currentView3Atom } from "../../Shared/InteractiveViewer/InteractiveViewer";
import Trash from "./Trash";
import DraggableRead from "./DraggableRead";
import Read from "./Read";
const topDistanceIncludingBorder = 172;
const borderWidth = 24;
const paddingFromBorder = topDistanceIncludingBorder - borderWidth;
const paddingLeft = 32;
const paddingRight = 64;
const rowHeight = 32;
const rowDistance = 32;
const charSize = 18;
const readStartOffset = 18;
const dropContainerWidth = 1148;

export default function QuestionContent() {
  // const phase = useAtomValue(phase3Atom);
  const [questions, setQuestions] = useAtom(dragDropQuestionsAtom);
  const chimaeraPlaced = useAtomValue(chimaeraPlacedAtom);
  const [completion, setCompletion] = useAtom(dragDropCompletionAtom);
  const currentView = useAtomValue(currentView3Atom);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { phase, section } = currentView;

  const answerQuestion = useCallback(
    (questionIdx: number, answerIdx: number) => {
      if (questions[questionIdx] === answerIdx) {
        setQuestions({ ...questions, [questionIdx]: null });
      } else {
        setQuestions({ ...questions, [questionIdx]: answerIdx });
      }
    },
    [questions, setQuestions],
  );

  // useEffect(() => {
  //   setQuestions({
  //     ...questions,
  //     3: undefined,
  //     4: undefined,
  //     5: undefined,
  //     6: undefined,
  //     7: undefined,
  //   });
  //   setCompletion({ ...completion, 11: false, 10.5: false });
  // }, [phase]);

  // return (
  //   <div className="mx-auto my-12 max-w-6xl px-4">
  //     <FormHeader text="Questions" />
  //     <div className="flex flex-col gap-8">
  //       <div>
  //         <KnowledgeCheckQuestion
  //           classNames={{
  //             container: "w-fit",
  //             answers: "mr-auto",
  //             answersContainer:
  //               "grid gap-y-4 gap-x-24 grid-cols-2 mt-4 justify-between",
  //           }}
  //           answers={[
  //             {
  //               checked: questions[1] === 0,
  //               correct: true,
  //               index: 0,
  //               text: "2",
  //             },
  //             {
  //               checked: questions[1] === 1,
  //               correct: false,
  //               index: 1,
  //               text: "4",
  //             },
  //             {
  //               checked: questions[1] === 2,
  //               correct: false,
  //               index: 2,
  //               text: "6",
  //             },
  //             {
  //               checked: questions[1] === 3,
  //               correct: false,
  //               index: 3,
  //               text: "10",
  //             },
  //           ]}
  //           hasAnswer={questions[1] === 0}
  //           callback={answerQuestion}
  //           questionIdx={1}
  //           headerText="How many loci do we have reads for in this example?"
  //         />
  //         <QuestionResponseText
  //           className="mt-4"
  //           trigger={questions[1] === 0}
  //           visible={questions[1] === 0}
  //           text={`Correct!
  //           Locus (plural: "loci") refers to a specific position or location on a chromosome where a particular gene or DNA sequence is located. In this example, there are two loci that denote the location of the sequence generated reads.`}
  //         />
  //       </div>
  //       <div>
  //         <KnowledgeCheckQuestion
  //           classNames={{
  //             container: "",
  //             answers: "mr-auto",
  //             answersContainer: "grid gap-y-4 mt-4 justify-between",
  //           }}
  //           answers={[
  //             {
  //               checked: questions[1] === 0,
  //               correct: true,
  //               index: 0,
  //               text: "5 in locus 1; 5 in locus 2",
  //             },
  //             {
  //               checked: questions[1] === 1,
  //               correct: false,
  //               index: 1,
  //               text: "6 in locus 1; 4 in locus 2",
  //             },
  //             {
  //               checked: questions[1] === 2,
  //               correct: false,
  //               index: 2,
  //               text: "10 in locus 1; 0 in locus 2",
  //             },
  //             {
  //               checked: questions[1] === 3,
  //               correct: false,
  //               index: 3,
  //               text: "0 in locus 1; 10 in locus 2",
  //             },
  //           ]}
  //           hasAnswer={questions[1] === 0}
  //           callback={answerQuestion}
  //           questionIdx={1}
  //           headerText="How many reads are there in each locus?"
  //         />
  //         <QuestionResponseText
  //           trigger={questions[1] === 0}
  //           visible={questions[1] === 0}
  //           text={`Correct!
  //           Locus (plural: "loci") refers to a specific position or location on a chromosome where a particular gene or DNA sequence is located. In this example, there are two loci that denote the location of the sequence generated reads.`}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );

  // useEffect(() => {
  //   if (phase === 3 && !completion) {
  //     container?.current?.scrollIntoView({
  //       behavior: "smooth",
  //       // block: "end",
  //     });
  //   }
  // }, [phase]);

  // if (phase < 4) {
  //   return (
  //     <div className="max-w-6xl mx-auto px-4 my-12">
  //       <div
  //         ref={container}
  //         className={`grid md:grid-cols-2 gap-12 ${
  //           phase < 3 ? "invisible" : "visible"
  //         }`}
  //       >
  //         <KnowledgeCheckQuestion
  //           triggerEnd
  //           trigger={phase === 4}
  //           classNames={{
  //             container: "",
  //             answers: "mr-auto",
  //             answersContainer: "grid gap-y-4 grid-cols-4 mt-4",
  //           }}
  //           answers={[
  //             {
  //               checked: questions[1] === 0,
  //               correct: true,
  //               index: 0,
  //               text: "2",
  //             },
  //             {
  //               checked: questions[1] === 1,
  //               correct: false,
  //               index: 1,
  //               text: "4",
  //             },
  //             {
  //               checked: questions[1] === 2,
  //               correct: false,
  //               index: 2,
  //               text: "6",
  //             },
  //             {
  //               checked: questions[1] === 3,
  //               correct: false,
  //               index: 3,
  //               text: "10",
  //             },
  //           ]}
  //           hasAnswer={questions[1] === 0}
  //           callback={answerQuestion}
  //           questionIdx={1}
  //           headerText="How many loci do we have reads for in this example?"
  //         />
  //       </div>
  //     </div>
  //   );
  //   // return <InteractivePrimaryLayout
  //   // leftHeader={`Questions`}
  //   // leftContent={}
  //   // rightHeader={``}
  //   // rightContent={}
  //   // />
  // }

  // return <InteractivePrimaryLayout
  // leftHeader={`Questions`}
  // leftContent={}
  // rightHeader={``}
  // rightContent={``}
  // />

  // useEffect(() => {
  //   setQuestions({ ...questions, 7: null });
  // }, []);

  useEffect(() => {
    const { section, phase } = currentView;
    if (section === 1) {
      if (phase === 1 && !completion?.[1]?.[phase]) {
        containerRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    } else if (section === 2) {
      if ((phase === 1 || phase === 3) && !completion?.[2]?.[phase]) {
        containerRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    } else if (section === 3) {
      if ((phase === 1 || phase === 2) && !completion?.[3]?.[phase]) {
        containerRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [currentView]);

  if (section === 1) {
    return (
      <div
        ref={containerRef}
        className={`mx-auto my-8 max-w-6xl px-4 ${
          phase === 1
            ? `${questions[1] !== 0 ? "fadeIn500" : "visible"}`
            : "invisible"
        }`}
      >
        <InteractivePrimaryLayout
          leftHeader={`Questions`}
          rightHeader={``}
          leftContent={
            <div className="flex flex-col gap-4 ">
              <KnowledgeCheckQuestion
                triggerEnd
                trigger={phase === 1}
                classNames={{
                  container: "",
                  answers: "mr-auto",
                  answersContainer:
                    "grid gap-y-4 gap-x-24 grid-cols-2 mt-4 justify-between",
                }}
                answers={[
                  {
                    checked: questions[1] === 0,
                    correct: true,
                    index: 0,
                    text: "2",
                  },
                  {
                    checked: questions[1] === 1,
                    correct: false,
                    index: 1,
                    text: "4",
                  },
                  {
                    checked: questions[1] === 2,
                    correct: false,
                    index: 2,
                    text: "6",
                  },
                  {
                    checked: questions[1] === 3,
                    correct: false,
                    index: 3,
                    text: "10",
                  },
                ]}
                hasAnswer={questions[1] === 0}
                callback={answerQuestion}
                questionIdx={1}
                headerText="How many loci do we have reads for in this example?"
              />
              <QuestionResponseText
                className="row-start-2 w-0 min-w-full md:row-start-auto"
                // trigger={questions[1] === 0}
                visible={questions[1] === 0}
                content={
                  <div
                    className={
                      "text-pretty bg-interactiveBlue/10 p-4 leading-[23px] dark:bg-zinc-900/50 dark:text-emerald-400 md:p-6 md:px-8"
                    }
                  >
                    <p>
                      Correct! Locus (plural: "loci") refers to a specific
                      position or location on a chromosome where a particular
                      gene or DNA sequence is located. In this example, there
                      are two loci that denote the location of the sequence
                      generated reads.
                    </p>
                  </div>
                }
              />
            </div>
          }
          rightContent={
            <div className="flex flex-col gap-4">
              <KnowledgeCheckQuestion
                trigger={false}
                classNames={{
                  container: `${
                    questions[1] === 0 && phase === 1
                      ? `fadeIn500 [animationDelay:2000ms]`
                      : "hidden"
                  }`,
                  answers: "mr-auto",
                  answersContainer:
                    "grid gap-y-4 mt-4 gap-x-12 justify-between grid-cols-2",
                }}
                answers={[
                  {
                    checked: questions[2] === 0,
                    correct: false,
                    index: 0,
                    text: "5 in locus 1, 5 in locus 2",
                  },
                  {
                    checked: questions[2] === 1,
                    correct: true,
                    index: 1,
                    text: "6 in locus 1, 4 in locus 2",
                  },
                  {
                    checked: questions[2] === 2,
                    correct: false,
                    index: 2,
                    text: "10 in locus 1, 0 in locus 2",
                  },
                  {
                    checked: questions[2] === 3,
                    correct: false,
                    index: 3,
                    text: "0 in locus 1, 10 in locus 2",
                  },
                ]}
                hasAnswer={questions[2] === 1}
                callback={answerQuestion}
                questionIdx={2}
                headerText="How many reads are there in each locus?"
              />
              <QuestionResponseText
                // trigger={questions[2] === 1}
                visible={questions[2] === 1}
                content={
                  <div
                    className={
                      "text-pretty bg-interactiveBlue/10 p-4 leading-[23px] dark:bg-zinc-900/50 dark:text-emerald-400 md:p-6 md:px-8"
                    }
                  >
                    <p>
                      This is what we call{" "}
                      <span className="font-bold italic">
                        sequencing depth:
                      </span>{" "}
                      we have a depth of 6 reads in locus 1 and 4 reads in locus
                      2. You were able to get these numbers because you aligned
                      the reads to a reference genome.
                    </p>
                  </div>
                }
              />
            </div>
          }
        />
      </div>
    );
  }

  if (section === 2) {
    return (
      <div
        className={`mx-auto my-8 max-w-6xl overflow-visible px-4 ${
          phase === 1 || phase === 3
            ? `${questions[1] !== 0 ? "fadeIn500" : "visible"}`
            : "invisible"
        }`}
      >
        <h6 ref={containerRef} className="mb-8 text-lg font-bold">
          Questions
        </h6>
        {phase < 2 && (
          <div className="flex flex-col gap-4 ">
            <KnowledgeCheckQuestion
              trigger={!completion[7.5]}
              classNames={{
                container: "",
                answers: "mr-auto",
                answersContainer: "grid gap-y-4 mt-4 justify-between",
              }}
              headerText="Which of the following describes the reads that you discarded?  Choose all that apply."
              answers={[
                {
                  checked: Array.isArray(questions[0])
                    ? questions[0].includes(0)
                    : false,
                  correct: true,
                  index: 0,
                  text: "Chimera",
                },
                {
                  checked: Array.isArray(questions[0])
                    ? questions[0].includes(1)
                    : false,
                  correct: true,
                  index: 1,
                  text: "Off target",
                },
                {
                  checked: Array.isArray(questions[0])
                    ? questions[0].includes(2)
                    : false,
                  correct: false,
                  index: 2,
                  text: "Mutations",
                },
                {
                  checked: Array.isArray(questions[0])
                    ? questions[0].includes(3)
                    : false,
                  correct: false,
                  index: 3,
                  text: "High quality read",
                },
              ]}
              hasAnswer={
                Array.isArray(questions[0]) &&
                questions[0].includes(0) &&
                questions[0].includes(1) &&
                !questions[0].includes(2) &&
                !questions[0].includes(3)
              }
              callback={(questionIdx, answerIdx) => {
                if (
                  Array.isArray(questions[0]) &&
                  questions[0].includes(answerIdx)
                ) {
                  let copyArr = [...questions[0]];
                  let x = copyArr.indexOf(answerIdx);
                  copyArr.splice(x, 1);
                  setQuestions({ ...questions, 0: copyArr });
                  // copyArr.splice()
                } else {
                  if (Array.isArray(questions[0])) {
                    let copyArr = [...questions[0]];
                    copyArr.push(answerIdx);
                    setQuestions({ ...questions, 0: copyArr });
                  } else {
                    setQuestions({ ...questions, 0: [answerIdx] });
                  }
                }
              }}
              questionIdx={0}
            />
            <QuestionResponseText
              className=""
              visible={
                Array.isArray(questions[0]) &&
                questions[0].includes(0) &&
                questions[0].includes(1) &&
                !questions[0].includes(2) &&
                !questions[0].includes(3)
              }
              text={[
                `
                  Correct - Two of these are off target reads which do not align anywhere. One of these is a chimera, where part of the read aligns still in the locus and another part aligns to another locus.`,
              ]}
            />
          </div>
        )}
        {phase < 2 && (
          <div
            className={`mt-8 flex flex-col gap-4  ${
              Array.isArray(questions[0]) &&
              questions[0].includes(0) &&
              questions[0].includes(1) &&
              !questions[0].includes(2) &&
              !questions[0].includes(3)
                ? "fadeIn500"
                : "invisible"
            }`}
          >
            <KnowledgeCheckQuestion
              answers={[
                {
                  checked: questions[10] === 1,
                  correct: true,
                  index: 1,
                  text: "A",
                },
                {
                  checked: questions[10] === 2,
                  correct: false,
                  index: 2,
                  text: "B",
                },
                {
                  checked: questions[10] === 3,
                  correct: false,
                  index: 3,
                  text: "C",
                },
              ]}
              classNames={{
                container: "",
                answers: "mr-auto",
                answersContainer: "grid gap-y-4 mt-4 justify-between",
              }}
              callback={answerQuestion}
              questionIdx={10}
              headerText="Which of these three discarded reads is the chimera?"
              hasAnswer={questions[10] === 1}
            >
              <div className="mt-4 grid italic">
                <div className="flex gap-4">
                  <label>A:</label>
                  <div className="origin-top-left scale-75">
                    <Read id={1} text="TCTGTAATACAAAAT" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <label>B:</label>
                  <div className="origin-top-left scale-75">
                    <Read id={1} text="AGTGAGTTTCGCGCG" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <label>C:</label>
                  <div className="origin-top-left scale-75">
                    <Read id={1} text="ATATATAGGGGGGGG" />
                  </div>
                </div>
                {/* <Read id={1} text="AGTGAGTTTCGCGCG" />
                  <Read id={1} text="ATATATAGGGGGGGG" /> */}
              </div>
            </KnowledgeCheckQuestion>
            <QuestionResponseText
              visible={questions[10] === 1}
              content={
                <div
                  className={
                    "flex flex-col gap-4 text-pretty bg-interactiveBlue/10 p-4 leading-[23px] dark:bg-zinc-900/50 dark:text-emerald-400 md:p-6 md:px-8"
                  }
                >
                  {" "}
                  <p>
                    Sequencing and library preparations are not perfect
                    processes. Many of the resulting sequences correspond to
                    off-target amplification (e.g. from the human DNA in our
                    samples) or may be completely spurious sequences.
                  </p>
                  <p>
                    Some reads may look like a correct one, partially matching
                    the reference genome, but still be spurious. A common type
                    of error that occurs during amplicon sequencing is a chimera
                    formed from a combination of two different amplicons that
                    occurs during PCR.
                  </p>
                  <p>
                    Chimeras can be detected because part of the sequence will
                    match well with one amplicon, while another part will match
                    well with a different amplicon. These reads also need to be
                    discarded, since they don't represent actual sequences in
                    the genome.
                  </p>
                  <p>
                    Bioinformatics takes care of these artifacts by filtering
                    the obtained sequences, just as you did.
                  </p>
                </div>
              }
            />
          </div>
        )}
        {phase === 3 && (
          <div className="grid grid-flow-row-dense gap-x-16 gap-y-8 pb-24 font-helvetica  @4xl/main:grid-cols-2 ">
            <div>
              <KnowledgeCheckQuestion
                trigger={questions[3] !== 0}
                triggerEnd
                classNames={{
                  container: "",
                  answers: "mr-auto",
                  answersContainer:
                    "grid gap-y-4 gap-x-24 grid-cols-2 mt-4 max-w-[400px]",
                }}
                answers={[
                  {
                    checked: questions[3] === 0,
                    correct: true,
                    index: 0,
                    text: "A",
                  },
                  {
                    checked: questions[3] === 1,
                    correct: false,
                    index: 1,
                    text: "C",
                  },
                  {
                    checked: questions[3] === 2,
                    correct: false,
                    index: 2,
                    text: "G",
                  },
                  {
                    checked: questions[3] === 3,
                    correct: false,
                    index: 3,
                    text: "T",
                  },
                ]}
                hasAnswer={questions[3] === 0}
                callback={answerQuestion}
                questionIdx={3}
                headerText="Which base belongs in place of the mutation in locus 1?"
              />
              {/* <QuestionResponseText
                className="row-start-2 w-0 min-w-full md:row-start-auto mt-4"
                // trigger={questions[1] === 0}
                visible={questions[3] === 0}
                content={
                  <div
                    className={
                      "text-pretty bg-interactiveBlue/10 dark:bg-zinc-900/50 dark:text-emerald-400 p-4 leading-[23px] md:p-6 md:px-8"
                    }
                  >
                    <p>
                      Correct! The false mutation has been corrected and now
                      matches the base allele in the reference genome.
                    </p>
                    <div className="flex justify-center text-xl mt-2 text-orange-500 italic">
                      <span className="inline-block translate-y-1.5">T</span>
                      <span className="text-2xl scale-y-150">&rarr;</span>
                      <span className="inline-block translate-y-1.5">A</span>
                    </div>
                  </div>
                }
              /> */}
            </div>
            <div className={`${questions[3] === 0 ? "fadeIn500" : "hidden"}`}>
              <KnowledgeCheckQuestion
                trigger={false}
                classNames={{
                  container: "fadeIn500",
                  answers: "mr-auto",
                  answersContainer:
                    "grid gap-y-4 gap-x-24 grid-cols-2 mt-4 max-w-[400px]",
                }}
                answers={[
                  {
                    checked: questions[4] === 0,
                    correct: true,
                    index: 0,
                    text: "A",
                  },
                  {
                    checked: questions[4] === 1,
                    correct: false,
                    index: 1,
                    text: "C",
                  },
                  {
                    checked: questions[4] === 2,
                    correct: false,
                    index: 2,
                    text: "G",
                  },
                  {
                    checked: questions[4] === 3,
                    correct: false,
                    index: 3,
                    text: "T",
                  },
                ]}
                hasAnswer={questions[4] === 0}
                callback={answerQuestion}
                questionIdx={4}
                headerText="Which base belongs in place of the mutation in locus 2?"
              />
              {/* <QuestionResponseText
                className="row-start-4 w-0 min-w-full md:row-start-auto mt-4"
                visible={questions[4] === 0}
                content={
                  <div
                    className={
                      "text-pretty bg-interactiveBlue/10 dark:bg-zinc-900/50 dark:text-emerald-400 p-4 leading-[23px] md:p-6 md:px-8"
                    }
                  >
                    <p>
                      Correct! The false mutation has been corrected and now
                      matches the base allele in the reference genome.
                    </p>
                    <div className="flex justify-center text-xl mt-2 text-orange-500 italic">
                      <span className="inline-block translate-y-1.5">C</span>
                      <span className="text-2xl scale-y-150">&rarr;</span>
                      <span className="inline-block translate-y-1.5">A</span>
                    </div>
                  </div>
                }
              /> */}
            </div>
            <QuestionResponseText
              className="col-span-full"
              visible={questions[3] === 0}
              text={`Here you’ve manually corrected these reads with minor PCR or
              sequencing errors. Actual bioinformatic pipelines do something
              very similar. They identify reads with minor errors, and use
              similar reads to find the correct sequence and fix the error.
              The important part is identifying whether differences represent
              an error or a real SNP. This is usually done using similar
              information as you had here - rare, minor differences are
              considered errors, particularly when the sequence quality of
              that base is poor (additional information from the sequencer
              that you didn’t have here). If there are lots of reads with a
              given SNP, it is more likely to be a real polymorphism.`}
            />
          </div>
        )}
      </div>
    );
  }

  if (section === 3 && phase !== 2) {
    return (
      <div
        className={`mx-auto my-8 max-w-6xl px-4 ${
          phase === 1
            ? `${questions[1] !== 0 ? "fadeIn500" : "visible"}`
            : "invisible"
        }`}
      >
        <a ref={containerRef}></a>
        <InteractivePrimaryLayout
          // layoutStyle={{
          //   gridTemplateAreas: "1fr, auto auto",
          // }}
          leftHeader={"Questions"}
          rightHeader=""
          rightContent={
            questions[5] === 1 ? (
              <div className="fadeIn500">
                <KnowledgeCheckQuestion
                  trigger={false}
                  classNames={{
                    container: "fadeIn500",
                    answers: "mr-auto",
                    answersContainer:
                      "grid gap-y-4 mt-4 gap-x-12 justify-between row-start-3 md:row-start-auto mb-4 grid-cols-2",
                  }}
                  answers={[
                    {
                      checked: questions[6] === 0,
                      correct: false,
                      index: 0,
                      text: "1 on the left, 1 on the right",
                    },
                    {
                      checked: questions[6] === 1,
                      correct: false,
                      index: 1,
                      text: "2 on the left, 3 on the right",
                    },
                    {
                      checked: questions[6] === 2,
                      correct: true,
                      index: 2,
                      text: "3 on the left, 2 on the right",
                    },
                  ]}
                  hasAnswer={questions[6] === 2}
                  callback={answerQuestion}
                  questionIdx={6}
                  headerText="How many microhaplotypes do you observe in each of the loci?"
                />
                <QuestionResponseText
                  className="row-start-4 w-0 min-w-full md:row-start-auto"
                  visible={questions[6] === 2}
                  text={`Correct! The reads have been grouped together according to their microhaplotypes.`}
                />
              </div>
            ) : undefined
          }
          leftContent={
            <div className="">
              <KnowledgeCheckQuestion
                // trigger={false}
                trigger={questions[5] !== 1 && questions[6] === undefined}
                classNames={{
                  container: "",
                  answers: "mr-auto",
                  answersContainer:
                    "grid gap-y-4 gap-x-24 grid-cols-2 mt-4 justify-between mb-4",
                }}
                answers={[
                  {
                    checked: questions[5] === 0,
                    correct: false,
                    index: 0,
                    text: "30",
                  },
                  {
                    checked: questions[5] === 1,
                    correct: true,
                    index: 1,
                    text: "6",
                  },
                  {
                    checked: questions[5] === 2,
                    correct: false,
                    index: 2,
                    text: "2",
                  },
                  {
                    checked: questions[5] === 3,
                    correct: false,
                    index: 3,
                    text: "0",
                  },
                ]}
                hasAnswer={questions[5] === 1}
                callback={answerQuestion}
                questionIdx={5}
                headerText="How many SNPs are there in total?"
              />
              <QuestionResponseText
                className="row-start-2 w-0 min-w-full md:row-start-auto"
                // trigger={questions[1] === 0}
                visible={questions[5] === 1}
                text={`Correct!  After correcting the false mutations, there are a total of 6 SNPs in the reads above: 3 in locus 1 and 3 in locus 2. They are indicated by the arrow icons above the reference genome.`}
              />
            </div>
          }
        />
        {/* <h6 ref={containerRef} className="font-bold text-lg mb-8">
          Questions
        </h6>
        <div className="flex flex-col gap-8 max-w-[600px]">
          <KnowledgeCheckQuestion
            // trigger={false}
            trigger={questions[5] !== 1 && questions[6] === undefined}
            classNames={{
              container: "",
              answers: "mr-auto",
              answersContainer:
                "grid gap-y-4 gap-x-24 grid-cols-2 mt-4 justify-between",
            }}
            answers={[
              {
                checked: questions[5] === 0,
                correct: false,
                index: 0,
                text: "30",
              },
              {
                checked: questions[5] === 1,
                correct: true,
                index: 1,
                text: "6",
              },
              {
                checked: questions[5] === 2,
                correct: false,
                index: 2,
                text: "2",
              },
              {
                checked: questions[5] === 3,
                correct: false,
                index: 3,
                text: "0",
              },
            ]}
            hasAnswer={questions[5] === 1}
            callback={answerQuestion}
            questionIdx={5}
            headerText="How many SNPs are there in total?"
          />
          <QuestionResponseText
            className="row-start-2 w-0 min-w-full md:row-start-auto"
            // trigger={questions[1] === 0}
            visible={questions[5] === 1}
            text={`Correct!  After correcting the false mutations, there are a total of 6 SNPs in the reads above: 3 in locus 1 and 3 in locus 2. They are indicated by the arrow icons above the reference genome.`}
          />
          {questions[5] === 1 && (
            <KnowledgeCheckQuestion
              trigger={false}
              classNames={{
                container: "fadeIn500",
                answers: "mr-auto",
                answersContainer:
                  "grid gap-y-4 mt-4 gap-x-12 justify-between row-start-3 md:row-start-auto",
              }}
              answers={[
                {
                  checked: questions[6] === 0,
                  correct: false,
                  index: 0,
                  text: "1 on the left, 1 on the right",
                },
                {
                  checked: questions[6] === 1,
                  correct: false,
                  index: 1,
                  text: "2 on the left, 3 on the right",
                },
                {
                  checked: questions[6] === 2,
                  correct: true,
                  index: 2,
                  text: "3 on the left, 2 on the right",
                },
              ]}
              hasAnswer={questions[6] === 2}
              callback={answerQuestion}
              questionIdx={6}
              headerText="How many microhaplotypes do you observe in each of the loci?"
            />
          )}
          <QuestionResponseText
            className="row-start-4 w-0 min-w-full md:row-start-auto"
            visible={questions[6] === 2}
            text={`Correct! The reads have been grouped together according to their microhaplotypes.`}
          />
        </div> */}
      </div>
    );
  }

  if (section === 3 && phase === 2) {
    return (
      <div className="mx-auto my-12 max-w-6xl px-4">
        <h6 className="text-lg font-bold">Questions</h6>
        {section === 3 && phase === 2 && (
          <div className="mt-8 flex flex-col gap-4">
            <KnowledgeCheckQuestion
              // trigger={false}
              trigger={false}
              classNames={{
                container: "",
                answers: "mr-auto",
                answersContainer:
                  "grid gap-y-4 gap-x-24 mt-4 w-fit grid-cols-4",
              }}
              answers={[
                {
                  checked: questions[7] === 0,
                  correct: false,
                  index: 0,
                  text: "1",
                },
                {
                  checked: questions[7] === 1,
                  correct: false,
                  index: 1,
                  text: "2",
                },
                {
                  checked: questions[7] === 2,
                  correct: true,
                  index: 2,
                  text: "3",
                },
                {
                  checked: questions[7] === 3,
                  correct: false,
                  index: 3,
                  text: "6",
                },
              ]}
              hasAnswer={questions[7] === 2}
              callback={(questionIdx, answerIdx) => {
                answerQuestion(questionIdx, answerIdx);
                if (answerIdx === 2) {
                  setCompletion({
                    ...completion,
                    3: { ...completion[3], 2: true },
                  });
                }
              }}
              questionIdx={7}
              headerText="If this were data from a real sample, what would you estimate to be the MOI?"
            />

            <QuestionResponseText
              className="col-span-full row-start-2 w-0 min-w-full md:row-start-auto"
              visible={questions[7] === 2}
              text={`Correct! The most likely explanation is that there are 3 parasites in the sample, each with a different allele in locus 1, while some of them share the same allele in locus 2. Exactly how these parasites in locus 2 share the same allele is beyond the scope of this exercise, however, an example is given above.  Thus, the MOI is 3.`}
            />
            {questions[7] === 2 && (
              <div className="fadeIn500">
                <KnowledgeCheckQuestion
                  // trigger={false}
                  trigger={false}
                  classNames={{
                    container: "",
                    answers: "mr-auto",
                    answersContainer:
                      "grid gap-y-4 gap-x-24 mt-4 justify-between",
                  }}
                  answers={[
                    {
                      checked: questions[8] === 0,
                      correct: false,
                      index: 0,
                      text: "Yes",
                    },
                    {
                      checked: questions[8] === 1,
                      correct: true,
                      index: 1,
                      text: "No",
                    },
                    {
                      checked: questions[8] === 2,
                      correct: false,
                      index: 2,
                      text: "Can't tell",
                    },
                  ]}
                  hasAnswer={questions[8] === 1}
                  callback={answerQuestion}
                  questionIdx={8}
                  headerText="If you were told that resistance to an antimalarial drug required a microhaplotype sequence from locus 1 represented by the 3 SNPs GAC,  would this infection contain a drug resistant parasite?"
                />
                <QuestionResponseText
                  className="col-span-full row-start-2 mt-4 w-0 min-w-full md:row-start-auto"
                  visible={questions[8] === 1}
                  text={`That’s right - there are only 3 microhaplotypes present in this sample at locus 1, and none of them match the drug resistant sequence.`}
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mx-auto my-12 max-w-6xl px-4">
      {phase === 4 && (
        <div className={"fadeIn500"}>
          <FormHeader text="Questions" />
          <MultiRowLayout
            style={{
              rowGap: 32,
            }}
            topLeft={
              <KnowledgeCheckQuestion
                triggerEnd
                trigger={phase === 4}
                classNames={{
                  container: "",
                  answers: "mr-auto",
                  answersContainer:
                    "grid gap-y-4 gap-x-24 grid-cols-2 mt-4 justify-between",
                }}
                answers={[
                  {
                    checked: questions[1] === 0,
                    correct: true,
                    index: 0,
                    text: "2",
                  },
                  {
                    checked: questions[1] === 1,
                    correct: false,
                    index: 1,
                    text: "4",
                  },
                  {
                    checked: questions[1] === 2,
                    correct: false,
                    index: 2,
                    text: "6",
                  },
                  {
                    checked: questions[1] === 3,
                    correct: false,
                    index: 3,
                    text: "10",
                  },
                ]}
                hasAnswer={questions[1] === 0}
                callback={answerQuestion}
                questionIdx={1}
                headerText="How many loci do we have reads for in this example?"
              />
            }
            bottomLeft={
              <QuestionResponseText
                className="row-start-2 w-0 min-w-full md:row-start-auto"
                // trigger={questions[1] === 0}
                visible={questions[1] === 0}
                text={`Correct!
            Locus (plural: "loci") refers to a specific position or location on a chromosome where a particular gene or DNA sequence is located. In this example, there are two loci that denote the location of the sequence generated reads.`}
              />
            }
            topRight={
              questions[1] === 0 ? (
                <KnowledgeCheckQuestion
                  trigger={false}
                  classNames={{
                    container: "fadeIn500",
                    answers: "mr-auto",
                    answersContainer:
                      "grid gap-y-4 mt-4 gap-x-12 justify-between grid-cols-2",
                  }}
                  answers={[
                    {
                      checked: questions[2] === 0,
                      correct: false,
                      index: 0,
                      text: "5 in locus 1, 5 in locus 2",
                    },
                    {
                      checked: questions[2] === 1,
                      correct: true,
                      index: 1,
                      text: "6 in locus 1, 4 in locus 2",
                    },
                    {
                      checked: questions[2] === 2,
                      correct: false,
                      index: 2,
                      text: "10 in locus 1, 0 in locus 2",
                    },
                    {
                      checked: questions[2] === 3,
                      correct: false,
                      index: 3,
                      text: "0 in locus 1, 10 in locus 2",
                    },
                  ]}
                  hasAnswer={questions[2] === 1}
                  callback={answerQuestion}
                  questionIdx={2}
                  headerText="How many reads are there in each locus?"
                />
              ) : undefined
            }
            bottomRight={
              <QuestionResponseText
                // trigger={questions[2] === 1}
                visible={questions[2] === 1}
                text={`This is what we call sequencing depth: we have a depth of 6 reads in locus 1 and 4 reads in locus 2. You were able to get these numbers because you aligned the reads to a reference genome.`}
              />
            }
          ></MultiRowLayout>
        </div>
      )}
      {phase === 7.5 && (
        <MultiRowLayout
          topLeft={
            <div className="col-span-full">
              <FormHeader text="Questions" />
              <KnowledgeCheckQuestion
                trigger={!completion[7.5]}
                classNames={{
                  container: "",
                  answers: "mr-auto",
                  answersContainer: "grid gap-y-4 mt-4 justify-between",
                }}
                headerText="You ended up discarding 3 reads. What made you throw these 3 away while keeping the others?  Choose all that apply."
                answers={[
                  {
                    checked: Array.isArray(questions[0])
                      ? questions[0].includes(0)
                      : false,
                    correct: false,
                    index: 0,
                    text: "At least 1 base letter in the read did not match the reference genome",
                  },
                  {
                    checked: Array.isArray(questions[0])
                      ? questions[0].includes(1)
                      : false,
                    correct: true,
                    index: 1,
                    text: "Many base letters in the read did not match the reference genome.",
                  },
                  {
                    checked: Array.isArray(questions[0])
                      ? questions[0].includes(2)
                      : false,
                    correct: true,
                    index: 2,
                    text: "The base letters in the read matched the sequence in the reference genome, but at different parts of the sequence.",
                  },
                ]}
                hasAnswer={
                  Array.isArray(questions[0]) &&
                  questions[0].includes(1) &&
                  questions[0].includes(2) &&
                  !questions[0].includes(0)
                }
                callback={(questionIdx, answerIdx) => {
                  if (
                    Array.isArray(questions[0]) &&
                    questions[0].includes(answerIdx)
                  ) {
                    let copyArr = [...questions[0]];
                    let x = copyArr.indexOf(answerIdx);
                    copyArr.splice(x, 1);
                    setQuestions({ ...questions, 0: copyArr });
                    // copyArr.splice()
                  } else {
                    if (Array.isArray(questions[0])) {
                      let copyArr = [...questions[0]];
                      copyArr.push(answerIdx);
                      setQuestions({ ...questions, 0: copyArr });
                    } else {
                      setQuestions({ ...questions, 0: [answerIdx] });
                    }
                  }
                }}
                questionIdx={0}
              />
              <QuestionResponseText
                className="mt-8"
                visible={
                  Array.isArray(questions[0]) &&
                  questions[0].includes(1) &&
                  questions[0].includes(2) &&
                  !questions[0].includes(0)
                }
                text={[
                  `
                  Sequencing and library preparations are not perfect processes.
                Many of the resulting sequences correspond to off-target
                amplification (e.g. from the human DNA in our samples) or may be
                completely spurious sequences. Some reads may look like a
                correct one, partially matching the reference genome, but still
                be spurious. Bioinformatics takes care of these artifacts by `,
                  <b key={1}>
                    <i>filtering</i>
                  </b>,
                  " the obtained sequences, just as you did.",
                ]}
              />
            </div>
          }
        ></MultiRowLayout>
      )}
      {phase === 8 && (
        <QuestionResponseText
          visible={chimaeraPlaced}
          content={
            <div className="bg-primaryBlue/10 flex flex-col gap-4 text-pretty p-4 leading-[23px] md:p-6 md:px-8">
              <p>
                A common type of error that occurs during amplicon sequencing is
                a chimera formed from a combination of two different amplicons
                that occurs during PCR. Chimeras can be detected because part of
                the sequence will match well with one amplicon, while another
                part will match well with a different amplicon. These reads also
                need to be discarded, since they don't represent actual
                sequences in the genome.
              </p>
            </div>
          }
          // text={`Sequencing and library preparations are not perfect processes.
          //       Many of the resulting sequences correspond to off-target
          //       amplification (e.g. from the human DNA in our samples) or may be
          //       completely spurious sequences. Some reads may look like a
          //       correct one, partially matching the reference genome, but still
          //       be spurious. A common type of error that occurs during amplicon
          //       sequencing is a chimera formed from a combination of two
          //       different amplicons that occurs during PCR. Chimeras can be
          //       detected because part of the sequence will match well with one
          //       amplicon, while another part will match well with a different
          //       amplicon. These reads also need to be discarded, since they
          //       don't represent actual sequences in the genome.`}
        />
      )}
      {phase === 9.5 && (
        <div className={"fadeIn500"}>
          <FormHeader text="Questions" />
          <MultiRowLayout
            style={{
              rowGap: 32,
            }}
            topLeft={
              <KnowledgeCheckQuestion
                trigger={questions[3] !== 0}
                triggerEnd
                classNames={{
                  container: "",
                  answers: "mr-auto",
                  answersContainer:
                    "grid gap-y-4 gap-x-24 grid-cols-2 mt-4 justify-between",
                }}
                answers={[
                  {
                    checked: questions[3] === 0,
                    correct: true,
                    index: 0,
                    text: "A",
                  },
                  {
                    checked: questions[3] === 1,
                    correct: false,
                    index: 1,
                    text: "C",
                  },
                  {
                    checked: questions[3] === 2,
                    correct: false,
                    index: 2,
                    text: "G",
                  },
                  {
                    checked: questions[3] === 3,
                    correct: false,
                    index: 3,
                    text: "T",
                  },
                ]}
                hasAnswer={questions[3] === 0}
                callback={answerQuestion}
                questionIdx={3}
                headerText="Which base belongs in place of the mutation in locus 1?"
              />
            }
            bottomLeft={
              <QuestionResponseText
                className="row-start-2 w-0 min-w-full md:row-start-auto"
                // trigger={questions[1] === 0}
                visible={questions[3] === 0}
                content={
                  <div
                    className={
                      "text-pretty bg-interactiveBlue/10 p-4 leading-[23px] dark:bg-zinc-900/50 dark:text-emerald-400 md:p-6 md:px-8"
                    }
                  >
                    <p>
                      Correct! The false mutation has been corrected and now
                      matches the base allele in the reference genome.
                    </p>
                    <div className="mt-2 flex justify-center text-xl italic text-orange-500">
                      <span className="inline-block translate-y-1.5">T</span>
                      <span className="scale-y-150 text-2xl">&rarr;</span>
                      <span className="inline-block translate-y-1.5">A</span>
                    </div>
                  </div>
                }
              />
            }
            topRight={
              questions[3] === 0 ? (
                <KnowledgeCheckQuestion
                  trigger={false}
                  classNames={{
                    container: "fadeIn500",
                    answers: "mr-auto",
                    answersContainer:
                      "grid gap-y-4 mt-4 gap-x-12 justify-between grid-cols-2 row-start-3 md:row-start-auto",
                  }}
                  answers={[
                    {
                      checked: questions[4] === 0,
                      correct: true,
                      index: 0,
                      text: "A",
                    },
                    {
                      checked: questions[4] === 1,
                      correct: false,
                      index: 1,
                      text: "C",
                    },
                    {
                      checked: questions[4] === 2,
                      correct: false,
                      index: 2,
                      text: "G",
                    },
                    {
                      checked: questions[4] === 3,
                      correct: false,
                      index: 3,
                      text: "T",
                    },
                  ]}
                  hasAnswer={questions[4] === 0}
                  callback={answerQuestion}
                  questionIdx={4}
                  headerText="Which base belongs in place of the mutation in locus 2?"
                />
              ) : undefined
            }
            bottomRight={
              <QuestionResponseText
                className="row-start-4 w-0 min-w-full md:row-start-auto"
                visible={questions[4] === 0}
                content={
                  <div
                    className={
                      "text-pretty bg-interactiveBlue/10 p-4 leading-[23px] dark:bg-zinc-900/50 dark:text-emerald-400 md:p-6 md:px-8"
                    }
                  >
                    <p>
                      Correct! The false mutation has been corrected and now
                      matches the base allele in the reference genome.
                    </p>
                    <div className="mt-2 flex justify-center text-xl italic text-orange-500">
                      <span className="inline-block translate-y-1.5">C</span>
                      <span className="scale-y-150 text-2xl">&rarr;</span>
                      <span className="inline-block translate-y-1.5">A</span>
                    </div>
                  </div>
                }
              />
            }
          ></MultiRowLayout>
        </div>
      )}
      {phase === 10.5 && (
        <div className={"fadeIn500"}>
          <FormHeader text="Questions" />
          <MultiRowLayout
            style={{
              rowGap: 32,
            }}
            topLeft={
              <KnowledgeCheckQuestion
                // trigger={false}
                trigger={questions[5] !== 1 && questions[6] === undefined}
                classNames={{
                  container: "",
                  answers: "mr-auto",
                  answersContainer:
                    "grid gap-y-4 gap-x-24 grid-cols-2 mt-4 justify-between",
                }}
                answers={[
                  {
                    checked: questions[5] === 0,
                    correct: false,
                    index: 0,
                    text: "30",
                  },
                  {
                    checked: questions[5] === 1,
                    correct: true,
                    index: 1,
                    text: "6",
                  },
                  {
                    checked: questions[5] === 2,
                    correct: false,
                    index: 2,
                    text: "2",
                  },
                  {
                    checked: questions[5] === 3,
                    correct: false,
                    index: 3,
                    text: "0",
                  },
                ]}
                hasAnswer={questions[5] === 1}
                callback={answerQuestion}
                questionIdx={5}
                headerText="How many SNPs (sites with variation) are there in total?"
              />
            }
            bottomLeft={
              <QuestionResponseText
                className="row-start-2 w-0 min-w-full md:row-start-auto"
                // trigger={questions[1] === 0}
                visible={questions[5] === 1}
                text={`Correct!  After correcting the false mutations, there are a total of 6 SNPs in the reads above: 3 in locus 1 and 3 in locus 2. They are indicated by the arrow icons above the reference genome.`}
              />
            }
            topRight={
              questions[5] === 1 ? (
                <KnowledgeCheckQuestion
                  trigger={false}
                  classNames={{
                    container: "fadeIn500",
                    answers: "mr-auto",
                    answersContainer:
                      "grid gap-y-4 mt-4 gap-x-12 justify-between row-start-3 md:row-start-auto",
                  }}
                  answers={[
                    {
                      checked: questions[6] === 0,
                      correct: false,
                      index: 0,
                      text: "1 on the left, 1 on the right",
                    },
                    {
                      checked: questions[6] === 1,
                      correct: false,
                      index: 1,
                      text: "2 on the left, 3 on the right",
                    },
                    {
                      checked: questions[6] === 2,
                      correct: true,
                      index: 2,
                      text: "3 on the left, 2 on the right",
                    },
                  ]}
                  hasAnswer={questions[6] === 2}
                  callback={answerQuestion}
                  questionIdx={6}
                  headerText="How many microhaplotypes are there in each locus? Remember, a microhaplotype is a unique combination of SNPs at a given locus"
                />
              ) : undefined
            }
            bottomRight={
              <QuestionResponseText
                className="row-start-4 w-0 min-w-full md:row-start-auto"
                visible={questions[6] === 2}
                text={`Correct! The reads have been grouped together according to their microhaplotypes.`}
              />
            }
          ></MultiRowLayout>
        </div>
      )}
      {phase === 11 && (
        <div className={"fadeIn500"}>
          <FormHeader text="Questions" />
          <MultiRowLayout
            style={{
              rowGap: 32,
            }}
            topLeft={
              <div>
                <KnowledgeCheckQuestion
                  // trigger={false}
                  trigger={false}
                  classNames={{
                    container: "",
                    answers: "mr-auto",
                    answersContainer:
                      "grid gap-y-4 gap-x-24 mt-4 justify-between",
                  }}
                  answers={[
                    {
                      checked: questions[7] === 0,
                      correct: false,
                      index: 0,
                      text: "1",
                    },
                    {
                      checked: questions[7] === 1,
                      correct: false,
                      index: 1,
                      text: "2",
                    },
                    {
                      checked: questions[7] === 2,
                      correct: true,
                      index: 2,
                      text: "3",
                    },
                    {
                      checked: questions[7] === 3,
                      correct: false,
                      index: 3,
                      text: "6",
                    },
                  ]}
                  hasAnswer={questions[7] === 2}
                  callback={answerQuestion}
                  questionIdx={7}
                  headerText="If this were data from a real sample, what would the MOI be?"
                />
                <QuestionResponseText
                  className="col-span-full row-start-2 w-0 min-w-full md:row-start-auto"
                  visible={questions[7] === 2}
                  text={`Correct! The most likely explanation is that there are 3 parasites in the sample: each with a different allele in locus 1, while some of them share the same allele in locus 2. Exactly how these parasites in locus 2 share the same allele is beyond the scope of this exercise, however, an example is given above.  Thus, the MOI is 3.`}
                />
              </div>
            }
            // bottomLeft={
            //   <QuestionResponseText
            //     className="col-span-full row-start-2 w-0 min-w-full md:row-start-auto"
            //     visible={questions[7] === 2}
            //     text={`Correct! The most likely explanation is that there are 3 parasites in the sample: each with a different allele in locus 1, while some of them share the same allele in locus 2. Exactly how these parasites in locus 2 share the same allele is beyond the scope of this exercise, however, an example is given above.  Thus, the MOI is 3.`}
            //   />
            // }
          ></MultiRowLayout>
        </div>
      )}
    </div>
  );
}
