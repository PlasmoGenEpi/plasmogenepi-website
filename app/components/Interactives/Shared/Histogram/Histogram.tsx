"use client";
// import { Chart } from "chart.js";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart, Bar } from "react-chartjs-2";
import { useAtomValue } from "jotai";
// import annotationPlugin from "chartjs-plugin-annotation";
import { useMemo } from "react";

ChartJS.register(...registerables);
// ChartJS.register(annotationPlugin);

const options = {
  response: true,
  maintainAspectRatio: false,
  scales: {
    y: {
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
    legend: {
      position: "bottom",
      align: "middle",
      labels: {
        font: {
          size: 17,
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

export default function Histogram({
  SNP_active,
  MHP_active,
  true_active,
  datasets,
}: {
  datasets: {
    correctAverage: boolean;
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
  }[];
  SNP_active?: boolean;
  MHP_active?: boolean;
  true_active?: boolean;
}) {
  function getOptions() {
    return {
      ...options,
      plugins: {
        ...options["plugins"],
        // annotation: {
        //   annotations: datasets.map((dataset) => {
        //     return {
        //       type: "line",
        //       borderColor: "black",
        //       borderDash: [6, 6],
        //       borderDashOffset: 0,
        //       borderWidth: 2,
        //       label: {
        //         content: 4,
        //         position: "start",
        //       },
        //       scaleID: "x",
        //       value: () => {
        //         if (dataset.correctAverage) {
        //           let average =
        //             dataset.data
        //               .map((count, idx) => {
        //                 return count * (idx + 1);
        //               })
        //               .reduce((a, b) => {
        //                 return a + b;
        //               }) / 10;
        //           return average - 0.5;
        //         } else {
        //           return 0;
        //         }
        //       },
        //     };
        //   }),
        // },
      },
    };
  }

  return (
    <Bar
      className="w-full"
      //@ts-ignore
      options={options}
      data={{
        labels: ["MOI 1", "MOI 2", "MOI 3", "MOI 4", "MOI 5"],
        datasets: datasets,
      }}
    />
  );
}
