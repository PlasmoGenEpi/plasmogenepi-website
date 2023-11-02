import Image from "next/image";
import LogoPlay from "./components/LogoPlay";
import Footer from "./components/Footer";
import Link from "next/link";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import LogoTransparent from "./components/LogoTransparent";

export default function Home() {
  // return (
  //   <div className="relative h-[50vh] w-full">
  //     <div className="absolute inset-0 z-20 p-8 text-6xl text-white">
  //       <h1 className="text-right">PlasmoGenEpi</h1>
  //     </div>
  //     <Image
  //       height="1000"
  //       width="500"
  //       src="/dna_test2.png"
  //       alt=""
  //       className="bg-black"
  //     />
  //   </div>
  // );

  // return (
  //   <div className="grid grid-rows-2">
  //     <div className="relative w-full overflow-hidden">
  //       <div className="myImg"></div>
  //       {/* <Image
  //         priority
  //         // loading={"eager"}
  //         fill
  //         src={"/vert_dna_hd.jpeg"}
  //         // height={1200}
  //         // width={3000}
  //         alt="dna strand background"
  //         className="object-cover [object-position:35%]"
  //       ></Image> */}
  //     </div>
  //   </div>
  // );

  // return (
  //   <div className="grid grid-rows-2">
  //     <div className="relative h-[50vh] min-h-[450px] w-full overflow-hidden">
  //       <div className="absolute inset-0 z-20 bg-opacity-50">
  //         <div className="absolute inset-0 z-20 grid grid-cols-3 px-4">
  //           <div className="col-span-full">
  //             {/* <Image height={400} width={400} src="/logo_black.svg" alt="" /> */}
  //             <LogoTransparent />
  //           </div>
  //           <div
  //             // style={{
  //             //   WebkitTextStroke: "1px",
  //             //   WebkitTextStrokeColor: "black",
  //             //   opacity: "20%",
  //             //   color: "white",
  //             // }}
  //             className="col-span-full row-start-2 flex grow place-items-end justify-center gap-8 text-3xl text-black text-opacity-40"
  //           >
  //             <span>A</span>
  //             <span>G</span>

  //             <span>T</span>
  //             <span>C</span>
  //             <span>A</span>
  //             <span>G</span>

  //             <span>T</span>
  //             <span>C</span>
  //             <span>A</span>
  //             <span>G</span>

  //             <span>T</span>
  //             <span>C</span>
  //             <span>A</span>
  //             <span>G</span>

  //             <span>T</span>
  //             <span>C</span>
  //             <span>A</span>
  //             <span>G</span>

  //             <span>T</span>
  //             <span>C</span>
  //           </div>
  //         </div>
  //       </div>
  //       <Image
  //         priority
  //         // loading={"eager"}
  //         fill
  //         src={"/vert_dna_hd.jpeg"}
  //         // height={1200}
  //         // width={3000}
  //         alt="dna strand background"
  //         className="object-cover [object-position:35%]"
  //       ></Image>
  //     </div>
  //     <div className="grid">
  //       <div
  //         // style={{
  //         //   WebkitTextStroke: "1px",
  //         //   WebkitTextStrokeColor: "black",
  //         //   color: "white",
  //         //   opacity: "20%",
  //         // }}
  //         className="flex justify-center gap-8 px-4 text-3xl text-black text-opacity-20"
  //       >
  //         <span>A</span>
  //         <span
  //           style={{
  //             WebkitTextStroke: "1px",
  //             WebkitTextStrokeColor: "black",
  //             color: "white",
  //             opacity: "20%",
  //           }}
  //         >
  //           T
  //         </span>
  //         <span>T</span>
  //         <span
  //           style={{
  //             WebkitTextStroke: "1px",
  //             WebkitTextStrokeColor: "black",
  //             color: "white",
  //             opacity: "20%",
  //           }}
  //         >
  //           G
  //         </span>
  //       </div>
  //     </div>
  //     <div className="col-span-full mx-auto flex">
  //       <Image height={400} width={400} src="/logo_bw.png" alt="" />
  //     </div>
  //   </div>
  // );

  // return (
  //   <div>
  //     <div className="relative h-[50vh] w-full overflow-hidden">
  //       <div className="absolute inset-0 z-20 bg-black bg-opacity-50"></div>
  //       <Image
  //         priority
  //         // loading={"eager"}
  //         fill
  //         src={"/horz_dna.jpeg"}
  //         // height={1200}
  //         // width={3000}
  //         alt="dna strand background"
  //         className="object-cover"
  //       ></Image>
  //       <div className="absolute inset-0 z-20 grid">
  //         <div className="mt-auto flex h-fit justify-center">
  //           <Image height={400} width={400} src="/logo_bw.png" alt="" />
  //         </div>
  //       </div>
  //     </div>
  //     <div className=" grid grid-rows-2">
  //       <div className="flex justify-center">
  //         {/* <div className="ml-auto"> */}
  //         {/* <Logo width={400} /> */}
  //         <Image height={400} width={400} src="/logo_bw.png" alt="" />
  //         {/* </div> */}
  //       </div>
  //       <h1 className="row-start-2 text-center text-6xl">PlasmoGenEpi</h1>
  //     </div>
  //   </div>
  // );
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
      {/* <NavBar /> */}
      <div className="relative h-[50vh] max-h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          loading={"eager"}
          fill
          src={"/vert_dna_hd.jpeg"}
          // height={1200}
          // width={3000}
          alt="dna strand background"
          className=" object-cover [object-position:25%_100%]"
        ></Image>
        {/* <div className="relative h-[50vh] min-h-[300px] w-full overflow-hidden"> */}
        <div className="absolute inset-0 grid max-w-6xl grid-cols-4 p-4 lg:mx-auto">
          <div className="col-start-1 col-end-5 md:col-start-4">
            <LogoTransparent />
          </div>
          {/* <div className="col-span-2 col-start-2 row-span-full mx-auto my-auto  md:col-span-1 md:col-start-3 md:row-span-full">
            <LogoTransparent />
          </div> */}

          {/* #ffa4a4 */}
          {/* #ffbcbc */}
          {/* #e0a7a7 */}
          {/* #8fd3d6 */}
          {/* #343b4c */}
          {/* #294078 */}
          <div className="col-span-full row-start-2 mx-auto my-auto text-center font-medium text-black md:col-span-2 md:text-left">
            <h1 className=" tracking-tighter [fontSize:clamp(3rem,5vw,5rem)]">
              PlasmoGenEpi
            </h1>
          </div>
          {/* </div> */}
          {/* <div className="pointer-events-none inset-0 origin-top-left scale-110 bg-black bg-opacity-20  bg-blend-overlay transition-all duration-1000 [background-image:url('/horz_dna.jpeg')] [background-size:100%] hover:origin-bottom-right hover:transition-all hover:duration-1000"></div> */}
        </div>
      </div>
      <div className="mx-4 max-w-4xl md:mx-auto md:mt-12">
        <div className="grid gap-4 text-center md:gap-6">
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
                className="hover:transiton-colors m-auto w-fit rounded-xl border-black px-12 py-6 font-semibold  shadow-lg transition-colors md:mt-4"
              >
                Sign up
              </Link>
            </div>
          </div>
          <div className="min-h-80 grid gap-8 border-t-4 py-4 pb-20 [grid-template-rows:auto_auto] md:grid-cols-2 md:grid-rows-2 md:gap-4 md:pt-8">
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
            <div className="flex flex-col gap-6 text-3xl md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3">
              <h3 className="font-serif">Our Work So Far</h3>
              <Link
                href="/OnlineCourse"
                className="mx-auto w-fit  text-2xl font-semibold text-black text-opacity-60 hover:text-opacity-100 md:mt-8"
              >
                Online Course
              </Link>
              <Link
                href="/DataStandards"
                className="mx-auto w-fit text-2xl font-semibold text-black text-opacity-60 hover:text-opacity-100"
              >
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
