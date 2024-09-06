import Image from "next/image";
import PlasmoGenEpiLogo from "../Logos/PlasmoGenEpiLogo";

export default function LandingImage() {
  return (
    <div className="bg-black">
      <div className="relative max-h-[80vh] min-h-[500px] overflow-hidden md:col-span-2">
        <div className="absolute  inset-0 bg-black/50 dark:bg-black">
          <Image
            priority
            fill
            src="/assets/long_blue_dna.jpeg"
            alt=""
            className="object-cover [object-position:90%] dark:opacity-50 dark:mix-blend-normal"
          />
          <div className="absolute inset-0 -bottom-2 -top-2 bg-gradient-to-b from-transparent via-transparent to-black opacity-80 dark:hidden"></div>
        </div>
        <div className="absolute inset-0 text-3xl">
          <div className="mx-auto flex min-h-full max-w-5xl flex-col items-center justify-end px-12 pb-4 md:items-end md:pb-8">
            <div className="flex flex-col">
              <PlasmoGenEpiLogo
                height={260}
                className="fill-[white] stroke-[teal] stroke-[.5px]  dark:fill-[white]"
              />
              <div className="mt-4 text-center">
                <h1
                  style={{
                    WebkitTextStroke: ".5px teal",
                  }}
                  className="font-poppins text-4xl font-bold tracking-tighter text-[#EEEEED]  dark:text-[white] md:text-5xl"
                >
                  PlasmoGenEpi
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
