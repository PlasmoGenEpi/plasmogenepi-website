import Link from "next/link";

export const orderedModules = [
  {
    title: (
      <h3>M0 &ndash; Malaria 101 &ndash; A Prelude to Genetic Surveillance</h3>
    ),
    content: (
      <div className="py-4">
        <p>
          In this optional introductory module you will briefly review the basic
          epidemiology of malaria, including its transmission, health outcomes,
          diagnosis, treatment, and prevention. By briefly reviewing the basics
          of malaria epidemiology, you will be ready to apply your existing
          knowledge to the more advanced concepts of genetic surveillance later
          in the course.
        </p>
      </div>
    ),
  },
  {
    title: <h3>M1 &ndash; Malaria Epidemiology and Surveillance</h3>,
    content: (
      <div className="py-4">
        <p>
          Traditional surveillance is the foundation of effective malaria
          control, but it has some limitations. In this module, you will learn
          how genetic surveillance can complement traditional surveillance and
          epidemiological studies to fill in knowledge and data gaps. The main
          use cases and essential metrics of malaria genetic surveillance are
          also summarized.
        </p>
      </div>
    ),
  },
  {
    title: <h3> M2 &ndash; Basics of Malaria Genetic Surveillance</h3>,
    content: (
      <div className="py-4">
        <p>
          What can the DNA of malaria parasites tell you about where an
          infection came from, if you will be able to detect it with a standard
          rapid diagnostic test, and if it will respond to antimalarial drugs?
          In this module you will explore the relationship between genetics and
          the transmission and biology of malaria, and how genetics can be used
          to answer these and other questions. You will also learn about genetic
          variation and how to interpret simple phenotypes from malaria
          parasites and vectors.
        </p>
      </div>
    ),
  },
  {
    title: <h3> M3 &ndash; Drug, Diagnostic, and Insecticide Resistance</h3>,
    content: (
      <div className="py-4">
        <p>
          Drug and diagnostic resistance are two of the most relevant genetic
          epidemiology use cases. In this module you will explore the
          relationship between drug resistance marker genotypes and malaria
          treatment outcomes. You will also learn the genetic basis of
          diagnostic resistance. Finally, you will discuss how you can track
          drug and diagnostic resistance in the field, and what is the relevance
          of genetic surveillance.
        </p>
      </div>
    ),
  },
  {
    title: (
      <h3>M4 &ndash; Generating, Interpreting and Applying Genetic Data</h3>
    ),
    content: (
      <div className="py-4">
        <p>
          Different use cases require different methods. This module explores
          the strengths and weaknesses of different techniques for generating
          genetic data, from simple and traditional methods to next generation
          sequencing. You will learn how to choose appropriate techniques for
          common use cases, including identifying vector species, TES, drug
          resistance, diagnostic and insecticide resistance. Finally, you will
          gain a basic insight into next-generation sequencing, its
          capabilities, and how the tools we employ to analyze genetic data
          operate.
        </p>
      </div>
    ),
  },
  {
    title: (
      <h3>
        M5 &ndash; Using Genetic Diversity and Relatedness to Evaluate
        Transmission
      </h3>
    ),
    content: (
      <div className="py-4">
        <p>
          Now that you&apos;ve generated some genetic data, you need to choose
          the right metrics. In this module, you will learn how to choose the
          appropriate metrics derived from genetic data depending on the
          questions you are asking. You will also learn to match measures of
          genetic diversity to different epidemiological scenarios and how to
          assess transmission intensity and connectivity in different
          populations.
        </p>
      </div>
    ),
  },
  {
    title: <h3> M6 &ndash; Study Design for Malaria Genetic Surveillance</h3>,
    content: (
      <div className="py-4">
        <p>
          Genetic data are only as good as the surveillance system or study that
          from which they were collected. But what makes a good malaria genetic
          surveillance study? In this module, you will start to learn how to
          design effective genetic surveillance studies. Topics include study
          design, sampling, stratification, power and sample size. You will also
          learn how to critically assess the pros and cons of different
          approaches to study design for different use cases.
        </p>
      </div>
    ),
  },
  {
    title: (
      <h3>M7 &ndash; Interpreting Results and Making Policy Recommendations</h3>
    ),
    content: (
      <div className="py-4">
        <p>
          The goal of malaria genetic surveillance is to design and deliver more
          effective control programs, which will prevent illness and death. In
          this final module, you will focus on turning insights gleaned from
          malaria genetic data into actionable public health recommendations.
          You will learn how to correctly interpret combinations of results,
          choose the best way to present your findings to different
          stakeholders, and avoid common pitfalls that could lead to
          misinterpretation of your results.
        </p>
      </div>
    ),
  },
];
