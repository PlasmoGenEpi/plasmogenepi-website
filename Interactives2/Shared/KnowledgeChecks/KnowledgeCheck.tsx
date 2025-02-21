export default function KnowledgeCheck({
  headerText,
  classNames,
  answers,
}: {
  answers: {
    answerText: string;
    selected: boolean;
    correct: boolean;
  }[];
  headerText: string;
  classNames: {
    container: string;
    headerText: string;
  };
}) {
  return (
    <div role="radiogroup" className={classNames.container}>
      <h4 className={classNames.headerText}>{headerText}</h4>
    </div>
  );
}
