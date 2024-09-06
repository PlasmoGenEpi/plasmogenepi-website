import { fixedData } from "@/data/Interactives/fixedData";
import CloneElement from "../CloneRow/CloneElement";
import GenotypeOutputElement from "./GenotypeOutputElement";
import GenotypeResult from "./GenotypeResult";

export default function Genotyping({
  valObjs,
  callback,
  possibleValues,
  boardNumber,
  disabled,
  hints,
}: {
  hints?: ({ reference: boolean; alternate: boolean } | null)[];
  disabled?: boolean;
  boardNumber?: number;
  possibleValues: { reference: string; alternate: string }[];
  valObjs: { reference: boolean; alternate: boolean }[];
  callback: (idx: number, ref: boolean) => void;
}) {
  console.log(hints);

  return (
    <div className="flex flex-col gap-16">
      <div>
        <div className={`grid grow grid-cols-12 gap-1 p-1`}>
          {valObjs.map((valObj, idx) => {
            return (
              <div key={idx} className="flex flex-col gap-1">
                <CloneElement
                  ariaLabel={`reference ${fixedData[1].refValues[idx]} ${hints && hints[idx]?.reference === false ? "incorrect" : ""}`}
                  disabled={disabled}
                  checked={valObj.reference}
                  className={
                    valObj.reference
                      ? `bg-green-300/50 ${hints && hints[idx]?.reference === false ? "border-2 border-orange-400" : ""}`
                      : `${hints && hints[idx]?.reference === false ? "border-2 border-orange-400" : ""}`
                  }
                  callback={() => {
                    callback(idx, true);
                  }}
                  possibleValues={
                    possibleValues
                      ? possibleValues[idx]
                      : {
                          alternate: fixedData[1].altValues[idx],
                          reference: fixedData[1].refValues[idx],
                        }
                  }
                  val={0}
                  key={idx}
                />
                <CloneElement
                  ariaLabel={`alternate ${fixedData[1].altValues[idx]} ${hints && hints[idx]?.alternate === false ? "incorrect" : ""}`}
                  checked={valObj.reference}
                  disabled={disabled}
                  className={
                    valObj.alternate
                      ? `bg-green-300/50 ${hints && hints[idx]?.alternate === false ? "border-2 border-orange-400" : ""}`
                      : `${hints && hints[idx]?.alternate === false ? "border-2 border-orange-400" : ""}`
                  }
                  callback={() => {
                    callback(idx, false);
                  }}
                  possibleValues={
                    possibleValues
                      ? possibleValues[idx]
                      : {
                          alternate: fixedData[1].altValues[idx],
                          reference: fixedData[1].refValues[idx],
                        }
                  }
                  val={1}
                  key={idx}
                />
              </div>
            );
          })}
        </div>
        {/* <div className={`grid grow grid-cols-12 gap-1 p-1`}>
          {valObjs.map((valObj, idx) => {
            return (
              <CloneElement
                ariaLabel={`alternate ${fixedData[1].altValues[idx]} ${hints && hints[idx]?.alternate === false ? "incorrect" : ""}`}
                checked={valObj.reference}
                disabled={disabled}
                className={
                  valObj.alternate
                    ? `bg-green-300/50 ${hints && hints[idx]?.alternate === false ? "border-2 border-orange-400" : ""}`
                    : `${hints && hints[idx]?.alternate === false ? "border-2 border-orange-400" : ""}`
                }
                callback={() => {
                  callback(idx, false);
                }}
                possibleValues={
                  possibleValues
                    ? possibleValues[idx]
                    : {
                        alternate: fixedData[1].altValues[idx],
                        reference: fixedData[1].refValues[idx],
                      }
                }
                val={1}
                key={idx}
              />
            );
          })}
        </div> */}
      </div>
      <GenotypeResult
        id={boardNumber ?? 1}
        possibleValues={possibleValues}
        vals={valObjs}
      />
    </div>
  );
}
