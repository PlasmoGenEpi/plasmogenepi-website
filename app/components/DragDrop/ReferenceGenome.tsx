import { readsAtom, refGenome } from "@/store";
import Read from "./Read";
import { useAtomValue } from "jotai";
import { useDrop } from "react-dnd";

export default function ReferenceGenome() {
  return (
    <div className="grid border-b-2 border-black [grid-template-columns:repeat(51,_20px)]">
      {refGenome?.split("").map((e, i) => {
        return (
          <div key={i} className="flex items-center justify-center">
            <span className="mt-1">{e}</span>
          </div>
        );
      })}
    </div>
  );
  // const reads = useAtomValue(readsAtom);
  // const [{ isOver }, drop] = useDrop(() => {
  //   return {
  //     accept: "read",
  //     drop: (item: { id: number; val: string }) => {
  //       addReadToGrid(item.id);
  //     },
  //     hover: (item, monitor) => {
  //       // console.log(item);
  //     },
  //     collect: (monitor) => {
  //       return {
  //         isOver: !!monitor.isOver(),
  //       };
  //     },
  //   };
  // });

  // const addReadToGrid = (id) => {
  //   console.log(id);
  // };

  // return (
  //   <div className="ml-auto w-fit">
  //     <div
  //       style={{
  //         backgroundColor: isOver ? "red" : "",
  //       }}
  //       ref={drop}
  //       className="relative ml-auto grid h-fit w-[816px] border-b-2 border-black [grid-template-columns:repeat(51,_1fr)]"
  //     >
  //       {refGenome?.split("").map((e, i) => {
  //         return (
  //           <div key={i} className="flex items-center justify-center px-[1px]">
  //             <span className="mt-1">{e}</span>
  //           </div>
  //         );
  //       })}
  //     </div>
  //     <div className="relative">
  //       <div className="absolute mt-1 grid grid-flow-dense [grid-template-columns:repeat(51,_1fr)]">
  //         {reads
  //           .filter((read, idx) => {
  //             return read.col !== null;
  //           })
  //           .map((readWithColumn, idx) => {
  //             return (
  //               <Read
  //                 read={readWithColumn}
  //                 gridColStart={readWithColumn.col}
  //                 key={idx}
  //               />
  //             );
  //           })}
  //       </div>
  //     </div>
  //   </div>
  // );
}
