"use client";

import Link from "next/link";
import { useState } from "react";

export default function Accordion({
  pages,
}: {
  pages: { id: number; content: string[]; title: string }[];
}) {
  const [openPage, setOpenPage] = useState<number | null>(0);

  return (
    <div>
      <div
        onClick={(e) => {
          if (openPage === 0) {
            setOpenPage(null);
          } else {
            setOpenPage(0);
          }
        }}
        className={
          openPage === 0
            ? "collapse collapse-open"
            : "collapse hover:bg-pink-50"
        }
      >
        <div className="collapse-title text-2xl font-medium">
          <h2 className=" text-2xl font-bold">
            {" "}
            Malaria 101 &ndash; A Prelude to Genetic Surveillance{" "}
          </h2>
        </div>
        <div className="collapse-content px-8">
          <p className="mb-4">
            In this introductory module we will quickly review the basic
            epidemiology of malaria, including its transmission, health
            outcomes, diagnosis, treatment, and prevention.
          </p>
          <p className="mb-4">
            By briefly reviewing the basics of malaria epidemiology, you will be
            ready to apply your existing knowledge to the more advanced concepts
            of Genetic surveillance later in the course.
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
        onClick={(e) => {
          if (openPage === 1) {
            setOpenPage(null);
          } else {
            setOpenPage(1);
          }
        }}
        className={
          openPage === 1
            ? "collapse collapse-open"
            : "collapse hover:bg-pink-50"
        }
      >
        <div className="collapse-title text-2xl font-medium">
          <h2 className=" text-2xl font-bold">
            M1 - Malaria Epidemiology and Surveillance
          </h2>
        </div>
        <div className="collapse-content px-8">
          <p className="mb-4">
            Traditional surveillance is the foundation of effective malaria
            control, but it has some limitations. In this module, you will learn
            how genetic surveillance can complement traditional surveillance and
            epidemiological studies to fill in knowledge and data gaps. The main
            uses cases and essential metrics of malaria Genetic surveillance are
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
        onClick={(e) => {
          if (openPage === 2) {
            setOpenPage(null);
          } else {
            setOpenPage(2);
          }
        }}
        className={
          openPage === 2
            ? "collapse collapse-open"
            : "collapse hover:bg-pink-50"
        }
      >
        <div className="collapse-title text-2xl font-medium">
          <h2 className=" text-2xl font-bold">
            M2 - Basics of Malaria Genetic Surveillance
          </h2>
        </div>
        <div className="collapse-content px-8">
          <p className="mb-4">
            What can the DNA of malaria parasites tell you about where an
            infection came from, if you’ll be able to detect it with a standard
            rapid diagnostic test, and if it will respond to antimalarial drugs?
            In this module you will explore the relationship between genetics
            and the transmission and biology of malaria, and how it can be used
            to answer these and other questions. You will also learn about
            genetic variation and how to interpret simple phenotypes from
            malaria parasites and vectors.
          </p>
          <ul className="mb-4">
            <li className="list-disc">6 lecture videos (30 minutes)</li>
            <li className="list-disc">4 quizzes/activities (40 minutes)</li>
            <li className="list-disc">2 Job Aids (10 minutes)</li>
          </ul>
          <div className="mb-8">
            <span className="">
              Click the link to preview an interactive activity:{" "}
            </span>
            <Link
              className="font-medium text-blue-500"
              href="https://rise.articulate.com/share/YNOwF89jtNTsz3q9YcC0xAJewoNCWqFy#/"
            >
              Genotype Sleuthing with SNPs and Microhaplotypes
            </Link>
          </div>
          <div className="">
            <span className="">
              Click the link to preview an interactive activity:{" "}
            </span>
            <Link
              className="font-medium text-blue-500"
              href="https://rise.articulate.com/share/6TCn8pd8EYNv9SYxpWmN4VSjs5JsWjJV#/"
            >
              M2 &ndash; Basics of Malaria Genetic Surveillance
            </Link>
          </div>
        </div>
      </div>
      <div
        onClick={(e) => {
          if (openPage === 3) {
            setOpenPage(null);
          } else {
            setOpenPage(3);
          }
        }}
        className={
          openPage === 3
            ? "collapse collapse-open"
            : "collapse hover:bg-pink-50"
        }
      >
        <div className="collapse-title text-2xl font-medium">
          <h2 className=" text-2xl font-bold">
            M3 - Drug and Diagnostic Resistance
          </h2>
        </div>
        <div className="collapse-content px-8">
          <p className="mb-4">
            Drug and diagnostic resistance are two of the most relevant genetic
            epidemiology use cases. In this module you will explore the
            relationship between drug resistance marker genotypes and malaria
            treatment outcomes. You will also learn the genetic basis of
            diagnostic resistance. Finally, you will discuss how you cantrack
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
        onClick={(e) => {
          if (openPage === 4) {
            setOpenPage(null);
          } else {
            setOpenPage(4);
          }
        }}
        className={
          openPage === 4
            ? "collapse collapse-open"
            : "collapse hover:bg-pink-50"
        }
      >
        <div className="collapse-title text-2xl font-medium">
          <h2 className=" text-2xl font-bold">
            M4 - Genetic Data Generation, Interpretation, and Applications
          </h2>
        </div>
        <div className="collapse-content px-8">
          <p className="mb-4">
            Different use cases require different methods. This module explores
            the strengths and weaknesses of different techniques for generating
            genetic data, from simple and traditional methods, to next
            generation sequencing. You will learn how to choose appropriate
            techniques for common use cases, including identifying vector
            species, TES, drug resistance, diagnostic and insecticide
            resistance. Finally, you will gain a basic insight into
            next-generation sequencing, its capabilities, and how the tools we
            employ to analyze Genetic data operate.
          </p>
          <p className="mb-4">
            If you are in the <span className="font-bold">research</span>{" "}
            <span className="font-bold">cohort</span>, you will also learn how
            to interpret results from common genotyping mthods, including qPCR
            and Sanger sequencing.. Additionally, you will be able to explain
            how next generation sequencing works and what are common
            bioinformatic tools to analyze sequencing data.
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
        onClick={(e) => {
          if (openPage === 5) {
            setOpenPage(null);
          } else {
            setOpenPage(5);
          }
        }}
        className={
          openPage === 5
            ? "collapse collapse-open"
            : "collapse hover:bg-pink-50"
        }
      >
        <div className="collapse-title text-2xl font-medium">
          <h2 className=" text-2xl font-bold">
            M5 - Using Genetic Diversity and Relatedness to Evaluate
            Transmission
          </h2>
        </div>
        <div className="collapse-content px-8">
          <p className="mb-2">
            Now that you&apos;ve generated some Genetic data, you need to choose
            the right metrics.{" "}
          </p>
          <p className="mb-4">
            In this module, you will learn how to choose the appropriate metrics
            derived from Genetic data depending on the questions you are asking.
            You will also learn to match measures of genetic diversity to
            different epidemiological scenarios and how to assess transmission
            intensity and connectivity in different populations.
          </p>
          <p className="mb-4">
            If you are in the <span className="font-bold">research</span>{" "}
            <span className="font-bold">cohort</span>, you will take a deeper
            dive into assessing within-host diversity and parasite connectivity
            using fst, Josts D, IBD and IBS
          </p>
          <p className="mb-4">Use cases include ...</p>
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
        onClick={(e) => {
          if (openPage === 6) {
            setOpenPage(null);
          } else {
            setOpenPage(6);
          }
        }}
        className={
          openPage === 6
            ? "collapse collapse-open"
            : "collapse hover:bg-pink-50"
        }
      >
        <div className="collapse-title text-2xl font-medium">
          <h2 className=" text-2xl font-bold">
            M6 - Study Design for Malaria Genetic Surveillance, Part 1 - Study
          </h2>
        </div>
        <div className="collapse-content px-8">
          <p className="mb-2">
            Now that you&apos;ve generated some Genetic data, you need to choose
            the right metrics.
          </p>
          <p className="mb-4">
            In this module, you will learn how to choose the appropriate metrics
            derived from Genetic data depending on the questions you are asking.
            You will also learn to match measures of genetic diversity to
            different epidemiological scenarios and how to assess transmission
            intensity and connectivity in different populations.
          </p>
          <p className="mb-4">Use cases include ...</p>
          <p className="mb-4">
            If you are in the research cohort, you will take a deeper dive into
            assessing within-host diversity and parasite connectivity using fst,
            Josts D, IBD and IBS.
          </p>
          <p>Program Cohort:</p>
          <ul className="mb-4 pl-8">
            <li className="list-disc">8 lecture videos (40 minutes)</li>
            <li className="list-disc">6 activities (30 minutes)</li>
          </ul>
          <p>Research Cohort:</p>
          <ul className="pl-8">
            <li className="list-disc">10 lecture videos (50 minutes)</li>
            <li className="list-disc">8 activities (60 minutes)</li>
          </ul>
        </div>
      </div>
      <div
        onClick={(e) => {
          if (openPage === 7) {
            setOpenPage(null);
          } else {
            setOpenPage(7);
          }
        }}
        className={
          openPage === 7
            ? "collapse collapse-open"
            : "collapse hover:bg-pink-50"
        }
      >
        <div className="collapse-title text-2xl font-medium">
          <h2 className="text-2xl font-bold">Design and Sampling</h2>
        </div>
        <div className="collapse-content px-8">
          <p className="mb-4">
            Genetic data are only as good as the surveillance system or study
            that from which they were collected. But what makes a good malaria
            Genetic surveillance study? In this module, you will start to learn
            how to design effective Genetic surveillance studies. Topics include
            how to choose your target population, geographic scale, and
            stratification for different use cases and the strengths and
            weaknesses of different sampling approaches.
          </p>
          <ul className="pl-8">
            <li className="list-disc">7 lecture videos (35 minutes)</li>
            <li className="list-disc">2 activites (20 minutes)</li>
          </ul>
        </div>
      </div>
      <div
        onClick={(e) => {
          if (openPage === 8) {
            setOpenPage(null);
          } else {
            setOpenPage(8);
          }
        }}
        className={
          openPage === 8
            ? "collapse collapse-open"
            : "collapse hover:bg-pink-50"
        }
      >
        <div className="collapse-title text-2xl font-medium">
          <h2 className=" text-2xl font-bold">
            M4.2 - Study Design for Malaria Genetic Surveillance, Part 2 - Power
            and Sample Size
          </h2>
        </div>
        <div className="collapse-content px-8">
          <p>
            In this module, you will continue to explore best practices for
            developing effective Genetic surveillance studies. You will learn to
            interpret power curves and sample size tables, choose appropriate
            parameters for a multi- cluster power calculation, and describe the
            negative effects of an underpowered study.
          </p>
          <ul className="pl-8">
            <li className="list-disc">5 lecture videos (25 minutes)</li>
            <li className="list-disc">4 activites (40 minutes)</li>
          </ul>
        </div>
      </div>
      <div
        onClick={(e) => {
          if (openPage === 9) {
            setOpenPage(null);
          } else {
            setOpenPage(9);
          }
        }}
        className={
          openPage === 9
            ? "collapse collapse-open"
            : "collapse hover:bg-pink-50"
        }
      >
        <div className="collapse-title text-2xl font-medium">
          <h2 className=" text-2xl font-bold">
            M4.3 - Study Design for Malaria Genetic Surveillance, Part 3 -
            Connectivity and Importation
          </h2>
        </div>
        <div className="collapse-content px-8">
          <p className="mb-4">
            In this third and final module on study design, you will focus on
            critically evaluating different study designs for measuring
            connectivity and importation. You will also learn how to perform
            sample size & power calculation for these use-cases and choose the
            appropriate types of information to inform decisions about
            interventions.
          </p>
          <ul className="pl-8">
            <li className="list-disc">1 lecture video (10 minutes)</li>
            <li className="list-disc">2 activites (20 minutes)</li>
          </ul>
        </div>
      </div>
      <div
        onClick={(e) => {
          if (openPage === 10) {
            setOpenPage(null);
          } else {
            setOpenPage(10);
          }
        }}
        className={
          openPage === 10
            ? "collapse collapse-open"
            : "collapse hover:bg-pink-50"
        }
      >
        <div className="collapse-title text-2xl font-medium">
          <h2 className=" text-2xl font-bold">
            M7 - Interpreting Results and Making Policy Recommendations
          </h2>
        </div>
        <div className="collapse-content px-8">
          <p className="mb-4">
            The goal of malaria Genetic surveillance is to design and deliver
            more effective control programs, which will prevent illness and
            death. In this final module, you will focus on turning insights
            gleaned from malaria Genetic data into actionable public health
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

{
  /* <div class="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" checked="checked" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content px-8">
    <p>hello</p>
  </div>
</div>
<div class="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content px-8">
    <p>hello</p>
  </div>
</div>
<div class="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content px-8">
    <p>hello</p>
  </div>
</div> */
}
