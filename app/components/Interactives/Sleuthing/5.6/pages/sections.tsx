import {
  partEightCompletionAtom,
  partSevenCompletionAtom,
  partSixCompletionAtom,
} from "@/data/Interactives/interactiveStore";
import { partZeroCompletionAtom } from "../../PartZero/PartZero";
import { stepSixCompletionAtom } from "../../StepSix/StepSix";
import { atomWithStorage } from "jotai/utils";
import { s2p0CompletionAtom } from "@/app/components/Interactives/Shared/ControlPanel/InteractiveControlPanel2";
import { useEffect } from "react";

// export default function Sections() {}

export const sleuthingPartTwoIntroAtom = atomWithStorage(
  "sleuthingPartTwoIntroAtom",
  {
    0: false,
    1: false,
    2: false,
    3: false,
  },
);

export const sections2 = [
  {
    title: "Introduction",
    fr: "",
    pt: "",
    id: 1,
    sectionId: 0,
    completionAtom: s2p0CompletionAtom,
    subcomponents: [
      {
        title: "Introduction",
        fr: "Contexte",
        pt: "",
        id: 2,
        view: 0,
        phase: 0,
        completionKey: 0,
        requiresKey: null,
      },
      {
        title: "Case Study Background",
        fr: "Étude de cas",
        pt: "",
        id: 3,
        view: 0,
        phase: 1,
        completionKey: 1,
        requiresKey: 0,
      },
      {
        title: "Your Goal",
        fr: "Votre objectif",
        pt: "",
        id: 4,
        view: 0,
        phase: 2,
        completionKey: 2,
        requiresKey: 1,
      },
      {
        title: "Instructions",
        fr: "Les instructions",
        pt: "",
        id: 5,
        view: 0,
        phase: 3,
        completionKey: 3,
        requiresKey: 2,
      },
    ],
  },
  {
    title:
      "Step 1 Genotype laboratory clones, estimate their relatedness by calculating IBS, and compare this to what you know about IBD.",
    fr: "Étape 1. Génotyper les clones de laboratoire, estimer leur parenté en calculant l'IBS, et comparer avec ce que vous savez sur les MICI",
    pt: "",
    sectionId: 1,
    id: 6,
    completionAtom: partSixCompletionAtom,
    requiresAtom: sleuthingPartTwoIntroAtom,
    subcomponents: [
      {
        title: "Background",
        fr: "Contexte",
        pt: "",
        id: 7,
        completionKey: 0,
        requiresKey: null,
        phase: 0,
      },
      {
        title: "1.1 Genotyping with SNPs",
        fr: "1.1 Génotypage à l'aide de SNP",
        pt: "",
        id: 8,
        completionKey: 1,
        requiresKey: 0,
        phase: 1,
        subcomponents: [
          {
            title: "1.1.1 Genotype 3 unrelated laboratory clones with SNPs",
            fr: "1.1.1. Clones de laboratoire non apparentés du génotype 3 avec SNP",
            pt: "",
            id: 9,
            completionKey: 2,
            requiresKey: 1,
            phase: 2,
          },
          {
            title:
              "1.1.2 Predict what you will observe about IBS/IBD in pairwise comparisons",
            fr: "1.1.2. Prédire ce que vous observerez sur le SII/la MII dans les comparaisons par paires",
            pt: "",
            id: 10,
            completionKey: 3,
            requiresKey: 2,
            phase: 3,
          },
          {
            title: "1.1.3 Genotype and compare pairs of related clones",
            fr: "1.1.3. Génotypage et comparaison de paires de clones non apparentés",
            pt: "",
            id: 11,
            completionKey: 4,
            requiresKey: 3,
            phase: 4,
          },
          {
            title: "1.1.4 Observe all three IBS estimates together",
            fr: "1.1.4. Observer les trois estimations de l'IBS ensemble",
            pt: "",
            id: 12,
            completionKey: 5,
            requiresKey: 4,
            phase: 5,
          },
          {
            title: "1.1.5 Knowledge Check",
            fr: "1.1.5. Contrôle des connaissances: Distinguer les parasites apparentés des parasites non apparentés à l'aide de l'IBS",
            pt: "",
            id: 13,
            completionKey: 6,
            requiresKey: 5,
            phase: 6,
          },
          {
            title: "1.1.6 Generate laboratory clone for 1 hybrid strain",
            fr: "1.1.6. Générer un clone de laboratoire pour une souche hybride",
            pt: "",
            id: 14,
            completionKey: 7,
            requiresKey: 6,
            phase: 7,
          },
          {
            title:
              "1.1.7 Genotype and compare hybrid clone to first three clones",
            fr: "1.1.7. Génotyper et comparer le clone hybride aux trois premiers clones",
            pt: "",
            id: 15,
            completionKey: 8,
            requiresKey: 7,
            phase: 8,
          },
          {
            title: "1.1.8 Knowledge Check",
            fr: "1.1.8. Contrôle des connaissances: Distinguer les parasites apparentés des parasites non apparentés à l'aide de l'IBS",
            pt: "",
            id: 16,
            completionKey: 9,
            requiresKey: 8,
            phase: 9,
          },
        ],
      },
      {
        title: "1.2 Genotyping with Microhaplotypes",
        fr: "1.2 Génotypage avec les microhaplotypes",
        pt: "",
        id: 17,
        completionKey: 1,
        requiresKey: 0,
        phase: 1,
        subcomponents: [
          {
            title:
              "1.2.1 Genotype 3 unrelated laboratory clones with microhaplotypes",
            fr: "1.2.1. Générer des clones de laboratoire pour 3 souches non apparentées avec des microhaplotypes",
            pt: "",
            id: 18,
            completionKey: 2,
            requiresKey: 1,
            phase: 2,
          },
          {
            title:
              "1.2.2 Predict what you will observe about IBS/IBD in pairwise comparisons",
            fr: "1.2.2. Prédire ce que vous observerez sur le SII/la MII dans les comparaisons par paires",
            pt: "",
            id: 19,
            completionKey: 3,
            requiresKey: 2,
            phase: 3,
          },
          {
            title: "1.2.3 Genotype and compare pairs of related clones",
            fr: "1.2.3. Génotypage et comparaison de paires de clones non apparentés",
            pt: "",
            id: 20,
            completionKey: 4,
            requiresKey: 3,
            phase: 4,
          },
          {
            title: "1.2.4 Observe all three IBS estimates together",
            fr: "1.2.4. Observer les trois estimations de l'IBS ensemble",
            pt: "",
            id: 21,
            completionKey: 5,
            requiresKey: 4,
            phase: 5,
          },
          {
            title: "1.2.5 Generate laboratory clone for 1 hybrid strain",
            fr: "1.2.5. Générer un clone de laboratoire pour une souche hybride",
            pt: "",
            id: 22,
            completionKey: 6,
            requiresKey: 5,
            phase: 6,
          },
          {
            title:
              "1.2.6 Genotype and compare hybrid clone to first three clones",

            fr: "1.2.6. Génotyper et comparer le clone hybride aux trois premiers clones",
            pt: "",
            id: 23,
            completionKey: 7,
            requiresKey: 6,
            phase: 7,
          },
          {
            title: "1.2.7 Knowledge Check",
            fr: "1.2.7. Contrôle des connaissances : Distinguer les parasites apparentés des parasites non apparentés à l'aide de l'IBS",
            pt: "",
            id: 24,
            completionKey: 8,
            requiresKey: 7,
            phase: 8,
          },
          // {
          //   title: "1.2.8 Knowledge Check",
          //   completionKey: 9,
          //   requiresKey: 8,
          //   phase: 9,
          // },
        ],
      },
    ],
  },
  {
    title:
      "Step 2 Evaluate genotypes of polyclonal positive controls created from combinations of the laboratory clones, since your cases may also be polyclonal. You will then compare these controls using IBS and IBD",
    fr: "Étape 2. Évaluer les génotypes des contrôles positifs polyclonaux créés à partir de combinaisons de clones de laboratoire et les comparer à l'aide de l'IBS et de l'IBD",
    pt: "",
    id: 25,
    sectionId: 2,
    completionAtom: partSevenCompletionAtom,
    requiresAtom: partSixCompletionAtom,
    subcomponents: [
      {
        title: "2.1 Introduction",
        fr: "2.1 Introduction",
        pt: "",
        id: 26,
        completionKey: 1,
        requiresKey: null,
        phase: 1,
        subcomponents: [
          {
            title: "2.1.1 Case Study Recap",
            fr: "2.1.1 Récapitulation de l'étude de cas",
            pt: "",
            id: 27,
            completionKey: 2,
            requiresKey: 1,
            phase: 0,
          },
          {
            title: "2.1.2 View your positive controls",
            fr: "2.1.2. Visualisez vos contrôles positifs",
            pt: "",
            id: 28,
            completionKey: 2,
            requiresKey: 1,
            phase: 1,
          },
          {
            title: "2.1.3 View the genotype of your positive controls",
            fr: "2.1.3. Afficher les génotypes de vos contrôles positifs polyclonaux",
            pt: "",
            id: 29,
            completionKey: 2,
            requiresKey: 1,
            phase: 2,
          },
        ],
      },
      {
        title: "2.2 Compare polyclonal controls to unrelated lab clones",
        fr: "2.2. Comparer les contrôles polyclonaux aux clones de laboratoire non apparentés",
        pt: "",
        id: 30,
        completionKey: 1,
        requiresKey: null,
        phase: 1,
        subcomponents: [
          {
            title: "2.2.1 Compare polyclonal control with lab clone 3",
            fr: "2.2.1. Vérifier la concordance des allèles à chaque locus entre le contrôle polyclonal 1:2 et le clone de laboratoire 3 (non apparenté)",
            pt: "",
            id: 31,
            completionKey: 2,
            requiresKey: 1,
            phase: 0,
          },
          // {
          //   title: "2.2.2 Calculate IBS & IBD",
          //   completionKey: 2,
          //   requiresKey: 1,
          //   phase: 1,
          // },
          {
            title: "2.2.2 Compare polyclonal control with lab clone 1",
            fr: "2.2.2. Vérifier la concordance des allèles à chaque locus entre le contrôle polyclonal 2:3 et le clone de laboratoire 1 (non apparenté)",
            pt: "",
            id: 32,

            completionKey: 2,
            requiresKey: 1,
            phase: 2,
          },
          // {
          //   title: "2.2.4 Calculate IBS & IBD",
          //   completionKey: 2,
          //   requiresKey: 1,
          //   phase: 1,
          // },
          {
            title: "2.2.3 Knowledge Check",
            fr: "2.2.3. Questions de contrôle des connaissances lorsque l'IBD est égal à 0",
            pt: "",
            id: 33,

            completionKey: 2,
            requiresKey: 1,
            phase: 1,
          },
        ],
      },
      {
        title: "2.3 Compare polyclonal controls to related lab clones",
        fr: "2.3. Comparer le contrôle polyclonal aux clones de laboratoire apparentés",
        pt: "",
        id: 34,

        completionKey: 1,
        requiresKey: null,
        phase: 1,
        subcomponents: [
          {
            title:
              "2.3.1 Check matching alleles at each locus between polyclonal control and lab clone 1",
            fr: "2.3.1. Vérifier la concordance des allèles à chaque locus entre le contrôle polyclonal 1:2 et le clone de laboratoire 1 (connexe)",
            pt: "",
            id: 35,

            completionKey: 2,
            requiresKey: 1,
            phase: 0,
          },
          {
            title: "2.3.2 Making the connection",
            fr: "2.3.2. Établissement de la connexion",
            pt: "",
            id: 36,

            completionKey: 2,
            requiresKey: 1,
            phase: 2,
          },
          {
            title:
              "2.3.3 Check matching alleles at each locus between polyclonal control and lab clone 4",
            fr: "2.3.3. Vérifier la concordance des allèles à chaque locus entre le contrôle polyclonal et le clone de laboratoire 4 (connexe)",
            pt: "",
            id: 37,

            completionKey: 2,
            requiresKey: 1,
            phase: 2,
          },
          {
            title: "2.3.4 Conclusions",
            fr: "2.3.4. Étape 2 Résumé",
            pt: "",
            id: 38,

            completionKey: 2,
            requiresKey: 1,
            phase: 2,
          },
        ],
      },
      {
        title: "Summary",
        fr: "Résumé",
        pt: "",
        id: 39,
        completionKey: 2,
        requiresKey: 1,
        phase: 2,
      },
    ],
  },
  {
    title:
      "Step 3 Genotype your cases from the village and school, assess their genetic relatedness, and lead your program to the right set of next steps",
    fr: "Étape 3. Génotypez vos cas du village et de l'école, évaluez leur parenté génétique et orientez votre programme vers les interventions correctes.",
    pt: "",
    id: 26,
    sectionId: 3,
    completionAtom: partSevenCompletionAtom,
    requiresAtom: partSixCompletionAtom,
    subcomponents: [
      // {title: "Scenario 1 - Boarding School",
      //   id: 26,
      //   sectionId: 3,
      //   completionAtom: partSevenCompletionAtom,
      //   requiresAtom: partSixCompletionAtom
      // },
      {
        title: "Scenario 1 - Boarding School",
        fr: "3.1. Foyer potentiel à l'internat",
        pt: "",
        id: 26,
        sectionId: 3,
        completionAtom: partSevenCompletionAtom,
        requiresAtom: partSixCompletionAtom,
        subcomponents: [
          {
            title: "Background",
            fr: "",
            pt: "",
            parentSection: "Scenario 1",
          },
          {
            title: "Estimating MOI",
            fr: "",
            pt: "",
            parentSection: "Scenario 1",
          },
          {
            title: "Comparing genotypes",
            fr: "",
            pt: "",
            parentSection: "Scenario 1",
          },
          {
            title: "Knowledge Check",
            fr: "",
            pt: "",
            parentSection: "Scenario 1",
          },
          {
            title: "Actual infections",
            fr: "",
            pt: "",
            parentSection: "Scenario 1",
          },
        ],
      },
      {
        title: "Scenario 2 - Village Outbreak",
        fr: "",
        pt: "",
        id: 26,
        sectionId: 3,
        completionAtom: partSevenCompletionAtom,
        requiresAtom: partSixCompletionAtom,
        subcomponents: [
          {
            title: "Starting your investigation ",
            fr: "",
            pt: "",
          },
          {
            title: "Estimating MOI ",
            fr: "",
            pt: "",
          },
          {
            title: "Comparing genotypes ",
            fr: "",
            pt: "",
          },
          {
            title: "Knowledge Check ",
            fr: "",
            pt: "",
          },
          {
            title: "Transmission History ",
            fr: "",
            pt: "",
          },
          // {
          //   title: "Village Outbreak ",
          // },
        ],
      },
    ],
  },
  // {
  //   title: "Step 3",
  //   id: 25,
  //   sectionId: 2,
  //   completionAtom: partEightCompletionAtom,
  //   requiresAtom: partSevenCompletionAtom,
  //   subcomponents: [
  //     {
  //       title: "2.1 Introduction",
  //       id: 26,
  //       completionKey: 1,
  //       requiresKey: null,
  //       phase: 1,
  //       subcomponents: [
  //         {
  //           title: "2.1.1 Case Study Recap",
  //           id: 27,
  //           completionKey: 2,
  //           requiresKey: 1,
  //           phase: 0,
  //         },
  //         {
  //           title: "2.1.2 View your positive controls",
  //           id: 28,
  //           completionKey: 2,
  //           requiresKey: 1,
  //           phase: 1,
  //         },
  //         {
  //           title: "2.1.3 View the genotype of your positive controls",
  //           id: 29,
  //           completionKey: 2,
  //           requiresKey: 1,
  //           phase: 2,
  //         },
  //       ],
  //     },
  //     {
  //       title: "2.2 Compare polyclonal controls to unrelated lab clones",
  //       id: 30,
  //       completionKey: 1,
  //       requiresKey: null,
  //       phase: 1,
  //       subcomponents: [
  //         {
  //           title: "2.2.1 Compare polyclonal control with lab clone 3",
  //           id: 31,
  //           completionKey: 2,
  //           requiresKey: 1,
  //           phase: 0,
  //         },
  //         // {
  //         //   title: "2.2.2 Calculate IBS & IBD",
  //         //   completionKey: 2,
  //         //   requiresKey: 1,
  //         //   phase: 1,
  //         // },
  //         {
  //           title: "2.2.2 Compare polyclonal control with lab clone 1",
  //           id: 32,

  //           completionKey: 2,
  //           requiresKey: 1,
  //           phase: 2,
  //         },
  //         // {
  //         //   title: "2.2.4 Calculate IBS & IBD",
  //         //   completionKey: 2,
  //         //   requiresKey: 1,
  //         //   phase: 1,
  //         // },
  //         {
  //           title: "2.2.3 Knowledge Check",
  //           id: 33,

  //           completionKey: 2,
  //           requiresKey: 1,
  //           phase: 1,
  //         },
  //       ],
  //     },
  //     {
  //       title: "2.3 Compare polyclonal controls to related lab clones",
  //       id: 34,

  //       completionKey: 1,
  //       requiresKey: null,
  //       phase: 1,
  //       subcomponents: [
  //         {
  //           title:
  //             "2.3.1 Check matching alleles at each locus between polyclonal control and lab clone 1",
  //           id: 35,

  //           completionKey: 2,
  //           requiresKey: 1,
  //           phase: 0,
  //         },
  //         {
  //           title: "2.3.2 Making the connection",
  //           id: 36,

  //           completionKey: 2,
  //           requiresKey: 1,
  //           phase: 2,
  //         },
  //         {
  //           title:
  //             "2.3.3 Check matching alleles at each locus between polyclonal control and lab clone 4",
  //           id: 37,

  //           completionKey: 2,
  //           requiresKey: 1,
  //           phase: 2,
  //         },
  //         {
  //           title: "2.3.4 Conclusions",
  //           id: 38,

  //           completionKey: 2,
  //           requiresKey: 1,
  //           phase: 2,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Summary",
  //       id: 39,
  //       completionKey: 2,
  //       requiresKey: 1,
  //       phase: 2,
  //     },
  //   ],
  // },
];

