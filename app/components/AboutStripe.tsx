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
    <Link href={organization.url} className="">
      <Image
        height={logo?.height || 100}
        width={logo?.width || 200}
        alt={`${organization.name} logo`}
        src={logo.path}
      />
    </Link>
  );
}
