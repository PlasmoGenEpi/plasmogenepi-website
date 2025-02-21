import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import SNPComparator from "../Comparators/SNPs/SNPComparator";
import MicrohaplotypeComparator from "../Comparators/MHPs/MicrohaplotypeComparators";
import {
  pairwiseCombosMHPsAtom,
  partSixCompletionAtom,
  phase2Atom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import Image from "next/image";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import { useEffect } from "react";
import ImageContainer from "@/app/components/Interactives/Shared/misc/ImageContainer";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import { atomWithStorage } from "jotai/utils";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";
import InteractiveLayout from "@/app/Interactives/layout";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export const slidoReplacementQuestionAtom = atomWithStorage<null | number>(
  "slidoReplacementQuestionAtom",
  null,
);

export default function MHPSlidoPolls() {
  const pairwiseCombos = useAtomValue(pairwiseCombosMHPsAtom);
  const phase = useAtomValue(phase2Atom);
  const [question, setQuestion] = useAtom(slidoReplacementQuestionAtom);
  const [complete, setComplete] = useAtom(partSixCompletionAtom);

  console.log(pairwiseCombos);

  let x =
    pairwiseCombos[1][2].filter((bool) => {
      return bool;
    }).length / 12;

  let y =
    pairwiseCombos[1][3].filter((bool) => {
      return bool;
    }).length / 12;

  let z =
    pairwiseCombos[2][3].filter((bool) => {
      return bool;
    }).length / 12;

  if (phase === 27) {
    return (
      <StandardLayout>
        <div>
          <ImageContainer
            id="mhp-0"
            path="/assets/M5_sluething_histogram_MHs_MOI1_IBD0.svg"
            label="Microhaplotype Match Probability (IBD 0%)"
          />
        </div>
        <div>
          <ImageContainer
            path="/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
            label="SNP Match Probability (IBD 0%)"
            id="50-50-snp"
          />
        </div>
      </StandardLayout>
    );
  }

  return (
    <InteractivePrimaryLayout
      leftHeader={"IBS Estimates with Microhaplotypes"}
      leftContent={
        <table className="table text-center">
          <thead>
            <tr className=" text-sm">
              <th>Comparisons</th>
              <th>IBS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-[500px]">
                <MicrohaplotypeComparator activeCombo={[1, 2]} />
              </td>
              <td>{(x * 100).toFixed(1)}%</td>
            </tr>
            <tr>
              <td className="w-[500px]">
                <MicrohaplotypeComparator activeCombo={[1, 3]} />
              </td>
              <td>{(y * 100).toFixed(1)}%</td>
            </tr>
            <tr>
              <td className="w-[500px]">
                <MicrohaplotypeComparator activeCombo={[2, 3]} />
              </td>
              <td>{(z * 100).toFixed(1)}%</td>
            </tr>
          </tbody>
        </table>
      }
      rightHeader={`Questions`}
      rightContent={
        <div>
          <KnowledgeCheckQuestion
            headerText="How did your IBS results comparing these same 3 unrelated parasites differ using 12 microhaplotypes versus using 12 SNPs?"
            questionIdx={1}
            hasAnswer={question === 1}
            classNames={{
              answersContainer: "grid gap-4 mt-4",
            }}
            callback={(questionIdx, answerIdx) => {
              if (question === answerIdx) {
                setQuestion(null);
              } else {
                setQuestion(answerIdx);
              }
            }}
            answers={[
              {
                checked: question === 1,
                correct: true,
                index: 1,
                text: "Using microhaplotypes, there were fewer alleles matching by chance.",
              },
              {
                checked: question === 2,
                correct: false,
                index: 2,
                text: "Using microhaplotypes, there were more alleles matching by chance.",
              },
              {
                checked: question === 3,
                correct: false,
                index: 3,
                text: "There was no difference in the number of alleles matching by chance.",
              },
            ]}
          />
          <QuestionResponseText
            complete={complete[phase]}
            visible={question === 1}
            content={
              <div
                className={
                  "bg-interactiveBlue/10 mt-8 text-pretty p-4 leading-[23px] dark:bg-zinc-900/50 dark:text-emerald-400 md:p-6 md:px-8"
                }
              >
                <p>
                  You should have noticed that you had fewer alleles matching by
                  chance in these unrelated parasites, since the microhaplotypes
                  were more diverse than SNPs – making IBS lower and better
                  reflecting IBD (which was always zero). This histogram shows
                  the expected number of matches using 12 microhaplotypes with 8
                  alleles each – usually less than 5. This contrasts with SNPs,
                  which could have up to 9 or 10 matches.
                </p>
                <ImageContainer
                  // className=""
                  id="mhp-0"
                  path="/InteractiveAssets/M5_sluething_histogram_MHs_MOI1_IBD0.svg"
                  label="Microhaplotype Match Distribution (IBD 0%)"
                />
                <ImageContainer
                  // className=""
                  id="mhp-0"
                  path="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
                  label="SNP Match Distribution (IBD 0%)"
                />
              </div>
            }
            text={""}
          />
        </div>
      }
    />
  );

  return (
    <StandardLayout>
      <div>
        <FormHeader text={`IBS Estimates with Microhaplotypes`} />

        <table className="table text-center">
          <thead>
            <tr className=" text-sm">
              <th>Comparisons</th>
              <th>IBS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-[500px]">
                <MicrohaplotypeComparator activeCombo={[1, 2]} />
              </td>
              <td>{(x * 100).toFixed(1)}%</td>
            </tr>
            <tr>
              <td className="w-[500px]">
                <MicrohaplotypeComparator activeCombo={[1, 3]} />
              </td>
              <td>{(y * 100).toFixed(1)}%</td>
            </tr>
            <tr>
              <td className="w-[500px]">
                <MicrohaplotypeComparator activeCombo={[2, 3]} />
              </td>
              <td>{(z * 100).toFixed(1)}%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <FormHeader text={`Questions`} />
        {/* <iframe
          id="slido-iframe"
          src="https://app.sli.do/event/dMvSri9uZuLjfxXNeS3m2o/embed/polls/576e9f53-e2ef-4520-8494-86c7ec19bcb4"
          className={
            phase !== 26 ? "hidden" : `h-[400px] w-full [&>*]:overflow-hidden`
          }
        ></iframe> */}
        <KnowledgeCheckQuestion
          headerText="How did your IBS results comparing these same 3 unrelated parasites differ using 12 microhaplotypes versus using 12 SNPs?"
          questionIdx={1}
          hasAnswer={question === 1}
          classNames={{
            answersContainer: "grid gap-4 mt-4",
          }}
          callback={(questionIdx, answerIdx) => {
            if (question === answerIdx) {
              setQuestion(null);
            } else {
              setQuestion(answerIdx);
            }
          }}
          answers={[
            {
              checked: question === 1,
              correct: true,
              index: 1,
              text: "Using microhaplotypes, there were fewer alleles matching by chance.",
            },
            {
              checked: question === 2,
              correct: false,
              index: 2,
              text: "Using microhaplotypes, there were more alleles matching by chance.",
            },
            {
              checked: question === 3,
              correct: false,
              index: 3,
              text: "There was no difference in the number of alleles matching by chance.",
            },
          ]}
        />
        {/* {question === 1 && (
          <div className="''500 mt-8  text-sm ">
            <div className="bg-primaryBlue/10 p-4 md:p-6">
              <p>
                {" "}
                You should have noticed that you had fewer alleles matching by
                chance in these unrelated parasites, since the microhaplotypes
                were more diverse than SNPs – making IBS lower and better
                reflecting IBD (which was always zero). This histogram shows the
                expected number of matches using 12 microhaplotypes with 8
                alleles each – usually less than 5. This contrasts with SNPs,
                which could have up to 9 or 10 matches.
              </p>
            </div>
            <ImageContainer
              id="mhp-0"
              path="/assets/M5_sluething_histogram_MHs_MOI1_IBD0.svg"
              label="Microhaplotype Match Distribution (IBD 0%)"
            />
          </div>
        )} */}
        <QuestionResponseText
          visible={question === 1}
          content={
            <div
              className={
                "bg-interactiveBlue/10 mt-4 text-pretty p-4 leading-[23px] dark:bg-zinc-900/50 dark:text-emerald-400 md:p-6 md:px-8"
              }
            >
              <p>
                You should have noticed that you had fewer alleles matching by
                chance in these unrelated parasites, since the microhaplotypes
                were more diverse than SNPs – making IBS lower and better
                reflecting IBD (which was always zero). This histogram shows the
                expected number of matches using 12 microhaplotypes with 8
                alleles each – usually less than 5. This contrasts with SNPs,
                which could have up to 9 or 10 matches.
              </p>
              <ImageContainer
                // className=""
                id="mhp-0"
                path="/InteractiveAssets/M5_sluething_histogram_MHs_MOI1_IBD0.svg"
                label="Microhaplotype Match Distribution (IBD 0%)"
              />
            </div>
          }
          text={""}
        />
      </div>
    </StandardLayout>
  );
}
