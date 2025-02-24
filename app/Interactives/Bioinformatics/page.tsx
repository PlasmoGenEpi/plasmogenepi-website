import InteractiveViewer3 from "@/app/components/Interactives/Shared/InteractiveViewer/InteractiveViewer3/InteractiveViewer3";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useSearchParams } from "next/navigation";

export default function Bioinformatics() {
  // return (
  //   <div>
  //     <div className="h-40 bg-black"></div>
  //     <div className="relative">
  //       <InteractiveViewer3 />;
  //     </div>
  //   </div>
  // );

  const searchParams = useSearchParams();

  const dev = searchParams.get("dev");

  console.log("DEV", dev);

  return <InteractiveViewer3 />;
}
