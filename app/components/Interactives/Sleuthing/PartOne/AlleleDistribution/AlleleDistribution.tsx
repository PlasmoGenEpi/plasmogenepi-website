"use client";
import Histogram from "@/app/components/Interactives/Shared/Histogram/Histogram";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import {
  positiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import annotationPlugin from "chartjs-plugin-annotation";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { viewWidthAtom } from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import { countSNPs } from "@/app/components/Interactives/helpers";

ChartJS.register(...registerables);
ChartJS.register(annotationPlugin);

const options = {
  response: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      ticks: {
        precision: 0,
        stepSize: 2,
      },
      beginAtZero: true,
      suggestedMin: 0,
      suggestedMax: 12,
    },
  },
  plugins: {
    annotation: {
      annotations: {
        label1: {
          type: "label",
          xValue: 0.5,
          yValue: 10,

          color: "#808080",
          content: ["MOI = 1"],
          font: {
            color: "#808080",
            size: 17,
          },
        },
        label2: {
          type: "label",
          xValue: 2.5,
          yValue: 10,

          color: "#808080",
          content: ["MOI = 2"],
          font: {
            color: "#808080",

            size: 17,
          },
        },
        label3: {
          type: "label",
          xValue: 4.5,
          yValue: 10,

          color: "#808080",
          content: ["MOI = 4"],
          font: {
            color: "#808080",

            size: 17,
          },
        },
        line1: {
          type: "line",
          yMin: 0,
          yMax: 12,
          xMin: 1.5,
          xMax: 1.5,
          borderColor: "#808080",
          borderWidth: 1,
          // borderStyle: "dotted",
          borderDash: [4],
        },
        line2: {
          type: "line",
          yMin: 0,
          yMax: 12,
          xMin: 3.5,
          xMax: 3.5,
          borderColor: "#808080",
          borderWidth: 1,
          // borderStyle: "dotted",
          borderDash: [4],
        },
      },
    },

    legend: {
      display: false,
      position: "bottom",
      align: "start",
      labels: {
        font: {
          size: 16,
        },
      },
    },
    // title: {
    //   color: "black",
    //   display: true,
    //   font: {
    //     size: 17,
    //     color: "#000000",
    //   },
    //   text: "MOI Estimates",
    //   position: "bottom",
    // },
  },
};

export default function AlleleDistribution({
  lang,
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const boards = useAtomValue(positiveControlBoardsAtom);
  const viewWidth = useAtomValue(viewWidthAtom);
  const containerRef = useRef<null | HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [change, setChange] = useState(false);
  // const p1Questions = useAtomValue()

  // const [boards, setBoards] = useAtom(positiveControlBoardsAtom)

  useEffect(() => {
    // let width = containerRef?.current?.getBoundingClientRect()?.x;
    // if (typeof width === "number") {
    //   setContainerWidth(width);
    // }
    setChange(true);
    let x = setTimeout(() => {
      setChange(false);
      setContainerWidth(containerWidth + 1);
    }, 50);

    return () => {
      clearTimeout(x);
    };
    // console.log(viewWidth);
  }, [viewWidth]);

  const snp_results = useMemo(() => {
    return Object.values(boards).map((board) => {
      let { singles, pairs } = countSNPs(board.inputs);
      return {
        singles: singles === board.questions[1] ? singles : 0,
        pairs: pairs === board.questions[2] ? pairs : 0,
      };
      let x = Object.entries(board.questions).map((num, answer) => {});
    });
  }, [boards]);

  return (
    <div
      ref={containerRef}
      className="sticky top-16 mx-auto block min-h-[316px] max-w-[500px]"
    >
      {change ? null : (
        <div>
          <Bar
            key={containerWidth}
            //@ts-ignore
            options={options}
            data={{
              labels:
                lang === "EN"
                  ? [
                      "Positive Control 1",
                      "Positive Control 2",
                      "Positive Control 3",
                      "Positive Control 4",
                      "Positive Control 5",
                      "Positive Control 6",
                    ]
                  : lang === "FR"
                  ? [
                      "Contrôle positif 1",
                      "Contrôle positif 2",
                      "Contrôle positif 3",
                      "Contrôle positif 4",
                      "Contrôle positif 5",
                      "Contrôle positif 6",
                    ]
                  : [
                      "Controle Positivo 1",
                      "Controle Positivo 2",
                      "Controle Positivo 3",
                      "Controle Positivo 4",
                      "Controle Positivo 5",
                      "Controle Positivo 6",
                    ],

              datasets: [
                {
                  label:
                    lang === "EN"
                      ? "Homozygous Allele Count"
                      : lang === "FR"
                      ? "Nombre d'allèles homozygotes"
                      : "Contagem de alelos homozigotos",

                  data: snp_results.map(({ singles, pairs }) => {
                    return singles;
                  }),
                  barPercentage: 0.95,
                },
                {
                  label:
                    lang === "EN"
                      ? "Heterozygous Allele Count"
                      : lang === "FR"
                      ? "Nombre d'allèles hétérozygotes"
                      : "Contagem de alelos heterozigotos",

                  data: snp_results.map(({ singles, pairs }) => {
                    return pairs;
                  }),
                  barPercentage: 0.95,
                },
              ],
            }}
          />
          <div className="mx-auto mt-2 flex w-fit flex-col gap-2 text-base text-[hsl(0,0%,39%)]">
            <div className="inline-flex gap-2">
              <div className="inline h-[.75lh] w-[2lh] bg-[rgba(54,_162,_235,_0.5)]"></div>
              <label>
                {lang === "EN"
                  ? `Homozygous Allele Count`
                  : lang === "FR"
                  ? `Nombre d'allèles homozygotes`
                  : `Contagem de alelos homozigotos`}
              </label>
            </div>
            <div className="inline-flex gap-2">
              <div className="inline h-[.75lh] w-[2lh] bg-[rgba(255,_99,_132,_0.5)] "></div>
              <label className="[font-variant:small-caps]/">
                {lang === "EN"
                  ? `Heterozygous Allele Count`
                  : lang === "FR"
                  ? `Nombre d'allèles hétérozygotes`
                  : `Contagem de alelos heterozigotos`}
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
