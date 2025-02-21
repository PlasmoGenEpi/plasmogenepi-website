import { ReactElement } from "react";

export const partFourPrompts: {
  [key: number]: {
    title: ReactElement;
    instructions: ReactElement;
  };
} = {
  0: {
    title: (
      <h5>
        Step 4
        {/* Analyze Results From Your Field Samples Using Microhaplotypes to
        Estimate the Unknown MOI */}
      </h5>
    ),
    instructions: (
      <p>
        Now it's time to analyze results from your field samples using
        microhaplotypes to estimate the unknown MOI in your population.
      </p>
    ),
  },
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
          {" "}
          Calculate the average MOI from your estimates (add up your 10
          estimates of MOI and divide by 10). This has been done for you.
        </p>
      </div>
    ),
  },
};
