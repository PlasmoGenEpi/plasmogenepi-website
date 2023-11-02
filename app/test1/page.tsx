import Image from "next/image";
import LogoTransparent from "../components/LogoTransparent";

export default function Home() {
  return (
    <div className="relative min-h-[50vh] w-full">
      <div className="absolute inset-0 z-20 grid grid-cols-3 ">
        {/* <h1 className="text-right">PlasmoGenEpi</h1> */}
        <div className="col-span-3">
          <div className=" mx-auto ml-auto mt-[500px] max-w-[300px] p-4 md:p-0">
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
        src="/website-assets/white_circle.jpg"
        alt=""
        className="bg-black object-cover"
      />
    </div>
  );
}
