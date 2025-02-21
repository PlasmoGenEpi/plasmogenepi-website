import { ReactNode } from "react";

export default function InfectionArrayElement({
  children,
  MOI,
  active,
  id,
  callback,
}: {
  callback?: () => void;
  id: number;
  active: boolean | null;
  children: ReactNode;
  MOI: number;
}) {
  return (
    <button
      onClick={() => {
        if (callback) {
          callback();
        }
      }}
      // className={`flex pb-1 pr-2 pt-2 outline-2 outline-black transition-all ${active ? "z-10 bg-primaryBlue/20 outline" : "bg-gray-100 opacity-50 hover:bg-primaryBlue/10 hover:opacity-100 hover:outline focus:z-10 focus:bg-primaryBlue/10 focus:opacity-100 focus:outline"}`}
      className={`flex gap-8 p-1 outline-2 transition-all ${active ? "z-10 bg-white outline outline-primaryBlue" : "opacity-50 outline-black hover:bg-white hover:opacity-100 hover:outline focus:z-10 focus:bg-white focus:opacity-100 focus:outline"}`}
    >
      {/* <div className="flex h-full pr-2 text-end">
        <span className="min-w-[20px] translate-y-2 text-end text-base font-bold text-black">
          {id}
        </span>
      </div> */}
      <div className="flex h-full grow">{children}</div>
      {/* <div>
        <span>4</span>
      </div> */}
    </button>
  );
}
