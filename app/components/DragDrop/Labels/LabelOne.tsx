export default function LabelOne({
  left,
  top,
  size,
  text,
  labelClassName,
}: {
  labelClassName: string;
  text: string;
  left: number;
  top: number;
  size: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        width: 15 * size,
        left: left,
        top: top - 4,
      }}
    >
      <div className="w-full text-center mb-1 pointer-events-auto">
        <label className={labelClassName}>{text}</label>
      </div>
      <div className=" relative border-primaryGreen border-[2px] h-2 w-full">
        <div className="bg-zinc-50 absolute left-0 right-0 top-1/2 h-1/2 translate-y-[2px] border-x border-2 border-white"></div>
      </div>
    </div>
  );
}
