import { ReactElement } from "react";
import { sections } from "../2.6/pages/sections";

export const partOnePrompts: {
  [key: number]: {
    title: ReactElement;
    instructions: ReactElement;
  };
} = {
  0: {
    title: <h5>{sections[1].title}</h5>,
    instructions: (
      <div className="flex flex-col gap-4">
        <p>
          First up, you will need to make positive control samples from SNPs
          when you know the MOI. Then genotype your positive control samples to
          make sure your assay is working correctly.
        </p>
        <p>Good luck!</p>
      </div>
    ),
  },
  1: {
    title: <h5>{sections[1].subcomponents[1].title}</h5>,
    instructions: (
      <div>
        <p>
          Click each parasite icon 1-5 to make 5 laboratory clones. Each
          laboratory clone will be assigned SNP alleles at 12 loci in the
          genome, randomly choosing the reference allele or alternate allele at
          each position. The reference and alternate alleles for loci 1-12 are
          shown below.
        </p>
      </div>
    ),
  },
  2: {
    title: <h5>{sections[1].subcomponents[2].title}</h5>,
    instructions: (
      <div>
        <p>
          Make six different positive controls using different combinations of
          your laboratory clones. Click on your laboratory clones to move them
          on or off the sample cards on the right. The number of clones you use
          for each positive control will depend on the MOI.
        </p>
      </div>
    ),
  },
  3: {
    title: <h5>{sections[1].subcomponents[3].title}</h5>,
    instructions: (
      <div>
        <p>
          Click the reference allele, the alternate allele or both alleles to
          enter data into the genotype form at each of the 12 loci. Do this for
          each of your positive controls. The alleles you enter will depend on
          which are present at each loci &ndash; one, the other, or both.
        </p>
      </div>
    ),
  },
  4: {
    title: <h5>{sections[1].subcomponents[4].title}</h5>,
    instructions: (
      <div>
        <p>Answer the following questions.</p>
      </div>
    ),
  },
  5: {
    title: <h5>{sections[1].subcomponents[5].title}</h5>,
    instructions: (
      <div>
        <p>
          Before you continue to Step 2, let's take a moment to think about the
          relationship between genotypes and heterozygosity. Complete the
          eight-question quiz below.
        </p>
      </div>
    ),
  },
  6: {
    title: <h5>1.1 Create laboratory clones</h5>,
    instructions: (
      <div>
        <p>
          Click each parasite icon 1-5 to make 5 laboratory clones. Each
          laboratory clone will be assigned SNP alleles at 12 loci in the
          genome, randomly choosing the reference allele or alternate allele at
          each position. The reference and alternate alleles for loci 1-12 are
          shown below.
        </p>
      </div>
    ),
  },
  7: {
    title: <h5>1.1 Make laboratory clones with SNPs</h5>,
    instructions: (
      <div>
        <p>
          Run the simulation by clicking the empty rows in the table to make 5
          laboratory clones. Each laboratory clone is a random sequence of 12
          DNA base letters selected from the reference allele or alternate
          allele at each position.
        </p>
      </div>
    ),
  },
};
