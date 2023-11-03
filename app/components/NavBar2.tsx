import Link from "next/link";
import LogoTransparent from "./LogoTransparent";

export default function NavBar2({ currentNav }: { currentNav: string }) {
  return (
    <div className="">
      <div className="border-b">
        <div className="mx-auto flex max-w-6xl p-2">
          <Link href="/">
            <LogoTransparent width={75} color="black" />
          </Link>
          <div className="ml-4 flex grow justify-end gap-4 text-sm uppercase">
            {" "}
            <Link
              className={
                currentNav === "OnlineCourse"
                  ? "place-self-end border-b-4 border-[rgba(12,25,44)] py-2 font-sans font-bold transition-all"
                  : "place-self-end border-b-4 border-transparent py-2 font-sans font-bold text-black text-opacity-60 transition-all hover:text-opacity-100 hover:transition-all"
              }
              href="/OnlineCourse"
            >
              Online Course
            </Link>
            <Link
              className={
                currentNav === "DataStandards"
                  ? "place-self-end border-b-4 border-[rgba(12,25,44)] py-2 font-sans font-bold transition-all"
                  : "place-self-end border-b-4 border-transparent py-2 font-sans  font-bold text-black text-opacity-60 transition-all hover:text-opacity-100 hover:transition-all"
              }
              href="/DataStandards"
            >
              Data Standards
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="mx-auto flex max-w-6xl justify-end text-center text-sm uppercase">
        <Link
          className={
            currentNav === "OnlineCourse"
              ? "bg-[rgba(12,25,44,.90)] px-8 py-2 font-sans font-bold text-white transition-all"
              : "px-8 py-2 font-sans font-bold text-opacity-60 transition-all hover:text-opacity-100 hover:transition-all"
          }
          href="/OnlineCourse"
        >
          Online Course
        </Link>
        <Link
          className={
            currentNav === "DataStandards"
              ? "bg-[rgba(12,25,44,.90)] px-8 py-2 font-sans font-bold text-white transition-all"
              : "px-8 py-2 font-sans font-bold text-opacity-60 transition-all hover:text-opacity-100 hover:transition-all"
          }
          href="/DataStandards"
        >
          Data Standards
        </Link>
      </div> */}
    </div>
  );
}
