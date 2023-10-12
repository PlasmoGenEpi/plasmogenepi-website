import Accordion from "@/app/components/Accordion";
import Logo from "@/app/components/Logo";
import Opening from "@/app/components/OnlineCourse/Opening";
import Link from "next/link";

export default function OnlineCourse() {
  return (
    <div className="mx-4 max-w-6xl py-12 pb-80 md:mx-auto">
      <div className=" grid pb-12 md:grid-cols-2">
        <div className="flex text-center">
          <div className="my-auto">
            <h2 className="mb-4 text-2xl">Get Started on the Course</h2>
            <p className="hidden md:block">
              Follow the links to the right to get started with your Sleuthing &
              Surveillance exercises.
            </p>
            <p className="md:hidden">
              Follow the links below to get started with your Sleuthing &
              Surveillance exercises.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12 text-center md:mt-8">
          <Link
            href="https://rise.articulate.com/share/YNOwF89jtNTsz3q9YcC0xAJewoNCWqFy#/"
            className="mx-auto w-fit rounded-lg bg-[#F3B941] px-2 py-4 text-xl font-bold text-[white]"
          >
            Genotype Sleuthing with SNPs and Microhaplotypes
          </Link>
          <Link
            className="mx-auto w-fit rounded-lg bg-[#F3B941] px-2 py-4 text-xl font-bold text-[white]"
            href="https://rise.articulate.com/share/6TCn8pd8EYNv9SYxpWmN4VSjs5JsWjJV#/"
          >
            M2 - Basics of Malaria Genetic Surveillance
          </Link>
        </div>
      </div>
      <div className="">
        <Opening />
      </div>
      <div className="mx-4 md:mx-auto">
        <h2 className="mb-2 text-2xl font-bold">Overview of Modules</h2>
        <Accordion pages={[]} />
      </div>
    </div>
  );
}
