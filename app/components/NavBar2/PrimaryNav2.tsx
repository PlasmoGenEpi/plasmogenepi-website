import Link from "next/link";
import { ReactNode } from "react";

export default function PrimaryNav({
  icon_svg,
  active,
  display,
  path,
  hidden,
}: {
  hidden: boolean;
  icon_svg: ReactNode;
  active: boolean;
  display: string;
  path: string;
}) {
  return (
    <div
      className={`${hidden ? "invisible md:visible md:flex" : "flex"}  basis-full whitespace-nowrap  py-1 text-center`}
    >
      <Link
        className={`ml-24 flex px-4 py-2 font-overpass text-sm font-bold uppercase tracking-tight ${active ? "text-[hsl(191.65deg_63.98%_61.57%)] md:text-black" : "text-gray-500"} hover:text-black md:mx-auto`}
        href={path}
      >
        <div className="h-0 w-10 fill-current md:hidden">{icon_svg}</div>
        <span className="translate-y-0.5">{display}</span>
      </Link>
    </div>
  );
}
