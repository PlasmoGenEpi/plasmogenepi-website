import DropdownMenu from "../NavBar/DropdownMenu";
import LogoLink from "../NavBar/LogoLink";
import NavList2 from "./NavList2";

export default function NavBar2() {
  return (
    <div className="mb-[116px] md:mb-0">
      <div className="fixed top-0 w-full bg-transparent [zIndex:999] dark:border-zinc-950 dark:from-zinc-950 dark:to-zinc-900 md:static">
        <div className="relative max-w-full border-b-4 border-pge-dark-teal md:border-b-2 md:border-solid md:border-black/5">
          <div className="absolute inset-0 -z-10 bg-white"></div>
          <div className="mx-auto flex max-w-7xl justify-between md:px-8">
            <div className="p-2">
              <LogoLink />
            </div>

            <div className="mr-24 mt-auto hidden h-14 gap-12 p-2 md:flex md:items-center">
              <a
                href="mailto:info@plasmogenepi.org"
                className="font-overpass text-sm font-light uppercase"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <DropdownMenu />
        <NavList2 />
      </div>
    </div>
  );
}
