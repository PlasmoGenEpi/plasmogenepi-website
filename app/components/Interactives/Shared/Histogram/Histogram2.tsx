import { Bar } from "react-chartjs-2";

export default function Histogram2() {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="w-[500px]">
        <Bar
          options={{
            plugins: {
              annotation: {
                annotations: [
                  {
                    type: "line",
                    xMin: 0,
                    xMax: 5,
                    yMin: 2.6,
                    yMax: 2.6,
                    borderColor: "red",
                    borderDash: [4],
                  },
                ],
              },
            },
          }}
          data={{
            labels: ["MOI 1", "MOI 2", "MOI 3", "MOI 4", "MOI 5"],
            datasets: [
              {
                label: "SNP",
                data: [2.6],
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
