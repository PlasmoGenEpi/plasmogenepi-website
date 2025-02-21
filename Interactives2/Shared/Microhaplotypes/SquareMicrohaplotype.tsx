import {
  getRowConfiguration,
  microhaplotypeColorMap,
} from "./MicrohaplotypeTable/MicrohaplotypeTableRow";

export default function SquareMicrohaplotype({
  id,
  className,
  noTooltip,
}: {
  noTooltip?: boolean;
  id: number;
  className?: string;
}) {
  return (
    <li
      aria-label={`Microhaplotype ${id + 1}`}
      data-tip={`Microhaplotype ${id + 1}`}
      className={
        className && className?.indexOf("pointer-events-none") !== -1
          ? "tooltip pointer-events-none"
          : `tooltip before:z-50`
      }
    >
      <div
        className={`aspect-square border-2 shadow ${className} ${microhaplotypeColorMap.get(JSON.stringify(getRowConfiguration(id)))}`}
      >
        <div className="h-full w-full bg-white/80"></div>
      </div>
    </li>
  );
}
