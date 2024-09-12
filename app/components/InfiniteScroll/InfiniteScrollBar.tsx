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
    website: "https://africacdc.org/institutes/ipg/",
    height: 100,
    width: 360,
  },
  Burnet: {
    id: 2,
    path: "/GroupLogos/burnet_withouttagline_orange_rgb_digitaluse.jpg",
    name: "Barry Lab",
    website:
      "https://www.burnet.edu.au/research/working-groups/infectious-diseases-systems-epidemiology-group/",
    height: 100,
    width: 75,
  },
  EPPIcenter: {
    id: 3,
    path: "/GroupLogos/EPPIcenter_trnsprntbkg_med_UCSF.png",
    name: "UCSF EPPIcenter",
    website: "https://eppicenter.ucsf.edu/",
    height: 100,
    width: 200,
  },
  Neafsey: {
    id: 8,
    path: "/GroupLogos/NeafseyLabLogo.png",
    name: "Neafsey Lab",
    website: "https://www.hsph.harvard.edu/neafsey-lab/",
    height: 100,
    width: 400,
  },
  IDDynamics: {
    id: 4,
    path: "/GroupLogos/IDDynamicsLogoBanner.png",
    name: "Infectious Disease Dynamics",
    website: "https://www.iddynamics.jhsph.edu",
    height: 100,
    width: 300,
  },
  Idea: {
    id: 5,
    path: "/GroupLogos/IDEA_unit_logo.png",
    name: "IDEA",
    website: "https://research.pasteur.fr/en/member/aimee-taylor/",
    height: 100,
    width: 100,
  },
  Ideel: {
    id: 6,
    path: "/GroupLogos/IDEELLogoRGB.png",
    name: "IDEEL",
    website: "https://www.ideelresearch.org",
    height: 100,
    width: 100,
  },
  MRC: {
    id: 7,
    path: "/GroupLogos/MRC-LSTHM_logo.png",
    name: "Malaria Population Biology",
    website: "https://www.lshtm.ac.uk/research/units/mrc-gambia",
    height: 100,
    width: 360,
  },
} as const;

export default function InfiniteScrollBar() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="infiniteScrollMask flex w-fit">
        <ul className="scrollInner relative mx-auto flex h-48 shrink-0 items-center gap-12 bg-zinc-50 px-6">
          {Object.values(logos).map(
            ({ path, name, height, width, id }, idx) => {
              return (
                <GroupLogoWrapper
                  classNames={
                    id === 8
                      ? {
                          image:
                            "scale-[200%] -translate-y-6 translate-x-4 mix-blend-multiply",
                          wrapper: "max-h-24 max-w-[300px]",
                        }
                      : {
                          wrapper: "mix-blend-multiply",
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
          className={`scrollInner scrollInner2 relative flex h-48 shrink-0  items-center gap-12 bg-zinc-50 px-6 `}
        >
          {Object.values(logos).map(
            ({ path, name, height, width, id }, idx) => {
              return (
                <GroupLogoWrapper
                  classNames={
                    id === 8
                      ? {
                          image:
                            "scale-[200%] -translate-y-6 translate-x-4 mix-blend-multiply",
                          wrapper: "max-h-24 max-w-[300px]",
                        }
                      : {
                          wrapper: "mix-blend-multiply",
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
      </div>
    </div>
  );
}
