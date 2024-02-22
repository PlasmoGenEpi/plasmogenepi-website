import Accordion from "@/app/components/Accordion";
import NavBar from "@/app/components/NavBar/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function OnlineCourse() {
  return (
    <div className="">
      <NavBar currentNav="OnlineCourse" />
      <div className="">
        <div className="relative mx-auto h-96 bg-black">
          <Image
            priority
            alt=""
            src={"/desk_work2.jpeg"}
            fill
            className="object-cover [object-position:55%] dark:opacity-50"
          />{" "}
          <div className="absolute inset-0 flex w-full items-center justify-center bg-gradient-to-r from-black/50 via-black/50 to-transparent">
            <div className=" w-full bg-opacity-50  py-8 text-white">
              <h1 className="mx-auto max-w-6xl px-2 font-poppins text-3xl font-bold md:px-8 lg:px-16">
                From Data to Insight &ndash; A Practical Introduction to
                Interpreting Malaria Genetics for Surveillance
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" border-b-2 py-8">
        <h1 className="mx-auto max-w-6xl px-2 font-poppins text-3xl font-bold md:px-8 lg:px-16">
          From Data to Insight &ndash; A Practical Introduction to Interpreting
          Malaria Genetics for Surveillance
        </h1>
      </div> */}
      {/* <div className="relative mx-auto h-96 bg-black">
        <Image
          alt=""
          src={"/test_img2.jpg"}
          fill
          className="object-cover opacity-60 dark:opacity-50"
        />{" "}
        <div className="absolute inset-0 -bottom-1 bg-gradient-to-t from-zinc-50 via-transparent to-zinc-50"></div>
      </div> */}
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
          <div className="relative h-96 bg-black bg-gradient-to-l  ">
            <Image
              alt=""
              src={"/desk_work.jpg"}
              fill
              className="object-cover opacity-80 dark:opacity-50"
            />
            <div className="absolute inset-0 grid grid-rows-2 md:grid-cols-3 md:grid-rows-1">
              <div className="col-span-2 flex flex-col justify-center gap-2 bg-black bg-opacity-50 text-white">
                <h4 className="text-center font-serif text-4xl">
                  Preview the course
                </h4>
                <p className="font-lg text-left font-roboto">
                  Get started with the links to the right.
                </p>
              </div>
            </div>
            {/* <div className="absolute inset-0">
              <h4 className="mb-4 p-4 font-serif text-5xl text-white md:px-0 md:py-8">
                Preview the course
              </h4>
              <div className="mx-auto flex flex-col gap-4 ">
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://rise.articulate.com/share/YNOwF89jtNTsz3q9YcC0xAJewoNCWqFy#/"
                  className="mx-4 w-fit rounded-lg bg-pge-blue px-2 py-4 text-lg font-bold text-[white] shadow-sm transition-colors hover:bg-[#F9BF1C] hover:transition-colors  md:mx-0 "
                >
                  Genotype Sleuthing with SNPs and Microhaplotypes
                </Link>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  className="mx-4 w-fit rounded-lg bg-pge-blue px-2 py-4 text-xl font-bold text-[white] shadow-sm transition-colors hover:bg-[#F9BF1C] hover:transition-colors  md:mx-0 "
                  href="https://rise.articulate.com/share/6TCn8pd8EYNv9SYxpWmN4VSjs5JsWjJV#/"
                >
                  M2 - Basics of Malaria Genetic Surveillance
                </Link>
              </div>
            </div> */}
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
