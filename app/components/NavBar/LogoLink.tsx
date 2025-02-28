import Link from "next/link";
import PlasmoGenEpiLogo from "../Logos/PlasmoGenEpiLogo";

export default function LogoLink() {
  return (
    <Link href={"/"} className="flex w-fit items-end">
      <PlasmoGenEpiLogo height={96} className="" />
      <div className="ml-2 flex flex-col font-poppins">
        <span className="text-2xl font-bold tracking-tighter">
          PlasmoGenEpi
        </span>
        <span className="whitespace-nowrap text-xs font-bold text-cyan-800">
          Plasmodium Genetic Epidemiology
        </span>
      </div>
    </Link>
  );
}
