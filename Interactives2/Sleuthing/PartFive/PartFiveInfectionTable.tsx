import { fixedData } from "@/data/Interactives/fixedData";
import {
  partFourInfectionsAtom,
  partTwoInfectionsAtom,
  selectedInfectionIndexAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";

export default function PartFiveInfectionTable() {
  const [activeIndex, setActiveIndex] = useAtom(selectedInfectionIndexAtom);
  const SNPInfections = useAtomValue(partTwoInfectionsAtom);
  const MHPInfections = useAtomValue(partFourInfectionsAtom);

  let SNPInfectionsCount = Array(5).fill(0);
  SNPInfections.forEach((inf) => {
    if (inf) {
      SNPInfectionsCount[inf - 1] += 1;
    }
  });

  let SNPInfectionAverage =
    SNPInfectionsCount.map((count, idx) => {
      return (count as number) * (idx + 1);
    }).reduce((a, b) => {
      return a + b;
    }) / 10;

  let MHPInfectionsCount = Array(5).fill(0);
  MHPInfections.forEach((inf) => {
    if (inf) {
      MHPInfectionsCount[inf - 1] += 1;
    }
  });

  let MHPInfectionAverage =
    MHPInfectionsCount.map((count, idx) => {
      return (count as number) * (idx + 1);
    }).reduce((a, b) => {
      return a + b;
    }) / 10;

  let trueCount = Array(5).fill(0);
  fixedData[2].infections.forEach((inf) => {
    trueCount[inf.trueMOI - 1]++;
  });

  let trueAverage =
    fixedData[2].infections
      .map((inf, idx) => {
        return inf.trueMOI;
      })
      .reduce((a, b) => {
        return a + b;
      }) / 10;

  return (
    <table className="table h-fit  border-2 border-primaryGreen/50  md:w-fit md:max-w-none">
      <thead>
        <tr>
          <th id="infection-header" className="w-[88px]">
            <div
              className="tooltip [--tooltip-color:rgb(39,39,42)] [--tooltip-font-size:12px] [--tooltip-text-color:rgb(229,_231,_235)] before:text-xs"
              data-tip="Infection"
              aria-label="Infection"
            >
              <span>Infection</span>
            </div>
            {/* <div
                  // htmlFor="infection-header"
                  data-tip="Infection"
                  className="tooltip bg-zinc-800 text-gray-200"
                  // className="absolute left-1/2 top-full z-10 hidden -translate-y-1/2 rounded bg-zinc-800  p-2 font-bold text-gray-200 hover:block group-hover:block"
                >
                  Infection
                </div>
                <div className="overflow-hidden overflow-ellipsis text-center ">
                  <span className="overflow-ellipsis">Infection #</span>
                </div> */}
          </th>{" "}
          <th
            aria-label="snp estimate"
            id="snp-header"
            className="group relative w-20 cursor-default"
          >
            <label
              htmlFor="snp-header"
              className="absolute left-1/2 top-full z-10 hidden -translate-y-1/2 rounded bg-zinc-800  p-2 font-bold text-gray-200 hover:block group-hover:block"
            >
              SNP Estimate
            </label>
            <div className="overflow-hidden overflow-ellipsis text-center ">
              <span className="overflow-ellipsis">SNP</span>
              <br></br>
              <span>Estimate</span>
            </div>
          </th>
          <th
            aria-label="microhaplotype estimate"
            id="micro-header"
            className="group relative w-20 cursor-default"
          >
            <label
              htmlFor="micro-header"
              className="absolute left-1/2 top-full z-10 hidden -translate-y-1/2 rounded bg-zinc-800  p-2 font-bold text-gray-200 hover:block group-hover:block"
            >
              Microhaplotype Estimate
            </label>
            <div className="overflow-hidden overflow-ellipsis text-center ">
              <span className="overflow-ellipsis">Microhaplotype</span>
              <br></br>
              <span>Estimate</span>
            </div>
          </th>
          <th
            aria-label="true MOI"
            id="true-header"
            className="group relative w-20 cursor-default"
          >
            <label
              htmlFor="true-header"
              className="absolute left-1/2 top-full z-10 hidden -translate-y-1/2 rounded bg-zinc-800 p-2 font-bold text-gray-200 hover:block group-hover:block"
            >
              True MOI
            </label>
            <div className="overflow-hidden overflow-ellipsis text-center ">
              <span className="overflow-ellipsis">True</span>
              <br></br>
              <span>MOI</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {fixedData[2].infections.map((inf, idx) => {
          return (
            <tr
              onKeyDown={(e) => {
                if (e.key === " ") {
                  e.preventDefault();
                  setActiveIndex(idx);
                }
              }}
              onClick={(e) => {
                setActiveIndex(idx);
              }}
              aria-roledescription={`select infection ${idx + 1}`}
              tabIndex={0}
              className={`cursor-pointer text-center hover:bg-primaryGreen/30 ${idx % 2 === 0 ? "" : "bg-gray-100"} ${activeIndex === idx ? "outline outline-2 -outline-offset-1 outline-black" : "text-black/50"}`}
              key={idx}
            >
              <td>
                <span>{idx + 1}</span>
              </td>
              <td
              // className={`${Math.abs(SNPInfections[idx] - inf.trueMOI) >= 2 ? "bg-red-500/20" : Math.abs(SNPInfections[idx] - inf.trueMOI) === 1 ? "bg-orange-500/20" : "bg-primaryBlue/20"}`}
              >
                <span>{SNPInfections[idx]}</span>
              </td>
              <td>
                <span>{MHPInfections[idx]}</span>
              </td>
              <td className="">
                <span>{inf.trueMOI}</span>
              </td>
            </tr>
          );
        })}
        <tr className="text-center">
          <td>Avg.</td>
          {/* <td>{SNPInfectionAverage}</td>
              <td>{MHPInfectionAverage}</td>
              <td>{trueAverage}</td> */}
        </tr>
      </tbody>
    </table>
  );
}
