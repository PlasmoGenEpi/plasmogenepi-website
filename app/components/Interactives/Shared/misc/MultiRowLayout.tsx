import { CSSProperties, ReactElement, StyleHTMLAttributes } from "react";

export default function MultiRowLayout({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  style,
}: {
  style?: CSSProperties;
  topLeft?: ReactElement;
  topRight?: ReactElement;
  bottomLeft?: ReactElement;
  bottomRight?: ReactElement;
}) {
  return (
    <form
      style={style}
      id="form-interactive"
      className="relative grid gap-y-16 md:grid-cols-2 md:gap-x-16 lg:gap-x-16 sm:[&>div]:mx-auto sm:[&>div]:w-full [&>div]:sm:max-w-[80%] md:[&>div]:mx-0 md:[&>div]:w-auto [&>div]:md:max-w-none"
    >
      {topLeft}
      {topRight}
      {bottomLeft}
      {bottomRight}
      {/* <div className="col-start-1 row-start-1">{topLeft}</div>
      <div className="md:col-start-2 md:row-span-full">{topRight}</div>
      <div className="col-start-1  md:row-start-2">{bottomLeft}</div> */}
    </form>
  );
  return (
    <form
      id="form-interactive"
      className="relative grid gap-y-16 md:grid-cols-2 md:grid-rows-2 md:gap-x-16 lg:gap-x-16 sm:[&>div]:mx-auto sm:[&>div]:w-full [&>div]:sm:max-w-[80%] md:[&>div]:mx-0 md:[&>div]:w-auto [&>div]:md:max-w-none"
    >
      {topLeft}
      {topRight}
      {bottomLeft}
      {bottomRight}
      {/* <div className="col-start-1 row-start-1">{topLeft}</div>
      <div className="md:col-start-2 md:row-span-full">{topRight}</div>
      <div className="col-start-1  md:row-start-2">{bottomLeft}</div> */}
    </form>
  );
}
