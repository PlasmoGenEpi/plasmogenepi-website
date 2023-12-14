import { memo } from "react";

export const Read2 = memo(function Read2({
  text,
  preview,
  specials,
}: {
  specials: {
    color: string;
    [key: number]: string;
  };
  text: string;
  preview: boolean;
}) {
  return (
    <div
      className="relative grid border border-black py-[1px] [grid-template-columns:repeat(15,20px)]"
      role={preview ? "BoxPreview" : "Box"}
    >
      {text?.split("").map((el, idx) => {
        return (
          <div
            style={{
              backgroundColor: specials?.color,
              color: specials ? specials[idx] : null,
            }}
            key={idx}
            className="flex w-4 select-none items-center justify-center"
          >
            <span className="translate-y-[3px]">{el}</span>
          </div>
        );
      })}
    </div>
  );
});
