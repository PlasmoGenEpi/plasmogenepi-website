import AboutStripe from "@/app/components/AboutStripe";
import NavBar from "@/app/components/NavBar/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <NavBar currentNav="Groups" />
      {/* <div className="py-8"></div> */}
      <div className="mx-auto mt-8 px-2 font-roboto">
        <div className="mx-auto my-16 grid max-w-6xl place-items-center gap-4 gap-y-12 md:my-24 md:grid-cols-2 md:grid-rows-3 md:gap-8 lg:grid-cols-3 lg:grid-rows-2">
          <div className="md:-translate-y-8 md:translate-x-8 lg:-translate-y-4 lg:translate-x-0">
            <AboutStripe
              logo={{
                path: "/GroupLogos/EPPIcenter_trnsprntbkg_med_UCSF.png",
              }}
              organization={{
                url: "https://eppicenter.ucsf.edu/",
                name: "EPPIcenter",
              }}
              stripe={true}
            />
          </div>
          <div className="md:-translate-x-16 md:-translate-y-8 lg:-translate-y-8 lg:translate-x-0">
            <AboutStripe
              logo={{
                path: "/GroupLogos/burnet_withouttagline_orange_rgb_digitaluse.jpg",
                height: 75,
                width: 75,
              }}
              organization={{
                url: "https://www.burnet.edu.au/research/working-groups/infectious-diseases-systems-epidemiology-group/",
                name: "Barry Lab",
              }}
              stripe={false}
            />
          </div>
          <div className=" md:-translate-x-8 lg:-translate-y-4 lg:translate-x-0">
            <AboutStripe
              logo={{
                path: "/GroupLogos/MRC-LSTHM logo.png",
                height: 150,
                width: 300,
              }}
              organization={{
                url: "https://www.lshtm.ac.uk/research/units/mrc-gambia",
                name: "Malaria Population Biology",
              }}
              stripe={true}
            />
          </div>
          <AboutStripe
            logo={{
              path: "/GroupLogos/AU_Africa_CDC_Logo.png",
              height: 150,
              width: 300,
            }}
            organization={{
              url: "https://africacdc.org/institutes/ipg/",
              name: "Africa CDC - Africa PGI",
            }}
            stripe={false}
          />
          <div className="md:translate-x-12 md:translate-y-8 lg:translate-x-0 lg:translate-y-12">
            <AboutStripe
              logo={{
                path: "/GroupLogos/IDEA_unit_logo.png",
                height: 100,
                width: 100,
              }}
              organization={{
                url: "https://research.pasteur.fr/en/member/aimee-taylor/",
                name: "IDEA",
              }}
              stripe={true}
            />
          </div>
          <div className="md:-translate-x-12 md:translate-y-4 lg:translate-x-0">
            <AboutStripe
              logo={{
                path: "/GroupLogos/IDDynamicsLogoBanner.png",
                height: 150,
                width: 300,
              }}
              organization={{
                url: "https://www.iddynamics.jhsph.edu",
                name: "Infectious Disease Dynamics",
              }}
              stripe={false}
            />
          </div>
          <div className="md:translate-x-32 md:translate-y-8">
            <AboutStripe
              logo={{
                path: "/GroupLogos/IDEELLogoRGB.png",
                height: 150,
                width: 150,
              }}
              organization={{
                url: "https://www.iddynamics.jhsph.edu",
                name: "Infectious Disease Dynamics",
              }}
              stripe={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
