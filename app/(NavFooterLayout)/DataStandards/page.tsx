import AlternateView from "@/app/components/Images/AlternateView";
import FullscreenImageWrapper from "@/app/components/Images/FullscreenImageWrapper";
import Image from "next/image";
import Link from "next/link";

export default function DataStandards() {
  // return (
  //   <div>
  //     <div className="mx-auto mt-16  max-w-6xl border-b-8 border-pge-dark-teal px-4 pb-16 text-lg md:px-8 md:text-base lg:px-16">
  //       <h1 className="font-poppins text-2xl font-bold">
  //         Data & Analysis Standards
  //       </h1>
  //       <div>
  //         <p className="mt-8 font-roboto">
  //           Please provide your feedback, sign up to get involved, or stay
  //           informed{" "}
  //           <Link
  //             rel="noopener noreferrer"
  //             target="_blank"
  //             className="font-medium text-blue-600 underline"
  //             href={`https://forms.gle/Ke2fmd7oRwixgBnw8`}
  //           >
  //             using our feedback form here!
  //           </Link>
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <div className="mx-auto mt-16  max-w-6xl border-b-8 border-pge-dark-teal px-4 pb-16 text-lg md:px-8 md:text-base lg:px-16">
        <h1 className="font-poppins text-2xl font-bold">
          Data & Analysis Standards
        </h1>
        <p className="mt-8 font-roboto">
          Please provide your feedback, sign up to get involved, or stay
          informed{" "}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="font-medium text-blue-600 underline"
            href={`https://forms.gle/Ke2fmd7oRwixgBnw8`}
          >
            using our feedback form here!
          </Link>
        </p>

        <p className="mt-4 font-roboto">
          Genomic data can provide an invaluable source of information to
          understand pathogen evolution, identify patterns of transmission, and
          characterize phenotypes such as drug resistance and immune escape. For
          eukaryotic pathogens, larger genomes, sexual recombination, and
          complicated transmission dynamics including polyclonal infections have
          historically limited the use of genomic data for many of these
          applications. However, recent laboratory developments, including
          multiplexed targeted sequencing, have rapidly increased the pace of
          genomic data generation for eukaryotic pathogens. Fundamental
          differences in the biology and transmission of infections caused by
          these pathogens render many of the genomic data and analysis tools
          developed for other organisms (primarily humans, viruses, and
          bacteria) difficult or impossible to use. As a result, many research
          efforts have needed to rely on bespoke methods for processing and
          analysis, limiting the reusability of data, the accuracy and
          reproducibility of results, and more generally the productivity of
          scientists studying eukaryotic pathogens. There is a need to develop
          software and computational tools to{" "}
          <span className="font-bold">process, store, share and analyze</span>{" "}
          these data in a way which sets standards, encourages innovation, and
          facilitates scientific discovery.
        </p>
      </div>
      <div className="mx-auto mt-16  max-w-6xl border-b-8 border-pge-dark-teal px-4 pb-16 text-lg md:px-8 md:text-base lg:px-16">
        {" "}
        <h2 className="font-poppins text-xl font-bold">
          Proposed standards for targeted amplicon data and metadata
        </h2>
        <div className="my-4 mb-8 flex flex-col gap-4">
          <p className="font-roboto">
            With generation of amplicon sequencing data for Plasmodium
            accelerating, there is a timely opportunity to create shared
            resources to disseminate, reuse, and analyze these data. However,
            there is currently no standard for lossless representation of
            microhaplotypes derived from these approaches nor for associated
            laboratory, bioinformatic, and clinical metadata.
          </p>
          <p className="font-roboto">
            A standardized format for microhaplotype data would facilitate data
            sharing, including development of appropriate repositories, along
            with transparency and reproducibility of analysis. Standardization
            at this central step in analysis would also allow for alignment of
            downstream tools, increasing incentives to develop robust, reusable
            software and allow cross-study analyses.
          </p>
          <p className="font-roboto">
            We propose the Portable Microhaplotype Object (PMO), a single,
            relational data structure using JSON as a portable file. This
            approach allows for a design which is efficient, lightweight, and
            flexible, organizing metadata together with genetic data.
          </p>
        </div>
        <FullscreenImageWrapper
          unsharedClassName="mix-blend-multiply"
          quality={100}
          intrinsicHeight={2000}
          intrinsicWidth={3000}
          // enhancedView
          fullscreenClassName="min-w-[800px] max-w-7xl"
          fullscreenContainerClassName="bg-white"
          // className="mix-blend-multiply"
        >
          <Image
            src={`/assets/DataStandards/pmo_erdiagram.png`}
            height={600}
            width={1200}
            alt="PMO schema diagram"
            className="[view-transition-name:img]"
          />
        </FullscreenImageWrapper>
        <div className="mt-8">
          <p className="font-roboto">
            Find more detailed information{" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-blue-600 underline"
              href={`https://seekdeep.brown.edu/Portable_Microhaplotype_Object/format/FormatOverview.html`}
            >
              here.
            </Link>{" "}
            An example PMO can be found{" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-blue-600 underline"
              href={`https://seekdeep.brown.edu/Portable_Microhaplotype_Object/format/FormatExample.html`}
            >
              here.
            </Link>
            <p className="mt-4 font-roboto">
              Please review information{" "}
              <Link
                rel="noopener noreferrer"
                target="_blank"
                className="font-medium text-blue-600 underline"
                href={`https://docs.google.com/document/d/1EEqrFO2x8ntASAyprJVKmXcQw68qSFbOrjrBzF2ty4Y/edit?usp=sharing`}
              >
                found in this google doc
              </Link>{" "}
              together with{" "}
              <Link
                rel="noopener noreferrer"
                target="_blank"
                className="font-medium text-blue-600 underline"
                href={`https://drive.google.com/file/d/193B1BBLagay_CYhJm4Nee7Fl4T4BFdL_/view?usp=sharing`}
              >
                this schema.
              </Link>{" "}
              Feedback can either be supplied through comments on the document
              or through{" "}
              <Link
                rel="noopener noreferrer"
                target="_blank"
                className="font-medium text-blue-600 underline"
                href={`https://forms.gle/Ke2fmd7oRwixgBnw8`}
              >
                this feedback form.
              </Link>
            </p>
            <p className="mt-4 font-roboto">
              Development is in progress to build a Python package to create and
              interact with the PMO format. This can be found on{" "}
              <Link
                rel="noopener noreferrer"
                target="_blank"
                className="font-medium text-blue-600 underline"
                href={`https://github.com/PlasmoGenEpi/pmotools-python `}
              >
                Github here.
              </Link>
            </p>
          </p>
        </div>
      </div>
      <div className="mx-auto mt-16  max-w-6xl border-pge-dark-teal px-4 pb-16 text-lg md:px-8 md:text-base lg:px-16">
        <h2 className="font-poppins text-xl font-bold">
          Work on Data Analysis Standards
        </h2>
        <p className="mb-8 mt-4 font-roboto">
          To fully utilize the benefits of the proposed standardized data
          format, we also need a modular software toolkit for analyzing targeted
          sequencing data. Our proposed work includes:
          <ol className="list mt-4 flex list-disc flex-col gap-2 px-4">
            <li className="list-item">
              Landscaping existing analytical tools, assessing their
              performance, documentation, and compatibility, and highlighting
              areas for improvement or gaps that need to be filled.
            </li>
            <li className="list-item">
              Benchmarking tools in collaboration with the broader community to
              establish standardized evaluation methods.
            </li>
            <li className="list-item">
              Enhancing the reliability, speed, and documentation where needed
              for priority tools.
            </li>
            <li className="list-item">
              Developing robust end-to-end workflows that integrate tools for
              common research use cases.
            </li>
            <li>
              Hosting these modules and workflows on a scalable, interactive
              platform.
            </li>
          </ol>
        </p>

        {/* <AlternateView
          alternate={
            <div>
              <div className="fixed inset-0 z-10 grid place-items-center overflow-auto bg-black/50 px-4 backdrop-blur-sm">
                <Image
                  className="min-w-[600px] object-cover [view-transition-name:img2]"
                  height={800}
                  width={1000}
                  alt="plasmogenepi RADISH23 community photo"
                  src={`/assets/DataStandards/conference_pic.jpg`}
                ></Image>
              </div>
              <div className="my-8 h-[200px] w-fit"></div>
            </div>
          }
        >
          <div className="my-8 w-fit">
            <div>
              <Image
                className="h-[200px] object-cover [view-transition-name:img2]"
                height={300}
                width={400}
                alt="plasmogenepi RADISH23 community photo"
                src={`/assets/DataStandards/conference_pic.jpg`}
              ></Image>
            </div>
          </div>
        </AlternateView> */}

        <FullscreenImageWrapper
          intrinsicHeight={600}
          intrinsicWidth={1600}
          quality={75}
          unsharedClassName="h-[200px] md:h-[400px] my-8"
          className=""
          fullscreenClassName=" max-w-7xl my-auto min-w-[800px] max-h-[600px] lg:min-w-[1200px]"
        >
          <Image
            className="object-cover [view-transition-name:img2]"
            height={1200}
            width={1000}
            alt="plasmogenepi RADISH23 community photo"
            src={`/assets/DataStandards/conference_pic.jpg`}
          ></Image>
        </FullscreenImageWrapper>
        <p className="font-roboto">
          In December 2023, members of the PlasmoGenEpi community gathered in
          Baltimore for <span className="font-bold">RADISH23</span> (
          <span className="font-bold">R</span>eproducibility,{" "}
          <span className="font-bold">A</span>ccessibility,{" "}
          <span className="font-bold">D</span>ocumentation, and{" "}
          <span className="font-bold">I</span>nter-operability{" "}
          <span className="font-bold">S</span>tandards{" "}
          <span className="font-bold">H</span>ackathon 20
          <span className="font-bold">23</span>). The event aimed to improve the
          ease of malaria genomic analysis.
        </p>
        <p className="mt-4 font-roboto">
          Key work included:
          <ol className="list my-4 flex list-disc flex-col gap-2 px-4">
            <li className="list-item">
              <span className="font-bold">Landscaping 40 tools,</span> with
              detailed evaluation and{" "}
              <span className="font-bold">tutorials</span> for 17 priority
              tools.
            </li>
            <li className="list-item">
              Populating the PlasmoGenEpi R-universe for{" "}
              <span className="font-bold">easy installation.</span>
            </li>
            <li className="list-item">
              Launching the PGEforge website to{" "}
              <span className="font-bold">centralize resources.</span>
            </li>
            <li className="list-item">
              Uploading and documenting 4 canonical{" "}
              <span className="font-bold">datasets</span> to use as input to
              multiple tools.
            </li>
            <li className="list-item">
              Developing the PGEhammer package for{" "}
              <span className="font-bold">data wrangling</span>.
            </li>
            <li>
              <span className="font-bold">
                Strengthening 7 existing packages;
              </span>{" "}
              MIPanalyzer, PlasmoSim, Pixelate, IsoRelate, hmmIBD,
              FreqEstimationModel, RAMBLER (now GLAM).
            </li>
            <li>
              Establishing suggested{" "}
              <span className="font-bold">software standards</span> and
              measurable criteria for tool benchmarking.
            </li>
            <li>
              Drafting major <span className="font-bold">workflows</span> and a
              draft paper.
            </li>
          </ol>
          The website, including the tutorials and information mentioned above,
          can be accessed on the{" "}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="font-medium text-blue-600 underline"
            href={`https://mrc-ide.github.io/PGEforge/`}
          >
            PGEforge website.
          </Link>
        </p>
      </div>
    </div>
  );
}
