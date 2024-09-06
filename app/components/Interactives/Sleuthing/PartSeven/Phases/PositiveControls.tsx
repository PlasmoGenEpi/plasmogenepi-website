import FormHeader from "@/components/Interactives/Shared/misc/FormHeader";
import StandardLayout from "@/components/Interactives/Shared/misc/StandardLayout";
import {
  partSixCloneRowsAtom,
  partSixCloneRowsMHPsAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import P6MHPCloneRowsWithHybrid from "../../PartSix/CloneRows/P6MHPCloneRowsWithHybrid";
import CloneRow from "@/components/Interactives/Shared/CloneRow/CloneRow";
import P6MHPCloneRows, {
  P6CloneRowButtonColors,
  P6CloneRowColors,
} from "../../PartSix/CloneRows/P6MHPCloneRows";
import SquareMicrohaplotype from "@/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
import GenotypeComposition from "../../PartEight/Genotypes/GenotypeComposition";
import RedGreenGenotype from "../Genotypes/RedGreenGenotype";
import BlueGreenGenotype from "../Genotypes/BlueGreenGenotype";
import RedBlueGenotype from "../Genotypes/RedBlueGenotype";

export default function PositiveControls() {
  const phase = useAtomValue(phaseAtom);
  const cloneRows = useAtomValue(partSixCloneRowsMHPsAtom);
  return (
    <StandardLayout>
      {phase === 1 && (
        <div>
          <FormHeader text="Lab Clones with Microhaplotypes" />
          <P6MHPCloneRowsWithHybrid partSeven />
        </div>
      )}
      {phase >= 2 && (
        <div>
          <FormHeader text="Positive Controls" />
          <div className="flex max-w-[500px] origin-center scale-90 flex-col gap-2 lg:scale-75">
            <CloneRow
              label={1}
              classNames={{
                button: P6CloneRowButtonColors[1],
                row: P6CloneRowColors[1],
              }}
            >
              {cloneRows[1].vals.map((el, idx) => {
                return <SquareMicrohaplotype id={el} key={idx} />;
              })}
            </CloneRow>
            <CloneRow
              label={2}
              classNames={{
                button: P6CloneRowButtonColors[2],
                row: P6CloneRowColors[2],
              }}
            >
              {cloneRows[2].vals.map((el, idx) => {
                return <SquareMicrohaplotype id={el} key={idx} />;
              })}
            </CloneRow>
          </div>
          <div className="flex max-w-[500px] origin-center scale-90 flex-col gap-2 lg:scale-75">
            <CloneRow
              label={1}
              classNames={{
                button: P6CloneRowButtonColors[1],
                row: P6CloneRowColors[1],
              }}
            >
              {cloneRows[1].vals.map((el, idx) => {
                return <SquareMicrohaplotype id={el} key={idx} />;
              })}
            </CloneRow>
            <CloneRow
              label={3}
              classNames={{
                button: P6CloneRowButtonColors[3],
                row: P6CloneRowColors[3],
              }}
            >
              {cloneRows[3].vals.map((el, idx) => {
                return <SquareMicrohaplotype id={el} key={idx} />;
              })}
            </CloneRow>
          </div>
          <div className="flex max-w-[500px] origin-center scale-90 flex-col gap-1 lg:scale-75">
            <CloneRow
              label={2}
              classNames={{
                button: P6CloneRowButtonColors[2],
                row: `${P6CloneRowColors[2]}`,
              }}
            >
              {cloneRows[2].vals.map((el, idx) => {
                return <SquareMicrohaplotype id={el} key={idx} />;
              })}
            </CloneRow>
            <CloneRow
              label={3}
              classNames={{
                button: P6CloneRowButtonColors[3],
                row: P6CloneRowColors[3],
              }}
            >
              {cloneRows[3].vals.map((el, idx) => {
                return <SquareMicrohaplotype id={el} key={idx} />;
              })}
            </CloneRow>
          </div>
        </div>
      )}
      {phase === 3 && (
        <div className="flex flex-col">
          <FormHeader text="Genotypes" />
          <div className="flex grow flex-col justify-between">
            <RedBlueGenotype className="origin-center scale-90  lg:scale-75" />
            <RedGreenGenotype className="origin-center scale-90  lg:scale-75" />
            <BlueGreenGenotype className="origin-center scale-90  lg:scale-75" />
          </div>
        </div>
      )}
    </StandardLayout>
  );
}
