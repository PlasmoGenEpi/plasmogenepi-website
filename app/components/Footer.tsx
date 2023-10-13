export default function Footer() {
  return (
    <div className="absolute bottom-0 h-40 w-full bg-black bg-opacity-90 p-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2">
        <div className="col-start-2 col-end-3 ml-auto flex w-fit flex-col items-center">
          <div>
            <span className="mx-auto text-[#F3B941]">Contact Us</span>
          </div>
          <div className="ml-auto flex flex-col items-center">
            <a href="mailto:info@plasmogenepi.org" className="text-[#F3B941]">
              info@plasmogenepi.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
