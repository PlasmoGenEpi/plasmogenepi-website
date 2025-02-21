import PlasmoGenEpiLogo from "@/app/components/Logo/PlasmoGenEpiLogo";

export default function BloodSpotTextBox({ id }: { id?: number }) {
  return (
    <div className="ml-1 h-full basis-1/3 bg-zinc-300/10 p-1 text-xs">
      <div className=" bg-white/ shadow-sm/ flex h-full flex-col overflow-hidden p-1 text-end font-bold text-black shadow-black dark:bg-transparent dark:text-current">
        {/* <div className="hidden text-xs  lg:inline-block">PCB</div> */}
        <div>
          <span>{`#${id || 1}`}</span>
        </div>
        <div className="mt-auto text-nowrap text-xs">
          <label>MOI: {id && id > 4 ? 4 : id && id > 2 ? 2 : 1}</label>
        </div>
      </div>
    </div>
  );
}
