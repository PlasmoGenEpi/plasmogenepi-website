import Link from "next/link";
import PlasmoGenEpiLogo from "../Logos/PlasmoGenEpiLogo";

export default function LogoLink3() {
  return (
    <div className="grid font-poppins [grid-template-columns:minmax(50px,auto)_auto] [grid-template-rows:1fr_auto]">
      <div className="col-start-1 min-w-[4rem]">
        <PlasmoGenEpiLogo height={96} className="dark:fill-[#ececec] " />
      </div>
      <div className="col-start-2 row-start-1 grid w-fit items-end pl-1">
        <span className=" block text-2xl font-bold tracking-tighter [line-height:20px] dark:text-[#ececec]">
          PlasmoGenEpi
        </span>
      </div>
      <div className="col-span-2 row-start-2 text-end ">
        <span className=" whitespace-nowrap text-xs font-bold text-cyan-800 dark:text-pge-dark-yellow">
          Plasmodium Genetic Epidemiology
        </span>
      </div>
    </div>
  );

  return (
    <Link href={"/"} className="flex w-fit items-end">
      <PlasmoGenEpiLogo height={96} className="dark:fill-[#ececec] " />
      <div className="ml-2 flex flex-col font-poppins">
        <span className="text-2xl font-bold tracking-tighter dark:text-[#ececec]">
          PlasmoGenEpi
        </span>
        <span className="whitespace-nowrap text-xs font-bold text-cyan-800 dark:text-pge-dark-yellow">
          Plasmodium Genetic Epidemiology
        </span>
      </div>
    </Link>
  );
}
