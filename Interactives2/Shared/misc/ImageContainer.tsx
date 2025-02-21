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
      <div className={className}>
        <Image
          className="mix-blend-multiply"
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
      className={`py-4 pb-8 text-center md:block md:p-4 ${className ? className : ""}`}
    >
      <div className="mb-4 text-balance">
        <label className="font-bold [fontSize:15px]" htmlFor={id}>
          {label}
        </label>
      </div>
      <div>
        <Image
          className="mix-blend-multiply"
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
