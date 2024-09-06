import Image from "next/image";

export default function GroupLogoWrapper({
  path,
  alt,
  classNames,
  width,
  height,
}: {
  path: string;
  alt: string;
  classNames?: {
    wrapper?: string;
    image?: string;
  };
  width: number;
  height: number;
}) {
  return (
    <div
      className={`shrink-0 origin-center overflow-hidden ${classNames?.wrapper ? classNames.wrapper : ""}`}
    >
      <Image
        priority
        src={path}
        alt={alt}
        className={`${classNames?.image ? classNames.image : ""} `}
        width={width}
        height={height}
      />
    </div>
  );
}
