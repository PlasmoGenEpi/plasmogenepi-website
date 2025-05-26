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
      rightHeader={phase === 5 ? "Genotypes with IBS" : "Questions"}
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
                evidence of direct transmission occurring at the school!"
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
                  text=" You can be confident that these cases are not directly 
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
