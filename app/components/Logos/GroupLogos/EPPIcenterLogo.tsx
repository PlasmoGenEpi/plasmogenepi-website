import Image from "next/image";

export default function EPPIcenterLogo() {
  return (
    <div className="shrink-0 rounded border-4 border-pge-dark-teal bg-white p-4 bg-blend-multiply transition-all duration-1000 hover:bg-transparent">
      <Image
        src={`/GroupLogos/EPPIcenter_trnsprntbkg_med_UCSF.png`}
        alt=""
        height={100}
        width={300}
        className="h-full max-w-[300px] object-contain mix-blend-multiply"
      />
    </div>
  );
}
