import {
  pairwiseCombosAtom,
  partSixCompletionAtom,
  partSixSNPKnowledgeCheckQuestionsAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import SNPComparator from "../Comparators/SNPs/SNPComparator";
import { useAtom, useAtomValue } from "jotai";
import StandardLayout from "@/components/Interactives/Shared/misc/StandardLayout";
import Image from "next/image";
import KnowledgeCheckQuestion from "@/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import { RESET } from "jotai/utils";
import { useEffect } from "react";
import FormHeader from "@/components/Interactives/Shared/misc/FormHeader";

export default function SNPKnowledgeCheck() {
  const pairwiseCombos = useAtomValue(pairwiseCombosAtom);
  const phase = useAtomValue(phaseAtom);
  const completion = useAtomValue(partSixCompletionAtom);
  const [questions, setQuestions] = useAtom(
    partSixSNPKnowledgeCheckQuestionsAtom,
  );

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

  let xy =
    pairwiseCombos[1][4].filter((bool) => {
      return bool;
    }).length / 12;

  let yz =
    pairwiseCombos[2][4].filter((bool) => {
      return bool;
    }).length / 12;

  return (
    <StandardLayout>
      <div>
        <FormHeader text={`IBS Tables`} />
        <div className="origin-top lg:scale-90">
          <div className="">
            <table className="table w-full  text-center">
              <thead>
                <tr className=" text-base ">
                  <th>Comparisons where IBD = 0%</th>
                  <th>IBS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[1, 2]} />
                  </td>
                  <td>{(x * 100).toFixed(1)}%</td>
                </tr>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[1, 3]} />
                  </td>
                  <td>{(y * 100).toFixed(1)}%</td>
                </tr>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[2, 3]} />
                  </td>
                  <td>{(z * 100).toFixed(1)}%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="  py-4">
            <table className="table w-full  text-center">
              <thead>
                <tr className=" text-base">
                  <th>Comparisons where IBD = 50%</th>
                  <th>IBS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[1, 4]} />
                  </td>
                  <td>{(xy * 100).toFixed(1)}%</td>
                </tr>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[2, 4]} />
                  </td>
                  <td>{(yz * 100).toFixed(1)}%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="">
            <table className="table w-full  text-center">
              <thead>
                <tr className=" text-base">
                  <th>Comparisons where IBD = 100%</th>
                  <th>IBS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[3, 3]} />
                  </td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <FormHeader text={`Questions`} />

        <iframe
          src="https://app.sli.do/event/dMvSri9uZuLjfxXNeS3m2o/embed/polls/89af5580-b68c-4084-af9c-a74cebe5bf45"
          className={
            phase === 15 ? "h-[500px] w-full [&>*]:overflow-hidden" : "hidden"
          }
        ></iframe>
        {phase === 16 && (
          <div>
            <div className="fadeIn500 bg-primaryBlue/10 p-8 text-sm">
              <p>
                Statistically, it should be relatively straightforward to
                distinguish perfectly related parasites from completely
                unrelated parasites with 12 perfectly balanced SNPs. This is
                because perfectly related parasites will always have an IBS of
                1, whereas completely unrelated parasites will almost always
                have IBS at least a little less than 1, like in these two
                histograms:
              </p>
            </div>
            <div className="fadeIn500 mt-12 hidden p-4 text-center  md:block">
              <label
                className="font-bold [fontSize:15px]"
                htmlFor="75/25-SNP-image"
              >
                IBS Distribution of Perfectly Related Clones
              </label>
              <Image
                id="IBD-100-svg"
                src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD1.svg"}
                height={400}
                width={600}
                alt="SNP IBD 100/0 distribution diagram"
              />
            </div>
            <div className="fadeIn500 mt-4 hidden p-4 text-center  md:block">
              <label className="font-bold [fontSize:15px]" htmlFor="IBD-50-svg">
                IBS Distribution of Unrelated Clones
              </label>{" "}
              <Image
                id="IBD-50-svg"
                src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"}
                height={400}
                width={600}
                alt="SNP IBD 50/50 distribution diagram"
              />
            </div>
          </div>
        )}
        {phase === 18 && (
          <div>
            <div className="fadeIn500 bg-primaryBlue/10 p-8 text-sm">
              <p>
                Siblings may be difficult to reliably distinguish from unrelated
                parasites. This is because the number of matches we expect to
                see with 12 SNPs overlaps in these two situations. We tend to
                have more matches on average in the siblings than for completely
                unrelated parasites, but not reliably so.
              </p>
            </div>
            <div className="fadeIn500 mt-4 hidden p-4 text-center  md:block">
              <label htmlFor="75/25-SNP-image">75/25 allele frequency</label>
              <Image
                id="75/25-SNP-image"
                src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"}
                height={400}
                width={600}
                alt="SNP IBD 100/0 distribution diagram"
              />
            </div>
            <div className="fadeIn500 mt-4 hidden p-4 text-center  md:block">
              <label htmlFor="50/50-SNP-image">50/50 allele frequency</label>
              <Image
                id="50/50-SNP-image"
                src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"}
                height={400}
                width={600}
                alt="SNP IBD 50/50 distribution diagram"
              />
            </div>
          </div>
        )}
        <iframe
          src="https://app.sli.do/event/dMvSri9uZuLjfxXNeS3m2o/embed/polls/d4148767-68d3-47aa-84ad-baab7e8dd0cb"
          className={
            phase === 17 ? "h-[500px] w-full [&>*]:overflow-hidden" : "hidden"
          }
        ></iframe>
        {phase === 19 && (
          <div>
            <KnowledgeCheckQuestion
              answers={[
                {
                  checked: questions[1] === true,
                  correct: true,
                  index: 0,
                  text: "Increase the number of loci that you genotype, e.g. from 12 to 100",
                },
                {
                  checked: questions[2] === true,
                  correct: true,
                  index: 1,
                  text: "Increase the diversity of loci that you genotype, e.g. by using microhaplotypes instead of SNPs",
                },
                {
                  checked: questions[3] === true,
                  correct: false,
                  index: 2,
                  text: "Look at them under a microscope and try to distinguish them based on how they look",
                },
              ]}
              callback={(questionIdx, answerIdx) => {
                setQuestions({
                  ...questions,
                  [answerIdx + 1]: !questions[answerIdx + 1],
                });
              }}
              hasAnswer={
                questions[1] === true &&
                questions[2] === true &&
                (questions[3] === false || questions[3] === null)
              }
              headerText="How might you increase your ability to distinguish related from unrelated parasites? Choose all that apply."
              questionIdx={1}
              classNames={{
                answersContainer: "grid gap-4 mt-4",
              }}
            />
            {/* <div className="fadeIn500 bg-primaryBlue/10 p-8 text-sm">
              <p>
                For example, if we have 7, 8, or 9 matches, for example, it
                could be from siblings or completely unrelated parasites.
              </p>
            </div>
            <div className="mt-12">
              <Image
                height={400}
                width={600}
                alt=""
                src="/assets/M5_sluething_histogram_SNPs_MOI1_IBD_0_0.5_1_together.svg"
              />
            </div> */}
          </div>
        )}
        {(phase === 20 || phase === 21) && (
          <div>
            <KnowledgeCheckQuestion
              answers={[
                {
                  checked: questions[1] === true,
                  correct: true,
                  index: 0,
                  text: "Increase the number of loci that you genotype, e.g. from 12 to 100",
                },
                {
                  checked: questions[2] === true,
                  correct: true,
                  index: 1,
                  text: "Increase the diversity of loci that you genotype, e.g. by using microhaplotypes instead of SNPs",
                },
                {
                  checked: questions[3] === true,
                  correct: false,
                  index: 2,
                  text: "Look at them under a microscope and try to distinguish them based on how they look",
                },
              ]}
              callback={(questionIdx, answerIdx) => {
                setQuestions({
                  ...questions,
                  [answerIdx + 1]: !questions[answerIdx + 1],
                });
              }}
              hasAnswer={
                questions[1] === true &&
                questions[2] === true &&
                (questions[3] === false || questions[3] === null)
              }
              headerText="How might you increase your ability to distinguish related from unrelated parasites? Choose all that apply."
              questionIdx={1}
              classNames={{
                answersContainer: "grid gap-4 mt-4",
              }}
            />
            <div
              className={`${
                questions[1] === true &&
                questions[2] === true &&
                (questions[3] === false || questions[3] === null)
                  ? "fadeIn500"
                  : "invisible"
              } mt-8 flex flex-col gap-2 bg-primaryBlue/10 p-4 text-sm lg:p-6`}
            >
              <p>
                The more loci you evaluate, the easier it will be to distinguish
                the proportion of matches (IBS) consistent with related vs.
                unrelated parasites. Similarly, the more diverse the loci, the
                less likely there will be matches occurring by chance, so IBS
                will more closely reflect IBD
              </p>

              <p>
                Increasing both the number and diversity of loci will give you
                the greatest power. Loci with higher diversity are particularly
                useful when you have polyclonal infections, which you know can
                be common, so you decide to go this route.
              </p>
              <p>
                You know from an online course about malaria genomics that
                microhaplotypes have more diversity than SNPs and can be easily
                genotyped with targeted sequencing, so you direct your lab to
                redo the sequencing using 12 microhaplotypes instead of 12 SNPs.
              </p>
            </div>
          </div>
          // <div>
          //   <h3>
          //     How might you increase your ability to distinguish related from
          //     unrelated parasites? Choose all that apply.
          //   </h3>
          //   <div className="flex flex-col items-start gap-4">
          //     <div className="mt-4 flex gap-2">
          //       <input
          //         id="kc-q1"
          //         onChange={(e) => {
          //           if (!completion[phase]) {
          //             setQuestions({ ...questions, 1: !questions[1] });
          //           }
          //         }}
          //         type="checkbox"
          //         className="checkbox h-4 w-4 accent-primaryBlue [--chkbg:#14828C]"
          //         checked={questions[1]}
          //       />
          //       <label htmlFor="kc-q1" className="text-sm">
          //         Increase the number of loci that you genotype, e.g. from 12 to
          //         100
          //       </label>
          //     </div>
          //     <div className="flex gap-2 ">
          //       <input
          //         id="kc-q2"
          //         onChange={(e) => {
          //           if (!completion[phase]) {
          //             setQuestions({ ...questions, 2: !questions[2] });
          //           }
          //         }}
          //         type="checkbox"
          //         className="checkbox h-4 w-4 accent-primaryBlue [--chkbg:#14828C]"
          //         checked={questions[2]}
          //       />
          //       <label htmlFor="kc-q2" className="text-sm">
          //         Increase the diversity of loci that you genotype, e.g. by
          //         using microhaplotypes instead of SNPs
          //       </label>
          //     </div>
          //     <div className="flex gap-2 ">
          //       <input
          //         disabled={completion[20]}
          //         id="kc-q3"
          //         onChange={(e) => {
          //           if (!completion[phase]) {
          //             setQuestions({ ...questions, 3: !questions[3] });
          //           }
          //         }}
          //         type="checkbox"
          //         className={`checkbox h-4 w-4 accent-microRed [--chkbg:#E61048]`}
          //         checked={questions[3]}
          //       />
          //       <label
          //         htmlFor="kc-q3"
          //         className={`text-sm  ${completion[20] ? "text-gray-500" : ""}`}
          //       >
          //         Look at them under a microscope and try to distinguish them
          //         based on how they look
          //       </label>
          //     </div>
          //   </div>
          //   {phase === 21 && (
          //     <div className="fadeIn500 mt-8 bg-primaryBlue/10 p-8 text-sm">
          //       <p>
          //         Correct: The more loci you evaluate, the easier it will be to
          //         distinguish the proportion of matches (IBS) consistent with
          //         related vs. unrelated parasites. Similarly, the more diverse
          //         the loci, the less likely there will be matches occurring by
          //         chance, so IBS will more closely reflect IBD.
          //       </p>
          //     </div>
          //   )}
          // </div>
        )}
      </div>
    </StandardLayout>
  );

  return (
    <div className="flex flex-col flex-wrap justify-between gap-8">
      <table className="table w-full max-w-[500px] text-center">
        <thead>
          <tr className=" text-sm">
            <th>Comparisons where IBD = 0</th>
            <th>IBS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-[500px]">
              <SNPComparator activeCombo={[1, 2]} />
            </td>
            <td>{(x * 100).toFixed(1)}%</td>
          </tr>
          <tr>
            <td className="w-[500px]">
              <SNPComparator activeCombo={[1, 3]} />
            </td>
            <td>{(y * 100).toFixed(1)}%</td>
          </tr>
          <tr>
            <td className="w-[500px]">
              <SNPComparator activeCombo={[2, 3]} />
            </td>
            <td>{(z * 100).toFixed(1)}%</td>
          </tr>
        </tbody>
      </table>
      <table className="table w-full max-w-[500px] text-center">
        <thead>
          <tr className=" text-sm">
            <th>Comparisons where IBD = 1/2</th>
            <th>IBS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-[500px]">
              <SNPComparator activeCombo={[1, 4]} />
            </td>
            <td>{(xy * 100).toFixed(1)}%</td>
          </tr>
          <tr>
            <td className="w-[500px]">
              <SNPComparator activeCombo={[2, 4]} />
            </td>
            <td>{(yz * 100).toFixed(1)}%</td>
          </tr>
        </tbody>
      </table>
      <table className="table w-full max-w-[500px] text-center">
        <thead>
          <tr className=" text-sm">
            <th>Comparisons where IBD = 0</th>
            <th>IBS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-[500px]">
              <SNPComparator activeCombo={[3, 3]} />
            </td>
            <td>100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
