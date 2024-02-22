export default function LabelTwo({
  left,
  top,
  size,
  text,
  rowNumber,
  labelClassName,
  readRowHeight,
}: {
  readRowHeight: number;
  labelClassName?: string;
  rowNumber: number;
  text?: string;
  left: number;
  top: number;
  size: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        height: readRowHeight * rowNumber - 8,
        left: left + 2,
        top: top + 4,
      }}
    >
      <div className="flex h-full justify-end items-end">
        <div className="h-full w-3 border-primaryGreen relative border-2">
          <div className="absolute left-0 right-1/2 -translate-x-[2.5px] -top-1 -bottom-1 w-1.5 bg-white"></div>
        </div>
        {text && <label className={labelClassName}>{text}</label>}
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
