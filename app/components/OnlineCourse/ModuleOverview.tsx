import Accordion from "../Accordion/Accordion";
import { orderedModules } from "./modules";

export default function ModuleOverview() {
  return (
    <div className="mt-16">
      <div className="mx-auto max-w-6xl px-2 md:px-8 lg:px-16">
        <h2 className="mb-8 font-poppins text-2xl font-bold">
          Module Overview
        </h2>
        <div className="">
          <Accordion elements={orderedModules} />
        </div>
      </div>
    </div>
  );
}
