import { phase1Atom } from "@/data/Interactives/interactiveStore";
import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import { useAtom, useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";
import StepOneTeaser from "./PartZeroTeasers/StepOneTeaser";

export const partZeroCompletionAtom = atomWithStorage(
  "partZeroCompletionAtom",
  {
    0: false,
    1: false,
    2: false,
  }
);

export default function PartZero() {
  const [phase1, setPhase1] = useAtom(phase1Atom);
  const completion = useAtomValue(partZeroCompletionAtom);
  return (
    <div>
      {phase1 === 0 ? (
        <InteractivePrompt
          title={<h1>Background</h1>}
          instructions={
            <div className="flex flex-col gap-4">
              <p>
                Estimating the multiplicity of infection (MOI) in a set of
                patient samples can be a valuable tool for assessing the
                effectiveness of malaria control interventions, like bed-nets,
                indoor residual spraying or antimalarial treatments. A high MOI
                generally indicates a higher transmission intensity in the
                community because if people are infected more frequently there
                is a greater change of superinfection. Therefore, effective
                malaria control interventions should reduce the transmission of
                the parasite, leading to a decrease in the MOI over time.
              </p>
              <p>
                In this activity, you return to your role as the Head of
                Surveillance of the National Malaria Control Program of Kambawe.
              </p>
              <p>
                The National Malaria Control Program of Kambawe has been
                implementing an expensive new vector control intervention.
                Routine surveillance data suggest it may be working. But you are
                not convinced of the data's quality.
              </p>
              <p>
                You have dried blood spot (DBS) samples stored from a recent
                malaria indicator survey and a functioning molecular lab. You
                also have historic data showing average MOI in this high
                transmission area was 2.5 before the vector controls
                intervention began.
              </p>
            </div>
          }
          complete={completion[phase1]}
        />
      ) : phase1 === 1 ? (
        <InteractivePrompt
          title={<h1>Goal</h1>}
          instructions={
            <div className="flex flex-col gap-4">
              <p>
                The goal of this activity is to interpret the genotypes of a set
                of samples where the true MOI in your population is unknown.
                Then, you will interpret results to assess whether or not the
                National Malaria Control Program's interventions have been
                effective.
              </p>
            </div>
          }
          complete={completion[phase1]}
        />
      ) : (
        <InteractivePrompt
          title={<h1>Instructions</h1>}
          instructions={
            <div className="flex flex-col gap-0 ">
              <p className="mb-8">
                This activity includes six steps, which are intended to reflect
                the process of using genetic data to estimate MOI in a molecular
                lab:
              </p>
              <ol className="flex list-disc px-4 flex-col gap-4">
                <li>
                  <p>
                    <span className="font-bold">Step 1:</span> Make positive
                    control samples from laboratory clones where you know the
                    MOI. Then genotype your positive control samples to make
                    sure your assay is working correctly.
                  </p>
                  {/* <div className="mt-4">
                    <StepOneTeaser />
                  </div> */}
                </li>
                <li>
                  <p>
                    <span className="font-bold">Step 2:</span> Analyze results
                    from your field samples using SNPs to estimate the MOI in
                    your population.
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">Step 3:</span> Genotype the same
                    positive controls at the same loci, this time analyzing
                    groups of SNPs together as microhaplotypes.
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">Step 4:</span> Analyze results
                    from your field samples using microphaplotypes to estimate
                    the unknown MOI in your population.
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">Step 5:</span> Compare your
                    estimates of MOI from SNPs to your estimates of MOI from
                    microhaplotypes.
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">Step 6:</span> Interpret results
                    and provide feedback to your program about the intervention.
                  </p>
                </li>
              </ol>
            </div>
          }
          complete={completion[phase1]}
        />
      )}
    </div>
  );
}
