import Image from "next/image";
import Link from "next/link";

export default function AboutStripe({
  stripe,
  logo,
  organization,
}: {
  stripe: boolean;
  logo: {
    path: string;
    height?: number;
    width?: number;
  };
  organization: {
    url: string;
    name: string;
  };
}) {
  return (
    <div
      className={stripe ? "bg-zinc-100 flex items-center" : "flex items-center"}
    >
      <div className="m-auto mx-auto grid h-full max-w-2xl grow grid-cols-2 gap-2 py-4">
        <Link href={organization.url} className="place-self-center">
          <Image
            height={logo?.height || 100}
            width={logo?.width || 200}
            alt={`${organization.name} logo`}
            src={logo.path}
          />
        </Link>
        <div className="flex grow flex-col justify-center place-self-center p-2">
          <h3 className="py-2 text-center font-poppins text-xl font-bold md:text-left">
            {organization.name}
          </h3>
        </div>
      </div>
    </div>
  );
}
