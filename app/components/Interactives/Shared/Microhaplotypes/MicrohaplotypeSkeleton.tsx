import { microhaplotypeColorMap } from "./MicrohaplotypeTable/MicrohaplotypeTableRow";

export default function MicrohaplotypeSkeleton({
  microId,
}: {
  microId: [0 | 1, 0 | 1, 0 | 1];
}) {
  return (
    <div
      className={`aspect-[4/1] border-2 ${microhaplotypeColorMap.get(JSON.stringify(microId))}`}
    >
      <div className="h-full w-full bg-white bg-opacity-50"></div>
    </div>
  );
}
