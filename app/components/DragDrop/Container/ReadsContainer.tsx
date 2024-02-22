import { useDrop } from "react-dnd";

export default function ReadsContainer({
  setReadStart,
}: {
  setReadStart: (id: number) => void;
}) {
  const [, drop] = useDrop(
    () => ({
      accept: "read",
      drop(item: { id: number; text: string }, monitor) {
        console.log("drop");
        setReadStart(item.id);
        // let ab = monitor.getInitialSourceClientOffset();
        // let dropCoords = dropRef.current?.getBoundingClientRect();
        // let coords = monitor.getSourceClientOffset();
        // if (coords && coords.x && ab) {
        //   changeCharStart(
        //     item.id,
        //     Math.round((coords.x - (dropCoords ? dropCoords.x : 0)) / size),
        //     1
        //   );
        // }
        return undefined;
      },
    }),
    [setReadStart]
  );
  return (
    <div
      ref={drop}
      className="grow shadow-black/50 shadow-sm bg-white min-h-40"
    ></div>
  );
}
