import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

import annotationPlugin from "chartjs-plugin-annotation";
import { partThreePositiveControlBoardsAtom } from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { viewWidthAtom } from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { currentView1Atom } from "@/app/components/Interactives/Shared/InteractiveViewer/InteractiveViewer";
import { MicroId } from "@/app/components/Interactives/helpers";

ChartJS.register(...registerables);
ChartJS.register(annotationPlugin);

const options = {
  response: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      title: {
        display: true,
        align: "center",
        text: "Alleles",
        color: "rgb(100,100,100)",
        font: {
          size: 14,
          // weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 5,
          left: 0,
          right: 0,
        },
      },
      label: {
        text: "hi",
        value: "hello",
      },
      ticks: {
        precision: 0,
        stepSize: 1,
      },
      beginAtZero: true,
      suggestedMin: 0,
      suggestedMax: 4,
    },
  },
  plugins: {
    annotation: {
      annotations: {
        label1: {
          type: "label",
          xValue: 0.5,
          yValue: 3,

          color: "#b0b0b0",
          content: ["MOI = 1"],
          font: {
            color: "#b0b0b0",
            size: 14,
          },
        },
        label2: {
          type: "label",
          xValue: 2.5,
          yValue: 3,

          color: "#b0b0b0",
          content: ["MOI = 2"],
          font: {
            color: "#b0b0b0",

            size: 14,
          },
        },
        label3: {
          type: "label",
          xValue: 4.5,
          yValue: 3,

          color: "#b0b0b0",
          content: ["MOI = 4"],
          font: {
            color: "#b0b0b0",

            size: 14,
          },
        },
        line1: {
          type: "line",
          yMin: 0,
          yMax: 12,
          xMin: 1.5,
          xMax: 1.5,
          borderColor: "#b0b0b0",
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
          borderColor: "#b0b0b0",
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

export default function P3AlleleDistribution() {
  const boards = useAtomValue(partThreePositiveControlBoardsAtom);
  const viewWidth = useAtomValue(viewWidthAtom);
  const containerRef = useRef<null | HTMLDivElement>(null);
  const [currentView, setCurrentView] = useAtom(currentView1Atom);
  const [containerWidth, setContainerWidth] = useState(0);
  const [change, setChange] = useState(false);

  let getMaxAlleles = useCallback((inputs: MicroId[][]) => {
    return Math.max.apply(
      null,
      inputs.map((arr) => {
        return arr.length;
      }),
    );
  }, []);

  let x = useMemo(() => {
    let z = new Array(6).fill(0);
    z[0] = boards[1].questions[2] === 0 ? getMaxAlleles(boards[1].inputs) : 0;
    z[1] = boards[2].questions[2] === 0 ? getMaxAlleles(boards[2].inputs) : 0;
    z[2] =
      boards[3].questions[2] === getMaxAlleles(boards[3].inputs)
        ? getMaxAlleles(boards[3].inputs)
        : 0;
    z[3] =
      boards[4].questions[2] === getMaxAlleles(boards[4].inputs)
        ? getMaxAlleles(boards[4].inputs)
        : 0;
    z[4] =
      boards[5].questions[2] === getMaxAlleles(boards[5].inputs)
        ? getMaxAlleles(boards[5].inputs)
        : 0;
    z[5] =
      boards[6].questions[1] === getMaxAlleles(boards[6].inputs)
        ? getMaxAlleles(boards[6].inputs)
        : 0;
    // z[2]
    // z[3]
    // z[4]
    // z[5]
    return z;
  }, [boards]);

  // let x = Object.values(boards).map((board, idx) => {
  //   return Math.max.apply(
  //     null,
  //     board.inputs.map((arr) => {
  //       return arr.length;
  //     })
  //   );
  // });

  useEffect(() => {
    setChange(true);
    let x = setTimeout(() => {
      setChange(false);
      setContainerWidth(containerWidth + 1);
    }, 50);

    return () => {
      clearTimeout(x);
    };
  }, [viewWidth]);

  let y = Object.values(boards).map((board, idx) => {
    return (
      board.inputs
        .map((arr) => {
          return arr.length;
        })
        .reduce((a, b) => {
          return a + b;
        }, 0) / 4
    );
  });

  return (
    <div
      ref={containerRef}
      className="sticky top-16 mx-auto block min-h-[316px] max-w-[500px] dark:brightness-200"
    >
      {change ? null : (
        <Bar
          key={containerWidth}
          //@ts-ignore
          options={options}
          data={{
            labels: [
              "Positive Control 1",
              "Positive Control 2",
              "Positive Control 3",
              "Positive Control 4",
              "Positive Control 5",
              "Positive Control 6",
            ],
            datasets:
              currentView.phase === 4
                ? [
                    {
                      label: "Maximum # of alleles",
                      data: x,
                    },
                  ]
                : [
                    {
                      label: "Maximum # of alleles",
                      data: x,
                    },
                    {
                      label: "Average # of alleles",
                      data: y,
                    },
                  ],
          }}
        />
      )}
      <div className="mx-auto mt-2 flex w-fit flex-col gap-2 text-base text-[hsl(0,0%,39%)]">
        <div className="inline-flex gap-2">
          <div className="inline h-[.75lh] w-[2lh] bg-[rgba(54,_162,_235,_0.5)]"></div>
          <label>Maximum # of alleles</label>
        </div>
        {currentView.phase !== 4 && (
          <div className="inline-flex gap-2">
            <div className="inline h-[.75lh] w-[2lh] bg-[rgba(255,_99,_132,_0.5)]"></div>
            <label>Average # of alleles</label>
          </div>
        )}
      </div>
    </div>
  );
}
