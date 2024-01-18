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
          ? "text-white whitespace-nowrap py-2 font-sans text-sm font-bold uppercase underline underline-offset-4 transition-all md:border-b-4 md:border-pge-dark-blue md:text-[#1a1a1a] md:no-underline"
          : " hover:text-white md:hover-text-[rgb(26,26,26)] whitespace-nowrap py-2 font-sans text-sm font-bold uppercase text-[#a7a7b1] transition-all hover:transition-all md:border-b-4 md:border-b-transparent md:hover:text-[#1a1a1a]"
      }
      href={path}
    >
      <div className=" flex h-8 items-center md:h-auto">
        <div className="flex basis-1/3">
          <div className="ml-auto mr-4 inline-block fill-current md:hidden">
            {icon_svg}
          </div>
        </div>
        <div className="grow md:grow-0">
          <span> {display}</span>
        </div>
      </div>
    </Link>
  );
  return (
    <Link
      className={
        active
          ? "place-self-end whitespace-nowrap py-2 font-sans text-sm font-bold uppercase transition-all md:border-b-2 md:border-pge-dark-blue"
          : " place-self-end whitespace-nowrap py-2 font-sans text-sm font-bold uppercase text-[#a7a7b1] transition-all hover:transition-all md:border-b-2 md:border-transparent"
      }
      href={path}
    >
      {display}
    </Link>
  );
}
