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

export default function StepSix() {
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
        instructions={
          <div className="flex flex-col gap-4">
            <p>
              Now the moment we've been building toward. It is time to interpret
              the results and provide feedback to your program about the
              effectiveness of its intervention.
            </p>
            {/* <p>
              Recall that prior to the intervention, you estimated MOI to be
              2.5, and that even though you only analyzed data from 10 samples
              in this exercise, we are assuming these 10 samples are
              representative of a larger sample.
            </p> */}
          </div>
        }
        title={<h1>Interpreting Results</h1>}
        complete={!Object.values(complete).includes(false)}
      />
      <div className="max-w-2xl">
        <h2 className="mb-8 text-xl font-bold">Questions</h2>
        <p className="[font-size:15px] mb-4">
          Recall that prior to the intervention, you estimated MOI to be 2.5,
          and that even though you only analyzed data from 10 samples in this
          exercise, we are assuming these 10 samples are representative of a
          larger sample.
        </p>
        <KnowledgeCheckQuestion
          headerText="Based on your estimates of MOI, do you have evidence that your intervention worked?"
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
              text: "Yes",
            },
            {
              checked: questions[1] === 2,
              correct: true,
              index: 2,
              text: "No",
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
          text="If your intervention worked, you might have expected this to result in a decrease in within-host diversity, as reflected by lower MOI. However, you should have noticed that the mean MOI increased rather than decreased."
          visible={questions[1] === 2}
        />
        {questions[1] === 2 && (
          <KnowledgeCheckQuestion
            headerText="Recall that prior to the intervention, you estimated MOI to be 2.5, and that even though you only analyzed data from 10 samples in this exercise, we are assuming these 10 samples are representative of a larger sample."
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
                text: "Hide your molecular data – they don’t agree with what you hoped to see so best to pretend they don’t exist",
              },
              {
                checked: questions[2] === 2,
                correct: false,
                index: 2,
                text: "Take your molecular data as irrefutable proof that transmission increased and immediately make sweeping and expensive programmatic changes",
              },
              {
                checked: questions[2] === 3,
                correct: true,
                index: 3,
                text: "Use your molecular data as a potential cause for concern, and think about additional sources of data that you can use or generate to confirm whether transmission is getting worse and if so why",
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
          text="Despite implementing a new intervention, there did not seem to be any decrease in MOI, which might have been expected with a decrease in transmission. In fact, MOI increased from 2.5 to 3.2! With a sufficient sample size, a difference of this magnitude would likely have been statistically significant, indicating that transmission may have actually increased despite, or potentially because of, the change in interventions. This may not surprise those working in malaria control – sometimes interventions that are supposed to work based on data from controlled settings actually behave differently when implemented in the field. Hopefully your investigation and analysis of the data helped identify this important result. You are now able to communicate this information to others in your program and think about additional actions."
        />
      </div>
    </div>
  );
}
