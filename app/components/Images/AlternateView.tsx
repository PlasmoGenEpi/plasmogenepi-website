"use client";
import { cloneElement, ReactElement, useState } from "react";

export default function AlternateView({
  children,
  alternate,
}: {
  children: ReactElement;
  alternate: ReactElement;
}) {
  const [view, setView] = useState(false);
  if (view) {
    return cloneElement(alternate, {
      onClick: () => {
        //@ts-ignore
        if (!document.startViewTransition) {
          setView(false);
        } else {
          //@ts-ignore
          document.startViewTransition(() => {
            setView(false);
          });
        }
      },
    });
    // return (
    //   <div
    //     onClick={() => {
    //       if (!document.startViewTransition) {
    //         setView(false);
    //       } else {
    //         //@ts-ignore
    //         document.startViewTransition(() => {
    //           setView(false);
    //         });
    //       }
    //     }}
    //   >
    //     {cloneElement(alternate)}
    //     {cloneElement(children, {
    //       className: `invisible`,
    //     })}
    //   </div>
    // );
  } else {
    return cloneElement(children, {
      onClick: () => {
        //@ts-ignore

        if (!document.startViewTransition) {
          setView(true);
        } else {
          //@ts-ignore
          document.startViewTransition(() => {
            setView(true);
          });
        }
      },
    });
  }
}
