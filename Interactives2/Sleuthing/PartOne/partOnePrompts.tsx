import { ReactElement } from "react";

export const partOnePrompts: {
  [key: number]: {
    title: ReactElement;
    instructions: ReactElement;
  };
} = {
  1: {
    title: <h5>1.1 Make laboratory clones with SNPs</h5>,
    instructions: (
      <div>
        <p>
          Click each parasite icon 1-5 to make 5 laboratory clones. Each
          laboratory clone is a random sequence of 12 DNA base letters selected
          from the reference allele or alternate allele at each position. The
          reference and alternate alleles are shown below.
        </p>
      </div>
    ),
  },
  2: {
    title: <h5> 1.2 Make positive controls with SNPs</h5>,
    instructions: (
      <div>
        <p>
          Make six positive controls using different combinations of your
          laboratory clones. Click on your laboratory clones to move them on or
          off the sample cards on the right. The number of clones you use for
          each positive control will depend on the MOI.
        </p>
      </div>
    ),
  },
  3: {
    title: <h5> 1.3 Genotype your positive controls</h5>,
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
    title: <h5>1.4 Knowledge Check</h5>,
    instructions: (
      <div>
        <p>Answer the following questions.</p>
      </div>
    ),
  },
  5: {
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
  6: {
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
