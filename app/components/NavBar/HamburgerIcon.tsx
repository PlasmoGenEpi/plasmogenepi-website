export default function HamburgerIcon({
  open,
  className,
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <svg
      // className="hamburgerIcon"
      className={`
        w-10
        origin-center
       [&>rect]:transition-all [&>rect]:duration-500 ${
         open ? "[&>rect]:y-45" : ""
       }
        ${className ? className : ""}
       `}
      viewBox={"0,0,100,100"}
      overflow={"visible"}
    >
      <rect
        width={80}
        height={10}
        x={10}
        className={`origin-center ${
          open ? "rotate-45 scale-x-75 [y:45]" : "[y:25]"
        }`}
        strokeLinecap="round"
        rx={5}
      />
      <rect
        width={80}
        height={10}
        x={10}
        y={45}
        className={`origin-center ${open ? "scale-0" : "scale-100"}`}
        strokeLinecap="round"
        rx={5}
      />
      <rect
        className={`origin-center ${
          open ? "-rotate-45 scale-x-75 [y:45]" : "[y:65]"
        }`}
        width={80}
        height={10}
        x={10}
        y={65}
        strokeLinecap="round"
        rx={5}
      />
    </svg>
  );
}
