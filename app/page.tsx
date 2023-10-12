import Image from "next/image";
import LogoPlay from "./components/LogoPlay";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  // return (
  //   <div className="relative flex min-h-screen flex-col overflow-hidden">
  //     <div className="absolute mx-auto flex w-full max-w-6xl items-center justify-between">
  //       <div className="bg-[rgb(22,22,22)]">
  //         <LogoPlay />
  //       </div>
  //       <div>
  //         <span className="text-4xl text-[rgb(22,22,22)]">PlasmoGenEpi</span>
  //       </div>
  //     </div>
  //     <div className="max-h-[700px] bg-[rgb(22,22,22)]">
  //       <Image
  //         src={"/bw_world_abstract.png"}
  //         height={700}
  //         width={1200}
  //         alt=""
  //         className="mx-auto [object-position:15%]"
  //       ></Image>
  //     </div>
  //   </div>
  // );
  return (
    <div className="relative min-h-screen">
      <div className="relative max-h-[70vh] overflow-hidden">
        <Image
          fill
          src={"/vert_dna_hd.jpeg"}
          // height={1200}
          // width={3000}
          alt=""
          className="bg-black object-cover opacity-30 [object-position:15%]"
        ></Image>
        <div className="relative h-[70vh] w-full overflow-hidden">
          <div className="absolute inset-0 grid max-w-6xl grid-rows-4 md:grid-cols-2 lg:mx-auto">
            <div className="col-end-2 row-start-1 row-end-4 flex max-w-6xl">
              {/* <div className="ml-auto"> */}
              <LogoPlay width={400} dialFill="#ffbcbc" />
              {/* </div> */}
            </div>

            <div className="col-start-1 col-end-[-1] row-start-4 flex items-center justify-center md:mx-4 md:justify-end md:pb-0">
              {/* #ffa4a4 */}
              {/* #ffbcbc */}
              {/* #e0a7a7 */}
              {/* #8fd3d6 */}
              {/* #343b4c */}
              {/* #294078 */}
              <div className="text-center text-5xl font-semibold text-black">
                <span className="[fontSize:clamp(3rem,10vw,5rem)]">
                  PlasmoGenEpi
                </span>
              </div>
            </div>
          </div>
          {/* <div className="pointer-events-none inset-0 origin-top-left scale-110 bg-black bg-opacity-20  bg-blend-overlay transition-all duration-1000 [background-image:url('/horz_dna.jpeg')] [background-size:100%] hover:origin-bottom-right hover:transition-all hover:duration-1000"></div> */}
        </div>
      </div>
      <div className="mx-4 max-w-4xl md:mx-auto md:mt-12">
        <div className="grid text-center md:gap-6">
          {/* <h2 className="text-4xl font-extrabold text-[#F3B941]">Who We Are</h2> */}
          {/* #ff7676 */}
          {/* #588deb */}
          {/* <h2 className="text-4xl font-extrabold text-[#F3B941]">Who We Are</h2> */}
          <div className="min-h-80 grid gap-4 p-4 [grid-template-rows:auto_auto] md:grid-cols-2">
            <div className="my-auto py-8">
              <h2 className="py-4 text-4xl font-extrabold text-[#F3B941]">
                Who We Are
              </h2>
              <p className="text-lg font-light text-black ">
                We are a network of scientists who have come together since 2018
                to address challenges in malaria genomic epidemiology.
              </p>
            </div>
            <div className="flex flex-col text-3xl">
              <h3 className="mb-8 font-serif">Sign up for our mailing list</h3>
              <Link
                href="/SignUp"
                className=" m-auto mt-4 w-fit rounded-xl border-black bg-[#FFBCBC] px-12 py-6 font-semibold text-white shadow-lg"
              >
                Sign up
              </Link>
            </div>
          </div>
          <div className="min-h-80 grid gap-4 border-t-4 py-4 pb-20 [grid-template-rows:auto_auto] md:grid-cols-2 md:grid-rows-1 md:pt-8">
            <div className=" px-2  md:col-start-2 md:py-0">
              <h2 className="py-4 text-4xl font-extrabold text-[#F3B941] ">
                What We Do
              </h2>
              <p className="text-lg font-light text-black ">
                We advance development and dissemination of approaches for
                plasmodium genomic epidemiology through creativity,
                collaboration, and coding.
              </p>
            </div>
            <div className="flex flex-col justify-around gap-6 text-3xl md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
              <h3 className="font-serif">Our Work So Far</h3>
              <Link href="/OnlineCourse" className="text-xl font-semibold">
                Online Course
              </Link>
              <Link href="/DataStandards" className="text-xl font-semibold">
                Data Standards
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
