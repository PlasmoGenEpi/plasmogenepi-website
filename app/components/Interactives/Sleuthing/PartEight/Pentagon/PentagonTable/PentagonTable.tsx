import { partEightPentagonSelectedEdgesAtom } from "@/data/Interactives/interactiveStore";
import { atom, useAtom, useAtomValue } from "jotai";
import PentagonTableRow from "./PentagonTableRow";
import { Edge } from "../../Pentagon";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";

export const visibleTooltipsAtom = atom<Edge[]>([]);

export default function PentagonTable() {
  const selectedEdges = useAtomValue(partEightPentagonSelectedEdgesAtom);
  return (
    <div>
      <table className="table text-center">
        <thead>
          <tr>
            <td>Person 1</td>
            <td>Person 2</td>
            <td>IBS</td>
            <td>IBD</td>
            <td>Connection</td>
          </tr>
        </thead>
        {Object.keys(selectedEdges).map((edge, idx) => {
          return (
            <PentagonTableRow
              edge={edge as Edge}
              key={edge}
              connection={selectedEdges[edge as Edge].direction}
            />
          );
        })}
      </table>
    </div>
  );
}
