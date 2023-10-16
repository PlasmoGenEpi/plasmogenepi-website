import Accordion from "@/app/components/Accordion";
import Logo from "@/app/components/Logo";
import Opening from "@/app/components/OnlineCourse/Opening";
import Image from "next/image";
import Link from "next/link";

export default function OnlineCourse() {
  return (
    <div>
      {/* <div className="relative flex max-h-[50vh] flex-col justify-center overflow-hidden md:max-h-[max(400px,40vh)]">
        <div className="absolute inset-0 mx-auto hidden max-w-6xl gap-4 p-4 md:grid md:grid-cols-2">
          <div className="mx-auto flex text-center text-white">
            <div className="mt-auto">
              <h2 className="mb-4 font-serif text-2xl md:text-5xl">
                Get started on the course
              </h2>
              <p className="mt-auto hidden md:block">
                Follow the links to the right to get started with your Sleuthing
                & Surveillance exercises.
              </p>
              <p className="mb-4 md:hidden">
                Follow the links below to get started with your Sleuthing &
                Surveillance exercises.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end gap-12 text-center md:mt-8">
            <Link
              href="https://rise.articulate.com/share/YNOwF89jtNTsz3q9YcC0xAJewoNCWqFy#/"
              className="mx-auto w-fit rounded-lg bg-[#F3B941] px-2 py-4 text-xl font-bold text-[white] shadow-sm transition-colors hover:bg-[#F9BF1C] hover:transition-colors"
            >
              Genotype Sleuthing with SNPs and Microhaplotypes
            </Link>
            <Link
              className="mx-auto w-fit rounded-lg bg-[#F3B941] px-2 py-4 text-xl font-bold text-[white] shadow-sm transition-colors hover:bg-[#F9BF1C] hover:transition-colors"
              href="https://rise.articulate.com/share/6TCn8pd8EYNv9SYxpWmN4VSjs5JsWjJV#/"
            >
              M2 - Basics of Malaria Genetic Surveillance
            </Link>
          </div>
        </div>
        <Image
          src="/computer_work.jpg"
          width={2000}
          height={1000}
          alt="man looking at computer"
          className="mx-auto [object-position:50%]"
        />
      </div> */}
      <div className="mx-auto mb-8 mt-12 grid max-w-4xl gap-4 px-2 md:grid-cols-2">
        <div className="mx-auto flex text-center text-black">
          <div className="mt-auto">
            <h2 className="mb-4 font-serif text-4xl md:text-5xl">
              Get started on the course
            </h2>
            <p className="mt-auto hidden md:block">
              Follow the links to the right to get started with your Sleuthing &
              Surveillance exercises.
            </p>
            <p className="mb-4 md:hidden">
              Follow the links below to get started with your Sleuthing &
              Surveillance exercises.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end gap-12 text-center md:mt-8">
          <Link
            href="https://rise.articulate.com/share/YNOwF89jtNTsz3q9YcC0xAJewoNCWqFy#/"
            className="mx-auto w-fit rounded-lg bg-[#F3B941] px-2 py-2 text-xl font-bold text-[white] shadow-sm transition-colors hover:bg-[#F9BF1C] hover:transition-colors"
          >
            Genotype Sleuthing with SNPs and Microhaplotypes
          </Link>
          <Link
            className="mx-auto w-fit rounded-lg bg-[#F3B941] px-2 py-2 text-xl font-bold text-[white] shadow-sm transition-colors hover:bg-[#F9BF1C] hover:transition-colors"
            href="https://rise.articulate.com/share/6TCn8pd8EYNv9SYxpWmN4VSjs5JsWjJV#/"
          >
            M2 - Basics of Malaria Genetic Surveillance
          </Link>
        </div>
      </div>

      <div className="max-w-4xl px-2 py-6 md:mx-auto md:py-12">
        <div className="">
          {/* <div className=" mb-8 grid gap-4 md:grid-cols-2">
            <div className="mx-auto flex text-center">
              <div className="my-auto">
                <h2 className="mb-4 font-serif text-5xl">
                  Get started on the course
                </h2>
                <p className="mt-auto hidden md:block">
                  Follow the links to the right to get started with your
                  Sleuthing & Surveillance exercises.
                </p>
                <p className="mb-4 md:hidden">
                  Follow the links below to get started with your Sleuthing &
                  Surveillance exercises.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-12 text-center md:mt-8">
              <Link
                href="https://rise.articulate.com/share/YNOwF89jtNTsz3q9YcC0xAJewoNCWqFy#/"
                className="mx-auto w-fit rounded-lg bg-[#F3B941] px-2 py-4 text-xl font-bold text-[white] shadow-sm transition-colors hover:bg-[#F9BF1C] hover:transition-colors"
              >
                Genotype Sleuthing with SNPs and Microhaplotypes
              </Link>
              <Link
                className="mx-auto w-fit rounded-lg bg-[#F3B941] px-2 py-4 text-xl font-bold text-[white] shadow-sm transition-colors hover:bg-[#F9BF1C] hover:transition-colors"
                href="https://rise.articulate.com/share/6TCn8pd8EYNv9SYxpWmN4VSjs5JsWjJV#/"
              >
                M2 - Basics of Malaria Genetic Surveillance
              </Link>
            </div>
          </div> */}
          <div className="">
            <Opening />
          </div>
          <div className="md:mx-auto">
            <h2 className="mb-2 text-2xl font-bold">Overview of Modules</h2>
            <Accordion pages={[]} />
          </div>
        </div>
      </div>
    </div>
  );
}
