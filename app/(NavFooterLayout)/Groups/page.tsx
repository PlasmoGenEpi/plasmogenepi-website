"use client";
import { logos } from "@/app/components/InfiniteScroll/InfiniteScrollBar";
import GroupLogoWrapper from "@/app/components/Logos/GroupLogos/GroupLogoWrapper";
import Link from "next/link";

export default function Groups() {
  return (
    <div className="pt-24">
      {/* <div className="mx-auto  max-w-6xl gap-8 px-4 pb-8 pt-16 text-lg md:px-8 md:text-base  lg:px-16">
        <h1 className=" font-poppins text-2xl font-bold">Groups</h1>
      </div> */}
      <div className=" ">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-around gap-8 gap-x-12 gap-y-24 px-4 text-lg md:px-8 md:text-base  lg:px-16">
          {Object.values(logos).map(
            ({ path, name, height, width, id, website }, idx) => {
              return (
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={website}
                  key={idx}
                  className="grid w-fit place-items-center"
                >
                  <GroupLogoWrapper
                    classNames={
                      id === 8
                        ? {
                            image: " mix-blend-multiply",
                            wrapper: "max-w-[400px]",
                          }
                        : {
                            wrapper: `mix-blend-multiply`,
                          }
                    }
                    alt={`${name} logo`}
                    key={idx}
                    height={height * 2}
                    width={width * 2}
                    path={path}
                  />
                </Link>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}
