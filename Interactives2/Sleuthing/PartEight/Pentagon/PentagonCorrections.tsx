import { atom, useAtom, useAtomValue } from "jotai";
import { edgeCorrectionsAtom } from "./PentagonViewer";
import { useEffect, useMemo, useState } from "react";
import CompareGenotypes from "../Genotypes/CompareGenotypes";
import {
  partEightCompletionAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { specialEdgeHandledAtom } from "../Pentagon3";
import Image from "next/image";
import { Edge } from "../Pentagon";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";

export const GIViewAtom = atom(false);

export default function PentagonCorrections() {
  const [corrections, setEdgeCorrections] = useAtom(edgeCorrectionsAtom);
  const phase = useAtomValue(phaseAtom);
  const [GIView, setGIView] = useAtom(GIViewAtom);
  const [specialEdgeHandled, setSpecialEdgeHandled] = useAtom(
    specialEdgeHandledAtom,
  );
  const complete = useAtomValue(partEightCompletionAtom);

  const currentCorrectionId = useMemo(() => {
    for (let i = 0; i < corrections.length; i++) {
      if (!corrections[i][1].correct) {
        return corrections[i][0];
      }
    }
    return null;
  }, [corrections]);

  useEffect(() => {
    setGIView(false);
  }, [phase]);

  const frozenCorrection:
    | null
    | [
        Edge,
        {
          correct?: boolean;
          enabled?: boolean;
          direction?: null | "forwards" | "backwards";
        },
      ] = useMemo(() => {
    if (currentCorrectionId !== null) {
      for (let i = 0; i < corrections.length; i++) {
        if (corrections[i][0] === currentCorrectionId) {
          return [currentCorrectionId, { ...corrections[i][1] }];
        }
      }
    }
    return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCorrectionId, phase]);

  if (phase === 19 && !specialEdgeHandled) {
    return (
      <div>
        <FormHeader text="Results (Special Case)" />
        <div className="relative">
          <div
            className={`${
              GIView ? "invisible" : ""
            } my-8 border-2 border-[blue] bg-[blue]/5`}
          >
            <CompareGenotypes firstPersonId={"G"} secondPersonId={"I"} />
          </div>
          {
            <div
              className={`${
                GIView ? "" : "pointer-events-none"
              } absolute left-0 right-0 top-0 pb-40`}
            >
              <div>
                <div className="fadeIn1000 my-8">
                  <Image
                    src="/assets/M5_sluething_histogram_SNPs_MOI1_IBD_0_0.5_1_together.svg"
                    width={600}
                    height={600}
                    className={`
                    ${
                      GIView ? "scale-100 opacity-100" : "scale-50 opacity-0"
                    } transition-all duration-300
                  `}
                    alt=""
                  />
                </div>
                {GIView && (
                  <div>
                    <p className="fadeIn500 mt-20 text-sm">
                      You didn’t think there was evidence of direct transmission
                      between cases G and I. You were right – IBS was less than
                      one. However, these two genotypes had more matches than we
                      would expect to see for completely unrelated infections.
                      If they were unrelated (bars in the histogram), we would
                      expect to see more than 5 matches but in your data you saw
                      8/12 (IBS=0.67).
                    </p>
                    <iframe
                      onLoad={(e) => {
                        if (!complete[phase]) {
                          e.currentTarget.focus();
                          e.currentTarget.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }}
                      src="https://app.sli.do/event/7pNWuvBXyAzTJWaVbuDwGK/embed/polls/6b842015-2f3f-4378-bf52-a9ffbc3cd373"
                      height="400"
                      className="w-full"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          }
        </div>
        <div className="">
          <div className="my-2">
            <span className="text-2xl">G</span>
            <span className=" text-4xl ">&harr;</span>

            <span className=" text-2xl">I</span>
          </div>
          {!GIView ? (
            <div className="flex">
              <button
                onClick={() => {
                  setGIView(!GIView);
                }}
                className="ml-auto rounded bg-primaryGreen px-4 py-2 text-white shadow-sm shadow-black/50 transition-all"
              >
                <span className="block translate-y-0.5">Details</span>
              </button>
            </div>
          ) : null}
          {/* <div>
            <div className="fadeIn1000 my-8">
              <Image
                src="/assets/M5_sluething_histogram_SNPs_MOI1_IBD_0_0.5_1_together.svg"
                width={600}
                height={600}
                alt=""
              />
            </div>
            <p className="text-sm">
              You didn’t think there was evidence of direct transmission between
              cases G and I. You were right – IBS was less than one. However,
              these two genotypes had more matches than we would expect to see
              for completely unrelated infections. If they were unrelated (bars
              in the histogram), we would expect to see more than 5 matches but
              in your data you saw 8/12 (IBS=0.67). What do you think could
              explain the partial relatedness between these two cases?
            </p>
          </div> */}
        </div>
      </div>
    );
  }

  return (
    <div>
      <FormHeader
        text={`Results ${
          GIView && !specialEdgeHandled ? "(Special Case)" : ""
        }`}
      />
      {frozenCorrection && (
        <div className="relative overflow-visible">
          <div
            className={`top-0 my-8 border-2 ${
              frozenCorrection[0] === "GI"
                ? `${
                    GIView ? "scale-50 opacity-0" : "scale-100"
                  } border-2 border-[blue] bg-[blue]/5 transition-all duration-300`
                : "border-2 border-[red] bg-[red]/5"
            }`}
          >
            <CompareGenotypes
              key={frozenCorrection[0][0] + frozenCorrection[0][1]}
              firstPersonId={
                frozenCorrection ? (frozenCorrection[0][0] as "E") : null
              }
              secondPersonId={
                frozenCorrection ? (frozenCorrection[0][1] as "E") : null
              }
            />
          </div>
          <div
            className={`${
              GIView && frozenCorrection[0] === "GI"
                ? ""
                : "pointer-events-none"
            } absolute left-0 right-0 top-0 pb-40`}
          >
            <div>
              <div className="fadeIn1000 my-8">
                <Image
                  src="/assets/M5_sluething_histogram_SNPs_MOI1_IBD_0_0.5_1_together.svg"
                  width={600}
                  height={600}
                  className={`
                    ${
                      GIView && frozenCorrection[0] === "GI"
                        ? "scale-100 opacity-100"
                        : "scale-50 opacity-0"
                    } transition-all duration-300
                  `}
                  alt=""
                />
              </div>
              {GIView && frozenCorrection[0] === "GI" && (
                <div>
                  <p className="fadeIn500 mt-20 text-sm">
                    You have very good intuition – these two cases have more
                    loci related than would be expected by chance. The MOI is
                    only one for both cases, so we would not expect to see more
                    than five loci matching if the cases were completely
                    unrelated (blue bars in the histogram) and we see 8 matches
                    (IBS of 0.67). However, we also know that they are not
                    directly related by transmission, since we would then expect
                    them to be identical (IBS=1). What do you think could
                    explain this intermediate level of relatedness? Once you
                    have considered this, remove the edge from the graphic.
                  </p>
                  <iframe
                    onLoad={(e) => {
                      if (!complete[phase]) {
                        e.currentTarget.focus();
                        e.currentTarget.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                    src="https://app.sli.do/event/7pNWuvBXyAzTJWaVbuDwGK/embed/polls/6b842015-2f3f-4378-bf52-a9ffbc3cd373"
                    height="400"
                    className="w-full"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {frozenCorrection ? (
        <div>
          <div className="">
            <div className="my-2">
              <span className="text-2xl">{frozenCorrection[0][0]}</span>
              <span className=" text-4xl ">&harr;</span>

              <span className=" text-2xl">{frozenCorrection[0][1]}</span>
            </div>
            {!GIView && frozenCorrection[0] === "GI" && (
              <div className="flex">
                <button
                  onClick={() => {
                    setGIView(!GIView);
                  }}
                  className="ml-auto rounded bg-primaryGreen px-4 py-2 text-white shadow-sm shadow-black/50 transition-all"
                >
                  <span className="block translate-y-0.5">Details</span>
                </button>
              </div>
            )}
            {frozenCorrection &&
            frozenCorrection[0] === "GI" ? null : frozenCorrection[1]
                .enabled === true ? (
              <p className="text-sm">
                IBS in this case is quite high, 100%, which is consistent with
                direct transmission and greater than we would expect to see by
                chance.
              </p>
            ) : frozenCorrection[1].enabled === false ? (
              <p className="text-sm">
                Recall that we expect IBS to be 1 (all 12 loci matching) if
                there is direct transmission. Here, IBS is less than 1, so that
                is evidence against direct transmission between these two cases.
              </p>
            ) : (
              <p className="text-sm">
                You are correct that there seems to be evidence of direct
                transmission between these two cases, since IBS is 1. Remember
                that Case (E or F, depending on the edge) reported a history of
                travel and occurred several weeks before Case (G, H, or I,
                depending on the edge), making it more likely that transmission
                occurred in the other direction.
              </p>
            )}
          </div>
        </div>
      ) : (
        <p className="mt-8 [fontSize:15px]">
          Nice work! You have integrated epidemiologic and parasite genetic data
          to accurately assess transmission in the village.
        </p>
      )}
    </div>
  );
}
