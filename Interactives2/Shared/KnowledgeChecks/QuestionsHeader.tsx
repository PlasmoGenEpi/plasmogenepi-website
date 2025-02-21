export default function QuestionsHeader({ className }: { className: string }) {
  return (
    <div
      className={`${className ? className : ""} flex flex-col gap-2 text-center md:text-left`}
    >
      <h2 className="text-xl font-bold">Questions</h2>
    </div>
  );
}
