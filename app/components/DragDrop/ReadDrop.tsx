// export default function ReadDrop({
//   gridColStart,
//   read,
// }: {
//   gridColStart?: number;
//   read: string;
// }) {
//   return (
//     <div
//       style={
//         gridColStart
//           ? {
//               // gridColumnStart: ,
//               gridColumn: `${gridColStart} /span 15`,
//             }
//           : {}
//       }
//       className="relative grid h-4 [grid-template-columns:repeat(15,_1fr)]"
//     >
//       {read.split("").map((e, i) => {
//         return (
//           <div key={i} className=" flex items-center justify-center">
//             <span className="absolute mt-1">{e}</span>{" "}
//           </div>
//         );
//       })}
//     </div>
//   );
// }
