import { ReactNode } from "react";

export default function Prompt({
  header,
  descriptions,
  complete,
  noMin,
}: {
  noMin?: boolean;
  complete: boolean;
  header: string;
  descriptions: ReactNode[];
  // descriptions:
  //   | string[]
  //   | {
  //       className: string;
  //       text: string;
  //     }[];
}) {
  return (
    <div className={noMin ? "" : "md:min-h-[136px] lg:min-h-[112px]"}>
      <div className="justify-between flex">
        <h1 className="text-2xl font-bold">{header}</h1>
        {complete && <span className="text-xl">(Complete)</span>}
      </div>
      {descriptions.map((description, idx) => {
        return description;
        // if (typeof description === "string") {
        //   return (
        //     <p key={idx} className="mt-2">
        //       {description}
        //     </p>
        //   );
        // } else if (typeof description === "object") {
        //   return (
        //     <p className={description.className} key={idx}>
        //       {description.text}
        //     </p>
        //   );
        // }
      })}
    </div>
  );
}
