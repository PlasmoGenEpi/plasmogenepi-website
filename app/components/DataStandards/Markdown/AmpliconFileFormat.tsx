import Link from "next/link";

export default function AmpliconFileFormat() {
  return (
    <div className="">
      <div className="mx-auto max-w-4xl">
        <div className="mt-6 min-h-screen border-x">
          <div className="py-8">
            <div className=" mx-auto overflow-hidden px-4">
              <h1 className="mb-8 text-center text-4xl font-bold">
                New proposed PlasmoGenEpi targeted amplicon results datafields
              </h1>
              <p className="mb-4">
                Creating fields with efforts to be consistent with{" "}
                <Link
                  href="https://genomicsstandardsconsortium.github.io/mixs/"
                  className="w-fit text-blue-500 underline"
                >
                  MIxS standards
                </Link>
              </p>
              <p className="mb-4">
                Important aspects to keep in mind is to create an efficient low
                weight and the minimum amount of information about a run without
                losing any important data. We can build tools around this table
                to generate certain fields that are important but not necessary.
                Also since we are proposing to keep this data in a singular file
                in{" "}
                <Link
                  href="https://en.wikipedia.org/wiki/JSON"
                  className="w-fit text-blue-500 underline"
                >
                  JSON format
                </Link>{" "}
                we are not limited to keeping data in a tabular format for
                organization, output generated from this file can certainly be a
                table but we don&apos;t have to store things as a table, e.g.
                certain fields might be a single ID while other fields might be
                vectors/lists of data. What&apos;s most important is that we
                agree on what fields are important and what they should store
                (and what values should be allowable or formatting, e.g.
                double/floats vs strings vs characters vs POSIX date vs URL etc)
              </p>
              <p className="mb-4">
                Consider adapting{" "}
                <Link
                  href="https://linkml.io/linkml/"
                  className="w-fit text-blue-500 underline"
                >
                  LinkML
                </Link>{" "}
                to generate scheme and/or{" "}
                <Link
                  href="https://json-schema.org/"
                  className="w-fit text-blue-500 underline"
                >
                  JSON Schema
                </Link>
              </p>
              <p className="mb-4">
                Other notable users of LinkML/MIxS{" "}
                <Link
                  href="https://github.com/microbiomedata/nmdc-schema"
                  className="w-fit text-blue-500 underline"
                >
                  National Microbiome Data Collaborative Schema
                </Link>
              </p>
              <h2 className="mb-2 text-2xl font-bold">SpecimenInfo</h2>
              <Link
                href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/SpecimenInfo/"
                className="mb-4 block w-fit text-blue-500 underline"
              >
                https://plasmogenepi.github.io/plasmo-tar-amp-schema/SpecimenInfo/
              </Link>
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    sample_name
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    samp_taxon_id
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    host_taxon_id
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    alternate_identifiers
                  </code>
                  <ul className="mb-4 list-disc pl-5">
                    <li className="mb-2">a list of additional identifiers</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    parasite_density
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    collection_date
                  </code>
                  <ul className="mb-4 list-disc pl-5">
                    <li className="mb-2 text-sm font-light">
                      format YYYY-MM-DD, e.g. January 6th 2018 would be
                      2018-01-06
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    lat_lon
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    collector
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    samp_store_loc
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    samp_collect_device
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    project_name
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    accession
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    sample_comments
                  </code>
                </li>
              </ul>
              <h2 className="mb-2 text-2xl font-bold">SequencingInfo</h2>
              <Link
                href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/SequencingInfo/"
                className="mb-4 block w-fit text-blue-500 underline"
              >
                https://plasmogenepi.github.io/plasmo-tar-amp-schema/SequencingInfo/
              </Link>
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    seq_instrument
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    seq_date
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    nucl_acid_ext
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    nucl_acid_amp
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    nucl_acid_date
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    pcr_cond
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    lib_screen
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    lib_prep_date
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    lib_prep_method
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    lib_prep_person
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    lib_screen_person
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    seq_person
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    lib_kit
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    seq_center
                  </code>
                </li>
              </ul>
              <h2 className="mb-2 text-2xl font-bold">
                TarAmpBioinformaticsInfo
              </h2>
              <Link
                href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/TarAmpBioinformaticsInfo/"
                className="mb-4 block w-fit text-blue-500 underline"
              >
                https://plasmogenepi.github.io/plasmo-tar-amp-schema/TarAmpBioinformaticsInfo/
              </Link>
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    method
                  </code>
                  <ul className="mb-4 list-disc pl-5 text-sm font-light">
                    <li className="mb-2">
                      program e.g. dada2, SeekDeep qluster
                    </li>
                    <li className="mb-2">
                      additional commands
                      <ul className="mb-4 list-disc pl-5">
                        <li className="mb-2">
                          commands that aren&apos;t the default
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    demultiplexing_method
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    denoising_method
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    population_clustering_method
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    additional_methods
                  </code>
                </li>
              </ul>
              <h2 className="mb-2 text-2xl font-bold">PanelInfo:</h2>
              <Link
                href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/PanelInfo/"
                className="mb-4 block w-fit text-blue-500 underline"
              >
                https://plasmogenepi.github.io/plasmo-tar-amp-schema/PanelInfo/
              </Link>
              <p className="mb-4">
                Description of a targeted amplicon panel, consists of a panel id
                and a list of target_ids
              </p>
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    panel_id
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    target_ids
                  </code>
                </li>
              </ul>
              <h2 className="mb-2 text-2xl font-bold">TargetInfo</h2>
              <Link
                href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/TargetInfo/"
                className="mb-4 block w-fit text-blue-500 underline"
              >
                https://plasmogenepi.github.io/plasmo-tar-amp-schema/TargetInfo/
              </Link>
              <p className="mb-4">Information on a target</p>
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    target_id
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    gene_id
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    target_genome
                  </code>
                  <ul className="mb-4 list-disc pl-5">
                    <li className="mb-2 text-sm font-light">
                      name GENOME:SEQ:VER: genome/version for start/end
                      positions
                    </li>
                    <li className="mb-2">
                      <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                        taxon_id
                      </code>
                    </li>
                    <li className="mb-2">
                      <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                        url
                      </code>
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    taxon_id
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    insert_chrom
                  </code>
                  <ul className="mb-4 list-disc pl-5 text-sm font-light">
                    <li className="mb-2">intended chromosome</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    insert_start
                  </code>
                  <ul className="mb-4 list-disc pl-5 text-sm font-light">
                    <li className="mb-2">intended chromosome, base position</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    insert_end
                  </code>
                  <ul className="mb-4 list-disc pl-5 text-sm font-light">
                    <li className="mb-2">intended chromosome, base position</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    forward_primers:
                  </code>
                  <ul className="mb-4 list-disc pl-5">
                    <li className="mb-2 text-sm font-light">
                      A list of primers that include the primer sequence, the
                      start and end positions of the primer
                    </li>
                    <li className="mb-2">
                      <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                        seq
                      </code>
                      <ul className="mb-4 list-disc pl-5">
                        <li className="mb-2 text-sm font-light">
                          primer seq (including any degeneracy), 5`-3` direction
                        </li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                        chrom
                      </code>
                      <ul className="mb-4 list-disc pl-5 text-sm font-light">
                        <li className="mb-2">intended chromosome</li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                        start
                      </code>
                      <ul className="mb-4 list-disc pl-5">
                        <li className="mb-2 text-sm font-light">
                          Primer start position (intended) (chromosome, base
                          position, 0-based)
                        </li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                        end
                      </code>
                      <ul className="mb-4 list-disc pl-5 text-sm font-light">
                        <li className="mb-2">
                          Primer end position (intended) (chromosome, base
                          position, 0-based)
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    reverse_primer:
                  </code>
                  <ul className="mb-4 list-disc pl-5">
                    <li className="mb-2 text-sm font-light">
                      A list of primers that include the primer sequence, the
                      start and end positions of the primer
                    </li>
                    <li className="mb-2">
                      <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                        seq
                      </code>
                      <ul className="mb-4 list-disc pl-5 text-sm font-light">
                        <li className="mb-2">
                          primer seq (including any degeneracy), 5`-3` direction
                        </li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                        chrom
                      </code>
                      <ul className="mb-4 list-disc pl-5 text-sm font-light">
                        <li className="mb-2">intended chromosome</li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                        start
                      </code>
                      <ul className="mb-4 list-disc pl-5">
                        <li className="mb-2 text-sm font-light">
                          Primer start position (intended) (chromosome, base
                          position, 0-based)
                        </li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                        end
                      </code>
                      <ul className="mb-4 list-disc pl-5 text-sm font-light">
                        <li className="mb-2">
                          Primer end position (intended) (chromosome, base
                          position, 0-based)
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <h2 className="mb-2 text-2xl font-bold">
                RepresentativeHaplotypeSequence
              </h2>
              <Link
                href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/RepresentativeHaplotypeSequence/"
                className="mb-4 block w-fit text-blue-500 underline"
              >
                https://plasmogenepi.github.io/plasmo-tar-amp-schema/RepresentativeHaplotypeSequence/
              </Link>
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    haplotype_id
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    seq
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    quality
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    annotations
                  </code>
                  <ul className="mb-4 list-disc pl-5">
                    <li className="mb-2 text-sm font-light">
                      list of additional info on haplotype like specific amino
                      changes C580Y or &quot;wildtype&quot; C580
                    </li>
                  </ul>
                </li>
              </ul>
              <h2 className="mb-2 text-2xl font-bold">
                RepresentativeHaplotypeSequences
              </h2>
              <Link
                href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/RepresentativeHaplotypeSequences/"
                className="mb-4 block w-fit text-blue-500 underline"
              >
                https://plasmogenepi.github.io/plasmo-tar-amp-schema/RepresentativeHaplotypeSequences/
              </Link>
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    target_id
                  </code>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    seqs
                  </code>
                  <ul className="mb-4 list-disc pl-5">
                    <li className="mb-2 text-sm font-light">
                      a vector of RepresentativeHaplotypeSequence
                    </li>
                  </ul>
                </li>
              </ul>
              <h2 className="mb-2 text-2xl font-bold">HaplotypesDetected</h2>
              <Link
                href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/HaplotypesDetected/"
                className="mb-4 w-fit text-blue-500 underline"
              ></Link>
              <Link
                href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/HaplotypesDetected/"
                className="mb-4 block w-fit text-blue-500 underline"
              >
                https://plasmogenepi.github.io/plasmo-tar-amp-schema/HaplotypesDetected/
              </Link>
              <p className="mb-4">The final results file of a sequencing run</p>
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    sequencing_id
                  </code>
                  <ul className="mb-4 list-disc pl-5">
                    <li className="mb-2 text-sm font-light">
                      the id to the wetlab workflow info used to process this
                      sample
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    bioinformatics_id
                  </code>
                  <ul className="mb-4 list-disc pl-5">
                    <li className="mb-2 text-sm font-light">
                      the id to the bioinformatics workflow info used to process
                      this sample
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    info
                  </code>
                  <ul className="mb-4 list-disc pl-5">
                    <li className="mb-2 text-sm font-light">
                      a vector of RepresentativeHaplotypeSequences
                    </li>
                  </ul>
                </li>
              </ul>
              <h2 className="mb-2 text-2xl font-bold">
                HaplotypesDetectedSummary
              </h2>
              <Link
                href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/HaplotypesDetectedSummary/"
                className="mb-4 block w-fit text-blue-500 underline"
              >
                https://plasmogenepi.github.io/plasmo-tar-amp-schema/HaplotypesDetectedSummary/
              </Link>
              <p className="mb-4">
                A summary file of the results of a sequencing run
              </p>
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    sequencing_id
                  </code>
                  <ul className="mb-4 list-disc pl-5">
                    <li className="mb-2 text-sm font-light">
                      the id to the wetlab workflow info used to process this
                      sample
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    bioinformatics_id
                  </code>
                  <ul className="mb-4 list-disc pl-5">
                    <li className="mb-2 text-sm font-light">
                      the id to the bioinformatics workflow info used to process
                      this sample
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  <code className="rounded bg-zinc-100 px-1 pb-[2px] pt-1">
                    info
                  </code>
                  <ul className="mb-4 list-disc pl-5">
                    <li className="mb-2 text-sm font-light">
                      a vector of target_id and haplotype_id
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
