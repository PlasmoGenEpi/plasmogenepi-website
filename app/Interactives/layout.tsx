import { ReactNode } from "react";

export default function InteractiveLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="font-helvetica dark:text-zinc-300">{children}</div>;
}
