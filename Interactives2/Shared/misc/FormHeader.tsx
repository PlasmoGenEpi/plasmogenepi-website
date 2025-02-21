export default function FormHeader({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h5
      className={`mb-8 text-balance text-center text-lg  font-semibold md:text-wrap md:text-left ${className ? className : ""}`}
    >
      {text}
    </h5>
  );
}
