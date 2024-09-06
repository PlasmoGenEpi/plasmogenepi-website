import Image from "next/image";

export default function IdeaLogo() {
  return (
    <div className="shrink-0 rounded border-4 border-pge-dark-teal bg-white p-4 bg-blend-multiply transition-all duration-1000 hover:bg-transparent">
      <Image
        src={`/GroupLogos/IDEA_unit_logo.png`}
        alt=""
        height={100}
        width={100}
        className="h-full max-w-[300px] object-contain mix-blend-multiply"
      />
    </div>
  );
}
