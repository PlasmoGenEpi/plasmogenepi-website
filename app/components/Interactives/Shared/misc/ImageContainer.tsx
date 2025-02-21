import Image from "next/image";

export default function ImageContainer({
  label,
  alt,
  id,
  path,
  description,
  className,
  noPadding,
}: {
  noPadding?: boolean;
  className?: string;
  description?: string;
  label: string;
  alt?: string;
  id: string;
  path: string;
}) {
  if (noPadding) {
    return (
      <div className={`${className} dark:brightness-75 dark:text-white`}>
        <Image
          className="mix-blend-multiply dark:opacity-80 dark:invert dark:hue-rotate-180 dark:mix-blend-screen"
          aria-description={description}
          id={id}
          src={path}
          height={400}
          width={600}
          alt={alt || label}
        />
      </div>
    );
  }

  return (
    <div
      className={`py-4 pb-8 text-center md:block md:p-4 dark:text-white  ${
        className ? className : ""
      }`}
    >
      <div className="mb-4 text-balance">
        <label className="font-bold [fontSize:15px]" htmlFor={id}>
          {label}
        </label>
      </div>
      <div className="">
        <Image
          className="mix-blend-multiply dark:opacity-80 dark:invert dark:hue-rotate-180 dark:mix-blend-screen"
          aria-description={description}
          id={id}
          src={path}
          height={400}
          width={600}
          alt={alt || label}
        />
      </div>
    </div>
  );
}
