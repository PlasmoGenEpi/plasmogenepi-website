import CloneRow from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import {
  P6CloneRowButtonColors,
  P6CloneRowColors,
} from "../CloneRows/P6MHPCloneRows";
import CloneElement from "@/app/components/Interactives/Shared/CloneRow/CloneElement";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  partSixCompletionAtom,
  partSixFirstQuestionAtom,
  phase2Atom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import P6CloneRows from "../CloneRows/P6CloneRows";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import { useEffect } from "react";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export default function GenerateSNPCloneRows({
  forwards,
  lang,
}: {
  lang: "EN" | "FR" | "PT";
  forwards?: boolean;
}) {
  const completion = useAtomValue(partSixCompletionAtom);
  const phase2 = useAtomValue(phase2Atom);
  const [question, setQuestion] = useAtom(partSixFirstQuestionAtom);

  return (
    <InteractivePrimaryLayout
      leftHeader={
        lang === "EN"
          ? `Lab Clones with SNPs`
          : lang === "FR"
          ? `Clones de laboratoire avec SNPs`
          : lang === "PT"
          ? `Clones de laboratório com SNPs`
          : ``
      }
      leftContent={<P6CloneRows forwards={forwards} />}
      rightHeader={
        phase2 === 2
          ? lang === "EN" || lang === "FR"
            ? `Questions`
            : lang === "PT"
            ? `Perguntas`
            : ""
          : ``
      }
      rightContent={
        <div className={phase2 === 2 ? `` : "hidden"}>
          <KnowledgeCheckQuestion
            callback={(questionIdx, answerIdx) => {
              if (question === answerIdx + 1) {
                setQuestion(null);
              } else {
                setQuestion(answerIdx + 1);
              }
            }}
            hasAnswer={question === 2}
            classNames={{
              answersContainer: "flex flex-col gap-4 mt-4",
            }}
            headerText={
              lang === "EN"
                ? "When comparing two lab clones, you think that:"
                : lang === "FR"
                ? "Lorsque vous comparez deux clones de laboratoire, vous pensez que:"
                : lang === "PT"
                ? "Ao comparar dois clones de laboratório, pensa que:"
                : ""
            }
            questionIdx={1}
            answers={[
              {
                text:
                  lang === "EN"
                    ? "The clones are completely unrelated by ancestry, so probably 0/12 (0%) of the SNPs between any two will match. IBS will be 0."
                    : lang === "FR"
                    ? "Les clones ne sont absolument pas liés par ascendance, donc probablement 0/12 (0%) des SNP entre deux clones quelconques correspondront. L'IBS sera de 0."
                    : lang === "PT"
                    ? "Os clones não estão completamente relacionados por ascendência, pelo que provavelmente 0/12 (0%) dos SNPs entre quaisquer dois corresponderão. O IBS será 0."
                    : "",
                correct: false,
                checked: question === 1,
                index: 0,
              },
              {
                text:
                  lang === "EN"
                    ? "Even though the clones are unrelated, SNPs can still match by chance. Since there are two perfectly balanced alleles at every locus, the chance of matching will be the same as flipping a coin twice and getting the same result. You would expect around 6/12 (50%) of the SNPs to match. IBS will probably be very close to 0.5, but may vary."
                    : lang === "FR"
                    ? "Même si les clones ne sont pas apparentés, les SNP peuvent toujours correspondre par hasard. Puisqu'il y a deux allèles parfaitement équilibrés à chaque locus, la probabilité de correspondance sera la même que de lancer une pièce deux fois et d'obtenir le même résultat. Vous vous attendriez à ce qu'environ 6/12 (50%) des SNP correspondent. L'IBS sera probablement très proche de 0,5, mais peut varier."
                    : lang === "PT"
                    ? "Apesar de os clones não estarem relacionados, os SNPs podem ainda assim corresponder por acaso. Uma vez que existem dois alelos perfeitamente equilibrados em cada locus, a probabilidade de correspondência será a mesma que lançar uma moeda duas vezes e obter o mesmo resultado. Esperaria que cerca de 6/12 (50%) dos SNPs correspondessem. O IBS será provavelmente muito próximo de 0,5, mas pode variar."
                    : "",
                correct: true,
                checked: question === 2,
                index: 1,
              },
              {
                text:
                  lang === "EN"
                    ? "Since the simulation is random for the 3 clones, there is no way to predict what IBS will be. It is just as likely to be anywhere from 0 to 1."
                    : lang === "FR"
                    ? "Puisque la simulation est aléatoire pour les 3 clones, il n'y a aucun moyen de prédire ce que sera l'IBS. Il est tout aussi probable qu'il se situe entre 0 et 1."
                    : lang === "PT"
                    ? "Uma vez que a simulação é aleatória para os 3 clones, não há forma de prever qual será o IBS. É tão provável que seja em qualquer lugar de 0 a 1."
                    : "",
                correct: false,
                checked: question === 3,
                index: 2,
              },
            ]}
          />
          <QuestionResponseText
            className="mt-8"
            complete={completion[phase2] || false}
            trigger={question === 2}
            visible={question === 2}
            text={
              lang === "EN"
                ? `The simulation is random, but you still have some expectation of
            what is going to happen. When you compare two clones at a given
            locus, they have 50% chance of sharing an allele since there are two
            equally likely options. Although it is possible that none of the
            SNPs will match (first option), the probability of that happening is very low
            (around 0.02%).`
                : lang === "FR"
                ? `La simulation est aléatoire, mais vous avez quand même une certaine
            attente de ce qui va se passer. Lorsque vous comparez deux clones à
            un locus donné, ils ont 50% de chances de partager un allèle puisqu'il
            y a deux options également probables. Bien qu'il soit possible qu'aucun
            des SNP ne corresponde (première option), la probabilité que cela se
            produise est très faible (environ 0,02%).`
                : lang === "PT"
                ? `A simulação é aleatória, mas ainda assim tem alguma expectativa do
            que vai acontecer. Quando compara dois clones num determinado locus,
            eles têm 50% de probabilidade de partilhar um alelo, uma vez que existem
            duas opções igualmente prováveis. Embora seja possível que nenhum dos
            SNPs corresponda (primeira opção), a probabilidade de isso acontecer é
            muito baixa (cerca de 0,02%).`
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
        <FormHeader text={`Lab Clones with SNPs`} />
        <P6CloneRows forwards={forwards} />
      </div>
      <div className={`${phase2 === 2 ? "" : "hidden"}`}>
        <FormHeader text={`Questions`} />
        <KnowledgeCheckQuestion
          callback={(questionIdx, answerIdx) => {
            if (question === answerIdx + 1) {
              setQuestion(null);
            } else {
              setQuestion(answerIdx + 1);
            }
          }}
          hasAnswer={question === 2}
          classNames={{
            answersContainer: "flex flex-col gap-4 mt-4",
          }}
          headerText="When comparing two lab clones, you think that:"
          questionIdx={1}
          answers={[
            {
              text: "The clones are completely unrelated by ancestry, so probably 0/12 (0%) of the SNPs between any two will match. IBS will be 0.",
              correct: false,
              checked: question === 1,
              index: 0,
            },
            {
              text: "Even though the clones are unrelated, SNPs can still match by chance. Since there are two perfectly balanced alleles at every locus, the chance of matching will be the same as flipping a coin twice and getting the same result. You would expect around 6/12 (50%) of the SNPs to match. IBS will probably be very close to 0.5, but may vary.",
              correct: true,
              checked: question === 2,
              index: 1,
            },
            {
              text: "Since the simulation is random for the 3 clones, there is no way to predict what IBS will be. It is just as likely to be anywhere from 0 to 1.",
              correct: false,
              checked: question === 3,
              index: 2,
            },
          ]}
        />
        <QuestionResponseText
          className="mt-8"
          complete={completion[phase2] || false}
          trigger={question === 2}
          visible={question === 2}
          text={` The simulation is random, but you still have some expectation of
            what is going to happen. When you compare two clones at a given
            locus, they have 50% chance of sharing an allele since there are two
            equally likely options. Although it is possible that none of the
            SNPs will match (A), the probability of that happening is very low
            (around 0.02%).`}
        />
        {/* <div
          className={
            question !== 2
              ? "hidden"
              : " mt-8 bg-primaryBlue/10 px-8 py-8 pt-4"
          }
        >
          <span className="font-bold">Correct!</span>
          <p className="mt-2 text-sm">
            The simulation is random, but you still have some expectation of
            what is going to happen. When you compare two clones at a given
            locus, they have 50% chance of sharing an allele since there are two
            equally likely options. Although it is possible that none of the
            SNPs will match (A), the probability of that happening is very low
            (around 0.02%).
          </p>
        </div> */}
      </div>
    </StandardLayout>
  );
}
