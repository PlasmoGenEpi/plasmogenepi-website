import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import P6CloneRows from "../CloneRows/P6MHPCloneRows";
import P6MHPCloneRows from "../CloneRows/P6MHPCloneRows";
import { useEffect } from "react";
import {
  partSixCloneRowsMHPsAtom,
  partSixCompletionAtom,
  phase2Atom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { atomWithStorage, RESET } from "jotai/utils";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export const SNPMHPInitialQuestionAtom = atomWithStorage<null | number>(
  "SNPMHPInitialQuestionAtom",
  null,
);

export default function GenerateMHPCloneRows({
  lang,
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const phase = useAtomValue(phase2Atom);
  const [question, setQuestion] = useAtom(SNPMHPInitialQuestionAtom);
  const completion = useAtomValue(partSixCompletionAtom);

  // useEffect(() => {
  //   setCloneRowsMHPs(RESET);
  //   // setCompletion({ ...completion, 22: false });
  // }, []);

  return (
    <InteractivePrimaryLayout
      leftHeader={
        lang === "EN"
          ? `Lab Clones with Microhaplotypes`
          : lang === "FR"
          ? `Clones de laboratoire avec microhaplotypes`
          : lang === "PT"
          ? `Clones de laboratório com microhaplótipos`
          : ""
      }
      leftContent={<P6MHPCloneRows />}
      rightHeader={
        phase === 22.5
          ? lang === "EN"
            ? "Questions"
            : lang === "FR"
            ? `Questions`
            : lang === "PT"
            ? `Perguntas`
            : ""
          : ""
      }
      rightContent={
        <div className={phase === 22.5 ? "" : "hidden"}>
          <KnowledgeCheckQuestion
            callback={(questionIdx, answerIdx) => {
              if (answerIdx === question) {
                setQuestion(null);
              } else {
                setQuestion(answerIdx);
              }
            }}
            hasAnswer={question === 0}
            questionIdx={1}
            classNames={{
              answersContainer: "grid gap-4 mt-4 mb-8",
            }}
            answers={[
              {
                checked: question === 0,
                correct: true,
                index: 0,
                text:
                  lang === "EN"
                    ? "IBD will be the same for all of the comparisons as before when you used SNPs. But, IBS will be on average lower, since there is a 1/8 chance of matching at each loci instead of ½ when you used SNPs."
                    : lang === "FR"
                    ? "L'IBD sera la même pour toutes les comparaisons qu'avant lorsque vous avez utilisé des SNP. Mais, l'IBS sera en moyenne plus faible, car il y a une chance sur 8 de correspondance à chaque locus au lieu de ½ lorsque vous avez utilisé des SNP."
                    : lang === "PT"
                    ? "O IBD será o mesmo para todas as comparações como antes, quando utilizou SNPs. Mas, o IBS será, em média, inferior, uma vez que existe uma probabilidade de 1/8 de correspondência em cada locus em vez de ½ quando utilizou SNPs."
                    : "",
              },
              {
                checked: question === 1,
                correct: false,
                index: 1,
                text:
                  lang === "EN"
                    ? "Both IBD and IBD will be lower than when you used SNPs."
                    : lang === "FR"
                    ? "L'IBD et l'IBS seront tous deux inférieurs à ceux que vous avez utilisés avec les SNP."
                    : lang === "PT"
                    ? "Tanto o IBD como o IBS serão inferiores aos que utilizou com SNPs."
                    : "",
              },
              {
                checked: question === 2,
                correct: false,
                index: 2,
                text:
                  lang === "EN"
                    ? "Both IBD and IBS will be higher than when you used SNPs."
                    : lang === "FR"
                    ? "L'IBD et l'IBS seront tous deux supérieurs à ceux que vous avez utilisés avec les SNP."
                    : lang === "PT"
                    ? "Tanto o IBD como o IBS serão superiores aos que utilizou com SNPs."
                    : "",
              },
              {
                checked: question === 3,
                correct: false,
                index: 3,
                text:
                  lang === "EN"
                    ? "Both IBD and IBS will remain the same as when you used SNPs."
                    : lang === "FR"
                    ? "L'IBD et l'IBS resteront les mêmes que lorsque vous avez utilisé des SNP."
                    : lang === "PT"
                    ? "Tanto o IBD como o IBS permanecerão os mesmos que quando utilizou SNPs."
                    : "",
              },
            ]}
            headerText={
              lang === "EN"
                ? "What do you think you will see?"
                : lang === "FR"
                ? "Que pensez-vous que vous verrez ?"
                : lang === "PT"
                ? "O que pensa que vai ver?"
                : ""
            }
          />
          <QuestionResponseText
            trigger={question === 0}
            complete={completion[phase] || false}
            visible={question === 0}
            text={
              lang === "EN"
                ? "IBD will be the same for all of the comparisons as before. But, IBS will be on average lower, since there is a 1/8 chance of matching at each loci instead of 1/2."
                : lang === "FR"
                ? "L'IBD sera la même pour toutes les comparaisons qu'avant. Mais, l'IBS sera en moyenne plus faible, car il y a une chance sur 8 de correspondance à chaque locus au lieu de 1/2."
                : lang === "PT"
                ? "O IBD será o mesmo para todas as comparações como antes. Mas, o IBS será, em média, inferior, uma vez que existe uma probabilidade de 1/8 de correspondência em cada locus em vez de 1/2."
                : ""
            }
          />
        </div>
      }
    />
  );

  return (
    <StandardLayout>
      <div className="">
        <FormHeader text={`Lab Clones with Microhaplotypes`} />

        <P6MHPCloneRows />
      </div>
      {phase === 22.5 && (
        <div className="">
          <FormHeader text="Questions" />
          <KnowledgeCheckQuestion
            callback={(questionIdx, answerIdx) => {
              if (answerIdx === question) {
                setQuestion(null);
              } else {
                setQuestion(answerIdx);
              }
            }}
            hasAnswer={question === 0}
            questionIdx={1}
            classNames={{
              answersContainer: "grid gap-4 mt-4 mb-8",
            }}
            answers={[
              {
                checked: question === 0,
                correct: true,
                index: 0,
                text: "IBD will be the same for all of the comparisons as before when you used SNPs. But, IBS will be on average lower, since there is a 1/8 chance of matching at each loci instead of ½ when you used SNPs.",
              },
              {
                checked: question === 1,
                correct: false,
                index: 1,
                text: "Both IBD and IBD will be lower than when you used SNPs.",
              },
              {
                checked: question === 2,
                correct: false,
                index: 2,
                text: "Both IBD and IBS will be higher than when you used SNPs.",
              },
              {
                checked: question === 3,
                correct: false,
                index: 3,
                text: "Both IBD and IBS will remain the same as when you used SNPs.",
              },
            ]}
            headerText="What do you think you will see?"
          />
          <QuestionResponseText
            trigger={question === 0}
            complete={completion[phase] || false}
            visible={question === 0}
            text="IBD will be the same for all of the comparisons as before. But, IBS will be on average lower, since there is a 1/8 chance of matching at each loci instead of 1/2."
          />
        </div>
      )}
    </StandardLayout>
  );
}
