export default function DragDropSection({ node }: { node: any }) {
  return (
    <button
      className={`pl-[10%]
    relative  py-3 pr-12/ text-left disabled:pointer-events-none grid grid-cols-[40px_auto_40px] gap-[5%]`}
    >
      {node.title}
    </button>
  );
}
