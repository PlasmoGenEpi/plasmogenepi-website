"use client";
import { logos } from "@/app/components/InfiniteScroll/InfiniteScrollBar";
import GroupLogoWrapper from "@/app/components/Logos/GroupLogos/GroupLogoWrapper";

export default function Groups() {
  return (
    <div className="">
      <div className="mx-auto  max-w-6xl gap-8 px-4 pb-8 pt-16 text-lg md:px-8 md:text-base  lg:px-16">
        <h1 className=" font-poppins text-2xl font-bold">Groups</h1>
      </div>
      <div className=" ">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-around gap-8 px-4 text-lg md:px-8 md:text-base  lg:px-16">
          {Object.values(logos).map(
            ({ path, name, height, width, id }, idx) => {
              return (
                <div
                  key={idx}
                  className="border-pge-dark-teal grid w-fit place-items-center rounded border-4  bg-white p-4 px-12"
                >
                  <GroupLogoWrapper
                    classNames={
                      id === 8
                        ? {
                            image: "scale-[150%] -translate-y-6 translate-x-4",
                            wrapper: "max-h-24 max-w-[300px]",
                          }
                        : {
                            wrapper: `p-4`,
                          }
                    }
                    alt={`${name} logo`}
                    key={idx}
                    height={height * 0.75}
                    width={width * 0.75}
                    path={path}
                  />
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}
