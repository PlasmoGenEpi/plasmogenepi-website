import { ExtractAtomValue, useAtom, useAtomValue } from "jotai";
import KnowledgeCheck from "../../Shared/KnowledgeChecks/KnowledgeCheck";
import KnowledgeCheckQuestion from "../../Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import PartThreePositiveControlBoard from "./PositiveControlBoard/PartThreePositiveControlBoard";
import {
  partThreeCompletionAtom,
  partThreePositiveControlBoardsAtom,
  phase1Atom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { useEffect } from "react";
import QuestionResponseText from "../../Shared/misc/QuestionResponseText";
import { countMHPs } from "../../helpers";

export default function PartThreeQuestions({
  lang,
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const [boards, setBoards] = useAtom(partThreePositiveControlBoardsAtom);
  const selectedBoard = useAtomValue(selectedPositiveControlBoardAtom);
  const currentBoard = boards[selectedBoard];
  const [complete, setComplete] = useAtom(partThreeCompletionAtom);
  const phase = useAtomValue(phase1Atom);
  let mhpCount = countMHPs(currentBoard.inputs);

  // useEffect(() => {
  //   setBoards({
  //     ...boards,

  //     [6]: {
  //       ...boards[6],
  //       questions: {
  //         1: null,
  //         2: null,
  //         3: null,
  //       },
  //       questionsValid: false,
  //     },
  //   });
  //   setComplete({ ...complete, [phase]: false });
  // }, []);

  if (selectedBoard === 1) {
    return (
      <div className="flex flex-col gap-8">
        <KnowledgeCheckQuestion
          classNames={{
            container: `fadeIn500`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[1] === idx,
                correct:
                  Object.values(mhpCount).filter((locus, idx2) => {
                    return locus === 1;
                  }).length === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] !== answerIdx) {
              newQuestionObj[questionIdx] = answerIdx;
            } else {
              newQuestionObj[questionIdx] = null;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={currentBoard.questions[1] === 4}
          headerText={
            lang === "EN"
              ? `How many loci in positive control 1 (MOI = 1) have a single allele?`
              : lang === "FR"
              ? `Combien de loci dans le contrôle positif 1 (MOI = 1) ont un seul allèle ?`
              : lang === "PT"
              ? `Quantos loci no controle positivo 1 (MOI = 1) têm um único alelo?`
              : ``
          }
          questionIdx={1}
        />
        <KnowledgeCheckQuestion
          classNames={{
            container: `${
              currentBoard.questions[1] !== 4 ? "invisible" : "fadeIn500"
            }`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[2] === idx,
                correct:
                  Object.values(mhpCount).filter((locus, idx2) => {
                    return locus > 1;
                  }).length === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] !== answerIdx) {
              newQuestionObj[questionIdx] = answerIdx;
            } else {
              newQuestionObj[questionIdx] = null;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={currentBoard.questions[2] === 0}
          headerText={
            lang === "EN"
              ? `How many loci in positive control 1 have have more than 1 allele?`
              : lang === "FR"
              ? `Combien de loci dans le contrôle positif 1 ont plus d'un allèle ?`
              : lang === "PT"
              ? `Quantos loci no controle positivo 1 têm mais de 1 alelo?`
              : ``
          }
          questionIdx={2}
        />
      </div>
    );
  } else if (selectedBoard === 2) {
    return (
      <div className="flex flex-col gap-8">
        <KnowledgeCheckQuestion
          classNames={{
            container: `fadeIn500`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[1] === idx,
                correct:
                  Object.values(mhpCount).filter((locus, idx2) => {
                    return locus === 1;
                  }).length === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] !== answerIdx) {
              newQuestionObj[questionIdx] = answerIdx;
            } else {
              newQuestionObj[questionIdx] = null;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={currentBoard.questions[1] === 4}
          headerText={
            lang === "EN"
              ? `How many loci in positive control 2 (MOI = 1) have a single allele?`
              : lang === "FR"
              ? `Combien de loci dans le contrôle positif 2 (MOI = 1) ont un seul allèle ?`
              : lang === "PT"
              ? `Quantos loci no controle positivo 2 (MOI = 1) têm um único alelo?`
              : ``
          }
          questionIdx={1}
        />
        <KnowledgeCheckQuestion
          classNames={{
            container: `${
              currentBoard.questions[1] !== 4 ? "invisible" : "fadeIn500"
            }`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[2] === idx,
                correct:
                  Object.values(mhpCount).filter((locus, idx2) => {
                    return locus > 1;
                  }).length === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] !== answerIdx) {
              newQuestionObj[questionIdx] = answerIdx;
            } else {
              newQuestionObj[questionIdx] = null;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={currentBoard.questions[2] === 0}
          headerText={
            lang === "EN"
              ? `How many loci in positive control 2 have have more than 1 allele?`
              : lang === "FR"
              ? `Combien de loci dans le contrôle positif 2 ont plus d'un allèle ?`
              : lang === "PT"
              ? `Quantos loci no controle positivo 2 têm mais de 1 alelo?`
              : ``
          }
          questionIdx={2}
        />
      </div>
    );
  } else if (selectedBoard === 3) {
    return (
      <div className="flex flex-col gap-8">
        <KnowledgeCheckQuestion
          classNames={{
            container: `fadeIn500`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[1] === idx,
                correct:
                  Object.values(mhpCount).filter((locus, idx2) => {
                    return locus === 1;
                  }).length === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] !== answerIdx) {
              newQuestionObj[questionIdx] = answerIdx;
            } else {
              newQuestionObj[questionIdx] = null;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={
            currentBoard.questions[1] ===
            Object.values(mhpCount).filter((locus, idx2) => {
              return locus === 1;
            }).length
          }
          headerText={
            lang === "EN"
              ? `How many loci in positive control 3 (MOI = 2) have a single allele?`
              : lang === "FR"
              ? `Combien de loci dans le contrôle positif 3 (MOI = 2) ont un seul allèle ?`
              : lang === "PT"
              ? `Quantos loci no controle positivo 3 (MOI = 2) têm um único alelo?`
              : ``
          }
          questionIdx={1}
        />
        <KnowledgeCheckQuestion
          classNames={{
            container: `${
              currentBoard.questions[1] !==
              Object.values(mhpCount).filter((locus, idx2) => {
                return locus === 1;
              }).length
                ? "invisible"
                : "fadeIn500"
            }`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[2] === idx,
                correct: Math.max(...Object.values(mhpCount)) === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] !== answerIdx) {
              newQuestionObj[questionIdx] = answerIdx;
            } else {
              newQuestionObj[questionIdx] = null;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={
            currentBoard.questions[2] === Math.max(...Object.values(mhpCount))
          }
          headerText={
            lang === "EN"
              ? `What is the highest number of alleles seen at a given locus in positive control 3?`
              : lang === "FR"
              ? `Quel est le nombre le plus élevé d'allèles observés à un locus donné dans le contrôle positif 3 ?`
              : lang === "PT"
              ? `Qual é o maior número de alelos observados em um determinado locus no controle positivo 3?`
              : ``
          }
          questionIdx={2}
        />
        <KnowledgeCheckQuestion
          classNames={{
            container: `${
              currentBoard.questions[2] !== Math.max(...Object.values(mhpCount))
                ? "invisible"
                : "fadeIn500"
            }`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[3] === idx,
                correct: idx === 0,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            newQuestionObj[questionIdx] = answerIdx;
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={currentBoard.questions[3] === 0}
          headerText={
            lang === "EN"
              ? `How many loci have more than two alleles in positive control 3?`
              : lang === "FR"
              ? `Combien de loci ont plus de deux allèles dans le contrôle positif 3 ?`
              : lang === "PT"
              ? `Quantos loci têm mais de dois alelos no controle positivo 3?`
              : ``
          }
          questionIdx={3}
        />
      </div>
    );
  } else if (selectedBoard === 4) {
    return (
      <div className="flex flex-col gap-8">
        <KnowledgeCheckQuestion
          classNames={{
            container: `fadeIn500`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[1] === idx,
                correct:
                  Object.values(mhpCount).filter((locus, idx2) => {
                    return locus === 1;
                  }).length === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            newQuestionObj[questionIdx] = answerIdx;
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={
            currentBoard.questions[1] ===
            Object.values(mhpCount).filter((locus, idx2) => {
              return locus === 1;
            }).length
          }
          headerText={
            lang === "EN"
              ? `How many loci in positive control 4 (MOI = 2) have a single allele?`
              : lang === "FR"
              ? `Combien de loci dans le contrôle positif 4 (MOI = 2) ont un seul allèle ?`
              : lang === "PT"
              ? `Quantos loci no controle positivo 4 (MOI = 2) têm um único alelo?`
              : ``
          }
          questionIdx={1}
        />
        <KnowledgeCheckQuestion
          classNames={{
            container: `${
              currentBoard.questions[1] !==
              Object.values(mhpCount).filter((locus, idx2) => {
                return locus === 1;
              }).length
                ? "invisible"
                : "fadeIn500"
            }`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[2] === idx,
                correct: Math.max(...Object.values(mhpCount)) === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            newQuestionObj[questionIdx] = answerIdx;
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={
            currentBoard.questions[2] === Math.max(...Object.values(mhpCount))
          }
          headerText={
            lang === "EN"
              ? `What is the highest number of alleles seen at a given locus in positive control 4?`
              : lang === "FR"
              ? `Quel est le nombre le plus élevé d'allèles observés à un locus donné dans le contrôle positif 4 ?`
              : lang === "PT"
              ? `Qual é o maior número de alelos observados em um determinado locus no controle positivo 4?`
              : ``
          }
          questionIdx={2}
        />
        <QuestionResponseText
          visible={
            currentBoard.questions[2] === Math.max(...Object.values(mhpCount))
          }
          text={
            lang === "EN"
              ? `Are you starting to notice any relationship between MOI and the number of alleles detected? What do you think you will see when you genotype the next 2 controls with MOI of 4?`
              : lang === "FR"
              ? `Commencez-vous à remarquer une relation entre le MOI et le nombre d'allèles détectés ? Que pensez-vous qu'il se passera lorsque vous génotyperez les 2 prochains contrôles avec un MOI de 4 ?`
              : lang === "PT"
              ? `Você está começando a notar alguma relação entre MOI e o número de alelos detectados? O que você acha que verá quando genotipar os próximos 2 controles com MOI de 4?`
              : ``
          }
        />
      </div>
    );
  } else if (selectedBoard === 5) {
    return (
      <div className="flex flex-col gap-8">
        <KnowledgeCheckQuestion
          classNames={{
            container: `fadeIn500`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[1] === idx,
                correct:
                  Object.values(mhpCount).filter((locus, idx2) => {
                    return locus === 1;
                  }).length === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            newQuestionObj[questionIdx] = answerIdx;
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={
            currentBoard.questions[1] ===
            Object.values(mhpCount).filter((locus, idx2) => {
              return locus === 1;
            }).length
          }
          headerText={
            lang === "EN"
              ? `How many loci in positive control 5 (MOI = 4) have a single allele?`
              : lang === "FR"
              ? `Combien de loci dans le contrôle positif 5 (MOI = 4) ont un seul allèle ?`
              : lang === "PT"
              ? `Quantos loci no controle positivo 5 (MOI = 4) têm um único alelo?`
              : ""
          }
          questionIdx={1}
        />
        <KnowledgeCheckQuestion
          classNames={{
            headerText: "mb-4",

            container: `${
              currentBoard.questions[1] !==
              Object.values(mhpCount).filter((locus, idx2) => {
                return locus === 1;
              }).length
                ? "invisible"
                : "fadeIn500"
            }`,
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[2] === idx,
                correct: Math.max(...Object.values(mhpCount)) === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            newQuestionObj[questionIdx] = answerIdx;
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={
            currentBoard.questions[2] === Math.max(...Object.values(mhpCount))
          }
          headerText={
            lang === "EN"
              ? `What is the highest number of alleles seen at a given locus in positive control 5?`
              : lang === "FR"
              ? `Quel est le nombre le plus élevé d'allèles observés à un locus donné dans le contrôle positif 5 ?`
              : lang === "PT"
              ? `Qual é o maior número de alelos observados em um determinado locus no controle positivo 5?`
              : ""
          }
          questionIdx={2}
        />
        <KnowledgeCheckQuestion
          classNames={{
            headerText: "mb-4",

            container: `${
              currentBoard.questions[2] !== Math.max(...Object.values(mhpCount))
                ? "invisible"
                : "fadeIn500"
            }`,
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[3] === idx,
                correct:
                  Object.values(mhpCount).filter((count) => {
                    return count === Math.max(...Object.values(mhpCount));
                  }).length === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] !== answerIdx) {
              newQuestionObj[questionIdx] = answerIdx;
            } else {
              newQuestionObj[questionIdx] = null;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={
            currentBoard.questions[3] ===
            Object.values(mhpCount).filter((count) => {
              return count === Math.max(...Object.values(mhpCount));
            }).length
          }
          headerText={
            lang === "EN"
              ? `How many loci have this highest number of alleles?`
              : lang === "FR"
              ? `Combien de loci ont ce nombre le plus élevé d'allèles ?`
              : lang === "PT"
              ? `Quantos loci têm esse maior número de alelos?`
              : ""
          }
          questionIdx={3}
        />
      </div>
    );
  } else if (selectedBoard === 6) {
    return (
      <div className="flex flex-col">
        <KnowledgeCheckQuestion
          classNames={{
            container: `fadeIn500`,
            headerText: "mb-4",
            answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={Array(5)
            .fill(0)
            .map((el, idx) => {
              return {
                checked: currentBoard.questions[1] === idx,
                correct: Math.max(...Object.values(mhpCount)) === idx,
                index: idx,
                text: idx.toString(),
              };
            })}
          callback={(questionIdx: number, answerIdx: number) => {
            let newBoards = { ...boards };
            let newQuestionObj = { ...currentBoard.questions };
            if (newQuestionObj[questionIdx] !== answerIdx) {
              newQuestionObj[questionIdx] = answerIdx;
            } else {
              newQuestionObj[questionIdx] = null;
            }
            setBoards({
              ...newBoards,
              [selectedBoard]: {
                ...currentBoard,
                questions: newQuestionObj,
              },
            });
          }}
          hasAnswer={
            currentBoard.questions[1] === Math.max(...Object.values(mhpCount))
          }
          headerText={
            lang === "EN"
              ? `What is the highest number of alleles seen at a given locus in positive control 6? (MOI = 4)`
              : lang === "FR"
              ? `Quel est le nombre le plus élevé d'allèles observés à un locus donné dans le contrôle positif 6 ? (MOI = 4)`
              : lang === "PT"
              ? `Qual é o maior número de alelos observados em um determinado locus no controle positivo 6? (MOI = 4)`
              : ""
          }
          questionIdx={1}
        />
        {/* w-[calc(100%+16px)] -translate-x-2  */}
        <QuestionResponseText
          className="mb-8 mt-4"
          trigger={
            currentBoard.questions[1] === Math.max(...Object.values(mhpCount))
          }
          visible={
            currentBoard.questions[1] === Math.max(...Object.values(mhpCount))
          }
          text={
            lang === "EN"
              ? `Do the results for controls 5 and 6, with MOI of 4, match your
            prediction? Why or why not? Take a moment to think about this
            question.`
              : lang === "FR"
              ? `Les résultats des contrôles 5 et 6, avec un MOI de 4, correspondent-ils à votre
            prédiction ? Pourquoi ou pourquoi pas ? Prenez un moment pour réfléchir à cette
            question.`
              : lang === "PT"
              ? `Os resultados dos controles 5 e 6, com MOI de 4, correspondem ao seu
            previsão? Por que ou por que não? Reserve um momento para pensar sobre isso
            questão.`
              : ``
          }
        />
        <div
          role="radiogroup"
          style={{
            animationDelay: !complete[phase] ? "3000ms" : "0ms",
          }}
          className={`${
            currentBoard.questions[1] === Math.max(...Object.values(mhpCount))
              ? "fadeIn500"
              : "invisible"
          }`}
        >
          <h4 className={`text-pretty [font-size:15px]`}>
            {lang === "EN"
              ? `Why don&apos;t all the loci in positive control 5 and positive
            control 6 have 4 alleles detected, even though the MOI = 4?`
              : lang === "FR"
              ? `Pourquoi tous les loci du contrôle positif 5 et du contrôle positif 6 n'ont-ils pas 4 allèles détectés, même si le MOI = 4 ?`
              : lang === "PT"
              ? `Por que nem todos os loci no controle positivo 5 e no controle positivo 6 têm 4 alelos detectados, mesmo que o MOI = 4?`
              : ""}
          </h4>
          <div className={`mt-4 flex flex-col gap-4`}>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  disabled={currentBoard.questions[2] === 3}
                  onChange={(e) => {
                    setBoards({
                      ...boards,
                      [selectedBoard]: {
                        ...currentBoard,
                        questions: {
                          ...currentBoard["questions"],
                          2: currentBoard["questions"][2] === 1 ? null : 1,
                        },
                      },
                    });
                  }}
                  checked={currentBoard.questions[2] === 1}
                  className="h-4 w-4 accent-[red] [--chkbg:red] md:h-[14px] md:w-[14px]"
                  id={"interactive-q2-a1"}
                  type="checkbox"
                ></input>
                <label
                  className={`text-sm ${
                    currentBoard.questions[2] !== 3 ? "" : "text-gray-500"
                  }`}
                  htmlFor="interactive-q2-a1"
                >
                  {lang === "EN"
                    ? `The genotyping is wrong.`
                    : lang === "FR"
                    ? `Le génotypage est incorrect.`
                    : lang === "PT"
                    ? `A genotipagem está errada.`
                    : ``}
                </label>
              </div>
              {/* <p
                className={`${currentBoard.questions[2] === 1 ? "fadeIn500" : "invisible max-h-0"} overflow-hidden  bg-cloneRed/10 p-6 text-sm `}
              >
                Not correct, fortunately in this exercise we are assuming
                genotyping is perfect. This will not always be the case in
                reality though!
              </p> */}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  disabled={currentBoard.questions[2] === 3}
                  onChange={(e) => {
                    setBoards({
                      ...boards,
                      [selectedBoard]: {
                        ...currentBoard,
                        questions: {
                          ...currentBoard["questions"],
                          2: currentBoard["questions"][2] === 2 ? null : 2,
                        },
                      },
                    });
                  }}
                  checked={currentBoard.questions[2] === 2}
                  className="h-4 w-4 accent-[red] [--chkbg:red] md:h-[14px] md:w-[14px]"
                  id={"interactive-q2-a2"}
                  type="checkbox"
                ></input>
                <label
                  className={`text-sm ${
                    currentBoard.questions[2] !== 3 ? "" : "text-gray-500"
                  }`}
                  htmlFor="interactive-q2-a2"
                >
                  {lang === "EN"
                    ? `There aren't 4 possible alleles at each locus.`
                    : lang === "FR"
                    ? `Il n'y a pas 4 allèles possibles à chaque locus.`
                    : lang === "PT"
                    ? `Não há 4 alelos possíveis em cada locus.`
                    : ``}
                </label>
              </div>
              {/* <p
                className={`${currentBoard.questions[2] === 2 ? "fadeIn500" : "invisible max-h-0"} overflow-hidden bg-cloneRed/10 p-6 text-sm `}
              >
                Not true, there are actually eight possible alleles for every
                locus, as you identified during the genotyping process.
              </p> */}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  onChange={(e) => {
                    setBoards({
                      ...boards,
                      [selectedBoard]: {
                        ...currentBoard,
                        questions: {
                          ...currentBoard["questions"],
                          2: 3,
                        },
                      },
                    });
                  }}
                  checked={currentBoard.questions[2] === 3}
                  className="h-4 w-4 md:h-[14px] md:w-[14px] dark:accent-emerald-400"
                  type="checkbox"
                  id="interactive-q2-a3"
                ></input>
                <label className={`text-sm`} htmlFor="interactive-q2-a3">
                  {lang === "EN"
                    ? `Sometimes alleles in different strains will match by chance,
                  even if diversity is high`
                    : lang === "FR"
                    ? `Parfois, les allèles de différentes souches correspondent par hasard,
                  même si la diversité est élevée`
                    : lang === "PT"
                    ? `Às vezes, os alelos em diferentes cepas corresponderão por acaso,
                  mesmo que a diversidade seja alta`
                    : ``}
                </label>
              </div>
              {/* <div className="min-h-32 dark:text-emerald-400 dark:bg-zinc-900/50 bg-interactiveBlue/10">
                <p
                  key={currentBoard.questions[2]}
                  className={`${
                    currentBoard.questions[2] === 3
                      ? "bg-primaryBlue/10"
                      : currentBoard.questions[2] !== null
                      ? "bg-cloneRed/10"
                      : "invisible"
                  } ${
                    currentBoard.questions[2] !== null ? "fadeIn500" : ""
                  }  mt-6  text-pretty p-6 text-sm md:px-8 md:py-6`}
                >
                  {currentBoard.questions[2] === 3
                    ? `That is correct! Even with eight possible alleles, as in this
                exercise, there is a reasonable chance that some of them will
                match if you have 4 of them. If you pick nine of them, it is
                certain that at least 2 will be the same!`
                    : currentBoard.questions[2] === 2
                    ? `Not true, there are actually eight possible alleles for every
                locus, as you identified during the genotyping process.`
                    : currentBoard.questions[2] === 1
                    ? `Not correct, fortunately in this exercise we are assuming
                      genotyping is perfect. This will not always be the case in
                reality though!`
                    : ``}
                </p>
              </div> */}
              <QuestionResponseText
                key={currentBoard.questions[2]}
                visible={!!currentBoard.questions[2]}
                className="mt-4"
                content={
                  currentBoard.questions[2] === 3 ? (
                    <div
                      className={
                        "text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400"
                      }
                    >
                      <p>
                        {lang === "EN"
                          ? `That is correct! Even with eight possible alleles, as in
                        this exercise, there is a reasonable chance that some of
                        them will match if you have 4 of them. If you pick nine
                        of them, it is certain that at least 2 will be the same!`
                          : lang === "FR"
                          ? `C'est exact ! Même avec huit allèles possibles, comme dans
                        cet exercice, il y a une chance raisonnable que certains d'entre eux
                        correspondent si vous en avez 4. Si vous en choisissez neuf, c'est
                        certain qu'au moins 2 seront les mêmes !`
                          : lang === "PT"
                          ? `Isso está correto! Mesmo com oito alelos possíveis, como em
                        este exercício, há uma chance razoável de que alguns deles
                        corresponderão se você tiver 4 deles. Se você escolher nove
                        deles, é certo que pelo menos 2 serão iguais!`
                          : ``}
                      </p>
                    </div>
                  ) : currentBoard.questions[2] ? (
                    <div
                      className={`text-pretty bg-cloneRed/20 ${
                        lang === "EN" ? "p-4 md:p-6 md:px-8" : ""
                      } leading-[23px]  dark:border-2 dark:border-microRed dark:bg-zinc-900/50 dark:text-white`}
                    >
                      <p>
                        {currentBoard.questions[2] === 2
                          ? lang === "EN"
                            ? `Not true, there are actually eight possible alleles for every
                locus, as you identified during the genotyping process.`
                            : null
                          : currentBoard.questions[2] === 1
                          ? lang === "EN"
                            ? `Not correct, fortunately in this exercise we are assuming
                      genotyping is perfect. This will not always be the case in
                reality though!`
                            : null
                          : null}
                      </p>
                    </div>
                  ) : null
                }
              />
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}

// export const partThreeQuestions = function (selectedBoard: number) {
//   let x: {
//     [key: number]: {
//       [key: number]: {
//         text: string;
//         count: number[],
//       };
//     };
//   } = {
//     1: {
//       1: {
//         text: `How many loci in positive control ${selectedBoard} have a single allele?`,
//         count: [1],
//       },
//       2: `How many loci in positive control ${selectedBoard} have have more than 1 allele?`,
//     },
//     2: {
//       1: "",
//       2: "",
//     },
//     3: {
//       1: "",
//       2: "",
//     },
//     4: {
//       1: "",
//       2: "",
//     },
//     5: {
//       1: "",
//       2: "",
//     },
//     6: {
//       1: "",
//       2: "",
//       3: "",
//     },
//   };
//   return x[selectedBoard];
// };
