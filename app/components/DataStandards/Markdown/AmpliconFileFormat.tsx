export default function AmpliconFileFormat() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-8 text-center text-4xl font-bold">
        New proposed PlasmoGenEpi targeted amplicon results datafields
      </h1>
      <p className="mb-4">
        Creating fields with efforts to be consistent with{" "}
        <a
          href="https://genomicsstandardsconsortium.github.io/mixs/"
          className="text-blue-500 underline"
        >
          MIxS standards
        </a>
      </p>
      <p className="mb-4">
        Important aspects to keep in mind is to create an efficient low weight
        and the minimum amount of information about a run without losing any
        important data. We can build tools around this table to generate certain
        fields that are important but not necessary. Also since we are proposing
        to keep this data in a singular file in{" "}
        <a
          href="https://en.wikipedia.org/wiki/JSON"
          className="text-blue-500 underline"
        >
          JSON format
        </a>{" "}
        we are not limited to keeping data in a tabular format for organization,
        output generated from this file can certainly be a table but we
        don&apos;t have to store things as a table, e.g. certain fields might be
        a single ID while other fields might be vectors/lists of data.
        What&apos;s most important is that we agree on what fields are important
        and what they should store (and what values should be allowable or
        formatting, e.g. double/floats vs strings vs characters vs POSIX date vs
        URL etc)
      </p>
      <p className="mb-4">
        Consider adapting{" "}
        <a href="https://linkml.io/linkml/" className="text-blue-500 underline">
          LinkML
        </a>{" "}
        to generate scheme and/or{" "}
        <a href="https://json-schema.org/" className="text-blue-500 underline">
          JSON Schema
        </a>
      </p>
      <p className="mb-4">
        Other notable users of LinkML/MIxS{" "}
        <a
          href="https://github.com/microbiomedata/nmdc-schema"
          className="text-blue-500 underline"
        >
          National Microbiome Data Collaborative Schema
        </a>
      </p>
      <h2 className="mb-2 text-2xl font-bold">SpecimenInfo</h2>
      <a
        href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/SpecimenInfo/"
        className="mb-4 block text-blue-500 underline"
      >
        https://plasmogenepi.github.io/plasmo-tar-amp-schema/SpecimenInfo/
      </a>
      <ul className="mb-4 list-disc pl-5">
        <li className="mb-2">sample_name</li>
        <li className="mb-2">samp_taxon_id</li>
        <li className="mb-2">host_taxon_id</li>
        <li className="mb-2">
          alternate_identifiers
          <ul className="mb-4 list-disc pl-5">
            <li className="mb-2">a list of additional identifiers</li>
          </ul>
        </li>
        <li className="mb-2">parasite_density</li>
        <li className="mb-2">
          collection_date
          <ul className="mb-4 list-disc pl-5">
            <li className="mb-2">
              format YYYY-MM-DD, e.g. January 6th 2018 would be 2018-01-06
            </li>
          </ul>
        </li>
        <li className="mb-2">lat_lon</li>
        <li className="mb-2">collector</li>
        <li className="mb-2">samp_store_loc</li>
        <li className="mb-2">samp_collect_device</li>
        <li className="mb-2">project_name</li>
        <li className="mb-2">accession</li>
        <li className="mb-2">sample_comments</li>
      </ul>
      <h2 className="mb-2 text-2xl font-bold">SequencingInfo</h2>
      <a
        href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/SequencingInfo/"
        className="mb-4 block text-blue-500 underline"
      >
        https://plasmogenepi.github.io/plasmo-tar-amp-schema/SequencingInfo/
      </a>
      <ul className="mb-4 list-disc pl-5">
        <li className="mb-2">seq_instrument</li>
        <li className="mb-2">seq_date</li>
        <li className="mb-2">nucl_acid_ext</li>
        <li className="mb-2">nucl_acid_amp</li>
        <li className="mb-2">nucl_acid_date</li>
        <li className="mb-2">pcr_cond</li>
        <li className="mb-2">lib_screen</li>
        <li className="mb-2">lib_prep_date</li>
        <li className="mb-2">lib_prep_method</li>
        <li className="mb-2">lib_prep_person</li>
        <li className="mb-2">lib_screen_person</li>
        <li className="mb-2">seq_person</li>
        <li className="mb-2">lib_kit</li>
        <li className="mb-2">seq_center</li>
      </ul>
      <h2 className="mb-2 text-2xl font-bold">TarAmpBioinformaticsInfo</h2>
      <a
        href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/TarAmpBioinformaticsInfo/"
        className="mb-4 block text-blue-500 underline"
      >
        https://plasmogenepi.github.io/plasmo-tar-amp-schema/TarAmpBioinformaticsInfo/
      </a>
      <ul className="mb-4 list-disc pl-5">
        <li className="mb-2">
          method
          <ul className="mb-4 list-disc pl-5">
            <li className="mb-2">program e.g. dada2, SeekDeep qluster</li>
            <li className="mb-2">
              additional commands
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">commands that aren&apos;t the default</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mb-2">demultiplexing_method</li>
        <li className="mb-2">denoising_method</li>
        <li className="mb-2">population_clustering_method</li>
        <li className="mb-2">additional_methods</li>
      </ul>
      <h2 className="mb-2 text-2xl font-bold">PanelInfo:</h2>
      <a
        href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/PanelInfo/"
        className="mb-4 block text-blue-500 underline"
      >
        https://plasmogenepi.github.io/plasmo-tar-amp-schema/PanelInfo/
      </a>
      <p className="mb-4">
        Description of a targeted amplicon panel, consists of a panel id and a
        list of target_ids
      </p>
      <ul className="mb-4 list-disc pl-5">
        <li className="mb-2">panel_id</li>
        <li className="mb-2">target_ids</li>
      </ul>
      <h2 className="mb-2 text-2xl font-bold">TargetInfo</h2>
      <a
        href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/TargetInfo/"
        className="mb-4 block text-blue-500 underline"
      >
        https://plasmogenepi.github.io/plasmo-tar-amp-schema/TargetInfo/
      </a>
      <p className="mb-4">Information on a target</p>
      <ul className="mb-4 list-disc pl-5">
        <li className="mb-2">target_id</li>
        <li className="mb-2">gene_id</li>
        <li className="mb-2">
          target_genome
          <ul className="mb-4 list-disc pl-5">
            <li className="mb-2">
              name GENOME:SEQ:VER: genome/version for start/end positions
            </li>
            <li className="mb-2">taxon_id</li>
            <li className="mb-2">url</li>
          </ul>
        </li>
        <li className="mb-2">taxon_id</li>
        <li className="mb-2">
          insert_chrom
          <ul className="mb-4 list-disc pl-5">
            <li className="mb-2">intended chromosome</li>
          </ul>
        </li>
        <li className="mb-2">
          insert_start
          <ul className="mb-4 list-disc pl-5">
            <li className="mb-2">intended chromosome, base position</li>
          </ul>
        </li>
        <li className="mb-2">
          insert_end
          <ul className="mb-4 list-disc pl-5">
            <li className="mb-2">intended chromosome, base position</li>
          </ul>
        </li>
        <li className="mb-2">
          forward_primers:
          <ul className="mb-4 list-disc pl-5">
            <li className="mb-2">
              A list of primers that include the primer sequence, the start and
              end positions of the primer
            </li>
            {/* <li className="mb-``` */}
            <li className="mb-2">
              seq
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">
                  primer seq (including any degeneracy), 5`-3` direction
                </li>
              </ul>
            </li>
            <li className="mb-2">
              chrom
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">intended chromosome</li>
              </ul>
            </li>
            <li className="mb-2">
              start
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">
                  Primer start position (intended) (chromosome, base position,
                  0-based)
                </li>
              </ul>
            </li>
            <li className="mb-2">
              end
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">
                  Primer end position (intended) (chromosome, base position,
                  0-based)
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mb-2">
          reverse_primer:
          <ul className="mb-4 list-disc pl-5">
            <li className="mb-2">
              A list of primers that include the primer sequence, the start and
              end positions of the primer
            </li>
            <li className="mb-2">
              seq
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">
                  primer seq (including any degeneracy), 5`-3` direction
                </li>
              </ul>
            </li>
            <li className="mb-2">
              chrom
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">intended chromosome</li>
              </ul>
            </li>
            <li className="mb-2">
              start
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">
                  Primer start position (intended) (chromosome, base position,
                  0-based)
                </li>
              </ul>
            </li>
            <li className="mb-2">
              end
              <ul className="mb-4 list-disc pl-5">
                <li className="mb-2">
                  Primer end position (intended) (chromosome, base position,
                  0-based)
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <h2 className="mb-2 text-2xl font-bold">
        RepresentativeHaplotypeSequence
      </h2>
      <a
        href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/RepresentativeHaplotypeSequence/"
        className="mb-4 block text-blue-500 underline"
      >
        https://plasmogenepi.github.io/plasmo-tar-amp-schema/RepresentativeHaplotypeSequence/
      </a>
      <ul className="mb-4 list-disc pl-5">
        <li className="mb-2">haplotype_id</li>
        <li className="mb-2">seq</li>
        <li className="mb-2">quality</li>
        <li className="mb-2">
          annotations
          <ul className="mb-4 list-disc pl-5">
            <li className="mb-2">
              list of additional info on haplotype like specific amino changes
              C580Y or &quot;wildtype&quot; C580
            </li>
          </ul>
        </li>
      </ul>
      <h2 className="mb-2 text-2xl font-bold">
        RepresentativeHaplotypeSequences
      </h2>
      <a
        href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/RepresentativeHaplotypeSequences/"
        className="mb-4 block text-blue-500 underline"
      >
        https://plasmogenepi.github.io/plasmo-tar-amp-schema/RepresentativeHaplotypeSequences/
      </a>
      <ul className="mb-4 list-disc pl-5">
        <li className="mb-2">target_id</li>
        <li className="mb-2">
          seqs
          <ul className="mb-4 list-disc pl-5">
            <li className="mb-2">
              a vector of RepresentativeHaplotypeSequence
            </li>
          </ul>
        </li>
      </ul>
      <h2 className="mb-2 text-2xl font-bold">HaplotypesDetected</h2>
      <a
        href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/HaplotypesDetected/"
        className="mb-4 text-blue-500 underline"
      ></a>
      <a
        href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/HaplotypesDetected/"
        className="mb-4 block text-blue-500 underline"
      >
        https://plasmogenepi.github.io/plasmo-tar-amp-schema/HaplotypesDetected/
      </a>
      <p className="mb-4">The final results file of a sequencing run</p>
      <ul className="mb-4 list-disc pl-5">
        <li className="mb-2">
          sequencing_id
          <ul className="mb-4 list-disc pl-5">
            <li className="mb-2">
              the id to the wetlab workflow info used to process this sample
            </li>
          </ul>
        </li>
        <li className="mb-2">
          bioinformatics_id
          <ul className="mb-4 list-disc pl-5">
            <li className="mb-2">
              the id to the bioinformatics workflow info used to process this
              sample
            </li>
          </ul>
        </li>
        <li className="mb-2">
          info
          <ul className="mb-4 list-disc pl-5">
            <li className="mb-2">
              a vector of RepresentativeHaplotypeSequences
            </li>
          </ul>
        </li>
      </ul>
      <h2 className="mb-2 text-2xl font-bold">HaplotypesDetectedSummary</h2>
      <a
        href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/HaplotypesDetectedSummary/"
        className="mb-4 block text-blue-500 underline"
      >
        https://plasmogenepi.github.io/plasmo-tar-amp-schema/HaplotypesDetectedSummary/
      </a>
      <p className="mb-4">A summary file of the results of a sequencing run</p>
      <ul className="mb-4 list-disc pl-5">
        <li className="mb-2">
          sequencing_id
          <ul className="mb-4 list-disc pl-5">
            <li className="mb-2">
              the id to the wetlab workflow info used to process this sample
            </li>
          </ul>
        </li>
        <li className="mb-2">
          bioinformatics_id
          <ul className="mb-4 list-disc pl-5">
            <li className="mb-2">
              the id to the bioinformatics workflow info used to process this
              sample
            </li>
          </ul>
        </li>
        <li className="mb-2">
          info
          <ul className="mb-4 list-disc pl-5">
            <li className="mb-2">a vector of target_id and haplotype_id</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
