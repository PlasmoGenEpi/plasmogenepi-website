"use client";
// import { Chart } from "chart.js";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart, Bar } from "react-chartjs-2";
import { useAtomValue } from "jotai";
import annotationPlugin from "chartjs-plugin-annotation";
import { useEffect, useMemo, useState } from "react";
import { viewWidthAtom } from "../InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

ChartJS.register(...registerables);
ChartJS.register(annotationPlugin);

const options = {
  response: true,
  maintainAspectRatio: true,
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
    annotation: {
      // annotations: {
      //   line1: {
      //     type: "line",
      //     yMin: 0,
      //     yMax: 12,
      //     xMin: 2.6,
      //     xMax: 2.6,
      //     borderColor: "red",
      //     borderWidth: 4,
      //     borderDash: [4],
      //   },
      // },
    },
    legend: {
      display: false,
      position: "bottom",
      align: "middle",
      labels: {
        // display: false,
        fontSize: 17,
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
  label,
  color,
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
  label?: string;
  color: string;
}) {
  const viewWidth = useAtomValue(viewWidthAtom);
  const [containerWidth, setContainerWidth] = useState(0);
  const [change, setChange] = useState(false);

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

  if (change) {
    return null;
  }

  return (
    <div className="block">
      <Bar
        key={containerWidth}
        // className="w-full"
        //@ts-ignore
        options={options}
        data={{
          labels: ["MOI 1", "MOI 2", "MOI 3", "MOI 4", "MOI 5"],
          datasets: datasets,
        }}
      />
      <div className="flex flex-col mt-4 text-[hsl(0,0%,39%)] text-base">
        <div className="inline-flex gap-2 w-fit mx-auto">
          <div className={`inline h-[.75lh] w-[2lh] ${color}`}></div>
          <label>{label}</label>
        </div>
      </div>{" "}
    </div>
  );
}
