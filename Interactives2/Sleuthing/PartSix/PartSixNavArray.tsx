import { fixedData } from "@/data/Interactives/fixedData";
import AlternateRow from "../PartOne/CloneRowTable/AlternateRow";
import RefRow from "../PartOne/CloneRowTable/RefRow";
import {
  getRowConfiguration,
  microhaplotypeColorMap,
} from "../../Shared/Microhaplotypes/MicrohaplotypeTable/MicrohaplotypeTableRow";
import {
  P6CloneRowButtonColors,
  P6CloneRowColors,
} from "./CloneRows/P6MHPCloneRows";
import {
  activePairwiseComboAtom,
  activePairwiseMHPsComboAtom,
  partSixCloneRowsAtom,
  partSixCloneRowsMHPsAtom,
  partSixCompletionAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { compareUnorderedArrays } from "@/helpers/helpers";
import SquareMicrohaplotype from "../../Shared/Microhaplotypes/SquareMicrohaplotype";
import { useEffect } from "react";

export default function PartSixNavArray({ forwards }: { forwards: boolean }) {
  const [phase, setPhase] = useAtom(phaseAtom);
  const cloneRows = useAtomValue(partSixCloneRowsAtom);
  const cloneRowsMHPs = useAtomValue(partSixCloneRowsMHPsAtom);
  const [activePairwiseCombo, setActivePairwiseCombo] = useAtom(
    activePairwiseComboAtom,
  );
  const [activePairwiseMHPsCombo, setActivePairwiseMHPsCombo] = useAtom(
    activePairwiseMHPsComboAtom,
  );
  const completion = useAtomValue(partSixCompletionAtom);

  return (
    <div>
      {phase <= 2 && (
        <div className={"mx-auto w-full max-w-[500px]"}>
          <RefRow
            refValues={fixedData[6].refValues}
            altValues={fixedData[6].altValues}
          />
          <AlternateRow
            refValues={fixedData[6].refValues}
            altValues={fixedData[6].altValues}
          />
        </div>
      )}
      {phase >= 3 && phase <= 5 && (
        <div
          className={`fadeIn500 grid place-items-center gap-8 md:grid-cols-3`}
        >
          <button
            data-tip="Clones 1 & 2"
            onClick={() => {
              setActivePairwiseCombo([1, 2]);
              setPhase(3);
            }}
            className={`${phase === 3 ? "outline outline-2 outline-offset-4 outline-primaryBlue" : "[&>*]:opacity-50"} +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open`}
          >
            <div className="w-full text-center text-sm font-bold">
              <label>Clones 1 & 2</label>
            </div>
            <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
              <div
                className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[1]}`}
              ></div>
              <div
                className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[1]} p-0.5`}
              >
                {cloneRowsMHPs[1].vals.map((val, idx) => {
                  return (
                    <div
                      className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val as number)))}`}
                      key={idx}
                    >
                      <div className="h-full w-full bg-white"></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
              <div
                className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[2]}`}
              ></div>
              <div
                className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[2]} p-0.5`}
              >
                {cloneRowsMHPs[2].vals.map((val, idx) => {
                  return (
                    <div
                      className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val)))}`}
                      key={idx}
                    >
                      <div className="h-full w-full bg-white"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </button>
          {completion[3] && (
            <button
              data-tip="Clones 1 & 3"
              onClick={() => {
                setActivePairwiseCombo([1, 3]);
                setPhase(4);
              }}
              className={`${phase === 4 ? "outline outline-2 outline-offset-4 outline-primaryBlue" : "[&>*]:opacity-50"} +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open`}
            >
              {" "}
              <div className="w-full text-center text-sm font-bold">
                <label>Clones 1 & 3</label>
              </div>
              <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
                <div
                  className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[1]}`}
                ></div>
                <div
                  className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[1]} p-0.5`}
                >
                  {cloneRowsMHPs[1].vals.map((val, idx) => {
                    return (
                      <div
                        className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val as number)))}`}
                        key={idx}
                      >
                        <div className="h-full w-full bg-white"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
                <div
                  className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[3]}`}
                ></div>
                <div
                  className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[3]} p-0.5`}
                >
                  {cloneRowsMHPs[3].vals.map((val, idx) => {
                    return (
                      <div
                        className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val)))}`}
                        key={idx}
                      >
                        <div className="h-full w-full bg-white"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </button>
          )}
          {completion[4] && (
            <button
              data-tip="Clones 2 & 3"
              onClick={() => {
                setActivePairwiseCombo([2, 3]);
                setPhase(5);
              }}
              className={`          ${phase === 5 ? "outline outline-2 outline-offset-4 outline-primaryBlue" : "[&>*]:opacity-50"} +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open`}
            >
              {" "}
              <div className="w-full text-center text-sm font-bold">
                <label>Clones 2 & 3</label>
              </div>
              <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
                <div
                  className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[2]}`}
                ></div>
                <div
                  className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[2]} p-0.5`}
                >
                  {cloneRowsMHPs[2].vals.map((val, idx) => {
                    return (
                      <div
                        className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val as number)))}`}
                        key={idx}
                      >
                        <div className="h-full w-full bg-white"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
                <div
                  className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[3]}`}
                ></div>
                <div
                  className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[3]} p-0.5`}
                >
                  {cloneRowsMHPs[3].vals.map((val, idx) => {
                    return (
                      <div
                        className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val as number)))}`}
                        key={idx}
                      >
                        <div className="h-full w-full bg-white"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </button>
          )}
        </div>
      )}
      {phase >= 12 && phase <= 14 && (
        <div className={`fadeIn500 grid grid-cols-3 place-items-center gap-8`}>
          <button
            data-tip="Clones 1 & 4"
            onClick={() => {
              setActivePairwiseCombo([1, 4]);
              setPhase(12);
            }}
            className={`          ${phase === 12 ? "outline outline-2 outline-offset-4 outline-primaryBlue" : "[&>*]:opacity-50"} +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open`}
          >
            <div className="w-full text-center text-sm font-bold">
              <label>Clones 1 & 4</label>
            </div>
            <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
              <div
                className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[1]}`}
              ></div>
              <div
                className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[1]} p-0.5`}
              >
                {cloneRowsMHPs[1].vals.map((val, idx) => {
                  return (
                    <div
                      className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val as number)))}`}
                      key={idx}
                    >
                      <div className="h-full w-full bg-white"></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
              <div className="border-red-blue-rounded-thumbnail relative flex aspect-square items-center justify-center overflow-hidden rounded-full"></div>
              <div
                className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[2]} p-0.5`}
              >
                {cloneRowsMHPs[2].vals.map((val, idx) => {
                  return (
                    <div
                      className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val)))}`}
                      key={idx}
                    >
                      <div className="h-full w-full bg-white"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </button>
          {completion[12] && (
            <button
              data-tip="Clones 2 & 4"
              onClick={() => {
                setActivePairwiseCombo([2, 4]);
                setPhase(13);
              }}
              className={`          ${phase === 13 ? "outline outline-2 outline-offset-4 outline-primaryBlue" : "[&>*]:opacity-50"} +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open`}
            >
              <div className="w-full text-center text-sm font-bold">
                <label>Clones 2 & 4</label>
              </div>
              <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
                <div
                  className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[2]}`}
                ></div>
                <div
                  className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[2]} p-0.5`}
                >
                  {cloneRowsMHPs[2].vals.map((val, idx) => {
                    return (
                      <div
                        className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val as number)))}`}
                        key={idx}
                      >
                        <div className="h-full w-full bg-white"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
                <div className="border-red-blue-rounded-thumbnail relative flex aspect-square items-center justify-center overflow-hidden rounded-full"></div>
                <div
                  className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[4]} p-0.5`}
                >
                  {cloneRowsMHPs[4].vals.map((val, idx) => {
                    return (
                      <div
                        className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val)))}`}
                        key={idx}
                      >
                        <div className="h-full w-full bg-white"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </button>
          )}
          {completion[13.5] && (
            <button
              data-tip="Clones 3 & 4"
              onClick={() => {
                setActivePairwiseCombo([3, 4]);
                setPhase(14);
              }}
              className={`          ${phase === 14 ? "outline outline-2 outline-offset-4 outline-primaryBlue" : "[&>*]:opacity-50"} +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open`}
            >
              <div className="w-full text-center text-sm font-bold">
                <label>Clones 3 & 4</label>
              </div>
              <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
                <div
                  className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[3]}`}
                ></div>
                <div
                  className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[3]} p-0.5`}
                >
                  {cloneRowsMHPs[2].vals.map((val, idx) => {
                    return (
                      <div
                        className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val as number)))}`}
                        key={idx}
                      >
                        <div className="h-full w-full bg-white"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
                <div className="border-red-blue-rounded-thumbnail relative flex aspect-square items-center justify-center overflow-hidden rounded-full"></div>
                <div
                  className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[4]} p-0.5`}
                >
                  {cloneRowsMHPs[4].vals.map((val, idx) => {
                    return (
                      <div
                        className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val as number)))}`}
                        key={idx}
                      >
                        <div className="h-full w-full bg-white"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </button>
          )}
        </div>
      )}
      {(phase === 22 || phase === 22.5) && (
        <div className={"mx-auto grid max-w-[400px] grid-cols-8 gap-1"}>
          {Array(8)
            .fill(0)
            .map((el, idx) => {
              return <SquareMicrohaplotype id={idx} key={idx} />;
            })}
        </div>
      )}
      {phase >= 23 && phase <= 25 && (
        <div className={`fadeIn500 grid grid-cols-3 place-items-center gap-8`}>
          <button
            data-tip="Clones 1 & 2"
            onClick={() => {
              setActivePairwiseMHPsCombo([1, 2]);
              setPhase(23);
            }}
            className={`          ${phase === 23 ? "outline outline-2 outline-offset-4 outline-primaryBlue" : "[&>*]:opacity-50"} +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open`}
          >
            <div className="w-full text-center text-sm font-bold">
              <label>Clones 1 & 2</label>
            </div>
            <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
              <div
                className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[1]}`}
              ></div>
              <div
                className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[1]} p-0.5`}
              >
                {cloneRowsMHPs[1].vals.map((val, idx) => {
                  return (
                    <div
                      className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val as number)))}`}
                      key={idx}
                    >
                      <div className="h-full w-full bg-white"></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
              <div
                className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[2]}`}
              ></div>
              <div
                className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[2]} p-0.5`}
              >
                {cloneRowsMHPs[2].vals.map((val, idx) => {
                  return (
                    <div
                      className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val)))}`}
                      key={idx}
                    >
                      <div className="h-full w-full bg-white"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </button>
          {completion[23] && (
            <button
              data-tip="Clones 1 & 3"
              onClick={() => {
                setActivePairwiseMHPsCombo([1, 3]);
                setPhase(24);
              }}
              className={`          ${phase === 24 ? "outline outline-2 outline-offset-4 outline-primaryBlue" : "[&>*]:opacity-50"} +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open`}
            >
              <div className="w-full text-center text-sm font-bold">
                <label>Clones 1 & 3</label>
              </div>
              <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
                <div
                  className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[1]}`}
                ></div>
                <div
                  className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[1]} p-0.5`}
                >
                  {cloneRowsMHPs[1].vals.map((val, idx) => {
                    return (
                      <div
                        className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val as number)))}`}
                        key={idx}
                      >
                        <div className="h-full w-full bg-white"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
                <div
                  className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[3]}`}
                ></div>
                <div
                  className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[3]} p-0.5`}
                >
                  {cloneRowsMHPs[3].vals.map((val, idx) => {
                    return (
                      <div
                        className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val)))}`}
                        key={idx}
                      >
                        <div className="h-full w-full bg-white"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </button>
          )}
          {completion[24] && (
            <button
              data-tip="Clones 2 & 3"
              onClick={() => {
                setActivePairwiseMHPsCombo([2, 3]);
                setPhase(25);
              }}
              className={`          ${phase === 25 ? "outline outline-2 outline-offset-4 outline-primaryBlue" : "[&>*]:opacity-50"} +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open`}
            >
              <div className="w-full text-center text-sm font-bold">
                <label>Clones 2 & 3</label>
              </div>
              <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
                <div
                  className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[2]}`}
                ></div>
                <div
                  className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[2]} p-0.5`}
                >
                  {cloneRowsMHPs[2].vals.map((val, idx) => {
                    return (
                      <div
                        className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val as number)))}`}
                        key={idx}
                      >
                        <div className="h-full w-full bg-white"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
                <div
                  className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[3]}`}
                ></div>
                <div
                  className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[3]} p-0.5`}
                >
                  {cloneRowsMHPs[3].vals.map((val, idx) => {
                    return (
                      <div
                        className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val as number)))}`}
                        key={idx}
                      >
                        <div className="h-full w-full bg-white"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </button>
          )}
        </div>
      )}
      {phase >= 30 && phase <= 32 && (
        <div className={`fadeIn500 grid grid-cols-3 place-items-center gap-8`}>
          <button
            data-tip="Clones 1 & 4"
            onClick={() => {
              setActivePairwiseMHPsCombo([1, 4]);
              setPhase(30);
            }}
            className={`          ${phase === 30 ? "outline outline-2 outline-offset-4 outline-primaryBlue" : "[&>*]:opacity-50"} +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open`}
          >
            <div className="w-full text-center text-sm font-bold">
              <label>Clones 1 & 4</label>
            </div>
            <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
              <div
                className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[1]}`}
              ></div>
              <div
                className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[1]} p-0.5`}
              >
                {cloneRowsMHPs[1].vals.map((val, idx) => {
                  return (
                    <div
                      className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val as number)))}`}
                      key={idx}
                    >
                      <div className="h-full w-full bg-white"></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
              <div className="border-red-blue-rounded-thumbnail relative flex aspect-square items-center justify-center overflow-hidden rounded-full"></div>
              <div
                className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[2]} p-0.5`}
              >
                {cloneRowsMHPs[2].vals.map((val, idx) => {
                  return (
                    <div
                      className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val)))}`}
                      key={idx}
                    >
                      <div className="h-full w-full bg-white"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </button>
          {completion[30] && (
            <button
              data-tip="Clones 2 & 4"
              onClick={() => {
                setActivePairwiseMHPsCombo([2, 4]);
                setPhase(31);
              }}
              className={`          ${phase === 31 ? "outline outline-2 outline-offset-4 outline-primaryBlue" : "[&>*]:opacity-50"} +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open`}
            >
              <div className="w-full text-center text-sm font-bold">
                <label>Clones 2 & 4</label>
              </div>
              <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
                <div
                  className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[2]}`}
                ></div>
                <div
                  className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[2]} p-0.5`}
                >
                  {cloneRowsMHPs[2].vals.map((val, idx) => {
                    return (
                      <div
                        className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val as number)))}`}
                        key={idx}
                      >
                        <div className="h-full w-full bg-white"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
                <div className="border-red-blue-rounded-thumbnail relative flex aspect-square items-center justify-center overflow-hidden rounded-full"></div>
                <div
                  className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[4]} p-0.5`}
                >
                  {cloneRowsMHPs[4].vals.map((val, idx) => {
                    return (
                      <div
                        className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val)))}`}
                        key={idx}
                      >
                        <div className="h-full w-full bg-white"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </button>
          )}
          {completion[31.5] && (
            <button
              data-tip="Clones 3 & 4"
              onClick={() => {
                setActivePairwiseMHPsCombo([3, 4]);
                setPhase(32);
              }}
              className={`          ${phase === 32 ? "outline outline-2 outline-offset-4 outline-primaryBlue" : "[&>*]:opacity-50"} +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open`}
            >
              <div className="w-full text-center text-sm font-bold">
                <label>Clones 3 & 4</label>
              </div>
              <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
                <div
                  className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[3]}`}
                ></div>
                <div
                  className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[3]} p-0.5`}
                >
                  {cloneRowsMHPs[3].vals.map((val, idx) => {
                    return (
                      <div
                        className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val as number)))}`}
                        key={idx}
                      >
                        <div className="h-full w-full bg-white"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="grid w-full gap-1 [grid-template-columns:8%_auto]">
                <div className="border-red-blue-rounded-thumbnail relative flex aspect-square items-center justify-center overflow-hidden rounded-full"></div>
                <div
                  className={`grid grid-cols-12 gap-0.5 ${P6CloneRowColors[4]} p-0.5`}
                >
                  {cloneRowsMHPs[4].vals.map((val, idx) => {
                    return (
                      <div
                        className={`aspect-square border ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(val as number)))}`}
                        key={idx}
                      >
                        <div className="h-full w-full bg-white"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
