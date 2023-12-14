import ReadsOneQuestions from "./DragDropQuestions/ReadsOneQuestions";

export default function QuestionsContainer() {
  return (
    <div className="absolute bottom-0 left-0 top-0 z-50 flex w-[320px] flex-col bg-white py-8 pr-4">
      <ReadsOneQuestions />
    </div>
  );
}
