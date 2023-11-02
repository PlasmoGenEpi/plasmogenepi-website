import Image from "next/image";
import LogoTransparent from "./components/LogoTransparent";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 z-20 grid grid-cols-3 [background:radial-gradient(circle_at_50%_0%,_transparent,black)]">
        {/* <h1 className="text-right">PlasmoGenEpi</h1> */}
        <div className="col-span-3">
          <div className=" mx-auto ml-auto max-w-[300px]">
            <LogoTransparent />
          </div>
        </div>
        <div className="mt-auto text-center text-6xl text-white">
          PlasmoGenEpi
        </div>

        {/* <div className="col-span-3 [background-image:linear-gradient(to_bottom_right,black,transparent_33%,transparent_66%,_black)]"></div> */}
        {/* <div className="col-start-3 bg-black"></div> */}
      </div>

      <Image
        fill
        src="/vert_dna_hd.jpeg"
        alt=""
        className="bg-black object-cover [object-position:25%_100%]"
      />
    </div>
  );

  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 z-20 grid grid-cols-3">
        <div className="col-span-2  bg-black bg-opacity-80"></div>
        {/* <h1 className="text-right">PlasmoGenEpi</h1> */}
      </div>
      <Image
        fill
        src="/blue_dna.jpeg"
        alt=""
        className="bg-black object-cover [object-position:75%]"
      />
    </div>
  );
}
