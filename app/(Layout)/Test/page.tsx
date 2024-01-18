import LogoTransparent from "@/app/components/LogoTransparent";
import Link from "next/link";

export default function Test() {
  return (
    <div className="">
      <div className=" text-white fixed top-0 w-full bg-pge-blue md:static">
        <div className="mx-auto flex max-w-5xl justify-between px-2">
          <div className="">
            <Link href="/" className="flex py-2">
              <LogoTransparent width={60} color="black" />
              <div className="flex flex-col pl-2">
                <div className="mt-auto">
                  <span>PlasmoGenEpi</span>
                </div>
                <div>
                  <span>Plasmodium Genetic Epidemiology</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-end gap-4">
            <div className="py-2">Online Course</div>
            <div className="py-2">Online Course</div>
            <div className="py-2">Online Course</div>
          </div>
        </div>
      </div>
      <div className="mt-[100px] md:mt-0">
        <h1>PLASMOGENEPI</h1>
      </div>
    </div>
  );
}
