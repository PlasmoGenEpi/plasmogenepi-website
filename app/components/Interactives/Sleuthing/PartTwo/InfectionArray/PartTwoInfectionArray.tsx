import GenotypeOutputElement from "@/components/Interactives/Shared/Genotyping/GenotypeOutputElement";
import GenotypeResult from "@/components/Interactives/Shared/Genotyping/GenotypeResult";
import InfectionArrayElement from "@/components/Interactives/Shared/InfectionArray/InfectionArrayElement";
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
        return (
          <InfectionArrayElement
            id={infection.id}
            callback={() => {
              setSelectedInfection(idx);
            }}
            active={idx === selectedInfection}
            MOI={infection.trueMOI}
            key={idx}
          >
            {/* <GenotypeResult
              vals={infection.refs.map((infectionNum, idx2) => {
                return {
                  reference: infectionNum === 0 || infectionNum === 2,
                  alternate: infectionNum === 1 || infectionNum === 2,
                };
              })}
              possibleValues={fixedData[2].infectionAlleleReferences.map(
                (infObj) => {
                  return {
                    reference: infObj.ref,
                    alternate: infObj.alt,
                  };
                },
              )}
              id={infection.id}
            /> */}
            <div className="grid w-full grid-cols-12">
              {Array(12)
                .fill(0)
                .map((el, idx2) => {
                  let { ref, alt } =
                    fixedData[2].infectionAlleleReferences[idx2];

                  return (
                    <GenotypeOutputElement
                      noBorder
                      key={idx2}
                      idx={idx2}
                      possibleVals={{
                        reference: ref,
                        alternate: alt,
                      }}
                      vals={{
                        reference:
                          infection.refs[idx2] === 0 ||
                          infection.refs[idx2] === 2,
                        alternate:
                          infection.refs[idx2] === 1 ||
                          infection.refs[idx2] === 2,
                      }}
                    />
                  );
                })}
            </div>
            {/* <div className="grid h-full w-full grid-cols-12 gap-0.5 py-2 text-center">
              {infection.refs.map((el, idx2) => {
                return (
                  <div
                    key={idx2}
                    className="flex h-full w-full items-end justify-center"
                  >
                    <span className="border-b-2 border-black">
                      {el === 0 ? ref : alt}
                    </span>
                  </div>
                  // <span key={idx2}>
                  //   {el === 0 ? ref : el === 1 ? alt : ref + "/" + alt}
                  // </span>
                );
              })}
            </div> */}
          </InfectionArrayElement>
        );
      })}
    </div>
  );
}
