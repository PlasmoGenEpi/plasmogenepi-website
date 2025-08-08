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

export default function QuestionContent({
  lang = "EN",
}: {
  lang: "EN" | "FR" | "PT";
}) {
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
          leftHeader={
            lang === "EN"
              ? `Questions`
              : lang === "FR"
              ? `Questions`
              : lang === "PT"
              ? `Perguntas`
              : `Questions`
          }
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
                headerText={
                  lang === "EN"
                    ? "How many loci do we have reads for in this example?"
                    : lang === "FR"
                    ? "Combien de loci avons-nous de lectures dans cet exemple ?"
                    : lang === "PT"
                    ? "Quantos loci temos leituras neste exemplo?"
                    : "How many loci do we have reads for in this example?"
                }
              />
              <QuestionResponseText
                className="row-start-2 w-0 min-w-full md:row-start-auto"
                // trigger={questions[1] === 0}
                visible={questions[1] === 0}
                content={
                  <div
                    className={
                      "text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400"
                    }
                  >
                    {lang === "EN" ? (
                      <p>
                        Correct! Locus (plural: "loci") refers to a specific
                        position or location on a chromosome where a particular
                        gene or DNA sequence is located. In this example, there
                        are two loci that denote the location of the sequence
                        generated reads.
                      </p>
                    ) : lang === "FR" ? (
                      <p>
                        Correct ! Le locus (pluriel : "loci") fait référence à
                        une position ou un emplacement spécifique sur un
                        chromosome où se trouve un gène ou une séquence d'ADN
                        particulière. Dans cet exemple, il y a deux loci qui
                        désignent l'emplacement des lectures générées par la
                        séquence.
                      </p>
                    ) : lang === "PT" ? (
                      <p>
                        Correto! Locus (plural: "loci") refere-se a uma posição
                        ou localização específica em um cromossomo onde um gene
                        ou sequência de DNA particular está localizado. Neste
                        exemplo, existem dois loci que denotam a localização das
                        leituras geradas pela sequência.
                      </p>
                    ) : null}
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
                    text:
                      lang === "EN"
                        ? "5 in locus 1, 5 in locus 2"
                        : lang === "FR"
                        ? "5 dans le locus 1, 5 dans le locus 2"
                        : lang === "PT"
                        ? "5 no locus 1, 5 no locus 2"
                        : "5 in locus 1, 5 in locus 2",
                  },
                  {
                    checked: questions[2] === 1,
                    correct: true,
                    index: 1,
                    text:
                      lang === "EN"
                        ? "6 in locus 1, 4 in locus 2"
                        : lang === "FR"
                        ? "6 dans le locus 1, 4 dans le locus 2"
                        : lang === "PT"
                        ? "6 no locus 1, 4 no locus 2"
                        : "6 in locus 1, 4 in locus 2",
                  },
                  {
                    checked: questions[2] === 2,
                    correct: false,
                    index: 2,
                    text:
                      lang === "EN"
                        ? "10 in locus 1, 0 in locus 2"
                        : lang === "FR"
                        ? "10 dans le locus 1, 0 dans le locus 2"
                        : lang === "PT"
                        ? "10 no locus 1, 0 no locus 2"
                        : "10 in locus 1, 0 in locus 2",
                  },
                  {
                    checked: questions[2] === 3,
                    correct: false,
                    index: 3,
                    text:
                      lang === "EN"
                        ? "0 in locus 1, 10 in locus 2"
                        : lang === "FR"
                        ? "0 dans le locus 1, 10 dans le locus 2"
                        : lang === "PT"
                        ? "0 no locus 1, 10 no locus 2"
                        : "0 in locus 1, 10 in locus 2",
                  },
                ]}
                hasAnswer={questions[2] === 1}
                callback={answerQuestion}
                questionIdx={2}
                headerText={
                  lang === "EN"
                    ? "How many reads are there in each locus?"
                    : lang === "FR"
                    ? "Combien de lectures y a-t-il dans chaque locus ?"
                    : lang === "PT"
                    ? "Quantas leituras existem em cada locus?"
                    : "How many reads are there in each locus?"
                }
              />
              <QuestionResponseText
                // trigger={questions[2] === 1}
                visible={questions[2] === 1}
                content={
                  <div
                    className={
                      "text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400"
                    }
                  >
                    {lang === "EN" ? (
                      <p>
                        This is what we call{" "}
                        <span className="font-bold italic">
                          sequencing depth:
                        </span>{" "}
                        we have a depth of 6 reads in locus 1 and 4 reads in
                        locus 2. You were able to get these numbers because you
                        aligned the reads to a reference genome.
                      </p>
                    ) : lang === "FR" ? (
                      <p>
                        C'est ce que nous appelons la{" "}
                        <span className="font-bold italic">
                          profondeur de séquençage :
                        </span>{" "}
                        nous avons une profondeur de 6 lectures dans le locus 1
                        et de 4 lectures dans le locus 2. Vous avez pu obtenir
                        ces chiffres parce que vous avez aligné les lectures sur
                        un génome de référence.
                      </p>
                    ) : lang === "PT" ? (
                      <p>
                        Isso é o que chamamos de{" "}
                        <span className="font-bold italic">
                          profundidade de sequenciamento:
                        </span>{" "}
                        temos uma profundidade de 6 leituras no locus 1 e 4
                        leituras no locus 2. Você conseguiu esses números porque
                        alinhou as leituras a um genoma de referência.
                      </p>
                    ) : null}
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
          {lang === "EN"
            ? `Questions`
            : lang === "FR"
            ? `Questions`
            : lang === "PT"
            ? `Perguntas`
            : `Questions`}
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
              headerText={
                lang === "EN"
                  ? "Which of the following describes the reads that you discarded?  Choose all that apply."
                  : lang === "FR"
                  ? "Lesquelles des affirmations suivantes décrivent les lectures que vous avez écartées ? Choisissez toutes celles qui s'appliquent."
                  : lang === "PT"
                  ? "Qual das seguintes opções descreve as leituras que você descartou? Escolha todas as que se aplicam."
                  : "Which of the following describes the reads that you discarded? Choose all that apply."
              }
              answers={[
                {
                  checked: Array.isArray(questions[0])
                    ? questions[0].includes(0)
                    : false,
                  correct: true,
                  index: 0,
                  text:
                    lang === "EN"
                      ? "Chimera"
                      : lang === "FR"
                      ? "Chimère"
                      : lang === "PT"
                      ? "Quimera"
                      : "Chimera",
                },
                {
                  checked: Array.isArray(questions[0])
                    ? questions[0].includes(1)
                    : false,
                  correct: true,
                  index: 1,
                  text:
                    lang === "EN"
                      ? "Off target"
                      : lang === "FR"
                      ? "Hors cible"
                      : lang === "PT"
                      ? "Fora do alvo"
                      : "Off target",
                },
                {
                  checked: Array.isArray(questions[0])
                    ? questions[0].includes(2)
                    : false,
                  correct: false,
                  index: 2,
                  text:
                    lang === "EN"
                      ? "Mutations"
                      : lang === "FR"
                      ? "Mutations"
                      : lang === "PT"
                      ? "Mutações"
                      : "Mutations",
                },
                {
                  checked: Array.isArray(questions[0])
                    ? questions[0].includes(3)
                    : false,
                  correct: false,
                  index: 3,
                  text:
                    lang === "EN"
                      ? "High quality read"
                      : lang === "FR"
                      ? "Lecture de haute qualité"
                      : lang === "PT"
                      ? "Leitura de alta qualidade"
                      : "High quality read",
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
              text={
                lang === "EN"
                  ? `Correct - Two of these are off target reads which do not align anywhere. One of these is a chimera, where part of the read aligns still in the locus and another part aligns to another locus.`
                  : lang === "FR"
                  ? `Correct - Deux de ces sont des lectures hors cible qui nes'alignent nulle part. L'une d'elles est une chimère, où une partie de la lecture s'aligne toujours dans le locus et une autre partie s'aligne sur un autre locus.`
                  : lang === "PT"
                  ? `Correto - Duas delas são leituras fora do alvo que não se alinham em lugar nenhum. Uma delas é uma quimera, onde parte da leitura ainda se alinha no locus e outra parte se alinha a outro locus.`
                  : `Correct - Two of these are off target reads which do not align anywhere. One of these is a chimera, where part of the read aligns still in the locus and another part aligns to another locus.`
              }
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
              headerText={
                lang === "EN"
                  ? "Which of these three discarded reads is the chimera?"
                  : lang === "FR"
                  ? "Laquelle de ces trois lectures écartées est la chimère ?"
                  : lang === "PT"
                  ? "Qual dessas três leituras descartadas é a quimera?"
                  : "Which of these three discarded reads is the chimera?"
              }
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
                lang === "EN" ? (
                  <div
                    className={
                      "flex flex-col gap-4 text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400"
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
                      of error that occurs during amplicon sequencing is a
                      chimera formed from a combination of two different
                      amplicons that occurs during PCR.
                    </p>
                    <p>
                      Chimeras can be detected because part of the sequence will
                      match well with one amplicon, while another part will
                      match well with a different amplicon. These reads also
                      need to be discarded, since they don't represent actual
                      sequences in the genome.
                    </p>
                    <p>
                      Bioinformatics takes care of these artifacts by filtering
                      the obtained sequences, just as you did.
                    </p>
                  </div>
                ) : lang === "FR" ? (
                  <div
                    className={
                      "flex flex-col gap-4 text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400"
                    }
                  >
                    <p>
                      Correct ! Le séquençage et les préparations de
                      bibliothèques ne sont pas des processus parfaits. Beaucoup
                      de séquences résultantes correspondent à une amplification
                      hors cible (par exemple, à partir de l'ADN humain dans nos
                      échantillons) ou peuvent être des séquences complètement
                      fausses.
                    </p>
                    <p>
                      Certaines lectures peuvent ressembler à une lecture
                      correcte, correspondant partiellement au génome de
                      référence, mais être néanmoins fausses. Un type courant
                      d'erreur qui se produit lors du séquençage d'amplicons est
                      une chimère formée à partir d'une combinaison de deux
                      amplicons différents qui se produit pendant la PCR.
                    </p>
                    <p>
                      Les chimères peuvent être détectées parce qu'une partie de
                      la séquence correspondra bien à un amplicon, tandis qu'une
                      autre partie correspondra bien à un amplicon différent.
                      Ces lectures doivent également être écartées, car elles ne
                      représentent pas des séquences réelles dans le génome.
                    </p>
                    <p>
                      La bioinformatique prend en charge ces artefacts en
                      filtrant les séquences obtenues, tout comme vous l'avez
                      fait.
                    </p>
                  </div>
                ) : lang === "PT" ? (
                  <div
                    className={
                      "flex flex-col gap-4 text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400"
                    }
                  >
                    {" "}
                    <p>
                      O sequenciamento e as preparações de biblioteca não são
                      processos perfeitos. Muitas das sequências resultantes
                      correspondem a amplificação fora do alvo (por exemplo, do
                      DNA humano em nossas amostras) ou podem ser sequências
                      completamente espúrias.
                    </p>
                    <p>
                      Algumas leituras podem parecer corretas, correspondendo
                      parcialmente ao genoma de referência, mas ainda assim
                      serem espúrias. Um tipo de erro comum que ocorre durante o
                      sequenciamento de amplicõesé um quimera formada a partir
                      de uma combinação de dois amplicões diferentes que ocorre
                      durante a PCR.
                    </p>
                    <p>
                      Quimeras podem ser detectadas porque parte da sequência
                      corresponderá bem a um amplicão, enquanto outra parte
                      corresponderá bem a um amplicão diferente. Essas leituras
                      também precisam ser descartadas, pois não representam
                      sequências reais no genoma.
                    </p>
                    <p>
                      A bioinformática cuida desses artefatos filtrando as
                      sequências obtidas, assim como você fez.
                    </p>
                  </div>
                ) : (
                  <></>
                )
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
                headerText={
                  lang === "EN"
                    ? "Which base belongs in place of the mutation in locus 1?"
                    : lang === "FR"
                    ? "Quelle base appartient à la place de la mutation dans le locus 1 ?"
                    : lang === "PT"
                    ? "Qual base pertence ao lugar da mutação no locus 1?"
                    : "Which base belongs in place of the mutation in locus 1?"
                }
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
                headerText={
                  lang === "EN"
                    ? "Which base belongs in place of the mutation in locus 2?"
                    : lang === "FR"
                    ? "Quelle base appartient à la place de la mutation dans le locus 2 ?"
                    : lang === "PT"
                    ? "Qual base pertence ao lugar da mutação no locus 2?"
                    : "Which base belongs in place of the mutation in locus 2?"
                }
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
              text={
                lang === "EN"
                  ? `Here you’ve manually corrected these reads with minor PCR or
              sequencing errors. Actual bioinformatic pipelines do something
              very similar. They identify reads with minor errors, and use
              similar reads to find the correct sequence and fix the error.
              The important part is identifying whether differences represent
              an error or a real SNP. This is usually done using similar
              information as you had here - rare, minor differences are
              considered errors, particularly when the sequence quality of
              that base is poor (additional information from the sequencer
              that you didn’t have here). If there are lots of reads with a
              given SNP, it is more likely to be a real polymorphism.`
                  : lang === "FR"
                  ? `Ici, vous avez corrigé manuellement ces lectures avec des
                      erreurs mineures de PCR ou de séquençage. Les pipelines
                      bioinformatiques réels font quelque chose de très
                      similaire. Ils identifient les lectures avec des erreurs
                      mineures et utilisent des lectures similaires pour trouver
                      la séquence correcte et corriger l'erreur. L'important est
                      d'identifier si les différences représentent une erreur ou
                      un vrai SNP. Cela se fait généralement en utilisant des
                      informations similaires à celles que vous aviez ici - les
                      différences rares et mineures sont considérées comme des
                      erreurs, en particulier lorsque la qualité de la séquence
                      de cette base est médiocre (informations
                      supplémentaires du séquenceur que vous n'aviez pas ici).
                      S'il y a beaucoup de lectures avec un SNP donné, il est
                      plus probable qu'il s'agisse d'un polymorphisme réel.`
                  : lang === "PT"
                  ? `Aqui você corrigiu manualmente essas leituras com pequenos
                      erros de PCR ou sequenciamento. Pipelines
                      bioinformáticos reais fazem algo muito semelhante. Eles
                      identificam leituras com pequenos erros e usam leituras
                      semelhantes para encontrar a sequência correta e corrigir
                      o erro. A parte importante é identificar se as diferenças
                      representam um erro ou um SNP real. Isso geralmente é feito
                      usando informações semelhantes às que você tinha aqui -
                      diferenças raras e menores são consideradas erros,
                      especialmente quando a qualidade da sequência dessa base é
                      baixa (informações adicionais do sequenciador que você não
                      tinha aqui). Se houver muitas leituras com um determinado
                      SNP, é mais provável que seja um polimorfismo real.`
                  : ""
              }
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
                      text:
                        lang === "EN"
                          ? "1 on the left, 1 on the right"
                          : lang === "FR"
                          ? "1 à gauche, 1 à droite"
                          : lang === "PT"
                          ? "1 à esquerda, 1 à direita"
                          : "1 on the left, 1 on the right",
                    },
                    {
                      checked: questions[6] === 1,
                      correct: false,
                      index: 1,
                      text:
                        lang === "EN"
                          ? "2 on the left, 3 on the right"
                          : lang === "FR"
                          ? "2 à gauche, 3 à droite"
                          : lang === "PT"
                          ? "2 à esquerda, 3 à direita"
                          : "2 on the left, 3 on the right",
                    },
                    {
                      checked: questions[6] === 2,
                      correct: true,
                      index: 2,
                      text:
                        lang === "EN"
                          ? "3 on the left, 2 on the right"
                          : lang === "FR"
                          ? "3 à gauche, 2 à droite"
                          : lang === "PT"
                          ? "3 à esquerda, 2 à direita"
                          : "3 on the left, 2 on the right",
                    },
                  ]}
                  hasAnswer={questions[6] === 2}
                  callback={answerQuestion}
                  questionIdx={6}
                  headerText={
                    lang === "EN"
                      ? "How many microhaplotypes do you observe in each of the loci?"
                      : lang === "FR"
                      ? "Combien de microhaplotypes observez-vous dans chacun des loci ?"
                      : lang === "PT"
                      ? "Quantos micro-haplótipos você observa em cada um dos loci?"
                      : "How many microhaplotypes do you observe in each of the loci?"
                  }
                />
                <QuestionResponseText
                  className="row-start-4 w-0 min-w-full md:row-start-auto"
                  visible={questions[6] === 2}
                  text={
                    lang === "EN"
                      ? `Correct! The reads have been grouped together according to their microhaplotypes.`
                      : lang === "FR"
                      ? `Correct ! Les lectures ont été regroupées en fonction de leurs microhaplotypes.`
                      : lang === "PT"
                      ? `Correto! As leituras foram agrupadas de acordo com seus micro-haplótipos.`
                      : `Correct! The reads have been grouped together according to their microhaplotypes.`
                  }
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
                headerText={
                  lang === "EN"
                    ? "How many SNPs are there in total?"
                    : lang === "FR"
                    ? "Combien de SNP y a-t-il au total ?"
                    : lang === "PT"
                    ? "Quantos SNPs existem no total?"
                    : "How many SNPs are there in total?"
                }
              />
              <QuestionResponseText
                className="row-start-2 w-0 min-w-full md:row-start-auto"
                // trigger={questions[1] === 0}
                visible={questions[5] === 1}
                text={
                  lang === "EN"
                    ? `Correct!  After correcting the false mutations, there are a total of 6 SNPs in the reads above: 3 in locus 1 and 3 in locus 2. They are indicated by the arrow icons above the reference genome.`
                    : lang === "FR"
                    ? `Correct ! Après avoir corrigé les fausses mutations, il y a un total de 6 SNP dans les lectures ci-dessus : 3 dans le locus 1 et 3 dans le locus 2. Ils sont indiqués par les icônes de flèche au-dessus du génome de référence.`
                    : lang === "PT"
                    ? `Correto! Após corrigir as falsas mutações, há um total de 6 SNPs nas leituras acima: 3 no locus 1 e 3 no locus 2. Eles são indicados pelos ícones de seta acima do genoma de referência.`
                    : `Correct! After correcting the false mutations, there are a total of 6 SNPs in the reads above: 3 in locus 1 and 3 in locus 2. They are indicated by the arrow icons above the reference genome.`
                }
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
        <h6 className="text-lg font-bold">
          {lang === "EN"
            ? "Questions"
            : lang === "FR"
            ? "Questions"
            : lang === "PT"
            ? `Perguntas`
            : "Questions"}
        </h6>
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
              headerText={
                lang === "EN"
                  ? "If this were data from a real sample, what would you estimate to be the MOI?"
                  : lang === "FR"
                  ? "Si ces données provenaient d'un échantillon réel, quelle serait votre estimation du MOI ?"
                  : lang === "PT"
                  ? "Se estes fossem dados de uma amostra real, qual você estimaria ser o MOI?"
                  : "If this were data from a real sample, what would you estimate to be the MOI?"
              }
            />

            <QuestionResponseText
              className="col-span-full row-start-2 w-0 min-w-full md:row-start-auto"
              visible={questions[7] === 2}
              text={
                lang === "EN"
                  ? `Correct! The most likely explanation is that there are 3 parasites in the sample, each with a different allele in locus 1, while some of them share the same allele in locus 2. Exactly how these parasites in locus 2 share the same allele is beyond the scope of this exercise, however, an example is given above.  Thus, the MOI is 3.`
                  : lang === "FR"
                  ? `Correct ! L'explication la plus probable est qu'il y a 3 parasites dans l'échantillon, chacun avec un allèle différent dans le locus 1, tandis que certains d'entre eux partagent le même allèle dans le locus 2. La manière exacte dont ces parasites du locus 2 partagent le même allèle dépasse le cadre de cet exercice, cependant, un exemple est donné ci-dessus. Ainsi, le MOI est de 3.`
                  : lang === "PT"
                  ? `Correto! A explicação mais provável é que existam 3 parasitas na amostra, cada um com um alelo diferente no locus 1, enquanto alguns deles compartilham o mesmo alelo no locus 2. Exatamente como esses parasitas no locus 2 compartilham o mesmo alelo está além do escopo deste exercício, no entanto, um exemplo é dado acima. Assim, o MOI é 3.`
                  : `Correct! The most likely explanation is that there are 3 parasites in the sample, each with a different allele in locus 1, while some of them share the same allele in locus 2. Exactly how these parasites in locus 2 share the same allele is beyond the scope of this exercise, however, an example is given above. Thus, the MOI is 3.`
              }
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
                      text:
                        lang === "EN"
                          ? "Yes"
                          : lang === "FR"
                          ? `Oui`
                          : lang === "PT"
                          ? `Sim`
                          : `Yes`,
                    },
                    {
                      checked: questions[8] === 1,
                      correct: true,
                      index: 1,
                      text:
                        lang === "EN"
                          ? "No"
                          : lang === "FR"
                          ? "Non"
                          : lang === "PT"
                          ? "Não"
                          : "No",
                    },
                    {
                      checked: questions[8] === 2,
                      correct: false,
                      index: 2,
                      text:
                        lang === "EN"
                          ? "Can't tell"
                          : lang === "FR"
                          ? `Peut pas dire`
                          : lang === "PT"
                          ? `Não é possível dizer`
                          : "Can't tell",
                    },
                  ]}
                  hasAnswer={questions[8] === 1}
                  callback={answerQuestion}
                  questionIdx={8}
                  headerText={
                    lang === "EN"
                      ? "If you were told that resistance to an antimalarial drug required a microhaplotype sequence from locus 1 represented by the 3 SNPs GAC,  would this infection contain a drug resistant parasite?"
                      : lang === "FR"
                      ? "Si l'on vous disait que la résistance à un médicament antipaludique nécessitait une séquence de microhaplotype du locus 1 représentée par les 3 SNP GAC, cette infection contiendrait-elle un parasite résistant aux médicaments ?"
                      : lang === "PT"
                      ? "Se lhe dissessem que a resistência a um medicamento antimalárico exigia uma sequência de micro-haplótipo do locus 1 representada pelos 3 SNPs GAC, esta infecção conteria um parasita resistente a medicamentos?"
                      : "If you were told that resistance to an antimalarial drug required a microhaplotype sequence from locus 1 represented by the 3 SNPs GAC, would this infection contain a drug resistant parasite?"
                  }
                />
                <QuestionResponseText
                  className="col-span-full row-start-2 mt-4 w-0 min-w-full md:row-start-auto"
                  visible={questions[8] === 1}
                  text={
                    lang === "EN"
                      ? `That’s right - there are only 3 microhaplotypes present in this sample at locus 1, and none of them match the drug resistant sequence.`
                      : lang === "FR"
                      ? `C'est juste - il n'y a que trois microhaplotypes présents dans cet échantillon au locus 1, et aucun d'entre eux ne correspond à la séquence résistante aux médicaments.`
                      : lang === "PT"
                      ? `Isso mesmo - existem apenas 3 micro-haplótipos presentes nesta amostra no locus 1, e nenhum deles corresponde à sequência resistente ao medicamento.`
                      : `That’s right - there are only 3 microhaplotypes present in this sample at locus 1, and none of them match the drug resistant sequence.`
                  }
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // return (
  //   <div className="mx-auto my-12 max-w-6xl px-4">
  //     {phase === 4 && (
  //       <div className={"fadeIn500"}>
  //         <FormHeader text="Questions" />
  //         <MultiRowLayout
  //           style={{
  //             rowGap: 32,
  //           }}
  //           topLeft={
  //             <KnowledgeCheckQuestion
  //               triggerEnd
  //               trigger={phase === 4}
  //               classNames={{
  //                 container: "",
  //                 answers: "mr-auto",
  //                 answersContainer:
  //                   "grid gap-y-4 gap-x-24 grid-cols-2 mt-4 justify-between",
  //               }}
  //               answers={[
  //                 {
  //                   checked: questions[1] === 0,
  //                   correct: true,
  //                   index: 0,
  //                   text: "2",
  //                 },
  //                 {
  //                   checked: questions[1] === 1,
  //                   correct: false,
  //                   index: 1,
  //                   text: "4",
  //                 },
  //                 {
  //                   checked: questions[1] === 2,
  //                   correct: false,
  //                   index: 2,
  //                   text: "6",
  //                 },
  //                 {
  //                   checked: questions[1] === 3,
  //                   correct: false,
  //                   index: 3,
  //                   text: "10",
  //                 },
  //               ]}
  //               hasAnswer={questions[1] === 0}
  //               callback={answerQuestion}
  //               questionIdx={1}
  //               headerText="How many loci do we have reads for in this example?"
  //             />
  //           }
  //           bottomLeft={
  //             <QuestionResponseText
  //               className="row-start-2 w-0 min-w-full md:row-start-auto"
  //               // trigger={questions[1] === 0}
  //               visible={questions[1] === 0}
  //               text={`Correct!
  //           Locus (plural: "loci") refers to a specific position or location on a chromosome where a particular gene or DNA sequence is located. In this example, there are two loci that denote the location of the sequence generated reads.`}
  //             />
  //           }
  //           topRight={
  //             questions[1] === 0 ? (
  //               <KnowledgeCheckQuestion
  //                 trigger={false}
  //                 classNames={{
  //                   container: "fadeIn500",
  //                   answers: "mr-auto",
  //                   answersContainer:
  //                     "grid gap-y-4 mt-4 gap-x-12 justify-between grid-cols-2",
  //                 }}
  //                 answers={[
  //                   {
  //                     checked: questions[2] === 0,
  //                     correct: false,
  //                     index: 0,
  //                     text: "5 in locus 1, 5 in locus 2",
  //                   },
  //                   {
  //                     checked: questions[2] === 1,
  //                     correct: true,
  //                     index: 1,
  //                     text: "6 in locus 1, 4 in locus 2",
  //                   },
  //                   {
  //                     checked: questions[2] === 2,
  //                     correct: false,
  //                     index: 2,
  //                     text: "10 in locus 1, 0 in locus 2",
  //                   },
  //                   {
  //                     checked: questions[2] === 3,
  //                     correct: false,
  //                     index: 3,
  //                     text: "0 in locus 1, 10 in locus 2",
  //                   },
  //                 ]}
  //                 hasAnswer={questions[2] === 1}
  //                 callback={answerQuestion}
  //                 questionIdx={2}
  //                 headerText="How many reads are there in each locus?"
  //               />
  //             ) : undefined
  //           }
  //           bottomRight={
  //             <QuestionResponseText
  //               // trigger={questions[2] === 1}
  //               visible={questions[2] === 1}
  //               text={`This is what we call sequencing depth: we have a depth of 6 reads in locus 1 and 4 reads in locus 2. You were able to get these numbers because you aligned the reads to a reference genome.`}
  //             />
  //           }
  //         ></MultiRowLayout>
  //       </div>
  //     )}
  //     {phase === 7.5 && (
  //       <MultiRowLayout
  //         topLeft={
  //           <div className="col-span-full">
  //             <FormHeader text="Questions" />
  //             <KnowledgeCheckQuestion
  //               trigger={!completion[7.5]}
  //               classNames={{
  //                 container: "",
  //                 answers: "mr-auto",
  //                 answersContainer: "grid gap-y-4 mt-4 justify-between",
  //               }}
  //               headerText="You ended up discarding 3 reads. What made you throw these 3 away while keeping the others?  Choose all that apply."
  //               answers={[
  //                 {
  //                   checked: Array.isArray(questions[0])
  //                     ? questions[0].includes(0)
  //                     : false,
  //                   correct: false,
  //                   index: 0,
  //                   text: "At least 1 base letter in the read did not match the reference genome",
  //                 },
  //                 {
  //                   checked: Array.isArray(questions[0])
  //                     ? questions[0].includes(1)
  //                     : false,
  //                   correct: true,
  //                   index: 1,
  //                   text: "Many base letters in the read did not match the reference genome.",
  //                 },
  //                 {
  //                   checked: Array.isArray(questions[0])
  //                     ? questions[0].includes(2)
  //                     : false,
  //                   correct: true,
  //                   index: 2,
  //                   text: "The base letters in the read matched the sequence in the reference genome, but at different parts of the sequence.",
  //                 },
  //               ]}
  //               hasAnswer={
  //                 Array.isArray(questions[0]) &&
  //                 questions[0].includes(1) &&
  //                 questions[0].includes(2) &&
  //                 !questions[0].includes(0)
  //               }
  //               callback={(questionIdx, answerIdx) => {
  //                 if (
  //                   Array.isArray(questions[0]) &&
  //                   questions[0].includes(answerIdx)
  //                 ) {
  //                   let copyArr = [...questions[0]];
  //                   let x = copyArr.indexOf(answerIdx);
  //                   copyArr.splice(x, 1);
  //                   setQuestions({ ...questions, 0: copyArr });
  //                   // copyArr.splice()
  //                 } else {
  //                   if (Array.isArray(questions[0])) {
  //                     let copyArr = [...questions[0]];
  //                     copyArr.push(answerIdx);
  //                     setQuestions({ ...questions, 0: copyArr });
  //                   } else {
  //                     setQuestions({ ...questions, 0: [answerIdx] });
  //                   }
  //                 }
  //               }}
  //               questionIdx={0}
  //             />
  //             <QuestionResponseText
  //               className="mt-8"
  //               visible={
  //                 Array.isArray(questions[0]) &&
  //                 questions[0].includes(1) &&
  //                 questions[0].includes(2) &&
  //                 !questions[0].includes(0)
  //               }
  //               text={[
  //                 `
  //                 Sequencing and library preparations are not perfect processes.
  //               Many of the resulting sequences correspond to off-target
  //               amplification (e.g. from the human DNA in our samples) or may be
  //               completely spurious sequences. Some reads may look like a
  //               correct one, partially matching the reference genome, but still
  //               be spurious. Bioinformatics takes care of these artifacts by `,
  //                 <b key={1}>
  //                   <i>filtering</i>
  //                 </b>,
  //                 " the obtained sequences, just as you did.",
  //               ]}
  //             />
  //           </div>
  //         }
  //       ></MultiRowLayout>
  //     )}
  //     {phase === 8 && (
  //       <QuestionResponseText
  //         visible={chimaeraPlaced}
  //         content={
  //           <div className="bg-primaryBlue/10 flex flex-col gap-4 text-pretty p-4 leading-[23px] md:p-6 md:px-8">
  //             <p>
  //               A common type of error that occurs during amplicon sequencing is
  //               a chimera formed from a combination of two different amplicons
  //               that occurs during PCR. Chimeras can be detected because part of
  //               the sequence will match well with one amplicon, while another
  //               part will match well with a different amplicon. These reads also
  //               need to be discarded, since they don't represent actual
  //               sequences in the genome.
  //             </p>
  //           </div>
  //         }
  //         // text={`Sequencing and library preparations are not perfect processes.
  //         //       Many of the resulting sequences correspond to off-target
  //         //       amplification (e.g. from the human DNA in our samples) or may be
  //         //       completely spurious sequences. Some reads may look like a
  //         //       correct one, partially matching the reference genome, but still
  //         //       be spurious. A common type of error that occurs during amplicon
  //         //       sequencing is a chimera formed from a combination of two
  //         //       different amplicons that occurs during PCR. Chimeras can be
  //         //       detected because part of the sequence will match well with one
  //         //       amplicon, while another part will match well with a different
  //         //       amplicon. These reads also need to be discarded, since they
  //         //       don't represent actual sequences in the genome.`}
  //       />
  //     )}
  //     {phase === 9.5 && (
  //       <div className={"fadeIn500"}>
  //         <FormHeader text="Questions" />
  //         <MultiRowLayout
  //           style={{
  //             rowGap: 32,
  //           }}
  //           topLeft={
  //             <KnowledgeCheckQuestion
  //               trigger={questions[3] !== 0}
  //               triggerEnd
  //               classNames={{
  //                 container: "",
  //                 answers: "mr-auto",
  //                 answersContainer:
  //                   "grid gap-y-4 gap-x-24 grid-cols-2 mt-4 justify-between",
  //               }}
  //               answers={[
  //                 {
  //                   checked: questions[3] === 0,
  //                   correct: true,
  //                   index: 0,
  //                   text: "A",
  //                 },
  //                 {
  //                   checked: questions[3] === 1,
  //                   correct: false,
  //                   index: 1,
  //                   text: "C",
  //                 },
  //                 {
  //                   checked: questions[3] === 2,
  //                   correct: false,
  //                   index: 2,
  //                   text: "G",
  //                 },
  //                 {
  //                   checked: questions[3] === 3,
  //                   correct: false,
  //                   index: 3,
  //                   text: "T",
  //                 },
  //               ]}
  //               hasAnswer={questions[3] === 0}
  //               callback={answerQuestion}
  //               questionIdx={3}
  //               headerText="Which base belongs in place of the mutation in locus 1?"
  //             />
  //           }
  //           bottomLeft={
  //             <QuestionResponseText
  //               className="row-start-2 w-0 min-w-full md:row-start-auto"
  //               // trigger={questions[1] === 0}
  //               visible={questions[3] === 0}
  //               content={
  //                 <div
  //                   className={
  //                     "text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400"
  //                   }
  //                 >
  //                   <p>
  //                     Correct! The false mutation has been corrected and now
  //                     matches the base allele in the reference genome.
  //                   </p>
  //                   <div className="mt-2 flex justify-center text-xl italic text-orange-500">
  //                     <span className="inline-block translate-y-1.5">T</span>
  //                     <span className="scale-y-150 text-2xl">&rarr;</span>
  //                     <span className="inline-block translate-y-1.5">A</span>
  //                   </div>
  //                 </div>
  //               }
  //             />
  //           }
  //           topRight={
  //             questions[3] === 0 ? (
  //               <KnowledgeCheckQuestion
  //                 trigger={false}
  //                 classNames={{
  //                   container: "fadeIn500",
  //                   answers: "mr-auto",
  //                   answersContainer:
  //                     "grid gap-y-4 mt-4 gap-x-12 justify-between grid-cols-2 row-start-3 md:row-start-auto",
  //                 }}
  //                 answers={[
  //                   {
  //                     checked: questions[4] === 0,
  //                     correct: true,
  //                     index: 0,
  //                     text: "A",
  //                   },
  //                   {
  //                     checked: questions[4] === 1,
  //                     correct: false,
  //                     index: 1,
  //                     text: "C",
  //                   },
  //                   {
  //                     checked: questions[4] === 2,
  //                     correct: false,
  //                     index: 2,
  //                     text: "G",
  //                   },
  //                   {
  //                     checked: questions[4] === 3,
  //                     correct: false,
  //                     index: 3,
  //                     text: "T",
  //                   },
  //                 ]}
  //                 hasAnswer={questions[4] === 0}
  //                 callback={answerQuestion}
  //                 questionIdx={4}
  //                 headerText="Which base belongs in place of the mutation in locus 2?"
  //               />
  //             ) : undefined
  //           }
  //           bottomRight={
  //             <QuestionResponseText
  //               className="row-start-4 w-0 min-w-full md:row-start-auto"
  //               visible={questions[4] === 0}
  //               content={
  //                 <div
  //                   className={
  //                     "text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400"
  //                   }
  //                 >
  //                   <p>
  //                     Correct! The false mutation has been corrected and now
  //                     matches the base allele in the reference genome.
  //                   </p>
  //                   <div className="mt-2 flex justify-center text-xl italic text-orange-500">
  //                     <span className="inline-block translate-y-1.5">C</span>
  //                     <span className="scale-y-150 text-2xl">&rarr;</span>
  //                     <span className="inline-block translate-y-1.5">A</span>
  //                   </div>
  //                 </div>
  //               }
  //             />
  //           }
  //         ></MultiRowLayout>
  //       </div>
  //     )}
  //     {phase === 10.5 && (
  //       <div className={"fadeIn500"}>
  //         <FormHeader text="Questions" />
  //         <MultiRowLayout
  //           style={{
  //             rowGap: 32,
  //           }}
  //           topLeft={
  //             <KnowledgeCheckQuestion
  //               // trigger={false}
  //               trigger={questions[5] !== 1 && questions[6] === undefined}
  //               classNames={{
  //                 container: "",
  //                 answers: "mr-auto",
  //                 answersContainer:
  //                   "grid gap-y-4 gap-x-24 grid-cols-2 mt-4 justify-between",
  //               }}
  //               answers={[
  //                 {
  //                   checked: questions[5] === 0,
  //                   correct: false,
  //                   index: 0,
  //                   text: "30",
  //                 },
  //                 {
  //                   checked: questions[5] === 1,
  //                   correct: true,
  //                   index: 1,
  //                   text: "6",
  //                 },
  //                 {
  //                   checked: questions[5] === 2,
  //                   correct: false,
  //                   index: 2,
  //                   text: "2",
  //                 },
  //                 {
  //                   checked: questions[5] === 3,
  //                   correct: false,
  //                   index: 3,
  //                   text: "0",
  //                 },
  //               ]}
  //               hasAnswer={questions[5] === 1}
  //               callback={answerQuestion}
  //               questionIdx={5}
  //               headerText="How many SNPs (sites with variation) are there in total?"
  //             />
  //           }
  //           bottomLeft={
  //             <QuestionResponseText
  //               className="row-start-2 w-0 min-w-full md:row-start-auto"
  //               // trigger={questions[1] === 0}
  //               visible={questions[5] === 1}
  //               text={`Correct!  After correcting the false mutations, there are a total of 6 SNPs in the reads above: 3 in locus 1 and 3 in locus 2. They are indicated by the arrow icons above the reference genome.`}
  //             />
  //           }
  //           topRight={
  //             questions[5] === 1 ? (
  //               <KnowledgeCheckQuestion
  //                 trigger={false}
  //                 classNames={{
  //                   container: "fadeIn500",
  //                   answers: "mr-auto",
  //                   answersContainer:
  //                     "grid gap-y-4 mt-4 gap-x-12 justify-between row-start-3 md:row-start-auto",
  //                 }}
  //                 answers={[
  //                   {
  //                     checked: questions[6] === 0,
  //                     correct: false,
  //                     index: 0,
  //                     text: "1 on the left, 1 on the right",
  //                   },
  //                   {
  //                     checked: questions[6] === 1,
  //                     correct: false,
  //                     index: 1,
  //                     text: "2 on the left, 3 on the right",
  //                   },
  //                   {
  //                     checked: questions[6] === 2,
  //                     correct: true,
  //                     index: 2,
  //                     text: "3 on the left, 2 on the right",
  //                   },
  //                 ]}
  //                 hasAnswer={questions[6] === 2}
  //                 callback={answerQuestion}
  //                 questionIdx={6}
  //                 headerText="How many microhaplotypes are there in each locus? Remember, a microhaplotype is a unique combination of SNPs at a given locus"
  //               />
  //             ) : undefined
  //           }
  //           bottomRight={
  //             <QuestionResponseText
  //               className="row-start-4 w-0 min-w-full md:row-start-auto"
  //               visible={questions[6] === 2}
  //               text={`Correct! The reads have been grouped together according to their microhaplotypes.`}
  //             />
  //           }
  //         ></MultiRowLayout>
  //       </div>
  //     )}
  //     {phase === 11 && (
  //       <div className={"fadeIn500"}>
  //         <FormHeader text="Questions" />
  //         <MultiRowLayout
  //           style={{
  //             rowGap: 32,
  //           }}
  //           topLeft={
  //             <div>
  //               <KnowledgeCheckQuestion
  //                 // trigger={false}
  //                 trigger={false}
  //                 classNames={{
  //                   container: "",
  //                   answers: "mr-auto",
  //                   answersContainer:
  //                     "grid gap-y-4 gap-x-24 mt-4 justify-between",
  //                 }}
  //                 answers={[
  //                   {
  //                     checked: questions[7] === 0,
  //                     correct: false,
  //                     index: 0,
  //                     text: "1",
  //                   },
  //                   {
  //                     checked: questions[7] === 1,
  //                     correct: false,
  //                     index: 1,
  //                     text: "2",
  //                   },
  //                   {
  //                     checked: questions[7] === 2,
  //                     correct: true,
  //                     index: 2,
  //                     text: "3",
  //                   },
  //                   {
  //                     checked: questions[7] === 3,
  //                     correct: false,
  //                     index: 3,
  //                     text: "6",
  //                   },
  //                 ]}
  //                 hasAnswer={questions[7] === 2}
  //                 callback={answerQuestion}
  //                 questionIdx={7}
  //                 headerText="If this were data from a real sample, what would the MOI be?"
  //               />
  //               <QuestionResponseText
  //                 className="col-span-full row-start-2 w-0 min-w-full md:row-start-auto"
  //                 visible={questions[7] === 2}
  //                 text={`Correct! The most likely explanation is that there are 3 parasites in the sample: each with a different allele in locus 1, while some of them share the same allele in locus 2. Exactly how these parasites in locus 2 share the same allele is beyond the scope of this exercise, however, an example is given above.  Thus, the MOI is 3.`}
  //               />
  //             </div>
  //           }
  //           // bottomLeft={
  //           //   <QuestionResponseText
  //           //     className="col-span-full row-start-2 w-0 min-w-full md:row-start-auto"
  //           //     visible={questions[7] === 2}
  //           //     text={`Correct! The most likely explanation is that there are 3 parasites in the sample: each with a different allele in locus 1, while some of them share the same allele in locus 2. Exactly how these parasites in locus 2 share the same allele is beyond the scope of this exercise, however, an example is given above.  Thus, the MOI is 3.`}
  //           //   />
  //           // }
  //         ></MultiRowLayout>
  //       </div>
  //     )}
  //   </div>
  // );
}
