import Image from "next/image";
import Link from "next/link";

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
      {/* <div className="mx-auto max-w-6xl  text-lg md:px-8 md:text-base lg:px-16">
          <Image
            className="m-auto object-cover"
            priority
            height={600}
            width={2000}
            src="/assets/OnlineCourse/Slide4.png"
            alt=""
          />
        </div> */}
      <div className="mx-auto my-16 max-w-6xl px-4 text-lg md:px-8 md:text-base lg:px-16">
        <h2 className="mb-8 font-poppins text-2xl font-bold">
          About this course
        </h2>
        <p className="mb-4 text-pretty font-roboto">
          <span className="font-bold">Course Goal</span>: to equip researchers,
          students, and public health officials with the knowledge and skills
          needed to effectively use malaria genetic data in epidemiological
          research and public health decision-making.
        </p>
        <p className="mb-4 text-pretty font-roboto">
          <span className="font-bold">Course Format</span>: online, indepedent
          self-study requiring 10-12 hours to complete. Content includes a mix
          of video lectures, interactive case studies, quizzes, moderated
          discussion forums and job aids. This course is free and open to the
          public.
        </p>
        <div className="mt-8 flex justify-center">
          <div>
            <Link
              prefetch
              href="https://cppr.ucsfmoodle.org/course/view.php?id=99"
              className="mx-auto block w-fit rounded bg-black/80 bg-gradient-to-b from-pge-dark-teal/60 via-pge-dark-teal to-pge-dark-teal/60 px-8 py-3  text-xl font-medium text-white transition-all hover:scale-105"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
