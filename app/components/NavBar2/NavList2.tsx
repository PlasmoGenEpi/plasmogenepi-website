"use client";
import PrimaryNav2 from "./PrimaryNav2";
import { usePathname } from "next/navigation";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";

export const navOpenAtom = atom(false);

export default function NavList2() {
  const [open, setNavOpen] = useAtom(navOpenAtom);
  let currentNav = usePathname();
  useEffect(() => {
    setNavOpen(false);
  }, [currentNav, setNavOpen]);
  return (
    <div className="bg-transparent md:border-b-2">
      <div className="relative ">
        <div className="mx-auto hidden h-2 md:flex xl:max-w-6xl">
          <div
            className={`${currentNav === "/" ? "bg-pge-dark-teal" : "bg-transparent"}  grow basis-[308px] `}
          ></div>
          <div
            className={`${currentNav === "/OnlineCourse" ? "bg-pge-dark-teal" : "bg-transparent"} basis-[308px]`}
          ></div>
          <div
            className={`${currentNav === "/DataStandards" ? "bg-pge-dark-teal" : "bg-transparent"} basis-[308px]`}
          ></div>
          <div
            className={`${currentNav === "/Groups" ? "bg-pge-dark-teal" : "bg-transparent"} grow basis-[308px]`}
          ></div>
        </div>
        <div
          // className={
          //   open
          //     ? "flex max-h-[200px] flex-col overflow-hidden   bg-black/90 py-2 transition-[max-height] duration-500 md:h-auto md:max-h-max md:flex-row md:gap-4 md:border-0 md:bg-transparent md:py-0 md:pr-2 md:backdrop-blur-0"
          //     : "mx-auto flex max-h-0 flex-col overflow-hidden    bg-black/90 transition-[max-height] duration-500 md:pointer-events-auto md:h-auto md:max-h-max md:flex-row md:gap-4 md:border-0 md:bg-transparent xl:max-w-6xl"
          // }
          className={`grid bg-black/95 duration-500 ease-out md:block md:bg-transparent ${open ? "[grid-template-rows:1fr]" : "[grid-template-rows:0fr]"} mx-auto transition-[grid-template-rows] xl:max-w-6xl`}
        >
          <div className="overflow-hidden md:flex">
            <PrimaryNav2
              hidden={!open}
              icon_svg={
                <svg
                  className=" -translate-y-2 translate-x-1"
                  width="24pt"
                  height="24pt"
                  version="1.1"
                  viewBox="0 0 1200 1200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <rect width="1200" height="1200" fill="transparent" />
                    <path d="m600 286.38-302.29 302.29h604.57z" />
                    <path d="m373.29 611.34v302.29h151.14v-181.38h151.14v181.38h151.14v-302.29z" />
                  </g>
                </svg>
              }
              active={currentNav === "/"}
              display="Home"
              path="/"
            />
            <PrimaryNav2
              hidden={!open}
              icon_svg={
                <svg
                  className="translate-x-2"
                  width="16pt"
                  height="16pt"
                  version="1.1"
                  viewBox="0 0 1200 1200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m1007.3 426.09-233.34-233.34 55.684-55.684 233.34 233.34z" />
                    <path d="m385.96 1048.1-233.31-233.38 580.79-580.62 233.31 233.38z" />
                    <path d="m1155 281.25c37.5-37.5 37.5-97.5 0-135l-97.5-97.5c-37.5-37.5-101.25-37.5-135 0l-48.75 48.75 236.25 236.25z" />
                    <path d="m18.75 1143.8c-3.75 11.25 0 22.5 7.5 30 3.75 3.75 11.25 7.5 18.75 7.5h11.25l281.25-101.25-217.5-217.5z" />
                  </g>
                </svg>
              }
              active={currentNav === "/OnlineCourse"}
              display="Online Course"
              path="/OnlineCourse"
            />
            <PrimaryNav2
              hidden={!open}
              icon_svg={
                <svg
                  className="-translate-x-1 -translate-y-2.5"
                  width="30pt"
                  height="30pt"
                  version="1.1"
                  viewBox="0 0 1200 1200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m599.96 316.56c-12.793 0-17.02 3.5117-25.465 7.2891-8.4414 3.7734-18.34 8.8438-29.285 14.988-21.895 12.293-48.117 28.902-73.895 47.094-25.773 18.195-50.871 37.848-70.434 57.012-9.7812 9.582-18.363 18.941-24.953 28.734-6.5859 9.7969-11.992 20.082-11.992 33.859 0 135.61 49.855 230.41 103.37 290.22 26.754 29.902 54.297 51.332 77.211 65.402 11.461 7.0352 21.73 12.203 30.535 15.867 8.8086 3.6719 14.086 6.4609 24.91 6.4609s16.285-2.7891 25.09-6.4609c8.8125-3.6562 19.074-8.8281 30.535-15.867 22.918-14.07 50.457-35.5 77.215-65.402 53.512-59.809 103.37-154.61 103.37-290.22 0-13.777-5.5898-24.062-12.18-33.859-6.5859-9.793-14.988-19.152-24.77-28.734-19.562-19.164-44.656-38.816-70.434-57.012-25.773-18.191-52.18-34.801-74.074-47.094-10.949-6.1484-20.664-11.215-29.105-14.988-8.4453-3.7773-12.855-7.2891-25.645-7.2891zm81.777 200.69c5.7031-0.21875 11.289 1.6328 15.73 5.2109 4.9141 3.9219 8.0664 9.6406 8.75 15.895 0.68359 6.25-1.1562 12.516-5.1055 17.41l-94.512 118.03c-4.2031 5.1953-10.41 8.3633-17.086 8.7266-6.6719 0.35938-13.184-2.125-17.922-6.8359l-70.988-70.754c-4.457-4.4336-6.9609-10.457-6.9609-16.742 0-6.2852 2.5039-12.312 6.9609-16.746 4.4336-4.4531 10.457-6.9609 16.742-6.9609s12.312 2.5078 16.746 6.9609l52.121 52.309 77.949-97.648c4.293-5.3672 10.707-8.6016 17.574-8.8555z" />
                </svg>
              }
              active={currentNav === "/DataStandards"}
              display="Data Standards"
              path="/DataStandards"
            />
            <PrimaryNav2
              hidden={!open}
              icon_svg={
                <svg
                  className="-translate-y-1.5"
                  width="24pt"
                  height="24pt"
                  version="1.1"
                  viewBox="0 0 1200 1200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m1095.6 727.2-9.6016-13.199c-44.398-62.398-115.2-98.398-192-98.398-42 0-82.801 10.801-117.6 31.199 33.602 21.602 63.602 49.199 88.801 85.199l12 16.801c21.602 30 27.602 64.801 20.398 96h136.8c28.801 0 52.801-15.602 66-39.602 14.402-26.398 12-55.199-4.7969-78z" />
                    <path d="m1009.2 469.2c0 62.961-51.039 114-114 114-62.961 0-114-51.039-114-114 0-62.961 51.039-114 114-114 62.961 0 114 51.039 114 114" />
                    <path d="m321.6 748.8 12-16.801c25.199-34.801 55.199-63.602 88.801-85.199-34.801-20.398-75.602-31.199-117.6-31.199-76.801 0-146.4 36-192 98.398l-9.6016 13.199c-16.801 22.801-19.199 51.602-6 76.801s37.199 39.602 66 39.602h136.8c-4.8008-31.203 0-64.801 21.602-94.801z" />
                    <path d="m418.8 469.2c0 62.961-51.039 114-114 114-62.961 0-114-51.039-114-114 0-62.961 51.039-114 114-114 62.961 0 114 51.039 114 114" />
                    <path d="m848.4 745.2c-25.199-34.801-56.398-63.602-91.199-84-3.6016-2.3984-7.1992-3.6016-10.801-6-3.6016-2.3984-7.1992-3.6016-10.801-6-40.801-20.398-86.398-31.199-134.4-31.199s-93.602 10.801-134.4 31.199c-3.6016 2.3984-7.1992 3.6016-10.801 6-3.6016 2.3984-7.1992 3.6016-10.801 6-34.801 21.602-66 49.199-91.199 84l-12 16.801c-18 25.199-22.801 54-15.602 82.801 1.1992 3.6016 2.3984 7.1992 3.6016 10.801 1.1992 3.6016 2.3984 7.1992 4.8008 9.6016 0 0 0 1.1992 1.1992 1.1992 18 33.602 50.398 52.801 87.602 52.801h357.6c37.199 0 70.801-19.199 87.602-52.801 0 0 0-1.1992 1.1992-1.1992 1.1992-3.6016 3.6016-7.1992 4.8008-9.6016 1.1992-3.6016 2.3984-7.1992 3.6016-10.801 7.1992-27.602 2.3984-57.602-15.602-82.801z" />
                    <path d="m750 430.8c0 82.844-67.156 150-150 150s-150-67.156-150-150 67.156-150 150-150 150 67.156 150 150" />
                  </g>
                </svg>
              }
              active={currentNav === "/Groups"}
              display="Groups"
              path="/Groups"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
