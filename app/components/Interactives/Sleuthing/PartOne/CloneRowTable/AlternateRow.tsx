import CloneElement from "@/app/components/Interactives/Shared/CloneRow/CloneElement";
import CloneRow from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import { fixedData } from "@/data/Interactives/fixedData";

export default function AlternateRow({
  refValues,
  altValues,
}: {
  refValues: string[];
  altValues: string[];
}) {
  return (
    <div
      aria-label={`reference allele row`}
      className={`grid gap-1 font-helvetica [grid-template-columns:8%_auto]`}
    >
      <div>
        <div
          style={
            {
              // boxShadow: `0.5px 0.5px 0px 1px currentColor`,
            }
          }
          className={`relative aspect-square rounded-full`}
        >
          <div className="@2xl/main:flex @2xl/main:justify-end absolute right-4 top-1/2 hidden aspect-square items-center rounded-full">
            <span className="absolute translate-y-[3px] font-bold">
              Alternate
            </span>
          </div>
          <div className="@2xl/main:hidden absolute right-4 top-1/2 flex aspect-square items-center justify-center rounded-full">
            <span className="absolute translate-y-[3px] font-bold">Alt</span>
          </div>
        </div>
      </div>
      <ol className={`grid grow grid-cols-12 gap-1 p-1 pt-0`}>
        {altValues.map((altVal, idx) => {
          return (
            <CloneElement
              className="bg-white text-black dark:brightness-75"
              possibleValues={{
                alternate: altVal,
                reference: refValues[idx],
              }}
              val={1}
              key={idx}
            />
          );
        })}
      </ol>
    </div>
  );
}
