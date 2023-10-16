import { Dispatch, SetStateAction } from "react";

export default function NavPage({
  setter,
}: {
  setter: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed z-50 h-[100vh] w-[100vw] bg-black bg-opacity-95 text-white">
      <div
        onClick={(e) => {
          console.log("clicked");
          setter(false);
        }}
        className="mt-12 text-center text-xl font-medium"
      >
        Close
      </div>
    </div>
  );
}
