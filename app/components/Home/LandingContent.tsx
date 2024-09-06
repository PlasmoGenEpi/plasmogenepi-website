import Image from "next/image";
import InfiniteScrollBar from "../InfiniteScroll/InfiniteScrollBar";
import Link from "next/link";

export default function LandingContent() {
  return (
    <div className="">
      <div className="px-2">
        <div className="mx-auto mt-8 grid max-w-5xl gap-8 border-l-8 border-cyan-800 px-4 py-8 text-lg  md:px-8 md:text-base lg:px-16">
          <h2 className="font-poppins text-2xl font-bold md:text-left">
            Who we are
          </h2>
          <p className="text-pretty font-roboto">
            We are a network of scientists who have come together since 2018 to
            address challenges in malaria genomic epidemiology.
          </p>
        </div>
      </div>
      <InfiniteScrollBar />
      <div className="px-2">
        <div className="mx-auto my-8 grid max-w-5xl gap-8 border-l-8 border-cyan-800 px-4 py-8 text-lg  md:px-8 md:text-base lg:px-16">
          <h2 className="font-poppins text-2xl font-bold md:text-left">
            What we do
          </h2>
          <p className="text-pretty font-roboto">
            We advance development and dissemination of approaches for
            plasmodium genomic epidemiology through creativity, collaboration,
            and coding.
          </p>
        </div>
      </div>
      <div className="border-y-4 border-pge-dark-teal bg-pge-darkest-teal pb-8 pt-8">
        <div className="mx-auto grid max-w-5xl gap-8  py-8 pl-8 text-lg  md:px-8 md:text-base lg:px-16">
          {" "}
          <Link
            prefetch
            href="/SignUp"
            className="mx-auto w-fit rounded bg-pge-dark-teal px-12 py-4 text-3xl font-light text-white"
          >
            Get Involved
          </Link>
          <label className="text-center text-pge-white">
            Sign up for our mailing list and provide feedback for our programs,
            tools, and methods.
          </label>
        </div>
      </div>
      <div className="px-2">
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 px-4 py-8 pl-8 text-lg  md:px-8 md:text-base lg:px-16">
          <h2 className="font-poppins text-2xl font-bold md:text-left">
            Our work so far
          </h2>
          <div className="grid place-items-center gap-x-32 gap-y-16 md:grid-cols-2">
            <div>
              <div className="rounded-lg  border-2 border-black bg-gradient-radial from-white to-[#155E75]/20 py-2">
                <Link href="/OnlineCourse" className="mix-blend-multiply">
                  <Image
                    alt=""
                    src={"/assets/Screenshot from 2024-09-06 00-09-28.png"}
                    className=""
                    width={400}
                    height={300}
                  />
                  <h3 className="text-center font-poppins text-xl font-semibold">
                    Online Course
                  </h3>
                </Link>
              </div>
            </div>
            <div>
              <div className="rounded-lg  border-2 border-black bg-gradient-radial from-white to-[#155E75]/20 py-2">
                <Link
                  href="/DataStandards"
                  className="relative overflow-hidden mix-blend-multiply"
                >
                  <Image
                    unoptimized
                    alt=""
                    src={"/assets/graph.png"}
                    className="h-[200px] w-[1000px] object-cover"
                    width={600}
                    height={300}
                    // fill
                  />
                  <h3 className="text-center font-poppins text-xl font-semibold">
                    Data Standards
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="  py-16 ">
      <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-24 md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-16">
        <div className="p-1">
          <div className="  mx-auto  max-w-6xl border-l-2 border-pge-dark-teal p-2">
            <h2 className="font-poppins text-2xl  font-medium tracking-tight  dark:text-[#acacac]">
              Who we are
            </h2>
            <p className="font-montserrat mt-8 text-xl dark:font-light">
              We are a network of scientists who have come together since 2018
              to address challenges in malaria genomic epidemiology.
            </p>
            <p className="font-montserrat mt-8 text-lg dark:font-light">
              Take a look at the teams and organizations that take part in our
              work here.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:col-span-2">
          <div className="  mx-auto  max-w-6xl p-2">
            <h2 className="font-poppins text-2xl  font-medium tracking-tight  dark:text-[#acacac]">
              Our work so far
            </h2>
            <p className="mt-8 font-roboto text-lg font-normal dark:font-light">
              We advance development and dissemination of approaches for
              plasmodium genomic epidemiology through creativity, collaboration,
              and coding.
            </p>
          </div>
          <div className="mt-12 grid place-items-center gap-8">
            <div className=" relative w-fit overflow-hidden  bg-white p-4 shadow-md dark:mix-blend-soft-light">
              <Image
                alt=""
                src={"/assets/module_example3.png"}
                width={600}
                height={300}
                className="pt-2"
              />
            </div>
            <div className=" relative w-fit max-w-full  shadow-md dark:mix-blend-soft-light">
              <Image
                alt=""
                src={"/assets/module_example.png"}
                width={600}
                height={300}
                className="grow pt-2 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
