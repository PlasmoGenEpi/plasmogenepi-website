export default function CompletePage({ part }: { part: number }) {
  return (
    <div className="pb-12 pt-12 text-center text-xl">
      <div className="h-8 text-left">
        <button
          id="interactive-top"
          className="sr-only focus:not-sr-only focus:absolute focus:px-1 focus:py-0.5"
        >
          Top of Interactive
        </button>
      </div>
      <div>
        <span className="text-xl font-semibold">Interactive Complete!</span>
      </div>
      <div className="mb-8 mt-4 text-lg">
        <span>Scroll to continue.</span>
      </div>
    </div>
  );
}
