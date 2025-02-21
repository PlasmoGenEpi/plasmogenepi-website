import { fixedData } from "@/data/Interactives/fixedData";
import Microhaplotype from "../Microhaplotype";
import MicrohaplotypeTableRow from "./MicrohaplotypeTableRow";
import { MicroId } from "@/helpers/helpers";

export default function MicrohaplotypeTable({
  referenceAlleles,
  alternateAlleles,
  activeColumn,
  callback,
  disabled,
  hint,
}: {
  hint?: MicroId;
  disabled?: boolean;
  callback?: (arrConfig: MicroId) => void;
  activeColumn: 0 | 1 | 2 | 3;
  referenceAlleles: string[];
  alternateAlleles: string[];
}) {
  return (
    <div className="fadeIn500 mx-auto flex max-w-[400px] flex-col border-2 border-black/20 md:mx-0">
      <div className="grid grid-cols-3 bg-gradient-to-b from-[#116F77] via-[#116F77] to-[#093F43] dark:brightness-75">
        <div className="col-span-2 grid grid-cols-3 border-b-[3px] border-black/20  text-center text-white">
          <div className="col-span-full py-2 text-center text-sm">SNPs</div>
          <span className="inline-block pb-1 text-center text-xs first-letter:text-sm">
            S{activeColumn * 3 + 1}
          </span>
          <span className="inline-block pb-1 text-center text-xs first-letter:text-sm">
            S{activeColumn * 3 + 2}
          </span>{" "}
          <span className="inline-block pb-1 text-center text-xs first-letter:text-sm">
            S{activeColumn * 3 + 3}
          </span>{" "}
        </div>
        <div className="flex flex-col justify-center border-b-[3px] border-black/20  text-white">
          <label className="py-2 text-center text-sm">Microhaplotype</label>
          <span className="inline-block pb-1 text-center text-xs first-letter:text-sm">
            M{activeColumn + 1}
          </span>{" "}
        </div>
      </div>
      {Array(8)
        .fill(0)
        .map((el, idx) => {
          return (
            <MicrohaplotypeTableRow
              hint={hint}
              disabled={disabled}
              callback={callback}
              key={idx}
              alternateAlleles={alternateAlleles}
              referenceAlleles={referenceAlleles}
              rowNum={idx}
              activeColumn={activeColumn}
            />
          );
        })}
      {/* <div className="col-span-2"></div> */}
    </div>
  );
  return (
    <div className="grid min-h-96 max-w-[500px] grid-cols-12">
      <div className="col-span-8">
        <h3 className="bg-primaryGreen py-4 text-center text-white">Loci</h3>
        <div className="grid grid-cols-3 text-center">
          <div className="">Ref</div>
          <div className="">Ref</div>
          <div className="">Ref</div>
        </div>
      </div>
      <div className="col-span-4 col-start-9 grid">
        <h3 className="h-min bg-primaryGreen py-4 text-center text-white">
          Microhaplotype
        </h3>
        <Microhaplotype
          childClassNames={{
            shared: "bg-white bg-opacity-80",
          }}
          className="border-2 border-microGreen bg-microGreen"
          vals={[0, 0, 0]}
          possibleVals={[
            {
              alternate: fixedData[1].altValues[0],
              reference: fixedData[1].refValues[0],
            },
            {
              alternate: fixedData[1].altValues[1],
              reference: fixedData[1].refValues[1],
            },
            {
              alternate: fixedData[1].altValues[2],
              reference: fixedData[1].refValues[2],
            },
          ]}
        />
      </div>
    </div>
  );
}
