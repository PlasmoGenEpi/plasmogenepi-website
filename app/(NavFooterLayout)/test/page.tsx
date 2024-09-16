"use client";

import { useScreenSize } from "@/app/components/hooks";
import FullscreenImage, {
  fullscreenImageElementAtom,
} from "@/app/components/Images/FullscreenImage";
import FullscreenImageWrapper from "@/app/components/Images/FullscreenImageWrapper";
import { useAtom } from "jotai";
import Image from "next/image";
import { cloneElement, useState } from "react";

export default function Test() {
  const [open, setOpen] = useAtom(fullscreenImageElementAtom);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div className="mx-auto max-w-6xl">
      <FullscreenImageWrapper fullscreenClassName="min-w-[600px]">
        <Image
          src={"/assets/genotyping-example2.png"}
          alt=""
          height={200}
          width={300}
        />
      </FullscreenImageWrapper>
    </div>
  );

  return (
    <div>
      <div className="fixed inset-0 grid place-items-center bg-black/50 px-40 ">
        {open3 ? (
          <div
            onClick={() => {
              document.startViewTransition(() => {
                setOpen3(false);
              });
            }}
            className="mt-20 h-40 w-full bg-red-400 [view-transition-name:bg]"
          ></div>
        ) : (
          <div
            onClick={() => {
              document.startViewTransition(() => {
                setOpen3(true);
              });
            }}
            className="absolute top-0 h-20 w-full bg-red-400 [view-transition-name:bg]"
          ></div>
        )}
      </div>
      <div></div>
    </div>
  );

  if (false) {
    return (
      <div
        onClick={() => {
          document.startViewTransition(() => {
            setOpen3(false);
          });
        }}
      >
        <FullscreenImage />
        {/* <div
          onClick={() => {
            document.startViewTransition(() => {
              setOpen3(false);
            });
          }}
          className=" fixed inset-0 grid place-items-center overflow-auto bg-black/50 px-12"
        >
          <Image
            key={1}
            className="min-w-[600px] border-4 border-transparent [view-transition-name:myImg] "
            src={"/assets/genotyping-example2.png"}
            alt=""
            height={800}
            width={1200}
            quality={100}
          />
        </div> */}
        {/* <div className="bg-black">
        </div> */}
      </div>
    );
  } else {
    return (
      <div>
        <div>
          {open3 ? (
            <FullscreenImage
              visible={open3}
              onClick={() => {
                setOpen3(false);
              }}
            />
          ) : (
            // <div
            //   onClick={() => {
            //     setOpen3(false);
            //   }}
            //   // onClick={() => {
            //   //   document.startViewTransition(() => {
            //   //     setOpen3(false);
            //   //   });
            //   // }}
            //   className={
            //     "fixed inset-0 grid place-items-center overflow-auto bg-black/50 px-12"
            //   }
            // >
            //   <Image
            //     // key={1}
            //     className="min-w-[600px] border-4 border-transparent [view-transition-name:myImg] "
            //     src={"/assets/genotyping-example2.png"}
            //     alt=""
            //     height={800}
            //     width={1200}
            //     quality={100}
            //   />
            // </div>
            <div>
              <Image
                // key={1}
                onClick={() => {
                  document.startViewTransition(() => {
                    setOpen3(true);
                  });
                }}
                className={`border-4 border-transparent [view-transition-name:myImg]  ${
                  open3 ? "invisible" : ""
                }`}
                src={"/assets/genotyping-example2.png"}
                alt=""
                height={200}
                width={300}
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl">
      {open3 ? (
        <div
          onClick={() => {
            document.startViewTransition(() => {
              setOpen3(false);
            });
          }}
          className="fixed inset-0 grid place-items-center overflow-auto bg-black/50 px-12"
        >
          <Image
            className="min-w-[600px] border-4 border-transparent [view-transition-name:myImg] "
            src={"/assets/genotyping-example2.png"}
            alt=""
            height={800}
            width={1200}
            quality={100}
          />
        </div>
      ) : (
        <div>
          <Image
            onClick={() => {
              document.startViewTransition(() => {
                setOpen3(true);
              });
            }}
            className={`border-4 border-transparent [view-transition-name:myImg]  ${
              open3 ? "invisible" : ""
            }`}
            src={"/assets/genotyping-example2.png"}
            alt=""
            height={200}
            width={300}
          />
        </div>
      )}
    </div>
  );

  return (
    <div>
      <FullscreenImageWrapper>
        <Image
          className="border-4 border-transparent [view-transition-name:myImg] "
          src={"/assets/genotyping-example2.png"}
          alt=""
          height={200}
          width={300}
        />
      </FullscreenImageWrapper>
    </div>
  );

  if (open2) {
    return (
      <div
        onClick={() => {
          document.startViewTransition(() => {
            setOpen2(false);
          });
        }}
        className="fixed inset-0 z-50 grid place-items-center bg-black/50 px-12"
      >
        <Image
          className=" min-w-[600px] border-4 border-transparent  transition-all [view-transition-name:myImg]"
          src={"/assets/genotyping-example2.png"}
          alt=""
          height={200}
          width={300}
        />
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          document.startViewTransition(() => {
            setOpen2(true);
          });
        }}
      >
        <Image
          className=" border-4 border-transparent mix-blend-multiply transition-all [view-transition-name:myImg]"
          src={"/assets/genotyping-example2.png"}
          alt=""
          height={200}
          width={300}
        />
      </div>
    );
  }

  return <div></div>;

  // const windowSize = useScreenSize();

  // // console.log(windowSize);

  // if (open) {
  //   return (
  //     <div className="mx-auto max-w-6xl">
  //       <div className={`fixed inset-0 grid place-items-center bg-black/50`}>
  //         <Image
  //           onClick={() => {
  //             if (!document.startViewTransition) {
  //               setOpen(null);
  //             } else {
  //               document.startViewTransition(() => {
  //                 setOpen(null);
  //               });
  //             }
  //           }}
  //           className={`m-auto mx-auto max-h-[100vh] max-w-6xl border-4 border-pge-dark-teal object-contain [view-transition-name:conference]`}
  //           src={"/assets/genotyping-example2.png"}
  //           alt=""
  //           // fill
  //           quality={100}
  //           height={2000}
  //           width={4000}
  //         />
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className="mx-auto max-w-6xl">
      <div
        onClick={() => {
          if (!document.startViewTransition) {
            setOpen(
              cloneElement(
                <Image
                  className=" border-4 border-transparent mix-blend-multiply transition-all hover:border-pge-dark-teal"
                  src={"/assets/genotyping-example2.png"}
                  alt=""
                  height={200}
                  width={300}
                  key={1}
                />,
              ),
            );
          } else {
            document.startViewTransition(() => {
              setOpen(
                cloneElement(
                  <Image
                    className=" border-4 border-transparent mix-blend-multiply transition-all hover:border-pge-dark-teal"
                    src={"/assets/genotyping-example2.png"}
                    alt=""
                    height={200}
                    width={300}
                    key={1}
                  />,
                ),
              );
            });
          }
        }}
        className={`mt-64 w-fit max-w-6xl  cursor-pointer bg-zinc-50 hover:bg-white ${
          open ? "bg-red-300/50" : ""
        }`}
      >
        {cloneElement(
          <Image
            className=" border-4 border-transparent mix-blend-multiply transition-all "
            src={"/assets/genotyping-example2.png"}
            alt=""
            key={fullscreenImageElementAtom ? 2 : 1}
            height={200}
            width={300}
          />,
        )}
      </div>
    </div>
  );
}