// export const sections = [
// {
//   title: "Introduction",
//   sectionId: 0,
//   completionAtom: partZeroCompletionAtom,
//   subcomponents: [
//     {
//       title: "Background",
//       view: 0,
//       phase: 0,
//       completionKey: 0,
//       requiresKey: null,
//     },
//     {
//       title: "Goal",
//       view: 0,
//       phase: 1,
//       completionKey: 1,
//       requiresKey: 1,
//     },
//     {
//       title: "Instructions",
//       view: 0,
//       phase: 2,
//       completionKey: 2,
//       requiresKey: 2,
//     },
//   ],
// },
// {
//   title: "Step 1: Make Positive Controls from SNPs When You Know the MOI",
//   sectionId: 1,
//   completionAtom: partOneCompletionAtom,
//   requiresAtom: partZeroCompletionAtom,
//   subcomponents: [
//     {
//       title: "Background",
//       completionKey: 0,
//       requiresKey: null,
//       phase: 0,
//     },
//     {
//       title: "1.1 Make laboratory clones with SNPs",
//       completionKey: 1,
//       requiresKey: 0,
//       phase: 1,
//     },
//     {
//       title: "1.2 Make positive controls with SNPs",
//       completionKey: 2,
//       requiresKey: 1,
//       phase: 2,
//     },
//     {
//       title: "1.3 Genotype your positive controls",
//       completionKey: 3,
//       requiresKey: 2,
//       phase: 3,
//     },
//     {
//       title: "1.4 Counting Alleles",
//       completionKey: 4,
//       requiresKey: 3,
//       phase: 4,
//     },
//     {
//       title: "1.5 Knowledge Check",
//       completionKey: 5,
//       requiresKey: 4,
//       phase: 5,
//     },
//   ],
// },
//   {
//     title:
//       "Step 2: Analyze Results from Your Field Samples Using SNPs to Estimate the Unknown MOI in Your Population. ",
//     sectionId: 2,
//     completionAtom: partTwoCompletionAtom,
//     requiresAtom: partOneCompletionAtom,
//     subcomponents: [
//       {
//         title: "Background",
//         completionKey: 0,
//         requiresKey: null,
//         phase: 0,
//       },
//       {
//         title: "2.1 Estimate MOI for each of the 10 field samples",
//         phase: 1,
//         completionKey: 1,
//         requiresKey: 0,
//       },
//       {
//         title: "2.2 Calculate average MOI",
//         phase: 2,
//         completionKey: 2,
//         requiresKey: 1,
//       },
//       {
//         title: "2.3 Knowledge Check",
//         phase: 3,
//         completionKey: 3,
//         requiresKey: 2,
//       },
//     ],
//   },
//   {
//     title:
//       "Step 3: Make Positive Controls from Microhaplotypes When You Know the MOI",
//     sectionId: 3,
//     completionAtom: partThreeCompletionAtom,
//     requiresAtom: partTwoCompletionAtom,

