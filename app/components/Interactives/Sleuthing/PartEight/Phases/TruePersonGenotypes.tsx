import StandardLayout from "@/components/Interactives/Shared/misc/StandardLayout";
import Person from "../Person";
import GenotypeComposition from "../Genotypes/GenotypeComposition";
import { fixedData } from "@/data/Interactives/fixedData";
import FormHeader from "@/components/Interactives/Shared/misc/FormHeader";
import SquareMicrohaplotype from "@/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
import CloneRow from "@/components/Interactives/Shared/CloneRow/CloneRow";
import {
  P6CloneRowButtonColors,
  P6CloneRowColors,
} from "../../PartSix/CloneRows/P6MHPCloneRows";

const P8CloneRowColors = {
  1: "bg-microRed/50",
  2: "bg-microPurple/50",
  3: "bg-microBrown/50",
  4: "bg-microTeal/50",
  5: "bg-microOrange/50",
  6: "bg-microGrey/50",
  7: "bg-microBlue/50",
  8: "bg-microGreen/50",
};
const P8CloneRowButtonColors = {
  1: "to-microRed/50 via-microRed/50",
  2: "to-microPurple/50 via-microPurple/50",
  3: "to-microBrown/50 via-microBrown/50",
  4: "to-microTeal/50 via-microTeal/50",
  5: "to-microOrange/50 via-microOrange/50",
  6: "to-microGrey/50 via-microGrey/50",
  7: "to-microBlue/50 via-microBlue/50",
  8: "to-microGreen/50 via-microGreen/50",
};

