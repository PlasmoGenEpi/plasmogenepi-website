import Image from "next/image";
import Link from "next/link";

export default function DataStandards() {
  return (
    <div className="pt-12">
      <div className="mx-4 flex max-w-full justify-center overflow-hidden mix-blend-multiply">
        <Image
          unoptimized
          alt=""
          src={"/assets/graph.png"}
          className="h-[200px] w-[1000px] object-cover"
          width={600}
          height={300}
          // fill
        />
      </div>{" "}
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 pt-8 text-lg md:px-8 md:text-base md:[grid-template-columns:1fr_auto] lg:px-16">
        {" "}
        <div className="text-pretty px-2 pb-40">
          <h2 className="mb-8 font-poppins text-2xl font-bold">
            Proposed standards for targeted amplicon data and metadata
          </h2>
          <p className="mb-2">
            With generation of amplicon sequencing data for Plasmodium
            accelerating, there is a timely opportunity to create shared
            resources to disseminate, reuse, and analyze these data. However,
            there is currently no standard for lossless representation
            microhaplotypes derived from these approaches nor for associated
            laboratory, bioinformatic, and clinical metadata.
          </p>
          <p className="mb-4">
            A standardized format for microhaplotype data would facilitate data
            sharing, including development of appropriate repositories, along
            with transparency and reproducibility of analysis. Standardization
            at this central step in analysis would also allow for alignment of
            downstream tools, increasing incentives to develop robust, reusable
            software and allow cross-study analyses.
          </p>
          <p className="mb-6">
            We propose a single, relational data structure using JSON as a
            portable file. This approach allows for design which is efficient,
            lightweight, and flexible, organizing metadata together with genetic
            data.
          </p>
          <div className="mb-8 text-center font-medium">
            <Link
              className="mx-auto w-fit text-lg font-bold text-pge-dark-teal"
              rel="noopener noreferrer"
              target="_blank"
              href="https://seekdeep.brown.edu/Portable_Microhaplotype_Object/format/FormatOverview.html"
            >
              Draft Schema
            </Link>
          </div>
          <span>Please review and give us feedback at </span>{" "}
          <a
            href="mailto:info@plasmogenepi.org"
            className="font-bold text-[#F3B941]"
          >
            info@plasmogenepi.org
          </a>{" "}
          or{" "}
          <Link href="/SignUp" className="font-medium text-pge-dark-teal">
            using our feedback form here!
          </Link>
        </div>
      </div>
    </div>
  );
}
