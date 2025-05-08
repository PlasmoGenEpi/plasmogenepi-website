"use client";
import { atomWithStorage, RESET } from "jotai/utils";
import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import { atom, useAtom, useSetAtom } from "jotai";
import KnowledgeCheckQuestion from "../../Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import QuestionResponseText from "../../Shared/misc/QuestionResponseText";
import { useCallback, useEffect } from "react";
import {
  currentView1Atom,
  currentViewAtom,
} from "../../Shared/InteractiveViewer/InteractiveViewer";

export const s6ResetAtom = atom<null | (() => () => void)>(null);

export const stepSixCompletionAtom = atomWithStorage("stepSixCompletionAtom", {
  0: false,
});

export const stepSixQuestionsAtom = atomWithStorage<{
  [key: number]: null | number | number[];
}>("stepSixQuestionsAtom", {});

export default function StepSix({ lang }: { lang: "EN" | "FR" | "PT" }) {
  const [complete, setComplete] = useAtom(stepSixCompletionAtom);
  const [questions, setQuestions] = useAtom(stepSixQuestionsAtom);
  const [currentView, setCurrentView] = useAtom(currentView1Atom);

  const setReset = useSetAtom(s6ResetAtom);

  const resetCallback = useCallback(() => {
    setQuestions(RESET);
    setComplete(RESET);
    // setCurrentView({ ...currentView, section: 6, phase: 0 });
  }, []);

  useEffect(() => {
    if (resetCallback) {
      setReset(() => () => {
        resetCallback();
        // resetCallback();
      });
    }
  }, []);

  return (
    <div>
      <InteractivePrompt
        lang={lang}
        instructions={
          <div className="flex flex-col gap-4">
            <p>
              {lang === "EN"
                ? `Now the moment we've been building toward. It is time to interpret
              the results and provide feedback to your program about the
              effectiveness of its intervention.`
                : lang === "FR"
                ? `Maintenant, le moment que nous attendions. Il est temps d'interpréter les résultats et de faire part à votre programme de l'efficacité de son intervention.`
                : `Agora o momento para o qual temos nos preparado. É hora de interpretar os resultados e fornecer feedback ao seu programa sobre a eficácia de sua intervenção.`}
            </p>
            {/* <p>
              Recall that prior to the intervention, you estimated MOI to be
              2.5, and that even though you only analyzed data from 10 samples
              in this exercise, we are assuming these 10 samples are
              representative of a larger sample.
            </p> */}
          </div>
        }
        title={
          <h1>
            {lang === "EN"
              ? `Interpreting Results`
              : lang === "FR"
              ? `Interprétation des résultats`
              : `Interpretação dos Resultados`}
          </h1>
        }
        complete={!Object.values(complete).includes(false)}
      />
      <div className="max-w-2xl">
        <h2 className="mb-8 text-xl font-bold">
          {lang === "EN"
            ? `Questions`
            : lang === "FR"
            ? `Des questions`
            : `Questões`}
        </h2>
        <p className="mb-4 [font-size:15px]">
          {lang === "EN"
            ? `Recall that prior to the intervention, you estimated MOI to be 2.5,
          and that even though you only analyzed data from 10 samples in this
          exercise, we are assuming these 10 samples are representative of a
          larger sample.`
            : lang === "FR"
            ? `Rappelez-vous qu'avant l'intervention, vous avez estimé le MOI à 2,5, et que même si vous n'avez analysé les données que de 10 échantillons dans cet exercice, nous supposons que ces 10 échantillons sont représentatifs d'un échantillon plus important.`
            : `Lembre-se de que, antes da intervenção, estimou o MOI em 2,5 e que, embora tenha analisado dados de apenas 10 amostras neste exercício, estamos a assumir que estas 10 amostras são representativas de uma amostra maior.`}
        </p>
        <KnowledgeCheckQuestion
          headerText={
            lang === "EN"
              ? "Based on your estimates of MOI, do you have evidence that your intervention worked?"
              : lang === "FR"
              ? "Sur la base de vos estimations du MOI, avez-vous des preuves que votre intervention a fonctionné ?"
              : lang === "PT"
              ? "Com base nas suas estimativas de MOI, tem provas de que a sua intervenção funcionou?"
              : "Based on your estimates of MOI, do you have evidence that your intervention worked?"
          }
          classNames={{
            container: `fadeIn500`,
            headerText: "mb-4",
            answersContainer: "grid gap-2",
            answers: "w-4 md:w-3 lg:w-4",
          }}
          answers={[
            {
              checked: questions[1] === 1,
              correct: false,
              index: 1,
              text: lang === "EN" ? "Yes" : lang === "FR" ? "Oui" : "Sim",
            },
            {
              checked: questions[1] === 2,
              correct: true,
              index: 2,
              text: lang === "EN" ? "No" : lang === "FR" ? "Non" : "Não",
            },
          ]}
          hasAnswer={questions[1] === 2}
          questionIdx={1}
          callback={(questionIdx, answerIdx) => {
            setQuestions({
              ...questions,
              [questionIdx]:
                questions[questionIdx] === answerIdx ? null : answerIdx,
            });
          }}
        />
        <QuestionResponseText
          className="mt-4"
          text={
            lang === "EN"
              ? "If your intervention worked, you might have expected this to result in a decrease in within-host diversity, as reflected by lower MOI. However, you should have noticed that the mean MOI increased rather than decreased."
              : lang === "FR"
              ? "Si votre intervention a fonctionné, vous vous seriez peut-être attendu à ce qu'elle entraîne une diminution de la diversité au sein de l'hôte, comme en témoigne une baisse du MOI. Cependant, vous auriez dû remarquer que le MOI moyen a augmenté plutôt que diminué."
              : "Se a sua intervenção funcionou, poderá ter esperado que isso resultasse numa diminuição da diversidade dentro do hospedeiro, como refletido por um MOI mais baixo. No entanto, deverá ter reparado que o MOI médio aumentou em vez de diminuir."
          }
          visible={questions[1] === 2}
        />
        {questions[1] === 2 && (
          <KnowledgeCheckQuestion
            headerText={
              lang === "EN"
                ? "Recall that prior to the intervention, you estimated MOI to be 2.5, and that even though you only analyzed data from 10 samples in this exercise, we are assuming these 10 samples are representative of a larger sample."
                : lang === "FR"
                ? "Rappelez-vous qu'avant l'intervention, vous avez estimé le MOI à 2,5, et que même si vous n'avez analysé les données que de 10 échantillons dans cet exercice, nous supposons que ces 10 échantillons sont représentatifs d'un échantillon plus important."
                : lang === "PT"
                ? "Lembre-se de que, antes da intervenção, estimou o MOI em 2,5 e que, embora tenha analisado dados de apenas 10 amostras neste exercício, estamos a assumir que estas 10 amostras são representativas de uma amostra maior."
                : "Recall that prior to the intervention, you estimated MOI to be 2.5, and that even though you only analyzed data from 10 samples in this exercise, we are assuming these 10 samples are representative of a larger sample."
            }
            style={{
              animationDelay: `1000ms`,
            }}
            classNames={{
              container: `fadeIn500 mt-8`,
              headerText: "mb-4",
              answersContainer: "grid gap-4",
              answers: "w-4 md:w-3 lg:w-4",
            }}
            answers={[
              {
                checked: questions[2] === 1,
                correct: false,
                index: 1,
                text:
                  lang === "EN"
                    ? "Hide your molecular data – they don’t agree with what you hoped to see so best to pretend they don’t exist"
                    : lang === "FR"
                    ? "Cachez vos données moléculaires – elles ne correspondent pas à ce que vous espériez voir, il est donc préférable de faire comme si elles n'existaient pas"
                    : lang === "PT"
                    ? "Esconda os seus dados moleculares – eles não concordam com o que esperava ver, por isso é melhor fingir que não existem"
                    : "Hide your molecular data – they don’t agree with what you hoped to see so best to pretend they don’t exist",
              },
              {
                checked: questions[2] === 2,
                correct: false,
                index: 2,
                text:
                  lang === "EN"
                    ? "Take your molecular data as irrefutable proof that transmission increased and immediately make sweeping and expensive programmatic changes"
                    : lang === "FR"
                    ? "Considérez vos données moléculaires comme une preuve irréfutable que la transmission a augmenté et apportez immédiatement des changements programmatiques radicaux et coûteux"
                    : lang === "PT"
                    ? "Considere os seus dados moleculares como prova irrefutável de que a transmissão aumentou e faça imediatamente alterações programáticas abrangentes e dispendiosas"
                    : "Take your molecular data as irrefutable proof that transmission increased and immediately make sweeping and expensive programmatic changes",
              },
              {
                checked: questions[2] === 3,
                correct: true,
                index: 3,
                text:
                  lang === "EN"
                    ? "Use your molecular data as a potential cause for concern, and think about additional sources of data that you can use or generate to confirm whether transmission is getting worse and if so why"
                    : lang === "FR"
                    ? "Utilisez vos données moléculaires comme une cause potentielle d'inquiétude, et réfléchissez à d'autres sources de données que vous pouvez utiliser ou générer pour confirmer si la transmission s'aggrave et, si oui, pourquoi"
                    : lang === "PT"
                    ? "Utilize os seus dados moleculares como uma potencial causa de preocupação e pense em fontes adicionais de dados que pode utilizar ou gerar para confirmar se a transmissão está a piorar e, em caso afirmativo, porquê"
                    : "Use your molecular data as a potential cause for concern, and think about additional sources of data that you can use or generate to confirm whether transmission is getting worse and if so why",
              },
            ]}
            hasAnswer={questions[2] === 3}
            questionIdx={2}
            callback={(questionIdx, answerIdx) => {
              setQuestions({
                ...questions,
                [questionIdx]:
                  questions[questionIdx] === answerIdx ? null : answerIdx,
              });
            }}
          />
        )}
        <QuestionResponseText
          className="mt-4"
          visible={questions[2] === 3}
          text={
            lang === "EN"
              ? "Despite implementing a new intervention, there did not seem to be any decrease in MOI, which might have been expected with a decrease in transmission. In fact, MOI increased from 2.5 to 3.2! With a sufficient sample size, a difference of this magnitude would likely have been statistically significant, indicating that transmission may have actually increased despite, or potentially because of, the change in interventions. This may not surprise those working in malaria control – sometimes interventions that are supposed to work based on data from controlled settings actually behave differently when implemented in the field. Hopefully your investigation and analysis of the data helped identify this important result. You are now able to communicate this information to others in your program and think about additional actions."
              : lang === "FR"
              ? "Malgré la mise en œuvre d'une nouvelle intervention, il ne semble pas y avoir de diminution du MOI, ce qui aurait pu être attendu avec une diminution de la transmission. En fait, le MOI est passé de 2,5 à 3,2 ! Avec une taille d'échantillon suffisante, une différence de cette ampleur aurait probablement été statistiquement significative, indiquant que la transmission a peut-être réellement augmenté malgré, ou potentiellement en raison, du changement d'interventions. Cela ne surprendra peut-être pas ceux qui travaillent dans le domaine de la lutte contre le paludisme : parfois, les interventions qui sont censées fonctionner sur la base de données provenant de milieux contrôlés se comportent en réalité différemment lorsqu'elles sont mises en œuvre sur le terrain. J'espère que votre enquête et votre analyse des données ont permis d'identifier ce résultat important. Vous êtes maintenant en mesure de communiquer cette information aux autres membres de votre programme et de réfléchir à des actions supplémentaires."
              : lang === "PT"
              ? "Apesar de implementar uma nova intervenção, não parece ter havido qualquer diminuição no MOI, o que poderia ter sido esperado com uma diminuição na transmissão. Na verdade, o MOI aumentou de 2,5 para 3,2! Com um tamanho de amostra suficiente, uma diferença desta magnitude teria provavelmente sido estatisticamente significativa, indicando que a transmissão pode ter realmente aumentado apesar, ou potencialmente devido, à alteração nas intervenções. Isto pode não surpreender aqueles que trabalham no controlo da malária – por vezes, as intervenções que se supõem funcionar com base em dados de ambientes controlados comportam-se de forma diferente quando implementadas no terreno. Esperemos que a sua investigação e análise dos dados tenham ajudado a identificar este resultado importante. Agora já pode comunicar esta informação a outros no seu programa e pensar em ações adicionais."
              : ""
          }
        />
      </div>
    </div>
  );
}
