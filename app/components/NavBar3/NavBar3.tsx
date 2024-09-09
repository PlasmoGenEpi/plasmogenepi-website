import LogoLink from "../NavBar/LogoLink";
import LogoLink3 from "./LogoLink3";

export default function NavBar3() {
  return (
    <div className="pt-[117.25px] md:pt-0">
      <div className="fixed top-0 w-full bg-white [zIndex:999] dark:border-zinc-950 dark:from-zinc-950 dark:to-zinc-900 md:static">
        <div className="min-h-16 mx-auto flex w-full max-w-7xl justify-between md:px-8">
          <div className="p-2">
            <LogoLink3 />
          </div>
        </div>
      </div>
    </div>
  );
}
