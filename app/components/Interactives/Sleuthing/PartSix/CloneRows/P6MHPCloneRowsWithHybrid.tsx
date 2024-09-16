import {
  activePairwiseComboAtom,
  activePairwiseMHPsComboAtom,
  partSixCloneRowsMHPsAtom,
  partSixCompletionAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import LabelRow from "../../PartOne/CloneRowTable/LabelRow";
import CloneRow from "@/components/Interactives/Shared/CloneRow/CloneRow";
import P6MHPCloneRows, {
  P6CloneRowButtonColors,
  P6CloneRowColors,
} from "./P6MHPCloneRows";
import CloneElement from "@/components/Interactives/Shared/CloneRow/CloneElement";
import SNPHybridClone from "../Comparators/SNPs/SNPHybridClone";
import MHPHybridClone from "../Comparators/MHPs/MHPHybridClone";
import SquareMicrohaplotype from "@/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
import MicrohaplotypeComparator from "../Comparators/MHPs/MicrohaplotypeComparators";

export default function P6MHPCloneRowsWithHybrid({
  forwards,
  label = true,
  activePairwiseCombo,
  partSeven,
  hideHybrid,
}: {
  hideHybrid?: boolean;
  partSeven?: boolean;
  activePairwiseCombo?: [number, number];
  forwards?: boolean;
  label?: boolean;
}) {
  const completion = useAtomValue(partSixCompletionAtom);
  const phase = useAtomValue(phaseAtom);
  const [cloneRows, setCloneRows] = useAtom(partSixCloneRowsMHPsAtom);

  if (partSeven) {
    return (
      <div className="flex max-w-[500px] flex-col gap-1">
        <CloneRow
          label={1}
          classNames={{
            wrapper: "mb-1",
            row: P6CloneRowColors[1],
            button: P6CloneRowButtonColors[1],
          }}
        >
          {cloneRows[1].vals.map((val, idx) => {
            return <SquareMicrohaplotype id={val} key={idx} />;
          })}
        </CloneRow>

        <CloneRow
          label={2}
          classNames={{
            wrapper: "mb-1",
            row: P6CloneRowColors[2],
            button: P6CloneRowButtonColors[2],
          }}
        >
          {cloneRows[2].vals.map((val, idx) => {
            return <SquareMicrohaplotype id={val} key={idx} />;
          })}
        </CloneRow>
        <CloneRow
          label={3}
          classNames={{
            wrapper: "mb-1",
            row: P6CloneRowColors[3],
            button: P6CloneRowButtonColors[3],
          }}
        >
          {cloneRows[3].vals.map((val, idx) => {
            return <SquareMicrohaplotype id={val} key={idx} />;
          })}
        </CloneRow>
        {!hideHybrid && <MHPHybridClone />}
      </div>
    );
  }

  return (
    <div className="flex max-w-[500px] flex-col gap-1">
      {phase === 30 && (
        <CloneRow
          label={1}
          classNames={{
            wrapper: "mb-1",
            row: P6CloneRowColors[1],
            button: P6CloneRowButtonColors[1],
          }}
        >
          {cloneRows[1].vals.map((val, idx) => {
            return <SquareMicrohaplotype id={val} key={idx} />;
          })}
        </CloneRow>
      )}
      {phase === 31 && (
        <CloneRow
          label={2}
          classNames={{
            wrapper: "mb-1",
            row: P6CloneRowColors[2],
            button: P6CloneRowButtonColors[2],
          }}
        >
          {cloneRows[2].vals.map((val, idx) => {
            return <SquareMicrohaplotype id={val} key={idx} />;
          })}
        </CloneRow>
      )}
      {phase === 32 && (
        <CloneRow
          label={3}
          classNames={{
            wrapper: "mb-1",
            row: P6CloneRowColors[3],
            button: P6CloneRowButtonColors[3],
          }}
        >
          {cloneRows[3].vals.map((val, idx) => {
            return <SquareMicrohaplotype id={val} key={idx} />;
          })}
        </CloneRow>
      )}
      {!hideHybrid && <MHPHybridClone />}
      {phase !== 32 && activePairwiseCombo && (
        <MicrohaplotypeComparator label activeCombo={activePairwiseCombo} />
      )}
    </div>
  );
}