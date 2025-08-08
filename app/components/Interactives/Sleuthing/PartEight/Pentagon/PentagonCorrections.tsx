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

export default function PentagonCorrections({
  lang = "EN",
}: {
  lang: "EN" | "FR" | "PT";
}) {
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
              className="rounded bg-interactiveGreen px-4 py-2 text-white shadow-sm shadow-black/50 transition-all"
            >
              <span className="block translate-y-0.5">
                {lang === "EN"
                  ? `Details`
                  : lang === "FR"
                  ? `Détails`
                  : lang === "PT"
                  ? `Detalhes`
                  : ``}
              </span>
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
                  {lang === "EN"
                    ? `You have very good intuition – these two cases have more loci
                  related than would be expected by chance. The MOI is only one
                  for both cases, so we would not expect to see more than five
                  loci matching if the cases were completely unrelated (blue
                  bars in the histogram) and we see 8 matches (IBS of 0.67).
                  However, we also know that they are not directly related by
                  transmission, since we would then expect them to be identical
                  (IBS=1). What do you think could explain this intermediate
                  level of relatedness?`
                    : lang === "FR"
                    ? `Vous avez une très bonne intuition – ces deux cas ont plus de loci liés que ce à quoi on s'attendrait par hasard. Le MOI n'est que de un pour les deux cas, donc nous ne nous attendrions pas à voir plus de cinq loci correspondants si les cas étaient complètement indépendants (barres bleues dans l'histogramme) et nous voyons 8 correspondances (IBS de 0,67). Cependant, nous savons également qu'ils ne sont pas directement liés par transmission, car nous nous attendrions alors à ce qu'ils soient identiques (IBS=1). Qu'est-ce qui pourrait expliquer ce niveau intermédiaire de parenté ?`
                    : lang === "PT"
                    ? `Você tem uma intuição muito boa – esses dois casos têm mais loci relacionados do que seria esperado por acaso. O MOI é de apenas um para ambos os casos, então não esperaríamos ver mais de cinco loci correspondentes se os casos fossem completamente não relacionados (barras azuis no histograma) e vemos 8 correspondências (IBS de 0,67). No entanto, também sabemos que eles não estão diretamente relacionados por transmissão, pois então esperaríamos que fossem idênticos (IBS=1). O que você acha que poderia explicar esse nível intermediário de parentesco?`
                    : ``}
                </p>
                <p className="mt-4 [fontSize:15px]">
                  {lang === "EN"
                    ? `The number of matches is consistent with parasites in these
                  cases being siblings, i.e. an IBD of 0.5 (green bars in the
                  histogram). Siblings can occur when two parasites have the
                  same parents… does this make sense given the rest of your
                  estimated transmission?`
                    : lang === "FR"
                    ? `Le nombre de correspondances est cohérent avec les parasites de ces cas étant des frères et sœurs, c'est-à-dire un IBD de 0,5 (barres vertes dans l'histogramme). Les frères et sœurs peuvent apparaître lorsque deux parasites ont les mêmes parents… cela a-t-il un sens compte tenu du reste de votre transmission estimée ?`
                    : lang === "PT"
                    ? `O número de correspondências é consistente com os parasitas nestes casos sendo irmãos, ou seja, um IBD de 0,5 (barras verdes no histograma). Irmãos podem ocorrer quando dois parasitas têm os mesmos pais… isso faz sentido dado o resto da sua transmissão estimada?`
                    : ``}
                </p>
              </div>
            ) : phase === 19 ? (
              <div className="mt-8">
                <p className="[fontSize:15px]">
                  {lang === "EN"
                    ? `You didn’t think there was evidence of direct transmission
                  between cases G and I. You were right – IBS was less than one.
                  However, these two genotypes had more matches than we would
                  expect to see for completely unrelated infections. If they
                  were unrelated (bars in the histogram), we would expect to see
                  more than 5 matches but in your data you saw 8/12 (IBS=0.67).`
                    : lang === "FR"
                    ? `Vous n'avez pas pensé qu'il y avait de preuves de transmission directe entre les cas G et I. Vous aviez raison – l'IBS était inférieur à un. Cependant, ces deux génotypes avaient plus de correspondances que ce à quoi nous nous attendrions pour des infections complètement non apparentées. S'ils n'étaient pas apparentés (barres dans l'histogramme), nous nous attendrions à voir plus de 5 correspondances, mais dans vos données, vous en avez vu 8/12 (IBS=0,67).`
                    : lang === "PT"
                    ? `Você não achou que havia evidências de transmissão direta entre os casos G e I. Você estava certo – o IBS era menor que um. No entanto, esses dois genótipos tiveram mais correspondências do que esperaríamos ver para infecções completamente não relacionadas. Se eles não fossem relacionados (barras no histograma), esperaríamos ver mais de 5 correspondências, mas em seus dados você viu 8/12 (IBS=0,67).`
                    : ``}
                </p>
                <p className="mt-4 [fontSize:15px]">
                  {lang === "EN"
                    ? `The number of matches is consistent with parasites in these
                  cases being siblings, i.e. an IBD of 0.5 (green bars in the
                  histogram). Siblings can occur when two parasites have the
                  same parents… does this make sense given the rest of your
                  estimated transmission?`
                    : lang === "FR"
                    ? `Le nombre de correspondances est cohérent avec les parasites de ces cas étant des frères et sœurs, c'est-à-dire un IBD de 0,5 (barres vertes dans l'histogramme). Les frères et sœurs peuvent apparaître lorsque deux parasites ont les mêmes parents… cela a-t-il un sens compte tenu du reste de votre transmission estimée ?`
                    : lang === "PT"
                    ? `O número de correspondências é consistente com os parasitas nestes casos sendo irmãos, ou seja, um IBD de 0,5 (barras verdes no histograma). Irmãos podem ocorrer quando dois parasitas têm os mesmos pais… isso faz sentido dado o resto da sua transmissão estimada?`
                    : ``}
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
                      {lang === "EN"
                        ? `You didn’t think there was evidence of direct transmission
                      between cases G and I. You were right – IBS was less than
                      one. However, these two genotypes had more matches than we
                      would expect to see for completely unrelated infections.
                      If they were unrelated (bars in the histogram), we would
                      expect to see more than 5 matches but in your data you saw
                      8/12 (IBS=0.67).`
                        : lang === "FR"
                        ? `Vous n'avez pas pensé qu'il y avait de preuves de transmission directe entre les cas G et I. Vous aviez raison – l'IBS était inférieur à un. Cependant, ces deux génotypes avaient plus de correspondances que ce à quoi nous nous attendrions pour des infections complètement non apparentées. S'ils n'étaient pas apparentés (barres dans l'histogramme), nous nous attendrions à voir plus de 5 correspondances, mais dans vos données, vous en avez vu 8/12 (IBS=0,67).`
                        : lang === "PT"
                        ? `Você não achou que havia evidências de transmissão direta entre os casos G e I. Você estava certo – o IBS era menor que um. No entanto, esses dois genótipos tiveram mais correspondências do que esperaríamos ver para infecções completamente não relacionadas. Se eles não fossem relacionados (barras no histograma), esperaríamos ver mais de 5 correspondências, mas em seus dados você viu 8/12 (IBS=0,67).`
                        : ``}
                    </p>
                    <p className="mt-4 [fontSize:15px]">
                      {lang === "EN"
                        ? `The number of matches is consistent with parasites in
                      these cases being siblings, i.e. an IBD of 0.5 (green bars
                      in the histogram). Siblings can occur when two parasites
                      have the same parents… does this make sense given the rest
                      of your estimated transmission?`
                        : lang === "FR"
                        ? `Le nombre de correspondances est cohérent avec les parasites de ces cas étant des frères et sœurs, c'est-à-dire un IBD de 0,5 (barres vertes dans l'histogramme). Les frères et sœurs peuvent apparaître lorsque deux parasites ont les mêmes parents… cela a-t-il un sens compte tenu du reste de votre transmission estimée ?`
                        : lang === "PT"
                        ? `O número de correspondências é consistente com os parasitas nestes casos sendo irmãos, ou seja, um IBD de 0,5 (barras verdes no histograma). Irmãos podem ocorrer quando dois parasitas têm os mesmos pais… isso faz sentido dado o resto da sua transmissão estimada?`
                        : ``}
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
                className="rounded bg-interactiveGreen px-4 py-2 text-white shadow-sm shadow-black/50 transition-all"
              >
                <span className="block translate-y-0.5">
                  {" "}
                  {lang === "EN"
                    ? `Details`
                    : lang === "FR"
                    ? `Détails`
                    : lang === "PT"
                    ? `Detalhes`
                    : ``}
                </span>
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
                  className="ml-auto rounded bg-interactiveGreen px-4 py-2 text-white shadow-sm shadow-black/50 transition-all"
                >
                  <span className="block translate-y-0.5">
                    {" "}
                    {lang === "EN"
                      ? `Details`
                      : lang === "FR"
                      ? `Détails`
                      : lang === "PT"
                      ? `Detalhes`
                      : ``}
                  </span>
                </button>
              </div>
            )}
            {frozenCorrection &&
            frozenCorrection[0] === "GI" ? null : frozenCorrection[1]
                .enabled === true ? (
              <p className="[fontSize:15px]">
                {lang === "EN"
                  ? `IBS in this case is quite high, 100%, which is consistent with
                direct transmission and greater than we would expect to see by
                chance.`
                  : lang === "FR"
                  ? `L'IBS dans ce cas est très élevé, 100%, ce qui est cohérent avec une transmission directe et supérieur à ce à quoi nous nous attendrions par hasard.`
                  : lang === "PT"
                  ? `O IBS neste caso é bastante alto, 100%, o que é consistente com a transmissão direta e maior do que esperaríamos ver por acaso.`
                  : ``}
              </p>
            ) : frozenCorrection[1].enabled === false ? (
              <p className="[fontSize:15px]">
                {lang === "EN"
                  ? `Recall that we expect IBS to be 1 (all 12 loci matching) if
                there is direct transmission. Here, IBS is less than 1, so that
                is evidence against direct transmission between these two cases.`
                  : lang === "FR"
                  ? `Rappelez-vous que nous nous attendons à ce que l'IBS soit de 1 (les 12 loci correspondent) s'il y a transmission directe. Ici, l'IBS est inférieur à 1, ce qui est une preuve contre la transmission directe entre ces deux cas.`
                  : lang === "PT"
                  ? `Lembre-se de que esperamos que o IBS seja 1 (todos os 12 loci correspondam) se houver transmissão direta. Aqui, o IBS é menor que 1, o que é uma evidência contra a transmissão direta entre esses dois casos.`
                  : ``}
              </p>
            ) : (
              <p className="[fontSize:15px]">
                {lang === "EN"
                  ? `You are correct that there seems to be evidence of direct
                transmission between these two cases, since IBS is 1. Remember
                that Case (E or F, depending on the edge) reported a history of
                travel and occurred several weeks before Case (G, H, or I,
                depending on the edge), making it more likely that transmission
                occurred in the other direction.`
                  : lang === "FR"
                  ? `Vous avez raison de penser qu'il semble y avoir des preuves de transmission directe entre ces deux cas, puisque l'IBS est de 1. Rappelez-vous que le cas (E ou F, selon l'arête) a signalé des antécédents de voyage et est survenu plusieurs semaines avant le cas (G, H ou I, selon l'arête), ce qui rend plus probable que la transmission se soit produite dans l'autre sens.`
                  : lang === "PT"
                  ? `Você está correto que parece haver evidências de transmissão direta entre esses dois casos, já que o IBS é 1. Lembre-se de que o Caso (E ou F, dependendo da aresta) relatou um histórico de viagem e ocorreu várias semanas antes do Caso (G, H ou I, dependendo da aresta), tornando mais provável que a transmissão tenha ocorrido na outra direção.`
                  : ``}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div>
          <p className="[fontSize:15px]">
            {lang === "EN"
              ? `Nice work! You have integrated epidemiologic and parasite genetic
            data to accurately assess transmission in the village.`
              : lang === "FR"
              ? `Beau travail ! Vous avez intégré des données épidémiologiques et génétiques parasitaires pour évaluer avec précision la transmission dans le village.`
              : `Bom trabalho! Você integrou dados epidemiológicos e genéticos de parasitas para avaliar com precisão a transmissão na aldeia.`}
          </p>
          {!specialEdgeHandled && (
            <p className="mt-4 [fontSize:15px]">
              {lang === "EN"
                ? `There is one case worth taking a closer look at, however.`
                : lang === "FR"
                ? `Il y a cependant un cas qui mérite d'être examiné de plus près.`
                : `Há um caso que vale a pena analisar mais de perto, no entanto.`}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
