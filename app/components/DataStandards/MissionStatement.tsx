import Link from "next/link";

export default function MissionStatement() {
  return (
    <div className="mx-4 pb-40">
      <h2 className="mb-4 text-2xl font-medium">A Standard</h2>
      <p className="mb-2">
        With generation of amplicon sequencing data for Plasmodium accelerating,
        there is a timely opportunity to create shared resources to disseminate,
        reuse, and analyze these data. However, there is currently no standard
        for lossless representation microhaplotypes derived from these
        approaches nor for associated laboratory, bioinformatic, and clinical
        metadata.
      </p>
      <p className="mb-4">
        A standardized format for microhaplotype data would facilitate data
        sharing, including development of appropriate repositories, along with
        transparency and reproducibility of analysis. Standardization at this
        central step in analysis would also allow for alignment of downstream
        tools, increasing incentives to develop robust, reusable software and
        allow cross-study analyses.
      </p>
      <p className="mb-4">
        We propose a single, relational data structure using JSON as a portable
        file. This approach allows for design which is efficient, lightweight,
        and flexible, organizing metadata together with genetic data.
      </p>
      <div className="mb-8 text-center">
        <Link
          className="mx-auto w-fit text-lg text-blue-500"
          href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/PlasmoTarAmpResults"
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
      <Link href="/SignUp" className="font-medium text-blue-500">
        using our feedback form here!
      </Link>
    </div>
  );
}
