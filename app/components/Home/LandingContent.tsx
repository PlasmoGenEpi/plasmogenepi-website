import Image from "next/image";
import InfiniteScrollBar from "../InfiniteScroll/InfiniteScrollBar";
import Link from "next/link";

export default function LandingContent() {
  return (
    <div className="">
      <div className="px-2">
        <div className="mx-auto mt-8 grid max-w-5xl gap-8 border-l-8 border-cyan-800 px-4 py-8 text-lg  md:px-8 md:text-base lg:px-16 ">
          <h2 className="font-poppins text-2xl font-bold md:text-left">
            Who we are
          </h2>
          <p className="text-pretty font-roboto ">
            We are a network of scientists who have come together since 2018 to
            address challenges in malaria genomic epidemiology.
          </p>
          <Link
            href="/Groups"
            className="mx-auto w-fit rounded-full px-6  py-2 font-poppins font-semibold"
          >
            Groups
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-6xl">
        <InfiniteScrollBar />
      </div>
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
      {/* hsl(192 49% 12% / 1) */}
      <div className="  bg-pge-darkest-teal  pb-8 pt-8">
        <div className="mx-auto grid max-w-5xl gap-8  px-4 py-8 text-lg  md:px-8 md:text-base lg:px-16">
          {" "}
          <Link
            prefetch
            href="/SignUp"
            // className="mx-auto w-fit rounded bg-rose-700 px-12 py-4 text-3xl font-light text-white transition-colors hover:bg-rose-600 focus-visible:bg-pge-dark-teal"
            // className="mx-auto w-fit rounded bg-pge-dark-teal/80 px-12 py-4 text-3xl font-light text-white transition-colors hover:bg-pge-dark-teal focus-visible:bg-pge-dark-teal"
            className="mx-auto w-fit rounded bg-gradient-to-b from-pge-dark-teal/60 via-pge-dark-teal to-pge-dark-teal/60 px-12 py-4 text-3xl  text-white transition-all hover:scale-105 hover:brightness-[115%] focus-visible:scale-105 focus-visible:brightness-[115%] "
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
              <div className="rounded-lg  border-2 border-black">
                <Link
                  href="/OnlineCourse"
                  className="relative mix-blend-multiply outline-offset-8"
                >
                  <Image
                    className="m-auto object-cover"
                    priority
                    height={300}
                    width={600}
                    src="/assets/OnlineCourse/Slide4.png"
                    alt="Online Course"
                  />
                  <div className="absolute left-0 right-0 top-full  bg-white/80 text-center text-black">
                    <h3 className=" py-2 text-center font-poppins text-xl font-semibold">
                      Online Course
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <div className="rounded-lg  border-2 border-black bg-gradient-radial from-white to-[#155E75]/20 ">
                <Link
                  href="/DataStandards"
                  className="relative overflow-hidden mix-blend-multiply outline-offset-8"
                >
                  <Image
                    alt=""
                    src={"/assets/graph.png"}
                    className="h-[200px] w-[1000px] object-cover"
                    width={600}
                    height={300}
                  />
                  <div className="absolute left-0 right-0 top-full  bg-white/80 text-center text-black">
                    <h3 className=" py-2 text-center font-poppins text-xl font-semibold">
                      Data & Analysis Standards
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2">
        <div className="mx-auto mt-24 grid max-w-5xl gap-8  border-cyan-800 px-4 py-8 text-lg  md:px-8 md:text-base lg:px-16">
          <h2 className="font-poppins text-2xl font-bold md:text-left">
            Special thanks to our supporters
          </h2>
          <div className="mt-8 grid place-items-center gap-x-32 gap-y-16 md:grid-cols-2">
            <Image
              alt="National Institute of Allergy and Infectious Diseases Logo"
              src={"/assets/LandingPage/NIH_logo2.png"}
              // className="h-[200px] w-[1000px] object-cover"
              className="mix-blend-multiply"
              width={280}
              height={150}
            />{" "}
            <Image
              alt="Bill & Melinda Gates Foundation Logo"
              src={"/assets/LandingPage/Gates_Foundation_logo.webp"}
              // className="h-[200px] w-[1000px] object-cover"
              className="h-20 object-cover mix-blend-multiply"
              width={280}
              height={150}
            />{" "}
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
