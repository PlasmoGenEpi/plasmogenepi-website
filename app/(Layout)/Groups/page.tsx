import AboutStripe from "@/app/components/AboutStripe";
import NavBar2 from "@/app/components/NavBar2";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <NavBar2 currentNav="Groups" />
      {/* <div className="py-8"></div> */}
      <div className="mx-auto mt-8 px-2 font-roboto">
        <div className="grid [grid-template-rows:_repeat(8,_minmax(0,_1fr))]">
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
          {/* <AboutStripe
            logo={{
              path: "/GroupLogos/NeafseyLabLogo.png",
              height: 200,
              width: 400,
            }}
            organization={{
              url: "",
              name: "",
              contact: "",
              email: "",
            }}
            stripe={false}
          /> */}
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
      </div>
    </div>
  );
}
