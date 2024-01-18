import Link from "next/link";
import LogoTransparent from "../LogoTransparent";
import PrimaryNav from "./Links/PrimaryNav";
import DropdownMenu from "../DropdownMenu";

export default function NavBar({ currentNav }: { currentNav: string }) {
  return (
    <div className=" pt-[106px] md:pt-0">
      <div className="bg-zinc-50 fixed top-0 z-50 h-[106px] w-full border-b-[16px] border-pge-blue md:static">
        <div className="mx-auto flex max-w-6xl flex-col md:flex-row">
          <Link className=" flex items-end  p-2 md:flex-row" href="/">
            <LogoTransparent width={60} color="black" />
            <div className="ml-2 flex translate-y-1 flex-col font-poppins text-2xl font-bold">
              <span className="">PlasmoGenEpi</span>
              <span className="text whitespace-nowrap text-xs text-pge-blue">
                Plasmodium Genetic Epidemiology
              </span>
            </div>
          </Link>
          <DropdownMenu currentNav={currentNav} />
          {/* <div className="hidden gap-4 md:flex">
              <PrimaryNav
                active={currentNav === "OnlineCourse"}
                display="Online Course"
                path="/OnlineCourse"
              />
              <PrimaryNav
                active={currentNav === "DataStandards"}
                display="Data Standards"
                path="/DataStandards"
              />
              <PrimaryNav
                active={currentNav === "Groups"}
                display="Groups"
                path="/Groups"
              />
              <PrimaryNav
            active={currentNav === "Contact"}
            display="Contact"
            path="/Contact"
          />
            </div> */}
        </div>
        {/* <DropdownMenu /> */}
        {/* <div className="absolute h-40 w-full bg-pge-blue py-2 md:h-0"></div> */}
      </div>
    </div>
  );
}
