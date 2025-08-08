import { useAtom, useAtomValue } from "jotai";
import { resetConfirmOpenAtom } from "../../../ControlPanel/ResetModal";
import { sideBarIsOpenAtom } from "../InteractiveSideBar";
import { InteractiveViewSettings } from "../../InteractiveViewer";
import {
  partEightCompletionAtom,
  partSevenCompletionAtom,
  partSixCompletionAtom,
} from "@/data/Interactives/interactiveStore";
import SideBar4SubComponent from "./SideBar4SubComponent";
import { s2p0CompletionAtom } from "../../../ControlPanel/InteractiveControlPanel2";

export type SideBarSection = {
  sectionTitle: string;
  fr: string;
  pt: string;
  sectionId: number;
  sectionLocked: boolean;
  sectionComplete: boolean;
  subcomponents: {
    title: string;
    fr: string;
    pt: string;
    isActive: (currentView: InteractiveViewSettings) => boolean;
    complete: boolean;
    available: boolean;
    callback: (setCurrentView: any) => void;
    pad?: boolean;
  }[];
};

export default function InteractiveSideBar4({
  dev,
  lang,
}: {
  lang: "EN" | "FR" | "PT";
  dev: boolean;
}) {
  const [isOpen, setIsOpen] = useAtom(sideBarIsOpenAtom);
  const completion6 = useAtomValue(partSixCompletionAtom);
  const completion7 = useAtomValue(partSevenCompletionAtom);
  const completion8 = useAtomValue(partEightCompletionAtom);
  const completion0 = useAtomValue(s2p0CompletionAtom);
  // const [currentView, setCurrentView] = useAtom(currentViewAtom);

  const sections: SideBarSection[] = [
    {
      sectionTitle: "Introduction",
      fr: "Introduction",
      pt: "Introdução",
      sectionId: 0,
      sectionLocked: false,
      sectionComplete: completion0[3],
      subcomponents: [
        {
          title: "Background",
          fr: "Contexte",
          pt: "Antecedentes",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 0 && phase === 0;
          },
          complete: completion0[0],
          available: true,
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 0,
              phase: 0,
            });
          },
        },
        {
          title: "Case Study",
          fr: "Étude de cas",
          pt: "Estudo de caso",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 0 && phase === 1;
          },
          complete: completion0[1],
          available: completion0[0],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 0,
              phase: 1,
            });
          },
        },
        {
          title: "Your Goal",
          fr: "Votre objectif",
          pt: "O seu objetivo",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 0 && phase === 2;
          },
          complete: completion0[2],
          available: completion0[1],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 0,
              phase: 2,
            });
          },
        },
        {
          title: "Instructions",
          fr: "Les instructions",
          pt: "Instruções",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 0 && phase === 3;
          },
          complete: completion0[3],
          available: completion0[2],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 0,
              phase: 3,
            });
          },
        },
      ],
    },
    {
      sectionTitle:
        "Step 1. Genotype Laboratory Clones, Estimate Their Relatedness by Calculating IBS, and Compare This to What You Know about IBD",
      fr: "Étape 1. Génotyper les clones de laboratoire, estimer leur parenté en calculant l'IBS, et comparer avec ce que vous savez sur les MICI",
      pt: "Etapa 1. Fazer a genotipagem dos clones de laboratório, estimar a sua relação de parentesco através do cálculo do IBS e comparar com o que sabe sobre a DII",
      sectionId: 1,
      sectionLocked: !completion0[3],
      sectionComplete: completion6[33.5],
      subcomponents: [
        {
          title: "1.1 Genotyping with SNPs",
          fr: "1.1 Génotypage à l'aide de SNP",
          pt: "1.1 Genotipagem com SNPs",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 1 && phase === 0;
          },
          complete: completion6[0],
          available: completion0[3],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 1,
              phase: 0,
            });
          },
        },
        {
          pad: true,
          title: "1.1.1. Genotype 3 Unrelated Laboratory Clones with SNPs",
          fr: "1.1.1. Clones de laboratoire non apparentés du génotype 3 avec SNP",
          pt: "1.1.1. Clones de laboratório não relacionados com o genótipo 3 com SNPs",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 1 && phase === 1;
          },
          complete: completion6[1],
          available: completion6[0],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 1,
              phase: 1,
            });
          },
        },
        {
          pad: true,
          title:
            "1.1.2. Predict What You Will Observe about IBS/IBD in Pairwise Comparisons",
          fr: "1.1.2. Prédire ce que vous observerez sur le SII/la MII dans les comparaisons par paires",
          pt: "1.1.2. Preveja o que você vai observar sobre SII/DII em comparações pareadas",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 1 && phase === 2;
          },
          complete: completion6[2],
          available: completion6[1],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 1,
              phase: 2,
            });
          },
        },
        {
          pad: true,
          title: "1.1.3. Genotype and Compare Pairs of Unrelated Clones",
          fr: "1.1.3. Génotypage et comparaison de paires de clones non apparentés",
          pt: "1.1.3. Genotipar e comparar pares de clones não relacionados",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 1 && phase >= 3 && phase <= 5;
          },
          complete: completion6[5],
          available: completion6[2],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 1,
              phase: 3,
            });
          },
        },
        {
          pad: true,
          title: "1.1.4. Observe All Three IBS Estimates Together",
          fr: "1.1.4. Observer les trois estimations de l'IBS ensemble",
          pt: "1.1.4. Observar as três estimativas do IBS em conjunto",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 1 && phase === 6;
          },
          complete: completion6[6],
          available: completion6[5],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 1,
              phase: 6,
            });
          },
        },
        {
          pad: true,
          title:
            "1.1.5. Knowledge Check: Distinguishing Related Parasites from Unrelated Parasites Using IBS",
          fr: "1.1.5. Contrôle des connaissances: Distinguer les parasites apparentés des parasites non apparentés à l'aide de l'IBS",
          pt: "1.1.5. Verificação de conhecimentos: Distinguir Parasitas Relacionados de Parasitas Não Relacionados Utilizando o IBS",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 1 && phase >= 8 && phase <= 10;
          },
          complete: completion6[10],
          available: completion6[6],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 1,
              phase: 8,
            });
          },
        },
        {
          pad: true,
          title: "1.1.6. Generate a Laboratory Clone for 1 Hybrid Strain",
          fr: "1.1.6. Générer un clone de laboratoire pour une souche hybride",
          pt: "1.1.6. Gerar um clone de laboratório para 1 estirpe híbrida",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 1 && phase === 11;
          },
          complete: completion6[11],
          available: completion6[10],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 1,
              phase: 8,
            });
          },
        },
        {
          pad: true,
          title:
            "1.1.7. Genotype and Compare the Hybrid Clone to the First Three Clones",
          fr: "1.1.7. Génotyper et comparer le clone hybride aux trois premiers clones",
          pt: "1.1.7. Genotipar e comparar o clone híbrido com os três primeiros clones",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 1 && phase >= 12 && phase <= 14.5;
          },
          complete: completion6[14.5],
          available: completion6[11],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 1,
              phase: 12,
            });
          },
        },
        {
          pad: true,
          title:
            "1.1.8. Knowledge Check: Distinguishing Related Parasites from Unrelated Parasites Using IBS",
          fr: "1.1.8. Contrôle des connaissances: Distinguer les parasites apparentés des parasites non apparentés à l'aide de l'IBS",
          pt: "1.1.8. Verificação de conhecimentos: Distinguir Parasitas Relacionados de Parasitas Não Relacionados Utilizando o IBS",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 1 && phase === 15;
          },
          complete: completion6[15],
          available: completion6[14.5],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 1,
              phase: 15,
            });
          },
        },
        {
          title: "1.2. Genotyping with Microhaplotypes",
          fr: "1.2 Génotypage avec les microhaplotypes",
          pt: "1.2 Genotipagem com microhaplótipos",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 1 && phase === 21;
          },
          complete: completion6[21],
          available: completion6[15],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 1,
              phase: 21,
            });
          },
        },
        {
          pad: true,
          title:
            "1.2.1. Generate Laboratory Clones for 3 Unrelated Strains with Microhaplotypes",
          fr: "1.2.1. Générer des clones de laboratoire pour 3 souches non apparentées avec des microhaplotypes",
          pt: "1.2.1. Gerar clones de laboratório para 3 estirpes não relacionadas com microhaplótipos",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 1 && phase === 22;
          },
          complete: completion6[22],
          available: completion6[21],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 1,
              phase: 22,
            });
          },
        },
        {
          pad: true,
          title:
            "1.2.2. Predict What You Will Observe about IBS/IBD in Pairwise Comparisons",
          fr: "1.2.2. Prédire ce que vous observerez sur le SII/la MII dans les comparaisons par paires",
          pt: "1.2.2. Preveja o que você vai observar sobre SII/DII em comparações pareadas",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 1 && phase === 22.5;
          },
          complete: completion6[22.5],
          available: completion6[22],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 1,
              phase: 22.5,
            });
          },
        },
        {
          pad: true,
          title: "1.2.3. Genotype and Compare Pairs of Unrelated Clones",
          fr: "1.2.3. Génotypage et comparaison de paires de clones non apparentés",
          pt: "1.2.3. Genotipar e comparar pares de clones não relacionados",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 1 && phase >= 23 && phase <= 25;
          },
          complete: completion6[25],
          available: completion6[22.5],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 1,
              phase: 23,
            });
          },
        },
        {
          pad: true,
          title: "1.2.4. Observe All Three IBS Estimates Together",
          fr: "1.2.4. Observer les trois estimations de l'IBS ensemble",
          pt: "1.2.4. Observar as três estimativas do IBS em conjunto",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 1 && phase === 26;
          },
          complete: completion6[26],
          available: completion6[25],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 1,
              phase: 26,
            });
          },
        },
        {
          pad: true,
          title: "1.2.5. Generate a Laboratory Clone for 1 Hybrid Strain",
          fr: "1.2.5. Générer un clone de laboratoire pour une souche hybride",
          pt: "1.2.5. Gerar um clone de laboratório para 1 estirpe híbrida",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 1 && phase === 29;
          },
          complete: completion6[29],
          available: completion6[26],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 1,
              phase: 29,
            });
          },
        },
        {
          pad: true,
          title:
            "1.2.6. Genotype and Compare the Hybrid Clone to First Three Clones",
          fr: "1.2.6. Génotyper et comparer le clone hybride aux trois premiers clones",
          pt: "1.2.6. Genotipar e comparar o clone híbrido com os três primeiros clones",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 1 && phase >= 30 && phase <= 32;
          },
          complete: completion6[32],
          available: completion6[29],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 1,
              phase: 30,
            });
          },
        },
        {
          pad: true,
          title:
            "1.2.7. Knowledge Check: Distinguishing Related Parasites from Unrelated Parasites Using IBS",
          fr: "1.2.7. Contrôle des connaissances : Distinguer les parasites apparentés des parasites non apparentés à l'aide de l'IBS",
          pt: "1.2.7. Verificação de conhecimentos: Distinguir Parasitas Relacionados de Parasitas Não Relacionados Utilizando o IBS",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 1 && phase >= 33 && phase <= 33.5;
          },
          complete: completion6[33.5],
          available: completion6[32],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 1,
              phase: 33,
            });
          },
        },
      ],
      // subcomponents: [
      // {
      //   title: "Background",
      //   isActive: (currentView: InteractiveViewSettings) => {
      //     let { section, phase } = currentView;
      //     return section === 0 && phase === 0;
      //   },
      //   complete: completion0[0],
      //   available: true,
      //   callback: (setCurrentView: any) => {
      //     setCurrentView({
      //       module: "5.6",
      //       section: 0,
      //       phase: 0,
      //     });
      //   },
      // },
      //   {
      //     title: "Your Goal",
      //     isActive: (currentView: InteractiveViewSettings) => {
      //       let { section, phase } = currentView;
      //       return section === 0 && phase === 1;
      //     },
      //     complete: completion0[1],
      //     available: completion0[0],
      //     callback: (setCurrentView: any) => {
      //       setCurrentView({
      //         module: "5.6",
      //         section: 0,
      //         phase: 1,
      //       });
      //     },
      //   },
      //   {
      //     title: "Instructions",
      //     isActive: (currentView: InteractiveViewSettings) => {
      //       let { section, phase } = currentView;
      //       return section === 0 && phase === 2;
      //     },
      //     complete: completion0[2],
      //     available: completion0[1],
      //     callback: (setCurrentView: any) => {
      //       setCurrentView({
      //         module: "5.6",
      //         section: 0,
      //         phase: 2,
      //       });
      //     },
      //   },
      // ],
    },
    {
      sectionTitle:
        "Step 2. Evaluate Genotypes of Polyclonal Positive Controls Created from Combinations of the Laboratory Clones and Compare Them Using IBS and IBD",
      fr: "Étape 2. Évaluer les génotypes des contrôles positifs polyclonaux créés à partir de combinaisons de clones de laboratoire et les comparer à l'aide de l'IBS et de l'IBD",
      pt: "Etapa 2. Avaliar os genótipos dos controlos policlonais positivos criados a partir de combinações dos clones de laboratório e compará-los utilizando IBS e IBD",
      sectionId: 2,
      sectionLocked: !completion6[33.5],
      sectionComplete: completion7[17],
      subcomponents: [
        {
          title: "2.1. Introduction",
          fr: "2.1 Introduction",
          pt: "Introdução",
          available: false,
          isActive: (currentView: InteractiveViewSettings) => {
            return false;
          },
          complete: false,
          callback: () => {
            return;
          },
        },
        {
          pad: true,
          title: "2.1.1. Case Study Recap",
          fr: "2.1.1 Récapitulation de l'étude de cas",
          pt: "2.1.1 Recapitulação do estudo de caso",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 2 && phase === 0;
          },
          complete: completion7[0],
          available: completion6[33.5],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 2,
              phase: 0,
            });
          },
        },
        {
          pad: true,
          title: "2.1.2. View Your Positive Controls",
          fr: "2.1.2. Visualisez vos contrôles positifs",
          pt: "2.1.2. Ver os seus controlos positivos",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 2 && phase === 1;
          },
          complete: completion7[1],
          available: completion7[0],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 2,
              phase: 1,
            });
          },
        },
        {
          pad: true,
          title:
            "2.1.3. View the Genotypes of Your Polyclonal Positive Controls",
          fr: "2.1.3. Afficher les génotypes de vos contrôles positifs polyclonaux",
          pt: "2.1.3. Ver os genótipos dos seus controlos policlonais positivos",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 2 && phase === 2;
          },
          complete: completion7[2],
          available: completion7[1],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 2,
              phase: 2,
            });
          },
        },
        {
          title: "2.2. Compare Polyclonal Controls to Unrelated Lab Clones",
          fr: "2.2. Comparer les contrôles polyclonaux aux clones de laboratoire non apparentés",
          pt: "2.2. Comparar controlos policlonais com clones de laboratório não relacionados",
          available: false,
          isActive: (currentView: InteractiveViewSettings) => {
            return false;
          },
          complete: false,
          callback: () => {
            return;
          },
        },
        {
          pad: true,
          title:
            "2.2.1. Check Matching Alleles at Each Locus between Polyclonal Control 1:2 and Lab Clone 3 (Unrelated)",
          fr: "2.2.1. Vérifier la concordance des allèles à chaque locus entre le contrôle polyclonal 1:2 et le clone de laboratoire 3 (non apparenté)",
          pt: "2.2.1. Verificar os alelos correspondentes em cada locus entre o controlo policlonal 1:2 e o clone de laboratório 3 (não relacionado)",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 2 && phase >= 4 && phase <= 5;
          },
          complete: completion7[5],
          available: completion7[2],
          callback: (setCurrentView: any) => {
            if (completion7[4]) {
              setCurrentView({
                module: "5.6",
                section: 2,
                phase: 5,
              });
            } else {
              setCurrentView({
                module: "5.6",
                section: 2,
                phase: 4,
              });
            }
          },
        },
        {
          pad: true,
          title:
            "2.2.2. Check Matching Alleles at Each Locus between Polyclonal Control 2:3 and Lab Clone 1 (Unrelated)",
          fr: "2.2.2. Vérifier la concordance des allèles à chaque locus entre le contrôle polyclonal 2:3 et le clone de laboratoire 1 (non apparenté)",
          pt: "2.2.2. Verificar os alelos correspondentes em cada locus entre o controlo policlonal 2:3 e o clone de laboratório 1 (não relacionado)",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 2 && phase >= 6 && phase <= 7;
          },
          complete: completion7[7],
          available: completion7[5],
          callback: (setCurrentView: any) => {
            if (completion7[6]) {
              setCurrentView({
                module: "5.6",
                section: 2,
                phase: 7,
              });
            } else {
              setCurrentView({
                module: "5.6",
                section: 2,
                phase: 6,
              });
            }
          },
        },
        {
          pad: true,
          title: "2.2.3. Knowledge Check Questions When IBD is 0",
          fr: "2.2.3. Questions de contrôle des connaissances lorsque l'IBD est égal à 0",
          pt: "2.2.3. Perguntas de verificação de conhecimentos quando o IBD é 0",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 2 && phase >= 8 && phase < 10;
          },
          complete: completion7[9],
          available: completion7[7],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 2,
              phase: 8,
            });
          },
        },
        {
          title: "2.3. Compare Polyclonal Control to Related Lab Clones",
          fr: "2.3. Comparer le contrôle polyclonal aux clones de laboratoire apparentés",
          pt: "2.3. Comparar o controlo policlonal com clones de laboratório relacionados",
          available: false,
          isActive: (currentView: InteractiveViewSettings) => {
            return false;
          },
          complete: false,
          callback: () => {
            return;
          },
        },
        {
          pad: true,
          title:
            "2.3.1. Check Matching Alleles at Each Locus between Polyclonal Control 1:2 and Lab Clone 1 (Related)",
          fr: "2.3.1. Vérifier la concordance des allèles à chaque locus entre le contrôle polyclonal 1:2 et le clone de laboratoire 1 (connexe)",
          pt: "2.3.1. Verificar os alelos correspondentes em cada locus entre o controlo policlonal 1:2 e o clone de laboratório 1 (relacionado)",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 2 && phase >= 10 && phase <= 11;
          },
          complete: completion7[11],
          available: completion7[9],
          callback: (setCurrentView: any) => {
            if (completion7[10]) {
              setCurrentView({
                module: "5.6",
                section: 2,
                phase: 11,
              });
            } else {
              setCurrentView({
                module: "5.6",
                section: 2,
                phase: 10,
              });
            }
          },
        },
        {
          pad: true,
          title: "2.3.2. Making the Connection",
          fr: "2.3.2. Établissement de la connexion",
          pt: "2.3.2. Efetuar a ligação",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 2 && phase >= 12 && phase <= 13;
          },
          complete: completion7[13],
          available: completion7[11],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 2,
              phase: 12,
            });
          },
        },
        {
          pad: true,
          title:
            "2.3.3. Check Matching Alleles at Each Locus between the Polyclonal Control and Lab Clone 4 (Related)",
          fr: "2.3.3. Vérifier la concordance des allèles à chaque locus entre le contrôle polyclonal et le clone de laboratoire 4 (connexe)",
          pt: "2.3.3. Verificar os alelos correspondentes em cada locus entre o controlo policlonal e o clone de laboratório 4 (relacionado)",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 2 && phase >= 14 && phase <= 15;
          },
          complete: completion7[15],
          available: completion7[13],
          callback: (setCurrentView: any) => {
            if (completion7[14]) {
              setCurrentView({
                module: "5.6",
                section: 2,
                phase: 15,
              });
            } else {
              setCurrentView({
                module: "5.6",
                section: 2,
                phase: 14,
              });
            }
          },
        },
        {
          title: "Step 2 Summary",
          fr: "2.3.4. Étape 2 Résumé",
          pt: "2.3.4. Resumo da etapa 2",
          isActive: (currentView: InteractiveViewSettings) => {
            let { section, phase } = currentView;
            return section === 2 && phase >= 16;
          },
          complete: completion7[17],
          available: completion7[15],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              section: 2,
              phase: 16,
            });
          },
        },
      ],
    },
    {
      sectionTitle:
        "Step 3. Genotype Your Cases From the Village And School, Assess Their Genetic Relatedness, and Lead Your Program to the Correct Interventions",
      fr: "Étape 3. Génotypez vos cas du village et de l'école, évaluez leur parenté génétique et orientez votre programme vers les interventions correctes.",
      pt: "Etapa 3. Faça o genótipo dos seus casos da aldeia e da escola, avalie a sua relação genética e conduza o seu programa para as intervenções corretas",
      sectionId: 3,
      sectionLocked: !completion7[17],
      sectionComplete: completion8[39],
      subcomponents: [
        {
          title: "3.1. Potential Outbreak at the Boarding School",
          fr: "3.1. Foyer potentiel à l'internat",
          pt: "3.1. Potencial surto no internato",
          available: completion7[17],
          isActive: (currentView: InteractiveViewSettings) => {
            const { section, phase } = currentView;
            return section === 3 && phase === 1;
          },
          complete: completion8[1],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              phase: 1,
              section: 3,
            });
          },
        },
        {
          pad: true,
          title: "3.1.1. Estimating MOI",
          fr: "3.1.1. Estimation de la MOI",
          pt: "3.1.1. Estimativa do MOI",
          available: completion8[1],
          isActive: (currentView: InteractiveViewSettings) => {
            const { section, phase } = currentView;
            return section === 3 && phase === 4;
          },
          complete: completion8[4],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              phase: 4,
              section: 3,
            });
          },
        },
        {
          pad: true,
          title: "3.1.2. Comparing Genotypes",
          fr: "3.1.2. Comparaison des génotypes",
          pt: "3.1.2. Comparação de genótipos",
          available: completion8[4],
          isActive: (currentView: InteractiveViewSettings) => {
            const { section, phase } = currentView;
            return section === 3 && phase >= 5 && phase < 8;
          },
          complete: completion8[7],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              phase: 5,
              section: 3,
            });
          },
        },
        {
          pad: true,
          title: "3.1.3. Actual Infections",
          fr: "3.1.3. Infections réelles",
          pt: "3.1.3. Infecções reais",
          available: completion8[7],
          isActive: (currentView: InteractiveViewSettings) => {
            const { section, phase } = currentView;
            return section === 3 && phase === 8;
          },
          complete: completion8[8],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              phase: 8,
              section: 3,
            });
          },
        },
        {
          // pad: true,
          title: "3.2. Outbreak at the Boarding School",
          fr: "3.2. Foyer à l'internat",
          pt: "3.2. Surto no internato",
          available: completion8[8],
          isActive: (currentView: InteractiveViewSettings) => {
            const { section, phase } = currentView;
            // return false;
            return section === 3 && phase === 9;
          },
          complete: completion8[9],
          callback: (setCurrentView: any) => {
            // return;
            setCurrentView({
              module: "5.6",
              phase: 9,
              section: 3,
            });
          },
        },
        {
          pad: true,
          title: "3.2.1. Estimating MOI",
          fr: "3.2.1. Estimation de la MOI",
          pt: "3.2.1. Estimativa do MOI",
          available: completion8[9],
          isActive: (currentView: InteractiveViewSettings) => {
            const { section, phase } = currentView;
            return section === 3 && phase === 10;
          },
          complete: completion8[10],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              phase: 10,
              section: 3,
            });
          },
        },
        {
          pad: true,
          title: "3.2.2. Comparing Genotypes",
          fr: "3.2.2. Comparaison des génotypes",
          pt: "3.2.2. Comparação de genótipos",
          available: completion8[10],
          isActive: (currentView: InteractiveViewSettings) => {
            const { section, phase } = currentView;
            return section === 3 && phase >= 12 && phase <= 17;
          },
          complete: completion8[17],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              phase: 12,
              section: 3,
            });
          },
        },
        {
          pad: true,
          title:
            "3.2.3. Interpretation of Results and Communcations of Findings",
          fr: "3.2.3. Interprétation des résultats et communication des conclusions",
          pt: "3.2.3. Interpretação dos resultados e comunicação das conclusões",
          available: completion8[17],
          isActive: (currentView: InteractiveViewSettings) => {
            const { section, phase } = currentView;
            return section === 3 && phase >= 18 && phase < 23;
          },
          complete: completion8[22],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              phase: 18,
              section: 3,
            });
          },
        },
        {
          pad: true,
          title: "3.2.4. Actual Infections",
          fr: "3.2.4. Infections réelles",
          pt: "3.2.4. Infecções reais",
          available: completion8[22],
          isActive: (currentView: InteractiveViewSettings) => {
            const { section, phase } = currentView;
            return section === 3 && phase >= 23 && phase <= 33;
          },
          complete: completion8[33],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              phase: 23,
              section: 3,
            });
          },
        },
        {
          pad: true,
          title: "3.2.5. IBD & IBS Comparisons",
          fr: "3.2.5. Comparaisons entre les MII et le IBS",
          pt: "3.2.5. Comparações entre IBD e IBS",
          available: completion8[33],
          isActive: (currentView: InteractiveViewSettings) => {
            const { section, phase } = currentView;
            return section === 3 && phase >= 34 && phase <= 35;
          },
          complete: completion8[34],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              phase: 33,
              section: 3,
            });
          },
        },
        {
          pad: true,
          title: "3.2.6. Knowledge Check",
          fr: "3.2.6. Contrôle des connaissances",
          pt: "3.2.6. Verificação de conhecimentos",
          available: completion8[35],
          isActive: (currentView: InteractiveViewSettings) => {
            const { section, phase } = currentView;
            return section === 3 && phase >= 36 && phase < 40;
          },
          complete: completion8[39],
          callback: (setCurrentView: any) => {
            setCurrentView({
              module: "5.6",
              phase: 36,
              section: 3,
            });
          },
        },
      ],
    },
    {
      sectionComplete: false,
      sectionId: 4,
      sectionLocked: !completion8[39],
      sectionTitle: "Summary",
      fr: "Résumé",
      pt: "Resumo",
      subcomponents: [],
    },
  ];

  return (
    <div
      inert={!isOpen}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      }}
      // className={`grid sticky basis-0 top-0 shadow-lg shadow-black text-zinc-400 ${
      //   isOpen
      //     ? "min-w-full grid-cols-[1fr]"
      //     : "min-w-0 -translate-x-full grid-cols-[0fr]"
      // } md:duration-1000  md:min-w-fit overflow-auto relative transition-none md:transition-all h-[calc(100vh-80px)] md:h-[calc(100vh-48px)] bg-zinc-950`}
      className={`sticky top-0 grid text-zinc-400 shadow-lg shadow-black ${
        isOpen
          ? "min-w-full translate-x-0 grid-cols-[1fr]"
          : "min-w-0 -translate-x-full grid-cols-[0fr]"
      } md:transition-[grid-template-columns]/ relative h-[calc(100vh-80px)] overflow-auto bg-zinc-950 transition-none md:h-[calc(100vh-48px)] md:min-w-0 md:max-w-[400px] md:transition-all md:duration-1000`}
    >
      <button
        autoFocus={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="absolute right-2 top-2 border-b border-transparent text-sm hover:border-gray-200 hover:text-white focus-visible:text-white"
      >
        <svg
          width="16pt"
          height="16pt"
          version="1.1"
          viewBox="0 0 1200 1200"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 rotate-45 transform fill-current transition"
        >
          <path d="m226.8 651.6v-90c0-15.602 10.801-26.398 26.398-26.398h278.4l0.003906-278.4c0-13.199 10.801-27.602 27.602-27.602h88.801c16.801 0 27.602 14.398 27.602 27.602v278.4h278.4c15.602 0 26.398 10.801 26.398 26.398v90c0 15.602-10.801 27.602-26.398 27.602h-278.4v276c0 18-9.6016 27.602-27.602 27.602h-88.801c-18 0-27.602-9.6016-27.602-27.602v-276h-278.4c-16.801 0-26.398-12-26.398-27.598z"></path>
        </svg>
      </button>
      <div
        className={`col-span-2  ${
          isOpen ? "overflow-x-hidden" : "overflow-hidden"
        } overscroll-contain`}
      >
        <div
          className={` pb-32 md:pb-28  ${
            isOpen ? "md:delay-500" : "text-transparent"
          } duration-300`}
        >
          <div className="bg-interactiveGreen/60 px-12 pb-4 pt-8 text-center font-bold text-white md:max-w-[384px]">
            <h3 className="text-lg">
              {/* {module === "2.6"
                  ? "Genetic Sleuthing & Surveillance"
                  : module === "5.6"
                  ? "5.6"
                  : "4.4"} */}
              {lang === "EN"
                ? `Genotype Sleuthing to Estimate Relatedness from Genetic Data`
                : lang === "FR"
                ? `L'exploration du génotype pour estimer la parenté à partir de données génétiques`
                : lang === "PT"
                ? `Investigação de genótipos para estimar a relação de parentesco a partir de dados genéticos`
                : "Genotype Sleuthing to Estimate Relatedness from Genetic Data"}
            </h3>
          </div>
          {sections.map((section, idx) => {
            return (
              <SideBar4SubComponent section={section} dev={dev} lang={lang} />
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div
      inert={!isOpen}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      }}
      // className={`grid sticky basis-0 top-0 shadow-lg shadow-black text-zinc-400 ${
      //   isOpen
      //     ? "min-w-full grid-cols-[1fr]"
      //     : "min-w-0 -translate-x-full grid-cols-[0fr]"
      // } md:duration-1000  md:min-w-fit overflow-auto relative transition-none md:transition-all h-[calc(100vh-80px)] md:h-[calc(100vh-48px)] bg-zinc-950`}
      className={`sticky top-0 grid text-zinc-400 shadow-lg shadow-black ${
        isOpen
          ? "min-w-full translate-x-0 grid-cols-[1fr]"
          : "min-w-0 -translate-x-full grid-cols-[0fr]"
      } md:transition-[grid-template-columns]/  relative h-[calc(100vh-80px)] overflow-auto bg-zinc-950 transition-none md:h-[calc(100vh-48px)] md:min-w-fit md:transition-all md:duration-1000`}
    >
      <button
        autoFocus={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="absolute right-2 top-2 border-b border-transparent text-sm hover:border-gray-200 hover:text-white focus-visible:text-white"
      >
        <svg
          width="16pt"
          height="16pt"
          version="1.1"
          viewBox="0 0 1200 1200"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 rotate-45 transform fill-current transition"
        >
          <path d="m226.8 651.6v-90c0-15.602 10.801-26.398 26.398-26.398h278.4l0.003906-278.4c0-13.199 10.801-27.602 27.602-27.602h88.801c16.801 0 27.602 14.398 27.602 27.602v278.4h278.4c15.602 0 26.398 10.801 26.398 26.398v90c0 15.602-10.801 27.602-26.398 27.602h-278.4v276c0 18-9.6016 27.602-27.602 27.602h-88.801c-18 0-27.602-9.6016-27.602-27.602v-276h-278.4c-16.801 0-26.398-12-26.398-27.598z"></path>
        </svg>
      </button>
      <div
        className={`col-span-2  ${
          isOpen ? "overflow-x-hidden" : "overflow-hidden"
        } overscroll-contain`}
      >
        <div
          className={` pb-32 md:pb-28  ${
            isOpen ? "md:delay-500" : "text-transparent"
          } duration-300`}
        >
          <div className="inline-flex w-full shrink text-balance bg-interactiveGreen/60 px-12 pb-4 pt-8 text-center text-lg font-bold md:w-[384px]">
            <h3
              className={`${
                isOpen ? "text-white" : "text-transparent"
              } transition-all duration-300`}
            >
              {/* {module === "2.6"
                ? "Genetic Sleuthing & Surveillance"
                : module === "5.6"
                ? "5.6"
                : "4.4"} */}
              Genotype Sleuthing to Estimate Relatedness from Genetic Data
            </h3>
          </div>
          {sections.map((section, idx) => {
            return <SideBar4SubComponent section={section} />;
          })}
        </div>
      </div>{" "}
    </div>
  );
}
