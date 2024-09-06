import StandardLayout from "@/components/Interactives/Shared/misc/StandardLayout";
import SNPComparator from "../Comparators/SNPs/SNPComparator";
import {
  pairwiseCombosAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import LabelRow from "../../PartOne/CloneRowTable/LabelRow";
import FormHeader from "@/components/Interactives/Shared/misc/FormHeader";
import { useEffect } from "react";

export default function SNPSlidoPolls() {
  const pairwiseCombos = useAtomValue(pairwiseCombosAtom);
  const phase = useAtomValue(phaseAtom);

  let x =
    pairwiseCombos[1][2].filter((bool) => {
      return bool;
    }).length / 12;

  let y =
    pairwiseCombos[1][3].filter((bool) => {
      return bool;
    }).length / 12;

  let z =
    pairwiseCombos[2][3].filter((bool) => {
      return bool;
    }).length / 12;

  return (
    <StandardLayout>
      <div>
        <FormHeader text={`IBS Estimates with SNPs`} />
        <table className="table text-center">
          <thead>
            <tr className=" text-sm">
              <th>Comparisons</th>
              <th>IBS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-none">
              <td className="w-[500px] px-0 py-2">
                <SNPComparator activeCombo={[1, 2]} />
              </td>
              <td>{(x * 100).toFixed(1)}%</td>
            </tr>
            <tr className="border-none">
              <td className="w-[500px] px-0 py-2">
                <SNPComparator activeCombo={[1, 3]} />
              </td>
              <td>{(y * 100).toFixed(1)}%</td>
            </tr>
            <tr className="border-none">
              <td className="w-[500px] px-0 py-2">
                <SNPComparator activeCombo={[2, 3]} />
              </td>
              <td>{(z * 100).toFixed(1)}%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <FormHeader text={`Questions`} />
        <iframe
          src="https://app.sli.do/event/o445xbTNV7bUmtyisW5xDc/embed/polls/6c50ab9d-df6a-4fa7-9d7d-3b386614789c"
          className={phase === 6 ? "h-[400px] w-full" : "hidden"}
        ></iframe>
        <iframe
          src="https://app.sli.do/event/o445xbTNV7bUmtyisW5xDc/embed/polls/95a7a599-123d-496a-ba23-7b48e4be9740"
          className={
            phase === 7 ? "h-[400px] w-full [&>*]:overflow-hidden" : "hidden"
          }
        ></iframe>
      </div>
    </StandardLayout>
  );
}