export default function TruePersonGenotypes() {
  return (
    <StandardLayout>
      <div>
        <FormHeader text="Student Infections" />
        {/* <div className="grid gap-1 gap-x-16 gap-y-4 md:grid-cols-2">
          <FormHeader text="Student Infections" />
          <FormHeader text="Infection Genotypes" />
        </div> */}
        <div className="grid gap-4 gap-y-8">
          <div className="grid gap-1 gap-x-16 gap-y-4">
            <div className="flex">
              <div className="my-auto w-20">
                <Person id="A" circles={["#AA6012", "#E61048"]} />
              </div>
              <div className="my-auto flex max-w-[500px] grow origin-top scale-90 flex-col gap-2">
                <CloneRow
                  label={1}
                  classNames={{
                    button: P8CloneRowButtonColors[1] + " text-sm md:text-base",
                    row: P8CloneRowColors[1],
                  }}
                >
                  {fixedData[8].persons.A.cases.map((el, idx) => {
                    return <SquareMicrohaplotype id={el[0] - 1} key={idx} />;
                  })}
                </CloneRow>
                <CloneRow
                  label={2}
                  classNames={{
                    button: P8CloneRowButtonColors[2] + " text-sm md:text-base",
                    row: P8CloneRowColors[2],
                  }}
                >
                  {fixedData[8].persons.A.cases.map((el, idx) => {
                    return <SquareMicrohaplotype id={el[1] - 1} key={idx} />;
                  })}
                </CloneRow>
              </div>
            </div>
            {/* <div className="flex">
              <div className="w-20 md:hidden"></div>
              <div className="grid grow origin-top scale-90 [grid-template-columns:8%_auto]">
                <div className="flex h-full min-h-10 w-full flex-col justify-center">
                  <div
                    className={`mr-auto aspect-square h-1/3  translate-y-0.5 rounded-full ${P8CloneRowColors[1]}`}
                  ></div>
                  <div
                    className={`ml-auto aspect-square h-1/3  -translate-y-0.5 rounded-full ${P8CloneRowColors[2]}`}
                  ></div>
                </div>
                <div className="my-auto h-fit max-w-[500px] grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["A"].cases}
                  />{" "}
                </div>
              </div>
            </div> */}
          </div>
          <div className="grid gap-1 gap-x-16 gap-y-4">
            <div>
              <div className="flex">
                <div className="my-auto w-20">
                  <Person id="B" circles={["#AA6012", "#E61048"]} />
                </div>
                <div className="my-auto flex max-w-[500px] grow origin-top scale-90 flex-col gap-2">
                  <CloneRow
                    label={3}
                    classNames={{
                      button:
                        P8CloneRowButtonColors[3] + " text-sm md:text-base",
                      row: P8CloneRowColors[3],
                    }}
                  >
                    {fixedData[8].persons.B.cases.map((el, idx) => {
                      return <SquareMicrohaplotype id={el[0] - 1} key={idx} />;
                    })}
                  </CloneRow>
                </div>
              </div>
            </div>
            {/* <div className="flex">
              <div className="w-20 md:hidden"></div>
              <div className="grid grow origin-top scale-90 [grid-template-columns:8%_auto]">
                <div className="flex h-full min-h-10 w-full flex-col justify-center">
                  <div
                    className={`mr-auto aspect-square h-1/3  translate-y-0.5 rounded-full ${P8CloneRowColors[3]}`}
                  ></div>
                </div>
                <div className="my-auto h-fit max-w-[500px] grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["B"].cases}
                  />{" "}
                </div>
              </div>
            </div> */}
          </div>
          <div className="grid gap-1 gap-x-16 gap-y-4">
            <div>
              <div className="flex">
                <div className="my-auto w-20">
                  <Person id="C" circles={["#AA6012", "#E61048"]} />
                </div>
                <div className="my-auto flex max-w-[500px] grow origin-top scale-90 flex-col gap-2">
                  <CloneRow
                    label={4}
                    classNames={{
                      button:
                        P8CloneRowButtonColors[4] + " text-sm md:text-base",
                      row: P8CloneRowColors[4],
                    }}
                  >
                    {fixedData[8].persons.C.cases.map((el, idx) => {
                      return <SquareMicrohaplotype id={el[0] - 1} key={idx} />;
                    })}
                  </CloneRow>
                  <CloneRow
                    label={5}
                    classNames={{
                      button:
                        P8CloneRowButtonColors[5] + " text-sm md:text-base",
                      row: P8CloneRowColors[5],
                    }}
                  >
                    {fixedData[8].persons.C.cases.map((el, idx) => {
                      return <SquareMicrohaplotype id={el[1] - 1} key={idx} />;
                    })}
                  </CloneRow>
                </div>
              </div>
            </div>
            {/* <div className="flex">
              <div className="w-20 md:hidden"></div>
              <div className="grid grow origin-top scale-90 [grid-template-columns:8%_auto]">
                <div className="flex h-full min-h-10 w-full flex-col justify-center">
                  <div
                    className={`mr-auto aspect-square h-1/3  translate-y-0.5 rounded-full ${P8CloneRowColors[4]}`}
                  ></div>
                  <div
                    className={`ml-auto aspect-square h-1/3  -translate-y-0.5 rounded-full ${P8CloneRowColors[5]}`}
                  ></div>
                </div>
                <div className="my-auto h-fit max-w-[500px] grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["C"].cases}
                  />{" "}
                </div>
              </div>
            </div> */}
          </div>
          <div className="grid gap-1 gap-x-16 gap-y-4">
            <div>
              <div className="flex">
                <div className="my-auto w-20">
                  <Person id="D" circles={["#AA6012", "#E61048"]} />
                </div>
                <div className="my-auto flex max-w-[500px] grow origin-top scale-90 flex-col gap-2">
                  <CloneRow
                    label={6}
                    classNames={{
                      button:
                        P8CloneRowButtonColors[6] + " text-sm md:text-base",
                      row: P8CloneRowColors[6],
                    }}
                  >
                    {fixedData[8].persons.D.cases.map((el, idx) => {
                      return <SquareMicrohaplotype id={el[0] - 1} key={idx} />;
                    })}
                  </CloneRow>
                  <CloneRow
                    label={7}
                    classNames={{
                      button:
                        P8CloneRowButtonColors[7] + " text-sm md:text-base",
                      row: P8CloneRowColors[7],
                    }}
                  >
                    {fixedData[8].persons.D.cases.map((el, idx) => {
                      return <SquareMicrohaplotype id={el[1] - 1} key={idx} />;
                    })}
                  </CloneRow>
                  <CloneRow
                    label={8}
                    classNames={{
                      button:
                        P8CloneRowButtonColors[8] + " text-sm md:text-base",
                      row: P8CloneRowColors[8],
                    }}
                  >
                    {fixedData[8].persons.D.cases.map((el, idx) => {
                      return <SquareMicrohaplotype id={el[2] - 1} key={idx} />;
                    })}
                  </CloneRow>
                </div>
              </div>
            </div>
            {/* <div className="flex">
              <div className="w-20 md:hidden"></div>
              <div className="grid grow origin-top scale-90 [grid-template-columns:8%_auto]">
                <div className="flex h-full min-h-10 w-full flex-col justify-center">
                  <div
                    className={`absolute mr-auto aspect-square h-1/3 max-h-4 -translate-y-2  rounded-full  md:max-h-5 lg:max-h-7 lg:-translate-y-4 ${P8CloneRowColors[6]}`}
                  ></div>
                  <div
                    className={`absolute ml-auto aspect-square h-1/3 max-h-4 -translate-x-2 translate-y-2 rounded-full md:max-h-5   lg:max-h-7 lg:-translate-x-4 lg:translate-y-4 ${P8CloneRowColors[7]}`}
                  ></div>
                  <div
                    className={`absolute ml-auto aspect-square h-1/3 max-h-4 translate-x-2   translate-y-2 rounded-full md:max-h-5 lg:max-h-7 lg:translate-x-4 lg:translate-y-4 ${P8CloneRowColors[8]}`}
                  ></div>
                </div>
                <div className="my-auto h-fit max-w-[500px] grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["D"].cases}
                  />{" "}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div></div>
    </StandardLayout>
  );

  return (
    <StandardLayout>
      <div className="grid gap-4">
        <div className="flex">
          <div className="my-auto w-20">
            <Person id="A" circles={["#AA6012", "#E61048"]} />
          </div>
          <GenotypeComposition
            fullComposition
            genotypeComposition={fixedData[8].persons["A"].cases}
          />
        </div>
        <div className="flex">
          <div className="my-auto w-20">
            <Person id="B" circles={["#FE8638"]} />
          </div>
          <GenotypeComposition
            fullComposition
            genotypeComposition={fixedData[8].persons["B"].cases}
          />
        </div>
        <div className="flex">
          <div className="my-auto w-20">
            <Person id="C" circles={["#6ECC50", "#16A0AC"]} />
          </div>
          <GenotypeComposition
            fullComposition
            genotypeComposition={fixedData[8].persons["C"].cases}
          />
        </div>
        <div className="flex">
          <div className="my-auto w-20">
            <Person id="D" circles={["#4896E8", "#C45ED8", "#B4B9BF"]} />
          </div>
          <GenotypeComposition
            fullComposition
            genotypeComposition={fixedData[8].persons["D"].cases}
          />
        </div>
      </div>
      {/* <Person id="B" />
      <Person id="C" />
      <Person id="D" /> */}
    </StandardLayout>
  );
}
