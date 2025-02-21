import { ReactElement } from "react";

export const partFourPrompts: {
  [key: number]: {
    title: ReactElement;
    instructions: ReactElement;
  };
} = {
  1: {
    title: <h5>4.1 Estimate MOI for each of the 10 field samples</h5>,
    instructions: (
      <p>
        View the genotype for each field samples from microhaplotypes. Estimate
        the MOI for each infection and enter it into the table. When you enter
        your estimate of the MOI for each infection, the results will display in
        a histogram below.
      </p>
    ),
  },
  2: {
    title: <h5> 4.2 Calculate average MOI</h5>,
    instructions: (
      <div>
        <p>
          <p>Calculate the average MOI from your estimates.</p>
        </p>
      </div>
    ),
  },
};
