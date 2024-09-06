import Image from "next/image";

export default function BaileyLabLogo() {
  return (
    <div className="shrink-0 rounded border-4 border-pge-dark-teal bg-white p-4 bg-blend-multiply transition-all duration-1000 hover:bg-transparent">
      <Image
        alt=""
        src={`/GroupLogos/BaileyLab_logo_777px_v03s.png`}
        height={100}
        width={300}
        className="h-full max-w-[300px] object-contain mix-blend-multiply"
      />
    </div>
  );
}
