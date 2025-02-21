import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import Pentagon, { defaultPentagonComponents, Edge } from "../Pentagon";
import {
  partEightCompletionAtom,
  partEightPentagonPairViewedAtom,
  partEightPentagonPersonPairAtom,
  partEightPentagonSelectedEdgesAtom,
  phase2Atom,
} from "@/data/Interactives/interactiveStore";
import { atom, useAtom, useAtomValue } from "jotai";
import GenotypeComposition from "../Genotypes/GenotypeComposition";
import CompareGenotypes from "../Genotypes/CompareGenotypes";
import Pentagon2 from "../Pentagon2";
import { useEffect, useMemo, useState } from "react";
import PentagonQuestions from "../PentagonQuestions";

export const queuedChangeAtom = atom<null | {
  [key: string]: {
    selected: boolean;
    direction: "forwards" | "backwards";
  };
}>(null);

export const successQueueAtom = atom<null | boolean>(null);

export function checkEdges(selectedEdges) {
  let wrongEdges = [];
  for (let k in selectedEdges) {
    if (selectedEdges[k as Edge].direction === "backwards") {
      wrongEdges.push(k);
    } else if (
      (["EI", "EG", "FH"].includes(k) &&
        selectedEdges[k as Edge].selected === false) ||
      (!["EI", "EG", "FH"].includes(k) &&
        selectedEdges[k as Edge].selected === true)
    ) {
      wrongEdges.push(k);
    }
  }
  return wrongEdges;
}

