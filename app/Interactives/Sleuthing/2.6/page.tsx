import InteractiveViewer from "@/app/components/Interactives/Shared/InteractiveViewer/InteractiveViewer";

export default async function Page() {
  // return (
  //   <div className="max-h-screen ">
  //     <div className="max-h-screen min-h-40 max-w-sm overflow-auto bg-red-500">
  //       <div className="min-h-[calc(100vh+24px)]"></div>
  //     </div>
  //   </div>
  // );
  return <InteractiveViewer module={"2.6"} />;
}
