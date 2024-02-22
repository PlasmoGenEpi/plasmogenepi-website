export default function LabelThree({
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
  text: string;
  left: number;
  top: number;
  size: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        height: readRowHeight * rowNumber,
        left: left + 2,
        top: top,
      }}
    >
      <div className="flex h-full justify-end items-center relative">
        <label className={labelClassName}>{text}</label>
        <div className="h-full w-3 border-primaryGreen relative border-2">
          <div className="absolute translate-x-[3px] inset-0 -top-1 -bottom-1 "></div>
        </div>
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
