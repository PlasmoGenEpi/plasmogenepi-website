import Accordion from "@/app/components/Accordion";
import NavBar from "@/app/components/NavBar/NavBar";
import NavBar2 from "@/app/components/NavBar2";
import Image from "next/image";

export default function OnlineCourse() {
  return (
    <div className="">
      <NavBar currentNav="OnlineCourse" />
      <div className="border-b-2 py-8 ">
        <h1 className="mx-auto max-w-6xl px-2 font-poppins text-3xl font-bold md:px-8 lg:px-16">
          From Data to Insight &ndash; A Practical Introduction to Interpreting
          Malaria Genetics for Surveillance
        </h1>
      </div>
      <div className="mx-auto my-8 max-w-6xl px-2 md:px-8 lg:px-16">
        <h2 className="mb-4 font-poppins text-2xl font-bold">
          About this course
        </h2>
        <p className="mb-4">
          <span className="font-bold">Course Goal</span>: to equip researchers,
          students, and public health officials with the knowledge and skills
          needed to effectively use malaria Genetic data in epidemiological
          research and public health decision-making.
        </p>
        <p className="mb-4">
          <span className="font-bold">Course Format</span>: online, indepedent
          self-study requiring 10-12 hours to complete. Content includes a mix
          of video lectures, interactive case studies, quizzes, moderated
          discussion forums and job aids.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-rows-1 md:px-8 lg:grid-cols-3 lg:gap-0 lg:px-16">
        <div className="col-start-1 flex flex-col px-2 lg:px-0">
          <h2 className="mb-4 font-poppins text-2xl font-bold">
            What you will learn:
          </h2>
          <ol className="flex list-decimal flex-col gap-3 px-4 lg:grow">
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
        <div className=" row-start-1 px-1 md:col-span-2 md:px-2 lg:col-start-2">
          <div className="bg-black relative h-96 bg-gradient-to-l  ">
            <Image
              alt=""
              src={"/desk_work.jpg"}
              fill
              className="object-cover dark:opacity-50"
            />
            <div className="absolute bottom-0 left-0 right-1/2 top-0 bg-opacity-50 backdrop-blur">
              <h4 className="text-white py-8 text-3xl">Preview the course</h4>
            </div>
            {/* <div className="text-white bg-black  absolute bottom-0 right-0 w-full rounded-lg bg-opacity-50 backdrop-blur md:max-w-xs lg:translate-x-8 lg:translate-y-8">
              <div className="">
                <h4 className="px-4 pt-2 font-serif text-3xl font-bold">
                  Preview the course
                </h4>
              </div>
              <div className="p-4">
                <p>
                  Follow the links below to get started on your sleuthing &
                  surveillance exercises!
                </p>
                <div className="flex flex-col gap-2 py-4">
                  <button className="text-white mx-auto rounded-lg bg-pge-yellow px-8 py-2 text-lg font-bold">
                    Genetic Surveillance
                  </button>
                  <button className="text-white mx-auto rounded-lg bg-pge-yellow px-8 py-2 text-lg font-bold">
                    Genetic Surveillance
                  </button>{" "}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-2 md:px-8 lg:px-16">
        <h2 className=" my-8 font-poppins text-2xl font-bold">
          Module Overview
        </h2>
        <Accordion pages={[]} />
      </div>
    </div>
  );
}
