"use client";
import CloneElement from "@/app/components/Interactives/Shared/CloneRow/CloneElement";

let teaserPossibleValues = [
  {
    reference: "T",
    alternate: "C",
  },
  {
    reference: "T",
    alternate: "A",
  },
  {
    reference: "T",
    alternate: "C",
  },
  {
    reference: "C",
    alternate: "G",
  },
  {
    reference: "T",
    alternate: "A",
  },
  {
    reference: "C",
    alternate: "G",
  },
];

export default function StepOneTeaser() {
  return (
    <div className="place-items-center/ flex flex-wrap">
      <div>
        <div className="grid grid-rows-1 gap-x-0.5">
          {Array(6)
            .fill(0)
            .map((el, idx) => {
              return (
                <div
                  key={idx}
                  className="row-start-1 grid w-4 grid-rows-3 text-xl font-bold"
                >
                  <span>{teaserPossibleValues[idx].reference}</span>
                  <span className="alternateAllele">
                    {teaserPossibleValues[idx].alternate}
                  </span>
                  <span className="alternateAllele/">
                    {teaserPossibleValues[idx].reference}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
