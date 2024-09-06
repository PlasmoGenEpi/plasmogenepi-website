import PlasmoGenEpiLogo from "@/components/Logos/PlasmoGenEpiLogo";

export default function BloodSpotTextBox({ id }: { id?: number }) {
  return (
    <div className="h-full basis-2/5 p-1 text-xs">
      <div className=" flex h-full flex-col overflow-hidden bg-white p-1 pl-2 text-end shadow-sm shadow-black">
        {/* <div className="hidden text-xs  lg:inline-block">PCB</div> */}
        <div>
          <span>{`#0${id || 1}`}</span>
        </div>
        <div className="mt-auto text-nowrap text-xs">
          <span>MOI: {id && id > 4 ? 4 : id && id > 2 ? 2 : 1}</span>
        </div>
      </div>
    </div>
  );
}
