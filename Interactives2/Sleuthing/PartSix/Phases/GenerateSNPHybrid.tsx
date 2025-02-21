import CloneElement from "@/app/components/Interactives/Shared/CloneRow/CloneElement";
import CloneRow from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import {
  P6CloneRowButtonColors,
  P6CloneRowColors,
} from "../CloneRows/P6MHPCloneRows";
import Image from "next/image";
import SNPHybridClone from "../Comparators/SNPs/SNPHybridClone";
import {
  cloneRowsAtom,
  partSixCloneRowsAtom,
  partSixSNPHybridCreatedAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import { fixedData } from "@/data/Interactives/fixedData";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";

export default function GenerateSNPHybrid() {
  const cloneRows = useAtomValue(partSixCloneRowsAtom);
  const [hybridCreated, setHybridCreated] = useAtom(
    partSixSNPHybridCreatedAtom,
  );

  // useEffect(() => {
  //   setHybridCreated(false);
  // }, [setHybridCreated]);

  return (
    <StandardLayout>
      <div>
        <FormHeader text={`Create Hybrid`} />

        <div className="flex max-w-[500px] flex-col gap-1">
          <div className="w-full">
            <CloneRow
              label={1}
              classNames={{
                button: P6CloneRowButtonColors[1],
                row: P6CloneRowColors[1],
              }}
            >
              {cloneRows[1].vals.map((el, idx) => {
                return (
                  <li
                    className={`${
                      hybridCreated && idx >= 6 ? "fadeOut300" : ""
                    } flex aspect-square items-center justify-center bg-white shadow-sm shadow-black`}
                    key={idx}
                  >
                    <span
                      className={`translate-y-[3px] text-xl font-bold ${
                        el === 1 ? "alternateAllele" : ""
                      }`}
                    >
                      {el === 0
                        ? fixedData[6].refValues[idx]
                        : el === 1
                        ? fixedData[6].altValues[idx]
                        : ""}
                    </span>
                  </li>
                );
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
              {cloneRows[2].vals.map((el, idx) => {
                return (
                  <li
                    className={`${
                      hybridCreated && idx < 6 ? "fadeOut300" : ""
                    } flex aspect-square items-center justify-center bg-white shadow-sm shadow-black`}
                    key={idx}
                  >
                    <span
                      className={`translate-y-[3px] text-xl font-bold ${
                        el === 1 ? "alternateAllele" : ""
                      }`}
                    >
                      {el === 0
                        ? fixedData[6].refValues[idx]
                        : el === 1
                        ? fixedData[6].altValues[idx]
                        : ""}
                    </span>
                  </li>
                );
              })}
            </CloneRow>
          </div>{" "}
          <div className="relative grid gap-1 [grid-template-columns:8%_auto]">
            <div
              className={`absolute bottom-0 col-start-2 grid h-6 w-full grid-cols-2 ${
                hybridCreated ? "fadeIn500" : "hidden"
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
              }  col-start-2 mx-auto my-4 aspect-square w-fit rounded-full bg-gradient-to-r from-cloneRed via-[#FFB0B0_25%,#B8E6FA_75%] to-cloneBlue bg-blend-overlay transition-all hover:scale-105 focus:ring-2 focus:ring-black active:scale-90 disabled:hover:scale-100`}
            >
              <Image
                alt="mosquito"
                src="/assets/mosquito.svg"
                height={100}
                width={100}
              ></Image>
            </button>
          </div>
          <div className={`w-full ${hybridCreated ? "fadeIn500" : "hidden"}`}>
            <SNPHybridClone />
          </div>
        </div>
      </div>
      <div className="flex flex-col"></div>
    </StandardLayout>
  );

  return (
    <div>
      <div className="mb-8 text-center text-xl font-bold">
        <h2>Create Hybrid</h2>
      </div>
      <div className="grid grid-cols-2 place-items-center gap-x-4">
        <div className="w-full max-w-[400px]">
          <CloneRow
            label={1}
            classNames={{
              button: P6CloneRowButtonColors[1],
              row: P6CloneRowColors[1],
            }}
          >
            {Array(12)
              .fill(0)
              .map((el, idx) => {
                return (
                  <div
                    className="aspect-square bg-white shadow-sm shadow-black"
                    key={idx}
                  ></div>
                );
              })}
          </CloneRow>
        </div>
        <div className="w-full max-w-[400px]">
          <CloneRow
            label={2}
            classNames={{
              button: P6CloneRowButtonColors[2],
              row: P6CloneRowColors[2],
            }}
          >
            {Array(12)
              .fill(0)
              .map((el, idx) => {
                return (
                  <div
                    className="aspect-square bg-white shadow-sm shadow-black"
                    key={idx}
                  ></div>
                );
              })}
          </CloneRow>
        </div>{" "}
        <div className="col-span-full mt-8 w-full max-w-[600px]">
          <CloneRow
            label={4}
            classNames={{
              button: P6CloneRowButtonColors[3],
              row: P6CloneRowColors[3],
            }}
          >
            {Array(12)
              .fill(0)
              .map((el, idx) => {
                return (
                  <div
                    className="aspect-square bg-white shadow-sm shadow-black"
                    key={idx}
                  ></div>
                );
              })}
          </CloneRow>
        </div>
      </div>
      <button
        aria-label={"Create hybrid clone"}
        className="rounded-full bg-gradient-to-r from-cloneRed via-[#FFB0B0_25%,#B8E6FA_75%] to-cloneBlue bg-blend-overlay"
      >
        <Image
          alt="mosquito"
          src="/assets/mosquito.svg"
          height={172}
          width={172}
        ></Image>
      </button>
    </div>
  );

  return (
    <StandardLayout>
      <div>
        <div className="mb-8 text-center text-xl font-bold md:text-left">
          <h2>Create Hybrid</h2>
        </div>
        {/* <div>
          <div className="relative flex max-w-[500px] flex-col gap-2">
            <div className="absolute w-full grow origin-top-left scale-50">
              <CloneRow
                classNames={{
                  button: P6CloneRowButtonColors[1],
                  row: P6CloneRowColors[1],
                }}
              >
                {Array(12)
                  .fill(0)
                  .map((el, idx) => {
                    return (
                      <CloneElement
                        className="bg-white"
                        possibleValues={{
                          reference: "A",
                          alternate: "T",
                        }}
                        val={0}
                        key={idx}
                      />
                    );
                  })}
              </CloneRow>
            </div>
            <div className="absolute w-full origin-top-right scale-50">
              <CloneRow
                classNames={{
                  button: P6CloneRowButtonColors[2],
                  row: P6CloneRowColors[2],
                }}
              >
                {Array(12)
                  .fill(0)
                  .map((el, idx) => {
                    return (
                      <CloneElement
                        className="bg-white"
                        possibleValues={{
                          reference: "A",
                          alternate: "T",
                        }}
                        val={0}
                        key={idx}
                      />
                    );
                  })}
              </CloneRow>
            </div>
          </div>
          <div className="mt-12 aspect-square h-20 rounded-full bg-cloneRed"></div>
        </div> */}
      </div>
      <div></div>
    </StandardLayout>
  );
}
