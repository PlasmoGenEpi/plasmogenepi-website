import { readsAtom } from "@/store";
import Read from "./Read";
import { useAtom } from "jotai";

export default function ReadsContainer() {
  const [reads, setReads] = useAtom(readsAtom);
  return (
    <div className=" grid w-fit">
      {reads?.map((read, i) => {
        return (
          <div key={i} className=" flex">
            <div className="relative flex w-8 items-center ">
              <span className="absolute right-0 mt-1 -translate-x-2">
                {read.id}
              </span>
            </div>
            <div
              className={
                read.col !== null
                  ? "pointer-events-none opacity-20"
                  : "opacity-100"
              }
            >
              <Read read={read} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
