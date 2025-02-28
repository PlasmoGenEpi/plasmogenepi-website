import { ReactElement } from "react";
import { sections } from "../2.6/pages/sections";

export const partTwoPrompts: {
  [key: number]: {
    title: ReactElement;
    instructions: ReactElement;
  };
} = {
  0: {
    title: <h5>{sections[2].title}</h5>,
    instructions: (
      <div className="flex flex-col gap-4">
        <p>
          Now that you have validated your lab’s genotyping data, you are ready
          to test the samples from your malaria indicator survey!
        </p>
        <p>
          These samples are collected from across your country and therefore
          should be broadly representative of what is going on. In this step of
          the activity, you will analyze 10 genotyped infections so you can
          finish this activity in a reasonable amount of time, but we will
          assume that they are representative of your full sample which is much
          larger.
        </p>
        <p>
          You will need to estimate the MOI for each one, based on your
          experience analyzing data from controls. Then you will calculate the
          mean MOI and interpret your results to determine if your vector
          control interventions are working.
        </p>
        <p>Good luck!</p>
      </div>
    ),
  },
  1: {
    title: <h5>{sections[2].subcomponents[1].title}</h5>,
    instructions: (
      <div>
        <p>
          View the genotype for each field samples from SNPs. Estimate the MOI
          for each infection and enter it into the table. When you enter your
          estimate of the MOI for each infection, the results will display in a
          histogram below.
        </p>
      </div>
    ),
  },
  2: {
    title: <h5>{sections[2].subcomponents[2].title}</h5>,
    instructions: (
      <div>
        <p>
          The average MOI from your estimates (adding up your 10 estimates of
          MOI and dividing by 10) is shown below.
        </p>
      </div>
    ),
  },
  3: {
    title: <h5>{sections[2].subcomponents[3].title}</h5>,
    instructions: (
      <div className="flex flex-col gap-4">
        <p>
          Before you continue to Step 3, let's take a moment to think about the
          relationship between MOI and the impact of your vector control
          interventions.
        </p>
        <p>
          Recall from the beginning of the activity that have DBS stored from a
          recent malaria indicator survey and historic data showing average MOI
          was 2.5 before the intervention.
        </p>
      </div>
    ),
  },
};
