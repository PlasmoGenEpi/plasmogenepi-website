import StandardLayout from "@/components/Interactives/Shared/misc/StandardLayout";
import PentagonViewer from "../Pentagon/PentagonViewer";
import GenotypeComparator from "../../PartSix/Comparators/MHPs/GenotypeComparator";
import GenotypeComposition from "../Genotypes/GenotypeComposition";
import CompareGenotypes from "../Genotypes/CompareGenotypes";
import PentagonSideBySide from "../Pentagon/PentagonSideBySide";

export default function VillageComparisons() {
  return (
    <StandardLayout>
      <PentagonViewer />
      <PentagonSideBySide />
    </StandardLayout>
  );
}
