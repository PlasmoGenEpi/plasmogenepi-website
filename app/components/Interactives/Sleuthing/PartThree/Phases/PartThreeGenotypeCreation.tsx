import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import PartThreePositiveControlBoard from "../PositiveControlBoard/PartThreePositiveControlBoard";
import PartThreeMicrohaplotypeGenotyping from "../Genotyping/PartThreeMicrohaplotypeGenotyping";
import { selectedPositiveControlBoardAtom } from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export default function PartThreeGenotypeCreation({
  lang,
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const selectedBoard = useAtomValue(selectedPositiveControlBoardAtom);

  return (
    <InteractivePrimaryLayout
      leftHeader={
        <div className="text-center @4xl/main:col-start-1 @4xl/main:text-left">
          <h4 className="text-balance text-center text-lg  font-semibold @2xl/main:text-wrap @2xl/main:text-left">
            {lang === "EN"
              ? `Positive Control`
              : lang === "FR"
              ? `Contrôle positif`
              : `Controlo Positivo`}{" "}
            {selectedBoard}
            <label className="text-sm">
              <br></br>
              MOI = {selectedBoard > 4 ? 4 : selectedBoard > 2 ? 2 : 1}
            </label>
          </h4>
        </div>
      }
      leftContent={<PartThreePositiveControlBoard lang={lang} />}
      rightHeader={
        lang === "EN"
          ? "Genotyping"
          : lang === "FR"
          ? "Génotypage"
          : "Genotipagem"
      }
      rightContent={<PartThreeMicrohaplotypeGenotyping lang={lang} />}
    />
  );

  return (
    <StandardLayout>
      <div>
        <FormHeader
          text={`Positive Control Board ${selectedBoard}
`}
        />
        <div className="-translate-y-6 text-center [fontSize:15px] md:text-left">
          <label>
            MOI = {selectedBoard > 4 ? 4 : selectedBoard > 2 ? 2 : 1}
          </label>
        </div>
        <PartThreePositiveControlBoard />
      </div>{" "}
      <div>
        <FormHeader text={`Genotyping`} />
        <PartThreeMicrohaplotypeGenotyping />
      </div>
    </StandardLayout>
  );
}
