import Link from "next/link";
import { ReactNode } from "react";

export default function PrimaryNav({
  icon_svg,
  active,
  display,
  path,
}: {
  icon_svg: ReactNode;
  active: boolean;
  display: string;
  path: string;
}) {
  return (
    <Link
      className={
        active
          ? "whitespace-nowrap py-2  text-sm font-bold uppercase text-white underline underline-offset-4 transition-all dark:hover:text-pge-yellow dark:focus:text-pge-yellow md:border-b-4 md:border-pge-dark-blue md:text-[#1a1a1a] md:no-underline"
          : "whitespace-nowrap py-2  text-sm font-bold uppercase text-[#a7a7b1] transition-all hover:text-white hover:transition-all dark:hover:text-pge-yellow dark:focus:text-pge-yellow md:border-b-4 md:border-b-transparent md:hover:text-[#1a1a1a]"
      }
      href={path}
    >
      <div className=" flex h-8 items-center md:h-auto">
        <div className="flex basis-1/3">
          <div className="ml-auto mr-4 inline-block fill-current md:hidden">
            {icon_svg}
          </div>
        </div>
        <div className="grow translate-y-0.5 font-overpass tracking-tight md:grow-0">
          <span> {display}</span>
        </div>
      </div>
    </Link>
  );
}
