import Image from "next/image";

export default function BannerImage() {
  return (
    <div>
      <div className="relative min-h-[400px] max-w-full overflow-hidden ">
        <Image
          priority
          fill
          src="/assets/desk_work2.jpg"
          alt=""
          className=" object-cover brightness-50 [object-position:50%]"
        />{" "}
        <div className="absolute inset-0 ">
          <div className="mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-2 md:px-8 lg:px-16">
            <h1 className=" font-poppins text-3xl font-bold text-white md:mt-0">
              From Data to Insight &ndash; A Practical Introduction to
              Interpreting Malaria Genetics for Surveillance
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto my-16 max-w-6xl px-4 text-lg md:px-8 md:text-base lg:px-16">
        <h2 className="mb-8 font-poppins text-2xl font-bold">
          About this course
        </h2>
        <p className="mb-4 text-pretty font-roboto">
          <span className="font-bold">Course Goal</span>: to equip researchers,
          students, and public health officials with the knowledge and skills
          needed to effectively use malaria Genetic data in epidemiological
          research and public health decision-making.
        </p>
        <p className="mb-4 text-pretty font-roboto">
          <span className="font-bold">Course Format</span>: online, indepedent
          self-study requiring 10-12 hours to complete. Content includes a mix
          of video lectures, interactive case studies, quizzes, moderated
          discussion forums and job aids.
        </p>
        <p></p>
      </div>
    </div>
  );
}
