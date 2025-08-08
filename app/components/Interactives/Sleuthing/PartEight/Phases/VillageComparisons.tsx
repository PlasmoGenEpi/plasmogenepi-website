import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import PentagonViewer from "../Pentagon/PentagonViewer";
import GenotypeComparator from "../../PartSix/Comparators/MHPs/GenotypeComparator";
import GenotypeComposition from "../Genotypes/GenotypeComposition";
import CompareGenotypes from "../Genotypes/CompareGenotypes";
import PentagonSideBySide from "../Pentagon/PentagonSideBySide";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import { currentView2Atom } from "@/app/components/Interactives/Shared/InteractiveViewer/InteractiveViewer";
import { useAtomValue } from "jotai";

export default function VillageComparisons({
  lang = "EN",
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const currentView = useAtomValue(currentView2Atom);

  const { phase } = currentView;

  return (
    <InteractivePrimaryLayout
      leftHeader={
        lang === "EN"
          ? `Village Transmission Network`
          : lang === "FR"
          ? `Réseau de transmission du village`
          : `Rede de Transmissão da Aldeia`
      }
      leftContent={<PentagonViewer lang={lang} />}
      rightHeader={
        phase > 11 && phase !== 13 && phase !== 14 && phase < 18
          ? lang === "EN"
            ? `Genotype Matches`
            : lang === `FR`
            ? `Correspondances de génotypes`
            : lang === `PT`
            ? `Correspondências de Genótipos`
            : ``
          : phase === 13
          ? lang === "EN" || lang === "FR"
            ? "Questions"
            : "Perguntas"
          : phase >= 20
          ? lang === "EN" || lang === "FR"
            ? "Questions"
            : "Perguntas"
          : phase >= 18
          ? lang === "EN"
            ? "Results"
            : lang === "FR"
            ? `Resultats`
            : lang === "PT"
            ? `Resultados`
            : ``
          : ""
      }
      rightContent={<PentagonSideBySide lang={lang} />}
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
