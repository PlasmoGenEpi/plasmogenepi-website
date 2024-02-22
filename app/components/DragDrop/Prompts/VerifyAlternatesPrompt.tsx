import Prompt from "../../Shared/Prompt";

export default function VerifyAlternatesPrompt({
  complete,
}: {
  complete: boolean;
}) {
  return (
    <Prompt
      complete={false}
      noMin
      descriptions={[
        <p key={1} className="mt-2 font-bold">
          View the same reads that were matched to the reference genome in the
          last step. Click the letters in the reads where you see the mtuations,
          changing the appearance of the letters from normal to hollow text.
          When you have identified all the mutations, press Next to continue.
        </p>,
        // "Now run the simulation to generate 10 new reads. This time, some of the reads will contain mutations, false mutations, off target errors, and chimera errors.",
        // phase >= 6
        //   ? "Drag and drop the reads to the matching positions in the reference genome.  Reads that don't match the reference genome can be dropped in the trash below. Then press run again to generate 10 more reads."
        //   : "",
        // phase === 7 ? "Place the next 10 reads." : "",
      ]}
      header={"Step 3"}
    />
  );
}
