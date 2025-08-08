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
    title: {
      EN: "Introduction",
      FR: "Introduction",
      PT: "Introdução",
    },
    sectionId: 0,
    requiresAtom: null,
    completionAtom: partZeroCompletionAtom,
    subcomponents: [
      {
        title: {
          EN: "Background",
          FR: "Contexte",
          PT: "Antecedentes",
        },
        // title: "Background",
        view: 0,
        phase: 0,
        completionKey: 0,
        requiresKey: null,
      },
      {
        title: {
          EN: "Goal",
          FR: "Objectif",
          PT: "Objetivo",
        },
        // title: "Goal",
        view: 0,
        phase: 1,
        completionKey: 1,
        requiresKey: 0,
      },
      {
        title: {
          EN: "Instructions",
          FR: "Instructions",
          PT: "Instruções",
        },
        // title: "Instructions",
        view: 0,
        phase: 2,
        completionKey: 2,
        requiresKey: 1,
      },
    ],
  },
  {
    title: {
      EN: "Step 1. Make Positive Controls from SNPs When You Know the MOI",
      FR: "Étape 1. Faire des contrôles positifs à partir de SNP lorsque l'on connaît le MOI",
      PT: "Etapa 1. Criar Controlos Positivos a partir de SNPs quando se conhece o MOI",
    },
    sectionId: 1,
    completionAtom: partOneCompletionAtom,
    requiresAtom: partZeroCompletionAtom,
    subcomponents: [
      {
        title: {
          EN: "Background",
          FR: "Contexte",
          PT: "Contexto",
        },
        instructions: {
          EN: (
            <div className="flex flex-col gap-4">
              <p>
                First up, you will need to make positive control samples from
                SNPs when you know the MOI. Then genotype your positive control
                samples to make sure your assay is working correctly.
              </p>
              <p>Good luck!</p>
            </div>
          ),
        },
        completionKey: 0,
        requiresKey: null,
        phase: 0,
      },
      {
        title: {
          EN: "1.1. Make Laboratory Clones with SNPs",
          FR: "1.1. Créer des clones de laboratoire avec des SNP",
          PT: "1.1. Fazer Clones de Laboratório com SNPs",
        },
        // title: "1.1. Make Laboratory Clones with SNPs",
        completionKey: 1,
        requiresKey: 0,
        phase: 1,
      },
      {
        title: {
          EN: "1.2. Make Positive Controls with SNPs",
          FR: "1.2. Réaliser des contrôles positifs avec des SNP",
          PT: "1.2. Fazer Controlos Positivos com SNPs",
        },
        // title: "1.2. Make Positive Controls with SNPs",
        completionKey: 2,
        requiresKey: 1,
        phase: 2,
      },
      {
        title: {
          EN: "1.3. Genotype Your Positive Controls",
          FR: "1.3. Génotypez vos contrôles positifs",
          PT: "1.3. Genotipagem dos controlos positivos",
        },
        // title: "1.3. Genotype Your Positive Controls",
        completionKey: 3,
        requiresKey: 2,
        phase: 3,
      },
      {
        title: {
          EN: "1.4. Knowledge Check",
          FR: "1.4. Contrôle des connaissances",
          PT: "1.4. Verificação de conhecimentos",
        },
        // title: "1.4. Knowledge Check",
        completionKey: 4,
        requiresKey: 3,
        phase: 4,
      },
      {
        title: {
          EN: "1.5. More Knowledge Checks",
          FR: "1.5 Autres contrôles des connaissances",
          PT: "1.5 Mais verificações de conhecimento",
        },
        // title: "1.5 More Knowledge Checks",
        completionKey: 5,
        requiresKey: 4,
        phase: 5,
      },
    ],
  },
  {
    title: {
      EN: "Step 2. Analyze Results from Your Field Samples Using SNPs to Estimate the Unknown MOI in Your Population",
      FR: "Étape 2. Analyser les résultats de vos échantillons de terrain à l'aide de SNP pour estimer la MOI inconnue dans votre population",
      PT: "Etapa 2. Analisar os resultados das suas amostras de campo utilizando SNPs para estimar o MOI desconhecido na sua população",
    },
    // title:
    //   "Step 2. Analyze Results from Your Field Samples Using SNPs to Estimate the Unknown MOI in Your Population",
    sectionId: 2,
    completionAtom: partTwoCompletionAtom,
    requiresAtom: partOneCompletionAtom,
    subcomponents: [
      {
        title: {
          EN: "Background",
          FR: "Contexte",
          PT: "Contexto",
        },
        // title: "Background",
        completionKey: 0,
        requiresKey: null,
        phase: 0,
      },
      {
        title: {
          EN: "2.1. Estimate MOI for Each of the 10 Field Samples",
          FR: "2.1. Estimer le MOI pour chacun des 10 échantillons de terrain",
          PT: "2.1. Estimar o MOI para cada uma das 10 amostras de campo",
        },
        // title: "2.1. Estimate MOI for Each of the 10 Field Samples",
        phase: 1,
        completionKey: 1,
        requiresKey: 0,
      },
      {
        title: {
          EN: "2.2. Calculate the Average MOI",
          FR: "2.2. Calculer le MOI moyen",
          PT: "2.2. Calcular o MOI médio",
        },
        // title: "2.2. Calculate the Average MOI",
        phase: 2,
        completionKey: 2,
        requiresKey: 1,
      },
      {
        title: {
          EN: "2.3. Knowledge Check",
          FR: "2.3. Contrôle des connaissances",
          PT: "2.3. Verificação de conhecimentos",
        },
        // title: "2.3. Knowledge Check",
        phase: 3,
        completionKey: 3,
        requiresKey: 2,
      },
    ],
  },
  {
    title: {
      EN: "Step 3. Make Positive Controls from Microhaplotypes When You Know the MOI",
      FR: "Étape 3. Faire des clones de laboratoire avec des microhaplotypes",
      PT: "Etapa 3. Criar controlos positivos a partir de microhaplótipos quando se conhece o MOI",
    },
    // title:
    //   "Step 3. Make Positive Controls from Microhaplotypes When You Know the MOI",
    sectionId: 3,
    completionAtom: partThreeCompletionAtom,
    requiresAtom: partTwoCompletionAtom,

    subcomponents: [
      {
        title: {
          EN: "Background",
          FR: "Contexte",
          PT: "Contexto",
        },
        // title: "Background",
        requiresKey: null,
        completionKey: 0,
        phase: 0,
      },
      {
        title: {
          EN: "3.1. Make Laboratory Clones with Microhaplotypes",
          FR: "3.1. Faire des clones de laboratoire avec des microhaplotypes",
          PT: "3.1. Criar clones de laboratório com microhaplótipos",
        },
        // title: "3.1. Analyze Your Laboratory Clones Using Microhaplotypes",
        requiresKey: 0,
        completionKey: 1,
        phase: 1,
      },
      {
        title: {
          EN: "3.2. Make Positive Controls with Microhaplotypes",
          FR: "3.2. Réaliser des contrôles positifs avec des microhaplotypes",
          PT: "3.2. Fazer controlos positivos com microhaplótipos",
        },
        // title: "3.2. Make Positive Controls with Your Laboratory Clones",
        requiresKey: 1,
        completionKey: 2,
        phase: 2,
      },
      {
        title: {
          EN: "3.3. Genotype Your Positive Controls",
          FR: "3.3. Génotypez vos contrôles positifs",
          PT: "3.3. Genotipar os seus controlos positivos",
        },
        // title: "3.3. Genotype Your Laboratory Clones Using Microhaplotypes",
        requiresKey: 2,
        completionKey: 3,
        phase: 3,
      },
      {
        title: {
          EN: "3.4. Knowledge Check",
          FR: "3.4. Contrôle des connaissances",
          PT: "3.4. Verificação de conhecimentos",
        },
        // title: "3.4. Knowledge Check",
        requiresKey: 3,
        completionKey: 4,
        phase: 4,
      },
      {
        title: {
          EN: "3.5. More Knowledge Checks",
          FR: "3.5. Autres contrôles des connaissances",
          PT: "3.5. Mais verificações de conhecimentos",
        },
        // title: "3.5 More Knowledge Checks",
        requiresKey: 4,
        completionKey: 5,
        phase: 5,
      },
    ],
  },
  {
    title: {
      EN: "Step 4. Analyze Results from Your Field Samples Using Microhaplotypes to Estimate the Unknown MOI",
      FR: "Étape 4. Analyser les résultats de vos échantillons de terrain en utilisant les microhaplotypes pour estimer la MOI inconnue dans votre population",
      PT: "Etapa 4. Analisar os resultados das suas amostras de campo utilizando microhaplótipos para estimar o MOI desconhecido na sua população",
    },
    // title:
    //   "Step 4. Analyze Results from Your Field Samples Using Microhaplotypes to Estimate the Unknown MOI",
    completionAtom: partFourCompletionAtom,
    requiresAtom: partThreeCompletionAtom,
    sectionId: 4,

    subcomponents: [
      {
        title: {
          EN: "Background",
          FR: "Contexte",
          PT: "Contexto",
        },
        // title: "Background",
        phase: 0,
        requiresKey: null,
        completionKey: 0,
      },
      {
        title: {
          EN: "4.1. Estimate MOI for Each of the 10 Field Samples",
          FR: "4.1. Estimer le MOI pour chacun des 10 échantillons de terrain",
          PT: "4.1. Estimar o MOI para cada uma das 10 amostras de campo",
        },
        // title: "4.1. Estimate MOI for Each of the 10 Field Samples",
        phase: 1,
        requiresKey: 0,
        completionKey: 1,
      },
      {
        title: {
          EN: "4.2. Calculate the Average MOI",
          FR: "4.2. Calculer le MOI moyen",
          PT: "4.2. Calcular o MOI médio",
        },
        // title: "4.2. Calculate the Average MOI",
        phase: 2,
        requiresKey: 1,
        completionKey: 2,
      },
    ],
  },
  {
    title: {
      EN: "Step 5. Compare Estimates of MOI from SNPs to Estimates of MOI from Microhaplotypes",
      FR: "Étape 5. Comparer les estimations de la MOI à partir des SNP aux estimations de la MOI à partir des microhaplotypes",
      PT: "Etapa 5. Comparar as estimativas de MOI de SNPs com as estimativas de MOI de Microhaplótipos",
    },
    // title:
    //   "Step 5. Compare Estimates of MOI from SNPs to Estimates of MOI from Microhaplotypes",
    completionAtom: partFiveCompletionAtom,
    requiresAtom: partFourCompletionAtom,
    sectionId: 5,
    subcomponents: [
      {
        title: {
          EN: "5.1. Compare Your Estimates of MOI from SNPs to Microhaplotypes",
          FR: "5.1. Comparez vos estimations de MOI à partir de SNP à celles de microhaplotypes",
          PT: "5.1. Compare as suas estimativas de MOI a partir de SNPs e microhaplótipos",
        },
        // title:
        //   "5.1. Compare Your Estimates of MOI from SNPs to Microhaplotypes",
        phase: 0,
        requiresKey: null,
        completionKey: 0,
      },
      {
        title: {
          EN: "5.2. Compare Your Estimates with the True MOI",
          FR: "5.2. Comparez vos estimations avec le MOI réel",
          PT: "5.2. Compare as suas estimativas com o MOI verdadeiro",
        },
        // title: "5.2. Compare Your Estimates with the True MOI",
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
    title: {
      EN: "Step 6. Make Your Recommendations",
      FR: "Étape 6. Formulez vos recommandations",
      PT: "Etapa 6. Fazer as suas recomendações",
    },
    // title: "Step 6. Make Your Recommendations",
    completionAtom: stepSixCompletionAtom,
    requiresAtom: partFiveCompletionAtom,
    sectionId: 6,

    subcomponents: [
      {
        title: {
          EN: "Interpreting Results",
          FR: "Interprétation des résultats",
          PT: "Interpretar os resultados",
        },
        // title: "Interpreting Results",
        phase: 0,
        requiresKey: null,
        completionKey: 0,
      },
    ],
  },
  {
    title: {
      EN: "Summary",
      FR: "Résumé",
      PT: "Resumo",
    },
    // title: "Summary",
    completionAtom: null,
    requiresAtom: stepSixCompletionAtom,
    sectionId: 7,

    subcomponents: [
      {
        title: {
          EN: "Interpreting Results",
          FR: "Interprétation des résultats",
          PT: "Interpretar os resultados",
        },
        // title: "Interpreting Results",
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
