import { ReactElement } from "react";

export const partThreePrompts: {
  [key: number]: {
    title: ReactElement;
    instructions: ReactElement;
  };
} = {
  1: {
    title: <h5> 3.1 Make laboratory clones with microhaplotypes</h5>,
    instructions: (
      <div>
        <p>
          Use the 5 laboratory clones from SNPs that you made in 1.1 to make 5
          new laboratory clones &ndash; this time with microhaplotypes. Click
          microhaplotypes in the look-up table on the left to place them on loci
          1-3, 4-6, 7-9, and 10-12 on the right. Selecting a different column
          will change the loci shown in the table.
        </p>
      </div>
    ),
  },
  2: {
    title: <h5>3.2 Make positive controls with your labatory clones</h5>,
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
    title: <h5>3.3 Genotype your labatory clones from microhaplotypes</h5>,
    instructions: (
      <div>
        <p>
          Enter data in the genotype form by clicking each microhaplotype that
          is present at locus 1, 2, 3, and 4. The number of microhaplotypes that
          you enter will depend on how many different microhaplotypes are
          present at each locus.
        </p>
      </div>
    ),
  },
  4: {
    title: <h5> 3.4 Knowledge Check</h5>,
    instructions: (
      <div>
        <p>Answer the following questions.</p>
      </div>
    ),
  },
};
