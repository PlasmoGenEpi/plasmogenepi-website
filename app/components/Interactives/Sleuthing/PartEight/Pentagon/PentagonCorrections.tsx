import { atom, useAtom, useAtomValue } from "jotai";
import { edgeCorrectionsAtom } from "./PentagonViewer";
import { useEffect, useMemo, useState } from "react";
import CompareGenotypes from "../Genotypes/CompareGenotypes";
import {
  partEightCompletionAtom,
  phase2Atom,
} from "@/data/Interactives/interactiveStore";
import { specialEdgeHandledAtom } from "../Pentagon3";
import Image from "next/image";
import { Edge } from "../Pentagon";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";

export const GIViewAtom = atom(false);

export default function PentagonCorrections() {
  const [corrections, setEdgeCorrections] = useAtom(edgeCorrectionsAtom);
  const phase = useAtomValue(phase2Atom);
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

  if (
    (phase === 18 && frozenCorrection?.[0] === "GI") ||
    (phase === 19 && !specialEdgeHandled)
  ) {
    return (
      <div>
        {!GIView ? (
          <div>
            <div
              className={`${
                GIView ? "invisible" : ""
              } my-8 border-2 border-[blue] bg-[blue]/5`}
            >
              <CompareGenotypes firstPersonId={"G"} secondPersonId={"I"} />
            </div>
            <div className="my-2">
              <span className="text-2xl">G</span>
              <svg
                width="12pt"
                height="12pt"
                className="mx-2 inline-block -translate-y-0.5"
                version="1.1"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m56.25 412.5h940.91l-78.523 70.688 0.10938 0.16797c-11.418 10.293-18.75 25.051-18.75 41.664 0 31.07 25.18 56.25 56.25 56.25 14.457 0 27.523-5.6055 37.5-14.586l0.13281 0.14844 187.5-168.75-0.13281-0.16797c11.418-10.293 18.75-25.07 18.75-41.664s-7.332-31.367-18.75-41.664l0.13281-0.14844-187.5-168.75-0.13281 0.14844c-9.9766-8.9609-23.043-14.586-37.5-14.586-31.07 0-56.25 25.18-56.25 56.25 0 16.594 7.332 31.367 18.75 41.664l-0.13281 0.14844 78.547 70.688h-940.91c-31.07 0-56.25 25.18-56.25 56.25s25.18 56.25 56.25 56.25zm1087.5 375h-940.91l78.543-70.688-0.12891-0.13281c11.438-10.312 18.75-25.07 18.75-41.68 0-31.07-25.18-56.25-56.25-56.25-14.477 0-27.523 5.625-37.5 14.57l-0.13281-0.14844-187.5 168.75 0.13281 0.14844c-11.418 10.328-18.75 25.086-18.75 41.68s7.332 31.352 18.75 41.68l-0.13281 0.13281 187.5 168.75 0.13281-0.13281c9.9766 8.9648 23.043 14.57 37.5 14.57 31.07 0 56.25-25.18 56.25-56.25 0-16.594-7.332-31.367-18.75-41.68l0.13281-0.14844-78.547-70.672h940.91c31.07 0 56.25-25.18 56.25-56.25s-25.18-56.25-56.25-56.25z" />
              </svg>

              <span className=" text-2xl">I</span>
            </div>{" "}
            <button
              onClick={() => {
                setGIView(!GIView);
              }}
              className="bg-interactiveGreen rounded px-4 py-2 text-white shadow-sm shadow-black/50 transition-all"
            >
              <span className="block translate-y-0.5">Details</span>
            </button>
          </div>
        ) : (
          <div className="fadeIn500">
            <Image
              src="/InteractiveAssets/M5_sluething_histogram_MHs_MOI1_IBD_0_0.5_1_together.svg"
              width={600}
              height={600}
              className="dark:hue-rotate-180 dark:invert"
              // className={`
              //       ${
              //         GIView ? "scale-100 opacity-100" : "scale-50 opacity-0"
              //       } transition-all duration-300
              //     `}
              alt="IBD distribution graph"
            />
            {phase === 18 ? (
              <div className="mt-8">
                <p className="[fontSize:15px]">
                  You have very good intuition – these two cases have more loci
                  related than would be expected by chance. The MOI is only one
                  for both cases, so we would not expect to see more than five
                  loci matching if the cases were completely unrelated (blue
                  bars in the histogram) and we see 8 matches (IBS of 0.67).
                  However, we also know that they are not directly related by
                  transmission, since we would then expect them to be identical
                  (IBS=1). What do you think could explain this intermediate
                  level of relatedness?
                </p>
                <p className="mt-4 [fontSize:15px]">
                  The number of matches is consistent with parasites in these
                  cases being siblings, i.e. an IBD of 0.5 (green bars in the
                  histogram). Siblings can occur when two parasites have the
                  same parents… does this make sense given the rest of your
                  estimated transmission?
                </p>
              </div>
            ) : phase === 19 ? (
              <div className="mt-8">
                <p className="[fontSize:15px]">
                  You didn’t think there was evidence of direct transmission
                  between cases G and I. You were right – IBS was less than one.
                  However, these two genotypes had more matches than we would
                  expect to see for completely unrelated infections. If they
                  were unrelated (bars in the histogram), we would expect to see
                  more than 5 matches but in your data you saw 8/12 (IBS=0.67).
                </p>
                <p className="mt-4 [fontSize:15px]">
                  The number of matches is consistent with parasites in these
                  cases being siblings, i.e. an IBD of 0.5 (green bars in the
                  histogram). Siblings can occur when two parasites have the
                  same parents… does this make sense given the rest of your
                  estimated transmission?
                </p>
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  }

  if (phase === 19 && !specialEdgeHandled) {
    return (
      <div>
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
                    src="/InteractiveAssets/M5_sluething_histogram_MHs_MOI1_IBD_0_0.5_1_together.svg"
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
                  <div className="fadeIn500">
                    <p className="mt-20 [fontSize:15px]">
                      You didn’t think there was evidence of direct transmission
                      between cases G and I. You were right – IBS was less than
                      one. However, these two genotypes had more matches than we
                      would expect to see for completely unrelated infections.
                      If they were unrelated (bars in the histogram), we would
                      expect to see more than 5 matches but in your data you saw
                      8/12 (IBS=0.67).
                    </p>
                    <p className="mt-4 [fontSize:15px]">
                      The number of matches is consistent with parasites in
                      these cases being siblings, i.e. an IBD of 0.5 (green bars
                      in the histogram). Siblings can occur when two parasites
                      have the same parents… does this make sense given the rest
                      of your estimated transmission?
                    </p>
                  </div>
                )}
              </div>
            </div>
          }
        </div>
        <div className="">
          <div className="my-2">
            <span className="text-2xl">G</span>
            <svg
              width="12pt"
              height="12pt"
              className="mx-2 inline-block -translate-y-0.5"
              version="1.1"
              viewBox="0 0 1200 1200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m56.25 412.5h940.91l-78.523 70.688 0.10938 0.16797c-11.418 10.293-18.75 25.051-18.75 41.664 0 31.07 25.18 56.25 56.25 56.25 14.457 0 27.523-5.6055 37.5-14.586l0.13281 0.14844 187.5-168.75-0.13281-0.16797c11.418-10.293 18.75-25.07 18.75-41.664s-7.332-31.367-18.75-41.664l0.13281-0.14844-187.5-168.75-0.13281 0.14844c-9.9766-8.9609-23.043-14.586-37.5-14.586-31.07 0-56.25 25.18-56.25 56.25 0 16.594 7.332 31.367 18.75 41.664l-0.13281 0.14844 78.547 70.688h-940.91c-31.07 0-56.25 25.18-56.25 56.25s25.18 56.25 56.25 56.25zm1087.5 375h-940.91l78.543-70.688-0.12891-0.13281c11.438-10.312 18.75-25.07 18.75-41.68 0-31.07-25.18-56.25-56.25-56.25-14.477 0-27.523 5.625-37.5 14.57l-0.13281-0.14844-187.5 168.75 0.13281 0.14844c-11.418 10.328-18.75 25.086-18.75 41.68s7.332 31.352 18.75 41.68l-0.13281 0.13281 187.5 168.75 0.13281-0.13281c9.9766 8.9648 23.043 14.57 37.5 14.57 31.07 0 56.25-25.18 56.25-56.25 0-16.594-7.332-31.367-18.75-41.68l0.13281-0.14844-78.547-70.672h940.91c31.07 0 56.25-25.18 56.25-56.25s-25.18-56.25-56.25-56.25z" />
            </svg>

            <span className=" text-2xl">I</span>
          </div>
          {!GIView ? (
            <div className="flex">
              <button
                onClick={() => {
                  setGIView(!GIView);
                }}
                className="bg-interactiveGreen rounded px-4 py-2 text-white shadow-sm shadow-black/50 transition-all"
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
            <p className="[fontSize:15px]">
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
                  src="/InteractiveAssets/M5_sluething_histogram_MHs_MOI1_IBD_0_0.5_1_together.svg"
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
                <div className="fadeIn500 ">
                  <p className="mt-20 [fontSize:15px]">
                    You have very good intuition – these two cases have more
                    loci related than would be expected by chance. The MOI is
                    only one for both cases, so we would not expect to see more
                    than five loci matching if the cases were completely
                    unrelated (blue bars in the histogram) and we see 8 matches
                    (IBS of 0.67). However, we also know that they are not
                    directly related by transmission, since we would then expect
                    them to be identical (IBS=1). What do you think could
                    explain this intermediate level of relatedness?
                  </p>
                  <p className="mt-4 [fontSize:15px]">
                    The number of matches is consistent with parasites in these
                    cases being siblings, i.e. an IBD of 0.5 (green bars in the
                    histogram). Siblings can occur when two parasites have the
                    same parents… does this make sense given the rest of your
                    estimated transmission?
                  </p>
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
              <svg
                width="12pt"
                height="12pt"
                className="mx-2 inline-block -translate-y-0.5"
                version="1.1"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m56.25 412.5h940.91l-78.523 70.688 0.10938 0.16797c-11.418 10.293-18.75 25.051-18.75 41.664 0 31.07 25.18 56.25 56.25 56.25 14.457 0 27.523-5.6055 37.5-14.586l0.13281 0.14844 187.5-168.75-0.13281-0.16797c11.418-10.293 18.75-25.07 18.75-41.664s-7.332-31.367-18.75-41.664l0.13281-0.14844-187.5-168.75-0.13281 0.14844c-9.9766-8.9609-23.043-14.586-37.5-14.586-31.07 0-56.25 25.18-56.25 56.25 0 16.594 7.332 31.367 18.75 41.664l-0.13281 0.14844 78.547 70.688h-940.91c-31.07 0-56.25 25.18-56.25 56.25s25.18 56.25 56.25 56.25zm1087.5 375h-940.91l78.543-70.688-0.12891-0.13281c11.438-10.312 18.75-25.07 18.75-41.68 0-31.07-25.18-56.25-56.25-56.25-14.477 0-27.523 5.625-37.5 14.57l-0.13281-0.14844-187.5 168.75 0.13281 0.14844c-11.418 10.328-18.75 25.086-18.75 41.68s7.332 31.352 18.75 41.68l-0.13281 0.13281 187.5 168.75 0.13281-0.13281c9.9766 8.9648 23.043 14.57 37.5 14.57 31.07 0 56.25-25.18 56.25-56.25 0-16.594-7.332-31.367-18.75-41.68l0.13281-0.14844-78.547-70.672h940.91c31.07 0 56.25-25.18 56.25-56.25s-25.18-56.25-56.25-56.25z" />
              </svg>

              <span className=" text-2xl">{frozenCorrection[0][1]}</span>
            </div>
            {!GIView && frozenCorrection[0] === "GI" && (
              <div className="flex">
                <button
                  onClick={() => {
                    setGIView(!GIView);
                  }}
                  className="bg-interactiveGreen ml-auto rounded px-4 py-2 text-white shadow-sm shadow-black/50 transition-all"
                >
                  <span className="block translate-y-0.5">Details</span>
                </button>
              </div>
            )}
            {frozenCorrection &&
            frozenCorrection[0] === "GI" ? null : frozenCorrection[1]
                .enabled === true ? (
              <p className="[fontSize:15px]">
                IBS in this case is quite high, 100%, which is consistent with
                direct transmission and greater than we would expect to see by
                chance.
              </p>
            ) : frozenCorrection[1].enabled === false ? (
              <p className="[fontSize:15px]">
                Recall that we expect IBS to be 1 (all 12 loci matching) if
                there is direct transmission. Here, IBS is less than 1, so that
                is evidence against direct transmission between these two cases.
              </p>
            ) : (
              <p className="[fontSize:15px]">
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
        <div>
          <p className="[fontSize:15px]">
            Nice work! You have integrated epidemiologic and parasite genetic
            data to accurately assess transmission in the village.
          </p>
          {!specialEdgeHandled && (
            <p className="mt-4 [fontSize:15px]">
              There is one case worth taking a closer look at, however.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
