import StandardLayout from "@/components/Interactives/Shared/misc/StandardLayout";
import SNPComparator from "../Comparators/SNPs/SNPComparator";
import MicrohaplotypeComparator from "../Comparators/MHPs/MicrohaplotypeComparators";
import {
  pairwiseCombosMHPsAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import Image from "next/image";
import FormHeader from "@/components/Interactives/Shared/misc/FormHeader";
import { useEffect } from "react";
import ImageContainer from "@/components/Interactives/Shared/misc/ImageContainer";

export default function MHPSlidoPolls() {
  const pairwiseCombos = useAtomValue(pairwiseCombosMHPsAtom);
  const phase = useAtomValue(phaseAtom);

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
        <iframe
          id="slido-iframe"
          src="https://app.sli.do/event/dMvSri9uZuLjfxXNeS3m2o/embed/polls/576e9f53-e2ef-4520-8494-86c7ec19bcb4"
          className={
            phase !== 26 ? "hidden" : `h-[400px] w-full [&>*]:overflow-hidden`
          }
        ></iframe>
        {phase === 27 && (
          <div className="fadeIn500 mt-8  text-sm ">
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
        )}
      </div>
    </StandardLayout>
  );
}
