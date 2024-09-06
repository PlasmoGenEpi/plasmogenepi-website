import Link from "next/link";
import PlasmoGenEpiLogo from "../Logos/PlasmoGenEpiLogo";

export default function LogoLink() {
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
