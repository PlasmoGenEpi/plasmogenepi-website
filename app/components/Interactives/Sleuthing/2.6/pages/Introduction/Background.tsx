import InteractiveStandardForm from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractiveStandardForm";

export default function Background() {
  return (
    <InteractiveStandardForm
      title={"Background"}
      instructions={
        <div className="flex flex-col gap-4">
          <p>
            Estimating the multiplicity of infection (MOI) in a set of patient
            samples can be a valuable tool for assessing the effectiveness of
            malaria control interventions, like bed-nets, indoor residual
            spraying or antimalarial treatments. A high MOI generally indicates
            a higher transmission intensity in the community because if people
            are infected more frequently there is a greater change of
            superinfection. Therefore, effective malaria control interventions
            should reduce the transmission of the parasite, leading to a
            decrease in the MOI over time.
          </p>
          <p>
            In this activity, you return to your role as the Head of
            Surveillance of the National Malaria Control Program of Kambawe.
          </p>
          <p>
            The National Malaria Control Program of Kambawe has been
            implementing an expensive new vector control intervention. Routine
            surveillance data suggest it may be working. But you are not
            convinced of the data's quality.
          </p>
          <p>
            You have dried blood spot (DBS) samples stored from a recent malaria
            indicator survey and a functioning molecular lab. You also have
            historic data showing average MOI in this high transmission area was
            2.5 before the vector controls intervention began
          </p>
        </div>
      }
    />
  );
}
