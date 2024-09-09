"use client";
import GroupLogoWrapper from "../Logos/GroupLogos/GroupLogoWrapper";
import {
  cloneElement,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";

export const logos: {
  [key: string]: {
    id: number;
    path: string;
    name: string;
    height: number;
    width: number;
    website: string;
  };
} = {
  // Bailey: {
  //   path: "/GroupLogos/BaileyLab_logo_777px_v03s.png",
  //   name: "",
  // },
  AU: {
    id: 1,
    path: "/GroupLogos/AU_Africa_CDC_Logo.png",
    name: "Africa CDC - Africa PGI",
    website: "",
    height: 100,
    width: 360,
  },
  Burnet: {
    id: 2,
    path: "/GroupLogos/burnet_withouttagline_orange_rgb_digitaluse.jpg",
    name: "Barry Lab",
    website: "",
    height: 100,
    width: 75,
  },
  EPPIcenter: {
    id: 3,
    path: "/GroupLogos/EPPIcenter_trnsprntbkg_med_UCSF.png",
    name: "UCSF EPPIcenter",
    website: "",
    height: 100,
    width: 200,
  },
  IDDynamics: {
    id: 4,
    path: "/GroupLogos/IDDynamicsLogoBanner.png",
    name: "Infectious Disease Dynamics",
    website: "",
    height: 100,
    width: 300,
  },
  Idea: {
    id: 5,
    path: "/GroupLogos/IDEA_unit_logo.png",
    name: "IDEA",
    website: "",
    height: 100,
    width: 100,
  },
  Ideel: {
    id: 6,
    path: "/GroupLogos/IDEELLogoRGB.png",
    name: "IDEEL",
    website: "",
    height: 100,
    width: 100,
  },
  MRC: {
    id: 7,
    path: "/GroupLogos/MRC-LSTHM_logo.png",
    name: "Malaria Population Biology",
    website: "",
    height: 100,
    width: 360,
  },
  Neafsey: {
    id: 8,
    website: "",
    path: "/GroupLogos/NeafseyLabLogo.png",
    name: "Neafsey Lab",
    height: 100,
    width: 400,
  },
} as const;

export default function InfiniteScrollBar() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="infiniteScrollMask flex w-fit">
        <ul className="scrollInner relative mx-auto flex h-48 shrink-0 items-center gap-12 bg-transparent px-6">
          {Object.values(logos).map(
            ({ path, name, height, width, id }, idx) => {
              return (
                <GroupLogoWrapper
                  classNames={
                    id === 8
                      ? {
                          image:
                            "scale-[200%] -translate-y-6 translate-x-4 mix-blend-multiply  object-contain ",
                          wrapper:
                            "max-h-24 max-w-[300px]  bg-pge-darkest-teal p-4 hover:bg-white",
                        }
                      : {
                          image: `object-contain mix-blend-multiply`,
                          wrapper: " bg-pge-darkest-teal p-4 hover:bg-white",
                        }
                  }
                  alt={`${name} logo`}
                  key={idx}
                  height={height}
                  width={width}
                  path={path}
                />
              );
            },
          )}
        </ul>
        {/* <ul
          className={`scrollInner scrollInner2 relative flex h-48 shrink-0  items-center gap-12 bg-transparent px-6 `}
        >
          {Object.values(logos).map(
            ({ path, name, height, width, id }, idx) => {
              return (
                <GroupLogoWrapper
                  classNames={
                    id === 8
                      ? {
                          image:
                            "scale-[200%] -translate-y-6 translate-x-4 bg-transparent  object-contain ",
                          wrapper: "max-h-24 max-w-[300px]",
                        }
                      : {
                          image: `bg-transparent  object-contain `,
                        }
                  }
                  alt={`${name} logo`}
                  key={idx}
                  height={height}
                  width={width}
                  path={path}
                />
              );
            },
          )}
        </ul> */}
      </div>
    </div>
  );
  return (
    <div className="mx-auto max-w-6xl">
      <div className="infiniteScrollMask flex w-fit">
        <ul className="scrollInner relative mx-auto flex h-48 shrink-0 items-center gap-12 bg-transparent px-6">
          {Object.values(logos).map(
            ({ path, name, height, width, id }, idx) => {
              return (
                <GroupLogoWrapper
                  classNames={
                    id === 8
                      ? {
                          image:
                            "scale-[200%] -translate-y-6 translate-x-4 bg-transparent  object-contain ",
                          wrapper: "max-h-24 max-w-[300px]",
                        }
                      : {
                          image: `bg-transparent  object-contain `,
                        }
                  }
                  alt={`${name} logo`}
                  key={idx}
                  height={height}
                  width={width}
                  path={path}
                />
              );
            },
          )}
        </ul>
        <ul
          className={`scrollInner scrollInner2 relative flex h-48 shrink-0  items-center gap-12 bg-transparent px-6 `}
        >
          {Object.values(logos).map(
            ({ path, name, height, width, id }, idx) => {
              return (
                <GroupLogoWrapper
                  classNames={
                    id === 8
                      ? {
                          image:
                            "scale-[200%] -translate-y-6 translate-x-4 bg-transparent  object-contain ",
                          wrapper: "max-h-24 max-w-[300px]",
                        }
                      : {
                          image: `bg-transparent  object-contain `,
                        }
                  }
                  alt={`${name} logo`}
                  key={idx}
                  height={height}
                  width={width}
                  path={path}
                />
              );
            },
          )}
        </ul>
        {/* <ul
          className={`scrollInner relative mx-auto flex h-48 shrink-0 items-center gap-12 bg-transparent px-6`}
        >
          <GroupLogoWrapper
            alt={`Africa CDC logo`}
            key={1}
            height={100}
            width={225}
            path={paths.AU.path}
          />
          <GroupLogoWrapper
            alt={`Bailey Labs logo`}
            height={100}
            width={225}
            path={paths.Bailey.path}
          />
          <GroupLogoWrapper
            alt={`Burnet logo`}
            height={100}
            width={75}
            path={paths.Burnet.path}
          />
          <GroupLogoWrapper
            alt={`EPPIcenter logo`}
            height={100}
            width={150}
            path={paths.EPPIcenter.path}
          />
          <GroupLogoWrapper
            alt={`Infection Disease Dynamics logo`}
            height={100}
            width={190}
            path={paths.IDDynamics.path}
          />
          <GroupLogoWrapper
            alt={`IDEA logo`}
            height={100}
            width={75}
            path={paths.Idea.path}
          />
          <GroupLogoWrapper
            alt={`Ideel logo`}
            height={100}
            width={75}
            path={paths.Ideel.path}
          />
          <GroupLogoWrapper
            alt={`MRC logo`}
            height={100}
            width={250}
            path={paths.MRC.path}
          />
          <GroupLogoWrapper
            alt={`Neafsey Labs logo`}
            className="[&>*]:origin-center [&>*]:scale-150"
            height={100}
            width={200}
            path={paths.Neafsey.path}
          />
        </ul> */}
        {/* <ul
          className={`scrollInner relative flex h-48 shrink-0  items-center gap-12 bg-transparent px-6 outline outline-4 -outline-offset-4 outline-red-500`}
        >
          <GroupLogoWrapper
            alt={`Africa CDC logo`}
            key={10}
            height={100}
            width={225}
            path={paths.AU.path}
          />
          <GroupLogoWrapper
            alt={`Bailey Labs logo`}
            height={100}
            width={225}
            path={paths.Bailey.path}
          />
          <GroupLogoWrapper
            alt={`Burnet logo`}
            height={100}
            width={75}
            path={paths.Burnet.path}
          />
          <GroupLogoWrapper
            alt={`EPPIcenter logo`}
            height={100}
            width={150}
            path={paths.EPPIcenter.path}
          />
          <GroupLogoWrapper
            alt={`Infection Disease Dynamics logo`}
            height={100}
            width={190}
            path={paths.IDDynamics.path}
          />
          <GroupLogoWrapper
            alt={`IDEA logo`}
            height={100}
            width={75}
            path={paths.Idea.path}
          />
          <GroupLogoWrapper
            alt={`Ideel logo`}
            height={100}
            width={75}
            path={paths.Ideel.path}
          />
          <GroupLogoWrapper
            alt={`MRC logo`}
            height={100}
            width={250}
            path={paths.MRC.path}
          />
          <GroupLogoWrapper
            alt={`Neafsey Labs logo`}
            className="[&>*]:origin-center [&>*]:scale-150"
            height={100}
            width={200}
            path={paths.Neafsey.path}
          />
        </ul> */}
      </div>
    </div>
  );
}