//     subcomponents: [
//       {
//         title: "Background",
//         requiresKey: null,
//         completionKey: 0,
//         phase: 0,
//       },
//       {
//         title: "3.1 Analyze your laboratory clones using microhaplotypes",
//         requiresKey: 0,
//         completionKey: 1,
//         phase: 1,
//       },
//       {
//         title: "3.2 Make positive controls with your laboratory clones",
//         requiresKey: 1,
//         completionKey: 2,
//         phase: 2,
//       },
//       {
//         title: "3.3 Genotype your laboratory clones using microhaplotypes",
//         requiresKey: 2,
//         completionKey: 3,
//         phase: 3,
//       },
//       {
//         title: "3.4 Counting Alleles",
//         requiresKey: 3,
//         completionKey: 4,
//         phase: 4,
//       },
//       {
//         title: "3.5 Knowledge Check",
//         requiresKey: 4,
//         completionKey: 5,
//         phase: 5,
//       },
//     ],
//   },
//   {
//     title:
//       "Step 4: Analyze Results From Your Field Samples Using Microhaplotypes to Estimate the Unknown MOI",
//     completionAtom: partFourCompletionAtom,
//     requiresAtom: partThreeCompletionAtom,
//     sectionId: 4,

//     subcomponents: [
//       {
//         title: "Background",
//         phase: 0,
//         requiresKey: null,
//         completionKey: 0,
//       },
//       {
//         title: "4.1 Estimate MOI for each of the 10 field samples",
//         phase: 1,
//         requiresKey: 0,
//         completionKey: 1,
//       },
//       {
//         title: "4.2 Calculate average MOI",
//         phase: 2,
//         requiresKey: 1,
//         completionKey: 2,
//       },
//     ],
//   },
//   {
//     title:
//       "Step 5: Compare Estimates of MOI from SNPs to Estimates of MOI from Microhaplotypes",
//     completionAtom: partFiveCompletionAtom,
//     requiresAtom: partFourCompletionAtom,
//     sectionId: 5,

