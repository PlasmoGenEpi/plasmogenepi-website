import Image from "next/image";
import LogoTransparent from "../components/LogoTransparent";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-2">
      <div className="relative">
        <div className="absolute inset-0 z-20 grid grid-cols-3 ">
          {/* <h1 className="text-right">PlasmoGenEpi</h1> */}
          {/* <div className="col-span-3">
            <div className=" mx-auto ml-auto max-w-[300px] p-4 md:p-0">
              <LogoTransparent />
            </div>
          </div>
          <div className="col-span-full mt-auto text-center text-6xl text-black">
            PlasmoGenEpi
          </div> */}
        </div>

        {/* <div className="col-span-3 [background-image:linear-gradient(to_bottom_right,black,transparent_33%,transparent_66%,_black)]"></div> */}
        {/* <div className="col-start-3 bg-black"></div> */}

        <Image
          fill
          src="/website-assets/dark_genome.jpg"
          alt=""
          className="object-cover"
        />
      </div>
      <div className="relative p-8">
        <div className="absolute left-0 top-0 grid w-full -translate-y-1/2 grid-rows-2 text-center text-2xl text-black text-opacity-20">
          <div className="">A G T C</div>
          <div>A G T C</div>
        </div>
        <div className=" grid grid-cols-3 ">
          {/* <h1 className="text-right">PlasmoGenEpi</h1> */}
          <div className="col-span-3">
            <div className=" mx-auto ml-auto max-w-[260px] p-8 md:p-0">
              <LogoTransparent />
            </div>
          </div>
          <div className="col-span-full mt-auto text-center text-4xl text-black">
            PlasmoGenEpi
          </div>

          {/* <div className="col-span-3 [background-image:linear-gradient(to_bottom_right,black,transparent_33%,transparent_66%,_black)]"></div> */}
          {/* <div className="col-start-3 bg-black"></div> */}
        </div>
      </div>
    </div>
  );
}
