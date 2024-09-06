import { CSSProperties, useEffect, useRef } from "react";

export default function SequencingOneLabel({
  left,
  top,
  size,
  text,
  rowNumber,
  labelClassName,
  readRowHeight,
  border,
  active,
  labelStyle,
}: {
  labelStyle?: CSSProperties;
  active: boolean;
  border?: string;
  readRowHeight: number;
  labelClassName?: string;
  rowNumber: number;
  text?: string;
  left: number;
  top: number;
  size: number;
}) {
  const labelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (active && labelRef?.current && text === "Sequencing depth: 6") {
      labelRef.current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div
      ref={labelRef}
      className={
        active ? "scroll-mx-12 transition-[height] duration-1000" : "invisible"
      }
      style={{
        position: "absolute",
        height: active ? readRowHeight * rowNumber - 8 : 0,
        left: left + 6,
        top: top + 4,
      }}
    >
      <div className="flex h-full items-end justify-end">
        <div
          className={`h-full w-2 ${border ? border : "border-y-primaryGreen border-r-primaryGreen"} relative border-[2px] border-l-transparent`}
        >
          {/* <div className="absolute left-0 right-1/2 -translate-x-[2.5px] -top-1 -bottom-1 w-1.5 bg-white"></div> */}
        </div>
        {text && (
          <label
            style={{
              ...labelStyle,
            }}
            className={active ? labelClassName : "hidden"}
          >
            {text}
          </label>
        )}
      </div>
      {/* <div className="w-full text-center mb-1">
        <label className="text-sm text-primaryGreen">{text}</label>
      </div>
      <div className=" relative border-primaryGreen border-[2px] h-3 w-full">
        <div className="bg-zinc-50 absolute left-0 right-0 top-1/2 h-1/2 translate-y-[3px] border-x border-2 border-white"></div>
      </div> */}
    </div>
  );
}
