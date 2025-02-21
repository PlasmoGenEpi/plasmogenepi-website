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
  phase2Atom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { compareUnorderedArrays } from "@/helpers/helpers";
import SquareMicrohaplotype from "../../Shared/Microhaplotypes/SquareMicrohaplotype";
import { useEffect } from "react";
import { currentView2Atom } from "../../Shared/InteractiveViewer/InteractiveViewer";

export default function PartSixNavArray({ forwards }: { forwards: boolean }) {
  const [phase2, setPhase2] = useAtom(phase2Atom);
  const cloneRows = useAtomValue(partSixCloneRowsAtom);
  const cloneRowsMHPs = useAtomValue(partSixCloneRowsMHPsAtom);
  const [activePairwiseCombo, setActivePairwiseCombo] = useAtom(
    activePairwiseComboAtom
  );
  const [activePairwiseMHPsCombo, setActivePairwiseMHPsCombo] = useAtom(
    activePairwiseMHPsComboAtom
  );
  const completion = useAtomValue(partSixCompletionAtom);
  const setCurrentView = useSetAtom(currentView2Atom);

  console.log(completion);

  return (
    <div className="dark:brightness-75">
      {phase2 <= 2 && (
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
      {phase2 >= 3 && phase2 <= 5 && (
        <div className={` grid place-items-center gap-8 md:grid-cols-3`}>
          <button
            data-tip="Clones 1 & 2"
            onClick={() => {
              setActivePairwiseCombo([1, 2]);
              // setPhase2(3);
              setCurrentView({
                module: "5.6",
                section: 1,
                phase: 3,
              });
            }}
            className={`${
              phase2 === 3
                ? "outline outline-2 outline-offset-4  outline-interactiveBlue"
                : "[&>*]:opacity-50"
            } +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open p-2`}
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
                      className={`aspect-square border ${microhaplotypeColorMap.get(
                        JSON.stringify(getRowConfiguration(val as number))
                      )}`}
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
                      className={`aspect-square border ${microhaplotypeColorMap.get(
                        JSON.stringify(getRowConfiguration(val))
                      )}`}
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
                // setPhase2(4);
                setCurrentView({
                  module: "5.6",
                  section: 1,
                  phase: 4,
                });
              }}
              className={`${
                phase2 === 4
                  ? "outline outline-2 outline-offset-4  outline-interactiveBlue"
                  : "[&>*]:opacity-50"
              } +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open p-2`}
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val as number))
                        )}`}
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val))
                        )}`}
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
                // setPhase2(5);
                setCurrentView({
                  module: "5.6",
                  section: 1,
                  phase: 5,
                });
              }}
              className={`          ${
                phase2 === 5
                  ? "outline outline-2 outline-offset-4  outline-interactiveBlue"
                  : "[&>*]:opacity-50"
              } +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open p-2`}
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val as number))
                        )}`}
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val as number))
                        )}`}
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
      {phase2 >= 8 && phase2 <= 10 && (
        <div className="grid grid-cols-3 place-items-center">
          {
            <button
              onClick={() => {
                setCurrentView({ module: "5.6", section: 1, phase: 8 });
              }}
              className={`${
                phase2 === 8
                  ? "outline-2 outline-offset-4 outline outline-interactiveBlue"
                  : "opacity-50"
              } text-xl text-center text-current my-auto [font-variant:all-small-caps] p-2 transition-all`}
            >
              <svg
                width="36pt"
                height="36pt"
                version="1.1"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="m1152.2 600c0 304.97-247.22 552.19-552.19 552.19-304.92 0-552.19-247.22-552.19-552.19s247.22-552.19 552.19-552.19 552.19 247.22 552.19 552.19zm-552.19 351.52c31.266 0 56.625-25.359 56.625-56.625s-25.359-56.625-56.625-56.625-56.625 25.359-56.625 56.625 25.359 56.625 56.625 56.625zm-220.69-479.53h106.88c0-31.453 12.656-59.859 33.141-80.25 44.391-44.344 116.95-44.344 161.39 0 55.172 55.078 39.047 148.36-30.469 182.44-64.594 31.641-103.69 94.031-103.69 165.71v53.719h106.88v-53.719c0-31.031 15.891-56.578 43.547-70.125 75.188-36.844 123.71-112.97 123.71-197.76 0-121.4-99.047-220.36-220.69-220.36-121.64 0-220.69 98.953-220.69 220.36z" />
              </svg>

              {/* <span className="block translate-y-0.5">Knowledge Check</span> */}
            </button>
          }
          {completion[8] && (
            <button
              onClick={() => {
                setCurrentView({ module: "5.6", section: 1, phase: 9 });
              }}
              className={`${
                phase2 === 9
                  ? "outline-2 outline-offset-4 outline outline-interactiveBlue"
                  : "opacity-50"
              } text-xl text-center text-current my-auto [font-variant:all-small-caps] p-2 transition-all`}
            >
              <svg
                width="36pt"
                height="36pt"
                version="1.1"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="m1152.2 600c0 304.97-247.22 552.19-552.19 552.19-304.92 0-552.19-247.22-552.19-552.19s247.22-552.19 552.19-552.19 552.19 247.22 552.19 552.19zm-552.19 351.52c31.266 0 56.625-25.359 56.625-56.625s-25.359-56.625-56.625-56.625-56.625 25.359-56.625 56.625 25.359 56.625 56.625 56.625zm-220.69-479.53h106.88c0-31.453 12.656-59.859 33.141-80.25 44.391-44.344 116.95-44.344 161.39 0 55.172 55.078 39.047 148.36-30.469 182.44-64.594 31.641-103.69 94.031-103.69 165.71v53.719h106.88v-53.719c0-31.031 15.891-56.578 43.547-70.125 75.188-36.844 123.71-112.97 123.71-197.76 0-121.4-99.047-220.36-220.69-220.36-121.64 0-220.69 98.953-220.69 220.36z" />
              </svg>

              {/* <span className="block translate-y-0.5">Knowledge Check</span> */}
            </button>
          )}
          {completion[9] && (
            <button
              onClick={() => {
                setCurrentView({ module: "5.6", section: 1, phase: 10 });
              }}
              className={`${
                phase2 === 10
                  ? "outline-2 outline-offset-4 outline outline-interactiveBlue"
                  : "opacity-50"
              } text-xl text-center text-current my-auto [font-variant:all-small-caps] p-2 transition-all`}
            >
              <svg
                width="36pt"
                height="36pt"
                version="1.1"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="m1152.2 600c0 304.97-247.22 552.19-552.19 552.19-304.92 0-552.19-247.22-552.19-552.19s247.22-552.19 552.19-552.19 552.19 247.22 552.19 552.19zm-552.19 351.52c31.266 0 56.625-25.359 56.625-56.625s-25.359-56.625-56.625-56.625-56.625 25.359-56.625 56.625 25.359 56.625 56.625 56.625zm-220.69-479.53h106.88c0-31.453 12.656-59.859 33.141-80.25 44.391-44.344 116.95-44.344 161.39 0 55.172 55.078 39.047 148.36-30.469 182.44-64.594 31.641-103.69 94.031-103.69 165.71v53.719h106.88v-53.719c0-31.031 15.891-56.578 43.547-70.125 75.188-36.844 123.71-112.97 123.71-197.76 0-121.4-99.047-220.36-220.69-220.36-121.64 0-220.69 98.953-220.69 220.36z" />
              </svg>

              {/* <span className="block translate-y-0.5">Knowledge Check</span> */}
            </button>
          )}
        </div>
      )}
      {phase2 >= 12 && phase2 <= 14.5 && (
        <div
          className={` grid grid-cols-3 @4xl/main:grid-cols-5 place-items-center gap-8 [&>button]:mx-auto`}
        >
          <button
            data-tip="Clones 1 & 4"
            onClick={() => {
              setActivePairwiseCombo([1, 4]);
              // setPhase2(12);
              setCurrentView({
                module: "5.6",
                section: 1,
                phase: 12,
              });
            }}
            className={`          ${
              phase2 === 12
                ? "outline outline-2 outline-offset-4  outline-interactiveBlue"
                : "[&>*]:opacity-50"
            } +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open p-2`}
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
                      className={`aspect-square border ${microhaplotypeColorMap.get(
                        JSON.stringify(getRowConfiguration(val as number))
                      )}`}
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
                      className={`aspect-square border ${microhaplotypeColorMap.get(
                        JSON.stringify(getRowConfiguration(val))
                      )}`}
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
                // setPhase2(13);
                setCurrentView({
                  module: "5.6",
                  section: 1,
                  phase: 13,
                });
              }}
              className={`          ${
                phase2 === 13
                  ? "outline outline-2 outline-offset-4  outline-interactiveBlue"
                  : "[&>*]:opacity-50"
              } +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open p-2`}
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val as number))
                        )}`}
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val))
                        )}`}
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
          {completion[13] && (
            <button
              onClick={() => {
                setCurrentView({ module: "5.6", section: 1, phase: 13.5 });
              }}
              className={`${
                phase2 === 13.5
                  ? "outline-2 outline-offset-4 outline outline-interactiveBlue"
                  : "opacity-50"
              } text-xl text-center text-current my-auto [font-variant:all-small-caps] p-2 transition-all`}
            >
              <svg
                width="36pt"
                height="36pt"
                version="1.1"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="m1152.2 600c0 304.97-247.22 552.19-552.19 552.19-304.92 0-552.19-247.22-552.19-552.19s247.22-552.19 552.19-552.19 552.19 247.22 552.19 552.19zm-552.19 351.52c31.266 0 56.625-25.359 56.625-56.625s-25.359-56.625-56.625-56.625-56.625 25.359-56.625 56.625 25.359 56.625 56.625 56.625zm-220.69-479.53h106.88c0-31.453 12.656-59.859 33.141-80.25 44.391-44.344 116.95-44.344 161.39 0 55.172 55.078 39.047 148.36-30.469 182.44-64.594 31.641-103.69 94.031-103.69 165.71v53.719h106.88v-53.719c0-31.031 15.891-56.578 43.547-70.125 75.188-36.844 123.71-112.97 123.71-197.76 0-121.4-99.047-220.36-220.69-220.36-121.64 0-220.69 98.953-220.69 220.36z" />
              </svg>

              {/* <span className="block translate-y-0.5">Knowledge Check</span> */}
            </button>
          )}
          {completion[13.5] && (
            <button
              data-tip="Clones 3 & 4"
              onClick={() => {
                setActivePairwiseCombo([3, 4]);
                // setPhase2(14);
                setCurrentView({
                  module: "5.6",
                  section: 1,
                  phase: 14,
                });
              }}
              className={`          ${
                phase2 === 14
                  ? "outline outline-2 outline-offset-4  outline-interactiveBlue"
                  : "[&>*]:opacity-50"
              } +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open p-2`}
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val as number))
                        )}`}
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val as number))
                        )}`}
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
          {completion[14] && (
            <button
              data-tip="Clones X & X"
              onClick={() => {
                // setActivePairwiseMHPsCombo([1, 2]);
                // setPhase2(23);
                setCurrentView({
                  module: "5.6",
                  section: 1,
                  phase: 14.5,
                });
              }}
              className={`          ${
                phase2 === 14.5
                  ? "outline outline-2 outline-offset-4  outline-interactiveBlue"
                  : "[&>*]:opacity-50"
              } +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open p-2`}
            >
              <div className="w-full text-center text-sm font-bold">
                <label>Clones X & X</label>
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val as number))
                        )}`}
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val))
                        )}`}
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
      {(phase2 === 22 || phase2 === 22.5) && (
        <div className={"mx-auto grid max-w-[400px] grid-cols-8 gap-1"}>
          {Array(8)
            .fill(0)
            .map((el, idx) => {
              return <SquareMicrohaplotype id={idx} key={idx} />;
            })}
        </div>
      )}
      {phase2 >= 23 && phase2 <= 25 && (
        <div className={` grid grid-cols-3 place-items-center gap-8`}>
          <button
            data-tip="Clones 1 & 2"
            onClick={() => {
              setActivePairwiseMHPsCombo([1, 2]);
              // setPhase2(23);
              setCurrentView({
                module: "5.6",
                section: 1,
                phase: 23,
              });
            }}
            className={`          ${
              phase2 === 23
                ? "outline outline-2 outline-offset-4  outline-interactiveBlue"
                : "[&>*]:opacity-50"
            } +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open p-2`}
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
                      className={`aspect-square border ${microhaplotypeColorMap.get(
                        JSON.stringify(getRowConfiguration(val as number))
                      )}`}
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
                      className={`aspect-square border ${microhaplotypeColorMap.get(
                        JSON.stringify(getRowConfiguration(val))
                      )}`}
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
                // setPhase2(24);
                setCurrentView({
                  module: "5.6",
                  section: 1,
                  phase: 24,
                });
              }}
              className={`          ${
                phase2 === 24
                  ? "outline outline-2 outline-offset-4  outline-interactiveBlue"
                  : "[&>*]:opacity-50"
              } +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open p-2`}
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val as number))
                        )}`}
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val))
                        )}`}
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
                // setPhase2(25);
                setCurrentView({
                  module: "5.6",
                  section: 1,
                  phase: 25,
                });
              }}
              className={`          ${
                phase2 === 25
                  ? "outline outline-2 outline-offset-4  outline-interactiveBlue"
                  : "[&>*]:opacity-50"
              } +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open p-2`}
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val as number))
                        )}`}
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val as number))
                        )}`}
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
      {phase2 >= 30 && phase2 <= 32 && (
        <div className={` grid grid-cols-4 place-items-center gap-8`}>
          <button
            data-tip="Clones 1 & 4"
            onClick={() => {
              setActivePairwiseMHPsCombo([1, 4]);
              // setPhase2(30);
              setCurrentView({
                module: "5.6",
                section: 1,
                phase: 30,
              });
            }}
            className={`          ${
              phase2 === 30
                ? "outline outline-2 outline-offset-4  outline-interactiveBlue"
                : "[&>*]:opacity-50"
            } +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open p-2`}
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
                      className={`aspect-square border ${microhaplotypeColorMap.get(
                        JSON.stringify(getRowConfiguration(val as number))
                      )}`}
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
                      className={`aspect-square border ${microhaplotypeColorMap.get(
                        JSON.stringify(getRowConfiguration(val))
                      )}`}
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
                // setPhase2(31);
                setCurrentView({
                  module: "5.6",
                  section: 1,
                  phase: 31,
                });
              }}
              className={`          ${
                phase2 === 31
                  ? "outline outline-2 outline-offset-4  outline-interactiveBlue"
                  : "[&>*]:opacity-50"
              } +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open p-2`}
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val as number))
                        )}`}
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val))
                        )}`}
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
          {completion[31] && (
            <button
              onClick={() => {
                setCurrentView({ module: "5.6", section: 1, phase: 31.5 });
              }}
              className={`${
                phase2 === 31.5
                  ? "outline-2 outline-offset-4 outline outline-interactiveBlue"
                  : "opacity-50"
              } text-xl text-center text-current my-auto [font-variant:all-small-caps] p-2 transition-all`}
            >
              <svg
                width="36pt"
                height="36pt"
                version="1.1"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="m1152.2 600c0 304.97-247.22 552.19-552.19 552.19-304.92 0-552.19-247.22-552.19-552.19s247.22-552.19 552.19-552.19 552.19 247.22 552.19 552.19zm-552.19 351.52c31.266 0 56.625-25.359 56.625-56.625s-25.359-56.625-56.625-56.625-56.625 25.359-56.625 56.625 25.359 56.625 56.625 56.625zm-220.69-479.53h106.88c0-31.453 12.656-59.859 33.141-80.25 44.391-44.344 116.95-44.344 161.39 0 55.172 55.078 39.047 148.36-30.469 182.44-64.594 31.641-103.69 94.031-103.69 165.71v53.719h106.88v-53.719c0-31.031 15.891-56.578 43.547-70.125 75.188-36.844 123.71-112.97 123.71-197.76 0-121.4-99.047-220.36-220.69-220.36-121.64 0-220.69 98.953-220.69 220.36z" />
              </svg>
            </button>
          )}
          {completion[31.5] && (
            <button
              data-tip="Clones 3 & 4"
              onClick={() => {
                setActivePairwiseMHPsCombo([3, 4]);
                // setPhase2(32);
                setCurrentView({
                  module: "5.6",
                  section: 1,
                  phase: 32,
                });
              }}
              className={`          ${
                phase2 === 32
                  ? "outline outline-2 outline-offset-4  outline-interactiveBlue"
                  : "[&>*]:opacity-50"
              } +
tooltip flex  w-full max-w-[200px] flex-col gap-1 transition-all focus:tooltip-open p-2`}
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val as number))
                        )}`}
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
                        className={`aspect-square border ${microhaplotypeColorMap.get(
                          JSON.stringify(getRowConfiguration(val as number))
                        )}`}
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
