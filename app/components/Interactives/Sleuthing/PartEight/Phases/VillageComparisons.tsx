import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import PentagonViewer from "../Pentagon/PentagonViewer";
import GenotypeComparator from "../../PartSix/Comparators/MHPs/GenotypeComparator";
import GenotypeComposition from "../Genotypes/GenotypeComposition";
import CompareGenotypes from "../Genotypes/CompareGenotypes";
import PentagonSideBySide from "../Pentagon/PentagonSideBySide";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import { currentView2Atom } from "@/app/components/Interactives/Shared/InteractiveViewer/InteractiveViewer";
import { useAtomValue } from "jotai";

export default function VillageComparisons() {
  const currentView = useAtomValue(currentView2Atom);

  const { phase } = currentView;

  return (
    <InteractivePrimaryLayout
      leftHeader={`Village Transmission Network`}
      leftContent={<PentagonViewer />}
      rightHeader={
        phase > 11 && phase !== 13 && phase !== 14 && phase < 18
          ? `Genotype Matches`
          : phase === 13
          ? "Questions"
          : phase >= 20
          ? "Questions"
          : phase >= 18
          ? "Results"
          : ""
      }
      rightContent={<PentagonSideBySide />}
    />
  );

  return (
    <StandardLayout>
      <div>
        <PentagonViewer />
        <div className="flex justify-between">
          <button>Back</button>
          <button>Next</button>
        </div>
      </div>
      <PentagonSideBySide />
    </StandardLayout>
  );
}
