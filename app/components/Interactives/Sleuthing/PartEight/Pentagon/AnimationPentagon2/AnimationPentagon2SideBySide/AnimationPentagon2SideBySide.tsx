import { useRef } from "react";

export default function AnimationPentagon2SideBySide() {
  const containerRef = useRef<null | HTMLDivElement>(null);
  return (
    <div className="relative h-full min-h-96">
      <div className="absolute inset-0 [font-size:15px] overflow-auto snap-y flex flex-col gap-24 pb-24 snap-mandatory text-gray-500">
        {/* <div className=" flex flex-col gap-4 max-h-full overflow-y-scroll">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error autem
            officia corporis tenetur minus laboriosam, illo perferendis.
            Necessitatibus voluptate odit recusandae pariatur quia culpa, eius
            unde cum nihil consectetur placeat!
          </p>
          <p>
            Perspiciatis aliquam dolorem non excepturi dicta, consectetur vero,
            eaque minus incidunt perferendis architecto labore optio blanditiis
            fuga ex quas nulla ad sapiente error in. Quia distinctio praesentium
            assumenda porro quas.
          </p>
          <p>
            Veniam quasi nisi architecto consectetur, voluptate qui tempora
            nulla quis adipisci tenetur dicta quo accusamus enim perspiciatis
            aperiam tempore ipsum itaque debitis blanditiis rem iure! Ex
            reiciendis minus veritatis enim!
          </p>
          <p>
            Sequi, adipisci maxime rerum nulla amet culpa repellat! Vero saepe
            nihil rerum ab nulla totam dolore molestias! Tenetur unde veniam
            facilis mollitia sint! Ut fugit earum porro magnam officia aliquam.
          </p>
          <p>
            Esse quisquam quod maxime, eum accusamus sit dicta aperiam pariatur
            eos quos quas id porro eligendi iste, nostrum voluptates ad adipisci
            aliquid expedita soluta ab et, maiores sapiente. Repudiandae, iusto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error autem
            officia corporis tenetur minus laboriosam, illo perferendis.
            Necessitatibus voluptate odit recusandae pariatur quia culpa, eius
            unde cum nihil consectetur placeat!
          </p>
          <p>
            Perspiciatis aliquam dolorem non excepturi dicta, consectetur vero,
            eaque minus incidunt perferendis architecto labore optio blanditiis
            fuga ex quas nulla ad sapiente error in. Quia distinctio praesentium
            assumenda porro quas.
          </p>
          <p>
            Veniam quasi nisi architecto consectetur, voluptate qui tempora
            nulla quis adipisci tenetur dicta quo accusamus enim perspiciatis
            aperiam tempore ipsum itaque debitis blanditiis rem iure! Ex
            reiciendis minus veritatis enim!
          </p>
          <p>
            Sequi, adipisci maxime rerum nulla amet culpa repellat! Vero saepe
            nihil rerum ab nulla totam dolore molestias! Tenetur unde veniam
            facilis mollitia sint! Ut fugit earum porro magnam officia aliquam.
          </p>
          <p>
            Esse quisquam quod maxime, eum accusamus sit dicta aperiam pariatur
            eos quos quas id porro eligendi iste, nostrum voluptates ad adipisci
            aliquid expedita soluta ab et, maiores sapiente. Repudiandae, iusto.
          </p>
        </div> */}
        <div className="snap-center p-4 text-interactiveBlue/ text-black dark:brightness-150">
          <p>
            Case E came into the village after traveling to a high transmission
            area and being infected with two genetically distinct parasite
            clones, resulting in a polyclonal infection with MOI of 2 (indicated
            by the red and blue colored balls in case E). This could have been
            due to infections by two different mosquitoes while traveling
            (superinfection) or infection with two unrelated parasite clones at
            the same time from one mosquito (cotransmission).
          </p>
        </div>
        <div
          onClick={(e) => {
            if (containerRef?.current) {
              containerRef?.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              });
            }
          }}
          ref={containerRef}
          className="snap-center p-4"
        >
          <p>Next, a mosquito bit case E, and was infected with both clones.</p>
        </div>
        <div className="snap-center p-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quod
            velit provident non aspernatur repellendus explicabo temporibus,
            nostrum inventore. Velit sequi ratione sint dolor laudantium debitis
            magnam sit! Ut, ullam.
          </p>
        </div>
        <div className="snap-center p-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quod
            velit provident non aspernatur repellendus explicabo temporibus,
            nostrum inventore. Velit sequi ratione sint dolor laudantium debitis
            magnam sit! Ut, ullam.
          </p>
        </div>
        <div className="snap-center p-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quod
            velit provident non aspernatur repellendus explicabo temporibus,
            nostrum inventore. Velit sequi ratione sint dolor laudantium debitis
            magnam sit! Ut, ullam.
          </p>
        </div>
        <div className="snap-center p-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quod
            velit provident non aspernatur repellendus explicabo temporibus,
            nostrum inventore. Velit sequi ratione sint dolor laudantium debitis
            magnam sit! Ut, ullam.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className=" flex flex-col gap-4 max-h-full overflow-y-scroll">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error autem
        officia corporis tenetur minus laboriosam, illo perferendis.
        Necessitatibus voluptate odit recusandae pariatur quia culpa, eius unde
        cum nihil consectetur placeat!
      </p>
      <p>
        Perspiciatis aliquam dolorem non excepturi dicta, consectetur vero,
        eaque minus incidunt perferendis architecto labore optio blanditiis fuga
        ex quas nulla ad sapiente error in. Quia distinctio praesentium
        assumenda porro quas.
      </p>
      <p>
        Veniam quasi nisi architecto consectetur, voluptate qui tempora nulla
        quis adipisci tenetur dicta quo accusamus enim perspiciatis aperiam
        tempore ipsum itaque debitis blanditiis rem iure! Ex reiciendis minus
        veritatis enim!
      </p>
      <p>
        Sequi, adipisci maxime rerum nulla amet culpa repellat! Vero saepe nihil
        rerum ab nulla totam dolore molestias! Tenetur unde veniam facilis
        mollitia sint! Ut fugit earum porro magnam officia aliquam.
      </p>
      <p>
        Esse quisquam quod maxime, eum accusamus sit dicta aperiam pariatur eos
        quos quas id porro eligendi iste, nostrum voluptates ad adipisci aliquid
        expedita soluta ab et, maiores sapiente. Repudiandae, iusto.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error autem
        officia corporis tenetur minus laboriosam, illo perferendis.
        Necessitatibus voluptate odit recusandae pariatur quia culpa, eius unde
        cum nihil consectetur placeat!
      </p>
      <p>
        Perspiciatis aliquam dolorem non excepturi dicta, consectetur vero,
        eaque minus incidunt perferendis architecto labore optio blanditiis fuga
        ex quas nulla ad sapiente error in. Quia distinctio praesentium
        assumenda porro quas.
      </p>
      <p>
        Veniam quasi nisi architecto consectetur, voluptate qui tempora nulla
        quis adipisci tenetur dicta quo accusamus enim perspiciatis aperiam
        tempore ipsum itaque debitis blanditiis rem iure! Ex reiciendis minus
        veritatis enim!
      </p>
      <p>
        Sequi, adipisci maxime rerum nulla amet culpa repellat! Vero saepe nihil
        rerum ab nulla totam dolore molestias! Tenetur unde veniam facilis
        mollitia sint! Ut fugit earum porro magnam officia aliquam.
      </p>
      <p>
        Esse quisquam quod maxime, eum accusamus sit dicta aperiam pariatur eos
        quos quas id porro eligendi iste, nostrum voluptates ad adipisci aliquid
        expedita soluta ab et, maiores sapiente. Repudiandae, iusto.
      </p>
    </div>
  );
}
