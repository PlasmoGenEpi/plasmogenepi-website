import { fixedData } from "@/data/Interactives/fixedData";
import { Edge } from "../../Pentagon";
import { useAtom } from "jotai";
import { visibleTooltipsAtom } from "./PentagonTable";

export default function PentagonTableRow({
  edge,
  connection,
}: {
  edge: Edge;
  connection?: string | null;
}) {
  const [visibleTooltips, setVisibleTooltips] = useAtom(visibleTooltipsAtom);

  return (
    <tr
      onFocus={() => {
        setVisibleTooltips([...visibleTooltips, edge]);
      }}
      onBlur={() => {
        let newTooltips = [...visibleTooltips];
        let x = newTooltips.indexOf(edge);
        if (x !== -1) {
          newTooltips.splice(x);
        }
        setVisibleTooltips(newTooltips);
      }}
      tabIndex={0}
      className={`
        ${["EG", "EI", "FH"].includes(edge) ? "hover:bg-microBlue/50 focus:bg-microBlue/50" : edge === "GI" ? "hover:bg-microPurple/50 focus:bg-microPurple/50" : "hover:bg-microRed/50 focus:bg-microRed/50"}
          ? cursor-pointer outline-2 outline-black hover:bg-microBlue/50 hover:outline focus:bg-microBlue/50
          `}
    >
      <td className="p-2">
        <label className="text-xl">{edge[0]}</label>
        <svg
          className="inline-block"
          height={32}
          version="1.1"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
          <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
          <circle
            r={6}
            cx={40}
            cy={80}
            className="fill-white stroke-white stroke-2"
          ></circle>
          <circle
            r={6}
            cx={50}
            cy={65}
            className="fill-white stroke-white stroke-2"
          ></circle>
          <circle
            r={6}
            cx={60}
            cy={80}
            className="fill-white stroke-white stroke-2"
          ></circle>
        </svg>
      </td>
      <td className="p-2">
        <label className="text-xl">{edge[1]}</label>

        <svg
          className="inline-block"
          height={32}
          version="1.1"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
          <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
        </svg>
      </td>
      <td className="p-2">
        {/* @ts-ignore */}
        {(fixedData[8].persons[edge[0]].IBS[edge[1]] * 100).toFixed(2)}
      </td>
      <td className="p-2">
        {connection ? "1.00" : edge === "GI" ? ".50" : "0"}
      </td>
      <td className="p-2">
        {connection ? (
          <span>
            {edge[0]}{" "}
            {connection === "forwards" ? (
              <span className="-translate-y-0.5 text-2xl">&rarr;</span>
            ) : (
              <span className="-translate-y-0.5 text-2xl">&larr;</span>
            )}{" "}
            {edge[1]}
          </span>
        ) : (
          ""
        )}
      </td>
      {/* <td className="text-xl">
    E<span className="inline-block align-text-bottom">&rarr;</span>F
  </td> */}
    </tr>
  );
}
