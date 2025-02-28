import { ReactElement, ReactNode } from "react";
import { sections } from "../2.6/pages/sections";

export const partFivePrompts: {
  [key: number]: {
    title: ReactElement;
    instructions: ReactElement;
  };
} = {
  0: {
    title: <h5>{sections[5].subcomponents[0].title}</h5>,

    instructions: (
      <p>
        View the table below and take note of any differences that you see
        between your estimates of MOI in SNPs vs. microhaplotypes. Select a row
        in the table to compare your genotypes. Then consider some questions
        below.
      </p>
    ),
  },
  1: {
    title: <h5>{sections[5].subcomponents[1].title}</h5>,
    instructions: (
      <p>
        View your estimates of MOI between SNPs, microhaplotypes, and the true
        MOI value for each infection. Select a row in the table to compare your
        genotypes.
      </p>
    ),
  },
  2: {
    title: <h5>{sections[5].subcomponents[1].title}</h5>,

    instructions: <p></p>,
  },
  3: {
    title: (
      <h5>5.1 Compare your estimates of MOI from SNPs to Microhaplotypes</h5>
    ),
    instructions: (
      <p>
        Share your observations in the poll below, then press next to continue.
      </p>
    ),
  },
  9: {
    title: (
      <h5>5.1 Compare your estimates of MOI from SNPs to Microhaplotypes</h5>
    ),
    instructions: (
      <p>
        Recall that prior to the intervention, you estimated MOI to be 2.5, and
        that even though you only analyzed data from 10 samples in this
        exercise, we are assuming these 10 samples are representative of a much
        larger sample.
      </p>
    ),
  },
  10: {
    title: <h5>5.2 Compare your estimates with the true MOI</h5>,

    instructions: (
      <p>
        View your estimates of MOI between SNPs, microhaplotypes, and the true
        MOI value for each infection. Select a row in the table to compare your
        genotypes.
      </p>
    ),
  },
  11: {
    title: <h5>5.2 Compare your estimates with the true MOI</h5>,
    instructions: (
      <p>
        Look at the distribution of your estimates with SNPs and microhaplotypes
        in the graph below. Which one more closely resembles the true MOI
        infections?
      </p>
    ),
  },
  12: {
    title: <h5>5.2 Compare your estimates with the true MOI</h5>,
    instructions: (
      <p>
        Share your observations in the poll below, then press next to continue.
      </p>
    ),
  },
  13: {
    title: <h5>5.2 Compare your estimates with the true MOI</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Despite implementing a new intervention, there did not seem to be any
          decrease in MOI, which might have been expected with a decrease in
          transmission. In fact, MOI increased from 2.0 to 2.8!
        </p>
        <p>
          With a sufficient sample size, a difference of this magnitude would
          likely have been statistically significant, indicating that
          transmission may have actually increased despite, or potentially
          because of, the change in interventions.
        </p>
        <p>
          This may not surprise those working in malaria control – sometimes
          interventions that are supposed to work based on data from controlled
          settings actually behave differently when implemented in the field.
          Hopefully your investigation and analysis of the data helped identify
          this important result. You are now able to communicate this
          information to others in your program and think about additional
          actions.
        </p>
      </div>
    ),
  },
};
