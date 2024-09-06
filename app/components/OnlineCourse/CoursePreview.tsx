import Image from "next/image";

export default function CoursePreview() {
  return (
    <div>
      <div className="mx-auto grid max-w-6xl gap-8 border-y-8 border-cyan-800 px-4 py-16 text-lg md:px-8 md:text-base md:[grid-template-columns:1fr_auto] lg:px-16">
        <div className="min-w-72">
          <h2 className="mb-4 font-poppins text-2xl font-bold">
            What you will learn:
          </h2>
          <ol className="min-w-72 text-pretty flex list-decimal flex-col gap-3 px-4 font-roboto">
            <li>
              Summarize the basic concepts and main use cases of malaria genetic
              epidemiology.
            </li>
            <li>
              Choose the appropriate methods to generate genetic data for
              different use cases and settings.
            </li>
            <li>
              Choose the appropriate metrics derived from malaria genetic data
              to answer key questions.
            </li>
            <li>
              Design genetic surveillance studies to answer key questions about
              the epidemiology of malaria.
            </li>
            <li>
              Interpret results derived from genetic data to make sound public
              health recommendations.
            </li>
          </ol>
        </div>
        <div className="relative grid place-items-center bg-blend-multiply">
          <Image
            alt="Sleuthing exercise example"
            src={"/assets/genotyping-example2.png"}
            height={400}
            width={600}
            className="shadow-md"
          />
          {/* <div className="absolute bottom-0 right-0 top-0  bg-zinc-900">
            <h3 className=" block py-8 text-center font-serif text-3xl text-white">
              Preview the course
            </h3>
            <div>
              <button className=" bg-cyan-800 px-8 py-4 text-white">
                <p className="max-w-[250px] font-bold">
                  Genotype Sleuthing with SNPs and Microhaplotypes
                </p>
              </button>
            </div>
            <div className="mt-16">
              <button className=" bg-cyan-800 px-8 py-4 text-white hover:bg-cyan-900">
                <p className="max-w-[250px] font-bold">
                  M2 &ndash; Genotype Sleuthing with SNPs and Microhaplotypes
                </p>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
