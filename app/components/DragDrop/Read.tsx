// export default function Read({ read }: { read: string }) {
//   return (
//     <div
//       draggable
//       className="grid  px-1 [grid-template-columns:repeat(15,auto)]"
//     >
//       {read.split("").map((e, i) => {
//         return (
//           <div key={i} className=" flex items-center justify-center px-[1px]">
//             <span className="mt-1">{e}</span>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

import { useDrag } from "react-dnd";

export default function Read({
  gridColStart,
  read,
}: {
  gridColStart?: number;
  read: { id: number; val: string };
}) {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => {
    return {
      type: "read",
      item: read,
      collect: (monitor) => {
        const offset = monitor.getDifferenceFromInitialOffset();
        console.log(offset);
        return {
          isDragging: !!monitor.isDragging(),
        };
      },
    };
  });

  return (
    <div
      ref={drag}
      style={
        gridColStart
          ? {
              // gridColumnStart: ,
              // color: "green",
              gridColumn: `${gridColStart} / span 15`,
              // WebkitTextStroke: "1px",
              // WebkitTextStrokeColor: "black",
              // color: "red",
            }
          : {
              // border: isDragging ? "2px solid black" : "2px solid transparent",
              // WebkitTextStroke: "1px",
              // WebkitTextStrokeColor: "black",
              // color: "white",
            }
      }
      className=" relative grid w-[240px] border-2 border-transparent [grid-template-columns:repeat(15,_1fr)] hover:border-black"
    >
      {read.val.split("").map((e, i) => {
        return (
          <div key={i} className=" flex items-center justify-center px-[1px]">
            <span className="mt-1">{e}</span>
          </div>
        );
      })}
    </div>
  );
}
