import { ReactNode } from "react";
import LogoPlay from "./LogoPlay";
import Link from "next/link";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <div className=" bg-[#F4F3F3] text-white">
      <div className="h-[100px] max-w-6xl md:mx-auto">
        <div className="h-full p-4">
          <div className="relative flex h-full justify-between ">
            <div className="absolute -bottom-8 -left-8">
              <Link href="/">
                {/* <LogoPlay width={120} /> */}
                <Logo width={120} />
              </Link>
            </div>
            <div></div>
            <div className="text-ye flex items-center gap-4 font-semibold">
              <Link className="text-[black]" href="/OnlineCourse">
                Online Course
              </Link>
              <Link className="text-[black]" href="/DataStandards">
                Data Standards
              </Link>
              {/* <button className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
