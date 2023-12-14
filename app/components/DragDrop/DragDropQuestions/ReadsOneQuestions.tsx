import { readOneQuestionsAtom } from "@/store";
import { useAtom } from "jotai";

export default function ReadsOneQuestions() {
  const [readOneQuestions, setReadOneQuestions] = useAtom(readOneQuestionsAtom);
  return (
    <div className="flex flex-col gap-8 font-bold">
      <div>
        <p className="mb-2 ">
          How many loci do we have reads for in this example?
        </p>
        <div className="grid grid-cols-2 gap-y-4">
          <div className="flex gap-4">
            <input
              style={{
                accentColor: "green",
              }}
              onChange={(e) => {
                if (!readOneQuestions[1].oneChecked) {
                  setReadOneQuestions({
                    ...readOneQuestions,
                    1: {
                      ...readOneQuestions[1],
                      oneChecked: true,
                    },
                  });
                }
              }}
              checked={readOneQuestions[1].oneChecked}
              type="checkbox"
            ></input>
            <span>2</span>
          </div>
          <div className="flex gap-4">
            <input
              style={{
                accentColor: "red",
              }}
              disabled={readOneQuestions[1].oneChecked}
              checked={readOneQuestions[1].twoChecked}
              onChange={(e) => {
                if (!readOneQuestions[1].twoChecked) {
                  setReadOneQuestions({
                    ...readOneQuestions,
                    1: {
                      ...readOneQuestions[1],
                      twoChecked: true,
                    },
                  });
                }
              }}
              type="checkbox"
            ></input>
            <span>4</span>
          </div>{" "}
          <div className="flex gap-4">
            <input
              style={{
                accentColor: "red",
              }}
              disabled={readOneQuestions[1].oneChecked}
              checked={readOneQuestions[1].threeChecked}
              onChange={(e) => {
                if (!readOneQuestions[1].threeChecked) {
                  setReadOneQuestions({
                    ...readOneQuestions,
                    1: {
                      ...readOneQuestions[1],
                      threeChecked: true,
                    },
                  });
                }
              }}
              type="checkbox"
            ></input>
            <span>6</span>
          </div>
          <div className="flex gap-4">
            <input
              style={{
                accentColor: "red",
              }}
              disabled={readOneQuestions[1].oneChecked}
              checked={readOneQuestions[1].fourChecked}
              onChange={(e) => {
                if (!readOneQuestions[1].fourChecked) {
                  setReadOneQuestions({
                    ...readOneQuestions,
                    1: {
                      ...readOneQuestions[1],
                      fourChecked: true,
                    },
                  });
                }
              }}
              type="checkbox"
            ></input>
            <span>10</span>
          </div>
        </div>
      </div>
      {readOneQuestions[1].oneChecked && (
        <div className="fadeIn500">
          <p className="mb-2 ">How many reads are there in each locus? </p>
          <div className="grid grid-cols-2 gap-y-4">
            <div className="flex gap-4">
              <input
                style={{
                  accentColor: "red",
                }}
                disabled={readOneQuestions[2].twoChecked}
                checked={readOneQuestions[2].oneChecked}
                onChange={(e) => {
                  if (!readOneQuestions[2].oneChecked) {
                    setReadOneQuestions({
                      ...readOneQuestions,
                      2: {
                        ...readOneQuestions[2],
                        oneChecked: true,
                      },
                    });
                  }
                }}
                type="checkbox"
              ></input>
              <span>5, 5</span>
            </div>{" "}
            <div className="flex gap-4">
              <input
                style={{
                  accentColor: "green",
                }}
                checked={readOneQuestions[2].twoChecked}
                onChange={(e) => {
                  if (!readOneQuestions[2].twoChecked) {
                    setReadOneQuestions({
                      ...readOneQuestions,
                      2: {
                        ...readOneQuestions[2],
                        twoChecked: true,
                      },
                    });
                  }
                }}
                type="checkbox"
              ></input>
              <span>6, 4</span>
            </div>
            <div className="flex gap-4">
              <input
                style={{
                  accentColor: "red",
                }}
                disabled={readOneQuestions[2].twoChecked}
                checked={readOneQuestions[2].threeChecked}
                onChange={(e) => {
                  if (!readOneQuestions[2].threeChecked) {
                    setReadOneQuestions({
                      ...readOneQuestions,
                      2: {
                        ...readOneQuestions[2],
                        threeChecked: true,
                      },
                    });
                  }
                }}
                type="checkbox"
              ></input>
              <span>10, 0</span>
            </div>
            <div className="flex gap-4">
              <input
                style={{
                  accentColor: "red",
                }}
                disabled={readOneQuestions[2].twoChecked}
                checked={readOneQuestions[2].fourChecked}
                onChange={(e) => {
                  if (!readOneQuestions[2].fourChecked) {
                    setReadOneQuestions({
                      ...readOneQuestions,
                      2: {
                        ...readOneQuestions[2],
                        fourChecked: true,
                      },
                    });
                  }
                }}
                type="checkbox"
              ></input>
              <span>0, 10</span>
            </div>
          </div>
        </div>
      )}
      {readOneQuestions[2].twoChecked && (
        <div className="slideUp">
          <h2 className="text-center font-bold underline underline-offset-2">
            Concept Introduced
          </h2>
          <p className="mt-2 font-normal">
            This is what we call sequencing depth: we have a depth of 6 reads in
            locus 1 and 4 reads in locus 2.
          </p>
        </div>
      )}
    </div>
  );
}
