import Accordion from "@/app/components/Accordion";
import Logo from "@/app/components/Logo";
import Opening from "@/app/components/OnlineCourse/Opening";
// &ndash;
const pages: { id: number; content: string[]; title: string }[] = [
  {
    id: 0,
    content: [],
    title: "M0 - Malaria 101 - A prelude to Genetic Surveillance",
  },
  {
    id: 0,
    content: [],
    title: "M1 - Malaria Epidemiology and Surveillance",
  },
  {
    id: 0,
    content: [],
    title: "M2 - Basics of Malaria Genetic Surveillance",
  },
  {
    id: 0,
    content: [],
    title: "M3 - Drug and Diagnostic Resistance",
  },
  {
    id: 0,
    content: [],
    title: "M4 - Genetic Data Generation, Interpretation, and Applications",
  },
  {
    id: 0,
    content: [],
    title:
      "M5 - Using Genetic Diversity and Relatedness to Evaluate Transmission",
  },
  {
    id: 0,
    content: [],
    title: "M6 - Study Design for Malaria Genetic Surveillance, Part 1 - Study",
  },
  {
    id: 0,
    content: [],
    title: "Design and Sampling",
  },
  {
    id: 0,
    content: [],
    title:
      "M4.2 - Study Design for Malaria Genetic Surveillance, Part 2 - Power and Sample Size",
  },
  {
    id: 0,
    content: [],
    title:
      "M4.3 - Study Design for Malaria Genetic Surveillance, Part 3 - Connectivity and Importation",
  },
  {
    id: 0,
    content: [],
    title: "M7 - Interpreting Results and Making Policy Recommendations",
  },
];

export default function OnlineCourse() {
  return (
    <div className="mx-4 max-w-6xl py-12 pb-80 md:mx-auto">
      <div className="">
        <Opening />
      </div>
      <div className="mx-4 md:mx-auto">
        <h2 className="mb-2 text-2xl font-bold">Overview of Modules</h2>
        <Accordion pages={[]} />
      </div>
    </div>
  );
}
