import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import Image from "next/image";
import MHPHybridClone from "../Comparators/MHPs/MHPHybridClone";
import CloneRow from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import {
  P6CloneRowButtonColors,
  P6CloneRowColors,
} from "../CloneRows/P6MHPCloneRows";
import {
  partSixCloneRowsMHPsAtom,
  partSixSNPHybridCreatedAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import { fixedData } from "@/data/Interactives/fixedData";
import SquareMicrohaplotype from "@/app/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
import { atomWithStorage } from "jotai/utils";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export const partSixMHPHybridCreatedAtom = atomWithStorage(
  "partSixMHPHybridCreatedAtom",
  false,
);

export default function GenerateMHPHybrid() {
  const cloneRows = useAtomValue(partSixCloneRowsMHPsAtom);
  const [hybridCreated, setHybridCreated] = useAtom(
    partSixMHPHybridCreatedAtom,
  );

  // useEffect(() => {
  //   setHybridCreated(false);
  // }, [setHybridCreated]);

  return (
    <InteractivePrimaryLayout
      leftHeader={`Create Hybrid`}
      leftContent={
        <div className="flex w-full max-w-[500px] flex-col gap-1 dark:brightness-75">
          <div className="w-full">
            <CloneRow
              label={1}
              classNames={{
                button: P6CloneRowButtonColors[1],
                row: P6CloneRowColors[1],
              }}
            >
              {cloneRows[1].vals.map((val, idx) => {
                if (hybridCreated && idx >= 6) {
                  return (
                    <SquareMicrohaplotype
                      className="fadeOut300"
                      key={idx}
                      id={val}
                    />
                  );
                } else {
                  return <SquareMicrohaplotype key={idx} id={val} />;
                }
              })}
            </CloneRow>
          </div>
          <div className="w-full">
            <CloneRow
              label={2}
              classNames={{
                button: P6CloneRowButtonColors[2],
                row: P6CloneRowColors[2],
              }}
            >
              {cloneRows[2].vals.map((val, idx) => {
                if (hybridCreated && idx < 6) {
                  return (
                    <SquareMicrohaplotype
                      className="fadeOut300"
                      key={idx}
                      id={val}
                    />
                  );
                } else {
                  return <SquareMicrohaplotype key={idx} id={val} />;
                }
              })}
            </CloneRow>
          </div>{" "}
          <div className="relative grid gap-1 [grid-template-columns:8%_auto]">
            <div
              className={`absolute bottom-0 col-start-2 grid h-6 w-full grid-cols-2 ${
                hybridCreated ? "" : "hidden"
              }`}
            >
              <div className="w-full border-l-4 border-t-4 border-cloneRed"></div>
              <div className="w-full border-r-4 border-t-4 border-cloneBlue"></div>
            </div>
            <button
              disabled={hybridCreated}
              onClick={() => {
                setHybridCreated(true);
              }}
              data-tip={"Create Hybrid"}
              aria-label={"Create hybrid clone"}
              className={` ${
                !hybridCreated ? "tooltip tooltip-bottom" : "translate-x-0"
              }  col-start-2 mx-auto my-4 aspect-square w-fit rounded-full bg-gradient-to-r from-cloneRed via-[#FFB0B0_25%,#B8E6FA_75%] to-cloneBlue bg-blend-overlay transition-all focus:tooltip-open hover:scale-105 focus:ring-2 focus:ring-black active:scale-90 disabled:hover:scale-100`}
            >
              <Image
                alt="mosquito"
                src="/InteractiveAssets/mosquito.svg"
                height={100}
                width={100}
              ></Image>
            </button>
          </div>
          <div className={`w-full ${hybridCreated ? "fadeIn500" : "hidden"}`}>
            <MHPHybridClone />
          </div>
        </div>
      }
    />
  );

  return (
    <StandardLayout>
      <div className="">
        {/* <FormHeader text="Create Hybrid" /> */}
        <div className="flex w-full max-w-[500px] flex-col gap-1 dark:brightness-75">
          <div className="w-full">
            <CloneRow
              label={1}
              classNames={{
                button: P6CloneRowButtonColors[1],
                row: P6CloneRowColors[1],
              }}
            >
              {cloneRows[1].vals.map((val, idx) => {
                if (hybridCreated && idx >= 6) {
                  return (
                    <SquareMicrohaplotype
                      className="fadeOut300"
                      key={idx}
                      id={val}
                    />
                  );
                } else {
                  return <SquareMicrohaplotype key={idx} id={val} />;
                }
              })}
            </CloneRow>
          </div>
          <div className="w-full">
            <CloneRow
              label={2}
              classNames={{
                button: P6CloneRowButtonColors[2],
                row: P6CloneRowColors[2],
              }}
            >
              {cloneRows[2].vals.map((val, idx) => {
                if (hybridCreated && idx < 6) {
                  return (
                    <SquareMicrohaplotype
                      className="fadeOut300"
                      key={idx}
                      id={val}
                    />
                  );
                } else {
                  return <SquareMicrohaplotype key={idx} id={val} />;
                }
              })}
            </CloneRow>
          </div>{" "}
          <div className="relative grid gap-1 [grid-template-columns:8%_auto]">
            <div
              className={`absolute bottom-0 col-start-2 grid h-6 w-full grid-cols-2 ${
                hybridCreated ? "" : "hidden"
              }`}
            >
              <div className="w-full border-l-4 border-t-4 border-cloneRed"></div>
              <div className="w-full border-r-4 border-t-4 border-cloneBlue"></div>
            </div>
            <button
              disabled={hybridCreated}
              onClick={() => {
                setHybridCreated(true);
              }}
              data-tip={"Create Hybrid"}
              aria-label={"Create hybrid clone"}
              className={` ${
                !hybridCreated ? "tooltip tooltip-bottom" : "translate-x-0"
              }  col-start-2 mx-auto my-4 aspect-square w-fit rounded-full bg-gradient-to-r from-cloneRed via-[#FFB0B0_25%,#B8E6FA_75%] to-cloneBlue bg-blend-overlay transition-all focus:tooltip-open hover:scale-105 focus:ring-2 focus:ring-black active:scale-90 disabled:hover:scale-100`}
            >
              <Image
                alt="mosquito"
                src="/InteractiveAssets/mosquito.svg"
                height={100}
                width={100}
              ></Image>
            </button>
          </div>
          <div className={`w-full ${hybridCreated ? "" : "hidden"}`}>
            <MHPHybridClone />
          </div>
        </div>
      </div>
      <div className="flex flex-col"></div>
    </StandardLayout>
  );
}
