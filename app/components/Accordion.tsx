"use client";

import Link from "next/link";
import { useState } from "react";
import ExpandIcon from "./ExpandIcon";

export default function Accordion({
  pages,
}: {
  pages: { id: number; content: string[]; title: string }[];
}) {
  const [openPages, setOpenPages] = useState<number[]>([]);

  return (
    <div className="">
      <div
        className={
          openPages.includes(0)
            ? "  collapse collapse-open border-b shadow"
            : "collapse border-b pr-0 shadow"
        }
      >
        <div
          className={"text-black collapse-title relative text-2xl font-medium"}
        >
          <div className="flex justify-between">
            <h3 className=" text-black cursor-auto font-poppins text-xl ">
              {" "}
              M0 &ndash; Malaria 101 &ndash; A Prelude to Genetic Surveillance{" "}
            </h3>
            <button
              onClick={(e) => {
                if (openPages.includes(0)) {
                  let index = openPages.indexOf(0);
                  let newArr = openPages
                    .slice(0, index)
                    .concat(openPages.slice(index + 1, openPages.length));
                  setOpenPages(newArr);
                } else {
                  setOpenPages([...openPages, 0]);
                }
              }}
              className=" h-0 translate-x-12 cursor-pointer p-4"
              aria-label="expand"
            >
              <ExpandIcon open={openPages.includes(0)} />
            </button>
          </div>
        </div>
        <div className={"collapse-content pl-6 pr-12"}>
          <p className="mb-4">
            In this introductory module we will quickly review the basic
            epidemiology of malaria, including its transmission, health
            outcomes, diagnosis, treatment, and prevention.
          </p>
          <p className="mb-4">
            By briefly reviewing the basics of malaria epidemiology, you will be
            ready to apply your existing knowledge to the more advanced concepts
            of genetic surveillance later in the course.
          </p>
          <ul className="mb-4 pl-8">
            <li className="list-disc">1 lecture (10 minutes)</li>
            <li className="list-disc">1 activity (10 minutes)</li>
          </ul>
          <p>
            We also provide a reference list for any learners who want to spend
            more time reviewing core concepts before starting the main course
            (optional).
          </p>
        </div>
      </div>
      <div
        className={
          openPages.includes(1)
            ? "  collapse collapse-open border-b shadow"
            : "collapse border-b pr-0 shadow"
        }
      >
        <div
          className={
            "text-black collapse-title relative cursor-auto text-2xl font-medium "
          }
        >
          <div className="flex justify-between">
            <h3 className=" text-black cursor-auto font-poppins text-xl">
              {" "}
              M1 &ndash; Malaria Epidemiology and Surveillance
            </h3>
            <button
              onClick={(e) => {
                if (openPages.includes(1)) {
                  let index = openPages.indexOf(1);
                  let newArr = openPages
                    .slice(0, index)
                    .concat(openPages.slice(index + 1, openPages.length));
                  setOpenPages(newArr);
                } else {
                  setOpenPages([...openPages, 1]);
                }
              }}
              className=" h-0 translate-x-12 cursor-pointer p-4"
              aria-label="expand"
            >
              <ExpandIcon open={openPages.includes(1)} />
            </button>
          </div>
        </div>
        <div className="py- collapse-content pl-6 pr-12">
          <p className="mb-4">
            Traditional surveillance is the foundation of effective malaria
            control, but it has some limitations. In this module, you will learn
            how genetic surveillance can complement traditional surveillance and
            epidemiological studies to fill in knowledge and data gaps. The main
            uses cases and essential metrics of malaria genetic surveillance are
            also summarized.
          </p>
          <ul className="mb-4 pl-8">
            <li className="list-disc">4 lecture videos (20 minutes)</li>
            <li className="list-disc">6 activities (60 minutes)</li>
            <li className="list-disc">2 Job Aids (10 minutes)</li>
          </ul>
        </div>
      </div>
      <div
        className={
          openPages.includes(2)
            ? "  collapse collapse-open border-b shadow"
            : "collapse border-b pr-0 shadow"
        }
      >
        <div
          className={
            "text-black collapse-title relative cursor-auto text-2xl font-medium "
          }
        >
          <div className="flex justify-between">
            <h3 className=" text-black cursor-auto font-poppins text-xl">
              {" "}
              M2 &ndash; Basics of Malaria Genetic Surveillance
            </h3>
            <button
              onClick={(e) => {
                if (openPages.includes(2)) {
                  let index = openPages.indexOf(2);
                  let newArr = openPages
                    .slice(0, index)
                    .concat(openPages.slice(index + 1, openPages.length));
                  setOpenPages(newArr);
                } else {
                  setOpenPages([...openPages, 2]);
                }
              }}
              className=" h-0 translate-x-12 cursor-pointer p-4"
              aria-label="expand"
            >
              <ExpandIcon open={openPages.includes(2)} />
            </button>
          </div>
        </div>
        <div className="py- collapse-content pl-6 pr-12">
          <p className="mb-4">
            What can the DNA of malaria parasites tell you about where an
            infection came from, if you&apos;ll be able to detect it with a
            standard rapid diagnostic test, and if it will respond to
            antimalarial drugs? In this module you will explore the relationship
            between genetics and the transmission and biology of malaria, and
            how it can be used to answer these and other questions. You will
            also learn about genetic variation and how to interpret simple
            phenotypes from malaria parasites and vectors.
          </p>
          <ul className="mb-4 pl-8">
            <li className="list-disc">6 lecture videos (30 minutes)</li>
            <li className="list-disc">7 quizzes/activities (40 minutes)</li>
            <li className="list-disc">2 Job Aids (10 minutes)</li>
          </ul>
          <div className="mb-8">
            <span className="">
              Click the link to preview an interactive activity:{" "}
            </span>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-500 font-medium"
              href="https://rise.articulate.com/share/YNOwF89jtNTsz3q9YcC0xAJewoNCWqFy#/"
            >
              Genotype Sleuthing with SNPs and Microhaplotypes
            </Link>
          </div>
          <div className="">
            <span className="">
              Click the link to preview all lessons in the module:{" "}
            </span>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-500 font-medium"
              href="https://rise.articulate.com/share/6TCn8pd8EYNv9SYxpWmN4VSjs5JsWjJV#/"
            >
              M2 &ndash; Basics of Malaria Genetic Surveillance
            </Link>
          </div>
        </div>
      </div>
      <div
        className={
          openPages.includes(3)
            ? "  collapse collapse-open border-b shadow"
            : "collapse border-b pr-0 shadow"
        }
      >
        <div
          className={
            "text-black collapse-title relative cursor-auto text-2xl font-medium "
          }
        >
          <div className="flex justify-between">
            <h3 className=" text-black cursor-auto font-poppins text-xl">
              {" "}
              M3 &ndash; Drug and Diagnostic Resistance
            </h3>
            <button
              onClick={(e) => {
                if (openPages.includes(3)) {
                  let index = openPages.indexOf(3);
                  let newArr = openPages
                    .slice(0, index)
                    .concat(openPages.slice(index + 1, openPages.length));
                  setOpenPages(newArr);
                } else {
                  setOpenPages([...openPages, 3]);
                }
              }}
              className=" h-0 translate-x-12 cursor-pointer p-4"
              aria-label="expand"
            >
              <ExpandIcon open={openPages.includes(3)} />
            </button>
          </div>
        </div>
        <div className="py- collapse-content pl-6 pr-12">
          <p className="mb-4">
            Drug and diagnostic resistance are two of the most relevant genetic
            epidemiology use cases. In this module you will explore the
            relationship between drug resistance marker genotypes and malaria
            treatment outcomes. You will also learn the genetic basis of
            diagnostic resistance. Finally, you will discuss how you can track
            drug and diagnostic resistance in the field, and what is the
            relevance of genetic surveillance.
          </p>
          <ul className="pl-8">
            <li className="list-disc">7 lecture videos (35 minutes)</li>
            <li className="list-disc">3 quizzes/activities (20 minutes)</li>
            <li className="list-disc">2 Job Aids (10 minutes)</li>
          </ul>
        </div>
      </div>
      <div
        className={
          openPages.includes(4)
            ? "  collapse collapse-open border-b shadow"
            : "collapse border-b pr-0 shadow"
        }
      >
        <div
          className={
            "text-black collapse-title relative cursor-auto text-2xl font-medium "
          }
        >
          <div className="flex justify-between">
            <h3 className=" text-black cursor-auto font-poppins text-xl">
              {" "}
              M4 &ndash; Genetic Data Generation, Interpretation, and
              Applications
            </h3>
            <button
              onClick={(e) => {
                if (openPages.includes(4)) {
                  let index = openPages.indexOf(4);
                  let newArr = openPages
                    .slice(0, index)
                    .concat(openPages.slice(index + 1, openPages.length));
                  setOpenPages(newArr);
                } else {
                  setOpenPages([...openPages, 4]);
                }
              }}
              className=" h-0 translate-x-12 cursor-pointer p-4"
              aria-label="expand"
            >
              <ExpandIcon open={openPages.includes(4)} />
            </button>
          </div>
        </div>
        <div className="py- collapse-content pl-6 pr-12">
          <p className="mb-4">
            Different use cases require different methods. This module explores
            the strengths and weaknesses of different techniques for generating
            genetic data, from simple and traditional methods, to next
            generation sequencing. You will learn how to choose appropriate
            techniques for common use cases, including identifying vector
            species, TES, drug resistance, diagnostic and insecticide
            resistance. Finally, you will gain a basic insight into next-
            generation sequencing, its capabilities, and how the tools we employ
            to analyze genetic data operate.
          </p>
          <p className="mb-4">
            If you are in the{" "}
            <span className="font-bold">research cohort, </span>
            you will also learn how to interpret results from common genotyping
            methods, including qPCR and Sanger sequencing. Additionally, you
            will be able to explain how next generation sequencing works and
            what are common bioinformatic tools to analyze sequencing data.
          </p>
          <div className="mb-4">
            <p>Program Cohort</p>
            <ul className="pl-8">
              <li className="list-disc">8 lecture videos (45 minutes)</li>
              <li className="list-disc">4 activities (35 minutes)</li>
            </ul>
          </div>
          <p>Research Cohort</p>
          <ul className="pl-8">
            <li className="list-disc">14 lecture videos (70 minutes)</li>
            <li className="list-disc">6 activities (60 minutes)</li>
          </ul>
        </div>
      </div>
      <div
        className={
          openPages.includes(5)
            ? "  collapse collapse-open border-b shadow"
            : "collapse border-b pr-0 shadow"
        }
      >
        <div
          className={
            "text-black collapse-title relative cursor-auto text-2xl font-medium "
          }
        >
          <div className="flex justify-between">
            <h3 className=" text-black cursor-auto font-poppins text-xl">
              {" "}
              M5 &ndash; Using Genetic Diversity and Relatedness to Evaluate
              Transmission
            </h3>
            <button
              onClick={(e) => {
                if (openPages.includes(5)) {
                  let index = openPages.indexOf(5);
                  let newArr = openPages
                    .slice(0, index)
                    .concat(openPages.slice(index + 1, openPages.length));
                  setOpenPages(newArr);
                } else {
                  setOpenPages([...openPages, 5]);
                }
              }}
              className=" h-0 translate-x-12 cursor-pointer p-4"
              aria-label="expand"
            >
              <ExpandIcon open={openPages.includes(5)} />
            </button>
          </div>
        </div>
        <div className="py- collapse-content pl-6 pr-12">
          <p className="mb-4">
            Now that you&apos;ve generated some genetic data, you need to choose
            the right metrics. In this module, you will learn how to choose the
            appropriate metrics derived from genetic data depending on the
            questions you are asking. You will also learn to match measures of
            genetic diversity to different epidemiological scenarios and how to
            assess transmission intensity and connectivity in different
            populations
          </p>

          <p className="mb-4">
            If you are in the{" "}
            <span className="font-bold">research cohort, </span>
            you will take a deeper dive into assessing within-host diversity and
            parasite connectivity using fst, Josts D, IBD and IBS.
          </p>
          <div className="mb-4">
            <p>Program Cohort:</p>
            <ul className="pl-8">
              <li className="list-disc">8 lecture videos (40 minutes)</li>
              <li className="list-disc">6 activities (30 minutes)</li>
            </ul>
          </div>
          <p>Research Cohort:</p>
          <ul className="pl-8">
            <li className="list-disc">10 lecture videos (50 minutes)</li>
            <li className="list-disc">8 activities (60 minutes)</li>
          </ul>
        </div>
      </div>
      <div
        className={
          openPages.includes(6)
            ? "  collapse collapse-open border-b shadow"
            : "collapse border-b pr-0 shadow"
        }
      >
        <div
          className={
            "text-black collapse-title relative cursor-auto text-2xl font-medium "
          }
        >
          <div className="flex justify-between">
            <h3 className=" text-black cursor-auto font-poppins text-xl">
              {" "}
              M6 &ndash; Study Design for Malaria Genetic Surveillance
            </h3>
            <button
              onClick={(e) => {
                if (openPages.includes(6)) {
                  let index = openPages.indexOf(6);
                  let newArr = openPages
                    .slice(0, index)
                    .concat(openPages.slice(index + 1, openPages.length));
                  setOpenPages(newArr);
                } else {
                  setOpenPages([...openPages, 6]);
                }
              }}
              className=" h-0 translate-x-12 cursor-pointer p-4"
              aria-label="expand"
            >
              <ExpandIcon open={openPages.includes(6)} />
            </button>
          </div>
        </div>
        <div className="py- collapse-content pl-6 pr-12">
          <p className="mb-4">
            Genetic data are only as good as the surveillance system or study
            that from which they were collected. But what makes a good malaria
            genetic surveillance study? In this module, you will start to learn
            how to design effective genetic surveillance studies. Topics study
            design, sampling, stratification, power and sample size. You will
            also learn how to critically assess the pros and cons of different
            approaches fto study design for different use cases.
          </p>
          <ul className="mb-4 pl-8">
            <li className="list-disc">12 lecture videos (60 minutes)</li>
            <li className="list-disc">2 activities (20 minutes)</li>
          </ul>
        </div>
      </div>
      <div
        className={
          openPages.includes(7)
            ? "  collapse collapse-open border-b shadow"
            : "collapse border-b pr-0 shadow"
        }
      >
        <div
          className={
            "text-black collapse-title relative cursor-auto text-2xl font-medium "
          }
        >
          <div className="flex justify-between">
            <h3 className=" text-black cursor-auto font-poppins text-xl">
              {" "}
              M7 &ndash; Interpreting Results and Making Policy Recommendations
            </h3>
            <button
              onClick={(e) => {
                if (openPages.includes(7)) {
                  let index = openPages.indexOf(7);
                  let newArr = openPages
                    .slice(0, index)
                    .concat(openPages.slice(index + 1, openPages.length));
                  setOpenPages(newArr);
                } else {
                  setOpenPages([...openPages, 7]);
                }
              }}
              className=" h-0 translate-x-12 cursor-pointer p-4"
              aria-label="expand"
            >
              <ExpandIcon open={openPages.includes(7)} />
            </button>
          </div>
        </div>
        <div className="py- collapse-content pl-6 pr-12">
          <p className="mb-4">
            The goal of malaria genetic surveillance is to design and deliver
            more effective control programs, which will prevent illness and
            death. In this final module, you will focus on turning insights
            gleaned from malaria genetic data into actionable public health
            recommendations. You will learn how to correctly interpret
            combinations of results, choose the best way to present your
            findings to different stakeholder, and avoid common pitfalls that
            could lead to misinterpretation of your results.
          </p>
          <ul className="pl-8">
            <li className="list-disc">1 lecture video (10 minutes)</li>
            <li className="list-disc">3 activites (30 minutes)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
