import { useDrop } from "react-dnd";
import Legend from "./Legend";
import { phaseAtom } from "@/store";
import { useAtom } from "jotai";

export default function GridDropArea() {
  const [phase, setPhase] = useAtom(phaseAtom);
  // const [{ isOver }, drop] = useDrop(() => {
  //   return {
  //     accept: "box",
  //     collect: (monitor) => ({
  //       isOver: monitor.isOver({ shallow: false }),
  //     }),
  //   };
  // }, []);
  return (
    <div
      // ref={drop}
      className={"absolute left-[320px] right-0 top-8 h-[480px] bg-[white]"}
    >
      <div
        className={
          phase === 5
            ? "opacity-100 transition-opacity duration-500"
            : "opacity-0 transition-opacity duration-500"
        }
      >
        <Legend />
      </div>
    </div>
  );
}
