import { ReactElement } from "react";

export type InteractiveSideBarNode = {
  title: string;
  active: boolean;
  complete: boolean;
  requires?: boolean | null;
  callback?: () => void;
  subcomponents?: InteractiveSideBarNode[];
};

export default function InteractiveSideBarPage({
  node,
}: {
  node: InteractiveSideBarNode;
}) {
  return <div></div>;
}
