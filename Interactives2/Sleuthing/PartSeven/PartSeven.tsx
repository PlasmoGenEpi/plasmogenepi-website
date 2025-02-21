import {
  partSevenCompletionAtom,
  partSixCloneRowsAtom,
  partSixCloneRowsMHPsAtom,
  partSixCompletionAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import Genotypes, { P6Step2QuestionsAtom } from "../PartSix/Phases/Genotypes";
import StandardLayout from "../../Shared/misc/StandardLayout";
import Image from "next/image";
import KnowledgeCheckQuestion from "../../Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import { atom, useAtom, useAtomValue } from "jotai";
import { partSixPrompts } from "../PartSix/partSixPrompts";
import PositiveControlBoard from "../../Shared/PositiveControlBoard/PositiveControlBoard";
import PartSevenControlBoard from "./PartSevenControlBoard";
import { partSevenPrompts } from "./partSevenPrompts";
import PositiveControls from "./Phases/PositiveControls";
import MultiRowLayout from "../../Shared/misc/MultiRowLayout";
import ImageContainer from "../../Shared/misc/ImageContainer";
import FormHeader from "../../Shared/misc/FormHeader";
import QuestionResponseText from "../../Shared/misc/QuestionResponseText";
import GenotypeComposition from "../PartEight/Genotypes/GenotypeComposition";
import RedBlueGenotype from "./Genotypes/RedBlueGenotype";
import GenotypeComparator from "../PartSix/Comparators/MHPs/GenotypeComparator";
import {
  P6CloneRowButtonColors,
  P6CloneRowColors,
} from "../PartSix/CloneRows/P6MHPCloneRows";
import CloneRow from "../../Shared/CloneRow/CloneRow";
import SquareMicrohaplotype from "../../Shared/Microhaplotypes/SquareMicrohaplotype";
import { ReactElement, useEffect } from "react";
import { atomWithStorage } from "jotai/utils";
import {
  findFirstFocusableElement,
  getUniqueValuesArray,
} from "@/helpers/helpers";
import CompletePage from "../../Shared/misc/CompletePage";
import { usePrevious } from "@/app/components/hooks";

export const selectedClonesAtom = atomWithStorage<{
  1: null | number;
  2: null | number;
}>("selectedClonesAtom", {
  1: null,
  2: null,
});

const cloneControlDivMap: { [key: number]: ReactElement } = {
  0: (
    <label
      htmlFor={`kc-id-0`}
      className={`aspect-square h-12 rounded-full ${P6CloneRowButtonColors[1]} flex items-center justify-center bg-gradient-radial from-[white_10%]`}
    >
      <span className="block translate-y-[3px] text-lg font-bold">1</span>
    </label>
  ),
  1: (
    <label htmlFor={`kc-id-1`}>
      <div className="mr-6 flex aspect-square h-8 items-center justify-center rounded-full border border-microRed bg-cloneRed">
        {/* <span className="block translate-y-0.5 text-sm font-bold">1</span> */}
      </div>
      <div className="ml-6 flex aspect-square h-8 items-center justify-center rounded-full border border-microBlue bg-cloneBlue">
        {/* <span className="block translate-y-0.5 text-sm font-bold">2</span> */}
      </div>
    </label>
  ),
  2: (
    <label
      htmlFor={`kc-id-2`}
      className={`aspect-square h-12 rounded-full ${P6CloneRowButtonColors[2]} flex items-center justify-center bg-gradient-radial from-[white_10%]`}
    >
      <span className="block translate-y-[3px] text-lg font-bold">2</span>
    </label>
  ),
  3: (
    <label htmlFor={`kc-id-3`}>
      <div className="mr-6 aspect-square h-8 rounded-full border border-microRed bg-cloneRed"></div>
      <div className="ml-6 aspect-square h-8 rounded-full border border-microGreen bg-cloneGreen"></div>
    </label>
  ),
  4: (
    <label
      htmlFor={`kc-id-4`}
      className={`aspect-square h-12 rounded-full ${P6CloneRowButtonColors[3]} flex items-center justify-center bg-gradient-radial from-[white_10%]`}
    >
      <span className="block translate-y-[3px] text-lg font-bold">3</span>
    </label>
  ),
  5: (
    <label htmlFor={`kc-id-5`}>
      <div className="mr-6 aspect-square h-8 rounded-full border border-microBlue bg-cloneBlue"></div>
      <div className="ml-6 aspect-square h-8 rounded-full border border-microGreen bg-cloneGreen"></div>
    </label>
  ),
  6: (
    <label
      htmlFor={`kc-id-6`}
      className="clone-red-to-blue border-red-blue-rounded flex aspect-square h-12 items-center justify-center rounded-full bg-gradient-to-r"
    >
      <span className="block -translate-x-0.5 translate-y-[3px] text-lg font-bold">
        4
      </span>
    </label>
  ),
};

export default function PartSeven() {
  const [phase, setPhase] = useAtom(phaseAtom);
  const [questions, setQuestions] = useAtom(P6Step2QuestionsAtom);
  const completion = useAtomValue(partSevenCompletionAtom);
  const cloneRows = useAtomValue(partSixCloneRowsMHPsAtom);
  const [selectedClones, setSelectedClones] = useAtom(selectedClonesAtom);
  const forwards = usePrevious(phase, 1).current <= phase;

  useEffect(() => {
    if (phase >= 2 && !completion[phase]) {
      let x: HTMLElement | undefined = findFirstFocusableElement(
        document.getElementById("form-interactive"),
      );
      x?.focus();
    }
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  if (phase === 18) {
    return (
      <div>
        <CompletePage part={2} />;
        <PartSevenControlBoard />
      </div>
    );
  }

  return (
    <div>
      {/* {phase} */}
      <InteractivePrompt
        complete={completion[phase]}
        title={partSevenPrompts[phase].title}
        instructions={partSevenPrompts[phase].instructions}
      />
      {phase <= 3 && <PositiveControls />}
      {phase >= 4 && phase < 6 && (
        <Genotypes currentClone={3} first={1} second={2} />
      )}
      {phase >= 6 && phase <= 7 && (
        <Genotypes currentClone={1} first={2} second={3} />
      )}
      {phase > 7 && phase <= 8 && (
        <MultiRowLayout
          topLeft={
            <div>
              <FormHeader text="IBS Probability" />

              <ImageContainer
                className="fadeIn500"
                id="moi-1-2"
                label="IBS Distribution - MOI 1 vs MOI 2"
                path="/assets/M5_sluething_histogram_MHs_MOI1.1_vs1.2_IBD_0 (1).svg"
              />
            </div>
          }
          topRight={
            <div>
              <FormHeader text="Questions" />
              <KnowledgeCheckQuestion
                questionIdx={1}
                classNames={{
                  answersContainer: "grid gap-4 mt-4",
                }}
                hasAnswer={questions[7] === 2}
                callback={(questionIdx, answerIdx) => {
                  if (questions[7] === answerIdx) {
                    setQuestions({ ...questions, 7: null });
                  } else {
                    setQuestions({ ...questions, 7: answerIdx });
                  }
                }}
                answers={[
                  {
                    checked: questions[7] === 0,
                    correct: false,
                    index: 0,
                    text: "IBS would be lower.",
                  },
                  {
                    checked: questions[7] === 1,
                    correct: false,
                    index: 1,
                    text: "IBS would be the same.",
                  },
                  {
                    checked: questions[7] === 2,
                    correct: true,
                    index: 2,
                    text: "IBS would be higher.",
                  },
                ]}
                headerText="What do you think you might see if MOI in one or both samples was even higher, but still contained no related parasites between the two samples?"
              />
              <QuestionResponseText
                className="mt-8"
                complete={completion[phase] || false}
                trigger={questions[7] === 2}
                visible={questions[7] === 2}
                text="Correct, IBS would be higher. This is for the same reason that IBS is likely to be higher in polyclonal versus monoclonal samples – there may be more alleles present to potentially match by chance. This histogram shows the number of loci you would expect to see with matching alleles (IBS) if there are no related parasites between the two samples."
              />
            </div>
          }
        ></MultiRowLayout>
      )}
      {phase > 8 && phase <= 9 && (
        <MultiRowLayout
          topLeft={
            <div>
              <FormHeader text="IBS Probability" />

              <ImageContainer
                className="fadeIn500"
                id="moi-varies"
                label="IBS Distribution - MOI 1 vs MOI 2"
                path="/assets/M5_sluething_histogram_MHs_MOIvaries_IBD_0.svg"
              />
            </div>
          }
          topRight={
            <div>
              <FormHeader text="Questions" />
              <KnowledgeCheckQuestion
                questionIdx={1}
                classNames={{
                  answersContainer: "grid gap-4 mt-4",
                }}
                hasAnswer={
                  !questions[8][0] &&
                  questions[8][1] &&
                  questions[8][2] &&
                  questions[8][3]
                }
                callback={(questionIdx, answerIdx) => {
                  setQuestions({
                    ...questions,
                    8: {
                      ...questions[8],
                      [answerIdx]: !questions[8][answerIdx],
                    },
                  });
                }}
                answers={[
                  {
                    checked: questions[8][0] ?? false,
                    correct: false,
                    index: 0,
                    text: " Give up – it will be impossible to tell.",
                  },
                  {
                    checked: questions[8][1] ?? false,
                    correct: true,
                    index: 1,
                    text: "Increase the number of loci you genotype.",
                  },
                  {
                    checked: questions[8][2] ?? false,
                    correct: true,
                    index: 2,
                    text: "Increase the diversity of loci you genotype.",
                  },
                  {
                    checked: questions[8][3] ?? false,
                    correct: true,
                    index: 3,
                    text: "Use more powerful statistical methods that directly estimate IBD instead of using IBS.",
                  },
                ]}
                headerText="What do you think you could do to better distinguish related from unrelated infections in this situation? (choose all that apply)"
              />
              <QuestionResponseText
                className="mt-8"
                complete={completion[phase] || false}
                trigger={
                  !questions[8][0] &&
                  questions[8][1] &&
                  questions[8][2] &&
                  questions[8][3]
                }
                visible={
                  !questions[8][0] &&
                  questions[8][1] &&
                  questions[8][2] &&
                  questions[8][3]
                }
                text="In situations where MOI is higher, a larger, more diverse genotyping panel can help provide increased resolution. In addition, statistical methods specifically designed to estimate IBD from polyclonal infections are available and provide accurate estimates as well as statistical significance.  Fortunately, for the cases you are investigating this exercise, transmission is relatively low and you should be able to figure out what is going on by calculating IBS using your panel of 12 microhaplotypes."
              />
            </div>
          }
        ></MultiRowLayout>
      )}
      {phase >= 10 && phase < 12 && (
        <Genotypes currentClone={1} first={1} second={2} />
      )}
      {phase === 12 && (
        <StandardLayout>
          <div className="">
            <FormHeader
              text={
                phase === 12 ? "Polyclonal Genotype Comparisons" : "Questions"
              }
            />
            <RedBlueGenotype />
            <div className="mt-4 max-w-[500px]">
              <div
                className={`grid gap-1 font-helvetica transition-all [grid-template-columns:8%_auto]`}
              >
                <div>
                  <div
                    className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[1]} scale-90`}
                  >
                    <div className="flex aspect-square items-center justify-center rounded-full">
                      <span className="absolute translate-y-[3px] font-bold">
                        1
                      </span>
                    </div>
                  </div>
                </div>
                <ol className={`grid h-full grow grid-cols-12 gap-1 p-1`}>
                  {/* {children} */}
                  {cloneRows[1].vals.map((val, idx) => {
                    return (
                      <SquareMicrohaplotype id={val as number} key={idx} />
                    );
                  })}
                </ol>
              </div>
            </div>{" "}
          </div>
          <div>
            <FormHeader text="Transmissions" />
            {phase === 12 && (
              <ImageContainer
                className="fadeIn500"
                label=""
                id="a"
                path="/assets/2.3.2.svg"
              />
            )}
          </div>
        </StandardLayout>
      )}
      {phase === 13 && (
        <MultiRowLayout
          style={{
            rowGap: 0,
          }}
          topLeft={
            <div>
              <FormHeader text="Transmissions" />
              {/* <div className="relative grid aspect-square h-16 place-items-center rounded-full bg-cloneRed">
                <div className="grid aspect-square h-8 place-items-center rounded-full bg-white">
                  <span className="block translate-y-[3px]">1</span>
                </div>
              </div> */}
              <ImageContainer
                className="fadeIn500"
                label=""
                id="a"
                path="/assets/2.3.3.1.svg"
              />
            </div>
          }
          topRight={
            <div className="md:row-span-2">
              <FormHeader text="Questions" />
              <div
                tabIndex={0}
                role="radiogroup"
                aria-roledescription="radiogroup"
                className={`focus-within:outline-offset-8`}
                aria-label={`What do you think IBS would be in this situation? Fortunately,
              you have just the controls to test out your hypothesis! Which
              two controls should you compare?`}
              >
                <h6 className="mb-8 [fontSize:15px]">
                  What do you think IBS would be in this situation? Fortunately,
                  you have just the controls to test out your hypothesis! Which
                  two controls should you compare?
                </h6>
                <ol className="grid grid-cols-2 gap-4 ">
                  {Array(7)
                    .fill(0)
                    .map((el, idx) => {
                      return (
                        <li key={idx} className="flex w-fit items-center gap-8">
                          <input
                            onChange={
                              (selectedClones[1] === 1 ||
                                selectedClones[2] === 1) &&
                              (selectedClones[1] === 6 ||
                                selectedClones[2] === 6)
                                ? undefined
                                : () => {
                                    if (completion[phase] || true) {
                                    }
                                    if (
                                      selectedClones[1] === null &&
                                      selectedClones[2] !== idx
                                    ) {
                                      setSelectedClones({
                                        ...selectedClones,
                                        1: idx,
                                      });
                                    } else if (
                                      selectedClones[2] === null &&
                                      selectedClones[1] !== idx
                                    ) {
                                      setSelectedClones({
                                        ...selectedClones,
                                        2: idx,
                                      });
                                    } else if (selectedClones[1] === idx) {
                                      setSelectedClones({
                                        ...selectedClones,
                                        1: null,
                                      });
                                    } else if (selectedClones[2] === idx) {
                                      setSelectedClones({
                                        ...selectedClones,
                                        2: null,
                                      });
                                    } else {
                                    }
                                  }
                            }
                            tabIndex={0}
                            id={`kc-id-${idx}`}
                            type="checkbox"
                            checked={
                              selectedClones[1] === idx ||
                              selectedClones[2] === idx
                            }
                            disabled={
                              selectedClones[1] !== null &&
                              selectedClones[2] !== null &&
                              selectedClones[1] !== idx &&
                              selectedClones[2] !== idx
                            }
                            className={`${
                              idx === 1 || idx === 6
                                ? "accent-primaryBlue [--chkbg:#14828C]"
                                : "accent-microRed [--chkbg:#E61048]"
                            } h-4 w-4  disabled:opacity-50 md:h-[14px] md:w-[14px]`}
                          ></input>
                          <div
                            className={`${
                              selectedClones[1] !== null &&
                              selectedClones[2] !== null &&
                              selectedClones[1] !== idx &&
                              selectedClones[2] !== idx
                                ? "opacity-50"
                                : ""
                            }`}
                          >
                            {cloneControlDivMap[idx]}
                          </div>
                        </li>
                      );
                    })}
                </ol>
              </div>
            </div>
          }
          bottomLeft={
            <QuestionResponseText
              className="mt-8"
              visible={
                (selectedClones[1] === 1 || selectedClones[2] === 1) &&
                (selectedClones[1] === 6 || selectedClones[2] === 6)
              }
              text={`That’s right – clone four is a hybrid of clones one and two, so this would be analogous to a situation in which a person is infected with clones one and two, both clones infected the mosquito, and then recombination produced a hybrid of the two clones which infected a second person.`}
            />
          }
        ></MultiRowLayout>
      )}
      {(phase === 14 || phase === 15) && (
        <Genotypes currentClone={4} first={1} second={2} />
      )}
      {phase === 16 && (
        <StandardLayout>
          <div>
            <FormHeader text="Polyclonal Genotype Comparison" />
            <div
              className={`grid max-w-[500px] gap-1 [grid-template-columns:8%_auto]`}
            >
              <div className="my-auto flex min-h-10 w-full flex-col">
                <div
                  className={`mr-auto aspect-square h-7 translate-y-0.5 rounded-full ${P6CloneRowColors[1]}`}
                ></div>
                <div
                  className={`ml-auto aspect-square h-7 -translate-y-0.5 rounded-full ${P6CloneRowColors[2]}`}
                ></div>
              </div>{" "}
              <div>
                <div className="grid grow grid-cols-12 gap-1 self-center p-1">
                  {cloneRows[1].vals
                    .map((el, idx) => {
                      //@ts-ignore
                      return [el + 1, cloneRows[2].vals[idx] + 1];
                    })
                    .map((microIdArr, idx) => {
                      return (
                        <div
                          style={{
                            gap: "4px",
                          }}
                          key={idx}
                          className={`flex flex-col justify-end gap-0.5`}
                        >
                          {getUniqueValuesArray(microIdArr).map(
                            (microId, idx2) => {
                              return (
                                <SquareMicrohaplotype
                                  className={
                                    (idx < 6 &&
                                      idx2 === 0 &&
                                      (getUniqueValuesArray(microIdArr)
                                        .length === 1 ||
                                        idx2 === 0)) ||
                                    (idx >= 6 &&
                                      (idx2 === 1 ||
                                        getUniqueValuesArray(microIdArr)
                                          .length === 1))
                                      ? "opacity-100"
                                      : "opacity-20"
                                    // (microIdArr.includes(microId) &&
                                    //   idx < 6 &&
                                    //   idx2 === 0) ||
                                    // (microIdArr.includes(microId) &&
                                    //   idx >= 6 &&
                                    //   idx2 === 1)
                                    //   ? ""
                                    //   : "opacity-20"
                                  }
                                  id={microId - 1}
                                  key={idx2}
                                />
                              );
                            },
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="mt-8 max-w-[500px]">
              <div
                className={` grid gap-1 font-helvetica [grid-template-columns:8%_auto]`}
              >
                <div>
                  <div
                    className={`border-red-blue-rounded aspect-square rounded-full bg-gradient-radial from-[white_20%]`}
                  >
                    <div className="flex aspect-square items-center justify-center rounded-full">
                      <span className="absolute translate-y-[3px] font-bold">
                        4
                      </span>
                    </div>
                  </div>
                </div>
                <ol className={`grid h-full grow grid-cols-12 gap-1 p-1`}>
                  {cloneRows[4].vals.map((el, idx) => {
                    return (
                      <SquareMicrohaplotype
                        id={el}
                        key={idx}
                        // className={
                        //   idx < 6
                        //     ? "-translate-y-[calc(50%+2px)]"
                        //     : "translate-y-[calc(50%+2px)]"
                        // }
                        // className="opacity-50"
                      />
                    );
                  })}{" "}
                </ol>
              </div>
              {/* <CloneRow
                label={4}
                classNames={{
                  button: "border-red-blue-rounded",
                  row: "shadow-none",
                }}
              >
                {cloneRows[4].vals.map((el, idx) => {
                  return <SquareMicrohaplotype id={el} key={idx} />;
                })}
              </CloneRow> */}
            </div>
            <QuestionResponseText
              className="mt-8"
              visible
              text={
                "The important take home point is that if one person transmits parasites directly to another person through a mosquito, every locus should have a match between those two people - IBS should be 1.0. This is true regardless of whether one or more parasites are transmitted, and whether recombination occurs in the mosquito or not."
              }
            />
          </div>
          <div>
            <FormHeader text="Transmissions" />
            <div
              style={{
                maxWidth: "400px",
              }}
              className="mx-auto"
            >
              <ImageContainer
                className="fadeIn500"
                noPadding
                label=""
                id="a"
                path="/assets/2.3.2.svg"
              />{" "}
              <ImageContainer
                className="fadeIn500 mt-8"
                noPadding
                label=""
                id="a"
                path="/assets/2.3.3.1.svg"
              />
            </div>
          </div>
        </StandardLayout>
      )}
      {phase === 17 && (
        <div className="grid place-items-center">
          <div className="mx-auto">
            <ImageContainer
              label={` Microhaplotype Match Probability (0%, 50%, 100% IBD)`}
              id="a"
              path="/assets/M5_sluething_histogram_MHs_MOI1_IBD_0_0.5_1_together.svg"
            />
          </div>
        </div>
      )}
      {/*
      topLeft={<div>
      <FormHeader text="Polyclonal Genotype Comparison" /></div>}
      {phase === 14 && (
        <StandardLayout>
          <div>
            <FormHeader text="Tramsmissions" />
            <ImageContainer
              className="fadeIn500"
              label=""
              id="a"
              path="/assets/2.3.3.1.svg"
            />
          </div>
          <div>
            <FormHeader text="Clones and Controls" />
            <div className="grid grid-cols-4 grid-rows-2 justify-around gap-8">
              <div
                onClick={() => {
                  if (selectedClones[1] === null && selectedClones[2] !== 1) {
                    setSelectedClones({ ...selectedClones, 1: 1 });
                  } else if (
                    selectedClones[2] === null &&
                    selectedClones[1] !== 1
                  ) {
                    setSelectedClones({ ...selectedClones, 2: 1 });
                  } else if (selectedClones[1] === 1) {
                    setSelectedClones({ ...selectedClones, 1: null });
                  } else if (selectedClones[2] === 1) {
                    setSelectedClones({ ...selectedClones, 2: null });
                  }
                }}
                className={
                  selectedClones[1] === 1 || selectedClones[2] === 1
                    ? "outline outline-4 " +
                      "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                    : "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                }
              >
                <div
                  className={`aspect-square w-1/2 rounded-full ${P6CloneRowColors[1]}`}
                >
                  <span></span>
                </div>
              </div>
              <div
                onClick={() => {
                  if (selectedClones[1] === null && selectedClones[2] !== 2) {
                    setSelectedClones({ ...selectedClones, 1: 2 });
                  } else if (
                    selectedClones[2] === null &&
                    selectedClones[1] !== 2
                  ) {
                    setSelectedClones({ ...selectedClones, 2: 2 });
                  } else if (selectedClones[1] === 2) {
                    setSelectedClones({ ...selectedClones, 1: null });
                  } else if (selectedClones[2] === 2) {
                    setSelectedClones({ ...selectedClones, 2: null });
                  }
                }}
                className={
                  selectedClones[1] === 2 || selectedClones[2] === 2
                    ? "outline outline-4 -outline-offset-[10px] " +
                      "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                    : "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                }
              >
                <div
                  className={`aspect-square w-1/2 rounded-full ${P6CloneRowColors[2]}`}
                ></div>
              </div>
              <div
                onClick={() => {
                  if (selectedClones[1] === null && selectedClones[2] !== 3) {
                    setSelectedClones({ ...selectedClones, 1: 3 });
                  } else if (
                    selectedClones[2] === null &&
                    selectedClones[1] !== 3
                  ) {
                    setSelectedClones({ ...selectedClones, 2: 3 });
                  } else if (selectedClones[1] === 3) {
                    setSelectedClones({ ...selectedClones, 1: null });
                  } else if (selectedClones[2] === 3) {
                    setSelectedClones({ ...selectedClones, 2: null });
                  }
                }}
                className={
                  selectedClones[1] === 3 || selectedClones[2] === 3
                    ? "outline outline-4 -outline-offset-[10px] " +
                      "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                    : "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                }
              >
                <div
                  className={`aspect-square w-1/2 rounded-full ${P6CloneRowColors[3]}`}
                ></div>
              </div>
              <div
                onClick={() => {
                  if (selectedClones[1] === null && selectedClones[2] !== 4) {
                    setSelectedClones({ ...selectedClones, 1: 4 });
                  } else if (
                    selectedClones[2] === null &&
                    selectedClones[1] !== 4
                  ) {
                    setSelectedClones({ ...selectedClones, 2: 4 });
                  } else if (selectedClones[1] === 4) {
                    setSelectedClones({ ...selectedClones, 1: null });
                  } else if (selectedClones[2] === 4) {
                    setSelectedClones({ ...selectedClones, 2: null });
                  }
                }}
                className={
                  selectedClones[1] === 4 || selectedClones[2] === 4
                    ? "outline outline-4 -outline-offset-[10px] " +
                      "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                    : "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                }
              >
                <div className="aspect-square w-1/2 rounded-full bg-gradient-to-r from-cloneRed via-[#FFB0B0_50%,#B8E6FA_50%] to-cloneBlue"></div>
              </div>
              <div
                onClick={() => {
                  if (selectedClones[1] === null && selectedClones[2] !== 5) {
                    setSelectedClones({ ...selectedClones, 1: 5 });
                  } else if (
                    selectedClones[2] === null &&
                    selectedClones[1] !== 5
                  ) {
                    setSelectedClones({ ...selectedClones, 2: 5 });
                  } else if (selectedClones[1] === 5) {
                    setSelectedClones({ ...selectedClones, 1: null });
                  } else if (selectedClones[2] === 5) {
                    setSelectedClones({ ...selectedClones, 2: null });
                  }
                }}
                className={
                  selectedClones[1] === 5 || selectedClones[2] === 5
                    ? "outline outline-4 -outline-offset-[10px] " +
                      "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                    : "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                }
              >
                <div className="mr-6 aspect-square w-1/3 rounded-full bg-cloneRed"></div>
                <div className="ml-6 aspect-square w-1/3 rounded-full bg-cloneBlue"></div>
              </div>
              <div
                onClick={() => {
                  if (selectedClones[1] === null && selectedClones[2] !== 6) {
                    setSelectedClones({ ...selectedClones, 1: 6 });
                  } else if (
                    selectedClones[2] === null &&
                    selectedClones[1] !== 6
                  ) {
                    setSelectedClones({ ...selectedClones, 2: 6 });
                  } else if (selectedClones[1] === 6) {
                    setSelectedClones({ ...selectedClones, 1: null });
                  } else if (selectedClones[2] === 6) {
                    setSelectedClones({ ...selectedClones, 2: null });
                  }
                }}
                className={
                  selectedClones[1] === 6 || selectedClones[2] === 6
                    ? "outline outline-4 -outline-offset-[10px] " +
                      "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                    : "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                }
              >
                <div className="mr-6 aspect-square w-1/3 rounded-full bg-cloneRed"></div>
                <div className="ml-6 aspect-square w-1/3 rounded-full bg-cloneGreen"></div>
              </div>
              <div
                onClick={() => {
                  if (selectedClones[1] === null && selectedClones[2] !== 7) {
                    setSelectedClones({ ...selectedClones, 1: 7 });
                  } else if (
                    selectedClones[2] === null &&
                    selectedClones[1] !== 7
                  ) {
                    setSelectedClones({ ...selectedClones, 2: 7 });
                  } else if (selectedClones[1] === 7) {
                    setSelectedClones({ ...selectedClones, 1: null });
                  } else if (selectedClones[2] === 7) {
                    setSelectedClones({ ...selectedClones, 2: null });
                  }
                }}
                className={
                  selectedClones[1] === 7 || selectedClones[2] === 7
                    ? "outline outline-4 -outline-offset-[10px] " +
                      "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                    : "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                }
              >
                <div className="mr-6 aspect-square w-1/3 rounded-full bg-cloneBlue"></div>
                <div className="ml-6 aspect-square w-1/3 rounded-full bg-cloneGreen"></div>
              </div>
            </div>
            <QuestionResponseText
              className="mt-8"
              visible={
                Object.values(selectedClones).includes(1) &&
                Object.values(selectedClones).includes(4)
              }
              complete={completion[phase]}
              trigger={
                Object.values(selectedClones).includes(1) &&
                Object.values(selectedClones).includes(4)
              }
              text="That’s right – clone four is a hybrid of clones one and two, so this would be analogous to a situation in which a person is infected with clones one and two, both clones infected the mosquito, and then recombination produced a hybrid of the two clones which infected a second person."
            />
          </div>
        </StandardLayout>
      )} */}
      {phase === 14 && <StandardLayout></StandardLayout>}
      <PartSevenControlBoard />
    </div>
  );

  return (
    <div>
      <InteractivePrompt
        skippable={completion[1]}
        complete={completion[phase]}
        title={partSevenPrompts[phase].title}
        instructions={partSevenPrompts[phase].instructions}
      />{" "}
      {phase}
      {phase >= 50 && phase < 52 && <PositiveControls />}
      {/* {phase >= 51 && phase <= 53 && (
        <div className="flex flex-col gap-16">
          <div className="grid gap-16 md:grid-cols-2">
            <div className="mx-auto w-full max-w-[400px]">
              <PositiveControlBoard></PositiveControlBoard>
            </div>
            <div></div>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="max-w-[400px]">
              <PositiveControlBoard></PositiveControlBoard>
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="max-w-[400px]">
              <PositiveControlBoard></PositiveControlBoard>
            </div>
          </div>
        </div>
      )} */}
      {phase >= 52 && phase < 57 && <Genotypes />}
      {phase === 59 && (
        <StandardLayout>
          <div>
            <Image
              src="/assets/M5_sluething_histogram_MHs_MOI1.1_vs1.2_IBD_0.svg"
              alt="MOI match probability"
              width={600}
              height={600}
            />
          </div>
          <div>
            <div className="mb-8 text-center text-xl font-bold md:text-left">
              <h2>Questions</h2>
            </div>
            <div className="flex flex-col gap-8">
              <KnowledgeCheckQuestion
                classNames={{
                  answersContainer: "grid gap-4 mt-4",
                }}
                answers={[
                  {
                    checked: questions[7] === 0,
                    correct: false,
                    index: 0,
                    text: "IBS would be lower",
                  },
                  {
                    checked: questions[7] === 1,
                    correct: false,
                    index: 1,
                    text: "IBS would be the same",
                  },
                  {
                    checked: questions[7] === 2,
                    correct: true,
                    index: 2,
                    text: "IBS would be higher",
                  },
                ]}
                callback={(questionIdx, answerIdx) => {
                  if (questions[questionIdx] === answerIdx) {
                    setQuestions({ ...questions, [questionIdx]: null });
                  } else {
                    setQuestions({ ...questions, [questionIdx]: answerIdx });
                  }
                }}
                hasAnswer={questions[7] === 2}
                headerText="What do you think you might see if MOI in one or both samples was even higher, but still contained no related parasites between the two samples?"
                questionIdx={7}
              />
              <div className="bg-primaryBlue/10 p-8 text-sm">
                <p>
                  The correct answer is C, IBS would be higher. This is for the
                  same reason that IBS is likely to be higher in polyclonal
                  versus monoclonal samples &ndash; there may be more alleles
                  present to potentially match by chance. This histogram shows
                  the number of loci you would expect to see with matching
                  alleles (IBS) if there are no related parasites between the
                  two samples.
                </p>
              </div>
              <div className="bg-primaryBlue/10 p-8 text-sm">
                <p>
                  Notice that when MOI is three in both samples, you see IBS as
                  high as 1 even when IBD is 0 using the genotyping panel in
                  this exercise: 12 microhaplotypes with 8 alleles each. As MOI
                  gets higher, it gets harder to distinguish infections
                  containing related parasites from those containing unrelated
                  parasites!
                </p>
              </div>
            </div>
          </div>
        </StandardLayout>
      )}
      {phase === 60 && (
        <StandardLayout>
          <div>
            <Image
              src="/assets/M5_sluething_histogram_MHs_MOIvaries_IBD_0.svg"
              alt="MOI match probability"
              width={600}
              height={600}
            />
          </div>
          <div>
            <div className="mb-8 text-center text-xl font-bold md:text-left">
              <h2>Questions</h2>
            </div>
            <div className="flex flex-col gap-8">
              <KnowledgeCheckQuestion
                classNames={{
                  answersContainer: "grid gap-4 mt-4",
                }}
                answers={[
                  {
                    checked: !!questions[8][1],
                    correct: false,
                    index: 0,
                    text: "Give up - it will be impossible to tell",
                  },
                  {
                    checked: !!questions[8][2],
                    correct: true,
                    index: 1,
                    text: "Increase the number of loci you genotype",
                  },
                  {
                    checked: !!questions[8][3],
                    correct: true,
                    index: 2,
                    text: "Increase the diversity of loci you genotype",
                  },
                  {
                    checked: !!questions[8][4],
                    correct: true,
                    index: 3,
                    text: "Use more powerful statistical methods that directly estimate IBD instead of using IBS",
                  },
                ]}
                callback={(questionIdx, answerIdx) => {
                  if (questions[8][answerIdx + 1]) {
                    setQuestions({
                      ...questions,
                      [questionIdx]: {
                        ...questions[questionIdx],
                        [answerIdx + 1]: null,
                      },
                    });
                  } else {
                    setQuestions({
                      ...questions,
                      [questionIdx]: { ...questions[8], [answerIdx + 1]: true },
                    });
                  }
                }}
                hasAnswer={
                  questions[8][1] === null &&
                  questions[8][2] &&
                  questions[8][3] &&
                  questions[8][4]
                }
                headerText="What do you think you could do to better distinguish related from unrelated infections in this situation? (choose all that apply)"
                questionIdx={8}
              />
              <div className="bg-primaryBlue/10 p-8 text-sm">
                <p>
                  In situations where MOI is higher, a larger, more diverse
                  genotyping panel can help provide increased resolution. In
                  addition, statistical methods specifically designed to
                  estimate IBD from polyclonal infections are available and
                  provide accurate estimates as well as statistical
                  significance. Fortunately, for the cases you are investigating
                  this exercise, transmission is relatively low and you should
                  be able to figure out what is going on by calculating IBS
                  using your panel of 12 microhaplotypes.
                </p>
              </div>
            </div>
          </div>
        </StandardLayout>
      )}
      {phase > 60 && <Genotypes />}
      <PartSevenControlBoard />
    </div>
  );
}
