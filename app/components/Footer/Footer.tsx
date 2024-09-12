import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t-4 border-pge-dark-teal bg-pge-darkest-teal py-32">
      <div className="mx-auto flex max-w-6xl justify-around gap-x-24 px-4">
        <Link
          prefetch
          href={"/SignUp"}
          className="w-fit px-8 py-4 font-semibold text-pge-white"
        >
          Mailing List
        </Link>
        <a
          href="mailto:info@plasmogenepi.org"
          className="px-8 py-4 font-semibold  text-pge-white"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
