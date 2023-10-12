export default function AmpliconFileFormat() {
  return <div className=" mx-auto px-4">
  <p className="mb-4">Creating fields with efforts to be consistent with <a href="https://genomicsstandardsconsortium.github.io/mixs/" className="text-blue-500 underline">MIxS standards</a></p>
  <p className="mb-4">Important aspects to keep in mind is to create an efficient low weight and the minimum amount of information about a run without losing any important data. We can build tools around this table to generate certain fields that are important but not necessary. Also since we are proposing to keep this data in a singular file in <a href="https://en.wikipedia.org/wiki/JSON" className="text-blue-500 underline">JSON format</a> we are not limited to keeping data in a tabular format for organization, output generated from this file can certainly be a table but we don't have to store things as a table, e.g. certain fields might be a single ID while other fields might be vectors/lists of data. What's most important is that we agree on what fields are important and what they should store (and what values should be allowable or formatting, e.g. double/floats vs strings vs characters vs POSIX date vs URL etc)</p>
  <p className="mb-4">Consider adapting <a href="https://linkml.io/linkml/" className="text-blue-500 underline">LinkML</a> to generate scheme and/or <a href="https://json-schema.org/" className="text-blue-500 underline">JSON Schema</a></p>
  <p className="mb-4">Other notable users of LinkML/MIxS <a href="https://github.com/microbiomedata/nmdc-schema" className="text-blue-500 underline">National Microbiome Data Collaborative Schema</a></p>
  <h2 className="text-2xl font-bold mb-2">SpecimenInfo</h2>
  <a href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/SpecimenInfo/" className="text-blue-500 underline mb-4 block">https://plasmogenepi.github.io/plasmo-tar-amp-schema/SpecimenInfo/</a>
  <ul className="list-disc pl-5 mb-4">
      <li className="mb-2">sample_name</li>
      <li className="mb-2">samp_taxon_id</li>
      <li className="mb-2">host_taxon_id</li>
      <li className="mb-2">alternate_identifiers
          <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">a list of additional identifiers</li>
          </ul>
      </li>
      <li className="mb-2">parasite_density</li>
      <li className="mb-2">collection_date
          <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">format YYYY-MM-DD, e.g. January 6th 2018 would be 2018-01-06</li>
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
  <h2 className="text-2xl font-bold mb-2">SequencingInfo</h2>
  <a href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/SequencingInfo/" className="text-blue-500 underline mb-4 block">https://plasmogenepi.github.io/plasmo-tar-amp-schema/SequencingInfo/</a>
  <ul className="list-disc pl-5 mb-4">
      <li className="mb-2">seq_instrument</li>
      <li className="mb-2">seq_date</li>
      <li className="mb-2">nucl_acid_ext</li>
      <li className="mb-2">nucl_acid_amp</li>
      <li className="mb-2">nucl_acid_date</li>
      <li className="mb-2">pcr_cond</li>
      <li className="mb-2">lib_screen</li>
      <li className="mb-2">lib_layout</li>
      <h2 class="text-2xl font-bold mb-2">TarAmpBioinformaticsInfo</h2>
    <a href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/TarAmpBioinformaticsInfo/" class="text-blue-500 underline mb-4 block">https://plasmogenepi.github.io/plasmo-tar-amp-schema/TarAmpBioinformaticsInfo/</a>
    <ul className="list-disc pl-5 mb-4">
        <li className="mb-2">method
            <ul className="list-disc pl-5 mb-4">
                <li className="mb-2">program e.g. dada2, SeekDeep qluster</li>
                <li className="mb-2">additional commands
                    <ul className="list-disc pl-5 mb-4">
                        <li className="mb-2">commands that aren't the default</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li className="mb-2">demultiplexing_method</li>
        <li className="mb-2">denoising_method</li>
        <li className="mb-2">population_clustering_method</li>
        <li className="mb-2">additional_methods</li>
    </ul>
    <h2 className="text-2xl font-bold mb-2">PanelInfo:</h2>
    <a href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/PanelInfo/" className="text-blue-500 underline mb-4 block">https://plasmogenepi.github.io/plasmo-tar-amp-schema/PanelInfo/</a>
    <p className="mb-4">Description of a targeted amplicon panel, consists of a panel id and a list of target_ids</p>
    <ul className="list-disc pl-5 mb-4">
        <li className="mb-2">panel_id</li>
        <li className="mb-2">target_ids</li>
    </ul>
    <h2 className="text-2xl font-bold mb-2">TargetInfo</h2>
    <a href="https://plasmogenepi.github.io/plasmo-tar-amp-schema/TargetInfo/" className="text-blue-500 underline mb-4 block">https://plasmogenepi.github.io/plasmo-tar-amp-schema/TargetInfo/</a>
    <p className="mb-4">Information on a target</p>
    <ul className="list-disc pl-5 mb-4">
        <li className="mb-2">target_id</li>
        <li className="mb-2">gene_id</li>
        <li className="mb-2">target_genome
            <ul className="list-disc pl-5 mb-4">
                <li className="mb-2">name GENOME:SEQ:VER:  genome/version for start/end positions</li>
                <li className="mb-2">taxon_id</li>
                <li className="mb-2">url</li>
            </ul>
        </li>
        <li className="mb-2">taxon_id</li>
        <li className="mb-2">insert_chrom
            <ul className="list-disc pl-5 mb-4">
                <li className="mb-2">intended chromosome</li>
            </ul>
        </li>
        <li className="mb-2">insert_start
            <ul className="list-disc pl-5 mb-4">
                <li className="mb-2">intended chromosome, base position</li>
            </ul>
        </li>
        <li className="mb-2">insert_end
            <ul className="list-disc pl-5 mb-4">
                <li className="mb-2">intended chromosome, base position</li>
            </ul>
        </li>
        <li className="mb-2">forward_primers:
            <ul className="list-disc pl-5 mb-4">
                <li className="mb-2">A list of primers that include the primer sequence, the start and end positions of the primer</li>
                <li className="mb-2">seq
                    <ul className="list-disc pl-5 mb-4">
                        <li className="mb-2">primer seq (including any degeneracy), 5`-3` direction</li>
                    </ul>
                </li>
                <li className="mb-2">chrom
                    <ul className="list-disc pl-5 mb-4">
                        <li className="mb-2">intended chromosome```</li>
                        <li className="mb-2">lib_kit</li>
        <li className="mb-2">seq_center</li>
    </ul>
    <!-- Continue with the rest of the sections in a similar manner -->
</div>

}