import Image from "next/image";

export default function MRCLSTHMLogo() {
  return (
    <div className="shrink-0 rounded border-4 border-pge-dark-teal bg-white p-4 bg-blend-multiply transition-all duration-1000 hover:bg-transparent">
      <Image
        alt=""
        src={`/GroupLogos/MRC-LSTHM_logo.png`}
        height={100}
        width={100}
        // fill
        className="h-full max-w-[300px] object-contain mix-blend-multiply"
        // sizes="100vw"
      />
    </div>
  );
}
