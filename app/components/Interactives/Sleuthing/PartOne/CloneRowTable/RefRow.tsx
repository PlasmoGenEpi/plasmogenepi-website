import CloneElement from "@/app/components/Interactives/Shared/CloneRow/CloneElement";
import CloneRow from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import { fixedData } from "@/data/Interactives/fixedData";

export default function RefRow({
  refValues,
  altValues,
  lang,
}: {
  lang: "EN" | "FR" | "PT";
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
          <div className="absolute right-4 top-1/2 hidden aspect-square items-center rounded-full @2xl/main:flex @2xl/main:justify-end">
            <span className="absolute translate-y-[3px] font-bold">
              {lang === "EN"
                ? `Reference`
                : lang === "FR"
                ? `Référence`
                : `Referência`}
            </span>
          </div>
          <div className="absolute right-4 top-1/2 flex aspect-square items-center justify-center rounded-full @2xl/main:hidden">
            <span className="absolute translate-y-[3px] font-bold">Ref</span>
          </div>
        </div>
      </div>
      <ol className={`grid grow grid-cols-12 gap-1 p-1`}>
        {refValues.map((refVal, idx) => {
          return (
            <CloneElement
              className="bg-white text-black dark:brightness-75"
              possibleValues={{
                alternate: altValues[idx],
                reference: refVal,
              }}
              val={0}
              key={idx}
            />
          );
        })}
      </ol>
    </div>
  );
}