//     subcomponents: [
//       {
//         title: "Background",
//         phase: 0,
//         requiresKey: null,
//         completionKey: 0,
//       },
//       {
//         title: "5.1 Compare your estimates of MOI from SNPs to Microhaplotypes",
//         phase: 1,
//         requiresKey: 0,
//         completionKey: 1,
//       },
//       {
//         title: "5.2 Compare your estimates with the true MOI",
//         phase: 2,
//         requiresKey: 1,
//         completionKey: 2,
//       },
//     ],
//   },
//   {
//     title: "Step 6: Make Your Recommendation",
//     completionAtom: stepSixCompletionAtom,
//     requiresAtom: partFiveCompletionAtom,
//     sectionId: 6,

//     subcomponents: [
//       {
//         title: "Interpreting Results",
//         phase: 0,
//         requiresKey: null,
//         completionKey: 0,
//       },
//     ],
//   },
//   {
//     title: "Summary",
//     completionAtom: null,
//     requiresAtom: stepSixCompletionAtom,
//     sectionId: 7,

//     subcomponents: [
//       {
//         title: "Interpreting Results",
//         phase: 0,
//         requiresKey: null,
//         completionKey: 0,
//       },
//     ],
//   },
//   // {
//   //   title: "Step 6 - Make Your Recommendation",
//   //   subcomponents: [],
//   // },
// ];
