import {
  partFiveCompletionAtom,
  partFourCompletionAtom,
  partOneCompletionAtom,
  partSixCompletionAtom,
  partThreeCompletionAtom,
  partTwoCompletionAtom,
} from "@/data/Interactives/interactiveStore";
import { partZeroCompletionAtom } from "../../PartZero/PartZero";
import { stepSixCompletionAtom } from "../../StepSix/StepSix";

// export default function Sections() {}

export const sections = [
  {
    title: "Introduction",
    sectionId: 0,
    requiresAtom: null,
    completionAtom: partZeroCompletionAtom,
    subcomponents: [
      {
        title: "Background",
        view: 0,
        phase: 0,
        completionKey: 0,
        requiresKey: null,
      },
      {
        title: "Goal",
        view: 0,
        phase: 1,
        completionKey: 1,
        requiresKey: 0,
      },
      {
        title: "Instructions",
        view: 0,
        phase: 2,
        completionKey: 2,
        requiresKey: 1,
      },
    ],
  },
  {
    title: "Step 1. Make Positive Controls from SNPs When You Know the MOI",
    sectionId: 1,
    completionAtom: partOneCompletionAtom,
    requiresAtom: partZeroCompletionAtom,
    subcomponents: [
      {
        title: "Background",
        completionKey: 0,
        requiresKey: null,
        phase: 0,
      },
      {
        title: "1.1. Make Laboratory Clones with SNPs",
        completionKey: 1,
        requiresKey: 0,
        phase: 1,
      },
      {
        title: "1.2. Make Positive Controls with SNPs",
        completionKey: 2,
        requiresKey: 1,
        phase: 2,
      },
      {
        title: "1.3. Genotype Your Positive Controls",
        completionKey: 3,
        requiresKey: 2,
        phase: 3,
      },
      {
        title: "1.4 Knowledge Check",
        completionKey: 4,
        requiresKey: 3,
        phase: 4,
      },
      {
        title: "1.5 More Knowledge Checks",
        completionKey: 5,
        requiresKey: 4,
        phase: 5,
      },
    ],
  },
  {
    title:
      "Step 2. Analyze Results from Your Field Samples Using SNPs to Estimate the Unknown MOI in Your Population",
    sectionId: 2,
    completionAtom: partTwoCompletionAtom,
    requiresAtom: partOneCompletionAtom,
    subcomponents: [
      {
        title: "Background",
        completionKey: 0,
        requiresKey: null,
        phase: 0,
      },
      {
        title: "2.1. Estimate MOI for Each of the 10 Field Samples",
        phase: 1,
        completionKey: 1,
        requiresKey: 0,
      },
      {
        title: "2.2. Calculate the Average MOI",
        phase: 2,
        completionKey: 2,
        requiresKey: 1,
      },
      {
        title: "2.3. Knowledge Check",
        phase: 3,
        completionKey: 3,
        requiresKey: 2,
      },
    ],
  },
  {
    title:
      "Step 3. Make Positive Controls from Microhaplotypes When You Know the MOI",
    sectionId: 3,
    completionAtom: partThreeCompletionAtom,
    requiresAtom: partTwoCompletionAtom,

    subcomponents: [
      {
        title: "Background",
        requiresKey: null,
        completionKey: 0,
        phase: 0,
      },
      {
        title: "3.1. Analyze Your Laboratory Clones Using Microhaplotypes",
        requiresKey: 0,
        completionKey: 1,
        phase: 1,
      },
      {
        title: "3.2. Make Positive Controls with Your Laboratory Clones",
        requiresKey: 1,
        completionKey: 2,
        phase: 2,
      },
      {
        title: "3.3. Genotype Your Laboratory Clones Using Microhaplotypes",
        requiresKey: 2,
        completionKey: 3,
        phase: 3,
      },
      {
        title: "3.4. Knowledge Check",
        requiresKey: 3,
        completionKey: 4,
        phase: 4,
      },
      {
        title: "3.5 More Knowledge Checks",
        requiresKey: 4,
        completionKey: 5,
        phase: 5,
      },
    ],
  },
  {
    title:
      "Step 4. Analyze Results from Your Field Samples Using Microhaplotypes to Estimate the Unknown MOI",
    completionAtom: partFourCompletionAtom,
    requiresAtom: partThreeCompletionAtom,
    sectionId: 4,

    subcomponents: [
      {
        title: "Background",
        phase: 0,
        requiresKey: null,
        completionKey: 0,
      },
      {
        title: "4.1. Estimate MOI for Each of the 10 Field Samples",
        phase: 1,
        requiresKey: 0,
        completionKey: 1,
      },
      {
        title: "4.2. Calculate the Average MOI",
        phase: 2,
        requiresKey: 1,
        completionKey: 2,
      },
    ],
  },
  {
    title:
      "Step 5. Compare Estimates of MOI from SNPs to Estimates of MOI from Microhaplotypes",
    completionAtom: partFiveCompletionAtom,
    requiresAtom: partFourCompletionAtom,
    sectionId: 5,
    subcomponents: [
      {
        title:
          "5.1. Compare Your Estimates of MOI from SNPs to Microhaplotypes",
        phase: 0,
        requiresKey: null,
        completionKey: 0,
      },
      {
        title: "5.2. Compare Your Estimates with the True MOI",
        phase: 1,
        requiresKey: 0,
        completionKey: 1,
      },
      // {
      //   title: "5.2 Compare your estimates with the true MOI",
      //   phase: 2,
      //   requiresKey: 1,
      //   completionKey: 2,
      // },
    ],
  },
  {
    title: "Step 6. Make Your Recommendations",
    completionAtom: stepSixCompletionAtom,
    requiresAtom: partFiveCompletionAtom,
    sectionId: 6,

    subcomponents: [
      {
        title: "Interpreting Results",
        phase: 0,
        requiresKey: null,
        completionKey: 0,
      },
    ],
  },
  {
    title: "Summary",
    completionAtom: null,
    requiresAtom: stepSixCompletionAtom,
    sectionId: 7,

    subcomponents: [
      {
        title: "Interpreting Results",
        phase: 0,
        requiresKey: null,
        completionKey: 0,
      },
    ],
  },
  // {
  //   title: "Step 6 - Make Your Recommendation",
  //   subcomponents: [],
  // },
];
