import { partSixCloneRowsMHPsAtom } from "@/data/Interactives/interactiveStore";
import GenotypeComposition from "../../PartEight/Genotypes/GenotypeComposition";
import { useAtomValue } from "jotai";
import { P6CloneRowColors } from "../../PartSix/CloneRows/P6MHPCloneRows";

export default function BlueGreenGenotype({
  className,
}: {
  className?: string;
}) {
  const cloneRows = useAtomValue(partSixCloneRowsMHPsAtom);
  return (
    <div
      className={`grid max-w-[500px] gap-1 [grid-template-columns:8%_auto] ${
        className ? className : ""
      }`}
    >
      <div className="my-auto flex min-h-10 w-full flex-col dark:brightness-75">
        <div
          className={`mr-auto aspect-square h-7 translate-y-0.5 rounded-full ${P6CloneRowColors[2]}`}
        ></div>
        <div
          className={`ml-auto aspect-square h-7 -translate-y-0.5 rounded-full ${P6CloneRowColors[3]}`}
        ></div>
      </div>{" "}
      <div>
        <GenotypeComposition
          rowGap={"4px"}
          genotypeComposition={cloneRows[2].vals.map((el, idx) => {
            //@ts-ignore
            return [el + 1, cloneRows[3].vals[idx] + 1];
          })}
        />
      </div>
    </div>
  );
}
