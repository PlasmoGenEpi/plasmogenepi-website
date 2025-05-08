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
  sectionId: number;
  sectionLocked: boolean;
  sectionComplete: boolean;
  subcomponents: {
    title: string;
    isActive: (currentView: InteractiveViewSettings) => boolean;
    complete: boolean;
    available: boolean;
    callback: (setCurrentView: any) => void;
    pad?: boolean;
  }[];
};

export default function InteractiveSideBar4({ dev }: { dev: boolean }) {
  const [isOpen, setIsOpen] = useAtom(sideBarIsOpenAtom);
  const completion6 = useAtomValue(partSixCompletionAtom);
  const completion7 = useAtomValue(partSevenCompletionAtom);
  const completion8 = useAtomValue(partEightCompletionAtom);
  const completion0 = useAtomValue(s2p0CompletionAtom);
  // const [currentView, setCurrentView] = useAtom(currentViewAtom);

  const sections: SideBarSection[] = [
    {
      sectionTitle: "Introduction",
      sectionId: 0,
      sectionLocked: false,
      sectionComplete: completion0[3],
      subcomponents: [
        {
          title: "Background",
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
      sectionId: 1,
      sectionLocked: !completion0[3],
      sectionComplete: completion6[33.5],
      subcomponents: [
        {
          title: "1.1 Genotyping with SNPs",
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
      sectionId: 2,
      sectionLocked: !completion6[33.5],
      sectionComplete: completion7[17],
      subcomponents: [
        {
          title: "2.1. Introduction",
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
      sectionId: 3,
      sectionLocked: !completion7[17],
      sectionComplete: completion8[39],
      subcomponents: [
        {
          title: "3.1. Potential Outbreak at the Boarding School",
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
              Genotype Sleuthing to Estimate Relatedness from Genetic Data
            </h3>
          </div>
          {sections.map((section, idx) => {
            return <SideBar4SubComponent section={section} dev={dev} />;
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
