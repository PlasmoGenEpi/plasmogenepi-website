import Image from "next/image";
import LogoTransparent from "../components/LogoTransparent";

export default function Home() {
  return (
    <div className="relative h-[max(100vh,1200px)] w-full">
      <div className="absolute inset-0 z-20 grid grid-rows-3 bg-gradient-to-l from-[#ffffffa0] to-transparent bg-blend-overlay md:grid-cols-2 md:grid-rows-3 lg:grid-rows-2"></div>
    </div>
  );

  return (
    <div className="relative h-[max(100vh,1200px)] w-full">
      <div className="absolute inset-0 z-20 grid grid-rows-3 bg-gradient-to-l from-[#ffffffa0] to-transparent bg-blend-overlay md:grid-cols-2 md:grid-rows-3 lg:grid-rows-2">
        {/* <h1 className="text-right">PlasmoGenEpi</h1> */}
        <div className="place-self-center p-4 md:col-start-2 md:row-span-2">
          <div className="mx-auto max-w-[200px]  px-4 pb-4 pt-2 md:mx-auto">
            <LogoTransparent />
          </div>
          <div className="text-center text-4xl text-black">PlasmoGenEpi</div>
        </div>
        <div className="col-span-full grid grid-rows-3 bg-black bg-opacity-80 px-4 pt-8 text-center font-light text-white md:grid-cols-3 md:grid-rows-1 lg:row-span-1">
          <div className="md:col-start-2">
            <h2 className="text-2xl font-normal">Who We Are</h2>
          </div>
          <div className="md:col-start-3">
            <h2 className="text-2xl font-normal">What We Do</h2>
          </div>
        </div>

        {/* <div className="text-light col-span-full row-span-full row-start-3 flex flex-row-reverse flex-wrap gap-8 bg-black bg-opacity-80 px-4 pt-8 font-light text-white">
          <div className="flex grow basis-1/2 flex-row-reverse flex-wrap justify-center md:flex-nowrap">
            <div className="mr-auto flex grow flex-wrap justify-center gap-8 text-center md:flex-nowrap md:justify-end">
              <div className="max-w-[450px] grow basis-[400px]">
                <h2 className="text-2xl font-medium">Who We Are</h2>
                <p>
                  {" "}
                  We are a network of scientists who have come together since
                  2018 to address challenges in malaria genomic epidemiology.
                </p>
              </div>
              <div className="max-w-[450px] grow basis-[400px]">
                <h2 className="text-2xl font-medium">What We Do</h2>
                <p>
                  {" "}
                  We advance development and dissemination of approaches for
                  plasmodium genomic epidemiology through creativity,
                  collaboration, and coding.
                </p>
              </div>
            </div>
            <div className="hidden max-w-[calc(50vw-16px)] [flex-grow:.25] md:block"></div>
          </div>
        </div> */}
      </div>

      <Image
        priority
        fill
        src="/vert_dna_hd.jpeg"
        alt=""
        className="object-cover [object-position:25%]"
      />
    </div>
  );

  return (
    <div className="relative h-[max(100vh,600px)] w-full">
      <div className="absolute inset-0 z-20 grid grid-rows-3 bg-gradient-to-l from-[#ffffffa0] to-transparent bg-blend-overlay md:grid-cols-2 md:grid-rows-3">
        {/* <h1 className="text-right">PlasmoGenEpi</h1> */}
        <div className="place-self-center p-4 md:col-start-2 md:row-span-2">
          <div className="mx-auto max-w-[200px]  px-4 pb-4 pt-2 md:mx-auto">
            <LogoTransparent />
          </div>
          <div className="text-center text-4xl text-black">PlasmoGenEpi</div>
        </div>
        <div className="text-light col-span-full row-span-full row-start-3 flex flex-row-reverse flex-wrap gap-8 bg-black bg-opacity-80 px-4 pt-8 font-light text-white">
          <div className="flex grow basis-1/2 flex-row-reverse flex-wrap justify-center md:flex-nowrap">
            <div className="mr-auto flex grow flex-wrap justify-center gap-8 text-center md:flex-nowrap md:justify-end">
              <div className="max-w-[450px] grow basis-[400px]">
                <h2 className="text-2xl font-medium">Who We Are</h2>
                <p>
                  {" "}
                  We are a network of scientists who have come together since
                  2018 to address challenges in malaria genomic epidemiology.
                </p>
              </div>
              <div className="max-w-[450px] grow basis-[400px]">
                <h2 className="text-2xl font-medium">What We Do</h2>
                <p>
                  {" "}
                  We advance development and dissemination of approaches for
                  plasmodium genomic epidemiology through creativity,
                  collaboration, and coding.
                </p>
              </div>
            </div>
            <div className="hidden max-w-[calc(50vw-16px)] [flex-grow:.25] md:block"></div>
          </div>
        </div>
        {/* <div className="col-span-full md:row-start-2">
          <div className="flex flex-row-reverse px-4">
            <div className="bg-red-300 p-20"></div>
          </div>
        </div> */}

        {/* <div className="col-span-3 [background-image:linear-gradient(to_bottom_right,black,transparent_33%,transparent_66%,_black)]"></div> */}
        {/* <div className="col-start-3 bg-black"></div> */}
      </div>

      <Image
        priority
        fill
        src="/vert_dna_hd.jpeg"
        alt=""
        className="object-cover [object-position:30%]"
      />
    </div>
  );
}
