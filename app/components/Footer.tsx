import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-40 w-full bg-[rgba(12,25,44)] p-8 text-[#F3B941]">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
        <div className="place-self-center text-center">
          <Link className="my-auto" href="/SignUp">
            Sign up for Emails
          </Link>
        </div>
        <div className="mx-auto flex w-fit flex-col text-center">
          <span>Contact</span>
          <a href="mailto:info@plasmogenepi.org" className="text-[#F3B941]">
            info@plasmogenepi.org
          </a>
        </div>
        {/* <div className="mx-auto flex w-fit flex-col items-center justify-center gap-2">
          <div>
            <span className="mx-auto text-[#F3B941]">Contact</span>
          </div>
          <div className="ml-auto flex flex-col items-center">
            <a href="mailto:info@plasmogenepi.org" className="text-[#F3B941]">
              info@plasmogenepi.org
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
