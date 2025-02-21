import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import {
  P6CloneRowButtonColors,
  P6CloneRowColors,
} from "../CloneRows/P6MHPCloneRows";
import CloneRow from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import {
  activePairwiseComboAtom,
  partSixCloneRowsMHPsAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import SquareMicrohaplotype from "@/app/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
import P6MHPCloneRowsWithHybrid from "../CloneRows/P6MHPCloneRowsWithHybrid";
import PositiveControlBoard from "@/app/components/Interactives/Shared/PositiveControlBoard/PositiveControlBoard";
import P6CloneRows from "../CloneRows/P6CloneRows";
import MHPHybridClone from "../Comparators/MHPs/MHPHybridClone";

export default function PositiveControls() {
  const cloneRowsMHPs = useAtomValue(partSixCloneRowsMHPsAtom);
  const phase = useAtomValue(phaseAtom);
  const [activeCombo, setActiveCombo] = useAtom(activePairwiseComboAtom);
  const cloneRows = useAtomValue(partSixCloneRowsMHPsAtom);

  if (phase < 51) {
    return (
      <StandardLayout>
        <div>
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
          <MHPHybridClone />
        </div>
      </StandardLayout>
    );
  }

  return (
    <div className="flex flex-col gap-16 md:gap-4">
      <div className="grid gap-16 md:grid-cols-2">
        <div className="mx-auto w-full max-w-[400px]">
          <PositiveControlBoard>
            <div className="''500 mb-auto mt-4 flex max-w-[500px] grow scale-75 flex-col gap-1">
              <CloneRow
                label={1}
                classNames={{
                  wrapper: `transition-all duration-500 ''500`,
                  button: P6CloneRowButtonColors[1],
                  row: P6CloneRowColors[1],
                }}
                key={1}
              >
                {cloneRowsMHPs[1].vals.map((val, idx2) => {
                  if (val === null) {
                    return (
                      <div
                        key={idx2}
                        className="aspect-square bg-white shadow-sm shadow-black"
                      ></div>
                    );
                  }
                  return <SquareMicrohaplotype id={val} key={idx2} />;
                })}
              </CloneRow>
              <CloneRow
                label={2}
                classNames={{
                  wrapper: `transition-all duration-500 ''500`,
                  button: P6CloneRowButtonColors[2],
                  row: P6CloneRowColors[2],
                }}
                key={2}
              >
                {cloneRowsMHPs[2].vals.map((val, idx2) => {
                  if (val === null) {
                    return (
                      <div
                        key={idx2}
                        className="aspect-square bg-white shadow-sm shadow-black"
                      ></div>
                    );
                  }
                  return <SquareMicrohaplotype id={val} key={idx2} />;
                })}
              </CloneRow>
            </div>
          </PositiveControlBoard>
        </div>
        <div>
          <div className="max-w-[400px]">
            <div className="mb-2 mt-4  text-center">
              <label className="text-sm">
                Composition of polyclonal positive control 1:2
              </label>
            </div>
            <div className="grid gap-x-1 [grid-template-columns:8%_auto]">
              <div className="my-auto flex min-h-10 w-full flex-col">
                <div
                  className={`mr-auto aspect-square h-6 translate-y-0.5 rounded-full ${P6CloneRowColors[1]}`}
                ></div>
                <div
                  className={`ml-auto aspect-square h-6 -translate-y-0.5 rounded-full ${P6CloneRowColors[2]}`}
                ></div>
              </div>
              <div className="col-start-2 grid grid-cols-12 gap-x-0.5 p-1 ">
                {Array(12)
                  .fill(0)
                  .map((el, idx) => {
                    return (
                      <div key={idx} className="grid grid-rows-2 gap-0.5">
                        <SquareMicrohaplotype
                          id={cloneRowsMHPs[1].vals[idx] as number}
                        />
                        <SquareMicrohaplotype
                          id={cloneRowsMHPs[2].vals[idx] as number}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="mb-2 mt-4  text-center">
              <label className="text-sm">
                Genotype of polyclonal positive control {1}:{2}
              </label>
            </div>
            <div className="grid gap-x-1 [grid-template-columns:8%_auto]">
              <div className="my-auto flex min-h-10 w-full flex-col">
                <div
                  className={`mr-auto aspect-square h-6 translate-y-0.5 rounded-full ${P6CloneRowColors[1]}`}
                ></div>
                <div
                  className={`ml-auto aspect-square h-6 -translate-y-0.5 rounded-full ${P6CloneRowColors[2]}`}
                ></div>
              </div>
              <div className="col-start-2 grid grid-cols-12 gap-x-0.5 p-1 ">
                {Array(12)
                  .fill(0)
                  .map((el, idx) => {
                    return (
                      <div key={idx} className="grid grid-rows-2 gap-0.5">
                        {cloneRowsMHPs[1].vals[idx] !==
                        cloneRowsMHPs[2].vals[idx] ? (
                          <SquareMicrohaplotype
                            id={cloneRowsMHPs[1].vals[idx] as number}
                          />
                        ) : null}
                        <SquareMicrohaplotype
                          id={cloneRowsMHPs[2].vals[idx] as number}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-16 md:grid-cols-2">
        <div className="mx-auto w-full max-w-[400px]">
          <PositiveControlBoard>
            <div className="''500 mb-auto mt-4 flex max-w-[500px] grow scale-75 flex-col gap-1">
              <CloneRow
                label={1}
                classNames={{
                  wrapper: `transition-all duration-500 ''500`,
                  button: P6CloneRowButtonColors[1],
                  row: P6CloneRowColors[1],
                }}
                key={1}
              >
                {cloneRowsMHPs[1].vals.map((val, idx2) => {
                  if (val === null) {
                    return (
                      <div
                        key={idx2}
                        className="aspect-square bg-white shadow-sm shadow-black"
                      ></div>
                    );
                  }
                  return <SquareMicrohaplotype id={val} key={idx2} />;
                })}
              </CloneRow>
              <CloneRow
                label={3}
                classNames={{
                  wrapper: `transition-all duration-500 ''500`,
                  button: P6CloneRowButtonColors[3],
                  row: P6CloneRowColors[3],
                }}
                key={2}
              >
                {cloneRowsMHPs[3].vals.map((val, idx2) => {
                  if (val === null) {
                    return (
                      <div
                        key={idx2}
                        className="aspect-square bg-white shadow-sm shadow-black"
                      ></div>
                    );
                  }
                  return <SquareMicrohaplotype id={val} key={idx2} />;
                })}
              </CloneRow>
            </div>
          </PositiveControlBoard>
        </div>
        <div>
          <div className="max-w-[400px]">
            <div className="mb-2 mt-4  text-center">
              <label className="text-sm">
                Composition of polyclonal positive control 1:3
              </label>
            </div>
            <div className="grid gap-x-1 [grid-template-columns:8%_auto]">
              <div className="my-auto flex min-h-10 w-full flex-col">
                <div
                  className={`mr-auto aspect-square h-6 translate-y-0.5 rounded-full ${P6CloneRowColors[1]}`}
                ></div>
                <div
                  className={`ml-auto aspect-square h-6 -translate-y-0.5 rounded-full ${P6CloneRowColors[3]}`}
                ></div>
              </div>
              <div className="col-start-2 grid grid-cols-12 gap-x-0.5 p-1 ">
                {Array(12)
                  .fill(0)
                  .map((el, idx) => {
                    return (
                      <div key={idx} className="grid grid-rows-2 gap-0.5">
                        <SquareMicrohaplotype
                          id={cloneRowsMHPs[1].vals[idx] as number}
                        />
                        <SquareMicrohaplotype
                          id={cloneRowsMHPs[3].vals[idx] as number}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="mb-2 mt-4  text-center">
              <label className="text-sm">
                Genotype of polyclonal positive control {1}:{3}
              </label>
            </div>
            <div className="grid gap-x-1 [grid-template-columns:8%_auto]">
              <div className="my-auto flex min-h-10 w-full flex-col">
                <div
                  className={`mr-auto aspect-square h-6 translate-y-0.5 rounded-full ${P6CloneRowColors[1]}`}
                ></div>
                <div
                  className={`ml-auto aspect-square h-6 -translate-y-0.5 rounded-full ${P6CloneRowColors[3]}`}
                ></div>
              </div>
              <div className="col-start-2 grid grid-cols-12 gap-x-0.5 p-1 ">
                {Array(12)
                  .fill(0)
                  .map((el, idx) => {
                    return (
                      <div key={idx} className="grid grid-rows-2 gap-0.5">
                        {cloneRowsMHPs[1].vals[idx] !==
                        cloneRowsMHPs[3].vals[idx] ? (
                          <SquareMicrohaplotype
                            id={cloneRowsMHPs[1].vals[idx] as number}
                          />
                        ) : null}
                        <SquareMicrohaplotype
                          id={cloneRowsMHPs[3].vals[idx] as number}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-16 md:grid-cols-2">
        <div className="mx-auto w-full max-w-[400px]">
          <PositiveControlBoard>
            <div className="''500 mb-auto mt-4 flex max-w-[500px] grow scale-75 flex-col gap-1">
              <CloneRow
                label={2}
                classNames={{
                  wrapper: `transition-all duration-500 ''500`,
                  button: P6CloneRowButtonColors[1],
                  row: P6CloneRowColors[1],
                }}
                key={1}
              >
                {cloneRowsMHPs[2].vals.map((val, idx2) => {
                  if (val === null) {
                    return (
                      <div
                        key={idx2}
                        className="aspect-square bg-white shadow-sm shadow-black"
                      ></div>
                    );
                  }
                  return <SquareMicrohaplotype id={val} key={idx2} />;
                })}
              </CloneRow>
              <CloneRow
                label={3}
                classNames={{
                  wrapper: `transition-all duration-500 ''500`,
                  button: P6CloneRowButtonColors[3],
                  row: P6CloneRowColors[3],
                }}
                key={2}
              >
                {cloneRowsMHPs[3].vals.map((val, idx2) => {
                  if (val === null) {
                    return (
                      <div
                        key={idx2}
                        className="aspect-square bg-white shadow-sm shadow-black"
                      ></div>
                    );
                  }
                  return <SquareMicrohaplotype id={val} key={idx2} />;
                })}
              </CloneRow>
            </div>
          </PositiveControlBoard>
        </div>
        <div>
          <div className="max-w-[400px]">
            <div className="mb-2 mt-4  text-center">
              <label className="text-sm">
                Composition of polyclonal positive control 2:3
              </label>
            </div>
            <div className="grid gap-x-1 [grid-template-columns:8%_auto]">
              <div className="my-auto flex min-h-10 w-full flex-col">
                <div
                  className={`mr-auto aspect-square h-6 translate-y-0.5 rounded-full ${P6CloneRowColors[1]}`}
                ></div>
                <div
                  className={`ml-auto aspect-square h-6 -translate-y-0.5 rounded-full ${P6CloneRowColors[3]}`}
                ></div>
              </div>
              <div className="col-start-2 grid grid-cols-12 gap-x-0.5 p-1 ">
                {Array(12)
                  .fill(0)
                  .map((el, idx) => {
                    return (
                      <div key={idx} className="grid grid-rows-2 gap-0.5">
                        <SquareMicrohaplotype
                          id={cloneRowsMHPs[2].vals[idx] as number}
                        />
                        <SquareMicrohaplotype
                          id={cloneRowsMHPs[3].vals[idx] as number}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="mb-2 mt-4  text-center">
              <label className="text-sm">
                Genotype of polyclonal positive control {2}:{3}
              </label>
            </div>
            <div className="grid gap-x-1 [grid-template-columns:8%_auto]">
              <div className="my-auto flex min-h-10 w-full flex-col">
                <div
                  className={`mr-auto aspect-square h-6 translate-y-0.5 rounded-full ${P6CloneRowColors[1]}`}
                ></div>
                <div
                  className={`ml-auto aspect-square h-6 -translate-y-0.5 rounded-full ${P6CloneRowColors[3]}`}
                ></div>
              </div>
              <div className="col-start-2 grid grid-cols-12 gap-x-0.5 p-1 ">
                {Array(12)
                  .fill(0)
                  .map((el, idx) => {
                    return (
                      <div key={idx} className="grid grid-rows-2 gap-0.5">
                        {cloneRowsMHPs[2].vals[idx] !==
                        cloneRowsMHPs[3].vals[idx] ? (
                          <SquareMicrohaplotype
                            id={cloneRowsMHPs[2].vals[idx] as number}
                          />
                        ) : null}
                        <SquareMicrohaplotype
                          id={cloneRowsMHPs[3].vals[idx] as number}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <StandardLayout>
      <div>
        <P6MHPCloneRowsWithHybrid label={false} />
      </div>
      <div>
        <PositiveControlBoard>
          {phase === 51 && (
            <div className="''500 mb-auto mt-4 flex max-w-[500px] grow scale-75 flex-col gap-1">
              <CloneRow
                label={1}
                classNames={{
                  wrapper: `transition-all duration-500 ''500`,
                  button: P6CloneRowButtonColors[1],
                  row: P6CloneRowColors[1],
                }}
                key={1}
              >
                {cloneRowsMHPs[1].vals.map((val, idx2) => {
                  if (val === null) {
                    return (
                      <div
                        key={idx2}
                        className="aspect-square bg-white shadow-sm shadow-black"
                      ></div>
                    );
                  }
                  return <SquareMicrohaplotype id={val} key={idx2} />;
                })}
              </CloneRow>
              <CloneRow
                label={2}
                classNames={{
                  wrapper: `transition-all duration-500 ''500`,
                  button: P6CloneRowButtonColors[2],
                  row: P6CloneRowColors[2],
                }}
                key={2}
              >
                {cloneRowsMHPs[2].vals.map((val, idx2) => {
                  if (val === null) {
                    return (
                      <div
                        key={idx2}
                        className="aspect-square bg-white shadow-sm shadow-black"
                      ></div>
                    );
                  }
                  return <SquareMicrohaplotype id={val} key={idx2} />;
                })}
              </CloneRow>
            </div>
          )}
          {phase === 52 && (
            <div className="mb-auto mt-4 flex max-w-[500px] grow scale-75 flex-col gap-1">
              <CloneRow
                label={1}
                classNames={{
                  wrapper: `transition-all duration-500 ''500`,
                  button: P6CloneRowButtonColors[1],
                  row: P6CloneRowColors[1],
                }}
                key={1}
              >
                {cloneRowsMHPs[1].vals.map((val, idx2) => {
                  if (val === null) {
                    return (
                      <div
                        key={idx2}
                        className="aspect-square bg-white shadow-sm shadow-black"
                      ></div>
                    );
                  }
                  return <SquareMicrohaplotype id={val} key={idx2} />;
                })}
              </CloneRow>
              <CloneRow
                label={3}
                classNames={{
                  wrapper: `transition-all duration-500 ''500`,
                  button: P6CloneRowButtonColors[3],
                  row: P6CloneRowColors[3],
                }}
                key={2}
              >
                {cloneRowsMHPs[3].vals.map((val, idx2) => {
                  if (val === null) {
                    return (
                      <div
                        key={idx2}
                        className="aspect-square bg-white shadow-sm shadow-black"
                      ></div>
                    );
                  }
                  return <SquareMicrohaplotype id={val} key={idx2} />;
                })}
              </CloneRow>
            </div>
          )}
          {phase === 53 && (
            <div className="mb-auto mt-4 flex max-w-[500px] grow scale-75 flex-col gap-1">
              <CloneRow
                label={2}
                classNames={{
                  wrapper: `transition-all duration-500 ''500`,
                  button: P6CloneRowButtonColors[2],
                  row: P6CloneRowColors[2],
                }}
                key={1}
              >
                {cloneRowsMHPs[2].vals.map((val, idx2) => {
                  if (val === null) {
                    return (
                      <div
                        key={idx2}
                        className="aspect-square bg-white shadow-sm shadow-black"
                      ></div>
                    );
                  }
                  return <SquareMicrohaplotype id={val} key={idx2} />;
                })}
              </CloneRow>
              <CloneRow
                label={3}
                classNames={{
                  wrapper: `transition-all duration-500 ''500`,
                  button: P6CloneRowButtonColors[3],
                  row: P6CloneRowColors[3],
                }}
                key={2}
              >
                {cloneRowsMHPs[3].vals.map((val, idx2) => {
                  if (val === null) {
                    return (
                      <div
                        key={idx2}
                        className="aspect-square bg-white shadow-sm shadow-black"
                      ></div>
                    );
                  }
                  return <SquareMicrohaplotype id={val} key={idx2} />;
                })}
              </CloneRow>
            </div>
          )}
        </PositiveControlBoard>
      </div>
    </StandardLayout>
  );
}