export default function PentagonComparisons() {
  const phase = useAtomValue(phase2Atom);
  const [activePair, setActivePair] = useAtom(partEightPentagonPersonPairAtom);
  const [viewed, setViewed] = useAtom(partEightPentagonPairViewedAtom);
  const [completion, setCompletion] = useAtom(partEightCompletionAtom);
  const [selectedEdges, setSelectedEdges] = useAtom(
    partEightPentagonSelectedEdgesAtom,
  );
  const [queuedChange, setQueuedChange] = useAtom(queuedChangeAtom);
  const [successQueue, setSuccessQueue] = useAtom(successQueueAtom);

  useEffect(() => {
    if (phase !== 20) {
      setActivePair({
        1: null,
        2: null,
      });
    }
  }, [phase, setActivePair, completion]);

  function handleComponents(
    persons: ("E" | "F" | "G" | "H" | "I")[],
    lines: {
      [key: string]: string;
    },
    buttons: {
      [key: string]: string;
    },
    text?: {
      [key: string]: string;
    },
  ) {
    let newObj = JSON.parse(JSON.stringify(defaultPentagonComponents));

    persons.forEach((person) => {
      newObj.nodes[person].person = "opacity-100";
    });

    for (let k in lines) {
      if (k !== "") {
        newObj.edges[k as Edge].line = lines[k];
      }
    }

    for (let k in buttons) {
      if (k !== "") {
        newObj.edges[k as Edge].circle = buttons[k];
        newObj.edges[k as Edge].lineCover =
          buttons[k].indexOf("hidden") !== -1 ? "hidden" : "";
        newObj.edges[k as Edge].text = "";
      }
    }

    for (let k in text) {
      if (k !== "") {
        newObj.edges[k as Edge].text = text[k];
      }
    }

    return newObj;
  }

  // function handleComponents(
  //   components: typeof defaultPentagonComponents,
  //   targetEdges: {
  //     edges: string[];
  //     behavior: "show" | "hide";
  //   },
  //   targetNodes: {
  //     nodes: string[];
  //     behavior: "show" | "hide";
  //   },
  //   // behavior: "show" | "hide",
  // ) {
  //   let newNodes = { ...defaultPentagonComponents["nodes"] };
  //   let newEdges = { ...defaultPentagonComponents["edges"] };
  //   targetNodes.nodes.forEach((node) => {
  //     if (targetNodes.behavior === "show") {
  //       newNodes[node as "E"] = {
  //         circle: "",
  //         person: "opacity-100",
  //       };
  //     } else {
  //       newNodes[node as "E"] = {
  //         circle: "",
  //         person: "opacity-50",
  //       };
  //     }
  //   });
  //   // targetEdges.edges.forEach((targetEdge) => {
  //   //   let letters = targetEdge.split("");
  //   //   for (let z in newNodes) {
  //   //     if (letters.includes(z) && targetEdges.behavior === "show") {
  //   //       newNodes[z as "E" | "F" | "G" | "H" | "I"] = {
  //   //         circle: "",
  //   //         person: "opacity-100",
  //   //       };
  //   //     } else {
  //   //       newNodes[z as "E" | "F" | "G" | "H" | "I"] = {
  //   //         circle: "",
  //   //         person: "opacity-50",
  //   //       };
  //   //     }
  //   //   }
  //   // });
  //   for (let k in newEdges) {
  //     if (
  //       (targetEdges.edges.includes(k) && targetEdges.behavior === "hide") ||
  //       (!targetEdges.edges.includes(k) && targetEdges.behavior === "show")
  //     ) {
  //       newEdges[k as Edge] = {
  //         line: phase === 11 && k === "EF" ? "" : "hidden",
  //         circle: "hidden",
  //         lineCover: "hidden",
  //         text: "hidden",
  //       };
  //     }
  //   }
  //   return {
  //     ...defaultPentagonComponents,
  //     edges: newEdges,
  //     nodes: newNodes,
  //     bus: {
  //       E: "fill-red-500",
  //       F: "fill-blue-600",
  //     },
  //   };
  // }

  // E > I, E > G, F > H
  let wrongEdges = useMemo(() => {
    return checkEdges(selectedEdges);
    // if (selectedEdges["EF"].selected === false || selectedEdges["EF"].direction === 'backwards') {
    //   wrongEdges.push("EF");
    // }
  }, [phase, successQueue, queuedChange]);

  useEffect(() => {
    console.log(queuedChange);
    let wrongEdgesCopy = [...wrongEdges];
    let newSelectedEdges = { ...selectedEdges };
    for (let k in queuedChange) {
      newSelectedEdges[k as Edge] = queuedChange[k];
    }
    console.log(newSelectedEdges);
    console.log(selectedEdges);
    console.log(checkEdges(newSelectedEdges).length);
    console.log(checkEdges(selectedEdges).length);
    if (
      checkEdges(newSelectedEdges).length < checkEdges(selectedEdges).length
    ) {
      setSuccessQueue(true);
    }
  }, [queuedChange, wrongEdges]);

  useEffect(() => {
    setSuccessQueue(null);
  }, [selectedEdges, setSuccessQueue]);

  let x = useMemo(() => {
    if (phase === 11) {
      return handleComponents(
        ["E", "F"],
        {
          EF: "",
        },
        {},
      );
    } else if (phase === 12) {
      return handleComponents(
        ["E", "F"],
        {
          EF: "",
        },
        {
          EF: "",
        },
      );
    } else if (phase === 13) {
      return handleComponents(["E", "G", "H", "I"], {}, {});
    } else if (phase === 14) {
      return handleComponents(
        ["E", "G", "H", "I"],
        {
          EG: "",
          EH: "",
          EI: "",
        },
        {
          EG: "",
          EH: "",
          EI: "",
        },
      );
    } else if (phase === 15) {
      return handleComponents(
        ["E", "G", "H", "I"],
        {
          EG: selectedEdges.EG.selected ? "" : "hidden",
          EH: selectedEdges.EH.selected ? "" : "hidden",
          EI: selectedEdges.EI.selected ? "" : "hidden",
        },
        {
          EG: "hidden",
          EH: "hidden",
          EI: "hidden",
        },
        {},
      );
    } else if (phase === 16) {
      return handleComponents(
        ["F", "G", "H", "I"],
        {
          EG: selectedEdges.EG.selected ? "fill-black/20" : "hidden",
          EH: selectedEdges.EH.selected ? "fill-black/20" : "hidden",
          EI: selectedEdges.EI.selected ? "fill-black/20" : "hidden",
          FG: "",
          FH: "",
          FI: "",
        },
        {
          EG: "hidden",
          EH: "hidden",
          EI: "hidden",
          FG: "",
          FH: "",
          FI: "",
        },
        {
          EG: "hidden",
          EH: "hidden",
          EI: "hidden",
          FG: "",
          FH: "",
          FI: "",
        },
      );
    } else if (phase === 17) {
      return handleComponents(
        ["F", "G", "H", "I"],
        {
          EG: selectedEdges.EG.selected ? "fill-black/20" : "hidden",
          EH: selectedEdges.EH.selected ? "fill-black/20" : "hidden",
          EI: selectedEdges.EI.selected ? "fill-black/20" : "hidden",
          FG: selectedEdges.FG.selected ? "fill-black" : "hidden",
          FH: selectedEdges.FH.selected ? "fill-black" : "hidden",
          FI: selectedEdges.FI.selected ? "fill-black" : "hidden",
        },
        {
          EG: "hidden",
          EH: "hidden",
          EI: "hidden",
          FG: "hidden",
          FH: "hidden",
          FI: "hidden",
        },
        {
          EG: "hidden",
          EH: "hidden",
          EI: "hidden",
          FG: "",
          FH: "",
          FI: "",
        },
      );
    } else if (phase === 18) {
      return handleComponents(
        ["G", "H", "I"],
        {
          EG: selectedEdges.EG.selected ? "fill-black/20" : "hidden",
          EH: selectedEdges.EH.selected ? "fill-black/20" : "hidden",
          EI: selectedEdges.EI.selected ? "fill-black/20" : "hidden",
          FG: selectedEdges.FG.selected ? "fill-black/20" : "hidden",
          FH: selectedEdges.FH.selected ? "fill-black/20" : "hidden",
          FI: selectedEdges.FI.selected ? "fill-black/20" : "hidden",
          GH: "",
          GI: "",
          HI: "",
        },
        {
          EG: "hidden",
          EH: "hidden",
          EI: "hidden",
          FG: "hidden",
          FH: "hidden",
          FI: "hidden",
          GH: "",
          GI: "",
          HI: "",
        },
        {
          EG: "hidden",
          EH: "hidden",
          EI: "hidden",
          FG: "hidden",
          FH: "hidden",
          FI: "hidden",
          GH: "",
          GI: "",
          HI: "",
        },
      );
    } else if (phase === 19) {
      return handleComponents(
        ["G", "H", "I"],
        {
          EG: selectedEdges.EG.selected ? "fill-black/20" : "hidden",
          EH: selectedEdges.EH.selected ? "fill-black/20" : "hidden",
          EI: selectedEdges.EI.selected ? "fill-black/20" : "hidden",
          FG: selectedEdges.FG.selected ? "fill-black/20" : "hidden",
          FH: selectedEdges.FH.selected ? "fill-black/20" : "hidden",
          FI: selectedEdges.FI.selected ? "fill-black/20" : "hidden",
          GH: selectedEdges.GH.selected ? "fill-black" : "hidden",
          GI: selectedEdges.GI.selected ? "fill-black" : "hidden",
          HI: selectedEdges.HI.selected ? "fill-black" : "hidden",
        },
        {
          EG: "hidden",
          EH: "hidden",
          EI: "hidden",
          FG: "hidden",
          FH: "hidden",
          FI: "hidden",
          GH: "hidden",
          GI: "hidden",
          HI: "hidden",
        },
        {
          EG: "hidden",
          EH: "hidden",
          EI: "hidden",
          FG: "hidden",
          FH: "hidden",
          FI: "hidden",
          GH: "",
          GI: "",
          HI: "",
        },
      );
    } else if (phase === 20) {
      let wrongEdge: string | Edge = "";
      if (wrongEdges.length) {
        wrongEdge = wrongEdges[0];
      } else {
        console.log("fin");
      }

      return handleComponents(
        ["G", "H", "I"],
        {
          EG: selectedEdges.EG.selected ? "fill-black/20" : "hidden",
          EH: selectedEdges.EH.selected ? "fill-black/20" : "hidden",
          EI: selectedEdges.EI.selected ? "fill-black/20" : "hidden",
          FG: selectedEdges.FG.selected ? "fill-black/20" : "hidden",
          FH: selectedEdges.FH.selected ? "fill-black/20" : "hidden",
          FI: selectedEdges.FI.selected ? "fill-black/20" : "hidden",
          GH: selectedEdges.GH.selected ? "fill-black/20" : "hidden",
          GI: selectedEdges.GI.selected ? "fill-black/20" : "hidden",
          HI: selectedEdges.HI.selected ? "fill-black/20" : "hidden",
          [wrongEdge as any as Edge]: successQueue
            ? "fadeOut1000"
            : "fill-red-600",
        },
        {
          EG: "hidden",
          EH: "hidden",
          EI: "hidden",
          FG: "hidden",
          FH: "hidden",
          FI: "hidden",
          GH: "hidden",
          GI: "hidden",
          HI: "hidden",
          [wrongEdge as any as Edge]: "hidden",
        },
        {
          EG: "hidden",
          EH: "hidden",
          EI: "hidden",
          FG: "hidden",
          FH: "hidden",
          FI: "hidden",
          GH: "hidden",
          GI: "hidden",
          HI: "hidden",
          [wrongEdge as any as Edge]: successQueue
            ? "fadeOut1000"
            : "stroke-2 stroke-red-500",
        },
      );
    } else {
      return defaultPentagonComponents;
    }
  }, [phase, selectedEdges, queuedChange, successQueue]);

  // useEffect(() => {
  //   if (phase === 20) {
  //     let wrongEdge = "";
  //     if (wrongEdges.length) {
  //       wrongEdge = wrongEdges[0];
  //     }
  //     setResult(
  //       handleComponents(
  //         ["G", "H", "I"],
  //         {
  //           EG: selectedEdges.EG.selected ? "fill-black/20" : "hidden",
  //           EH: selectedEdges.EH.selected ? "fill-black/20" : "hidden",
  //           EI: selectedEdges.EI.selected ? "fill-black/20" : "hidden",
  //           FG: selectedEdges.FG.selected ? "fill-black/20" : "hidden",
  //           FH: selectedEdges.FH.selected ? "fill-black/20" : "hidden",
  //           FI: selectedEdges.FI.selected ? "fill-black/20" : "hidden",
  //           GH: selectedEdges.GH.selected ? "fill-black/20" : "hidden",
  //           GI: selectedEdges.GI.selected ? "fill-black/20" : "hidden",
  //           HI: selectedEdges.HI.selected ? "fill-black/20" : "hidden",
  //           [wrongEdge]: "fill-red-600",
  //         },
  //         {
  //           EG: "hidden",
  //           EH: "hidden",
  //           EI: "hidden",
  //           FG: "hidden",
  //           FH: "hidden",
  //           FI: "hidden",
  //           GH: "hidden",
  //           GI: "hidden",
  //           HI: "hidden",
  //           [wrongEdge]: "fill-red-600",
  //         },
  //         {
  //           EG: "hidden",
  //           EH: "hidden",
  //           EI: "hidden",
  //           FG: "hidden",
  //           FH: "hidden",
  //           FI: "hidden",
  //           GH: "hidden",
  //           GI: "hidden",
  //           HI: "hidden",
  //           [wrongEdge]: "",
  //         },
  //       ),
  //     );
  //   }
  // }, [phase, wrongEdges]);

  useEffect(() => {
    if (phase === 20 && wrongEdges.length) {
      console.log(wrongEdges[0]);
      console.log(wrongEdges[0][0], wrongEdges[0][1]);
      setActivePair({
        1: wrongEdges[0][0],
        2: wrongEdges[0][1],
      });
    }
  }, [wrongEdges.length, phase, setActivePair]);

  console.log(wrongEdges);

  console.log(activePair);

  return (
    <StandardLayout>
      <Pentagon wrongEdge={wrongEdges[0]} components={x} />
      {/* <Pentagon2 /> */}
      {phase === 11 && <div>Poll Placeholder</div>}
      {phase === 12 && (
        <div>
          <h2 className="text-center text-xl font-bold md:text-left">
            Genotypes
          </h2>
          {viewed["EF"] && (
            <CompareGenotypes firstPersonId={"E"} secondPersonId={"F"} />
          )}
          {phase === 12 && viewed["EF"] && (
            <div className="fadeIn500 my-8 bg-primaryBlue/20 p-4 text-sm md:p-8">
              <p>
                If the two people with travel history traveled together, for
                example if they were part of the same household, then it&apos;s
                possible that their infections might be related. In this case,
                we know that they report travel to different geographic areas
                with high transmission and likely acquired their infections
                there. Since there is generally a lot of parasite genetic
                diversity in areas of high transmission, and they&apos;re coming
                from different regions, we would not expect their parasites to
                be related by ancestry. This is exactly what we find. Since the
                MOI of these cases are 2 and 3, we&apos;d expect to see some
                matches by chance; what we observe &ndash; 4 of 12 loci with a
                match, or IBS of 0.33 &ndash; is within the range of what
                we&apos;d expect with unrelated infections.
              </p>
            </div>
          )}
        </div>
      )}
      {phase === 13 && (
        <div>
          <h2></h2>
          <div className="py-40 text-center text-xl  font-bold">
            Poll Placeholder
          </div>
          <div className="fadeIn500 my-8 bg-primaryBlue/20 p-4 text-sm md:p-8">
            There may be several types of information that you are interested
            in, but date of the cases is an important one. Your team shares a
            clean, well curated epidemiologic database with you with data for
            all five cases. It turns out that cases E and F were both detected
            within a week of each other, and that cases G, H, and I all
            presented with malaria between two and six weeks after.
          </div>
        </div>
      )}
      {(phase === 14 || phase === 16 || phase === 18) && (
        <div>
          <h2 className="text-center text-xl font-bold md:text-left">
            Genotypes
          </h2>
          {
            <CompareGenotypes
              firstPersonId={activePair[1]}
              secondPersonId={activePair[2]}
            />
          }
        </div>
      )}
      {phase === 20 && (
        <div>
          <PentagonQuestions />
        </div>
      )}
    </StandardLayout>
  );
}
