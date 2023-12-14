export default function Legend() {
  return (
    <div className="absolute bottom-4 right-4 grid w-72 border py-2 text-lg">
      <div className="flex items-center px-4">
        <div className="text-[red]">
          <span>G T A C</span>
        </div>
        <div className="ml-auto ">
          <span className="mt-1 block">Mutation</span>
        </div>
      </div>
      <div className="flex items-center px-4">
        <div className="text-[orange]">
          <span>G T A C</span>
        </div>
        <div className="ml-auto ">
          <span className="mt-1 block">False Mutation</span>
        </div>
      </div>{" "}
      <div className="flex items-center px-4">
        <div className="text-[purple]">
          <span>G T A C</span>
        </div>
        <div className="ml-auto ">
          <span className="mt-1 block">Variation</span>
        </div>
      </div>
      <div className="flex items-center pl-2 pr-4">
        <div className="border-2 border-[red] bg-[gold] px-2">
          <span className="block translate-y-[2px]">G T A C</span>
        </div>{" "}
        <div className="ml-auto ">
          <span>Chimaera</span>
        </div>
      </div>
      <div className="flex items-center pl-2 pr-4">
        <div className="border-2 border-[red] bg-[rebeccapurple] px-2">
          <span className="block translate-y-[2px]">G T A C</span>
        </div>{" "}
        <div className="ml-auto ">
          <span>Off-target Errors</span>
        </div>
      </div>
    </div>
  );
}
