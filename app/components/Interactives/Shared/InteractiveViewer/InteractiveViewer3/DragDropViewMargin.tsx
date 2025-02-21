import { useAtomValue } from "jotai";
import { sideBarIsOpenAtom } from "../InteractiveSideBar/InteractiveSideBar";

export default function DragDropViewMargin() {
  const sideBarIsOpen = useAtomValue(sideBarIsOpenAtom);
  return (
    <div
      className={`${
        sideBarIsOpen ? "grow basis-0" : " grow basis-0"
      } duration-1000`}
    ></div>
  );
}
