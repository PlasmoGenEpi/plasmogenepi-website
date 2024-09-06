import StandardLayout from "@/components/Interactives/Shared/misc/StandardLayout";
import Person from "../Person";
import {
  partEightMOIInputsAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import Bus from "../Bus";
import InputMOI from "../Genotypes/InputMOI";
import GenotypeComposition from "../Genotypes/GenotypeComposition";
import { fixedData } from "@/data/Interactives/fixedData";
import { allPositiveValues } from "./Persons";
import KnowledgeCheckQuestion from "@/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import FormHeader from "@/components/Interactives/Shared/misc/FormHeader";

export default function VillagePersons() {
  const phase = useAtomValue(phaseAtom);
  const [MOIInputs, setMOIInputs] = useAtom(partEightMOIInputsAtom);
  return (
    <StandardLayout>
      <div className="fadeIn500">
        <FormHeader text="Infections" />
        <div className="grid gap-y-8">
          <div className="flex gap-4">
            <div className="relative my-auto h-fit w-16">
              <Person id={"E"} />
              <div className="absolute right-0 top-0 w-1/4">
                <Bus />
              </div>
            </div>
            {phase >= 10 && (
              <div className={`fadeIn500 flex grow`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["E"].cases}
                  />
                </div>
                <div
                  className={`${phase === 10 ? `fadeIn500` : "invisible"} my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["E"].MOI}
                    id={"E"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <div className="relative my-auto h-fit w-16">
              <Person id={"F"} />
              <div className="absolute right-0 top-0 w-1/4">
                <Bus />
              </div>
            </div>
            {phase >= 10 && (
              <div className={`fadeIn500 flex grow`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["F"].cases}
                  />
                </div>
                <div
                  className={`${phase === 10 ? `fadeIn500` : "invisible"} my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["F"].MOI}
                    id={"F"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <div className="relative my-auto h-fit w-16">
              <Person id={"G"} />
            </div>
            {phase >= 10 && (
              <div className={`fadeIn500 flex grow`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["G"].cases}
                  />
                </div>
                <div
                  className={`${phase === 10 ? `fadeIn500` : "invisible"} my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["G"].MOI}
                    id={"G"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <div className="relative my-auto h-fit w-16">
              <Person id={"H"} />
            </div>
            {phase >= 10 && (
              <div className={`fadeIn500 flex grow`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["H"].cases}
                  />
                </div>
                <div
                  className={`${phase === 10 ? `fadeIn500` : "invisible"} my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["H"].MOI}
                    id={"H"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <div className="relative my-auto h-fit w-16">
              <Person id={"I"} />
            </div>
            {phase >= 10 && (
              <div className={`fadeIn500 flex grow`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["I"].cases}
                  />
                </div>
                <div
                  className={`${phase === 10 ? `fadeIn500` : "invisible"} my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["I"].MOI}
                    id={"I"}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </StandardLayout>
  );
}
