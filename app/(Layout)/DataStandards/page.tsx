import Link from "next/link";

export default function DataStandards() {
  return (
    <div className="">
      <div className="mx-auto max-w-4xl">
        <div className="mt-6 min-h-screen border-x">
          <div className="py-8">
            <div className=" mx-auto overflow-hidden px-4">
              <h1 className="mb-8 text-center text-4xl font-bold">
                Plasmodium amplicon file format
              </h1>
              <h1 className="mb-4 text-3xl font-bold">
                Targeted Amplicon Analysis
              </h1>
              <h2 className="mb-2 text-2xl font-bold">Introduction</h2>
              <p className="mb-4">
                Amplicon can be defined as a piece of DNA/RNA that has been
                amplified. When referring to amplicon data though we are
                referring to targeted amplicon data which is when a specific
                target of interest has been amplified by a set of primers and
                sequenced from a set of samples.
              </p>
              <h2 className="mb-2 text-2xl font-bold">Goals</h2>
              <p className="mb-4">
                Targeted amplicon sequencing has been data analysis technique
                that has been well established and made most popular by
                microbiome analysis where a piece of 16S rRNA is amplified to
                help classify a microbiome mixture by defining taxon data and
                abundance.
              </p>
              <p className="mb-4">
                The goal of a developing a plasmodium amplicon file format is
                easing the comparison between experimental runs within and
                across labs.
              </p>
              <h2 className="mb-2 text-2xl font-bold">Sources of data</h2>
              <p className="mb-4">
                Data can be generated by targeted amplicon sequencing
                experiments or by doing local assembly on WGS data.
              </p>
              <h1 className="mb-4 text-3xl font-bold">Goals of file format</h1>
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">
                  Help individual researchers / groups organize their data
                </li>
                <li className="mb-2">
                  Format for sharing and reporting data to aid in
                  standardization, transparency, and reproducibility
                </li>
                <li className="mb-2">
                  Align downstream analysis tools so no need to reshape data
                  differently for each application
                </li>
                <li className="mb-2">
                  Make data publicly available for analysis
                </li>
                <li className="mb-2">
                  Facilitate cross-study analysis and tools e.g.
                  &quot;next-malaria&quot;
                </li>
              </ul>
              <h2 className="mb-2 text-2xl font-bold">Standards</h2>
              <Link
                href="http://www.gensc.org/"
                className="mb-2 block w-fit text-blue-500 underline"
              >
                The Genomic Standards Consortium
              </Link>
              <blockquote className="mb-4 border-l-4 border-[#FFBCBC] pl-4 italic">
                The Genomic Standards Consortium (GSC) is an open-membership
                working body formed in September 2005. The aim of the GSC is
                making genomic data discoverable. The GSC enables genomic data
                integration, discovery and comparison through international
                community-driven standards.
              </blockquote>
              <p className="mb-4">
                They are listed under the findability, accessibility,
                interoperability, and reusability (FAIR) sharing
              </p>
              <Link
                href="https://fairsharing.org/GSC"
                className="mb-4 block w-fit text-blue-500 underline"
              >
                https://fairsharing.org/GSC
              </Link>
              <h3 className="mb-2 text-xl font-bold">MIxS</h3>
              <p className="mb-4">
                GSC have developed several standards in order to try to
                standardized the way we describe genomics/sequencing data and
                have developed what is called &quot;Minimum Information about
                any (X) Sequence&quot; (MIxS) specification
              </p>
              <Link
                href="https://github.com/GenomicsStandardsConsortium/mixs/"
                className="mb-4 block w-fit text-blue-500 underline"
              >
                https://github.com/GenomicsStandardsConsortium/mixs/
              </Link>
              <blockquote className="mb-4 border-l-4 border-[#FFBCBC] pl-4 italic">
                Without specific guidelines, most genomic, metagenomic and
                marker gene sequences in databases are sparsely annotated with
                the information required to guide data integration, comparative
                studies and knowledge generation. Even with complex keyword
                searches, it is currently impossible to reliably retrieve
                sequences that have originated from certain environments or
                particular locations on Earth—for example, all sequences from
                ‘soil’ or ‘freshwater lakes’ in a certain region of the world.
                Because public databases of the International Nucleotide
                Sequence Database Collaboration (INSDC; comprising DNA Data Bank
                of Japan (DDBJ),```
              </blockquote>
              <p className="mb-4">
                The Genomic Standards Consortium (GSC) is an open-membership
                working body formed in September 2005. The aim of the GSC is
                making genomic data discoverable. The GSC enables genomic data
                integration, discovery and comparison through international
                community-driven standards.
              </p>
              <p className="mb-4">
                They are listed under the findability, accessibility,
                interoperability, and reusability (FAIR) sharing
              </p>
              <a
                href="https://fairsharing.org/GSC"
                className="mb-4 block w-fit text-blue-500 underline"
              >
                https://fairsharing.org/GSC
              </a>
              <h3 className="mb-2 text-xl font-bold">MIxS</h3>
              <p className="mb-4">
                GSC have developed several standards in order to try to
                standardized the way we describe genomics/sequencing data and
                have developed what is called &quot;Minimum Information about
                any (X) Sequence&quot; (MIxS) specification
              </p>
              <a
                href="https://github.com/GenomicsStandardsConsortium/mixs/"
                className="mb-4 block w-fit text-blue-500 underline"
              >
                https://github.com/GenomicsStandardsConsortium/mixs/
              </a>
              <blockquote className="mb-4 border-l-4 border-[#FFBCBC] pl-4 italic">
                Without specific guidelines, most genomic, metagenomic and
                marker gene sequences in databases are sparsely annotated with
                the information required to guide data integration, comparative
                studies and knowledge generation. Even with complex keyword
                searches, it is currently impossible to reliably retrieve
                sequences that have originated from certain environments or
                particular locations on Earth—for example, all sequences from
                ‘soil’ or ‘freshwater lakes’ in a certain region of the world.
                Because public databases of the International Nucleotide
                Sequence Database Collaboration (INSDC; comprising DNA Data Bank
                of Japan (DDBJ), the European Nucleotide Archive (EBI-ENA) and
                GenBank depend on author-submitted information to enrich the
                value of sequence data sets, we argue that the only way to
                change the current practice is to establish a standard of
                reporting that requires contextual data to be deposited at the
                time of sequence submission. The adoption of such a standard
                would elevate the quality, accessibility and utility of
                information that can be collected from INSDC or any other data
                repository.
              </blockquote>
              <h3 className="mb-2 text-xl font-bold">Microbial specific</h3>
              <p className="mb-4">
                Microbiome world has long had to deal with targeted amplicon
                analysis primarily on 16s RNA sub-unit and more recently on
              </p>
              <Link
                href="https://pubmlst.org/multilocus-sequence-typing"
                className="mb-4 block w-fit text-blue-500 underline"
              >
                Multilocus sequence typing (MLST)
              </Link>
              <h4 className="mb-2 text-lg font-bold">
                ESS-DIVE amplicon file formating
              </h4>
              <p className="mb-4">
                As such they have already developed some standards on creating a
                generalized targeted amplicon file, standards set by
                Environmental System Science Data Infrastructure for a Virtual
                Ecosystem (ESS-DIVE),
              </p>
              <Link
                href="https://github.com/ess-dive-community"
                className="mb-4 block w-fit text-blue-500 underline"
              >
                https://github.com/ess-dive-community
              </Link>
              <Link
                href="https://ess-dive.lbl.gov/"
                className="mb-4 block w-fit text-blue-500 underline"
              >
                https://ess-dive.lbl.gov/
              </Link>
              <p className="mb-4">
                Their standards try to follow closely with Minimum Information
                about any Sequence (
                <Link
                  href="https://www.gensc.org/pages/standards-intro.html"
                  className="w-fit overflow-ellipsis text-blue-500 underline"
                >
                  MIxS
                </Link>
                ) standards
              </p>
              <h4 className="mb-2 text-lg font-bold">
                biom amplicon file formatting
              </h4>
              <p className="mb-4">
                Other considerations are also the{" "}
                <Link
                  href="http://biom-format.org/index.html"
                  className="w-fit overflow-ellipsis text-blue-500 underline"
                >
                  biom format
                </Link>{" "}
                which is written in{" "}
                <Link
                  href="https://www.hdfgroup.org/"
                  className="w-fit overflow-ellipsis text-blue-500 underline"
                >
                  HDF5
                </Link>{" "}
                to help handle storing data in binary format, this is used by{" "}
                <Link
                  href="https://qiime2.org/"
                  className="w-fit overflow-ellipsis text-blue-500 underline"
                >
                  QIME
                </Link>{" "}
                along with several other common bacterial genomics tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
