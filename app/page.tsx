import Image from "next/image";
import LogoTransparent from "./components/LogoTransparent";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="relative h-[max(100vh,1200px)] w-full overflow-hidden md:h-[max(100vh,900px)]">
        <div className="absolute inset-0 z-20 grid grid-rows-2 bg-gradient-to-l from-[#ffffffa0] to-transparent bg-blend-overlay md:grid-cols-2 md:grid-rows-2 lg:grid-rows-3">
          <div className="flex flex-col items-center justify-center p-4 md:col-start-2 lg:row-span-2">
            <LogoTransparent width={180} color={"black"} />
            <h1 className="mt-8 font-poppins font-semibold tracking-tight text-[rgba(12,25,44)] [font-size:clamp(2rem,10vw,3.5rem)] md:mt-4">
              PlasmoGenEpi
            </h1>
          </div>
          {/* rgba(14,14,41,.8) */}
          {/* rgba(10,10,41,0.8) */}
          {/* rgba(4,11,17,0.8) */}
          {/* rgba(12,25,44,0.8) */}
          <div className="col-span-full overflow-hidden bg-[rgba(12,25,44,.95)] px-4 py-8 backdrop-blur md:row-span-1 lg:row-start-3">
            <div className="mx-auto grid h-full max-w-6xl gap-6 text-center text-xl text-white md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
              <div className="relative border-white border-opacity-20">
                <div className="absolute -left-3 z-30 hidden h-full w-[1px] [background-image:linear-gradient(#ffffff40,silver,#ffffff40,transparent)] xl:block"></div>
                {/* <div className="absolute -right-1 z-30 hidden h-full w-[1px] [background-image:linear-gradient(#ffffff40,white,#ffffff40,transparent)] lg:block"></div> */}
                <h2 className="font-poppins font-semibold text-[#F3B941]">
                  Who We Are
                </h2>
                <p className="mx-auto mt-2 max-w-[500px] font-roboto text-lg font-extralight ">
                  {" "}
                  We are a network of scientists who have come together since
                  2018 to address challenges in malaria genomic epidemiology.
                </p>
              </div>
              <div className="relative border-white border-opacity-20 lg:translate-y-20">
                <div className="absolute -left-3 z-30 hidden h-full w-[1px] [background-image:linear-gradient(#ffffff40,silver,#ffffff40,transparent)] lg:block"></div>
                <div className="absolute -right-3 z-30 hidden h-full w-[1px] -translate-y-12 [background-image:linear-gradient(#ffffff40,silver,#ffffff40,transparent)] lg:block"></div>
                <h2 className="font-poppins font-semibold text-[#F3B941]">
                  What We Do
                </h2>
                <p className="mx-auto mt-2 max-w-[500px] font-roboto text-lg font-extralight ">
                  We advance development and dissemination of approaches for
                  plasmodium genomic epidemiology through creativity,
                  collaboration, and coding.
                </p>
              </div>
              <div className="relative flex flex-col border-white border-opacity-20 md:col-span-full md:col-start-2 md:row-span-2 md:row-start-1 md:my-20 lg:col-span-1 lg:col-start-auto lg:row-start-auto lg:my-0">
                <div className="absolute -left-1 z-30 hidden h-full w-[1px] [background-image:linear-gradient(#ffffff40,white,#ffffff40,transparent)] md:block lg:hidden"></div>
                <div className="absolute -right-3 z-30 hidden h-full w-[1px] -translate-y-20 [background-image:linear-gradient(#ffffff40,silver,#ffffff40,transparent)]  xl:block"></div>
                <h2 className=" font-poppins font-semibold text-[#F3B941]">
                  Our Work
                </h2>
                <div className="my-6 flex grow flex-col gap-4  md:flex-row md:justify-around lg:flex-col lg:justify-normal">
                  <Link
                    href="/OnlineCourse"
                    className="mx-auto h-fit w-fit py-2 font-poppins text-base font-semibold uppercase text-white text-opacity-60 transition-all hover:text-opacity-100"
                  >
                    Online Course
                  </Link>
                  <Link
                    href="/DataStandards"
                    className="mx-auto h-fit w-fit py-2 font-poppins text-base font-semibold uppercase text-white text-opacity-60 transition-all hover:text-opacity-100"
                  >
                    Data Standards
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          priority
          fill
          src="/ .jpeg"
          alt=""
          className="object-cover [object-position:25%]"
        />
      </div>
      <Footer />
    </div>
  );

  // return (
  //   <div className="relative min-h-screen w-full">
  //     <div className="absolute inset-0 z-20 grid grid-cols-3 [background:radial-gradient(circle_at_50%_0%,_transparent,black)]">
  //       {/* <h1 className="text-right">PlasmoGenEpi</h1> */}
  //       <div className="col-span-3">
  //         <div className=" mx-auto ml-auto max-w-[300px]">
  //           <LogoTransparent />
  //         </div>
  //       </div>
  //       <div className="mt-auto text-center text-6xl text-white">
  //         PlasmoGenEpi
  //       </div>

  //       {/* <div className="col-span-3 [background-image:linear-gradient(to_bottom_right,black,transparent_33%,transparent_66%,_black)]"></div> */}
  //       {/* <div className="col-start-3 bg-black"></div> */}
  //     </div>

  //     <Image
  //       fill
  //       src="/vert_dna_hd.jpeg"
  //       alt=""
  //       className="bg-black object-cover [object-position:25%_100%]"
  //     />
  //   </div>
  // );

  // return (
  //   <div className="relative min-h-screen w-full">
  //     <div className="absolute inset-0 z-20 grid grid-cols-3">
  //       <div className="col-span-2  bg-black bg-opacity-80"></div>
  //       {/* <h1 className="text-right">PlasmoGenEpi</h1> */}
  //     </div>
  //     <Image
  //       fill
  //       src="/blue_dna.jpeg"
  //       alt=""
  //       className="bg-black object-cover [object-position:75%]"
  //     />
  //   </div>
  // );
}
