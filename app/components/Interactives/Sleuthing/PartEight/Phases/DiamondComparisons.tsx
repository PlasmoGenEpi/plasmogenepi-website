import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import Diamond from "../Diamond";
import DiamondWithButtons from "../Diamond/DiamondWithButtons";
import CompareGenotypes from "../Genotypes/CompareGenotypes";
import {
  partEightCompletionAtom,
  partEightDiamondPersonPairAtom,
  partEightQuestionsAtom,
  phase2Atom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import NewDiamond from "../Diamond/NewDiamond";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export default function DiamondComparisons({
  lang,
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const [activePair, setActivePair] = useAtom(partEightDiamondPersonPairAtom);
  const [phase, setPhase] = useAtom(phase2Atom);
  const [questions, setQuestions] = useAtom(partEightQuestionsAtom);
  const completion = useAtomValue(partEightCompletionAtom);

  return (
    <InteractivePrimaryLayout
      leftHeader={
        lang === "EN"
          ? "Potential Transmission Network"
          : lang === "FR"
          ? "Réseau de transmission potentiel"
          : "Rede de transmissão potencial"
      }
      rightHeader={
        phase === 5
          ? lang === "EN"
            ? "Genotypes with IBS"
            : lang === "FR"
            ? "Génotypes avec IBS"
            : "Genótipos com IBS"
          : lang === "EN"
          ? "Questions"
          : lang === "FR"
          ? "Des questions"
          : "Perguntas"
      }
      leftContent={<NewDiamond />}
      rightContent={
        phase === 5 ? (
          <CompareGenotypes
            key={activePair}
            firstPersonId={activePair ? activePair[0] : null}
            secondPersonId={activePair ? activePair[1] : null}
          />
        ) : phase >= 6 ? (
          <div className="fadeIn500">
            {phase === 6 && (
              <div>
                <KnowledgeCheckQuestion
                  answers={[
                    {
                      checked: questions[2] === 0,
                      correct: false,
                      index: 0,
                      text:
                        lang === "EN"
                          ? "Yes"
                          : lang === "FR"
                          ? "Oui"
                          : lang === "PT"
                          ? "Sim"
                          : "Oui",
                    },
                    {
                      checked: questions[2] === 1,
                      correct: true,
                      index: 1,
                      text:
                        lang === "EN"
                          ? "No"
                          : lang === "FR"
                          ? "Non"
                          : lang === "PT"
                          ? "Não"
                          : "Non",
                    },
                  ]}
                  classNames={{
                    answersContainer: "mt-4 grid gap-2",
                  }}
                  callback={(questionIdx, answerIndex) => {
                    setQuestions({
                      ...questions,
                      2: questions[2] === answerIndex ? null : answerIndex,
                    });
                  }}
                  hasAnswer={questions[2] === 1}
                  headerText={
                    lang === "EN"
                      ? "Based on your analysis of the genotypes, do you see any evidence of direct malaria transmission (via a mosquito) between any of these children? Recall from earlier in this exercise that you expect IBS to be 1 when there is direct transmission."
                      : lang === "FR"
                      ? "Sur la base de votre analyse des génotypes, voyez-vous des preuves de transmission directe du paludisme (par l'intermédiaire d'un moustique) entre l'un de ces enfants ? Rappelez-vous que plus tôt dans cet exercice, vous vous attendiez à ce que l'IBS soit de 1 en cas de transmission directe."
                      : lang === "PT"
                      ? "Com base na sua análise dos genótipos, você vê alguma evidência de transmissão direta da malária (via mosquito) entre alguma dessas crianças? Lembre-se que, no início deste exercício, você esperava que o IBS fosse 1 quando há transmissão direta."
                      : "Sur la base de votre analyse des génotypes, voyez-vous des preuves de transmission directe du paludisme (par l'intermédiaire d'un moustique) entre l'un de ces enfants ? Rappelez-vous que plus tôt dans cet exercice, vous vous attendiez à ce que l'IBS soit de 1 en cas de transmission directe."
                  }
                  questionIdx={2}
                />
                <QuestionResponseText
                  className="mt-8"
                  visible={questions[2] === 1}
                  complete={completion[phase] ?? false}
                  trigger={questions[2] === 1}
                  text={
                    lang === "EN"
                      ? `Correct! Even though there are some alleles matching by
                chance between these infections, IBS is less than 1 for
                all your comparisons. This means that you have found no
                evidence of direct transmission occurring at the school!`
                      : lang === "FR"
                      ? `Correct! Même s'il y a des allèles qui correspondent par
                hasard entre ces infections, l'IBS est inférieur à 1 pour
                toutes vos comparaisons. Cela signifie que vous n'avez trouvé aucune
                preuve de transmission directe se produisant à l'école!`
                      : `Correto! Embora existam alguns alelos que correspondem por
                acaso entre essas infecções, o IBS é menor que 1 para
                todas as suas comparações. Isso significa que você não encontrou nenhuma
                evidência de transmissão direta ocorrendo na escola!`
                  }
                />
              </div>
            )}
            {phase === 7 && (
              <div>
                <KnowledgeCheckQuestion
                  answers={[
                    {
                      checked: questions[3] === 0,
                      correct: false,
                      index: 0,
                      text:
                        lang === "EN"
                          ? "You have definitively proven that there is absolutely no malaria transmission occurring at the school."
                          : lang === "FR"
                          ? "Vous avez définitivement prouvé qu'il n'y a absolument aucune transmission du paludisme à l'école."
                          : lang === "PT"
                          ? "Você provou definitivamente que não há absolutamente nenhuma transmissão de malária ocorrendo na escola."
                          : "Vous avez définitivement prouvé qu'il n'y a absolument aucune transmission du paludisme à l'école.",
                    },
                    {
                      checked: questions[3] === 1,
                      correct: false,
                      index: 1,
                      text:
                        lang === "EN"
                          ? "You can't really say one way or the other whether malaria transmission is occurring at the school, so you choose to say the results were not clear."
                          : lang === "FR"
                          ? `Vous ne pouvez pas vraiment dire si la transmission du paludisme se produit à l'école, alors vous choisissez de dire que les résultats n'étaient pas clairs.`
                          : lang === "PT"
                          ? `Você não pode realmente dizer se a transmissão da malária está ocorrendo na escola, então você escolhe dizer que os resultados não foram claros.`
                          : `Vous ne pouvez pas vraiment dire si la transmission du paludisme se produit à l'école, alors vous choisissez de dire que les résultats n'étaient pas clairs.`,
                    },
                    {
                      checked: questions[3] === 2,
                      correct: true,
                      index: 2,
                      text:
                        lang === "EN"
                          ? "You can say with a reasonable degree of confidence that these four cases are not related by transmission and are not suspicious of an outbreak occurring at the school. However, if additional cases in the school or nearby are detected, your team should be contacted immediately to continue the investigation."
                          : lang === "FR"
                          ? "Vous pouvez dire avec un degré de confiance raisonnable que ces quatre cas ne sont pas liés par la transmission et ne sont pas suspects d'une épidémie se produisant à l'école. Cependant, si des cas supplémentaires sont détectés à l'école ou à proximité, votre équipe doit être contactée immédiatement pour poursuivre l'enquête."
                          : lang === "PT"
                          ? "Você pode dizer com um grau razoável de confiança que esses quatro casos não estão relacionados por transmissão e não são suspeitos de um surto ocorrendo na escola. No entanto, se casos adicionais na escola ou nas proximidades forem detectados, sua equipe deve ser contatada imediatamente para continuar a investigação."
                          : "Vous pouvez dire avec un degré de confiance raisonnable que ces quatre cas ne sont pas liés par la transmission et ne sont pas suspects d'une épidémie se produisant à l'école. Cependant, si des cas supplémentaires sont détectés à l'école ou à proximité, votre équipe doit être contactée immédiatement pour poursuivre l'enquête.",
                    },
                    {
                      checked: questions[3] === 3,
                      correct: false,
                      index: 3,
                      text:
                        lang === "EN"
                          ? "You can’t be bothered with interpreting results for other people and just show them the genotyping data, letting them figure it out for themselves."
                          : lang === "FR"
                          ? `Vous ne pouvez pas être dérangé par l'interprétation des résultats pour d'autres personnes et vous contenter de leur montrer les données de génotypage, en les laissant se débrouiller.`
                          : lang === "PT"
                          ? `Você não se incomoda em interpretar os resultados para outras pessoas e apenas mostra os dados de genotipagem, deixando que eles descubram por si mesmos.`
                          : "",
                    },
                  ]}
                  callback={(questionIdx, answerIndex) => {
                    setQuestions({
                      ...questions,
                      3: questions[3] === answerIndex ? null : answerIndex,
                    });
                  }}
                  classNames={{
                    container: "fadeIn500",
                    answersContainer: "mt-4 grid gap-2",
                  }}
                  hasAnswer={questions[3] === 2}
                  questionIdx={3}
                  headerText={
                    lang === "EN"
                      ? "Which of the following would be an accurate way of communicating your findings to stakeholders such as the school community, local government, and malaria control program?"
                      : lang === "FR"
                      ? "Quelle serait une façon précise de communiquer vos conclusions aux parties prenantes telles que la communauté scolaire, le gouvernement local et le programme de lutte contre le paludisme ?"
                      : lang === "PT"
                      ? "Qual seria uma maneira precisa de comunicar suas descobertas às partes interessadas, como a comunidade escolar, o governo local e o programa de controle da malária?"
                      : "Quelle serait une façon précise de communiquer vos conclusions aux parties prenantes telles que la communauté scolaire, le gouvernement local et le programme de lutte contre le paludisme ?"
                  }
                />
                <QuestionResponseText
                  className="mt-8"
                  complete={completion[phase] ?? false}
                  trigger={questions[3] === 2}
                  visible={questions[3] === 2}
                  text={
                    lang === "EN"
                      ? `You can be confident that these cases are not directly 
                related given your results. It is of course possible that
                transmission could still occur in the future, or that
                there were additional malaria infections related to some
                of these four that have not yet been detected. It is
                always good to maintain a level of vigilance and continue
                high quality malaria surveillance and case management, but
                for now there does not seem to be any reason to implement
                any additional interventions. Great work! You have saved
                the community from wasting resources on trying to control
                an “outbreak” that wasn't really a concern.`
                      : lang === "FR"
                      ? `Vous pouvez être sûr que ces cas ne sont pas directement liés compte tenu de vos résultats. Il est bien sûr possible que la transmission puisse encore se produire à l'avenir, ou qu'il y ait eu des infections palustres supplémentaires liées à certains de ces quatre cas qui n'ont pas encore été détectées. Il est toujours bon de maintenir un niveau de vigilance et de poursuivre une surveillance et une prise en charge de qualité du paludisme, mais pour l'instant, il ne semble y avoir aucune raison de mettre en œuvre des interventions supplémentaires. Excellent travail ! Vous avez évité à la communauté de gaspiller des ressources en essayant de contrôler une « épidémie » qui n'était pas vraiment une préoccupation.`
                      : lang === "PT"
                      ? `Você pode ter certeza de que esses casos não estão diretamente relacionados, dados os seus resultados. É claro que é possível que a transmissão ainda ocorra no futuro, ou que haja infecções adicionais de malária relacionadas a alguns desses quatro casos que ainda não foram detectadas. É sempre bom manter um nível de vigilância e continuar a vigilância e o manejo de casos de malária de alta qualidade, mas por enquanto não parece haver nenhuma razão para implementar intervenções adicionais. Ótimo trabalho! Você salvou a comunidade de desperdiçar recursos tentando controlar um "surto" que não era realmente uma preocupação.`
                      : `Vous pouvez être sûr que ces cas ne sont pas directement liés compte tenu de vos résultats. Il est bien sûr possible que la transmission puisse encore se produire à l'avenir, ou qu'il y ait eu des infections palustres supplémentaires liées à certains de ces quatre cas qui n'ont pas encore été détectées. Il est toujours bon de maintenir un niveau de vigilance et de poursuivre une surveillance et une prise en charge de qualité du paludisme, mais pour l'instant, il ne semble y avoir aucune raison de mettre en œuvre des interventions supplémentaires. Excellent travail ! Vous avez évité à la communauté de gaspiller des ressources en essayant de contrôler une « épidémie » qui n'était pas vraiment une préoccupation.`
                  }
                />
                {/* {questions[3] === 2 && (
            <div className="fadeIn500 my-8 bg-primaryBlue/20 p-4 text-sm md:p-8">
              <p>
                Correct! You can be confident that these cases are not
                related given your results. It is of course possible that
                transmission could still occur in the future, or that
                there were additional malaria infections related to some
                of these four that have not yet been detected. It is
                always good to maintain a level of vigilance and continue
                high quality malaria surveillance and case management, but
                for now there does not seem to be any reason to implement
                any additional interventions. Great work! You have saved
                the community from wasting resources on trying to control
                an “outbreak” that wasn&apos;t really a concern.
              </p>
            </div>
          )} */}
              </div>
            )}
          </div>
        ) : null
      }
      // leftContent
    />
  );

  return (
    <StandardLayout>
      <div>
        <FormHeader text="Potential Transmission Network" />
        <NewDiamond />
      </div>
      <div>
        {phase === 5 && (
          <div>
            <FormHeader text="Genotypes with IBS" />
            <CompareGenotypes
              key={activePair}
              firstPersonId={activePair ? activePair[0] : null}
              secondPersonId={activePair ? activePair[1] : null}
            />
          </div>
        )}
        {phase >= 6 && (
          <div className="fadeIn500">
            <FormHeader text="Questions" />
            {phase === 6 && (
              <div>
                <KnowledgeCheckQuestion
                  answers={[
                    {
                      checked: questions[2] === 0,
                      correct: false,
                      index: 0,
                      text: "Yes",
                    },
                    {
                      checked: questions[2] === 1,
                      correct: true,
                      index: 1,
                      text: "No",
                    },
                  ]}
                  classNames={{
                    answersContainer: "mt-4 grid gap-2",
                  }}
                  callback={(questionIdx, answerIndex) => {
                    setQuestions({
                      ...questions,
                      2: questions[2] === answerIndex ? null : answerIndex,
                    });
                  }}
                  hasAnswer={questions[2] === 1}
                  headerText="Based on your analysis of the genotypes, do you see any evidence of direct malaria transmission (via a mosquito) between any of these children? Recall from earlier in this exercise that you expect IBS to be 1 when there is direct transmission."
                  questionIdx={2}
                />
                <QuestionResponseText
                  className="mt-8"
                  visible={questions[2] === 1}
                  complete={completion[phase] ?? false}
                  trigger={questions[2] === 1}
                  text="Correct! Even though there are some alleles matching by
                      chance between these infections, IBS is less than 1 for
                      all your comparisons. This means that you have found no
                      evidence of transmission occurring at the school!"
                />
              </div>
            )}
            {phase === 7 && (
              <div>
                <KnowledgeCheckQuestion
                  answers={[
                    {
                      checked: questions[3] === 0,
                      correct: false,
                      index: 0,
                      text: "You have definitively proven that there is absolutely no malaria transmission occurring at the school.",
                    },
                    {
                      checked: questions[3] === 1,
                      correct: false,
                      index: 1,
                      text: "You can't really say one way or the other whether malaria transmission is occurring at the school, so you choose to say the results were not clear.",
                    },
                    {
                      checked: questions[3] === 2,
                      correct: true,
                      index: 2,
                      text: "You can say with a reasonable degree of confidence that these four cases are not related by transmission and are not suspicious of an outbreak occurring at the school. However, if additional cases in the school or nearby are detected, your team should be contacted immediately to continue the investigation.",
                    },
                    {
                      checked: questions[3] === 3,
                      correct: false,
                      index: 3,
                      text: "You can’t be bothered with interpreting results for other people and just show them the genotyping data, letting them figure it out for themselves.",
                    },
                  ]}
                  callback={(questionIdx, answerIndex) => {
                    setQuestions({
                      ...questions,
                      3: questions[3] === answerIndex ? null : answerIndex,
                    });
                  }}
                  classNames={{
                    container: "fadeIn500",
                    answersContainer: "mt-4 grid gap-2",
                  }}
                  hasAnswer={questions[3] === 2}
                  questionIdx={3}
                  headerText="Which of the following would be an accurate way of communicating your findings to stakeholders such as the school community, local government, and malaria control program?"
                />
                <QuestionResponseText
                  className="mt-8"
                  complete={completion[phase] ?? false}
                  trigger={questions[3] === 2}
                  visible={questions[3] === 2}
                  text=" Correct! You can be confident that these cases are not
                      related given your results. It is of course possible that
                      transmission could still occur in the future, or that
                      there were additional malaria infections related to some
                      of these four that have not yet been detected. It is
                      always good to maintain a level of vigilance and continue
                      high quality malaria surveillance and case management, but
                      for now there does not seem to be any reason to implement
                      any additional interventions. Great work! You have saved
                      the community from wasting resources on trying to control
                      an “outbreak” that wasn't really a concern."
                />
                {/* {questions[3] === 2 && (
                  <div className="fadeIn500 my-8 bg-primaryBlue/20 p-4 text-sm md:p-8">
                    <p>
                      Correct! You can be confident that these cases are not
                      related given your results. It is of course possible that
                      transmission could still occur in the future, or that
                      there were additional malaria infections related to some
                      of these four that have not yet been detected. It is
                      always good to maintain a level of vigilance and continue
                      high quality malaria surveillance and case management, but
                      for now there does not seem to be any reason to implement
                      any additional interventions. Great work! You have saved
                      the community from wasting resources on trying to control
                      an “outbreak” that wasn&apos;t really a concern.
                    </p>
                  </div>
                )} */}
              </div>
            )}
          </div>
        )}
      </div>
    </StandardLayout>
  );
}
