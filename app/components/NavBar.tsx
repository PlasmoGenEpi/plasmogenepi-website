import { ReactNode } from "react";
import LogoPlay from "./LogoPlay";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className=" bg-[#C7D2D7]">
      <div className="h-[100px] max-w-6xl md:mx-auto">
        <div className="h-full p-4">
          <div className="relative flex h-full justify-between ">
            <div className="absolute -bottom-8 -left-8">
              <Link href="/">
                <LogoPlay width={120} />
              </Link>
            </div>
            <div></div>
            <div className="flex items-center gap-4 font-semibold text-black">
              <Link href="/OnlineCourse">Online Course</Link>
              <Link href="/DataStandards">Data Standards</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
