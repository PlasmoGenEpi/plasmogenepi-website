import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import SNPComparator from "../Comparators/SNPs/SNPComparator";
import {
  pairwiseCombosAtom,
  phase2Atom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import LabelRow from "../../PartOne/CloneRowTable/LabelRow";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import { useEffect } from "react";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export default function SNPSlidoPolls({ lang }: { lang: "EN" | "FR" | "PT" }) {
  const pairwiseCombos = useAtomValue(pairwiseCombosAtom);
  const phase = useAtomValue(phase2Atom);

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
    <InteractivePrimaryLayout
      leftHeader={
        lang === "EN"
          ? `IBS Estimates with SNPs`
          : lang === "FR"
          ? `Estimations IBS avec SNPs`
          : lang === "PT"
          ? `Estimativas de IBS com SNPs`
          : ``
      }
      leftContent={
        <table className="table text-center">
          <thead>
            <tr className=" text-sm">
              <th>
                {lang === "EN"
                  ? `Comparisons`
                  : lang === "FR"
                  ? `Comparaisons`
                  : lang === "PT"
                  ? `Comparações`
                  : ``}
              </th>
              <th>IBS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-none">
              <td className="w-[500px] px-0 py-2">
                <SNPComparator activeCombo={[1, 2]} lang={lang} />
              </td>
              <td>{(x * 100).toFixed(1)}%</td>
            </tr>
            <tr className="border-none">
              <td className="w-[500px] px-0 py-2">
                <SNPComparator activeCombo={[1, 3]} lang={lang} />
              </td>
              <td>{(y * 100).toFixed(1)}%</td>
            </tr>
            <tr className="border-none">
              <td className="w-[500px] px-0 py-2">
                <SNPComparator activeCombo={[2, 3]} lang={lang} />
              </td>
              <td>{(z * 100).toFixed(1)}%</td>
            </tr>
          </tbody>
        </table>
      }
      rightHeader={``}
      rightContent={
        <QuestionResponseText
          visible
          text={
            lang === "EN"
              ? `Approximately 50% of loci should match in each of these comparisons. You may see that some pairs of clones have a higher IBS than others. Does this mean those clones are more closely related than the others? No, we know they are not - IBD is zero! Any difference in IBS between these pairs is purely due to random chance. If you repeat the activity, you will get a different IBS result every time, but the clones are still completely unrelated.`
              : lang === "FR"
              ? `Environ 50 % des loci devraient correspondre dans chacune de ces comparaisons. Vous constaterez peut-être que certaines paires de clones ont un IBS plus élevé que d'autres. Cela signifie-t-il que ces clones sont plus étroitement liés que les autres ? Non, nous savons que ce n'est pas le cas - l'IBD est nul ! Toute différence d'IBS entre ces paires est uniquement due au hasard. Si vous répétez l'activité, vous obtiendrez un résultat d'IBS différent à chaque fois, mais les clones ne seront toujours pas liés.`
              : lang === "PT"
              ? `Aproximadamente 50% dos loci devem corresponder em cada uma destas comparações. Pode ver que alguns pares de clones têm um IBS mais elevado do que outros. Isto significa que esses clones estão mais estreitamente relacionados do que os outros? Não, sabemos que não estão - a DII é zero! Qualquer diferença no IBS entre estes pares deve-se puramente ao acaso. Se repetir a atividade, obterá um resultado de IBS diferente de cada vez, mas os clones continuam a não estar relacionados.`
              : ``
          }
        />
      }
    />
  );

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
        <QuestionResponseText />
        {/* <FormHeader text={`Questions`} />
        <iframe
          src="https://app.sli.do/event/o445xbTNV7bUmtyisW5xDc/embed/polls/6c50ab9d-df6a-4fa7-9d7d-3b386614789c"
          className={phase === 6 ? "h-[400px] w-full" : "hidden"}
        ></iframe>
        <iframe
          src="https://app.sli.do/event/o445xbTNV7bUmtyisW5xDc/embed/polls/95a7a599-123d-496a-ba23-7b48e4be9740"
          className={
            phase === 7 ? "h-[400px] w-full [&>*]:overflow-hidden" : "hidden"
          }
        ></iframe> */}
      </div>
    </StandardLayout>
  );
}
