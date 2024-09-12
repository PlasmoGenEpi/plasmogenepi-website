import Link from "next/link";
import { ReactNode } from "react";

export default function PrimaryNav({
  icon_svg,
  active,
  display,
  path,
  hidden,
  first,
  last,
}: {
  first?: boolean;
  last?: boolean;
  hidden: boolean;
  icon_svg: ReactNode;
  active: boolean;
  display: string;
  path: string;
}) {
  return (
    <div
      className={`${hidden ? "invisible md:visible md:flex" : "flex"} ${
        active ? "border-pge-dark-teal" : "border-transparent"
      }  whitespace-nowrap py-1 text-center md:basis-full md:border-t-8 ${
        first ? "pt-4 md:pt-1" : last ? "pb-4 md:pb-1" : ""
      }`}
    >
      <Link
        className={`flex basis-full px-4 py-4 font-overpass text-sm font-bold uppercase tracking-tight md:basis-auto md:py-2 ${
          active
            ? "text-[hsl(191.65deg_63.98%_61.57%)] md:text-black"
            : "text-gray-500"
        } md:mx-auto md:hover:text-black md:focus-visible:text-black`}
        href={path}
      >
        <div className="h-0 w-10 fill-current md:hidden">{icon_svg}</div>
        <span className="translate-y-0.5">{display}</span>
      </Link>
    </div>
  );
}
