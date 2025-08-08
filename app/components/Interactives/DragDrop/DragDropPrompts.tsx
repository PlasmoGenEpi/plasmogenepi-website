// import { usePrevious } from "@/app/components/hooks";
import {
  dragDropCompletionAtom,
  dragDropQuestionsAtom,
  phase3Atom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { chimaeraPlacedAtom } from "./DragDropElements/ReferenceGenome";
import GenotypeResult from "../Shared/Genotyping/GenotypeResult";
import InteractivePrompt from "../Shared/misc/InteractivePrompt";
import { ReactElement, useCallback } from "react";
import { currentView3Atom } from "../Shared/InteractiveViewer/InteractiveViewer";
import KnowledgeCheckQuestion from "../Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import QuestionResponseText from "../Shared/misc/QuestionResponseText";
import { usePrevious } from "../../hooks";
import { ModuleCopyCode } from "../Shared/Buttons/ModuleCopyCode";

let sampleRef = [
  "A",
  "T",
  "T",
  "G",
  "A",
  "T",
  "C",
  "G",
  "T",
  "C",
  "C",
  "A",
  "A",
  "A",
  "G",
];
let sampleRead = [
  "A",
  "A",
  "T",
  "G",
  "A",
  "T",
  "C",
  "C",
  "T",
  "C",
  "C",
  "A",
  "A",
  "T",
  "C",
];
const dragDropSections: {
  [key: number]: {
    [key: number]: {
      titles: {
        EN: ReactElement | null;
        FR: ReactElement | null;
        PT: ReactElement | null;
      };
      instructions: {
        EN: ReactElement | null;
        FR: ReactElement | null;
        PT: ReactElement | null;
      };
      // title: ReactElement | null;
      // instructions: ReactElement | null;
    };
  };
} = {
  0: {
    0: {
      titles: {
        EN: <h5>Background</h5>,
        FR: <h5>Contexte</h5>,
        PT: <h5>Contexto</h5>,
      },
      instructions: {
        EN: (
          <div className="flex flex-col gap-4 font-helvetica [fontSize:15px]">
            <p>
              It is your very first day in the malaria genomics lab. You are
              really excited to start looking at data, since you have just taken
              an online course where you heard about all the great things that
              could be done with sequence data.
            </p>
            <p>
              The sequencing facility emails and lets you know that the results
              for your most recent run are back. Unfortunately, the lab
              technologist has the flu and the bioinformatician on your team has
              traveled to a conference, so you know nothing about the assay that
              was run or what software to use. Not deterred, you plan to look
              into the data anyway!
            </p>
            <p>
              Will you be able to make sense of your data and unlock the secrets
              hidden in your sequencer generated reads?
            </p>
            <p>
              If you are using a touch screen it is recommended that you
              continue the activity with the side bar closed.
            </p>
          </div>
        ),
        FR: (
          <div className="flex flex-col gap-4 font-helvetica [fontSize:15px]">
            <p>
              C'est votre tout premier jour au laboratoire de génomique du
              paludisme. Vous êtes vraiment impatient de commencer à examiner
              les données, car vous venez de suivre un cours en ligne où vous
              avez entendu parler de toutes les grandes choses qui peuvent être
              faites avec les données de séquence.
            </p>
            <p>
              L'installation de séquençage vous envoie un e-mail pour vous
              informer que les résultats de votre dernière série sont
              disponibles. Malheureusement, le technologue de laboratoire a la
              grippe et le bioinformaticien de votre équipe est parti en
              conférence, vous ne savez donc rien de l'essai qui a été réalisé
              ni du logiciel à utiliser. Non découragé, vous comptez quand même
              examiner les données !
            </p>
            <p>
              Serez-vous capable de donner un sens à vos données et de percer
              les secrets cachés dans vos lectures générées par le séquençage ?
            </p>
            <p>
              Si vous utilisez un écran tactile, il est recommandé de continuer
              l'activité avec la barre latérale fermée.
            </p>
          </div>
        ),
        PT: (
          <div className="flex flex-col gap-4 font-helvetica [fontSize:15px]">
            <p>
              É o seu primeiro dia no laboratório de genômica da malária. Você
              está muito animado para começar a analisar os dados, pois acabou
              de fazer um curso online onde aprendeu sobre todas as grandes
              coisas que poderiam ser feitas com dados de sequência.
            </p>
            <p>
              A instalação de sequenciamento envia um e-mail informando que os
              resultados da sua corrida mais recente estão de volta.
              Infelizmente, o tecnólogo de laboratório está com gripe e o
              bioinformacionista da sua equipe viajou para uma conferência,
              então você não sabe nada sobre o ensaio que foi realizado ou qual
              software usar. Não desanimado, você planeja analisar os dados
              mesmo assim!
            </p>
            <p>
              Você será capaz de entender seus dados e desvendar os segredos
              escondidos em suas leituras geradas pelo sequenciador?
            </p>
            <p>
              Se você estiver usando uma tela sensível ao toque, é recomendável
              que você continue a atividade com a barra lateral fechada.
            </p>
          </div>
        ),
      },
    },
    1: {
      titles: {
        EN: <h5>Goal</h5>,
        FR: <h5>Objectif</h5>,
        PT: <h5>Objetivo</h5>,
      },
      instructions: {
        EN: (
          <div className="flex flex-col gap-4 font-helvetica [fontSize:15px]">
            <p>
              The goal of this activity is to identify various mutations, loci,
              SNPs, and microhaplotypes by comparing sequencer generated reads
              to a reference genome.
            </p>
          </div>
        ),
        FR: (
          <div className="flex flex-col gap-4 font-helvetica [fontSize:15px]">
            <p>
              L'objectif de cette activité est d'identifier diverses mutations,
              loci, SNP et microhaplotypes en comparant les lectures générées
              par le séquenceur à un génome de référence.
            </p>
          </div>
        ),
        PT: (
          <div className="flex flex-col gap-4 font-helvetica [fontSize:15px]">
            <p>
              O objetivo desta atividade é identificar várias mutações, loci,
              SNPs e microhaplótipos comparando as leituras geradas pelo
              sequenciador com um genoma de referência.
            </p>
          </div>
        ),
      },
    },

    // 1: {
    //   title: <h5>Goal</h5>,
    //   instructions: (
    //     <div className="flex flex-col gap-4 font-helvetica [fontSize:15px]">
    //       <p>
    //         The goal of this activity is to identify various mutations, loci,
    //         SNPs, and microhaplotypes by comparing sequencer generated reads to
    //         a reference genome.
    //       </p>
    //     </div>
    //   ),
    // },
    // 2: {
    //   title: <h5>Instructions</h5>,
    //   instructions: (
    //     <div className="flex flex-col gap-4 font-helvetica [fontSize:15px]">
    //       <p>This first activity includes three steps:</p>
    //       <ol className="list flex list-disc flex-col gap-2 px-4">
    //         <li>
    //           First, you will match a batch of 10 sequencer generated reads to
    //           the correct locations on a reference genome.
    //         </li>
    //         <li>
    //           Next, you will match a batch of 20 more sequencer generated reads
    //           to the correct locations on a reference genome. However, this time
    //           there may be some mutations and errors, which makes your work here
    //           more challenging.
    //         </li>
    //         <li>
    //           Lastly, you will identify various mutations, loci, SNPs, and
    //           microhaplotypes in your reads.
    //         </li>
    //       </ol>
    //       <p>
    //         Along the way, you will respond to some multiple choice questions to
    //         check your understanding of the sequencing data.
    //       </p>
    //       <p>Go to the lab and get started!</p>
    //     </div>
    //   ),
    // },
    2: {
      titles: {
        EN: <h5>Instructions</h5>,
        FR: <h5>Instructions</h5>,
        PT: <h5>Instruções</h5>,
      },
      instructions: {
        EN: (
          <div className="flex flex-col gap-4 font-helvetica [fontSize:15px]">
            <p>This first activity includes three steps:</p>
            <ol className="list flex list-disc flex-col gap-2 px-4">
              <li>
                First, you will match a batch of 10 sequencer generated reads to
                the correct locations on a reference genome.
              </li>
              <li>
                Next, you will match a batch of 20 more sequencer generated
                reads to the correct locations on a reference genome. However,
                this time there may be some mutations and errors, which makes
                your work here more challenging.
              </li>
              <li>
                Lastly, you will identify various mutations, loci, SNPs, and
                microhaplotypes in your reads.
              </li>
            </ol>
            <p>
              Along the way, you will respond to some multiple choice questions
              to check your understanding of the sequencing data.
            </p>
            <p>Go to the lab and get started!</p>
          </div>
        ),
        FR: (
          <div className="flex flex-col gap-4 font-helvetica [fontSize:15px]">
            <p>Cette première activité comprend trois étapes :</p>
            <ol className="list flex list-disc flex-col gap-2 px-4">
              <li>
                Tout d'abord, vous associerez un lot de 10 lectures générées par
                le séquenceur aux emplacements corrects sur un génome de
                référence.
              </li>
              <li>
                Ensuite, vous associerez un lot de 20 lectures supplémentaires
                générées par le séquenceur aux emplacements corrects sur un
                génome de référence. Cependant, cette fois, il peut y avoir des
                mutations et des erreurs, ce qui rend votre travail plus
                difficile.
              </li>
              <li>
                Enfin, vous identifierez diverses mutations, loci, SNP et
                microhaplotypes dans vos lectures.
              </li>
            </ol>
            <p>
              En cours de route, vous répondrez à des questions à choix
              multiples pour vérifier votre compréhension des données de
              séquençage.
            </p>
            <p>Allez au laboratoire et commençons !</p>
          </div>
        ),
        PT: (
          <div className="flex flex-col gap-4 font-helvetica [fontSize:15px]">
            <p>
              É o seu primeiro dia no laboratório de genômica da malária. Você
              está muito animado para começar a analisar os dados, pois acabou
              de fazer um curso online onde aprendeu sobre todas as grandes
              coisas que poderiam ser feitas com dados de sequência.
            </p>
            <p>
              A instalação de sequenciamento envia um e-mail informando que os
              resultados da sua corrida mais recente estão de volta.
              Infelizmente, o tecnólogo de laboratório está com gripe e o
              bioinformacionista da sua equipe viajou para uma conferência,
              então você não sabe nada sobre o ensaio que foi realizado ou qual
              software usar. Não desanimado, você planeja analisar os dados
              mesmo assim!
            </p>
            <p>
              Você será capaz de entender seus dados e desvendar os segredos
              escondidos em suas leituras geradas pelo sequenciador?
            </p>
            <p>
              Se você estiver usando uma tela sensível ao toque, é recomendável
              que você continue a atividade com a barra lateral fechada.
            </p>
          </div>
        ),
      },
    },
  },
  1: {
    0: {
      // title: (
      //   <h5>Step 1. Align Sequencer Generated Reads to the Reference Genome</h5>
      // ),
      // instructions: (
      //   <div className="flex flex-col gap-4">
      //     <p>
      //       Below is the reference genome, a sequence of 51 DNA base letters A,
      //       G, C, and T.
      //     </p>
      //     <p>
      //       You are tasked with aligning the reads, sequences of 15 DNA base
      //       letters in this example, to the matching part of the reference
      //       genome. Do this by dragging the sequence to the correct part of the
      //       reference genome.
      //     </p>
      //     <p>
      //       Once all the reads are placed correctly, continue the activity to
      //       answer some questions.
      //     </p>
      //   </div>
      // ),
      titles: {
        EN: (
          <h5>
            Step 1. Align Sequencer Generated Reads to the Reference Genome
          </h5>
        ),
        FR: (
          <h5>
            Étape 1. Alignez les lectures générées par le séquenceur au génome
            de référence
          </h5>
        ),
        PT: (
          <h5>
            Etapa 1. Alinhe as leituras geradas pelo sequenciador ao genoma de
            referência
          </h5>
        ),
      },
      instructions: {
        EN: (
          <div className="flex flex-col gap-4">
            <p>
              Below is the reference genome, a sequence of 51 DNA base letters
              A, G, C, and T.
            </p>
            <p>
              You are tasked with aligning the reads, sequences of 15 DNA base
              letters in this example, to the matching part of the reference
              genome. Do this by dragging the sequence to the correct part of
              the reference genome.
            </p>
            <p>
              Once all the reads are placed correctly, continue the activity to
              answer some questions.
            </p>
          </div>
        ),
        FR: (
          <div className="flex flex-col gap-4">
            <p>
              Ci-dessous se trouve le génome de référence, une séquence de 51
              lettres de bases d'ADN A, G, C et T.
            </p>
            <p>
              Votre tâche consiste à aligner les lectures, séquences de 15
              lettres de bases d'ADN dans cet exemple, à la partie
              correspondante du génome de référence. Pour ce faire, faites
              glisser la séquence vers la partie correcte du génome de
              référence.
            </p>
            <p>
              Une fois toutes les lectures correctement placées, continuez
              l'activité pour répondre à quelques questions.
            </p>
          </div>
        ),
        PT: (
          <div className="flex flex-col gap-4">
            <p>
              Abaixo está o genoma de referência, uma sequência de 51 letras
              base de DNA A, G, C e T.
            </p>
            <p>
              A sua tarefa é alinhar as leituras, sequências de 15 letras de
              base de DNA neste exemplo, ao local correspondente no genoma de
              referência. Faça isso arrastando a sequência para a parte correta
              do genoma de referência.
            </p>
            <p>
              Assim que todas as leituras estiverem corretamente posicionadas,
              continue a atividade para responder a algumas perguntas.
            </p>
          </div>
        ),
      },
    },
    1: {
      // title: (
      //   <h5>Step 1. Align Sequencer Generated Reads to the Reference Genome</h5>
      // ),
      // instructions: (
      //   <div className="flex flex-col gap-4">
      //     <p>
      //       Below is the reference genome, a sequence of 51 DNA base letters A,
      //       G, C, and T.
      //     </p>
      //     <p>
      //       You are tasked with dragging the <i>reads</i>, sequences of 15 DNA
      //       base letters, to the matching part of the reference genome. There
      //       are ten reads in total and none contain any errors or mutations at
      //       this point.
      //     </p>
      //     <p>
      //       Once all the reads are placed correctly, continue the activity to
      //       answer some questions.
      //     </p>
      //   </div>
      // ),
      titles: {
        EN: <h5>Knowledge Check</h5>,
        FR: <h5>Vérification de Connaissance</h5>,
        PT: <h5>Checagem de Conhecimento</h5>,
      },
      instructions: {
        EN: (
          <div className="flex flex-col gap-4">
            <p>
              You have successfully aligned all the reads to the reference
              genome. Now, answer the following questions to check your
              understanding.
            </p>
          </div>
        ),
        FR: (
          <div className="flex flex-col gap-4">
            <p>
              Vous avez réussi à aligner toutes les lectures sur le génome de
              référence. Maintenant, répondez aux questions suivantes pour
              vérifier votre compréhension.
            </p>
          </div>
        ),
        PT: (
          <div className="flex flex-col gap-4">
            <p>
              Você alinhou com sucesso todas as leituras ao genoma de
              referência. Agora, responda às seguintes perguntas para verificar
              seu entendimento.
            </p>
          </div>
        ),
      },
    },
    2: {
      // title: <h5>Match sequencer generated reads to the reference genome</h5>,
      // instructions: (
      //   <div className="flex flex-col gap-4">
      //     <p>
      //       Below is the reference genome, a sequence of 51 DNA base letters A,
      //       G, C, and T.
      //     </p>
      //     <p>
      //       You are tasked with dragging the <i>reads</i>, sequences of 15 DNA
      //       base letters, to the matching part of the reference genome. There
      //       are ten reads in total and none contain any errors or mutations at
      //       this point.
      //     </p>
      //     <p>
      //       Once all the reads are placed correctly, continue the activity to
      //       answer some questions.
      //     </p>
      //   </div>
      // ),
      titles: {
        EN: <h5>Match sequencer generated reads to the reference genome</h5>,
        FR: (
          <h5>
            Faites correspondre les lectures générées par le séquenceur au
            génome de référence
          </h5>
        ),
        PT: (
          <h5>
            Faça a correspondência das leituras geradas pelo sequenciador com o
            genoma de referência
          </h5>
        ),
      },
      instructions: {
        EN: (
          <div className="flex flex-col gap-4">
            <p>
              Below is the reference genome, a sequence of 51 DNA base letters
              A, G, C, and T.
            </p>
            <p>
              You are tasked with dragging the <i>reads</i>, sequences of 15 DNA
              base letters, to the matching part of the reference genome. There
              are ten reads in total and none contain any errors or mutations at
              this point.
            </p>
            <p>
              Once all the reads are placed correctly, continue the activity to
              answer some questions.
            </p>
          </div>
        ),
        FR: (
          <div className="flex flex-col gap-4">
            <p>
              Ci-dessous se trouve le génome de référence, une séquence de 51
              lettres de bases d'ADN A, G, C et T.
            </p>
            <p>
              Votre tâche consiste à faire glisser les <i>lectures</i>,
              séquences de 15 lettres de bases d'ADN, vers la partie
              correspondante du génome de référence. Il y a dix lectures au
              total et aucune ne contient d'erreurs ou de mutations à ce stade.
            </p>
            <p>
              Une fois toutes les lectures correctement placées, continuez
              l'activité pour répondre à quelques questions.
            </p>
          </div>
        ),
        PT: (
          <div className="flex flex-col gap-4">
            <p>
              Abaixo está o genoma de referência, uma sequência de 51 letras
              base de DNA A, G, C e T.
            </p>
            <p>
              A sua tarefa é arrastar as <i>leituras</i>, sequências de 15
              letras base de DNA, para a parte correspondente do genoma de
              referência. Existem dez leituras no total e nenhuma contém erros
              ou mutações neste ponto.
            </p>
            <p>
              Assim que todas as leituras estiverem corretamente posicionadas,
              continue a atividade para responder a algumas perguntas.
            </p>
          </div>
        ),
      },
    },
    3: {
      // title: <h5>Match sequencer generated reads to the reference genome</h5>,
      // instructions: (
      //   <div className="flex flex-col gap-4">
      //     <p>
      //       Below is the reference genome, a sequence of 51 DNA base letters A,
      //       G, C, and T.
      //     </p>
      //     <p>
      //       You are tasked with dragging the <i>reads</i>, sequences of 15 DNA
      //       base letters, to the matching part of the reference genome. There
      //       are ten reads in total and none contain any errors or mutations at
      //       this point.
      //     </p>
      //     <p>
      //       Once all the reads are placed correctly, continue the activity to
      //       answer some questions below.
      //     </p>
      //   </div>
      // ),
      titles: {
        EN: <h5>Match sequencer generated reads to the reference genome</h5>,
        FR: (
          <h5>
            Faites correspondre les lectures générées par le séquenceur au
            génome de référence
          </h5>
        ),
        PT: (
          <h5>
            Faça a correspondência das leituras geradas pelo sequenciador com o
            genoma de referência
          </h5>
        ),
      },
      instructions: {
        EN: (
          <div className="flex flex-col gap-4">
            <p>
              Below is the reference genome, a sequence of 51 DNA base letters
              A, G, C, and T.
            </p>
            <p>
              You are tasked with dragging the <i>reads</i>, sequences of 15 DNA
              base letters, to the matching part of the reference genome. There
              are ten reads in total and none contain any errors or mutations at
              this point.
            </p>
            <p>
              Once all the reads are placed correctly, continue the activity to
              answer some questions below.
            </p>
          </div>
        ),
        FR: (
          <div className="flex flex-col gap-4">
            <p>
              Ci-dessous se trouve le génome de référence, une séquence de 51
              lettres de bases d'ADN A, G, C et T.
            </p>
            <p>
              Votre tâche consiste à faire glisser les <i>lectures</i>,
              séquences de 15 lettres de bases d'ADN, vers la partie
              correspondante du génome de référence. Il y a dix lectures au
              total et aucune ne contient d'erreurs ou de mutations à ce stade.
            </p>
            <p>
              Une fois toutes les lectures correctement placées, continuez
              l'activité pour répondre à quelques questions ci-dessous.
            </p>
          </div>
        ),
        PT: (
          <div className="flex flex-col gap-4">
            <p>
              Abaixo está o genoma de referência, uma sequência de 51 letras
              base de DNA A, G, C e T.
            </p>
            <p>
              A sua tarefa é arrastar as <i>leituras</i>, sequências de 15
              letras base de DNA, para a parte correspondente do genoma de
              referência. Existem dez leituras no total e nenhuma contém erros
              ou mutações neste ponto.
            </p>
            <p>
              Assim que todas as leituras estiverem corretamente posicionadas,
              continue a atividade para responder a algumas perguntas abaixo.
            </p>
          </div>
        ),
      },
    },
  },
  2: {
    0: {
      titles: {
        EN: (
          <h5>
            Match Sequencer Generated Reads with Mutations and Errors to the
            Reference Genome
          </h5>
        ),
        FR: (
          <h5>
            Faites correspondre les lectures générées par le séquenceur avec des
            mutations et des erreurs au génome de référence
          </h5>
        ),
        PT: (
          <h5>
            Faça a correspondência das leituras geradas pelo sequenciador com
            mutações e erros ao genoma de referência
          </h5>
        ),
      },
      instructions: {
        EN: (
          <div className="flex flex-col gap-4">
            <p>
              Match the reads to the corresponding part of the reference genome.
            </p>
            <p>
              This time, some of the reads will contain mutations (SNPs),
              amplification or sequencing errors that will appear like SNP
              mutations but be "false mutations" (these tend to be seen in few
              reads, making them easier to detect), off target sequences (reads
              that will not align anywhere), and chimera errors (reads where
              part of the sequence aligns in one place and another part aligns
              in another place). You will place these reads in the trash. You
              can click on reads in the trash to remove them from the trash.
            </p>
            <p>
              Once all the reads are placed correctly, continue the activity to
              answer some questions below.
            </p>
          </div>
        ),
        FR: (
          <div className="flex flex-col gap-4">
            <p>
              Faites correspondre les lectures à la partie correspondante du
              génome de référence.
            </p>
            <p>
              Cette fois, certaines des lectures contiendront des mutations
              (SNP), des erreurs d'amplification ou de séquençage qui
              apparaîtront comme des mutations SNP mais seront de "fausses
              mutations" (celles-ci ont tendance à être vues dans peu de
              lectures, ce qui les rend plus faciles à détecter), des séquences
              hors cible (lectures qui ne s'aligneront nulle part), et des
              erreurs chimériques (lectures où une partie de la séquence
              s'aligne à un endroit et une autre àun autre endroit). Vous
              placerez ces lectures à la poubelle. Vous pouvez cliquer sur les
              lectures dans la poubelle pour les en retirer.
            </p>
            <p>
              Une fois toutes les lectures correctement placées, continuez
              l'activité pour répondre à quelques questions ci-dessous.
            </p>
          </div>
        ),
        PT: (
          <div className="flex flex-col gap-4">
            <p>
              Faça a correspondência das leituras com a parte correspondente do
              genoma de referência.
            </p>
            <p>
              Desta vez, algumas das leituras conterão mutações (SNPs), erros de
              amplificação ou sequenciamento que aparecerão como mutações SNP,
              mas serão "falsas mutações" (estas tendem a ser vistas em poucas
              leituras, tornando-as mais fáceis de detectar), sequências fora do
              alvo (leituras que não se alinharão em nenhum lugar) e erros de
              quimera (leituras onde parte da sequência se alinha em um lugar e
              outra parte se alinha em outro lugar). Você colocará essas
              leituras no lixo. Você pode clicar nas leituras no lixo para
              removê-las do lixo.
            </p>
            <p>
              Assim que todas as leituras estiverem corretamente posicionadas,
              continue a atividade para responder a algumas perguntas abaixo.
            </p>
          </div>
        ),
      },
      // title: (
      //   <h5>
      //     Match Sequencer Generated Reads with Mutations and Errors to the
      //     Reference Genome
      //   </h5>
      // ),
      // instructions: (
      //   <div className="flex flex-col gap-4">
      //     <p>
      //       Match the reads to the corresponding part of the reference genome.
      //     </p>
      //     <p>
      //       This time, some of the reads will contain mutations (SNPs),
      //       amplification or sequencing errors that will appear like SNP
      //       mutations but be "false mutations" (these tend to be seen in few
      //       reads, making them easier to detect), off target sequences (reads
      //       that will not align anywhere), and chimera errors (reads where part
      //       of the sequence aligns in one place and another part aligns in
      //       another place). You will place these reads in the trash. You can
      //       click on reads in the trash to remove them from the trash.
      //     </p>
      //     <p>
      //       Once all the reads are placed correctly, continue the activity to
      //       answer some questions below.
      //     </p>
      //   </div>
      // ),
    },
    1: {
      titles: {
        EN: (
          <h5>
            Match Sequencer Generated Reads with Mutations and Errors to the
            Reference Genome
          </h5>
        ),
        FR: (
          <h5>
            Faites correspondre les lectures générées par le séquenceur avec des
            mutations et des erreurs au génome de référence
          </h5>
        ),
        PT: (
          <h5>
            Faça a correspondência das leituras geradas pelo sequenciador com
            mutações e erros ao genoma de referência
          </h5>
        ),
      },
      instructions: {
        EN: (
          <div className="flex flex-col gap-4">
            <p>
              Match the reads to the corresponding part of the reference genome.
            </p>
            <p>
              This time, some of the reads will contain mutations (SNPs),
              amplification or sequencing errors that will appear like SNP
              mutations but be "false mutations" (these tend to be seen in few
              reads, making them easier to detect), off target sequences (reads
              that will not align anywhere), and chimera errors (reads where
              part of the sequence aligns in one place and another part aligns
              in another place). You will place these reads in the trash. You
              can click on reads in the trash to remove them from the trash.
            </p>
            <p>
              Once all the reads are placed correctly, continue the activity to
              answer some questions below.
            </p>
          </div>
        ),
        FR: (
          <div className="flex flex-col gap-4">
            <p>
              Faites correspondre les lectures à la partie correspondante du
              génome de référence.
            </p>
            <p>
              Cette fois, certaines des lectures contiendront des mutations
              (SNP), des erreurs d'amplification ou de séquençage qui
              apparaîtront comme des mutations SNP mais seront de "fausses
              mutations" (celles-ci ont tendance à être vues dans peu de
              lectures, ce qui les rend plus faciles à détecter), des séquences
              hors cible (lectures qui ne s'aligneront nulle part), et des
              erreurs chimériques (lectures où une partie de la séquence
              s'aligne à un endroit et une autre àun autre endroit). Vous
              placerez ces lectures à la poubelle. Vous pouvez cliquer sur les
              lectures dans la poubelle pour les en retirer.
            </p>
            <p>
              Une fois toutes les lectures correctement placées, continuez
              l'activité pour répondre à quelques questions ci-dessous.
            </p>
          </div>
        ),
        PT: (
          <div className="flex flex-col gap-4">
            <p>
              Faça a correspondência das leituras com a parte correspondente do
              genoma de referência.
            </p>
            <p>
              Desta vez, algumas das leituras conterão mutações (SNPs), erros de
              amplificação ou sequenciamento que aparecerão como mutações SNP,
              mas serão "falsas mutações" (estas tendem a ser vistas em poucas
              leituras, tornando-as mais fáceis de detectar), sequências fora do
              alvo (leituras que não se alinharão em nenhum lugar) e erros de
              quimera (leituras onde parte da sequência se alinha em um lugar e
              outra parte se alinha em outro lugar). Você colocará essas
              leituras no lixo. Você pode clicar nas leituras no lixo para
              removê-las do lixo.
            </p>
            <p>
              Assim que todas as leituras estiverem corretamente posicionadas,
              continue a atividade para responder a algumas perguntas abaixo.
            </p>
          </div>
        ),
      },
      // title: (
      //   <h5>
      // Match Sequencer Generated Reads with Mutations and Errors to the
      // Reference Genome
      //   </h5>
      // ),
      // instructions: (
      // <div className="flex flex-col gap-4">
      //   <p>
      //     Match the reads to the corresponding part of the reference genome.
      //   </p>
      //   <p>
      //     This time, some of the reads will contain mutations (SNPs),
      //     amplification or sequencing errors that will appear like SNP
      //     mutations but be "false mutations" (these tend to be seen in few
      //     reads, making them easier to detect), off target sequences (reads
      //     that will not align anywhere), and chimera errors (reads where part
      //     of the sequence aligns in one place and another part aligns in
      //     another place). You will place these reads in the trash. You can
      //     click on reads in the trash to remove them from the trash.
      //   </p>
      //   <p>
      //     Once all the reads are placed correctly, continue the activity to
      //     answer some questions below.
      //   </p>
      // </div>
      // ),
    },
    2: {
      titles: {
        EN: <h5>Identify Genotyping Errors</h5>,
        FR: <h5>Identifier les erreurs de génotypage</h5>,
        PT: <h5>Identificar erros de genotipagem</h5>,
      },
      instructions: {
        EN: (
          <div className="flex flex-col gap-4">
            <p>
              You have correctly filtered out the chimera and off target errors,
              but there are still genotyping errors (false mutations) present in
              the data. For our purposes, we will consider a false mutation a
              site (DNA base) where only one read has an alternate allele.
            </p>
            <p>
              Identify and select any false mutations present in the reads
              below. Once you have identified all false mutations, answer the
              questions below.
            </p>
          </div>
        ),
        FR: (
          <div className="flex flex-col gap-4">
            <p>
              Vous avez correctement filtré les erreurs de chimère et hors
              cible, mais il y a toujours des erreurs de génotypage (fausses
              mutations) présentes dans les données. Pour nos besoins, nous
              considérerons une fausse mutation comme un site (base d'ADN) où
              une seule lecture présente un allèle alternatif.
            </p>
            <p>
              Identifiez et sélectionnez toutes les fausses mutations présentes
              dans les lectures ci-dessous. Une fois que vous avez identifié
              toutes les fausses mutations, répondez aux questions ci-dessous.
            </p>
          </div>
        ),
        PT: (
          <div className="flex flex-col gap-4">
            <p>
              Você filtrou corretamente os erros de quimera e fora do alvo, mas
              ainda há erros de genotipagem (falsas mutações) presentes nos
              dados. Para nossos propósitos, consideraremos uma falsa mutação um
              sítio (base de DNA) onde apenas uma leitura possui um alelo
              alternativo.
            </p>
            <p>
              Identifique e selecione quaisquer falsas mutações presentes nas
              leituras abaixo. Assim que tiver identificado todas as falsas
              mutações, responda às perguntas abaixo.
            </p>
          </div>
        ),
      },
      // title: <h5>Identify Genotyping Errors</h5>,
      // instructions: (
      //   <div className="flex flex-col gap-4">
      //     <p>
      //       You have correctly filtered out the chimera and off target errors,
      //       but there are still genotyping errors (false mutations) present in
      //       the data. For our purposes, we will consider a false mutation a site
      //       (DNA base) where only one read has an alternate allele.
      //     </p>
      //     <p>
      //       Identify and select any false mutations present in the reads below.
      //       Once you have identified all false mutations, answer the questions
      //       below.
      //     </p>
      //   </div>
      // ),
    },
    3: {
      titles: {
        EN: <h5>Identify Genotyping Errors</h5>,
        FR: <h5>Identifier les erreurs de génotypage</h5>,
        PT: <h5>Identificar erros de genotipagem</h5>,
      },
      instructions: {
        EN: (
          <div className="flex flex-col gap-4">
            <p>
              You have correctly filtered out the chimera and off target errors,
              but there are still genotyping errors (false mutations) present in
              the data. For our purposes, we will consider a false mutation a
              site (DNA base) where only one read has an alternate allele.
            </p>
            <p>
              Identify and select any false mutations present in the reads
              below. Once you have identified all false mutations, answer the
              questions below.
            </p>
          </div>
        ),
        PT: (
          <div className="flex flex-col gap-4">
            <p>
              Você filtrou corretamente os erros de quimera e fora do alvo, mas
              ainda há erros de genotipagem (falsas mutações) presentes nos
              dados. Para nossos propósitos, consideraremos uma falsa mutação um
              sítio (base de DNA) onde apenas uma leitura possui um alelo
              alternativo.
            </p>
            <p>
              Identifique e selecione quaisquer falsas mutações presentes nas
              leituras abaixo. Assim que tiver identificado todas as falsas
              mutações, responda às perguntas abaixo.
            </p>
          </div>
        ),
        FR: (
          <div className="flex flex-col gap-4">
            <p>
              Você filtrou corretamente os erros de quimera e fora do alvo, mas
              ainda há erros de genotipagem (falsas mutações) presentes nos
              dados. Para nossos propósitos, consideraremos uma falsa mutação um
              sítio (base de DNA) onde apenas uma leitura possui um alelo
              alternativo.
            </p>
            <p>
              Identifique e selecione quaisquer falsas mutações presentes nas
              leituras abaixo. Assim que tiver identificado todas as falsas
              mutações, responda às perguntas abaixo.
            </p>
          </div>
        ),
      },
      // title: <h5>Identify Genotyping Errors</h5>,
      // instructions: (
      //   <div className="flex flex-col gap-4">
      //     <p>
      //       You have correctly filtered out the chimera and off target errors,
      //       but there are still genotyping errors (false mutations) present in
      //       the data. For our purposes, we will consider a false mutation a site
      //       (DNA base) where only one read has an alternate allele.
      //     </p>
      //     <p>
      //       Identify and select any false mutations present in the reads below.
      //       Once you have identified all false mutations, answer the questions
      //       below.
      //     </p>
      //   </div>
      // ),
    },
    // 2: {
    //   title: (
    //     <h5>
    //       Match sequencer generated reads to the reference genome &ndash; this
    //       time with mutations and errors
    //     </h5>
    //   ),
    //   instructions: (
    //     <div className="flex flex-col gap-4">
    //       <p></p>
    //     </div>
    //   ),
    // },
  },
  3: {
    0: {
      // title: <h5>Identify Mutations</h5>,
      titles: {
        EN: <h5>Identify Mutations</h5>,
        FR: <h5>Identifier les mutations</h5>,
        PT: <h5>Identificar mutações</h5>,
      },
      // instructions: (
      //   <div className="flex flex-col gap-4">
      //     <p>
      //       Now that you have removed all the errors, the remaining bases that
      //       are different from the reference genome represent mutations, or
      //       alternate alleles.
      //     </p>
      //     <p>
      //       View the same reads that were matched to the reference genome in the
      //       last step. Click the letters in the reads where you see the
      //       mutations, changing the appearance of the letters from normal to
      //       hollow text. Mutations in the genome of malaria parasites will show
      //       up as DNA bases in sequencing reads which are different from the
      //       reference sequence, such as the hollow A, C, T, and C alternate
      //       alleles (SNPs) shown below. When you have identified all the
      //       mutations, answer the questions below.
      //     </p>
      //   </div>
      // ),
      instructions: {
        EN: (
          <div className="flex flex-col gap-4">
            <p>
              Now that you have removed all the errors, the remaining bases that
              are different from the reference genome represent mutations, or
              alternate alleles.
            </p>
            <p>
              View the same reads that were matched to the reference genome in
              the last step. Click the letters in the reads where you see the
              mutations, changing the appearance of the letters from normal to
              hollow text. Mutations in the genome of malaria parasites will
              show up as DNA bases in sequencing reads which are different from
              the reference sequence, such as the hollow A, C, T, and C
              alternate alleles (SNPs) shown below. When you have identified all
              the mutations, answer the questions below.
            </p>
          </div>
        ),
        FR: (
          <div className="flex flex-col gap-4">
            <p>
              Maintenant que vous avez supprimé toutes les erreurs, les bases
              restantes qui sont différentes du génome de référence représentent
              des mutations, ou des allèles alternatifs.
            </p>
            <p>
              Visualisez les mêmes lectures qui ont été associées au génome de
              référence à l'étape précédente. Cliquez sur les lettres dans les
              lectures où vous voyez les mutations, changeant l'apparence des
              lettres de normale à un texte creux. Les mutations dans le génome
              des parasites du paludisme apparaîtront comme des bases d'ADN dans
              les lectures de séquençage qui sont différentes de la séquence de
              référence, telles que les allèles alternatifs (SNP) A, C, T et C
              creux montrés ci-dessous. Lorsque vous avez identifié toutes les
              mutations, répondez aux questions ci-dessous.
            </p>
          </div>
        ),
        PT: (
          <div className="flex flex-col gap-4">
            <p>
              Agora que você removeu todos os erros, as bases restantes que são
              diferentes do genoma de referência representam mutações, ou alelos
              alternativos.
            </p>
            <p>
              Visualize as mesmas leituras que foram pareadas com o genoma de
              referência na última etapa. Clique nas letras nas leituras onde
              você vê as mutações, mudando a aparência das letras de normal para
              texto vazado. Mutações no genoma de parasitas da malária
              aparecerão como bases de DNA em leituras de sequenciamento que são
              diferentes da sequência de referência, como os alelos alternativos
              (SNPs) A, C, T e C vazados mostrados abaixo. Quando você tiver
              identificado todas as mutações, responda às perguntas abaixo.
            </p>
          </div>
        ),
      },
    },
    1: {
      // title: <h5>Identify Mutations</h5>,
      titles: {
        EN: <h5>Identify Mutations</h5>,
        FR: <h5>Identifier les mutations</h5>,
        PT: <h5>Identificar mutações</h5>,
      },
      // instructions: (
      //   <div className="flex flex-col gap-4">
      //     <p>
      //       Now that you have removed all the errors, the remaining bases that
      //       are different from the reference genome represent mutations, or
      //       alternate alleles.
      //     </p>
      //     <p>
      //       View the same reads that were matched to the reference genome in the
      //       last step. Click the letters in the reads where you see the
      //       mutations, changing the appearance of the letters from normal to
      //       hollow text. Mutations in the genome of malaria parasites will show
      //       up as DNA bases in sequencing reads which are different from the
      //       reference sequence, such as the hollow A, C, T, and C alternate
      //       alleles (SNPs) shown below. When you have identified all the
      //       mutations, answer the questions below.
      //     </p>
      //   </div>
      // ),
      instructions: {
        EN: (
          <div className="flex flex-col gap-4">
            <p>
              Now that you have removed all the errors, the remaining bases that
              are different from the reference genome represent mutations, or
              alternate alleles.
            </p>
            <p>
              View the same reads that were matched to the reference genome in
              the last step. Click the letters in the reads where you see the
              mutations, changing the appearance of the letters from normal to
              hollow text. Mutations in the genome of malaria parasites will
              show up as DNA bases in sequencing reads which are different from
              the reference sequence, such as the hollow A, C, T, and C
              alternate alleles (SNPs) shown below. When you have identified all
              the mutations, answer the questions below.
            </p>
          </div>
        ),
        FR: (
          <div className="flex flex-col gap-4">
            <p>
              Maintenant que vous avez supprimé toutes les erreurs, les bases
              restantes qui sont différentes du génome de référence représentent
              des mutations, ou des allèles alternatifs.
            </p>
            <p>
              Visualisez les mêmes lectures qui ont été associées au génome de
              référence à l'étape précédente. Cliquez sur les lettres dans les
              lectures où vous voyez les mutations, changeant l'apparence des
              lettres de normale à un texte creux. Les mutations dans le génome
              des parasites du paludisme apparaîtront comme des bases d'ADN dans
              les lectures de séquençage qui sont différentes de la séquence de
              référence, telles que les allèles alternatifs (SNPs) A, C, T et C
              creux montrés ci-dessous. Lorsque vous avez identifié toutes les
              mutations, répondez aux questions ci-dessous.
            </p>
          </div>
        ),
        PT: (
          <div className="flex flex-col gap-4">
            <p>
              Agora que você removeu todos os erros, as bases restantes que são
              diferentes do genoma de referência representam mutações, ou alelos
              alternativos.
            </p>
            <p>
              Visualize as mesmas leituras que foram pareadas com o genoma de
              referência na última etapa. Clique nas letras nas leituras onde
              você vê as mutações, mudando a aparência das letras de normal para
              texto vazado. Mutações no genoma de parasitas da malária
              aparecerão como bases de DNA em leituras de sequenciamento que são
              diferentes da sequência de referência, como os alelos alternativos
              (SNPs) A, C, T e C vazados mostrados abaixo. Quando você tiver
              identificado todas as mutações, responda às perguntas abaixo.
            </p>
          </div>
        ),
      },
    },
    2: {
      // title: <h5>Estimating MOI</h5>,
      titles: {
        EN: <h5>Estimating MOI</h5>,
        FR: <h5>Estimation du MOI</h5>,
        PT: <h5>Estimando o MOI</h5>,
      },
      // instructions: (
      //   <p>
      //     With the microhaplotypes identified for both loci, we can determine
      //     the MOI. Answer the question below.
      //   </p>
      // ),
      instructions: {
        EN: (
          <p>
            With the microhaplotypes identified for both loci, we can determine
            the MOI. Answer the question below.
          </p>
        ),
        FR: (
          <p>
            Avec les microhaplotypes identifiés pour les deux loci, nous pouvons
            déterminer le MOI. Répondez à la question ci-dessous.
          </p>
        ),
        PT: (
          <p>
            Com os microhaplótipos identificados para ambos os loci, podemos
            determinar o MOI. Responda à pergunta abaixo.
          </p>
        ),
      },
    },
    3: {
      // title: <h5>Summary</h5>,
      titles: {
        EN: <h5>Summary</h5>,
        FR: <h5>Résumé</h5>,
        PT: <h5>Resumo</h5>,
      },
      instructions: {
        EN: (
          <div>
            <p>
              Great work! You identified the loci and read depth by aligning
              reads to the reference genome. You then identified a chimeric read
              and two off-target reads that were not useful and corrected two
              PCR or sequencing errors that showed up as false alleles. Finally,
              you used the microhaplotypes to identify the MOI of the samples
              and rule out antimalarial resistance. While the example in this
              exercise is a simplification of the much larger datasets that are
              produced by sequencing and that would be very challenging to
              analyze manually, bioinformatic pipelines take very similar steps
              to call alleles and produce final sequence data.
            </p>
            <div className="py-8">
              <ModuleCopyCode lang={"EN"} code="HildaHudson1881" />
            </div>
          </div>
        ),
        FR: (
          <div className="flex flex-col gap-4">
            <p>
              Excellent travail ! Vous avez identifié les loci et la profondeur
              de lecture en alignant les lectures sur le génome de référence.
              Vous avez ensuite identifié une lecture chimérique et deux
              lectures hors cible qui n'étaient pas utiles et corrigé deux
              erreurs de PCR ou de séquençage qui apparaissaient comme de faux
              allèles. Enfin, vous avez utilisé les microhaplotypes pour
              identifier le MOI des échantillons et exclure la résistance aux
              antipaludiques. Bien que l'exemple de cet exercice soit une
              simplification des ensembles de données beaucoup plus importants
              produits par le séquençage et qui seraient très difficiles à
              analyser manuellement, les pipelines bioinformatiques suivent des
              étapes très similaires pour appeler les allèles et produire les
              données de séquence finales.
            </p>
            <div className="py-8">
              <ModuleCopyCode lang={"FR"} code="HildaHudson1881" />
            </div>
          </div>
        ),
        PT: (
          <div className="flex flex-col gap-4">
            <p>
              Ótimo trabalho! Você identificou os loci e a profundidade de
              leitura alinhando as leituras ao genoma de referência. Em seguida,
              você identificou uma leitura quimérica eduas leituras fora do alvo
              que não eram úteis e corrigiu dois erros de PCR ou sequenciamento
              que apareceram como alelos falsos. Finalmente, você usou os
              microhaplótipos para identificar o MOI das amostras e descartar a
              resistência antimalárica. Embora o exemplo neste exercício seja
              uma simplificação dos conjuntos de dados muito maiores que são
              produzidos pelo sequenciamento e que seriam muito desafiadores
              para analisar manualmente, os pipelines bioinformáticos seguem
              etapas muito semelhantes para chamar alelos e produzir dados de
              sequência finais.
            </p>
            <div className="py-8">
              <ModuleCopyCode lang={"PT"} code="HildaHudson1881" />
            </div>
          </div>
        ),
      },
      // instructions: (
      //   <div>
      //     <p>
      //       Great work! You identified the loci and read depth by aligning reads
      //       to the reference genome. You then identified a chimeric read and two
      //       off-target reads that were not useful and corrected two PCR or
      //       sequencing errors that showed up as false alleles. Finally, you used
      //       the microhaplotypes to identify the MOI of the samples and rule out
      //       antimalarial resistance. While the example in this exercise is a
      //       simplification of the much larger datasets that are produced by
      //       sequencing and that would be very challenging to analyze manually,
      //       bioinformatic pipelines take very similar steps to call alleles and
      //       produce final sequence data.
      //     </p>
      //     <div className="py-8">
      //       <ModuleCopyCode code="HildaHudson1881" />
      //     </div>{" "}
      //   </div>
      // ),
    },
  },
};

export default function DragDropPrompts({
  lang = "EN",
}: {
  lang: "EN" | "FR" | "PT";
}) {
  // const phase = useAtomValue(phase3Atom);
  const [currentView, setCurrentView] = useAtom(currentView3Atom);
  let { section, phase } = currentView;
  const completion = useAtomValue(dragDropCompletionAtom);
  const prevPhase = usePrevious(phase, 0);
  const forwards = phase >= prevPhase.current ? true : false;
  const chimaeraPlaced = useAtomValue(chimaeraPlacedAtom);
  const [questions, setQuestions] = useAtom(dragDropQuestionsAtom);

  const answerQuestion = useCallback(
    (questionIdx: number, answerIdx: number) => {
      if (questions[questionIdx] === answerIdx) {
        setQuestions({ ...questions, [questionIdx]: null });
      } else {
        setQuestions({ ...questions, [questionIdx]: answerIdx });
      }
    },
    [questions, setQuestions],
  );

  const complete = completion[phase];
  const skippable = false;

  const title =
    dragDropSections?.[section ?? 0]?.[phase]?.titles?.[lang] ??
    dragDropSections?.[section ?? 0]?.[phase]?.title;
  const instructions =
    dragDropSections?.[section ?? 0]?.[phase]?.instructions[lang] ??
    dragDropSections?.[section ?? 0]?.[phase]?.instructions;

  return (
    <div>
      {/* {JSON.stringify(currentView)} */}

      <InteractivePrompt
        lang={lang}
        complete={completion?.[section ?? 0]?.[phase]}
        instructions={instructions}
        title={title}
        // instructions={
        //   dragDropSections[phase] ? dragDropSections[phase] : null
        // }
        // title={dragDropSections[phase] ? dragDropSections[phase] : null}
      />
      {section === 2 && phase >= 2 && (
        <div role="img" className="mb-8 mt-4 flex">
          <div
            role="img"
            aria-label="select false mutations example"
            className="relative mx-auto grid grid-rows-2 place-items-center text-center"
          >
            <div className="absolute -bottom-6 right-2">
              <svg
                width="24pt"
                height="24pt"
                className=" dark:fill-white"
                version="1.1"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // fill="black"
                  d="m999.6 526.8c0-4.8008-2.3984-28.801-24-52.801-22.801-26.398-58.801-40.801-105.6-44.398-4.8008-7.1992-10.801-14.398-20.398-21.602-26.398-20.398-67.199-31.199-120-32.398-4.8008-6-13.199-13.199-22.801-20.398-24-16.801-54-26.398-91.199-30v-97.203c0-9.6016 1.1992-50.398-26.398-79.199-12-13.199-34.801-28.801-73.199-28.801-39.602 0-62.398 15.602-75.602 28.801-25.199 27.602-25.199 63.602-25.199 72v343.2c-22.801-24-48-50.398-62.398-60-30-22.801-86.398-10.801-118.8 13.199-31.199 22.801-42 57.602-30 91.199 21.602 60 75.602 120 88.801 134.4 12 22.801 66 122.4 114 158.4 25.199 19.199 44.398 98.398 49.199 148.8l2.3984 26.398h453.6v-118.8c6-16.801 20.398-52.801 36-69.602 37.199-37.199 49.199-130.8 49.199-159.6l-0.003906-200.39zm-58.801 199.2c0 34.801-14.398 100.8-32.398 118.8-31.199 31.199-50.398 91.199-51.602 97.199l-1.1992 3.6016v69.602l-343.2-0.003906c-2.3984-13.199-4.8008-30-9.6016-48-14.398-57.602-33.602-94.801-58.801-114-34.801-26.398-84-111.6-99.602-142.8l-4.7969-7.2031c0-1.1992-58.801-61.199-79.199-116.4-2.3984-7.1992-2.3984-13.199 6-21.602 15.602-14.398 45.602-18 52.801-15.602 18 14.398 73.199 73.199 104.4 108l51.602 57.602v-497.99c0-4.8008 1.1992-20.398 9.6016-28.801 6-7.1992 16.801-10.801 32.398-10.801 13.199 0 22.801 3.6016 30 9.6016 9.6016 10.801 10.801 30 10.801 37.199v310.8h58.801v-151.2c54 6 69.602 28.801 72 32.398l2.3984 6v112.8h58.801v-99.602c50.398 4.8008 69.602 20.398 74.398 27.602v114h58.801v-87.602c51.602 7.1992 60 34.801 61.199 40.801v195.6z"
                />
              </svg>
            </div>
            <div
              style={{
                aspectRatio: 450 / 48,
              }}
              className="grid w-[340px] italic [grid-template-columns:repeat(17,1fr)]"
            >
              <span className="block translate-y-0.5 text-2xl">A</span>
              {sampleRef.map((el, idx) => {
                return (
                  <span key={idx} className="block translate-y-0.5 text-2xl">
                    {el}
                  </span>
                );
              })}
              <span className="block translate-y-0.5 text-2xl">T</span>
            </div>
            <div
              style={{
                aspectRatio: 450 / 48,
              }}
              className="grid w-[304px] italic [grid-template-columns:repeat(15,1fr)]"
            >
              {sampleRef.map((el, idx) => {
                return (
                  <span
                    // style={
                    //   sampleRead[idx] !== sampleRef[idx]
                    //     ? {
                    //         fontWeight: "600",
                    //         color: "white",
                    //         WebkitTextStroke: "black",
                    //         WebkitTextStrokeWidth: ".75px",
                    //       }
                    //     : {}
                    // }
                    key={idx}
                    className={`${
                      idx === 14 ? " text-[darkorange]" : ""
                    } block translate-y-0.5 text-2xl`}
                  >
                    {idx === 14 ? "T" : el}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {section === 3 && phase < 2 && (
        <div className="mb-8 mt-4 flex">
          <div
            role="img"
            aria-label="select false mutations example"
            className="relative mx-auto grid grid-rows-2 place-items-center text-center"
          >
            <div className="absolute -bottom-6 right-2">
              <svg
                width="24pt"
                height="24pt"
                className="dark:fill-white"
                version="1.1"
                viewBox="0 0 1200 1200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // fill="black"
                  d="m999.6 526.8c0-4.8008-2.3984-28.801-24-52.801-22.801-26.398-58.801-40.801-105.6-44.398-4.8008-7.1992-10.801-14.398-20.398-21.602-26.398-20.398-67.199-31.199-120-32.398-4.8008-6-13.199-13.199-22.801-20.398-24-16.801-54-26.398-91.199-30v-97.203c0-9.6016 1.1992-50.398-26.398-79.199-12-13.199-34.801-28.801-73.199-28.801-39.602 0-62.398 15.602-75.602 28.801-25.199 27.602-25.199 63.602-25.199 72v343.2c-22.801-24-48-50.398-62.398-60-30-22.801-86.398-10.801-118.8 13.199-31.199 22.801-42 57.602-30 91.199 21.602 60 75.602 120 88.801 134.4 12 22.801 66 122.4 114 158.4 25.199 19.199 44.398 98.398 49.199 148.8l2.3984 26.398h453.6v-118.8c6-16.801 20.398-52.801 36-69.602 37.199-37.199 49.199-130.8 49.199-159.6l-0.003906-200.39zm-58.801 199.2c0 34.801-14.398 100.8-32.398 118.8-31.199 31.199-50.398 91.199-51.602 97.199l-1.1992 3.6016v69.602l-343.2-0.003906c-2.3984-13.199-4.8008-30-9.6016-48-14.398-57.602-33.602-94.801-58.801-114-34.801-26.398-84-111.6-99.602-142.8l-4.7969-7.2031c0-1.1992-58.801-61.199-79.199-116.4-2.3984-7.1992-2.3984-13.199 6-21.602 15.602-14.398 45.602-18 52.801-15.602 18 14.398 73.199 73.199 104.4 108l51.602 57.602v-497.99c0-4.8008 1.1992-20.398 9.6016-28.801 6-7.1992 16.801-10.801 32.398-10.801 13.199 0 22.801 3.6016 30 9.6016 9.6016 10.801 10.801 30 10.801 37.199v310.8h58.801v-151.2c54 6 69.602 28.801 72 32.398l2.3984 6v112.8h58.801v-99.602c50.398 4.8008 69.602 20.398 74.398 27.602v114h58.801v-87.602c51.602 7.1992 60 34.801 61.199 40.801v195.6z"
                />
              </svg>
            </div>
            <div
              style={{
                aspectRatio: 450 / 48,
              }}
              className="grid w-[340px] italic [grid-template-columns:repeat(17,1fr)]"
            >
              <span className="block pt-0.5 text-2xl">A</span>
              {sampleRef.map((el, idx) => {
                return (
                  <span key={idx} className="block pt-0.5 text-2xl">
                    {el}
                  </span>
                );
              })}
              <span className="block pt-0.5 text-2xl">T</span>
            </div>
            <div
              style={{
                aspectRatio: 450 / 48,
              }}
              className="grid w-[304px]  italic [grid-template-columns:repeat(15,1fr)]"
            >
              {sampleRead.map((el, idx) => {
                return (
                  <span
                    // style={
                    //   sampleRead[idx] !== sampleRef[idx]
                    //     ? {
                    //         fontWeight: "600",
                    //         color: "white",
                    //         WebkitTextStrokeColor: "black",
                    //         WebkitTextStrokeWidth: ".75px",
                    //       }
                    //     : {}
                    // }
                    key={idx}
                    className={`${
                      sampleRead[idx] !== sampleRef[idx]
                        ? "alternateAllele2"
                        : ""
                    } ${
                      idx === 14 ? "bg-primaryGreen/50 " : ""
                    } block pt-0.5 text-2xl`}
                  >
                    {el}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="mb-8  text-pretty sm:px-2 md:px-0">
      <div className="flex justify-between py-2">
        <button
          id="interactive-top"
          className="sr-only focus:not-sr-only focus:absolute focus:px-1 focus:py-0.5"
        >
          Top of Interactive
        </button>
        <div
          className={`${
            complete ? "" : "invisible"
          } ml-auto flex items-center gap-2`}
        >
          <span className="ml-auto text-lg font-normal">(Complete)</span>
          <svg
            className="-translate-y-1 fill-current"
            width="16pt"
            height="16pt"
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m880 400c0-154.64-125.36-280-280-280s-280 125.36-280 280v240h80v-240c0-110.46 89.543-200 200-200s200 89.543 200 200v240h80z" />
              <path d="m200 600.23v399.53c0 44.312 35.93 80.234 79.633 80.234h640.73c43.98 0 79.633-35.883 79.633-80.234v-399.53c0-44.312-35.93-80.234-79.633-80.234h-640.73c-43.98 0-79.633 35.883-79.633 80.234z" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-4 font-helvetica [fontSize:15px]">
        <div className="flex flex-col-reverse justify-between gap-2 text-xl font-bold md:flex-row md:gap-8">
          {phase < 5 && <h5>Step 1</h5>}
          {phase >= 5 && phase <= 8 && <h5>Step 2</h5>}
          {phase > 8 && <h5>Step 3</h5>}
        </div>
        <div className="leading-[23px]">
          {phase <= 4 && (
            <ol className="list flex list-decimal flex-col gap-2 px-4">
              <li className={phase > 1 ? `text-gray-500` : forwards ? `` : ""}>
                Press run to view the reference genome, a sequence of 51 DNA
                base letters A, G, C, and T.
              </li>
              <li
                className={
                  phase > 2
                    ? `text-gray-500`
                    : phase === 2 && forwards
                    ? `fadeIn500`
                    : phase === 2
                    ? ""
                    : "invisible"
                }
              >
                Press run again to generate 10 reads, each of which are
                sequences of 15 DNA base letters.
              </li>
              <li
                className={
                  phase > 3
                    ? `text-gray-500`
                    : phase === 3 && forwards
                    ? `fadeIn500`
                    : phase === 3
                    ? ""
                    : "invisible"
                }
              >
                Drag the reads to the matching position in the reference genome.
              </li>
              <li
                className={
                  phase > 4
                    ? `text-gray-500`
                    : phase === 4 && forwards
                    ? `fadeIn500`
                    : phase === 4
                    ? ""
                    : "invisible"
                }
              >
                Answer the following questions.
              </li>
            </ol>
          )}
          {phase > 4 && phase < 8 && (
            <ol className="list flex list-decimal flex-col gap-2 px-4">
              <li className={phase > 5 ? `text-gray-500` : forwards ? `` : ""}>
                Now run the simulation to generate 10 new reads. This time, some
                of the reads will contain mutations, false mutations, off target
                errors, and chimera errors.
              </li>
              <li
                className={
                  phase > 6
                    ? `text-gray-500`
                    : phase === 6 && forwards
                    ? `fadeIn500`
                    : phase === 6
                    ? ""
                    : "invisible"
                }
              >
                Drag and drop the reads to the matching positions in the
                reference genome. Reads that don't match the reference genome
                can be dropped in the trash below. Then press run again to
                generate 10 more reads.
              </li>
              <li
                className={
                  phase > 7
                    ? `text-gray-500`
                    : phase === 7 && forwards
                    ? `fadeIn500`
                    : phase === 7
                    ? ""
                    : "invisible"
                }
              >
                Place the next 10 reads.
              </li>
              <li
                className={
                  phase > 8
                    ? `text-gray-500`
                    : phase === 7.5 && forwards
                    ? `fadeIn500`
                    : phase === 7.5
                    ? ""
                    : "invisible"
                }
              >
                Answer the questions below.
              </li>
            </ol>
          )}
          {phase === 8 && (
            <div className="flex flex-col gap-2">
              <p className={chimaeraPlaced ? "text-gray-500" : ""}>
                Well done! While two of the reads you discarded were
                exceptionally erroneous, the other one is noteworthy for a
                different reason. Align this read where the first half most
                closely matches the reference genome.{" "}
              </p>
              {/* <p className={chimaeraPlaced ? "fadeIn500" : "invisible"}>
                Sequencing and library preparations are not perfect processes.
                Many of the resulting sequences correspond to off-target
                amplification (e.g. from the human DNA in our samples) or may be
                completely spurious sequences. Some reads may look like a
                correct one, partially matching the reference genome, but still
                be spurious. A common type of error that occurs during amplicon
                sequencing is a chimera formed from a combination of two
                different amplicons that occurs during PCR. Chimeras can be
                detected because part of the sequence will match well with one
                amplicon, while another part will match well with a different
                amplicon. These reads also need to be discarded, since they
                don't represent actual sequences in the genome.
              </p> */}
            </div>
          )}
          {(phase === 9 || phase === 9.5) && (
            <div>
              <p>
                View the same reads that were matched to the reference genome in
                the last step. We will start by correcting our data. Identify
                and select any false mutations present in the reads below (for
                our purposes we will consider a false mutation a unique
                variation at the allele). Once you have identified all false
                mutations, press Next to answer the questions below.
              </p>
              <div role="img" className="mb-8 mt-4 flex">
                <div
                  role="img"
                  aria-label="select false mutations example"
                  className="relative mx-auto grid grid-rows-2 place-items-center text-center"
                >
                  <div className="absolute -bottom-6 right-2">
                    <svg
                      width="24pt"
                      height="24pt"
                      className=" dark:fill-white"
                      version="1.1"
                      viewBox="0 0 1200 1200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        // fill="black"
                        d="m999.6 526.8c0-4.8008-2.3984-28.801-24-52.801-22.801-26.398-58.801-40.801-105.6-44.398-4.8008-7.1992-10.801-14.398-20.398-21.602-26.398-20.398-67.199-31.199-120-32.398-4.8008-6-13.199-13.199-22.801-20.398-24-16.801-54-26.398-91.199-30v-97.203c0-9.6016 1.1992-50.398-26.398-79.199-12-13.199-34.801-28.801-73.199-28.801-39.602 0-62.398 15.602-75.602 28.801-25.199 27.602-25.199 63.602-25.199 72v343.2c-22.801-24-48-50.398-62.398-60-30-22.801-86.398-10.801-118.8 13.199-31.199 22.801-42 57.602-30 91.199 21.602 60 75.602 120 88.801 134.4 12 22.801 66 122.4 114 158.4 25.199 19.199 44.398 98.398 49.199 148.8l2.3984 26.398h453.6v-118.8c6-16.801 20.398-52.801 36-69.602 37.199-37.199 49.199-130.8 49.199-159.6l-0.003906-200.39zm-58.801 199.2c0 34.801-14.398 100.8-32.398 118.8-31.199 31.199-50.398 91.199-51.602 97.199l-1.1992 3.6016v69.602l-343.2-0.003906c-2.3984-13.199-4.8008-30-9.6016-48-14.398-57.602-33.602-94.801-58.801-114-34.801-26.398-84-111.6-99.602-142.8l-4.7969-7.2031c0-1.1992-58.801-61.199-79.199-116.4-2.3984-7.1992-2.3984-13.199 6-21.602 15.602-14.398 45.602-18 52.801-15.602 18 14.398 73.199 73.199 104.4 108l51.602 57.602v-497.99c0-4.8008 1.1992-20.398 9.6016-28.801 6-7.1992 16.801-10.801 32.398-10.801 13.199 0 22.801 3.6016 30 9.6016 9.6016 10.801 10.801 30 10.801 37.199v310.8h58.801v-151.2c54 6 69.602 28.801 72 32.398l2.3984 6v112.8h58.801v-99.602c50.398 4.8008 69.602 20.398 74.398 27.602v114h58.801v-87.602c51.602 7.1992 60 34.801 61.199 40.801v195.6z"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      aspectRatio: 450 / 48,
                    }}
                    className="grid w-[340px] italic [grid-template-columns:repeat(17,1fr)]"
                  >
                    <span className="block translate-y-0.5 text-2xl">A</span>
                    {sampleRef.map((el, idx) => {
                      return (
                        <span
                          key={idx}
                          className="block translate-y-0.5 text-2xl"
                        >
                          {el}
                        </span>
                      );
                    })}
                    <span className="block translate-y-0.5 text-2xl">T</span>
                  </div>
                  <div
                    style={{
                      aspectRatio: 450 / 48,
                    }}
                    className="grid w-[304px] italic [grid-template-columns:repeat(15,1fr)]"
                  >
                    {sampleRef.map((el, idx) => {
                      return (
                        <span
                          // style={
                          //   sampleRead[idx] !== sampleRef[idx]
                          //     ? {
                          //         fontWeight: "600",
                          //         color: "white",
                          //         WebkitTextStroke: "black",
                          //         WebkitTextStrokeWidth: ".75px",
                          //       }
                          //     : {}
                          // }
                          key={idx}
                          className={`${
                            idx === 14 ? " text-[darkorange]" : ""
                          } block translate-y-0.5 text-2xl`}
                        >
                          {idx === 14 ? "T" : el}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
          {(phase === 10 || phase === 10.5) && (
            <div className="flex flex-col gap-2">
              <p>
                Now we will take a closer look at the rest of our reads. View
                the same reads that were matched to the reference genome in the
                last step. Click the letters in the reads where you see the
                mutations, changing the appearance of the letters from normal to
                hollow text. When you have identified all the mutations, press
                Next to answer the questions below.
              </p>
              <div className="mt-4 flex">
                <div
                  role="img"
                  aria-label="select false mutations example"
                  className="relative mx-auto grid grid-rows-2 place-items-center text-center"
                >
                  <div className="absolute -bottom-6 right-2">
                    <svg
                      width="24pt"
                      height="24pt"
                      className="dark:fill-white"
                      version="1.1"
                      viewBox="0 0 1200 1200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        // fill="black"
                        d="m999.6 526.8c0-4.8008-2.3984-28.801-24-52.801-22.801-26.398-58.801-40.801-105.6-44.398-4.8008-7.1992-10.801-14.398-20.398-21.602-26.398-20.398-67.199-31.199-120-32.398-4.8008-6-13.199-13.199-22.801-20.398-24-16.801-54-26.398-91.199-30v-97.203c0-9.6016 1.1992-50.398-26.398-79.199-12-13.199-34.801-28.801-73.199-28.801-39.602 0-62.398 15.602-75.602 28.801-25.199 27.602-25.199 63.602-25.199 72v343.2c-22.801-24-48-50.398-62.398-60-30-22.801-86.398-10.801-118.8 13.199-31.199 22.801-42 57.602-30 91.199 21.602 60 75.602 120 88.801 134.4 12 22.801 66 122.4 114 158.4 25.199 19.199 44.398 98.398 49.199 148.8l2.3984 26.398h453.6v-118.8c6-16.801 20.398-52.801 36-69.602 37.199-37.199 49.199-130.8 49.199-159.6l-0.003906-200.39zm-58.801 199.2c0 34.801-14.398 100.8-32.398 118.8-31.199 31.199-50.398 91.199-51.602 97.199l-1.1992 3.6016v69.602l-343.2-0.003906c-2.3984-13.199-4.8008-30-9.6016-48-14.398-57.602-33.602-94.801-58.801-114-34.801-26.398-84-111.6-99.602-142.8l-4.7969-7.2031c0-1.1992-58.801-61.199-79.199-116.4-2.3984-7.1992-2.3984-13.199 6-21.602 15.602-14.398 45.602-18 52.801-15.602 18 14.398 73.199 73.199 104.4 108l51.602 57.602v-497.99c0-4.8008 1.1992-20.398 9.6016-28.801 6-7.1992 16.801-10.801 32.398-10.801 13.199 0 22.801 3.6016 30 9.6016 9.6016 10.801 10.801 30 10.801 37.199v310.8h58.801v-151.2c54 6 69.602 28.801 72 32.398l2.3984 6v112.8h58.801v-99.602c50.398 4.8008 69.602 20.398 74.398 27.602v114h58.801v-87.602c51.602 7.1992 60 34.801 61.199 40.801v195.6z"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      aspectRatio: 450 / 48,
                    }}
                    className="grid w-[340px] italic [grid-template-columns:repeat(17,1fr)]"
                  >
                    <span className="block pt-0.5 text-2xl">A</span>
                    {sampleRef.map((el, idx) => {
                      return (
                        <span key={idx} className="block pt-0.5 text-2xl">
                          {el}
                        </span>
                      );
                    })}
                    <span className="block pt-0.5 text-2xl">T</span>
                  </div>
                  <div
                    style={{
                      aspectRatio: 450 / 48,
                    }}
                    className="grid w-[304px]  italic [grid-template-columns:repeat(15,1fr)]"
                  >
                    {sampleRead.map((el, idx) => {
                      return (
                        <span
                          // style={
                          //   sampleRead[idx] !== sampleRef[idx]
                          //     ? {
                          //         fontWeight: "600",
                          //         color: "white",
                          //         WebkitTextStrokeColor: "black",
                          //         WebkitTextStrokeWidth: ".75px",
                          //       }
                          //     : {}
                          // }
                          key={idx}
                          className={`${
                            sampleRead[idx] !== sampleRef[idx]
                              ? "alternateAllele2"
                              : ""
                          } ${
                            idx === 14 ? "bg-primaryGreen/50 " : ""
                          } block pt-0.5 text-2xl`}
                        >
                          {el}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
          {phase === 11 && (
            <div>
              <p>
                With the microhaplotypes identified for both loci, we can
                determine the MOI. Answer the questions below.
              </p>
            </div>
          )}
        </div>
      </div>
      {skippable && (
        <button
          onClick={(e) => {
            let z = document.getElementById("interactive-first");
            if (z) {
              z.focus();
            }
          }}
          className="sr-only focus:not-sr-only focus:absolute focus:p-1"
        >
          Skip Interactive Content
        </button>
      )}
    </div>
  );

  return (
    <div>
      <h5>Step 1</h5>
      <ol className="list list-decimal px-4">
        <li>
          Press run to view the reference genome, a sequence of 51 DNA base
          letters A, G, C, and T.
        </li>
        <li>
          Press run again to generate 10 reads, each of which are sequences of
          15 DNA base letters.
        </li>
        <li>
          Drag the reads to the matching position in the reference genome. Reads
          that don't match the reference genome can be dropped in the trash
          below.
        </li>
      </ol>
    </div>
  );
}
