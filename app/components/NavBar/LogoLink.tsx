import Link from "next/link";
import LogoTransparent from "../LogoTransparent";

export default function LogoLink() {
  return (
    <Link className=" flex w-fit  items-end p-2 md:flex-row" href="/">
      <LogoTransparent width={60} color="black" />
      <div className="ml-2 flex translate-y-1 flex-col font-poppins text-2xl font-bold">
        <span className="">PlasmoGenEpi</span>
        <span className="text whitespace-nowrap text-xs text-pge-blue">
          Plasmodium Genetic Epidemiology
        </span>
      </div>
    </Link>
  );
}
