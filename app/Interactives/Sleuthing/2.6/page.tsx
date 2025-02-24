"use client";
import InteractiveViewer from "@/app/components/Interactives/Shared/InteractiveViewer/InteractiveViewer";
import { useSearchParams } from "next/navigation";

export default async function Page() {
  const searchParams = useSearchParams();

  const dev = searchParams.get("dev");

  return <InteractiveViewer module={"2.6"} dev={dev ? true : false} />;
}
