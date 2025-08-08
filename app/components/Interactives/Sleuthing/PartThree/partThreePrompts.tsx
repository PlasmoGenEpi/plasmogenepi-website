import { ReactElement } from "react";
import { sections } from "../2.6/pages/sections";

export const partThreePrompts: {
  [key: number]: {
    title: ReactElement;
    instructions: ReactElement;
  };
} = {
  0: {
    // title: <h5>{sections[3].title}</h5>,
    title: {
      EN: <h5>{sections[3].subcomponents[0].title["EN"]}</h5>,
      FR: <h5>{sections[3].subcomponents[0].title["FR"]}</h5>,
      PT: <h5>{sections[3].subcomponents[0].title["PT"]}</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            You now have data from a new malaria indicator survey, with
            thousands of samples collected across your country, and you
            genotyped a representative set of the samples that were positive.
            Your lab director comes in and tells you that the 12 SNPs actually
            come from 4 distinct parts of the genome - each containing 3 SNPs
            right next to each other (i.e. 4 microhaplotypes).
          </p>
          <div className="relative my-8 h-48 dark:brightness-75">
            <div className="absolute top-1/2 flex h-8 w-full max-w-full -translate-y-1/2 overflow-hidden border border-black font-mono">
              <div className="w-[8%] bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="w-[4%] bg-microBrown"></div>
              <div className="w-[24%] bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="w-[4%] bg-microRed"></div>
              <div className="w-[11%] bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="w-[4%] bg-microPurple"></div>
              <div className="grow bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="w-[4%] bg-microGreen"></div>
              <div className="w-[20%] bg-zinc-200 dark:bg-zinc-700"></div>

              {/* {Array(150)
              .fill(0)
              .map((el, idx) => {
                return (
                  <div className="w-3 py-2  text-[10px]" key={idx}>
                    {Math.random() > 0.5
                      ? Math.random() > 0.5
                        ? "A"
                        : "T"
                      : Math.random() > 0.5
                      ? "G"
                      : "C"}
                  </div>
                );
              })} */}
            </div>
            <div className="absolute bottom-0  left-[5%] grid w-[20cqi] grid-cols-3 gap-0.5 bg-microBrown p-1 text-center text-lg text-black @xl/main:w-[15cqi] @3xl/main:w-[10cqi] ">
              <label className="absolute -top-6 w-full text-xs first-letter:text-sm dark:text-white">
                L1
              </label>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">A</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">T</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">T</span>
              </div>
            </div>
            <div className="absolute left-[25%]  top-6 grid w-[20cqi] grid-cols-3 gap-0.5 bg-microRed p-1 text-center text-lg text-black @xl/main:w-[15cqi] @3xl/main:w-[10cqi]">
              <label className="absolute -top-6 w-full text-xs first-letter:text-sm dark:text-white">
                L2
              </label>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="alternateAllele block translate-y-0.5">C</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">G</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="alternateAllele block translate-y-0.5">G</span>
              </div>
            </div>
            <div className="absolute bottom-0  left-[50%] grid w-[20cqi] -translate-x-1/2 grid-cols-3 gap-0.5 bg-microPurple p-1 text-center text-lg text-black @xl/main:w-[15cqi] @3xl/main:w-[10cqi]">
              <label className="absolute -top-6 w-full text-xs first-letter:text-sm dark:text-white">
                L3
              </label>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="alternateAllele block translate-y-0.5">T</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">C</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">T</span>
              </div>
            </div>
            <div className="absolute right-[15%]  top-6 grid w-[20cqi] grid-cols-3 gap-0.5 bg-microGreen p-1 text-center text-lg text-black @xl/main:w-[15cqi] @3xl/main:w-[10cqi]">
              <label className="absolute -top-6 w-full text-xs first-letter:text-sm dark:text-white">
                L4
              </label>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">G</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="alternateAllele block translate-y-0.5">A</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="alternateAllele block translate-y-0.5">C</span>
              </div>
            </div>
          </div>
          {/* <div className="w-full bg-zinc-300/ border-2 border-white h-8 my-24">
          <svg
            height={40}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -10 36 10"
            // fill="#000000a0"
            className="translate-y-10 fill-black/50"
          >
            <path d="M 0 0 L 0 -10 L 36 -10 L 36 0 L 0 0" />
            <text className="text-[10px] fill-white">T G G</text>
          </svg>
          <svg
            height={40}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -10 36 10"
            overflow="visible"
          >
            <path d="M 0 0 L 0 -10 L 18 -16" fill="#000000a0" />
            <path
              // className="[transform:rotateY(180deg)]"
              d="M 36 -10 L 36 0 L 18 -16"
              fill="#000000a0"
              className="stroke-[.25px] stroke-black"
            />
          </svg>
        </div> */}
          <p>
            The director asks whether analyzing the same data as microhaplotypes
            might provide more accurate and easily interpretable results. You
            agree to try.
          </p>
          <p>
            In this step of the activity, you will repeat the process, using the
            same genotyping results. But, instead of using the individual SNPs,
            this time you will analyze combinations of SNPs as microhaplotypes.
          </p>
          <p>Will the microhaplotypes give you a different result?</p>
          <p>Let's find out!</p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          {/* <p>
            You now have data from a new malaria indicator survey, with
            thousands of samples collected across your country, and you
            genotyped a representative set of the samples that were positive.
            Your lab director comes in and tells you that the 12 SNPs actually
            come from 4 distinct parts of the genome - each containing 3 SNPs
            right next to each other (i.e. 4 microhaplotypes).
          </p> */}
          <p>
            Vous disposez désormais des données d'une nouvelle enquête sur les
            indicateurs du paludisme, avec des milliers d'échantillons prélevés
            dans tout votre pays, et vous avez génotypé un ensemble
            représentatif des échantillons positifs. Votre directeur de
            laboratoire entre et vous dit que les 12 SNP proviennent en fait de
            4 parties distinctes du génome, chacune contenant 3 SNP côte à côte
            (c.-à-d. 4 microhaplotypes).
          </p>
          <div className="relative my-8 h-48 dark:brightness-75">
            <div className="absolute top-1/2 flex h-8 w-full max-w-full -translate-y-1/2 overflow-hidden border border-black font-mono">
              <div className="w-[8%] bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="w-[4%] bg-microBrown"></div>
              <div className="w-[24%] bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="w-[4%] bg-microRed"></div>
              <div className="w-[11%] bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="w-[4%] bg-microPurple"></div>
              <div className="grow bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="w-[4%] bg-microGreen"></div>
              <div className="w-[20%] bg-zinc-200 dark:bg-zinc-700"></div>

              {/* {Array(150)
              .fill(0)
              .map((el, idx) => {
                return (
                  <div className="w-3 py-2  text-[10px]" key={idx}>
                    {Math.random() > 0.5
                      ? Math.random() > 0.5
                        ? "A"
                        : "T"
                      : Math.random() > 0.5
                      ? "G"
                      : "C"}
                  </div>
                );
              })} */}
            </div>
            <div className="absolute bottom-0  left-[5%] grid w-[20cqi] grid-cols-3 gap-0.5 bg-microBrown p-1 text-center text-lg text-black @xl/main:w-[15cqi] @3xl/main:w-[10cqi] ">
              <label className="absolute -top-6 w-full text-xs first-letter:text-sm dark:text-white">
                L1
              </label>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">A</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">T</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">T</span>
              </div>
            </div>
            <div className="absolute left-[25%]  top-6 grid w-[20cqi] grid-cols-3 gap-0.5 bg-microRed p-1 text-center text-lg text-black @xl/main:w-[15cqi] @3xl/main:w-[10cqi]">
              <label className="absolute -top-6 w-full text-xs first-letter:text-sm dark:text-white">
                L2
              </label>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="alternateAllele block translate-y-0.5">C</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">G</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="alternateAllele block translate-y-0.5">G</span>
              </div>
            </div>
            <div className="absolute bottom-0  left-[50%] grid w-[20cqi] -translate-x-1/2 grid-cols-3 gap-0.5 bg-microPurple p-1 text-center text-lg text-black @xl/main:w-[15cqi] @3xl/main:w-[10cqi]">
              <label className="absolute -top-6 w-full text-xs first-letter:text-sm dark:text-white">
                L3
              </label>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="alternateAllele block translate-y-0.5">T</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">C</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">T</span>
              </div>
            </div>
            <div className="absolute right-[15%]  top-6 grid w-[20cqi] grid-cols-3 gap-0.5 bg-microGreen p-1 text-center text-lg text-black @xl/main:w-[15cqi] @3xl/main:w-[10cqi]">
              <label className="absolute -top-6 w-full text-xs first-letter:text-sm dark:text-white">
                L4
              </label>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">G</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="alternateAllele block translate-y-0.5">A</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="alternateAllele block translate-y-0.5">C</span>
              </div>
            </div>
          </div>
          <p>
            Le directeur vous demande si l'analyse des mêmes données sous forme
            de microhaplotypes pourrait fournir des résultats plus précis et
            plus faciles à interpréter. Vous acceptez d'essayer.
          </p>
          <p>
            Dans cette étape de l'activité, vous répéterez le processus en
            utilisant les mêmes résultats de génotypage. Mais au lieu d'utiliser
            les SNP individuels, vous analyserez cette fois les combinaisons de
            SNP en tant que microhaplotypes.
          </p>
          <p>Les microhaplotypes vous donneront-ils un résultat différent?</p>
          <p>Découvrons-le!</p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          {/* <p>
            You now have data from a new malaria indicator survey, with
            thousands of samples collected across your country, and you
            genotyped a representative set of the samples that were positive.
            Your lab director comes in and tells you that the 12 SNPs actually
            come from 4 distinct parts of the genome - each containing 3 SNPs
            right next to each other (i.e. 4 microhaplotypes).
          </p> */}
          <p>
            Tem agora dados de um novo inquérito de indicadores da malária, com
            milhares de amostras recolhidas em todo o seu país, e fez a
            genotipagem de um conjunto representativo das amostras que foram
            positivas. O diretor do seu laboratório chega e diz-lhe que os 12
            SNP provêm, na realidade, de 4 partes distintas do genoma - cada uma
            contendo 3 SNP mesmo ao lado uma da outra (ou seja, 4
            microhaplótipos).
          </p>
          <div className="relative my-8 h-48 dark:brightness-75">
            <div className="absolute top-1/2 flex h-8 w-full max-w-full -translate-y-1/2 overflow-hidden border border-black font-mono">
              <div className="w-[8%] bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="w-[4%] bg-microBrown"></div>
              <div className="w-[24%] bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="w-[4%] bg-microRed"></div>
              <div className="w-[11%] bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="w-[4%] bg-microPurple"></div>
              <div className="grow bg-zinc-200 dark:bg-zinc-700"></div>
              <div className="w-[4%] bg-microGreen"></div>
              <div className="w-[20%] bg-zinc-200 dark:bg-zinc-700"></div>

              {/* {Array(150)
              .fill(0)
              .map((el, idx) => {
                return (
                  <div className="w-3 py-2  text-[10px]" key={idx}>
                    {Math.random() > 0.5
                      ? Math.random() > 0.5
                        ? "A"
                        : "T"
                      : Math.random() > 0.5
                      ? "G"
                      : "C"}
                  </div>
                );
              })} */}
            </div>
            <div className="absolute bottom-0  left-[5%] grid w-[20cqi] grid-cols-3 gap-0.5 bg-microBrown p-1 text-center text-lg text-black @xl/main:w-[15cqi] @3xl/main:w-[10cqi] ">
              <label className="absolute -top-6 w-full text-xs first-letter:text-sm dark:text-white">
                L1
              </label>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">A</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">T</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">T</span>
              </div>
            </div>
            <div className="absolute left-[25%]  top-6 grid w-[20cqi] grid-cols-3 gap-0.5 bg-microRed p-1 text-center text-lg text-black @xl/main:w-[15cqi] @3xl/main:w-[10cqi]">
              <label className="absolute -top-6 w-full text-xs first-letter:text-sm dark:text-white">
                L2
              </label>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="alternateAllele block translate-y-0.5">C</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">G</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="alternateAllele block translate-y-0.5">G</span>
              </div>
            </div>
            <div className="absolute bottom-0  left-[50%] grid w-[20cqi] -translate-x-1/2 grid-cols-3 gap-0.5 bg-microPurple p-1 text-center text-lg text-black @xl/main:w-[15cqi] @3xl/main:w-[10cqi]">
              <label className="absolute -top-6 w-full text-xs first-letter:text-sm dark:text-white">
                L3
              </label>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="alternateAllele block translate-y-0.5">T</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">C</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">T</span>
              </div>
            </div>
            <div className="absolute right-[15%]  top-6 grid w-[20cqi] grid-cols-3 gap-0.5 bg-microGreen p-1 text-center text-lg text-black @xl/main:w-[15cqi] @3xl/main:w-[10cqi]">
              <label className="absolute -top-6 w-full text-xs first-letter:text-sm dark:text-white">
                L4
              </label>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="block translate-y-0.5">G</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="alternateAllele block translate-y-0.5">A</span>
              </div>
              <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
                <span className="alternateAllele block translate-y-0.5">C</span>
              </div>
            </div>
          </div>
          <p>
            O diretor pergunta se a análise dos mesmos dados como
            microhaplótipos pode fornecer resultados mais precisos e facilmente
            interpretáveis. Concorda em tentar.
          </p>
          <p>
            Nesta etapa da atividade, irá repetir o processo, utilizando os
            mesmos resultados de genotipagem. Mas, em vez de utilizar os SNPs
            individuais, desta vez irá analisar combinações de SNPs como
            microhaplótipos.
          </p>
          <p>Será que os microhaplótipos lhe darão um resultado diferente?</p>
          <p>Vamos descobrir!</p>
        </div>
      ),
    },
    // instructions: (
    //   <div className="flex flex-col gap-4">
    //     <p>
    //       You now have data from a new malaria indicator survey, with thousands
    //       of samples collected across your country, and you genotyped a
    //       representative set of the samples that were positive. Your lab
    //       director comes in and tells you that the 12 SNPs actually come from 4
    //       distinct parts of the genome - each containing 3 SNPs right next to
    //       each other (i.e. 4 microhaplotypes).
    //     </p>
    //     <div className="relative my-8 h-48 dark:brightness-75">
    //       <div className="absolute top-1/2 flex h-8 w-full max-w-full -translate-y-1/2 overflow-hidden border border-black font-mono">
    //         <div className="w-[8%] bg-zinc-200 dark:bg-zinc-700"></div>
    //         <div className="w-[4%] bg-microBrown"></div>
    //         <div className="w-[24%] bg-zinc-200 dark:bg-zinc-700"></div>
    //         <div className="w-[4%] bg-microRed"></div>
    //         <div className="w-[11%] bg-zinc-200 dark:bg-zinc-700"></div>
    //         <div className="w-[4%] bg-microPurple"></div>
    //         <div className="grow bg-zinc-200 dark:bg-zinc-700"></div>
    //         <div className="w-[4%] bg-microGreen"></div>
    //         <div className="w-[20%] bg-zinc-200 dark:bg-zinc-700"></div>

    //         {/* {Array(150)
    //             .fill(0)
    //             .map((el, idx) => {
    //               return (
    //                 <div className="w-3 py-2  text-[10px]" key={idx}>
    //                   {Math.random() > 0.5
    //                     ? Math.random() > 0.5
    //                       ? "A"
    //                       : "T"
    //                     : Math.random() > 0.5
    //                     ? "G"
    //                     : "C"}
    //                 </div>
    //               );
    //             })} */}
    //       </div>
    //       <div className="absolute bottom-0  left-[5%] grid w-[20cqi] grid-cols-3 gap-0.5 bg-microBrown p-1 text-center text-lg text-black @xl/main:w-[15cqi] @3xl/main:w-[10cqi] ">
    //         <label className="absolute -top-6 w-full text-xs first-letter:text-sm dark:text-white">
    //           L1
    //         </label>
    //         <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
    //           <span className="block translate-y-0.5">A</span>
    //         </div>
    //         <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
    //           <span className="block translate-y-0.5">T</span>
    //         </div>
    //         <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
    //           <span className="block translate-y-0.5">T</span>
    //         </div>
    //       </div>
    //       <div className="absolute left-[25%]  top-6 grid w-[20cqi] grid-cols-3 gap-0.5 bg-microRed p-1 text-center text-lg text-black @xl/main:w-[15cqi] @3xl/main:w-[10cqi]">
    //         <label className="absolute -top-6 w-full text-xs first-letter:text-sm dark:text-white">
    //           L2
    //         </label>
    //         <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
    //           <span className="alternateAllele block translate-y-0.5">C</span>
    //         </div>
    //         <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
    //           <span className="block translate-y-0.5">G</span>
    //         </div>
    //         <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
    //           <span className="alternateAllele block translate-y-0.5">G</span>
    //         </div>
    //       </div>
    //       <div className="absolute bottom-0  left-[50%] grid w-[20cqi] -translate-x-1/2 grid-cols-3 gap-0.5 bg-microPurple p-1 text-center text-lg text-black @xl/main:w-[15cqi] @3xl/main:w-[10cqi]">
    //         <label className="absolute -top-6 w-full text-xs first-letter:text-sm dark:text-white">
    //           L3
    //         </label>
    //         <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
    //           <span className="alternateAllele block translate-y-0.5">T</span>
    //         </div>
    //         <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
    //           <span className="block translate-y-0.5">C</span>
    //         </div>
    //         <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
    //           <span className="block translate-y-0.5">T</span>
    //         </div>
    //       </div>
    //       <div className="absolute right-[15%]  top-6 grid w-[20cqi] grid-cols-3 gap-0.5 bg-microGreen p-1 text-center text-lg text-black @xl/main:w-[15cqi] @3xl/main:w-[10cqi]">
    //         <label className="absolute -top-6 w-full text-xs first-letter:text-sm dark:text-white">
    //           L4
    //         </label>
    //         <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
    //           <span className="block translate-y-0.5">G</span>
    //         </div>
    //         <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
    //           <span className="alternateAllele block translate-y-0.5">A</span>
    //         </div>
    //         <div className="flex aspect-square items-center justify-center bg-white font-bold shadow-sm shadow-black">
    //           <span className="alternateAllele block translate-y-0.5">C</span>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <div className="w-full bg-zinc-300/ border-2 border-white h-8 my-24">
    //         <svg
    //           height={40}
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 -10 36 10"
    //           // fill="#000000a0"
    //           className="translate-y-10 fill-black/50"
    //         >
    //           <path d="M 0 0 L 0 -10 L 36 -10 L 36 0 L 0 0" />
    //           <text className="text-[10px] fill-white">T G G</text>
    //         </svg>
    //         <svg
    //           height={40}
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 -10 36 10"
    //           overflow="visible"
    //         >
    //           <path d="M 0 0 L 0 -10 L 18 -16" fill="#000000a0" />
    //           <path
    //             // className="[transform:rotateY(180deg)]"
    //             d="M 36 -10 L 36 0 L 18 -16"
    //             fill="#000000a0"
    //             className="stroke-[.25px] stroke-black"
    //           />
    //         </svg>
    //       </div> */}
    //     <p>
    //       The director asks whether analyzing the same data as microhaplotypes
    //       might provide more accurate and easily interpretable results. You
    //       agree to try.
    //     </p>
    //     <p>
    //       In this step of the activity, you will repeat the process, using the
    //       same genotyping results. But, instead of using the individual SNPs,
    //       this time you will analyze combinations of SNPs as microhaplotypes.
    //     </p>
    //     <p>Will the microhaplotypes give you a different result?</p>
    //     <p>Let's find out!</p>
    //   </div>
    // ),
  },
  1: {
    // title: <h5>{sections[3].subcomponents[1].title}</h5>,
    title: {
      EN: <h5>{sections[3].subcomponents[1].title["EN"]}</h5>,
      FR: <h5>{sections[3].subcomponents[1].title["FR"]}</h5>,
      PT: <h5>{sections[3].subcomponents[1].title["PT"]}</h5>,
    },

    instructions: {
      EN: (
        <div>
          <p>
            You will now analyze the same 5 laboratory clones using
            microhaplotypes. Note that the individual SNPs are the same as
            before, but now you are analyzing each combination of 3 SNPs
            together as a single microhaplotype (4 microhaplotypes in total).
            Therefore you have 4 loci instead of 12, each with more diversity
            than the individual SNPs. Click microhaplotypes in the look-up table
            on the left to place them on loci on the right. Selecting a
            different column will change the loci shown in the table.
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Vous allez maintenant analyser les mêmes 5 clones de laboratoire en
            utilisant des microhaplotypes. Notez que les SNP individuels sont
            les mêmes que précédemment, mais vous analysez maintenant chaque
            combinaison de 3 SNP ensemble comme un seul microhaplotype (4
            microhaplotypes au total). Vous avez donc 4 loci au lieu de 12,
            chacun avec plus de diversité que les SNP individuels. Cliquez sur
            les microhaplotypes dans la table de recherche de gauche pour les
            placer sur les loci de droite. La sélection d'une colonne différente
            modifie les loci affichés dans le tableau.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Agora você vai analisar os mesmos 5 clones de laboratório usando
            microhaplótipos. Note que os SNPs individuais são os mesmos de
            antes, mas agora está a analisar cada combinação de 3 SNPs juntos
            como um único microhaplótipo (4 microhaplótipos no total). Por
            conseguinte, tem 4 loci em vez de 12, cada um com mais diversidade
            do que os SNP individuais. Clique nos microhaplótipos na tabela de
            consulta à esquerda para os colocar nos loci à direita. A seleção de
            uma coluna diferente altera os loci apresentados na tabela.
          </p>
        </div>
      ),
    },
    // instructions: (
    //   <div>
    //     <p>
    //       You will now analyze the same 5 laboratory clones using
    //       microhaplotypes. Note that the individual SNPs are the same as before,
    //       but now you are analyzing each combination of 3 SNPs together as a
    //       single microhaplotype (4 microhaplotypes in total). Therefore you have
    //       4 loci instead of 12, each with more diversity than the individual
    //       SNPs. Click microhaplotypes in the look-up table on the left to place
    //       them on loci on the right. Selecting a different column will change
    //       the loci shown in the table.
    //     </p>
    //   </div>
    // ),
  },
  2: {
    // title: <h5>{sections[3].subcomponents[2].title}</h5>,
    title: {
      EN: <h5>{sections[3].subcomponents[2].title["EN"]}</h5>,
      FR: <h5>{sections[3].subcomponents[2].title["FR"]}</h5>,
      PT: <h5>{sections[3].subcomponents[2].title["PT"]}</h5>,
    },
    // instructions: (
    //   <div>
    //     <p>
    //       Make six positive controls using different combinations of your
    //       laboratory clones. Click on your laboratory clones to move them on or
    //       off the sample cards on the right. The number of clones you use for
    //       each positive control will depend on the MOI,
    //       {/* {" "}
    //       <span className="underline"> */}
    //       and each control must be different from others.
    //       {/* </span> */}
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div>
          <p>
            Make six positive controls using different combinations of your
            laboratory clones. Click on your laboratory clones to move them on
            or off the sample cards on the right. The number of clones you use
            for each positive control will depend on the MOI,
            {/* {" "}
            <span className="underline"> */}
            and each control must be different from others.
            {/* </span> */}
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Réalisez six contrôles positifs en utilisant différentes
            combinaisons de vos clones de laboratoire. Cliquez sur vos clones de
            laboratoire pour les déplacer sur les cartes d'échantillons à
            droite. Le nombre de clones que vous utilisez pour chaque contrôle
            positif dépend de la MOI, et chaque contrôle doit être différent des
            autres.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Faça seis controlos positivos utilizando diferentes combinações dos
            seus clones de laboratório. Clique nos clones do seu laboratório
            para os colocar ou retirar dos cartões de amostra à direita. O
            número de clones que utiliza para cada controlo positivo depende do
            MOI e cada controlo deve ser diferente dos outros.
          </p>
        </div>
      ),
    },
  },
  3: {
    // title: <h5>{sections[3].subcomponents[3].title}</h5>,
    title: {
      EN: <h5>{sections[3].subcomponents[3].title["EN"]}</h5>,
      FR: <h5>{sections[3].subcomponents[3].title["FR"]}</h5>,
      PT: <h5>{sections[3].subcomponents[3].title["PT"]}</h5>,
    },
    instructions: {
      EN: (
        <div>
          <p>
            Enter data in the genotype form by clicking each microhaplotype that
            is present at locus 1, 2, 3, and 4. The number of microhaplotypes
            that you enter will depend on how many different microhaplotypes are
            present at each locus.
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Saisissez les données dans le formulaire de génotype en cliquant sur
            chaque microhaplotype présent aux locus 1, 2, 3 et 4. Le nombre de
            microhaplotypes que vous saisissez dépend du nombre de
            microhaplotypes différents présents à chaque locus.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Introduza os dados no formulário de genótipo clicando em cada
            microhaplótipo presente nos locus 1, 2, 3 e 4. O número de
            microhaplótipos que introduzir dependerá do número de
            microhaplótipos diferentes presentes em cada locus.
          </p>
        </div>
      ),
    },
    // instructions: (
    //   <div>
    //     <p>
    //       Enter data in the genotype form by clicking each microhaplotype that
    //       is present at locus 1, 2, 3, and 4. The number of microhaplotypes that
    //       you enter will depend on how many different microhaplotypes are
    //       present at each locus.
    //     </p>
    //   </div>
    // ),
  },
  4: {
    // title: <h5>{sections[3].subcomponents[4].title}</h5>,
    title: {
      EN: <h5>{sections[3].subcomponents[4].title["EN"]}</h5>,
      FR: <h5>{sections[3].subcomponents[4].title["FR"]}</h5>,
      PT: <h5>{sections[3].subcomponents[4].title["PT"]}</h5>,
    },
    // instructions: (
    //   <div>
    //     <p>Answer the following questions.</p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div>
          <p>Answer the following questions.</p>
        </div>
      ),
      FR: (
        <div>
          <p>Répondez aux questions suivantes.</p>
        </div>
      ),
      PT: (
        <div>
          <p>Responder às seguintes perguntas.</p>
        </div>
      ),
    },
  },
  5: {
    // title: <h5>{sections[3].subcomponents[5].title}</h5>,
    title: {
      EN: <h5>{sections[3].subcomponents[5].title["EN"]}</h5>,
      FR: <h5>{sections[3].subcomponents[5].title["FR"]}</h5>,
      PT: <h5>{sections[3].subcomponents[5].title["PT"]}</h5>,
    },
    // instructions: (
    //   <div>
    //     <p>
    //       Before you continue to Step 4, let's take a moment to think about the
    //       relationship between MOI and the number of alleles you observe in
    //       microhaplotypes. Complete the three-question quiz below.{" "}
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div>
          <p>
            Before you continue to Step 4, let's take a moment to think about
            the relationship between MOI and the number of alleles you observe
            in microhaplotypes. Complete the three-question quiz below.{" "}
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Avant de passer à l'étape 4, prenons le temps de réfléchir à la
            relation entre le MOI et le nombre d'allèles que vous observez dans
            les microhaplotypes. Répondez aux trois questions ci-dessous.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Antes de prosseguir para o etapa 4, vamos parar um momento para
            pensar sobre a relação entre MOI e o número de alelos observados nos
            microhaplótipos. Complete o questionário de três perguntas abaixo.
          </p>
        </div>
      ),
    },
  },
  // 6: {
  //   // title: <h5>{sections[3].subcomponents[6].title}</h5>,
  //   title: {
  //     EN: <h5>{sections[3].subcomponents[6].title["EN"]}</h5>,
  //     FR: <h5>{sections[3].subcomponents[6].title["FR"]}</h5>,
  //     PT: <h5>{sections[3].subcomponents[6].title["PT"]}</h5>,
  //   },
  //   instructions: (
  //     <div>
  //       <p>
  //         Before you continue to Step 4, let's take a moment to think about the
  //         relationship between MOI and the number of alleles you observe in
  //         microhaplotypes. Complete the three-question quiz below.{" "}
  //       </p>
  //     </div>
  //   ),
  // },
};
