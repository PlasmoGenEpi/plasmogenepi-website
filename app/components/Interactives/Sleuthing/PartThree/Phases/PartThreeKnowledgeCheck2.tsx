import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import { useAtom } from "jotai";
import { atomWithStorage, RESET } from "jotai/utils";
import P3AlleleDistribution from "../P3AlleleDistribution/P3AlleleDistribution";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";
import { useEffect } from "react";

export const P3KCQuestions2Atom = atomWithStorage<{
  [key: number]: null | number;
}>("P3KCQuestions2Atom", {});

export default function PartThreeKnowledgeCheck2({
  lang,
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const [questions, setQuestions] = useAtom(P3KCQuestions2Atom);

  // useEffect(() => {
  //   setQuestions(RESET);
  // }, []);

  return (
    <InteractivePrimaryLayout
      leftHeader={
        lang === "EN"
          ? "Allele Distribution"
          : lang === "FR"
          ? "Distribution des allèles"
          : "Distribuição de alelos"
      }
      leftContent={<P3AlleleDistribution lang={lang} />}
      rightHeader={
        lang === "EN"
          ? "Questions"
          : lang === "FR"
          ? "Des questions"
          : "Questões"
      }
      rightContent={
        <div className="fadeIn500 flex flex-col">
          <KnowledgeCheckQuestion
            headerText={
              lang === "EN"
                ? "Do you think it would be a reasonable strategy to look at the highest number of alleles to estimate the MOI, if you are using microhaplotypes?"
                : lang === "FR"
                ? "Pensez-vous qu'il serait raisonnable de regarder le nombre le plus élevé d'allèles pour estimer le MOI, si vous utilisez des microhaplotypes ?"
                : lang === "PT"
                ? "Você acha que seria uma estratégia razoável observar o maior número de alelos para estimar o MOI, se você estiver usando microhaplótipos?"
                : "Do you think it would be a reasonable strategy to look at the highest number of alleles to estimate the MOI, if you are using microhaplotypes?"
            }
            questionIdx={1}
            hasAnswer={questions[1] === 2}
            callback={(questionIdx, answerIdx) => {
              if (questions[questionIdx] === answerIdx) {
                setQuestions({ ...questions, [questionIdx]: null });
              } else {
                setQuestions({ ...questions, [questionIdx]: answerIdx });
              }
            }}
            classNames={{
              headerText: "mb-4",
              answersContainer: "grid gap-4",
              //   answers: "w-4 md:w-3 lg:w-4",
            }}
            answers={[
              {
                checked: questions[1] === 1,
                correct: false,
                index: 1,
                text:
                  lang === "EN"
                    ? "Yes, this strategy will always give me the correct answer."
                    : lang === "FR"
                    ? "Oui, cette stratégie me donnera toujours la bonne réponse."
                    : "Sim, esta estratégia sempre me dará a resposta correta.",
              },
              {
                checked: questions[1] === 2,
                correct: true,
                index: 2,
                text:
                  lang === "EN"
                    ? "Yes, as long as diversity at the loci is high enough and MOI is not too high."
                    : lang === "FR"
                    ? "Oui, tant que la diversité des loci est suffisamment élevée et que le MOI n'est pas trop élevé."
                    : "Sim, desde que a diversidade nos loci seja alta o suficiente e o MOI não seja muito alto.",
              },
              {
                checked: questions[1] === 3,
                correct: false,
                index: 3,
                text:
                  lang === "EN"
                    ? "No, there is no relationship between MOI and the highest number of alleles detected."
                    : lang === "FR"
                    ? "Non, il n'y a aucune relation entre le MOI et le nombre le plus élevé d'allèles détectés."
                    : "Não, não há relação entre o MOI e o maior número de alelos detectados.",
              },
              {
                checked: questions[1] === 4,
                correct: false,
                index: 4,
                text:
                  lang === "EN"
                    ? "No, it is hard to count that high."
                    : lang === "FR"
                    ? "Non, il est difficile de compter aussi haut."
                    : "Não, é difícil contar tão alto.",
              },
            ]}
          />
          <QuestionResponseText
            className="mt-4"
            visible={questions[1] === 2}
            text={
              lang === "EN"
                ? "Correct. Remember that if MOI is higher than the highest number of possible alleles, the number of alleles detected will never be as high as MOI."
                : lang === "FR"
                ? "Correct. N'oubliez pas que si le MOI est supérieur au nombre le plus élevé d'allèles possibles, le nombre d'allèles détectés ne sera jamais aussi élevé que le MOI."
                : "Correto. Lembre-se de que se o MOI for maior do que o maior número de alelos possíveis, o número de alelos detectados nunca será tão alto quanto o MOI."
            }
          />
          {questions[1] === 2 && (
            <KnowledgeCheckQuestion
              headerText={
                lang === "EN"
                  ? "Is it possible that the highest number of alleles you detect at a locus could be higher than MOI based on the rules of this exercise (perfect genotyping with no errors)?"
                  : lang === "FR"
                  ? "Est-il possible que le nombre le plus élevé d'allèles que vous détectez à un locus soit supérieur au MOI selon les règles de cet exercice (génotypage parfait sans erreurs) ?"
                  : lang === "PT"
                  ? "É possível que o maior número de alelos que você detecta em um locus seja maior do que o MOI com base nas regras deste exercício (genotipagem perfeita sem erros)?"
                  : "Is it possible that the highest number of alleles you detect at a locus could be higher than MOI based on the rules of this exercise (perfect genotyping with no errors)?"
              }
              questionIdx={2}
              hasAnswer={questions[2] === 1}
              callback={(questionIdx, answerIdx) => {
                if (questions[questionIdx] === answerIdx) {
                  setQuestions({ ...questions, [questionIdx]: null });
                } else {
                  setQuestions({ ...questions, [questionIdx]: answerIdx });
                }
              }}
              style={{
                animationDelay: `1000ms`,
              }}
              triggerEnd
              classNames={{
                container: "fadeIn1000 mt-8",
                headerText: "mb-4",
                answersContainer: "grid gap-4",
                //   answers: "w-4 md:w-3 lg:w-4",
              }}
              answers={[
                {
                  checked: questions[2] === 1,
                  correct: true,
                  index: 1,
                  text: lang === "EN" ? "No" : lang === "FR" ? "Non" : "Não",
                },
                {
                  checked: questions[2] === 2,
                  correct: false,
                  index: 2,
                  text: lang === "EN" ? "Yes" : lang === "FR" ? "Oui" : "Sim",
                },
              ]}
            />
          )}
          {questions[2] === 1 && (
            <KnowledgeCheckQuestion
              headerText={
                lang === "EN"
                  ? "Is it possible that the highest number of alleles you detect at a locus could be higher than MOI in a real world setting?"
                  : lang === "FR"
                  ? "Est-il possible que le nombre le plus élevé d'allèles que vous détectez à un locus soit supérieur au MOI dans un contexte réel ?"
                  : lang === "PT"
                  ? "É possível que o maior número de alelos que você detecta em um locus seja maior do que o MOI em um cenário do mundo real?"
                  : "Is it possible that the highest number of alleles you detect at a locus could be higher than MOI in a real world setting?"
              }
              questionIdx={3}
              hasAnswer={questions[3] === 2}
              callback={(questionIdx, answerIdx) => {
                if (questions[questionIdx] === answerIdx) {
                  setQuestions({ ...questions, [questionIdx]: null });
                } else {
                  setQuestions({ ...questions, [questionIdx]: answerIdx });
                }
              }}
              style={{
                animationDelay: `1000ms`,
              }}
              triggerEnd
              classNames={{
                container: "fadeIn1000 mt-8",
                headerText: "mb-4",
                answersContainer: "grid gap-4",
                //   answers: "w-4 md:w-3 lg:w-4",
              }}
              answers={[
                {
                  checked: questions[3] === 1,
                  correct: false,
                  index: 1,
                  text: lang === "EN" ? "No" : lang === "FR" ? "Non" : "Não",
                },
                {
                  checked: questions[3] === 2,
                  correct: true,
                  index: 2,
                  text: lang === "EN" ? "Yes" : lang === "FR" ? "Oui" : "Sim",
                },
              ]}
            />
          )}
          <QuestionResponseText
            className="mt-4"
            text={
              lang === "EN"
                ? `Correct. Unfortunately, genotyping errors do occur, and it is important to be vigilant for them. These could be caused by mixing up samples, contamination in the laboratory, or errors during PCR or sequencing. We will talk about these situations in more detail in a later module and how bioinformatics and good quality control analysis can help identify these errors.`
                : lang === "FR"
                ? `Correct. Malheureusement, des erreurs de génotypage se produisent et il est important d'être vigilant à leur égard. Celles-ci pourraient être causées par le mélange d'échantillons, la contamination en laboratoire ou des erreurs pendant la PCR ou le séquençage. Nous parlerons de ces situations plus en détail dans un module ultérieur et de la façon dont la bio-informatique et une bonne analyse de contrôle de la qualité peuvent aider à identifier ces erreurs.`
                : lang === "PT"
                ? `Correto. Infelizmente, erros de genotipagem ocorrem e é importante estar atento a eles. Eles podem ser causados pela mistura de amostras, contaminação no laboratório ou erros durante o PCR ou sequenciamento. Falaremos sobre essas situações com mais detalhes em um módulo posterior e como a bioinformática e uma boa análise de controle de qualidade podem ajudar a identificar esses erros.`
                : `Correct. Unfortunately, genotyping errors do occur, and it is important to be vigilant for them. These could be caused by mixing up samples, contamination in the laboratory, or errors during PCR or sequencing. We will talk about these situations in more detail in a later module and how bioinformatics and good quality control analysis can help identify these errors.`
            }
            visible={questions[3] === 2}
          />
          {questions[3] === 2 && (
            <KnowledgeCheckQuestion
              headerText={
                lang === "EN"
                  ? "Now that you have genotyped the same controls using SNPs and microhaplotypes, which do you think is going to give you a more accurate estimate of MOI on your unknown field samples?"
                  : lang === "FR"
                  ? "Maintenant que vous avez génotypé les mêmes contrôles en utilisant des SNP et des microhaplotypes, lequel pensez-vous vous donnera une estimation plus précise du MOI sur vos échantillons de terrain inconnus ?"
                  : lang === "PT"
                  ? "Agora que você genotipou os mesmos controles usando SNPs e microhaplótipos, qual você acha que lhe dará uma estimativa mais precisa de MOI em suas amostras de campo desconhecidas?"
                  : "Now that you have genotyped the same controls using SNPs and microhaplotypes, which do you think is going to give you a more accurate estimate of MOI on your unknown field samples?"
              }
              questionIdx={4}
              hasAnswer={!!questions[4]}
              callback={(questionIdx, answerIdx) => {
                if (questions[questionIdx] === answerIdx) {
                  setQuestions({ ...questions, [questionIdx]: null });
                } else {
                  setQuestions({ ...questions, [questionIdx]: answerIdx });
                }
              }}
              style={{
                animationDelay: `1000ms`,
              }}
              triggerEnd
              classNames={{
                container: "fadeIn1000 mt-8",
                headerText: "mb-4",
                answersContainer: "grid gap-4",
                //   answers: "w-4 md:w-3 lg:w-4",
              }}
              answers={[
                {
                  checked: questions[4] === 1,
                  correct: true,
                  index: 1,
                  text: "SNPs",
                },
                {
                  checked: questions[4] === 2,
                  correct: true,
                  index: 2,
                  text:
                    lang === "EN"
                      ? "Microhaplotypes"
                      : lang === "FR"
                      ? "Microhaplotypes"
                      : lang === "PT"
                      ? "Microhaplótipos"
                      : "Microhaplotypes",
                },
                {
                  checked: questions[4] === 3,
                  correct: true,
                  index: 3,
                  text:
                    lang === "EN"
                      ? "Both are the same"
                      : lang === "FR"
                      ? "Les deux sont les mêmes"
                      : lang === "PT"
                      ? "Ambos são iguais"
                      : "Both are the same",
                },
              ]}
            />
          )}
          <QuestionResponseText
            className="mt-4"
            text={
              lang === "EN"
                ? "So, what's the answer? You will find out at the end of the activity!"
                : lang === "FR"
                ? "Alors, quelle est la réponse ? Vous le découvrirez à la fin de l'activité !"
                : lang === "PT"
                ? "Então, qual é a resposta? Você descobrirá no final da atividade!"
                : "So, what's the answer? You will find out at the end of the activity!"
            }
            visible={!!questions[4]}
          />
        </div>
      }
    />
  );
  return <div></div>;
}
