import GenotypeOutputElement from "@/app/components/Interactives/Shared/Genotyping/GenotypeOutputElement";
import InfectionArrayElement from "@/app/components/Interactives/Shared/InfectionArray/InfectionArrayElement";
import { fixedData } from "@/data/Interactives/fixedData";
import { selectedInfectionIndexAtom } from "@/data/Interactives/interactiveStore";
import { useAtom } from "jotai";

export default function PartTwoInfectionArray() {
  const [selectedInfection, setSelectedInfection] = useAtom(
    selectedInfectionIndexAtom,
  );

  return (
    <div className="grid w-[133%] origin-top-left scale-75 grid-rows-10">
      {fixedData[2].infections.map((infection, idx) => {
        let { ref, alt } = fixedData[2].infectionAlleleReferences[idx];
        return (
          <InfectionArrayElement
            id={infection.id}
            callback={() => {
              setSelectedInfection(idx);
            }}
            active={idx === selectedInfection}
            MOI={infection.trueMOI}
            key={infection.id}
          >
            <div className="grid w-full grid-cols-12"></div>
          </InfectionArrayElement>
        );
      })}
    </div>
  );
}
