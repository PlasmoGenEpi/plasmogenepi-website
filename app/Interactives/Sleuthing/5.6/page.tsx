"use client";
import InteractiveViewer2 from "@/app/components/Interactives/Shared/InteractiveViewer/InteractiveViewer2/InteractiveViewer2";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

  const dev = searchParams.get("dev");

  return <InteractiveViewer2 dev={dev ? true : false} />;
}
