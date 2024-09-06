import { Dispatch, ReactNode, useMemo } from "react";
import ExpandIcon from "./ExpandIcon";
import { SetStateAction } from "react";

export default function AccordionElement({
  id,
  title,
  content,
  setOpenModules,
  openModules,
}: {
  openModules: number[];
  setOpenModules: Dispatch<SetStateAction<number[]>>;
  id: number;
  title: ReactNode;
  content: ReactNode;
}) {
  const open = openModules.includes(id);

  return (
    <li
      onClick={(e) => {
        if (!openModules.includes(id)) {
          setOpenModules([...openModules, id]);
        }
      }}
      className={`${open ? "collapse-open" : ""} collapse border-b pr-0 shadow  duration-500 md:duration-300`}
    >
      <div className="collapse-title relative flex h-min justify-between gap-8 p-4 font-poppins text-lg font-bold">
        {title}
        <ExpandIcon
          open={open}
          callback={() => {
            let x = [...openModules];
            let targetIdx = x.indexOf(id);
            if (open) {
              // x.splice(x.indexOf(id, 1));
              let a = x
                .slice(0, targetIdx)
                .concat(x.slice(targetIdx + 1, x.length));
              setOpenModules(a);
            } else {
              x.push(id);
              setOpenModules(x);
            }
          }}
        />
      </div>
      <div className="collapse-content text-pretty pl-6 pr-12 font-roboto text-lg md:text-base">
        {content}
      </div>
    </li>
  );
}
// #95bcc1
// #51bcc3
